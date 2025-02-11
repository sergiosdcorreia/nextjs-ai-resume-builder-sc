"use server";

import { canCreateResume, canUseCustomizations } from "@/lib/permissions";
import prisma from "@/lib/prisma";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import { resumeSchema, ResumeValues } from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";
import { del, put } from "@vercel/blob";
import path from "path";

export async function saveResume(values: ResumeValues) {
  const { id } = values;

  const { photo, workExperiences, educations, ...resumeValues } =
    resumeSchema.parse(values);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const subscriptionLevel = await getUserSubscriptionLevel(userId);

  if (!id) {
    const resumeCount = await prisma.resume.count({
      where: { userId },
    });

    if (!canCreateResume(subscriptionLevel, resumeCount)) {
      throw new Error("Maximum resume count reached for this subscription.");
    }
  }

  const existingResume = id
    ? await prisma.resume.findUnique({ where: { id, userId } })
    : null;

  if (id && !existingResume) {
    throw new Error("Resume not found");
  }

  const hasCustomizations =
    (resumeValues.borderStyle &&
      resumeValues.borderStyle !== existingResume?.borderStyle) ||
    (resumeValues.colorHex &&
      resumeValues.colorHex !== existingResume?.colorHex);

  if (hasCustomizations && !canUseCustomizations(subscriptionLevel)) {
    throw new Error("Customizations not allowed for this subscription.");
  }

  let newPhotoUrl: string | undefined | null = undefined;

  if (photo instanceof File) {
    if (existingResume?.photoUrl) {
      await del(existingResume.photoUrl);
    }

    const blob = await put(`resume_photos/${path.extname(photo.name)}`, photo, {
      access: "public",
    });

    newPhotoUrl = blob.url;
  } else if (photo === null) {
    if (existingResume?.photoUrl) {
      await del(existingResume.photoUrl);
    }
    newPhotoUrl = null;
  }

  // Save in database
  if (id) {
    return (
      prisma.resume.update({
        where: { id },
        data: {
          ...resumeValues,
          photoUrl: newPhotoUrl,
          workExperiences: {
            deleteMany: {},
            create: workExperiences?.map((experience) => ({
              ...experience,
              startDate: experience.startDate
                ? new Date(experience.startDate)
                : undefined,
              endDate: experience.endDate
                ? new Date(experience.endDate)
                : undefined,
            })),
          },
          educations: {
            deleteMany: {},
            create: educations?.map((education) => ({
              ...education,
              startDate: education.startDate
                ? new Date(education.startDate)
                : undefined,
              endDate: education.endDate
                ? new Date(education.endDate)
                : undefined,
            })),
          },
          updatedAt: new Date(),
        },
      }) || []
    );
  } else {
    return prisma.resume.create({
      data: {
        ...resumeValues,
        userId,
        photoUrl: newPhotoUrl,
        workExperiences: {
          create: workExperiences?.map((experience) => ({
            ...experience,
            startDate: experience.startDate
              ? new Date(experience.startDate)
              : undefined,
            endDate: experience.endDate
              ? new Date(experience.endDate)
              : undefined,
          })),
        },
        educations: {
          create:
            educations?.map((education) => ({
              ...education,
              startDate: education.startDate
                ? new Date(education.startDate)
                : undefined,
              endDate: education.endDate
                ? new Date(education.endDate)
                : undefined,
            })) || [],
        },
      },
    });
  }
}
