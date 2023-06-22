import DropDown2 from "../Dropdown/Dropdown"
import DropDown1 from "../Dropdown1/Dropdown1"
import Dropdown3 from "../Dropdown3/Dropdown3"

function Navbar(){
    return(
        <div className=" relative z-[1000]">
        <nav class="nav  hidden 2xl:block">
            <div class="flex pt-4 pb-3 bg-zinc-800">
               
                <div  class="ml-[9%]">
                    <img src="crunchy.png"/>
                </div>
            <ul class="flex ml-9 text-white">
           <button > <li> <DropDown2/></li></button>
           <button class="hover:bg-neutral-900 w-[70px]  hover:text-white text-slate-200 -mt-2 ml-3 "><li>Manga </li></button>
           <button class="hover:bg-neutral-900 w-[70px]  hover:text-white text-slate-200  -mt-2 ml-3 "> <li>Games</li></button>
   
           <li> <DropDown1/></li> </ul>
         <div  class="hover:bg-neutral-900 ml-[42%] pb-2 mt-[-21px] group mb-[-7px] pt-5 group">   
                    <img src="svgexport-6.png"/>
                    <div class="ml-7 -mt-8">
                 <button>  <p class="text-yellow-400 text-[10px] ">TRY FREE</p>
                        <p class="text-white text-[10px] ml-1 ">
                    PREMIUM
                    </p>
                    </button> 
                </div>
                <div class="absolute hidden  2xl:block bg-black text-center pb-7 pl-2 pr-2 ml-[-135px]  opacity-0 mt-5 group-hover:opacity-100"><img  class="absolute"src="star.svg"/><img  class="absolute ml-[250px]"src="star1.svg"/>
                    <img class="w-[25px] pt-8 ml-[70px] " src="k.svg"/>
                    <h1 class="font-medium text-[20px] -mt-[30px] w-[350px]  text-white tracking-normal" >14-Day Free Trail</h1>
                    <p class="text-[14px] pt-2 text-white font-medium">Premium access includes unlimited anime ,no ads,<br/> and new episodes shortly after they air in Japan.Try<br/> it now!</p>
                   <img class="absolute -mt-6 rotate-0 -ml-2" src="svgexport-10.svg"/>
                   <img class="absolute -mt-12 ml-[290px] " src="svgexport-9 (1).svg"/>
                    </div>


                </div>
                <div class="ml-[30px] hover:bg-neutral-900  pt-3 mb-[-10px] -mt-[12px] pl-3 pr-2 ">
                    <img src="search.png"/>
                </div>
                <div class="ml-[12px] hover:bg-neutral-900 mb-[-10px]  pt-7 -mt-[27px] pl-3 pr-2">
                    <img src="tag.png"/>
                </div>
                <div class="hover:bg-neutral-900 ml-[8px] mb-[-10px]  pt-7 -mt-[27px] pl-3 pr-2">
                    <img src="profile.png"/>
                </div>
            </div>
          
        </nav>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>mbl>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <nav class="nav  md:hidden">
            <div class="flex pt-4 pb-3 bg-zinc-800">
               
    
            <ul class="flex  text-white pb-2">
            
           <button><li ><Dropdown3/> </li></button>
           <button class="hover:bg-gray-900 w-[70px]   pl-1 "><li><img src="logo2.svg" ></img></li></button>
           <button class="hover:bg-gray-900 w-[70px]   pl-[10px] ml-[109px]"> <li><img src="logo3.svg" ></img></li></button>
           <button class="hover:bg-gray-900 w-[70px] -pl-[5px]  ">    <li  class="flex "><img src="logo4.svg" ></img> </li> </button>
           <button class="hover:bg-gray-900 w-[70px]   -ml-5 -pl-1 "> <li><img src="logo5.svg" ></img></li></button>

            </ul>
         
            </div>
          
        </nav>

        </div>
    )
}
export default Navbar