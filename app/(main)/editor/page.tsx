import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Design your resume",
};

export default function Page() {
  return (
    <Suspense fallback={<LoaderCircle />}>
      <ResumeEditor />;
    </Suspense>
  );
}
