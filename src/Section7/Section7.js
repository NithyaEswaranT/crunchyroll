// import React from 'react';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// function Section7(){


// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 2
//   };
//   return (
//     <div class="bg-black text-white">
      
//       <Slider {...settings}>
//         <div>
//         <button >  <div class="w-[140px] ml-[339px] text-left">
//           <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/057908db709dec0de317006c86c0363e.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>

//         </div>
//         <div>
//         <button >  <div class="w-[140px] ml-[227px] text-left">
//           <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>

//         </div>
//         <div>
//         <button>  <div class="w-[140px] ml-[119px] text-left">
//           <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>

//         </div>
//         <div>
//         <button >  <div class="w-[140px] ml-[10px] text-left">
//           <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>

//         </div>
//         <div>
//         <button >  <div class="w-[140px] ml-[-100px] text-left">
//           <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/e2640ec6f13f38927422c0841c924225.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>

//         </div>
//         <div>
//         <button >  <div class="w-[140px] ml-[-219px] text-left">
//           <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/fbc4e0b1229ed0aff611ac46adb19b33.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>

//         </div>
//         <div>
//         <button >  <div class="w-[140px] text-left">
//           <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d35d24ebe5c927a52faf0fd9657cc3a.jpe"></img><p class="text-[14px] mt-2 leading-5">MASHLE: MAGIC AND MUSCLES</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>

      
//         </div>
//       </Slider>
//     </div>
//   );
// }
// export default Section7;
import React from "react";
import Carousel from 'react-multi-carousel';
function Section7(){
    const responsive={
  
        laptop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        mobile: {
          breakpoint: { max: 524, min: 0 },
          items: 2
        }
    }
    return(
        <div>
              <div class="bg-black text-white text-3xl">
   
        <div class="ml-[320px] w-[1110px] mr-[340px] hidden 2xl:block ">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[140px] ml-[29px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/057908db709dec0de317006c86c0363e.jpe"></img><p class="text-[14px] mt-2 leading-5">Buddy Daddies</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series</span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe"></img><p  class="text-[14px] mt-2 leading-5">Ranking of Kings</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe"></img><p  class="text-[14px] mt-2 leading-5">SPY x FAMILY</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe"></img><p  class="text-[14px] mt-2 leading-5">My Hero Academia</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/e2640ec6f13f38927422c0841c924225.jpe"></img><p  class="text-[14px] mt-2 leading-5">THE PROMISED NEVERLAND</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[9px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/fbc4e0b1229ed0aff611ac46adb19b33.jpe"></img><p  class="text-[13px] mt-2 leading-5">Kakushigoto</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[150px] ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d35d24ebe5c927a52faf0fd9657cc3a.jpe"></img><p  class="text-[14px] mt-2 leading-5">A Herbivorous Dragon <br></br> of 5,000 Years Gets <br></br> Unfairly Villainized</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
</Carousel>
</div> 
{/* <div class="w-[400px] mr-[340px]  ml-[22px] pb-[-10px] md:hidden ">
     <Carousel responsive={responsive}>
   <button class="hover:bg-neutral-800 hover:pr-3 ">  <div class="w-[183px] -ml-[2px] text-left">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/057908db709dec0de317006c86c0363e.jpe"></img><p class="text-[14px] mt-2 leading-5">Buddy Daddies</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500"> Series</span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe"></img><p  class="text-[14px] mt-2 leading-5">Ranking of Kings</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe"></img><p  class="text-[14px] mt-2 leading-5">SPY x FAMILY</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe"></img><p  class="text-[14px] mt-2 leading-5">My Hero Academia</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[8px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/e2640ec6f13f38927422c0841c924225.jpe"></img><p  class="text-[14px] mt-2 leading-5">THE PROMISED NEVERLAND</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[9px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/fbc4e0b1229ed0aff611ac46adb19b33.jpe"></img><p  class="text-[13px] mt-2 leading-5">Kakushigoto</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
  <button class="hover:bg-neutral-800 hover:pr-3 "> <div class="w-[183px] -ml-[10px] text-left"><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1d35d24ebe5c927a52faf0fd9657cc3a.jpe"></img><p  class="text-[14px] mt-2 leading-5">A Herbivorous Dragon <br></br> of 5,000 Years Gets <br></br> Unfairly Villainized</p> <p class="text-gray-400 text-[14px]"><span class="text-teal-500">Series </span>. Sub&nbsp;|&nbsp;Dub</p> </div></button>
</Carousel>
</div>  */}


        </div>
        </div>
    )
}
export default Section7;
