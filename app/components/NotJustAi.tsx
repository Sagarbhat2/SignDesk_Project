import Image from "next/image"

export default function NotJustAi() {
    return (
        <div className="flex h-auto min-h-screen w-full flex-col md:h-[961px] md:flex-row bg-[#E9FFA3]/50 relative overflow-hidden px-4 py-10 md:py-0">

            <div className="bg-gradient-to-r from-[#4A1AB3] to-[#71428E] h-auto md:h-[499px] w-full md:w-[646px]  rounded-2xl relative md:top-20 md:left-66 overflow-hidden mx-auto md:mx-0 mb-8 md:mb-0">
                <div className="">
                    <h1 className="text-[#FFFFFF] text-2xl md:text-4xl font-bold p-6 md:p-10">
                        This isn't generic AI— <br />
                        it's trained on your business,your<br />
                        rules, and your priorities.
                    </h1>

                    <div className="h-px w-[90%] md:w-55 bg-white relative md:left-9 mx-auto md:mx-0"></div>
                    <h3 className="text-lg md:text-xl font-bold text-[#FFFFFF] pt-1 pl-6 md:pl-15 flex items-center">
                        Get Started <span className="text-white text-3xl md:text-4xl relative  ml-2">→</span>
                    </h3>
                </div>
                <div className="pl-6 md:pl-24 pt-6 md:pt-10 relative md:left-9">
                    <Image
                        src="/Images/Graph1.svg"
                        alt="GraphPicture"
                        height={200}
                        width={600}
                        className="w-full max-w-[600px] h-auto"
                    />
                </div>
            </div>

            <div className="flex flex-row gap-4 md:gap-6 justify-center md:justify-start relative md:left-74 md:top-20 mb-8 md:mb-0">
                <div className="w-[120px] md:w-[157px] h-[300px] md:h-[490px] rounded-3xl flex items-center justify-center bg-gradient-to-b from-[#002893] to-[#001021]">
                    <Image src="/Images/R1.svg" alt="R1" height={49} width={50} className="w-10 h-10 md:w-auto md:h-auto" />
                </div>
                <div className="w-[120px] md:w-[157px] h-[300px] md:h-[490px] rounded-3xl flex items-center justify-center bg-gradient-to-b from-[#002893] to-[#001021]">
                    <Image src="/Images/R2.svg" alt="R2" height={62} width={62} className="w-10 h-10 md:w-auto md:h-auto" />
                </div>
            </div>

            <div className="flex justify-center gap-4 md:gap-0 w-full md:w-auto">
                <div className="h-12 w-12 md:h-20 md:w-20 relative md:top-[650px] md:right-78 rounded-full border border-black">
                    <p className="flex justify-center items-center text-3xl md:text-6xl relative top-1">←</p>
                </div>
                <div className="h-12 w-12 md:h-20 md:w-20 relative md:top-[650px] md:right-58 rounded-full border border-black">
                    <span className="flex justify-center items-center text-3xl md:text-6xl relative top-1">→</span>
                </div>
            </div>

            <div className="w-full md:absolute flex flex-col md:flex-row items-center justify-center md:left-18 md:top-[800px] mt-8 md:mt-0 gap-2 md:gap-4 px-4">
                <Image src="/Images/Star.svg" alt="R2" height={33} width={33} className="w-6 h-6 md:w-auto md:h-auto" />
                <h1 className="text-2xl md:text-5xl text-[#000000] font-bold text-center md:text-left">
                    This isn't generic AI—it's trained on your business,
                    <br className="hidden md:block" />
                    your rules, and your priorities.
                </h1>
            </div>
        </div>
    )
}
