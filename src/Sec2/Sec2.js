import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 function Sec2(){
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
        <div class="bg-black text-white text-3xl">
    <center>    <h1 class="hidden 2xl:block pt-12 -ml-[630px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">April 2023 Seasonal Sampler</h1>
    <p class="hidden 2xl:block -ml-[521px] text-[16px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Watch the first three episodes of these April 2023 simulcasts for free!

</p></center>
    <p class="w-100% h-1 ml-[362px] mt-2 bg-teal-500  mr-[340px] hidden 2xl:block"></p>
    <div class="ml-[320px] mr-[340px] mt-4 hidden 2xl:block">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[140px] ml-[29px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/abce57c319a2ea344c47e1e8afe45ff4.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2a8442e728c9e6c65da385548c9bbd71.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Legendary Hero is Dead!</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[18px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/40af4cb42899f482e820db1eab3e2f23.jpe"></img><p  class="text-[14px] mt-2 leading-5">KamiKatsu: Working for God in a Godless World</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[28px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/93572bc2f9b6d753fa1b1f63391841ee.jpe"></img><p  class="text-[14px] mt-2 leading-5">A Galaxy Next Door</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[36px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3c9bebb79d5abf889928349df37a42b0.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dead Mount Death Play</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[45px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/c06634d2f00bb70ba40c6794f72550e3.jpe"></img><p  class="text-[13px] mt-2 leading-5">My One-Hit Kill Sister</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[50px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6b943219816421cd2d88228959e06d86.jpe"></img><p  class="text-[14px] mt-2 leading-5"> Skip and Loafer</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
</Carousel>
      </div>
        <div className="bg-gradient-to-t from-orange-600 to-amber-500 pt-[9px] pb-[20px] pl-[290px] mt-5 hidden 2xl:block">
            <img class="-ml-[320px]" src="https://static.crunchyroll.com/cxweb/assets/img/news/leaning_hime.png"></img>
            <img  class="ml-[1120px] -mt-[280px]" src="https://static.crunchyroll.com/cxweb/assets/img/news/news_yuzu.png"></img>
            <div className= "bg-black text-white pt-[3px] -mt-[630px] w-[80%]">
                <div class="ml-[30px] mt-11"> <img src="lo1.svg"></img><h1 class="ml-7 -mt-8">Crunchyroll News</h1></div>
                <p class="w-100% h-1 ml-[30px] mt-4 bg-orange-500  mr-[70px] "></p>
              <div class="grid mt-2 -mb-2 grid-cols-3">  <p class="text-[19px] ml-[30px]">Top News</p>
              <p class="text-[19px] -ml-[70px]">Latest</p>
              <p class="text-[14px] text-slate-400 font-medium ml-[220px] hover:text-white">VIEW ALL</p>

              </div>
             <div>  <img class="mt-[20px] w-[260px]  h-[150px] ml-[30px]" src="https://img1.ak.crunchyroll.com/i/spire1/47a915d88240bc2ebc1e65443f7744871683306872_thumb.jpg"></img>
               <p class="text-[20px] leading-6 ml-[30px] mt-2">RECS: Anime to Watch After<br></br> Star Wars Visions Season 2</p>
               <p class="text-[12px] text-slate-500 leading-5 ml-[30px] mt-2">May 06, 2023 1:00am GMT+5:30<br></br>by Kelly Knox</p>
            </div>
            <div>  <img class="mt-[40px] w-[260px]  h-[150px] ml-[34px]" src="https://img1.ak.crunchyroll.com/i/spire1/de3d4969c76a2f512748fab8876684cb1683299464_thumb.jpg"></img>
               <p class="text-[18px] leading-6 ml-[30px] mt-2">Suzume Anime Film Earns<br></br> Over $10M at US Box Office</p>
               <p class="text-[12px] text-slate-500 leading-5 ml-[30px] mt-2">May 05, 2023 8:44pm GMT+5:30<br></br>by Joseph Luster</p>
            </div>

            <div class="grid ml-[315px] -mt-[547px]  grid-cols-2">
              <img  class="w-[34%] h-[85px]"src="https://img1.ak.crunchyroll.com/i/spire3/d910111d5a0bbdc940976aac44813b461683514637_thumb.jpg"></img>
              <div class="-ml-[270px] mt-2">
                <p class="text-[18px] leading-5">Final Fantasy Shares Original Illustrations of Tifa as an Adorable Kid</p>
                <p class="text-gray-400 text-[13px] leading-6">May 08, 2023 8:27am IST</p>
                <p  class="text-gray-400 text-[13px] leading-5">by Daryl Harding</p>
              </div>
            </div>
            <div class="grid ml-[315px] mt-2  grid-cols-2">
              <img  class="w-[34%] h-[85px]"src="https://img1.ak.crunchyroll.com/i/spire1/b364c058698f9fa58b483ae6d6bcd76f1683512179_thumb.jpg"></img>
              <div class="-ml-[270px] mt-2">
                <p class="text-[18px] leading-5">Love Live! Superstar!! Chisato VA Nako Misaki Shares Her Solo Debut Song</p>
                <p class="text-gray-400 text-[13px] leading-6">May 08, 2023 8:27am IST</p>
                <p  class="text-gray-400 text-[13px] leading-5">by Mikikazu Komatsu</p>
              </div>
            </div>
            <div class="grid ml-[315px] mt-2 grid-cols-2">
              <img  class="w-[34%] h-[85px]"src="https://img1.ak.crunchyroll.com/i/spire3/a1ff89c067e1978f1718dde3b8d1506f1683509427_thumb.jpg"></img>
              <div class="-ml-[270px] mt-2">
                <p class="text-[18px] leading-5">Nana Mizuki Streams Two Performance Clips from New Live DVD/Blu-ray</p>
                <p class="text-gray-400 text-[13px] leading-6">May 08, 2023  7:05am IST</p>
                <p  class="text-gray-400 text-[13px] leading-5">by Mikikazu Komatsu</p>
              </div>
            </div>
            <div class="grid ml-[315px] mt-2  grid-cols-2">
              <img  class="w-[34%] h-[85px]"src="https://img1.ak.crunchyroll.com/i/spire2/b1096247742dc48067b4416adf21141a1683507937_thumb.jpg"></img>
              <div class="-ml-[270px] mt-2">
                <p class="text-[18px] leading-5">The Fight Begins in Shonen Jump’s Newest Manga Do Retry</p>
                <p class="text-gray-400 text-[13px] leading-6">May 08, 2023  6:35am IST</p>
                <p  class="text-gray-400 text-[13px] leading-5">by Daryl Harding</p>
              </div>
            </div>
            <div class="grid ml-[315px]  mt-2 grid-cols-2">
              <img  class="w-[34%] h-[85px]"src="https://img1.ak.crunchyroll.com/i/spire4/193af9747acb60b1369f28d19a49dfd41683505711_thumb.jpg"></img>
              <div class="-ml-[270px] mt-2">
                <p class="text-[18px] leading-5">Anisong Duo ClariS Covers Wink's 1989 Hit Song "Sabishii Nettaigyo"</p>
                <p class="text-gray-400 text-[13px] leading-6">May 08, 2023 6:10am IST</p>
                <p  class="text-gray-400 text-[13px] leading-5">by Mikikazu Komatsu</p>
              </div>
            </div>
            <div class="grid ml-[315px]  mt-2 pb-9 grid-cols-2">
              <img  class="w-[34%] h-[85px]"src="https://img1.ak.crunchyroll.com/i/spire4/5710647802a9624f23e75956dbe50baa1683201077_thumb.jpg"></img>
              <div class="-ml-[270px] mt-2">
                <p class="text-[18px] leading-5">FEATURE: My Hero Academia's Latest Stage Show Reignited My Love of Theater</p>
                <p class="text-gray-400 text-[13px] leading-6">May 07, 2023 8:30pm IST</p>
                <p  class="text-gray-400 text-[13px] leading-5">by Liam Dempsey</p>
              </div>
            </div>
            
            </div>
            
        </div>
       <button> <img class="ml-[340px] mt-[40px] hidden 2xl:block" src="https://static.crunchyroll.com/fms/desktop_large/1050x350/4f25de3c-f8d3-4a10-b153-e1d84b49fe41.png"></img></button>
      
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<mbl>>>>>>>>>>>>>>>>>>>>></mbl> */}
      
      
      
      
       <div class="md:hidden">
             <p class=" text-[22px] ml-[20px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif] ">April 2023 Seasonal Sampler</p>
           <p class="ml-[21px] text-[16px]  text-slate-200 leading-6 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Watch all episodes for free!</p>
          <p class="w-100% h-1 ml-[22px] mt-2 bg-teal-500  mr-[20px]  "></p>
     <div class="ml-[20px] mr-[30px] w-[400px] mt-4 pb-4 relative">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[176px] ml-[2px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/abce57c319a2ea344c47e1e8afe45ff4.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[176px] -ml-[7px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2a8442e728c9e6c65da385548c9bbd71.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Legendary Hero is Dead!</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[176px] -ml-[13px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/40af4cb42899f482e820db1eab3e2f23.jpe"></img><p  class="text-[14px] mt-2 leading-5">KamiKatsu: Working for God in a Godless World</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[176px] -ml-[20px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/93572bc2f9b6d753fa1b1f63391841ee.jpe"></img><p  class="text-[14px] mt-2 leading-5">A Galaxy Next Door</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[176px] -ml-[29px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3c9bebb79d5abf889928349df37a42b0.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dead Mount Death Play</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[176px] -ml-[35px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/c06634d2f00bb70ba40c6794f72550e3.jpe"></img><p  class="text-[13px] mt-2 leading-5">My One-Hit Kill Sister</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[176px] -ml-[40px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6b943219816421cd2d88228959e06d86.jpe"></img><p  class="text-[14px] mt-2 leading-5"> Skip and Loafer</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
</Carousel>
      </div>
       
         <div className="bg-gradient-to-t relative from-orange-600 to-amber-500 pl-[20px] pt-[17px] mt-[20px] pb-3 md:hidden">
          
            <div className= "bg-black text-white pt-[1px] -ml-[10px] pl-1  w-[100%] ">
                <div class="ml-[6px] mt-4"> <img src="lo1.svg"></img><p class="ml-7 text-[24px] -mt-8">Crunchyroll News</p></div>
                
                <p class="w-100% h-1 ml-[8px] mt-2 bg-orange-500  mr-[7px] "></p>
              <div class=" -mb-2 ">  <p class="text-[16px] ml-[8px]">Top News</p>
              {/* <p class="text-[19px] -ml-[70px]">Latest</p>
              <p class="text-[14px] text-slate-400 font-medium ml-[220px] hover:text-white">VIEW ALL</p> */}

              </div>
              <div class="grid grid-cols-2">
             <div>  <img class="mt-[13px] w-[190px]  h-[110px] ml-[3px]" src="https://img1.ak.crunchyroll.com/i/spire1/47a915d88240bc2ebc1e65443f7744871683306872_thumb.jpg"></img>
               <p class="text-[16px] leading-6 ml-[3px] mt-2">RECS: Anime to Watch After Star Wars Visions Season 2</p>
               <p class="text-[12px] text-slate-500 leading-5 ml-[3px] mt-2">May 06, 2023 1:00am GMT+5:30<br></br>by Kelly Knox</p>
            </div>
            <div>  <img class="mt-[13px] w-[190px]  h-[110px] ml-[4px]" src="https://img1.ak.crunchyroll.com/i/spire1/de3d4969c76a2f512748fab8876684cb1683299464_thumb.jpg"></img>
               <p class="text-[16px] leading-6 ml-[3px] mt-2">Suzume Anime Film Earns Over $10M at US Box Office</p>
               <p class="text-[12px] text-slate-500 leading-5 ml-[03px] mt-2">May 05, 2023 8:44pm GMT+5:30<br></br>by Joseph Luster</p>
            </div>
            </div>
            <p class="w-100% h h-[2px] ml-[5px] mt-2 bg-slate-500  mr-[7px]"></p>
             <p class="text-[17px] mt-3 mb-1 ml-[7px]">Latest</p>
             <img class="-mt-[31px] ml-[370px]"src="svgexport-31.svg"></img>


<div class="mt-[550px] grid grid-rows-6">

            <div class="grid ml-[9px] -mt-[547px]  grid-cols-2">
              <img  class="w-[55%] h-[59px]"src="https://img1.ak.crunchyroll.com/i/spire3/d910111d5a0bbdc940976aac44813b461683514637_thumb.jpg"></img>
              <div class="-ml-[80px] -mt-1">
                <p class="text-[14px] font-medium leading-5 ">Final Fantasy Shares Original Illustrations of Tifa as an Adorable Kid</p>
                <p class="text-gray-400 text-[12px] leading-5">May 08, 2023 8:27am IST</p>
                <p  class="text-gray-400 text-[12px] leading-4">by Daryl Harding</p>
              </div>
            </div>
            <div class="grid ml-[9px] mt-[-459px]  grid-cols-2">
              <img  class="w-[55%] h-[59px]"src="https://img1.ak.crunchyroll.com/i/spire1/b364c058698f9fa58b483ae6d6bcd76f1683512179_thumb.jpg"></img>
              <div class="-ml-[80px] -mt-1">
                <p class="text-[14px] font-medium leading-5">Love Live! Superstar!! Chisato VA Nako Misaki Shares Her Solo Debut Song</p>
                <p class="text-gray-400 text-[12px] leading-5">May 08, 2023 8:27am IST</p>
                <p  class="text-gray-400 text-[12px] leading-4">by Mikikazu Komatsu</p>
              </div>
            </div>
            <div class="grid ml-[9px] mt-[-373px] grid-cols-2">
              <img  class="w-[55%] h-[59px]"src="https://img1.ak.crunchyroll.com/i/spire3/a1ff89c067e1978f1718dde3b8d1506f1683509427_thumb.jpg"></img>
              <div class="-ml-[80px] -mt-1">
                <p class="text-[14px] font-medium leading-5">Nana Mizuki Streams Two Performance Clips from New Live DVD/Blu-ray</p>
                <p class="text-gray-400 text-[12px] leading-5">May 08, 2023  7:05am IST</p>
                <p  class="text-gray-400 text-[12px] leading-4">by Mikikazu Komatsu</p>
              </div>
            </div>
            <div class="grid ml-[9px] mt-[-282px]  grid-cols-2">
              <img  class="w-[55%] h-[59px]"src="https://img1.ak.crunchyroll.com/i/spire2/b1096247742dc48067b4416adf21141a1683507937_thumb.jpg"></img>
              <div class="-ml-[80px] -mt-1">
                <p class="text-[14px] font-medium leading-5">The Fight Begins in Shonen Jump's Newest Manga Do Retry</p>
                <p class="text-gray-400 text-[12px] leading-5">May 08, 2023  6:35am IST</p>
                <p  class="text-gray-400 text-[12px] leading-4 ">by Daryl Harding</p>
              </div>
            </div>
            <div class="grid ml-[9px] mt-[-202px]  grid-cols-2">
              <img  class="w-[55%] h-[59px]"src="https://img1.ak.crunchyroll.com/i/spire4/193af9747acb60b1369f28d19a49dfd41683505711_thumb.jpg"></img>
              <div class="-ml-[80px] -mt-1">
                <p class="text-[14px] font-medium leading-5">Anisong Duo ClariS Covers Wink's 1989 Hit Song "Sabishii Nettaigyo"</p>
                <p class="text-gray-400 text-[12px] leading-5">May 08, 2023 6:10am IST</p>
                <p  class="text-gray-400 text-[12px] leading-4">by Mikikazu Komatsu</p>
              </div>
            </div>
            <div class="grid ml-[9px] mt-[-110px]  grid-cols-2">
              <img  class="w-[55%] h-[59px]"src="https://img1.ak.crunchyroll.com/i/spire4/5710647802a9624f23e75956dbe50baa1683201077_thumb.jpg"></img>
              <div class="-ml-[80px] -mt-1">
                <p class="text-[14px] font-medium leading-5">FEATURE: My Hero Academia's Latest Stage Show Reignited My Love of Theater</p>
                <p class="text-gray-400 text-[12px] leading-5">May 07, 2023 8:30pm IST</p>
                <p  class="text-gray-400 text-[12px] leading-4">by Liam Dempsey</p>
              </div>
            </div> 
            
            </div>
              
</div>
        </div>
        <button> <img class="ml-[16px] h-[170px] mt-[40px] w-[400px] md:hidden " src="https://static.crunchyroll.com/fms/desktop_large/1050x350/4f25de3c-f8d3-4a10-b153-e1d84b49fe41.png"></img></button>

        </div>
        </div>
    )
 }
export default Sec2;