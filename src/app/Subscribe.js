import React from "react";
export default function Subscribe(){
    return(
        <div className="py-20 px-40 ">
            <div className="w-full h-[407px] flex flex-col justify-center items-center relative bg-cover bg-center px-24 space-y-10" style={{ backgroundImage: "url('/Group5.png')" }}>
               <div className="font-poppins text-center text-3xl font-semibold text-indigo-900">Subscribe to get information, latest news and other
               interesting offers about Cobham</div>
               <div className="flex justify-center space-x-7">
                <input type="email" placeholder="Your email" className="py-2 w-96 px-7 rounded-md"></input>
                <button className="bg-red-400 px-9 py-2 text-white rounded-md">Subscribe</button>
               </div>
               <div className="absolute top-[-70px] right-[-30px]">
                <img src="Group6.png"></img>

               </div>
            </div>
        </div>
    )

}