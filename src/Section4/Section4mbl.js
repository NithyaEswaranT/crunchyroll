import React from 'react'
export const data4=[
    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe',
    type:"My Hero Acadamy",
    t:"Series ",
    t1:". Sub | Dub"

    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/9b22fdc9b3c0a5e0c6373adba8b7ac61.jpe',
      type:"Demon Slayer: Kimetsu no Yaiba",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe',
      type:"BLUELOCK",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/abce57c319a2ea344c47e1e8afe45ff4.jpe',
      type:"MASHLE: MAGIC AND MUSCLES",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d6f2e0dbb298b6307f6882164f50bb8.jpe',
      type:"The Reincarnation Of The Strongest Exorcist In Another World",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe',
      type:"VINLAND SAGA",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6bb16816cd77b6e7cc4f6d8a5ddc9e90.jpe',
      type:"Campfire Cooking in  Another World with My Absurd Skill",
     t:"Series ",
    t1:". Sub | Dub"
    }
]
export const data5=[
    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dc24870ae3c042db983cae330ffe6014.jpe',
    type:"Horimiya",
    t:"Series ",
    t1:". Sub | Dub"

    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/935ad8e1c044f1164c2af8e18042c2e6.jpe',
      type:"Tower of God",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d6f2e0dbb298b6307f6882164f50bb8.jpe',
      type:"Link Click",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7d402dc6bb4c01fe11f62832252d03fc.jpe',
      type:"Tomo-chan Is a Girl!",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/29b0baaa47f45c6626a7dc6724c44513.jpe',
      type:"To Every You I've Loved Before",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0d05002119251179e11dac9cadeaf155.jpe',
      type:"BOCCHI THE ROCK",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3c9bebb79d5abf889928349df37a42b0.jpe',
      type:"Dead Mount Death Play",
     t:"Series ",
    t1:". Sub | Dub"
    }
]
function Sectionmbl4() {
  const slideLeft =()=>{
    var slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft -450;
  }
  const slideRight =()=>{
    var slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft +450;
  }
  return (
    <div class="h-[1410px]  md:hidden bg-black -mt-[24px] pb-[20px]">

    <div className='w-[330px]   h-[370px] relative ml-[90px]'>
    <div class="bg-black text-white text-3xl -ml-[90px]  ">
      <p class="pt-12 text-[24px] -mt-8 ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Most Popular</p>
      <img class="-mt-[28px] ml-[370px]"src="svgexport-31.svg"></img>

  <p class="w-100% h-1 ml-[22px] mt-2 bg-orange-600  mr-[22px]"></p></div>
      <div className='relative flex items-center   '>
      <div className='bg-[#2b2b2b] z-99 relative bottom-[300px]  rounded-2xl  hidden '><p className='fill-[#ffffff]' onClick={slideLeft} size={20}></p></div>

    <div id='slider2' className='w-[1300px] relative overflow-auto scroll-smooth flex -ml-[69px]  '>
     
    {
        data4.map((item) =>( 
          <div className='min-w-[190px] h-[570px] '>
            <div className='w-[180px] h-[300px] flex items-center justify-center group relative'>
              <img className='mx-auto w-[190px]  h-[280px]  ' src={item.img}></img>
             
             
            </div>
            <div class=""><p  class="text-[13px] mt-2  text-white  leading-5 ">{item.type}</p></div>
            <div class=" flex flex-cols  mt-[2px]"><p class="text-teal-500">{item.t}</p>
            <p class="text-gray-400 text-[14px] ml-3 mt-[2px]">{item.t1}</p></div>

            {/* <div className='relative top-[15px]'><p className='text-[12px] leading[16px] text-[#fffcfd] font-[500] '><span className='text-white px-[6px] py-[4px] rounded bg-[#0074e4] mr-2'>{item.off}</span><span class="line-through text-[16px] font-[500] text-[#939393]">{item.cut}</span><span class="text-[18px] font-[500] text-[#ffffff] relative left-[10px]">{item.price}</span></p></div> */}
          </div>
        ))
        }
    </div>
    <div className='ml-[-50px] z-99  bg-[#2b2b2b]  rounded-2xl  relative bottom-[300px] hidden'> <p class='fill-[#ffffff]' onClick={slideRight} size={20}></p></div>
    </div>
    </div>
    <div class="ml-[20px] grid gap-5 grid-rows-2 "> 

<div class="mt-[100px]"> <img class="w-[390px]  mt-7" src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpe"></img></div>
  <div class="text-white -mt-3"> <h1 class="text-[23px]">Dr. STONE</h1>
  <div class="flex flex-cols">   <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p><p><img class=" ml-[250px]  w-[24 px]"src="wish.svg"/></p></div>
  <p class="text-[15px] text-white  font-medium leading-6">Several thousand years after a mysterious phenomenon that turns all of humanity to stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens.....</p>
  <button class="bg-orange-500 text-black text-[14px] h-10 w-[387px] mt-5 pb-1 pt-2 font-medium hover:bg-orange-400"><img class="ml-[100px] " src="play.svg"></img> <p class="-mt-[23px] ml-4 ">START WATCHING S1 E1</p></button>

</div></div>
    <div className='w-[329px] h-[370px] mt-[-200px]   relative ml-[90px]'>
    <div class="bg-black text-white text-3xl  -ml-[90px]">
        <p class=" text-[24px] mt-[70px]  ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif">Just Updated On Crunchyroll</p>
    <p class=" text-[14px] ml-[22px] leading-5 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Performances by your favorite artists, right here on Crunchyroll!</p>
  <p class="w-100% h-1 ml-[22px] mt-2 bg-orange-600  mr-[22px]"></p></div>
      <div className='relative flex items-center   '>
      <div className='bg-[#2b2b2b] z-99 relative bottom-[300px]  rounded-2xl  hidden '><p className='fill-[#ffffff]' onClick={slideLeft} size={20}></p></div>

    <div id='slider2' className='w-[1300px] relative overflow-auto scroll-smooth flex ml-[-69px] '>
     
    {
        data5.map((item) =>( 
          <div className='min-w-[190px] h-[570px] '>
            <div className='w-[180px] h-[300px] flex items-center justify-center group relative'>
              <img className='mx-auto w-[190px]  h-[280px]  ' src={item.img}></img>
             
             
            </div>
            <div class=""><p  class="text-[13px] mt-2  text-white  leading-5 ">{item.type}</p></div>
            <div class=" flex flex-cols  mt-[2px]"><p class="text-teal-500">{item.t}</p>
            <p class="text-gray-400 text-[14px] ml-3 mt-[2px]">{item.t1}</p></div>

            {/* <div className='relative top-[15px]'><p className='text-[12px] leading[16px] text-[#fffcfd] font-[500] '><span className='text-white px-[6px] py-[4px] rounded bg-[#0074e4] mr-2'>{item.off}</span><span class="line-through text-[16px] font-[500] text-[#939393]">{item.cut}</span><span class="text-[18px] font-[500] text-[#ffffff] relative left-[10px]">{item.price}</span></p></div> */}
          </div>
        ))
        }
    </div>
    <div className='ml-[-50px] z-99  bg-[#2b2b2b] p-[4px]  rounded-2xl  relative bottom-[300px] hidden'> <p class='fill-[#ffffff]' onClick={slideRight} size={20}></p></div>
    </div>
    </div>
  </div>
  )
}

export default Sectionmbl4