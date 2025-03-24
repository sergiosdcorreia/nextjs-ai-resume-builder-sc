import Image from "next/image";

export default function Cards() {
  return (
    <div className="mb-36 mt-20 grid w-full grid-cols-1 gap-16 p-2 xl:grid-cols-3 xl:p-10">
      <div className="mx-auto mt-10 w-full max-w-[500px] rounded-3xl border-[12px] border-white/20 bg-[#000A11] xl:mt-36">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#000A11] p-20">
          <div className="absolute -left-20 -top-40 h-[200%] w-[200%] opacity-5">
            <Image src="AILogo.svg" alt="" fill className="object-cover" />
          </div>
          <div className="absolute right-0 top-0 h-[30%] w-[50%] -translate-y-[30%] translate-x-[30%] bg-[#0D9488] blur-[130px]" />
          <div className="absolute bottom-0 left-0 h-[30%] w-[50%] -translate-x-[30%] translate-y-[30%] bg-[#0369A1] blur-[130px]" />
          <h3 className="relative z-10 scroll-m-20 px-2 text-center text-4xl text-white lg:text-5xl">
            Free
          </h3>
          <div className="relative z-10 mt-20 flex gap-2 text-lg text-gray-300">
            <Image src="check.svg" alt="" width={20} height={20} />1 resume
          </div>
          <div className="relative z-10 mb-60 mt-2 flex gap-2 text-lg text-gray-300 opacity-0">
            <Image src="check.svg" alt="" width={20} height={20} />1 resume
          </div>
          <div className="z-10 scroll-m-20 gap-2 text-center text-7xl font-bold text-gray-300">
            £0.00
          </div>
          <p className="mt-2 text-center text-gray-300 opacity-0">
            every 3 months
          </p>
        </div>
      </div>
      <div className="mx-auto h-fit w-full max-w-[500px] rounded-3xl border-[12px] border-white/20 bg-[#000A11]">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#082F49] p-20">
          <div className="absolute -left-20 -top-40 h-[200%] w-[200%] opacity-5">
            <Image src="AILogo.svg" alt="" fill className="object-cover" />
          </div>
          <div className="absolute right-0 top-0 h-[30%] w-[50%] -translate-y-[30%] translate-x-[30%] bg-[#0D9488] blur-[130px]" />
          <div className="absolute bottom-0 left-0 h-[30%] w-[50%] -translate-x-[30%] translate-y-[30%] bg-[#0369A1] blur-[130px]" />
          <h3 className="relative z-10 scroll-m-20 px-2 text-center text-4xl text-white lg:text-5xl">
            Premium Plus
          </h3>
          <div className="relative z-10 mt-20 flex gap-2 text-lg text-gray-300">
            <Image src="check.svg" alt="" width={20} height={20} />
            Infinite resume
          </div>
          <div className="relative z-10 mb-60 mt-2 flex gap-2 text-lg text-gray-300">
            <Image src="check.svg" alt="" width={20} height={20} />
            Custom design and themes
          </div>
          <div className="z-10 scroll-m-20 gap-2 text-center text-7xl font-bold text-gray-300">
            £4.99
          </div>
          <p className="mt-2 text-center text-gray-300">every 3 months</p>
        </div>
      </div>
      <div className="mx-auto mt-0 w-full max-w-[500px] rounded-3xl border-[12px] border-white/20 bg-[#000A11] xl:mt-36">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#082F49] p-20">
          <div className="absolute -left-20 -top-40 h-[200%] w-[200%] opacity-5">
            <Image src="AILogo.svg" alt="" fill className="object-cover" />
          </div>
          <div className="absolute right-0 top-0 h-[30%] w-[50%] -translate-y-[30%] translate-x-[30%] bg-[#0D9488] blur-[130px]" />
          <div className="absolute bottom-0 left-0 h-[30%] w-[50%] -translate-x-[30%] translate-y-[30%] bg-[#0369A1] blur-[130px]" />
          <h3 className="relative z-10 scroll-m-20 px-2 text-center text-4xl text-white lg:text-5xl">
            Premium
          </h3>
          <div className="relative z-10 mt-20 flex gap-2 text-lg text-gray-300">
            <Image src="check.svg" alt="" width={20} height={20} />
            AI tools
          </div>
          <div className="relative z-10 mb-60 mt-2 flex gap-2 text-lg text-gray-300">
            <Image src="check.svg" alt="" width={20} height={20} />
            Up to 3 resumes
          </div>
          <div className="z-10 scroll-m-20 gap-2 text-center text-7xl font-bold text-gray-300">
            £1.99
          </div>
          <p className="mt-2 text-center text-gray-300">every 3 months</p>
        </div>
      </div>
    </div>
  );
}
