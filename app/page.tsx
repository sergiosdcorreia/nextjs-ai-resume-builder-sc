import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100px-5 flex min-h-dvh flex-col items-center justify-center gap-6 bg-gray-700 px-5 py-12 text-center text-gray-900 md:text-start lg:gap-12">
      <div className="max-w-prose space-y-3 text-5xl font-semibold text-orange-500">
        AI Resume Builder
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
        Create a{" "}
        <span className="inline-block bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Perfect Resume
        </span>{" "}
        in minutes
      </h1>
      <p className="text-lg text-gray-300">
        The <span className="font-bold">AI Resume Builder</span> that helps you
        design a professional resume.
      </p>
      <Button asChild size="lg" variant="premium">
        <Link href="/resumes">Get started</Link>
      </Button>
    </main>
  );
}
