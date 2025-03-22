import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100px-5 relative flex min-h-dvh flex-col items-center justify-center gap-6 bg-slate-950 px-5 py-12 text-center text-gray-900 md:text-start lg:gap-12">
      <Image
        src="AILogo.svg"
        alt=""
        width={2000}
        height={2000}
        className="absolute -top-60 z-0 max-h-[125vh] opacity-5"
      />
      <Image
        src="/AIResumeLogo.svg"
        alt=""
        width={160}
        height={160}
        className="z-10"
      />
      <h1 className="z-10 scroll-m-20 text-center text-4xl tracking-tight text-white lg:text-5xl">
        Effortless resumes, built
        <br /> professionally
      </h1>
      <p className="z-10 text-center text-lg text-gray-300">
        The AI features you need to take your resume from the basic
        <br /> leagues to the big time.
      </p>
      <Button asChild size="lg" variant="premium" className="z-10">
        <Link href="/resumes">Get started</Link>
      </Button>
    </main>
  );
}
