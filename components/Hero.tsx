import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <>
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
      ;
    </>
  );
}
