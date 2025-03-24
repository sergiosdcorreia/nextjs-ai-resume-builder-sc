import Hero from "@/components/Hero";
import Image from "next/image";

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
      <Hero />
      <div className="relative mx-auto my-8 w-[95vw] max-w-[2000px] lg:w-[90vw]">
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
      <Hero />
      <p className="py-4 text-sm text-gray-300">© Sergio Correia 2025</p>
    </main>
  );
}
