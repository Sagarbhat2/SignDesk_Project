import Image from "next/image"
import Logos from "./Logos"

export default function HeroSection() {
    return (
       <section className="relative w-full h-screen bg-gradient-to-b from-[#0D0F3C] to-[#0A0B26] overflow-hidden">
      <Image
        src="/Images/MaskGroup.png"
        alt="Turtle with Rocket"
        layout="fill"
        objectFit="cover"
        priority
        className="opacity-90"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full max-w-7xl mx-auto px-6 md:px-12 lg:right-12">
        
        <div className="text-white max-w-xl text-center lg:text-left mt-10 lg:mt-0">    
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Smarter Contracts. <br /> Faster Business.
          </h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            Meet Melento—your AI-native collaborative intelligence platform (CIP) built to streamline contract workflows, manage risk, optimise costs and accelerate revenue.
          </p>
          <button className="mt-8 bg-[#F3F416] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-400 transition">
            Explore Solutions
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-sm text-gray-300 flex items-center gap-2 z-20">
        <p>Powered by</p>
        <Image src="/Images/signdesk.png" alt="SignDesk Logo" width={100} height={30} />
      </div>
     
    </section>
  )
}
