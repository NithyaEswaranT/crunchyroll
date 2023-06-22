import React from "react";
  const data=[
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

export default function DropDown1(){
    const [dataList, setDataList]=React.useState([...data]);
    const [showMenu, setShowMenu]=React.useState(false);
    return(
        <div>
           
            <button class="hover:bg-neutral-900 w-[70px] ml-4 pt-3 -mt-5 pr-4 pb-3 pl-2 -mb-3 text-slate-200 " onClick={()=>setShowMenu(!showMenu)}>  News <img class="ml-[55px] -mt-5" src="svgexport-3.png"/>  </button>
   
        <div>
            {
            showMenu &&
            (
                <div class=" absolute w-[260px] ml-[14px] mt-3 text-[14px] leading-4 bg-neutral-900 text-white text-left z-40 h-[180px] ">
                  {
                     dataList.length? dataList.map(x=>{
                        return(
                            <div class="h-[50px] -mt-3 pt-9 hover:bg-neutral-800">
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