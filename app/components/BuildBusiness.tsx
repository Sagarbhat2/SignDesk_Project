import DroupDown from "./DroupDowm"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 py-8 lg:py-16">

      <div className="flex flex-col items-center text-center space-y-6 lg:space-y-9 max-w-6xl mx-auto">
        <div className="relative">
          <div className="h-[45px] w-[45px] rounded-full bg-[#2D00DE67] absolute -top-4 -left-6 lg:-left-8"></div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
            Built for Businesses That Don't <br className="hidden md:block" />
            <span className="block md:inline md:pl-4 lg:pl-8">Have Time for Mistakes</span>
          </h1>
        </div>

        <div className="max-w-4xl">
          <p className="text-lg md:text-xl lg:text-2xl text-[#000000] leading-relaxed">
            Whether you're managing 50 contracts a month or 5,000, Melento scales with your operations. We meet you{" "}
            <br className="hidden lg:block" />
            where you are! Perfect for regulated industries, high-volume contract environments, and fast-moving teams.
          </p>
        </div>

        <button className="w-[220px] h-[50px] text-[#FFFFFF] font-bold bg-[#3B19EB] hover:bg-blue-950 rounded-2xl transition-colors duration-200">
          Get Started For Free
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <DroupDown />
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Image
              src="/Images/Graph2.svg"
              alt="Graph2"
              height={352}
              width={560}
              className="w-full max-w-[560px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
