import Cards from "@/components/landing/Cards";
import Hero from "@/components/landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-6 bg-slate-950 py-20 text-center text-gray-900 md:text-start lg:gap-12">
      <section className="relative flex h-[70vh] flex-col items-center justify-center gap-6 lg:gap-12">
        <Hero />
      </section>
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
      <section className="w-full">
        <h2 className="z-10 mt-36 px-2 text-center text-4xl text-white lg:text-5xl">
          Upgrade your resume game
        </h2>
        <Cards />
      </section>
      <section className="relative flex flex-col items-center justify-center gap-6 lg:gap-12">
        <div className="absolute left-[50%] top-[50%] h-full w-full -translate-x-[50%] -translate-y-[50%] bg-[#0369A1] blur-[200px] lg:blur-[300px]" />
        <Hero />
      </section>
      <p className="py-4 text-sm text-gray-300">© Sergio Correia 2025</p>
    </main>
  );
}
