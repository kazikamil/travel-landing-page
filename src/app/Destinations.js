import React from "react";
export default function Destinations() {
    return (
        <div className="relative py-20 px-40 flex flex-col items-center">
            <div className="text-blue-950 font-poppins text-lg mb-2">Top Selling</div>
            <div className="text-blue-950 font-poppins text-4xl font-bold mb-2">Top Destinations</div>
            <div className="my-4 flex justify-between w-full relative">
                <div className="w-[315px] relative z-10 h-[457px] shadow-[0px_6px_0px_rgba(0,0,0,0.1)]  rounded-lg">
                    <div className="h-3/4 w-full ">
                        <img src="Rectangle2.png" className=" h-full w-full "></img>
                    </div>
                    <div className="px-7 h-1/4 w-full ">
                       <div className=" pt-7 flex justify-between font-semibold font-poppins text-blue-950">
                         <div>Rome, Italy</div>
                         <div>$5,42k</div>
                       </div>
                       <div className="pt-4 flex space-x-4 font-poppins text-blue-950">
                        <img src="navigation.png"></img>
                        <div>10 Days Trip</div>
                       </div>
                    </div>
                </div>
                <div className="w-[315px] h-[457px] shadow-[0px_6px_0px_rgba(0,0,0,0.1)]  rounded-lg">
                    <div className="h-3/4 w-full ">
                        <img src="Rectangle3.jpg" className="h-full w-full"></img>
                    </div>
                    <div className="px-7 h-1/4 w-full">
                       <div className="pt-7 flex justify-between font-poppins font-semibold text-blue-950">
                         <div>London, UK</div>
                         <div>$4,2k</div>
                       </div>
                       <div className="pt-4 flex space-x-4 font-poppins text-blue-950">
                        <img src="navigation.png"></img>
                        <div>12 Days Trip</div>
                       </div>
                    </div>
                </div>
                <div className="relative z-10 w-[315px] h-[457px] shadow-[0px_6px_0px_rgba(0,0,0,0.1)]  rounded-lg">
                    <div className="h-3/4 w-full ">
                        <img src="Rectangle4.png" className="h-full w-full"></img>
                    </div>
                    <div className="px-7 bg-white h-1/4 w-full">
                       <div className="pt-7 flex justify-between font-semibold font-poppins text-blue-950">
                         <div>Full Europe</div>
                         <div>$15k</div>
                       </div>
                       <div className="pt-4 relative z-10 flex space-x-4 font-poppins text-blue-950">
                        <img src="navigation.png"></img>
                        <div>28 Days Trip</div>
                       </div>
                    </div> 
                </div>
                <div className="absolute z-0 right-[-50px] top-32">
                   <img src="Decore2.png" className="relative z-0"></img>
                </div>
            </div>
        </div>
    )
}