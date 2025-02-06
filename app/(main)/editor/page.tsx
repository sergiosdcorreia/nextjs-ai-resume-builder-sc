import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { resumeDataInclude } from "@/lib/types";

interface PageProps {
  searchParams: { resumeId?: string };
}

export const metadata: Metadata = {
  title: "Design your resume",
};

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: PageProps) {
  const { resumeId } = searchParams;

  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where: { id: resumeId, userId },
        include: resumeDataInclude,
      })
    : null;

  return (
    <Suspense fallback={<LoaderCircle />}>
      <ResumeEditor resumeToEdit={resumeToEdit} />;
    </Suspense>
  );
}
