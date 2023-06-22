import React from "react";
  const data1=[
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
  const data2=[
    {
        id:1,
        name:"GENRES"
    },
    {
        id:2,
        name:"Action"
    },
    {
        id:3,
        name:"Adventure"
    },
    {
        id:4,
        name:"Comedy"
    },
    {
        id:5,
        name:"Drama"
    },
    {
        id:6,
        name:"Fantasy"
    }
    // {
    //     id:7,
    //     name:""
    // }
]
    const data3=[
        {
            id:6,
            name:""
        },
    {
        id:1,
        name:"Music"
    },
    {
        id:2,
        name:"Romance"
    },
    {
        id:3,
        name:"Sci-Fi"
    },
    {
        id:4,
        name:"Seinen"
    },
    {
        id:5,
        name:"Shojo"
    },
    {
        id:6,
        name:""
    }
  ]
  const data4=[
    {
        id:6,
        name:""
    },
{
    id:1,
    name:"Shonen"
},
{
    id:2,
    name:"Slice of life"
},
{
    id:3,
    name:"Sports"
},
{
    id:4,
    name:"Supernatural"
},
{
    id:5,
    name:"Thriller"

}
]
export default function DropDown2(){
    const [dataList, setDataList]=React.useState([...data1]);
    const [dataList1, setDataList1]=React.useState([...data2]);
    const [dataList2, setDataList2]=React.useState([...data3]);
    const [dataList3, setDataList3]=React.useState([...data4]);
    const [showMenu1, setShowMenu1]=React.useState(false);
    return(
        <div>
                      <button  class="hover:bg-neutral-900 w-[70px] -mt-4 hover:text-white pt-6 pb-4 -mb-3 text-slate-200"onClick={()=>setShowMenu1(!showMenu1)}><p class="flex -mt-2 ">Browse<img src="svgexport-3.png"/> </p></button>

   
        <div>
            {
            showMenu1 &&
            (
                <div class="flex flex-row  absolute w-[1740px]  -ml-[338px] mt-[13px] text-[14px] leading-4 bg-neutral-900 text-white text-left z-40 h-[310px] ">
                    <div class=" ">
                  {
                     dataList.length? dataList.map(x=>{
                        return(
                            <div class="h-[50px] -mt-3 pt-14  ml-[360px] hover:bg-neutral-800">
                                <h3 class="pl-4  text-slate-100">{x.name}</h3>
                                </div>
                        )
                    }):''
                }</div>
                <div class="" >
                     {
                     dataList1.length? dataList1.map(x=>{
                        return(
                            <div class="h-[50px]  -mt-3 pt-14 ml-[106px] hover:bg-neutral-800">
                                <h3 class="pl-4  text-slate-100">{x.name}</h3>
                                </div>
                        )
                    }):''
                }
                   </div>
                   <div >
                     {
                     dataList2.length? dataList2.map(x=>{
                        return(
                            <div class="h-[50px]  -mt-3 pt-14 ml-[120px] hover:bg-neutral-800">
                                <h3 class="pl-4  text-slate-100">{x.name}</h3>
                                </div>
                        )
                    }):''
                }
                   </div>
                   <div >
                     {
                     dataList3.length? dataList3.map(x=>{
                        return(
                            <div class="h-[50px]  -mt-3 pt-14 ml-[110px] hover:bg-neutral-800">
                                <h3 class="pl-4  text-slate-100">{x.name}</h3>
                                </div>
                        )
                    }):''
                }
                   </div>

                </div>
            )
          }
        </div>
       </div>
    
    
    )

}