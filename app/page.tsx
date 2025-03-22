import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100px-5 relative flex min-h-dvh flex-col items-center justify-center gap-6 bg-slate-950 py-20 text-center text-gray-900 md:text-start lg:gap-12">
      <Image
        src="AILogo.svg"
        alt=""
        width={2000}
        height={2000}
        className="absolute -top-20 z-0 max-h-[125vh] opacity-5 lg:-top-60"
      />
      <Image
        src="/AIResumeLogo.svg"
        alt=""
        width={160}
        height={160}
        className="z-10"
      />
      <h1 className="z-10 scroll-m-20 px-2 text-center text-4xl text-white lg:text-5xl">
        Effortless resumes, built professionally
      </h1>
      <p className="z-10 px-2 text-center text-lg text-gray-300">
        The AI features you need to take your resume from the basic leagues to
        the big time.
      </p>
      <Button
        asChild
        size="lg"
        className="z-10 rounded-full border border-slate-500/50 bg-slate-800/90 hover:bg-slate-500/90"
      >
        <Link href="/resumes">Get started</Link>
      </Button>
      <Image
        src="/Screenshot.png"
        alt=""
        width={2000}
        height={2000}
        className="relative -top-12 md:-top-32 lg:-top-60 xl:-top-[360px]"
      />
      <p className="py-4 text-sm text-gray-300">© Sergio Correia 2025</p>
    </main>
  );
}
