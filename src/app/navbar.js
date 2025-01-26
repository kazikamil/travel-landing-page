import React from "react"
export default function  Navbar() {
    return (
        <div className="relative z-10 flex pt-5 pb-2 px-40 justify-between space-x-4">
            <div>
                <img src="Logo.png" className="h-3/4 mt-1/2"></img>
            </div>
            <li className="flex space-x-14 text-sm">
                <ul className="flex items-center justify-center">Destinations</ul>
                <ul className="flex items-center justify-center">Hotels</ul>
                <ul className="flex items-center justify-center">Flights</ul>
                <ul className="flex items-center justify-center ">Bookings</ul>
                <ul className="flex items-center justify-center pl-5">Login</ul>
                <ul className="rounded border flex items-center justify-center border-black px-3">Sign up</ul>
                <ul className="flex items-center justify-center">
                    <select className="bg-transparent">
                        <option value={'EN'}>EN</option>
                        <option value={'FR'}>FR</option>
                        <option value={'AR'}>AR</option>
                    </select>
                </ul>
            </li>

        </div>
    )


}