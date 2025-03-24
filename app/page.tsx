"use client";

import Cards from "@/components/landing/Cards";
import Hero from "@/components/landing/Hero";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const screenshotRef = useRef(null);
  const cardsRef = useRef(null);
  const upgradeTextRef = useRef(null);
  const secondHeroRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 5,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(screenshotRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: screenshotRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(upgradeTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: upgradeTextRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    ScrollTrigger.create({
      trigger: cardsRef.current,
      start: "top 80%",
      animation: gsap.from(".card", {
        opacity: 0,
        y: 50,
        stagger: 0.4,
        duration: 1,
      }),
      once: true,
    });

    ScrollTrigger.create({
      trigger: secondHeroRef.current,
      start: "top 80%",
      animation: gsap.from(secondHeroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      }),
      once: true,
    });
  });

  return (
    <main className="relative flex flex-col items-center justify-center gap-6 bg-slate-950 py-20 text-center text-gray-900 md:text-start lg:gap-12">
      <section
        ref={heroRef}
        className="relative flex h-[70vh] flex-col items-center justify-center gap-6 lg:gap-12"
      >
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
          ref={screenshotRef}
        />
      </div>
      <section className="w-full">
        <h2
          ref={upgradeTextRef}
          className="z-10 mt-36 px-2 text-center text-4xl text-white lg:text-5xl"
        >
          Upgrade your resume game
        </h2>
        <div ref={cardsRef}>
          <Cards />
        </div>
      </section>
      <section
        ref={secondHeroRef}
        className="relative flex flex-col items-center justify-center gap-6 lg:gap-12"
      >
        <div className="absolute left-[50%] top-[50%] h-full w-full -translate-x-[50%] -translate-y-[50%] bg-[#0369A1] blur-[200px] lg:blur-[300px]" />
        <Hero />
      </section>
      <p className="py-4 text-sm text-gray-300">© Sergio Correia 2025</p>
    </main>
  );
}
