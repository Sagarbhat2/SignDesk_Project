import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F5] px-6 md:px-28 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <Image src="/Images/logo.png" alt="Logo" width={214} height={48} />
          <div className="mt-8">
            <p className="text-[#000000] border border-black rounded-md px-10 py-3.5 text-sm font-medium w-fit md:w-[290px]">
              United States
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-[#3B19EB] text-xl font-bold mb-4 text-center md:text-left">
            Company
          </h3>
          <ul className="space-y-3 text-[#09090B]">
            <li>About Us</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#3B19EB] text-xl font-bold mb-4 text-center md:text-left">
            Support
          </h3>
          <div className="flex gap-6 pt-1 justify-center md:justify-start">
            <Image src="/Images/instagram.png" alt="Instagram" width={26} height={26} />
            <Image src="/Images/linkedin.png" alt="LinkedIn" width={26} height={26} />
            <Image src="/Images/youtube.png" alt="YouTube" width={26} height={26} />
          </div>
        </div>

        <div className="hidden md:block relative top-2">
          <Image src="/Images/Home.png" alt="Home" width={55} height={55} />
        </div>
      </div>

      <div className="w-full h-px bg-[#C2C2C2] my-10" />

      <div className="flex flex-col md:flex-row justify-end gap-6 md:pr-28">
        <div className="flex gap-3 mb-6 md:mb-0">
          <div className=" pt-9 space-y-4">
            <Image className="" src="/Images/Path1.svg" alt="Phone" width={20} height={20} />
            <Image src="/Images/Path2.png" alt="Mail" width={20} height={20} />
          </div>
          <div>
            <h3 className="text-[#3B19EB] text-xl font-bold mb-1">Reach Us</h3>
            <ul className="space-y-3 text-[#09090B]">
              <li>(888) 501-8466</li>
              <li>sales@melento.com</li>
            </ul>
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-3">
          <div className="pt-1">
            <Image src="/Images/location.svg" alt="Location" width={20} height={20} />
          </div>
          <div>
            <h3 className="text-[#3B19EB] text-xl font-bold mb-1">USA</h3>
            <ul className="text-[#09090B]">
              <li>2400 Old Brick Rd, Suite #</li>
              <li>173, Glen Allen, VA 23060.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-center md:text-left gap-4">
        <p>© Copyright by DeskNine Pvt. Ltd. All Rights Reserved</p>
        <div className="flex gap-6">
          <span className="hover:underline cursor-pointer">Term and Conditions</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
