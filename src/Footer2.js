import React from "react";
import tictok from "./svgexport-59.svg";
import instagram from "./svgexport-60.svg";
import twitter from "./svgexport-61.svg";
import youtube from "./svgexport-62.svg";
import facebook from "./svgexport-63.svg";
import check from "./svgexport-64.svg";
import yesno from "./svgexport-65.svg";
import amazon from "./IMDb, an Amazon company.svg";

const Footer2 = () => {
  return (
    <>
        {
            window.innerWidth <= 1024 && (
        <div className="text-center ">
           <div className="bg-[#121212] py-3">
              <button className=" bg-[#f5c518] font-bold p-2 px-9 rounded-[5px] text-[14px]">Get the IMDb App</button>
           </div>
           <div className="bg-[#080808] py-3">
            <button className="text-[#5799ef] bg-[rgba(255,255,255,0.08)] font-bold p-2 px-9 rounded-[5px] text-[14px] ">Sign in for more access</button>
           </div>
            <div className="flex space-x-4 justify-center my-5 ">
                <div className="w-12 h-12 hover:bg-[rgba(255,255,255,0.07)] hover:rounded-full flex align-center justify-center"><img src={tictok} alt="" className="w-6"  title="TikTok"/></div>
                <div className="w-12 h-12 hover:bg-[rgba(255,255,255,0.07)] hover:rounded-full flex align-center justify-center"><img src={instagram} alt="" className="w-6" title="Instagram"/></div>
                <div className="w-12 h-12 hover:bg-[rgba(255,255,255,0.07)] hover:rounded-full flex align-center justify-center"><img src={twitter} alt="" className="w-6" title="Twitter"/></div>
                <div className="w-12 h-12 hover:bg-[rgba(255,255,255,0.07)] hover:rounded-full flex align-center justify-center"><img src={youtube} alt="" className="w-6" title="Youtube"/></div>
                <div className="w-12 h-12 hover:bg-[rgba(255,255,255,0.07)] hover:rounded-full flex align-center justify-center"><img src={facebook} alt="" className="w-6"  title="Facebook"/></div>
            </div>
            <ul className="flex space-x-8 justify-center my-2">
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Get the IMDb App</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Help</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Site Index</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">IMDbPro</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Box Office Mojo</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">IMDb Developer</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
            </ul>
            <ul className="flex space-x-8 justify-center my-4">
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Press Room</a></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Advertising</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Jobs</a>&nbsp;<img src={check} alt="" className="w-[10px]"/></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Conditions of Use</a></li>
                <li className="flex"><a href="#" className="text-white hover:underline font-semibold scale-y-[1.04]">Privacy Policy</a></li>
                <li className="flex"><img src={yesno} alt=""/>&nbsp;&nbsp;<a className="text-white hover:underline font-semibold tracking-wide">Your Ads Privacy Choices</a></li>
            </ul>
            <img src={amazon} alt="" className="mx-auto my-6 mt-9"/>
            <p className="text-white text-[13px] text-[rgba(255,255,255,0.6)] pb-6"><span className="text-[11px]">© </span>1990-2023 by IMDb.com, Inc.</p>
        </div>
            )
}
</>
  )
}

export default Footer2