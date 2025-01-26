import React from "react";
export default function Header()
{
    return (
        <div className="relative z-10 flex px-40 items-center justify-center">
            <div className="flex flex-col space-y-4">
                <div className="text-red-500 font-poppins text-sm font-bold">BEST DESTINATIONS AROUND THE WORLD</div>
                <div className="relative font-volkhov text-blue-950 text-7xl font-bold">
                    <div className="relative z-10">Travel, enjoy <br></br> and live a new <br></br> and full life</div>
                    <div className="absolute top-14 left-[220px]">
                        <img src="Decore1.png"></img>
                    </div>
                </div>
                <div className="text-xs font-poppins">Built Wicket longer admire do barton vanity itself do in it.<br></br>
                     Preferred to sportsmen it engrossed listening. Park gate <br></br>
                      sell they west hard for the.
                </div>
                <div className="flex items-center space-x-5">
                    <button className="rounded text-sm p-2 hover:bg-yellow-500 text-white bg-yellow-400">Find out more</button>
                    <button className="flex items-center justify-center h-16">
                     <img src="button.png" className="object-contain h-full mt-4 w-auto mr-[-5px]" alt="Button" />
                    <div className="text-sm">Play Demo</div>
                    </button>

                </div>

            </div>
            <div className="h-[600px]">
                <img src="img.png" className="object-contain h-full w-auto"></img>
            </div>
        </div>
    )
}