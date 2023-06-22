
import React from "react";
import Carousel from 'react-multi-carousel';
function Section4(){
    const responsive={
  
        laptop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        mobile: {
          breakpoint: { max: 524, min: 0 },
          items: 2
        }
       };
        return(
       
            <div class="bg-black text-white text-3xl pt-2">
              <div class="hidden 2xl:block ">
            <div class="ml-[360px] mt-10"> <h1 class=" -mt-8">Most Popular</h1></div>
          <button class="absolute">  <p class="text-sm font-medium text-slate-400 ml-[1280px] -mt-4 hover:text-white">VIEW ALL <img class="-mt-[20px] ml-[73px]"src="svgexport-31.svg"></img></p></button> 
            <p class="w-100% h-1 ml-[360px] mt-6 bg-orange-500  mr-[310px]"></p>

      
        <div class="ml-[320px] w-[1169px] mr-[340px] mt-4">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[140px] ml-[30px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe"></img><p class="text-[14px] mt-2 leading-5">My Hero Academia</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[18px]  text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/9b22fdc9b3c0a5e0c6373adba8b7ac61.jpe"></img><p  class="text-[14px] mt-2 leading-5">Demon Slayer: Kimetsu <br></br> no Yaiba</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[12px]  text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe"></img><p  class="text-[14px] mt-2 leading-5">BLUELOCK</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/abce57c319a2ea344c47e1e8afe45ff4.jpe"></img><p  class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[7px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d6f2e0dbb298b6307f6882164f50bb8.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Reincarnation Of <br></br> The Strongest Exorcist<br></br> In Another World</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[7px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe"></img><p  class="text-[13px] mt-2 leading-5">VINLAND SAGA</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] -ml-[1px]  text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6bb16816cd77b6e7cc4f6d8a5ddc9e90.jpe"></img><p  class="text-[14px] mt-2 leading-5">Campfire Cooking in <br></br> Another World with My <br></br>Absurd Skill</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>






</Carousel>
      </div>
      <div class="ml-[230px] grid gap-5 grid-cols-2 "> 

<div> <img class="w-[410px] ml-[130px] mt-7" src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpe"></img></div>
  <div class="-ml-[200px] mt-14"> <h1>Dr. STONE</h1>
  <p class="text-gray-400 font-medium text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p>
  <p class="text-[15px] font-medium leading-6">Several thousand years after a mysterious phenomenon that turns all of humanity to<br></br> stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens.....</p>
  <button class="bg-orange-500 text-black text-[14px] h-10 w-[200px] mt-5  pt-2 font-medium hover:bg-orange-400"><img class="ml-2" src="play.svg"></img> <p class="-mt-[31px] ml-4 ">START WATCHING S1 E1</p></button>
  <button class=" text-orange-500 border-amber-700 border-2 text-[14px] h-10 w-[200px] ml-3 mt-5  pt-2 font-medium hover:border-orange-400"><img class="ml-2" src="watch.svg"></img> <p class="-mt-[31px] ml-4 ">ADD TO WATCHLIST</p></button>

</div></div>
<div>
<div class="ml-[360px] mt-10"> <h1 class=" -mt-4">Watch Over the Weekend</h1></div>
          <button class="absolute">  <p class="text-[15px] font-normal text-slate-200 ml-[360px] leading-7 hover:text-white">These anime are sure to make your weekend memorable</p></button> 
            <p class="w-100% h-1 ml-[360px] mt-9 bg-orange-500  mr-[340px]"></p>
       <div class="ml-[330px] w-[1080px] mt-9">  
       <Carousel responsive={responsive}>
           <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[29px]  text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dc24870ae3c042db983cae330ffe6014.jpe"></img><p class="text-[14px] mt-2 leading-5">Horimiya</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button  class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[24px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/935ad8e1c044f1164c2af8e18042c2e6.jpe"></img><p  class="text-[14px] mt-2 leading-5">Tower of God</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[21px] text-left"><img src="i5.jpe"></img><p  class="text-[14px] mt-2 leading-5">Link Click</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[18px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7d402dc6bb4c01fe11f62832252d03fc.jpe"></img><p  class="text-[14px] mt-2 leading-5">Tomo-chan Is a Girl!</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[150px] ml-[13px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/29b0baaa47f45c6626a7dc6724c44513.jpe"></img><p  class="text-[14px] mt-2 leading-5">To Every You I've Loved <br></br>Before</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Subtitled</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-5 "><div class="w-[150px] ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0d05002119251179e11dac9cadeaf155.jpe"></img><p  class="text-[13px] mt-2 leading-5">BOCCHI THE ROCK</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Subtitled</p> </div></button>
   </Carousel>
   </div>
</div></div>
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<mbl><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
{/* <div class="md:hidden ">
            <div class="ml-[20px] mt-10"> <p class="text-[24px] -mt-8">Most Popular</p></div>
          <button class=""> <img class=" ml-[373px] -mt-[59px]"src="svgexport-31.svg"></img></button> 
            <p class="w-100% h-1 ml-[22px] -mt-6 bg-orange-500  mr-[17px]"></p>

      
        <div class="-ml-[30px] w-[459px] mr-[340px] mt-4">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[50px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe"></img><p class="text-[14px] mt-2 leading-5">My Hero Academia</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] ml-[16px]  text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/9b22fdc9b3c0a5e0c6373adba8b7ac61.jpe"></img><p  class="text-[14px] mt-2 leading-5">Demon Slayer: Kimetsu <br></br> no Yaiba</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[18px]  text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe"></img><p  class="text-[14px] mt-2 leading-5">BLUELOCK</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[42px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/abce57c319a2ea344c47e1e8afe45ff4.jpe"></img><p  class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[65px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d6f2e0dbb298b6307f6882164f50bb8.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Reincarnation Of <br></br> The Strongest Exorcist<br></br> In Another World</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[89px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe"></img><p  class="text-[13px] mt-2 leading-5">VINLAND SAGA</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[110px]  text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6bb16816cd77b6e7cc4f6d8a5ddc9e90.jpe"></img><p  class="text-[14px] mt-2 leading-5">Campfire Cooking in <br></br> Another World with My <br></br>Absurd Skill</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>



</Carousel>
      </div>
      <div class="ml-[20px] grid gap-5 grid-rows-2 "> 

<div> <img class="w-[390px] mt-7" src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpe"></img></div>
  <div class=" -mt-3"> <h1>Dr. STONE</h1>
  <p class="text-gray-400 font-medium text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p>
  <p class="text-[15px] font-medium leading-6">Several thousand years after a mysterious phenomenon that turns all of humanity to stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens.....</p>
  <button class="bg-orange-500 text-black text-[14px] h-10 w-[387px] mt-5  pt-2 font-medium hover:bg-orange-400"><img class="ml-[100px]" src="play.svg"></img> <p class="-mt-[31px] ml-4 ">START WATCHING S1 E1</p></button>

</div></div>
<div>
<div class="ml-[30px] leading-5 mt-4"> <p class=" -mt-8  text-[24px]">Watch Over the Weekend</p>
          <button >  <p class="text-[14px] font-normal text-slate-200  leading-5 -mt-[30px] hover:text-white">These anime are sure to make your weekend memorable</p></button> 
            <p class="w-100% h-1 mt-1 bg-orange-500  mr-[30px]"></p></div>
       <div class="ml-[-30px] w-[459px] mr-[340px] mt-4">   
       <Carousel responsive={responsive}> 
        <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[50px]  text-left">
        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dc24870ae3c042db983cae330ffe6014.jpe">
        </img><p class="text-[14px] mt-2 leading-5">Horimiya</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button  class="hover:bg-neutral-800 hover:m "><div class="w-[183px] ml-[16px] text-left">
   <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/935ad8e1c044f1164c2af8e18042c2e6.jpe"></img><p  class="text-[14px] mt-2 leading-5">Tower of God</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[18px] text-left">
   <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d6f2e0dbb298b6307f6882164f50bb8.jpe"></img><p  class="text-[14px] mt-2 leading-5">Link Click</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[42px] text-left">
   <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7d402dc6bb4c01fe11f62832252d03fc.jpe"></img><p  class="text-[14px] mt-2 leading-5">Tomo-chan Is a Girl!</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px]  -ml-[65px] text-left">
   <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/29b0baaa47f45c6626a7dc6724c44513.jpe"></img><p  class="text-[14px] mt-2 leading-5">To Every You I've Loved <br></br>Before</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Subtitled</p> </div></button>
   <button class="hover:bg-neutral-800 hover:pr-3 "><div class="w-[183px] -ml-[89px] text-left">
   <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0d05002119251179e11dac9cadeaf155.jpe"></img><p  class="text-[13px] mt-2 leading-5">BOCCHI THE ROCK</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Subtitled</p> </div></button>

   </Carousel> </div>
</div></div> */}

        </div>
        )}
export default Section4;