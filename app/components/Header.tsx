import Image from "next/image"

export default function Header() {
    return (
        <nav className="h-auto w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-4 gap-4">
                <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-4 md:gap-10">
                    <Image src="/Images/logo.png" width={112}  height={25} alt="Logo" className="mx-auto md:mx-0"/>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm font-medium text-gray-800">
                        <select className="bg-transparent rounded px-2 py-1">
                            <option>Products</option>
                            <option>About</option>
                            <option>Help</option>
                            <option>Logout</option>
                        </select>
                        <a href="#" className="hover:text-[#3B19EB] transition">About Us</a>
                        <a href="#" className="hover:text-[#3B19EB] transition">Pricing</a>
                    </div>
                </div>

                <div className="w-full md:w-auto text-center md:text-right">
                    <button className="bg-[#D5DE47] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#c3cb3f] transition">
                        Get it Free
                    </button>
                </div>
            </div>
        </nav>
    )
}
