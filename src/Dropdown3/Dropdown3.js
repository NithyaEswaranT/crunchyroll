import React from "react";
  const data6=[
   
    {
        id:1,
        name:"Popular"
    },
    {
        id:2,
        name:"New"
    },
    {
        id:3,
        name:"Alphabetical"
    },
    {
        id:4,
        name:"Simulcast Season"
    },
    {
        id:5,
        name:"Release Calender"
    },
    {
        id:6,
        name:"Music Videos & Concerts"
    }
  ]
  const data7=[
    {
        id:7,
        name:'Action'
    },
    {
        id:1,
        name:"Adventure"
    },
    {
        id:2,
        name:"Comedy"
    },
    {
        id:3,
        name:"Drama"
    },
    {
        id:4,
        name:"Fantasy"
    },
    {
        id:5,
        name:"Music"
    },
    {
        id:6,
        name:"Romance"
    },
    {
        id:8,
        name:"Sci-Fi"
    },
    {
        id:9,
        name:"Seinen"
    },
    {
        id:10,
        name:"Shojo"
    },
    {
        id:11,
        name:"Shonen"
    },
    {
        id:12,
        name:"Slice of life"
    },
    {
        id:13,
        name:"Sports"
    },{
        id:14,
        name:"Thriller"
    }
  ]
  const data8=[
    {
        id:1,
        name:"All News"
    },
    {
        id:4,
        name:"Anime Awards"
    },
    {
        id:4,
        name:"Crunchyroll Expo"
    },
    {
        id:5,
        name:"Anime Movie Night"
    }
  ]

export default function Dropdown3(){
    const [dataList5, setDataList5]=React.useState([...data6]);
    const [dataList4, setDataList4]=React.useState([...data7]);
    const [dataList6, setDataList6]=React.useState([...data8]);
    const [showMenu6, setShowMenu6]=React.useState(false);

    const [showMenu5, setShowMenu5]=React.useState(false);
    const [showMenu4, setShowMenu4]=React.useState(false);
    return(
        <div>

           <button class="hover:bg-neutral-900 w-[70px] ml-4 pt-10  -mt-9  pr-4 pb-4 pl-3 -mb-3 text-slate-200 " onClick={()=>setShowMenu5(!showMenu5)}>  <img class="w-100%" src="menu.svg" alt="kk"/></button>
   
        <div>
            {
            showMenu5 &&
            (
                <div class=" absolute w-[425px]   mt-4 text-[15px] leading-8 pl-2  bg-neutral-900  text-left z-40 h-[800px] ">
                    <button class="ml-4 text-slate-300 text-[12px] mt-4 ">BROWSE</button>
                  {
                     dataList5.length? dataList5.map(x=>{
                        return(
                            <div class="h-[50px] -mt-1 pt-3 hover:bg-neutral-800">
                                <h3 class="pl-4  text-white">{x.name}</h3>
                                </div>
                        )
                    }):''
                }
                <button class="mt-3 ml-4 text-slate-100 flex border-b pb-3 border-zinc-800    " onClick={()=>setShowMenu4(!showMenu4)}>Genres <img  class="rotate-90 ml-[297px] mt-2" src="svgexport-5.svg"/></button>
                <div>
                    {
                        showMenu4 &&
                        (<div class=" absolute w-[425px]  -ml-3  text-[14px] leading-8 pl-9 pl bg-zinc-800  text-left z-40 h-[800px] ">
                        {
                           dataList4.length? dataList4.map(x=>{
                              return(
                                  <div class="h-[50px] -mt-2 pt-6 hover:bg-neutral-800">
                                      <h3 class="pl-4  text-white">{x.name}</h3>
                                      </div>
                              )
                          }):''
                      }
                      
</div>
                        )
                    }
                    </div>
               <div class="flex-rows flex">
                    <button class="ml-4 -mt-7 text-white">Manga</button>
                    <button class=" text-white mt-[64px] ml-[-46px]">Games</button>


</div>
<button class="mt-3 ml-4 text-slate-100 flex    " onClick={()=>setShowMenu6(!showMenu6)}>News<img  class="rotate-90 ml-[309px] mt-2" src="svgexport-5.svg"/></button>

<div> {
                        showMenu6 &&
                        (<div class=" absolute w-[425px]  -ml-3  text-[14px] leading-8 pl-9 pl bg-zinc-800  text-left z-40 h-[800px] ">
                        {
                           dataList6.length? dataList6.map(x=>{
                              return(
                                  <div class="h-[50px] -mt-2 pt-6 hover:bg-neutral-800">
                                      <h3 class="pl-4  text-white">{x.name}</h3>
                                      </div>
                              )
                          }):''
                      }
                      
</div>
                        )
                    }

                </div>
                </div>
            )
          }
        </div>
       </div>
    
    
    )

}