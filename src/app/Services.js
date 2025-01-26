import React from "react";
export default function Services () {
    return (
        <div className="relative py-20 px-40 flex flex-col items-center">
            <div className="text-blue-950 font-poppins text-lg mb-2">CATEGORY</div>
            <div className="text-blue-950 font-poppins text-4xl font-bold mb-2">We Offer Best Services</div>
            <div className="my-4 flex justify-between w-full">
               <div className="relative p-4 h-[227px] w-[190px]  flex flex-col items-center justify-center space-y-3">
                <div className="h-16 ">
                    <img src="Group.png" className="object-container h-full w-auto"></img>
                </div>
                <div className="text-blue-950 font-bold">Calculated Weather</div>
                <div className="text-blue-950 text-sm text-center">Built Wicket longer admire do barton vanity itself do in it.</div>
               </div>
               <div className="relative z-10 rounded-lg shadow-[-4px_6px_10px_rgba(0,0,0,0.2)] h-[227px] w-[190px] bg-white flex flex-col items-center">
                <div className="h-32 mt-[-10px]">
                    <img src="Group2.png" className="object-container h-full w-auto"></img>
                </div>
                <div className="text-blue-950 font-bold mt-[-13px] mb-3">Best Flights</div>
                <div className="text-blue-950 text-sm text-center">Engrossed listening.<br></br> Park gate sell they west hard for the.</div>
               </div>
               <div className="absolute left-[400px] top-[350px] z-0">
                   <img src="Rectangle.png" className="relative object-contain w-20 h-20 z-0" />
               </div>
               <div className="relative p-4 h-[227px] w-[190px]  flex flex-col items-center justify-center space-y-3">
                <div className="h-16 ">
                    <img src="Group3.png" className="object-container h-full w-auto"></img>
                </div>
                <div className="text-blue-950 font-bold">Local Events</div>
                <div className="text-blue-950 text-sm text-center">Barton vanity itself do in it. Preferd to men it engrossed listening.</div>
               </div>
               <div className="relative p-4 h-[227px] w-[190px]  flex flex-col items-center justify-center space-y-3">
                <div className="h-16 ">
                    <img src="Group4.png" className="object-container h-full w-auto"></img>
                </div>
                <div className="text-blue-950 font-bold">Customization</div>
                <div className="text-blue-950 text-sm text-center">We deliver outsourced aviation services for military customers</div>
               </div>
            </div>
        </div>
    )
}