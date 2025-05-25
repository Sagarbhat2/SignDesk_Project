export default function OverImpact() {
    return (
        <div className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto lg:h-[678px] bg-gradient-to-l from-[#002CA3] to-[#000E77] rounded-2xl p-10 md:p-16 flex flex-col lg:flex-row gap-10 text-white relative">

                <div className="flex-1 flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Impact</h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        This is more than automation. <br />
                        This is operational clarity—with ROI <br />
                        from day one.
                    </p>
                    <button className="bg-[#D5DE47] text-[#1D1D1D] px-6 py-3 font-bold rounded-2xl w-fit">
                        Ready to Work Smarter?
                    </button>
                </div>

                <div className="flex-1 relative flex items-center justify-center">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
                    <div className="absolute left-1/2 top-0 h-full w-px bg-white"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#D5DE47]"></div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full max-w-md text-center z-10 ">
                        <div className="space-y-10 pb-6 relative top-12 " >
                            <h2 className="text-4xl font-bold">90%</h2>
                            <p className="text-base mt-2">Reduction in manual <br /> contract errors</p>
                        </div>
                        <div className="space-y-10 pb-6  relative top-12 ">
                            <h2 className="text-4xl font-bold">2x</h2>
                            <p className="text-base mt-2">Volume handled without <br /> extra headcount</p>
                        </div>
                        <div className="space-y-10 pt-20 relative bottom-8">
                            <h2 className="text-4xl font-bold">60%</h2>
                            <p className="text-base mt-2">Faster TAT on legal and <br /> vendor agreements</p>
                        </div>
                        <div className="space-y-10 pt-20 relative bottom-8">
                            <h2 className="text-4xl font-bold ">100%</h2>
                            <p className="text-base mt-2">Traceability with built-in <br /> audit trails</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
