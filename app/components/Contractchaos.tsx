import Boxes from "./Boxes";
import FreeTrail from "./FreeTrail";

export default function Contractchoas() {
    return (
        <div className="max-w-screen-2xl mx-auto h-[800px bg-[#FFFFFF]]">
            <div className="flex justify-center items-center pt-14">
                <div className="h-[45px] w-[45px] rounded-full relative bottom-2 left-6 bg-[#2D00DE67]"></div>
                <h1 className="text-5xl font-bold text-[#000000]">Contract Chaos Ends Here</h1>
            </div>

            <div className="w-[154px] h-[5px] relative top-3 left-[700px] bg-[#D5DE47]"></div><br />
            <h4 className="text-2xl text-[#000000] flex items-center justify-center">Still managing contracts across PDFs, word docs, shared drives, emails, and disconnected tools? That’s not <br />
                just slow—it’s risky. Melento brings order to the chaos. From drafting to renewal, Melento automates and <br />
                optimizes every stage of your contract lifecycle as a complete contract management solution.</h4>

            {/* 
            I have created the boxes as a separate component for better reusability. 
            If I tried to include the box logic in the same component, the entire component would need to run on the client side. 
            By separating it, I can keep the rest of the ContractChaos.jsx file running on the server. */}

            <Boxes />
            <FreeTrail />


        </div>
    )
}