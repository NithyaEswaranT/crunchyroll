// import React from "react";
// import Carousel from 'react-multi-carousel';
// function Sectionmbl5(){
//     const responsive={
  
//         laptop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 6
//         },
//         mobile: {
//           breakpoint: { max: 524, min: 0 },
//           items: 2
//         }
//        };
//        return(
//        <>
//     {
//         window.innerWidth <=700  && (
//             <div>
//                 <div class="bg-black text-white text-3xl   ">
//        <p class="pt-12 text-[24px] -mt-8 ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Trials of Steel</p>
//     <p class=" text-[16px] ml-[22px] leading-5 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Overcome these trials three and you'll fulfill your<br/> destiny.
// </p>
//     <p class="w-100% h-1 mt-2 ml-[22px] bg-teal-500  mr-[22px]"></p>
//       <div class=" w-[400px] mr-[340px] mt-4 ml-[22px] ">
//      <Carousel responsive={responsive}>
//    <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[183px] -ml-[2px] text-left">
//     <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/abce57c319a2ea344c47e1e8afe45ff4.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[5px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2a8442e728c9e6c65da385548c9bbd71.jpe"></img><p  class="text-[14px] mt-2 leading-5">The Legendary Hero is Dead!</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/40af4cb42899f482e820db1eab3e2f23.jpe"></img><p  class="text-[14px] mt-2 leading-5">KamiKatsu: Working for God in a Godless World</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/93572bc2f9b6d753fa1b1f63391841ee.jpe"></img><p  class="text-[14px] mt-2 leading-5">A Galaxy Next Door</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3c9bebb79d5abf889928349df37a42b0.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dead Mount Death Play</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[3px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/c06634d2f00bb70ba40c6794f72550e3.jpe"></img><p  class="text-[13px] mt-2 leading-5">My One-Hit Kill Sister</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6b943219816421cd2d88228959e06d86.jpe"></img><p  class="text-[14px] mt-2 leading-5"> Skip and Loafer</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
// </Carousel>
// </div> 
//         </div>
//         <div class="bg-black text-white text-3xl">
//         <p class="pt-12 text-[24px] -mt-8 ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif">Just Updated On Crunchyroll</p>
//     <p class=" text-[14px] ml-[22px] leading-5 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Performances by your favorite artists, right here on Crunchyroll!</p>
//   <p class="w-100% h-1 ml-[22px] mt-2 bg-orange-600  mr-[22px]"></p>
//    <div class=" w-[400px] mr-[340px] mt-4 ml-[22px] ">
//      <Carousel responsive={responsive}>
//    <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[183px] ml-[-2px] text-left">
//     <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/bd4d9746efeb2a60c53d5685b5d5317d.jpe"></img><p class="text-[14px] mt-2 leading-5">Play It Cool, Guys</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[-5px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/fd5484b177ee95615c65b2c61e81ea9c.jpe"></img><p  class="text-[14px] mt-2 leading-5">Kuma Kuma Kuma Bear</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[-8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3c9bebb79d5abf889928349df37a42b0.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dead Mount Death Play
// </p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[-8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/31eceb5185603241bf8f07e1be0f039c.jpe"></img><p  class="text-[14px] mt-2 leading-5">I Got a Cheat Skill in<br></br> Another World and <br></br>Became Unrivaled in <br></br>The Real World, Too</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[-8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/431011dae6b1d5d590de332e0d841d0f.jpe"></img><p  class="text-[14px] mt-2 leading-5">Why Raeliana Ended Up<br></br> at the Duke's Mansion</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[-3px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe"></img><p  class="text-[13px] mt-2 leading-5">VINLAND SAGA</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
//   <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] ml-[-10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/29e0d306dbff3a163acadf66a35b3cf5.jpe"></img><p  class="text-[14px] mt-2 leading-5">Dr. STONE</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
// </Carousel>
// </div>       </div>
//             </div>
//         )
//     }
// </>
//        )
// }
// export default Sectionmbl5

import React from 'react'
import {data2} from './Sl1.js'
import {data3} from './Sl1.js'

function Sectionmbl5() {
  const slideLeft =()=>{
    var slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft -450;
  }
  const slideRight =()=>{
    var slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft +450;
  }
  return (
    <div class="h-[990px]  md:hidden bg-black -mt-[24px] pb-[20px]">

    <div className='w-[330px]   h-[370px] relative ml-[90px]'>
    <div class="bg-black text-white text-3xl -ml-[90px]  ">
      <p class="pt-12 text-[24px] -mt-8 ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Trials of Steel</p>
   <p class=" text-[16px] ml-[22px] leading-5 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Overcome these trials three and you'll fulfill your<br/> destiny.
 </p>
  <p class="w-100% h-1 ml-[22px] mt-2 bg-orange-600  mr-[22px]"></p></div>
      <div className='relative flex items-center   '>
      <div className='bg-[#2b2b2b] z-99 relative bottom-[300px]  rounded-2xl  hidden '><p className='fill-[#ffffff]' onClick={slideLeft} size={20}></p></div>

    <div id='slider2' className='w-[1300px] relative overflow-auto scroll-smooth flex -ml-[69px]  '>
     
    {
        data3.map((item) =>( 
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
    <div className='w-[329px] h-[370px] top-[90px]   relative ml-[90px]'>
    <div class="bg-black text-white text-3xl  -ml-[90px]">
        <p class=" text-[24px] mt-[70px]  ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif">Just Updated On Crunchyroll</p>
    <p class=" text-[14px] ml-[22px] leading-5 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Performances by your favorite artists, right here on Crunchyroll!</p>
  <p class="w-100% h-1 ml-[22px] mt-2 bg-orange-600  mr-[22px]"></p></div>
      <div className='relative flex items-center   '>
      <div className='bg-[#2b2b2b] z-99 relative bottom-[300px]  rounded-2xl  hidden '><p className='fill-[#ffffff]' onClick={slideLeft} size={20}></p></div>

    <div id='slider2' className='w-[1300px] relative overflow-auto scroll-smooth flex ml-[-69px] '>
     
    {
        data2.map((item) =>( 
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

export default Sectionmbl5