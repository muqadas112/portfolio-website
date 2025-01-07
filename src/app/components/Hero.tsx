/* eslint-disable react/no-unescaped-entities */

import React from "react"

const Hero = () => {
return(
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-left lg:bg-[15%] bg-cover"
    style={{backgroundSize: "35%"}}
    >
    <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center
        items-center ">
            <div>
                <p data-aos= "zoom-in-up">I'm</p>
                <p data-aos= "zoom-in-up">Muqadas</p>
                <p data-aos= "zoom-in-up">Talib</p>
            </div>
        </div>
    </div>
    
    
        </div>

)
 }
 export default Hero