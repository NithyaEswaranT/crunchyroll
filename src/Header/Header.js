import React, {useEffect, useState} from 'react';
// import LinearProgress from '@mui/material/LinearProgress';

// import LinearProgress from '@mui/material/LinearProgress';



function Header(){
     const slides = [
        {
            url: 'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/7658c7bd-31d5-4552-a233-eead57e60c68.webp'
        },
        {
            url: 'slider.png'
        },
        {
            url: 'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/d4cb528a-2d6a-4e44-8a2b-51cff586ea33.webp'
        },
        {
            url: 'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/38758467-b550-4ded-bfb5-7a5c22afb01f.webp'
        },
        {
            url: 'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/96585420-f0f0-4b58-bcd3-30d2f8a76a07.webp'
        },
        {
            url:'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/aa8875fb-88d8-4539-b849-7a12c4b2564a.webp'
        },

    ] ;

    const Sliders2=[
        {
            url:'https://static.crunchyroll.com/fms/portrait_poster/426x639/1e395064-5560-4781-a383-066d3a67ea5e.png'
        },
        {
            url:'https://static.crunchyroll.com/fms/portrait_poster/426x639/da61e93c-fa05-4806-9c12-34c1d130704a.png'
        },
        {
            url:'https://static.crunchyroll.com/fms/portrait_poster/426x639/a594d319-cd63-4f1e-9156-f7f5a43cbd53.png'
        },
        {
            url:'https://static.crunchyroll.com/fms/portrait_poster/426x639/e35b046b-0a32-4f3f-be08-be93e4b7d9f7.png'
        },
        {
            url:'https://static.crunchyroll.com/fms/portrait_poster/426x639/d520a2c6-5ec9-47f3-8d1f-5d997085d006.png'
        },
        {
            url:'https://static.crunchyroll.com/fms/portrait_poster/426x639/667e4b75-2803-43ac-a673-fff73521f68f.png'
        },
    ]

  const [curr,setCurr]=useState(0);
    useEffect(()=>{
        timeSlider();
    },[]);

    const timeSlider=() =>{
        setInterval(()=>{
            nextSlide();
        },35000);
    };
    const prevSlide =(e)=>{
        const isfirstSlide = curr===0;
        const newIndex =isfirstSlide ? slides.length-1:curr-1;
        setCurr(newIndex);
    };
    const nextSlide =(e)=>{
        const islast = curr===slides.length-1;
        const newIndex =islast?0:curr+1;
        setCurr(newIndex);
    };
    const b1=(e)=>{
        setCurr(0);
     }
     const b2=(e)=>{
        setCurr(1);
     }
     const b3=(e)=>{
        setCurr(2);
     }
     const b4=(e)=>{
        setCurr(3);
     }
     const b5=(e)=>{
        setCurr(4);
     }
     const b6=(e)=>{
        setCurr(5);
     }
    const [curre,setCurre]=useState(0);
    useEffect(()=>{
        timeSlider1();
    },[]);

    const timeSlider1=() =>{
        setInterval(()=>{
            nextSlide1();
        },35000);
    };
    const prevSlide1 =(e)=>{
        const isfirstSlide = curr===0;
        const newIndex1 =isfirstSlide ? slides.length-1:curr-1;
        setCurre(newIndex1);
    };
    const nextSlide1 =(e)=>{
        const islast = curr===slides.length-1;
        const newIndex1 =islast?0:curr+1;
        setCurre(newIndex1);
    };
     const bu1=(e)=>{
        setCurre(0);
     }
     const bu2=(e)=>{
        setCurre(1);
     }
     const bu3=(e)=>{
        setCurre(2);
     }
     const bu4=(e)=>{
        setCurre(3);
     }
     const bu5=(e)=>{
        setCurre(4);
     }
     const bu6=(e)=>{
        setCurre(5);
     }
    

    return(
        <div>
     <div class="hidden xl:block ">
         <div className='w-full bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500' >
         <img class="absolute w-[200px] left-[1540px]  top-[-147px] " src="dec.png"/>

         <img class="w-[200px] rotate-90 pt-7 absolute" src="svgexport-10.svg" ></img>
        <div className='max-w-[900px] h-[550px]   py-8 px-4 m-auto relative'>
            <div style={{backgroundImage:`url(${slides[curr].url})` }} className='w-full h-full bg-cover bg-center duration-500'>

            </div>
            <button onClick={prevSlide} className='absolute -ml-[110px] w-[40px] -mt-[320px] rotate-180 group'><img  class="group:hover-none" src="svgexport-20.png"/></button>

        </div>
        <button  onClick={nextSlide} className='absolute ml-[1440px] -mt-[320px] '><img src="svgexport-20.png"/></button>
    
      {/* <LinearProgress /> */}
</div>
<div class="bg-black flex text-white text-xs   pt-6 pb-3">
    <button onClick={b1} class="bg-gray-800 pt-2 pb-3 hover:bg-gray-600 ml-[350px] pl-2 pr-3 font-medium ">Demon Slayer Swordsmith<br/> Village Arc</button>
    <button  onClick={b2} class="bg-gray-800 pt-2 pb-3  hover:bg-gray-600 ml-[15px] font-medium pl-2 pr-3">MASHLE: MAGIC AND <br/> MUSCLES Series Premiere</button>
    <button  onClick={b3} class="bg-gray-800 pt-2 pb-3  hover:bg-gray-600 ml-[15px] pr-8 font-medium pl-2" >Skip and Loafer New <br/>Episodes</button>
    <button  onClick={b4} class="bg-gray-800 pt-2 pb-3  hover:bg-gray-600 ml-[15px] pl-3 font-medium pr-9">I Got a Cheat Skill in<br/> Another World</button>
    <button  onClick={b5} class="bg-gray-800 pt-2 pb-3  hover:bg-gray-600 ml-[15px] pl-2 font-medium pr-5">The Ancient Magus' Bride<br/> Season 2</button>
    <button  onClick={b6} class="bg-gray-800 pt-2 pb-3 hover:bg-gray-600  ml-[15px] pl-2 font-medium pr-7">Kamikatsu: Working for <br/>God in a Godless World</button>
</div>
</div>
<div class="hidden lg:block xl:hidden">
        <div className='w-full bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500' >
        <div className='max-w-[900px] h-[495px]  r py-8 px-4 m-auto relative'>
            <div style={{backgroundImage:`url(${slides[curr].url})` }} className='w-[764px] h-[430px] ml-[50px] bg-cover bg-center duration-500'>

            </div>
            <button onClick={prevSlide} className='absolute -ml-[440px] w-[400px] -mt-[230px] rotate-180 group'><img  class="group:hover-none" src="svgexport-20.png"/></button>

        </div>
        <button  onClick={nextSlide} className='absolute ml-[980px] w-[400px] -mt-[320px] '><img src="svgexport-20.png"/></button>

</div>

<div class="bg-black flex text-white text-xs   pt-6 pb-3">
    <button onClick={b1} class="bg-gray-800 h-[55px] ml-[40px] w-[150px] pl-2 text-left  hover:bg-gray-600 font-medium ">Demon Slayer <br/>Swordsmith Village Arc</button>
    <button  onClick={b2} class="bg-gray-800  h-[55px]  w-[146px] pl-2 text-left   hover:bg-gray-600 ml-[15px] font-medium pl-2 pr-3">MASHLE: MAGIC AND  MUSCLES Series Premiere</button>
    <button  onClick={b3} class="bg-gray-800  h-[55px] w-[144px] pl-2 text-left   hover:bg-gray-600 ml-[15px]  font-medium pl-2" >Skip and Loafer New Episodes</button>
    <button  onClick={b4} class="bg-gray-800  h-[55px] w-[142px] pl-2 text-left   hover:bg-gray-600 ml-[15px]  font-medium pr-9">I Got a Cheat Skill in Another World</button>
    <button  onClick={b5} class="bg-gray-800  h-[55px] w-[146px] pl-2 text-left   hover:bg-gray-600 ml-[15px]  font-medium pr-5">The Ancient Magus' Bride Season 2</button>
    <button  onClick={b6} class="bg-gray-800  h-[55px] w-[150px] pl-2 text-left  hover:bg-gray-600  ml-[15px]  font-medium pr-7">Kamikatsu: Working for God in a Godless World</button>
</div>  
</div>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>mbl>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div class=" md:hidden">
        <div className='w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500' >
            <img class="absolute w-[150px] " src="svgexport-10.svg"/>
            <img class="absolute w-[250px] ml-4 mt-4 rotate-90 " src="svgexport-10.svg"/>
       
        <div className='max-w-[250px] h-[485px]   py-6 px-4 m-auto relative'>
            <div style={{backgroundImage:`url(${Sliders2[curre].url})` }} className='w-[264px] h-[440px] -ml-[25px] bg-cover bg-center duration-500'>

            </div>
            <button onClick={prevSlide1} className='absolute -ml-[465px] w-[400px] -mt-[237px] rotate-180 group'><img  class="group:hover-none w-[28px]" src="svgexport-20.png"/></button>

        </div>
        <button  onClick={nextSlide1} className='absolute ml-[306px] w-[120px] pl-[85px] -mt-[260px] '><img class="w-[28px]"src="svgexport-20.png"/></button>

</div>
<div class="bg-black flex text-white text-xs   pt-4 pb-3">
    <button onClick={bu1} class="bg-gray-200 h-[2px] ml-[33px] w-[47px] pl-2 text-left  hover:bg-gray-600 font-medium "></button>
    <button  onClick={bu2} class="bg-gray-200  h-[2px]  w-[47px]  text-left   hover:bg-gray-600 ml-[15px] font-medium pl-2 pr-3"></button>
    <button  onClick={bu3} class="bg-gray-200  h-[2px] w-[47px] text-left   hover:bg-gray-600 ml-[15px]  font-medium pl-2" ></button>
    <button  onClick={bu4} class="bg-gray-200  h-[2px] w-[47px] pl-2 text-left   hover:bg-gray-600 ml-[15px]  font-medium pr-9"></button>
    <button  onClick={bu5} class="bg-gray-200  h-[2px] w-[47px] pl-2 text-left   hover:bg-gray-600 ml-[15px]  font-medium pr-5"></button>
    <button  onClick={bu6} class="bg-gray-200  h-[2px] w-[47px] pl-2 text-left  hover:bg-gray-600  ml-[15px]  font-medium pr-7"></button>
</div>  
</div>
</div>
    );
}
export default Header;