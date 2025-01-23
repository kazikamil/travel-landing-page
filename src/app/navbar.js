import React from "react"
export default function  Navbar() {
    return
    (
        <div className="flex pt-5 pb-2 px-10 justify-between space-x-7">
            <div>
                <img src="Logo.png"></img>
            </div>
            <li>
                <ul>Destinations</ul>
                <ul>Hotels</ul>
                <ul>Flights</ul>
                <ul>Bookings</ul>
                <ul>Login</ul>
                <ul>Sign up</ul>
                <ul>
                    <select>
                        <option value={'EN'}>EN</option>
                        <option value={'FR'}>FR</option>
                        <option value={'AR'}>AR</option>
                    </select>
                </ul>
            </li>

        </div>
    )


}