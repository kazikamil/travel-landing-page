import React from "react";
export default function Footer(){
    return(
        <div className="pt-20 pb-10 px-40 flex justify-between space-x-4">
            <div className="h-48 w-1/5  p-2 flex flex-col space-y-6">
                <div>
                    <img src="Jadoo..png" className="h-3/4 w-auto"></img>
                </div>
                <div className="text-blue-950 text-xs font-poppins ">
                  Book your trip in minute, get full
                  Control for much longer.
                </div>
            </div>
            <div className="h-48 w-1/5  py-2 px-16 flex flex-col space-y-6">
                 <div className="font-poppins font-bold text-lg">Company</div>
                 <div className="flex flex-col space-y-2">
                  <div className="text-blue-950 font-poppins">About</div>
                  <div className="text-blue-950 font-poppins">Careers</div>
                  <div className="text-blue-950 font-poppins">Mobile</div>
                 </div>
            </div>
            <div className="h-48 w-1/5  py-2 px-16 flex flex-col space-y-6">
                 <div className="font-poppins font-bold text-lg">Contact</div>
                 <div className="flex flex-col space-y-2">
                  <div className="text-blue-950 font-poppins">Help/FAQ</div>
                  <div className="text-blue-950 font-poppins">Press</div>
                  <div className="text-blue-950 font-poppins">Affilates</div>
                 </div>
            </div>
            <div className="h-48 w-1/5  py-2 pl-12 pr-10 flex flex-col space-y-6">
                 <div className="font-poppins font-bold text-lg">More</div>
                 <div className="flex flex-col space-y-2">
                  <div className="text-blue-950 font-poppins">Airlinefees</div>
                  <div className="text-blue-950 font-poppins">Airline</div>
                  <div className="text-blue-950 font-poppins">Low fare tips</div>
                 </div>
            </div>
            <div className="relative h-48 w-1/5  py-2 items-center flex flex-col space-y-2">
                 <div className="flex justify-between px-2">
                    <div className="w-1/3">
                       <img src="Social2.png"></img>
                    </div>
                    <div className="w-1/3">
                       <img src="Social1.png"></img>
                    </div>
                    <div className="w-1/3">
                       <img src="Social.png"></img>
                    </div>
                 </div>
                 <div className="text-blue-950 font-poppins text-lg">Discover our app</div>
                 <div className="w-[210px] space-x-1 top-28 left-4 absolute flex justify-between">
                    <div className="w-1/2 h-auto">
                        <img src="GooglePlay.png"></img>
                    </div>
                    <div className="w-1/2 h-auto">
                        <img src="PlayStore.png"></img>
                    </div>
                 </div>
            </div>
        </div>
    )
}