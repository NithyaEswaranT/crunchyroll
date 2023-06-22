import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Section1(){
   const responsive={
  
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
     laptop: {
      breakpoint: { max: 1024, min: 842 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 524, min: 0 },
      items: 2
    }

   };
    return(
      <div class="bg-black text-white text-3xl">
    <center>    <h1 class="hidden pt-12 -ml-[620px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]  2xl:block">Hindi Dubs Now on Crunchyroll!</h1>
    <p class="hidden 2xl:block -ml-[801px] text-[16px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Check out these great Hindi dubs!

</p></center>

    <p class=" hidden 2xl:block w-100% h-1 ml-[349px] mt-2 bg-teal-500  mr-[340px]"></p>

   


   <div class=" hidden 2xl:block ml-[330px] w-[1100px] mr-[340px] mt-4">
     <Carousel responsive={responsive}>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[18px] text-left "><img src="s1.jpe"></img><p class="text-[14px] mt-2 leading-5">Demon Slayer: Kimetsu no Yaiba</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[10px]  text-left"><img src="s2.jpe"></img><p  class="text-[14px] mt-2 leading-5">RADIANT</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px]  text-left"><img src="s3.jpe"></img><p  class="text-[14px] mt-2 leading-5">Ayakashi Triangle</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px] text-left "><img src="s4.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Case Study of Vanties</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px]  text-left"><img src="s5.jpe"></img><p  class="text-[14px] mt-2 leading-5">VINLAND SAGA</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[3px]  text-left"><img src="s6.jpe"></img><p  class="text-[14px] mt-2 leading-5">My Dress-Up Darling</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[10px]  text-left"><img src="s7.jpe"></img><p  class="text-[13px] mt-2 leading-5">Trapped in a Dating Sim:<br></br>The World of Otome Games is Tough for<br></br> Mobs</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
</Carousel>
      </div>
 {/* ...........................................................................................laptop...................................................... */}

 <center>
<h1 class="hidden lg:block 2xl:hidden pt-12 -ml-[518px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif] ">Hindi Dubs Now on Crunchyroll!</h1>
<p class="hidden lg:block 2xl:hidden -ml-[701px] text-[16px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Check out these great Hindi dubs!</p>

</center>
<p class="hidden lg:block xl:hidden w-100% h-1 ml-[41px] mt-2 bg-teal-500  mr-[38px]"></p>
<div class=" hidden lg:block xl:hidden ml-[50px] w-[950px] mr-[340px] mt-4">
     <Carousel responsive={responsive}>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[2px] text-left "><img src="s1.jpe"></img><p class="text-[14px] mt-2 leading-5">Demon Slayer: Kimetsu no Yaiba</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[1px]  text-left"><img src="s2.jpe"></img><p  class="text-[14px] mt-2 leading-5">RADIANT</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] ml-[2px]  text-left"><img src="s3.jpe"></img><p  class="text-[14px] mt-2 leading-5">Ayakashi Triangle</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] ml-[2px] text-left "><img src="s4.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Case Study of Vanties</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] ml-[2px]  text-left"><img src="s5.jpe"></img><p  class="text-[14px] mt-2 leading-5">VINLAND SAGA</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[3px]  text-left"><img src="s6.jpe"></img><p  class="text-[14px] mt-2 leading-5">My Dress-Up Darling</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] ml-[2px]  text-left"><img src="s7.jpe"></img><p  class="text-[13px] mt-2 leading-5">Trapped in a Dating Sim:<br></br>The World of Otome Games is Tough for<br></br> Mobs</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
</Carousel>
      </div>
    
   {/* .....................................................................................................................................................   */}
        <h1 class="hidden 2xl:block pt-12 ml-[355px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Subtitled in Hindi</h1>
     <p class="hidden 2xl:block ml-[355px] text-[16px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Watch these anime now subbed in Hindi!</p>
     <p class="hidden 2xl:block w-100% h-1 ml-[355px] mt-2 bg-orange-600  mr-[327px]"></p>
 <div class="hidden 2xl:block ml-[335px] w-[1100px] mr-[340px] mt-4">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[140px] ml-[22px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/60ae0b1c6c34b3ef0279f07481a3b983.jpe"></img><p class="text-[14px] mt-2 leading-5">NieR:Automata Ver1.1a</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[14px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Legend of Heroes:<br></br> Trails of Cold Steel - <br></br>Northern War</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f2c42a1328d1d42a33d4b48ca4fc028c.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dead Mount Death Play
</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/104d56fd3a9f6e27f0e4b1d4f1170447.jpe"></img><p  class="text-[14px] mt-2 leading-5">Handyman Saitou in<br></br> another world</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/35ac1d958688dce29fba1cc21344ec5f.jpe"></img><p  class="text-[14px] mt-2 leading-5">Why Raeliana Ended Up<br></br> at the Duke's Mansion</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[3px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/eead319e4fd2ecb9c2415340b301de8c.jpe"></img><p  class="text-[13px] mt-2 leading-5">Ayakashi Triangle</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[10px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/a6ffa8f8b91daf0e7fe95f995e1dd90d.jpe"></img><p  class="text-[14px] mt-2 leading-5">Saving 80,000 Gold in<br></br>Another World for my<br></br> Retirement</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
</Carousel>
</div> 
 {/* ...........................................................................................laptop...................................................... */}
 <h1 class="hidden lg:block xl:hidden pt-12 ml-[47px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Subtitled in Hindi</h1>
     <p class="hidden lg:block xl:hidden ml-[48px] text-[16px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Watch these anime now subbed in Hindi!</p>
     <p class="hidden lg:block xl:hidden w-100% h-1 ml-[48px] mt-2 bg-orange-600  mr-[55px]"></p>
 <div class="hidden lg:block xl:hidden ml-[50px] w-[950px] mr-[340px] mt-4">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[130px] ml-[1px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/60ae0b1c6c34b3ef0279f07481a3b983.jpe"></img><p class="text-[14px] mt-2 leading-5">NieR:Automata Ver1.1a</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[1px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Legend of Heroes:<br></br> Trails of Cold Steel - <br></br>Northern War</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[5px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f2c42a1328d1d42a33d4b48ca4fc028c.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dead Mount Death Play
</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[5px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/104d56fd3a9f6e27f0e4b1d4f1170447.jpe"></img><p  class="text-[14px] mt-2 leading-5">Handyman Saitou in<br></br> another world</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[5px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/35ac1d958688dce29fba1cc21344ec5f.jpe"></img><p  class="text-[14px] mt-2 leading-5">Why Raeliana Ended Up<br></br> at the Duke's Mansion</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] -ml-[3px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/eead319e4fd2ecb9c2415340b301de8c.jpe"></img><p  class="text-[13px] mt-2 leading-5">Ayakashi Triangle</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[130px] ml-[10px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/a6ffa8f8b91daf0e7fe95f995e1dd90d.jpe"></img><p  class="text-[14px] mt-2 leading-5">Saving 80,000 Gold in<br></br>Another World for my<br></br> Retirement</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
</Carousel>
</div> 
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<mbl<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
{/* <div>

<h1 class="md:hidden  pt-12 ml-[21px] -mt-5  text-[23px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif] ">Hindi Dubs Now on Crunchyroll!</h1>
<p class="md:hidden ml-[20px] text-[14px] -mt-[7px] text-slate-300 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Check out these great Hindi dubs!</p>


<p class="md:hidden  w-100% h-1 ml-[22px] mt-1 bg-teal-500  mr-[15px]"></p>
<div class=" md:hidden  ml-[23px] w-[400px] mr-[340px] mt-4">
     <Carousel responsive={responsive}>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[2px] text-left "><img src="s1.jpe"></img><p class="text-[14px] mt-2 leading-5">Demon Slayer: Kimetsu no Yaiba</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[8px]  text-left"><img src="s2.jpe"></img><p  class="text-[14px] mt-2 leading-5">RADIANT</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[4px]  text-left"><img src="s3.jpe"></img><p  class="text-[14px] mt-2 leading-5">Ayakashi Triangle</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] ml-[5px] text-left "><img src="s4.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Case Study of Vanties</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] ml-[2px]  text-left"><img src="s5.jpe"></img><p  class="text-[14px] mt-2 leading-5">VINLAND SAGA</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[3px]  text-left"><img src="s6.jpe"></img><p  class="text-[14px] mt-2 leading-5">My Dress-Up Darling</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
 <button  class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] ml-[2px]  text-left"><img src="s7.jpe"></img><p  class="text-[13px] mt-2 leading-5">Trapped in a Dating Sim:<br></br>The World of Otome Games is Tough for<br></br> Mobs</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button> 
</Carousel>
      </div>
<p class="md:hidden  pt-12 ml-[20px]  text-[23px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Subtitled in Hindi</p>
     <p class="md:hidden  ml-[20px] text-[14px] -mt-[7px] text-slate-300 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Watch these anime now subbed in Hindi!</p>
     <p class="md:hidden  w-100% h-1 ml-[22px] mt-1 bg-orange-600  mr-[15px]"></p>
 <div class="md:hidden  ml-[22px] w-[395px]  mt-4">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[180px] ml-[1px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/60ae0b1c6c34b3ef0279f07481a3b983.jpe"></img><p class="text-[14px] mt-2 leading-5">NieR:Automata Ver1.1a</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[1px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Legend of Heroes:<br></br> Trails of Cold Steel - <br></br>Northern War</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[5px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f2c42a1328d1d42a33d4b48ca4fc028c.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dead Mount Death Play
</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[5px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/104d56fd3a9f6e27f0e4b1d4f1170447.jpe"></img><p  class="text-[14px] mt-2 leading-5">Handyman Saitou in<br></br> another world</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[5px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/35ac1d958688dce29fba1cc21344ec5f.jpe"></img><p  class="text-[14px] mt-2 leading-5">Why Raeliana Ended Up<br></br> at the Duke's Mansion</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] -ml-[3px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/eead319e4fd2ecb9c2415340b301de8c.jpe"></img><p  class="text-[13px] mt-2 leading-5">Ayakashi Triangle</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[180px] ml-[10px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/a6ffa8f8b91daf0e7fe95f995e1dd90d.jpe"></img><p  class="text-[14px] mt-2 leading-5">Saving 80,000 Gold in<br></br>Another World for my<br></br> Retirement</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
</Carousel>
</div>  */}

{/* </div> */}
        </div>
    )

}
export default Section1;                                              