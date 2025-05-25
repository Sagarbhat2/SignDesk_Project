import Image from "next/image";

export default function Logos() {
  return (
    <div className="w-full bg-white py-8">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-24 px-4">
        <Image src="/Images/L1.png" alt="L1" width={100} height={60} />
        <Image src="/Images/N1.png" alt="N1" width={100} height={60} />
        <Image src="/Images/St1.png" alt="St1" width={100} height={60} />
        <Image src="/Images/S1.png" alt="S1" width={100} height={60} />
        <Image src="/Images/Ben1.png" alt="Ben1" width={100} height={60} />
        <Image src="/Images/V1.png" alt="V1" width={100} height={60} />
        <Image src="/Images/H1.png" alt="H1" width={100} height={60} />
      </div>
    </div>
  );
}
