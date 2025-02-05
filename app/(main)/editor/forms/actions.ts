"use server";

import openai from "@/lib/openai";
import { GenerateSummaryInput, generateSummarySchema } from "@/lib/validation";

export async function generateSummary(input: GenerateSummaryInput) {
  // TODO: Block for non-premium users

  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input);

  const systemMessage = `
    You are an expert job resume generator AI. Your task is to write a very professional introduction summary for a resume given the user's provided data.
    Only return the summary and do not include any other information in the response. Keep it concise and professional.
  `;

  const userMessage = `
    Please generate a professional resume summary from this data:

    Job title: ${jobTitle || "N/A"}
    
    Work experience:
    ${workExperiences
      ?.map(
        (exp) => `
      Position: ${exp.position || "N/A"} at ${exp.company || "N/A"} from ${exp.startDate || "N/A"} to ${exp.endDate || "Present"}

      Description:
      ${exp.description || "N/A"}
      `,
      )
      .join("\n\n")}

    Educations:
    ${educations
      ?.map(
        (edu) => `
      Position: ${edu.degree || "N/A"} at ${edu.school || "N/A"} from ${edu.startDate || "N/A"} to ${edu.endDate || "Present"}
      `,
      )
      .join("\n\n")}

    Skills:
    ${skills}
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;

  if (!aiResponse) {
    throw new Error("Failed to generate AI response");
  }

  return aiResponse;
}
