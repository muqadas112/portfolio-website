import React from "react"
import { CiMenuBurger } from "react-icons/ci";

const Navbar=()=>{
    return(
        <div className="container pt-8 pl-5">
            <div className="flex justify-between items-center">
                <div className="text-xl font-medium ">Muqadas Talib</div>
                <ul className="gap-10 lg:gap-16 hidden  md:flex">
                    <li className="menuLink"><a>Home</a></li>
                    <li className="menuLink"><a href="#about">About</a></li>
                    <li className="menuLink"><a href="#skills">Skills</a></li>
                    <li className="menuLink"><a href="#contact">Contact</a></li>
                </ul>
                <CiMenuBurger className="md:hidden"size={30} />

            </div>
        </div>

    )
}

export default Navbar