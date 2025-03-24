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
        className="z-10 w-[20%] max-w-[160px]"
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
      <div className="relative mx-4 my-8 w-[90%] md:mx-10 lg:mx-20">
        <div className="absolute right-0 top-0 h-[60%] w-[60%] bg-[#0369A1] blur-[100px] md:blur-[200px] lg:blur-[400px]" />
        <div className="absolute bottom-0 left-0 h-[60%] w-[60%] bg-[#0D9488] blur-[100px] md:blur-[200px] lg:blur-[400px]" />
        <Image
          src="/ScreenshotNoBG.png"
          alt=""
          width={2000}
          height={2000}
          className="relative z-10"
        />
      </div>
      <p className="py-4 text-sm text-gray-300">© Sergio Correia 2025</p>
    </main>
  );
}
