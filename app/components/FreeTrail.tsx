export default function FreeTrail() {
  return (
    <div
      className="w-full max-w-[1166px] h-auto md:h-[305px] p-6 md:p-16 relative rounded-2xl mx-auto md:bottom-38 flex flex-col items-center"
      style={{
        background: 'linear-gradient(  #2405CC ,#0E0170,#0E016E)',
      }}
    >
      <div className="flex justify-center text-center">
        <h1 className="text-xl md:text-5xl font-bold pb-4 md:pb-8 text-[#FFFFFF] leading-snug">
          All in one secure platform. What used to <br />
          <span className="md:pl-32"> take weeks now takes hours.</span>
        </h1> 
      </div>
      <button className="h-[50px] w-[220px] mt-6 md:mt-0 bg-[#D5DE47] text-[#1D1D1D]  font-bold rounded-2xl">
        Unlock Your Free Trial
      </button>
    </div>
  )
}
