import Image from "next/image";

export default function Review() {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8 lg:p-12 gap-8">
      <div className="relative flex-shrink-0">
        <Image src="/Images/Img1.svg" alt="Background" height={600} width={400} className="w-60 md:w-72 lg:w-[600px] relative md:right-58" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/Images/Person.png" alt="Person" width={180} height={180} className="rounded-full relative right-42 bottom-8" />
          <Image
            src="/Images/Img2.svg"
            alt="Quote"
            width={50}
            height={44}
            className="absolute bottom-42 right-7 "
          />
        </div>
      </div>

      <div className=" max-w-4xl border border-[#3B19EB] rounded-3xl md:h-[257px] md:w-[691px] px-6 py-8 relative md:-left-[350px] md:top-17 md:px-12 md:py-10">
        <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-center md:text-left">
          We saw a 60% drop in turnaround time and <br className="hidden md:block" />
          zero compliance misses.
        </p>
        <p className="font-bold relative left-48 md:pt-5 text-sm md:text-xl mt-4">
          - VP Operations, Financial Services Firm
        </p>
      </div>
    </div>




  );
}










{/* 
      <div className="max-w-4xl border border-[#3B19EB] h-[257px] md:w-[691px] rounded-3xl space-y-14 p-6 md:p-8 relative  right-88 top-16 text-center md:text-left">
        <p className="text-lg md:text-xl lg:text-2xl relative top-6 font-medium leading-relaxed">
          We saw a 60% drop in turnaround time and <br className="hidden md:block" />
          zero compliance misses.
        </p>
        <p className="font-bold relative left-40 text-sm md:text-xl mt-4">
          - VP Operations, Financial Services Firm
        </p>
      </div> */}