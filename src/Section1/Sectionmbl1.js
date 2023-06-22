import React from 'react'
export const data6=[
    {
    id:1,
    img:'Demon Slayer: Kimetsu no Yaiba',
    type:"s1.jpe",
    t:"Series ",
    t1:". Sub | Dub"

    },

    {
    id:1,
    img:'RADIANT',
      type:"s2.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'Ayakashi Triangle',
      type:"s3.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'The Case Study of Vanties',
      type:"s4.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'VINLAND SAGA',
      type:"s5.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'My Dress-Up Darling',
      type:"s6.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'Trapped in a Dating Sim:The World of Otome Games is Tough for Mobs',
      type:"s7.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    }
]
export const data7=[
    {
    id:1,
    img:'NieR:Automata Ver1.1a',
    type:"i1.jpe",
    t:"Series ",
    t1:". Sub | Dub"

    },

    {
    id:1,
    img:'The Legend of Heroes: Trails of Cold Steel -Northern War',
      type:"i2.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'Dead Mount Death Play',
      type:"i3.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'Handyman Saitou in another world',
      type:"i4.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:"Why Raeliana Ended Up at the Duke's Mansion",
      type:"i5.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'Ayakashi Triangle',
      type:"i6.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    },

    {
    id:1,
    img:'Saving 80,000 Gold in Another World for my Retirement',
      type:"i7.jpe",
     t:"Series ",
    t1:". Sub | Dub"
    }
]
function Sectionmbl1() {
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
        <p class=" text-[24px] mt-4 pt-11 ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Hindi Dubs Now on Crunchyroll!</p>
     <p class=" text-[14px] ml-[22px] text-slate-300 leading-5 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Check out these great Hindi dubs!
   </p>
    <p class="w-100% h-1 ml-[22px] mt-2 bg-teal-600  mr-[22px]"></p></div>
        <div className='relative flex items-center   '>
        <div className='bg-[#2b2b2b] z-99 relative bottom-[300px]  rounded-2xl  hidden '><p className='fill-[#ffffff]' onClick={slideLeft} size={20}></p></div>
  
      <div id='slider2' className='w-[1300px] relative overflow-auto scroll-smooth flex -ml-[69px]  '>
       
      {
          data6.map((item) =>( 
            <div className='min-w-[190px] h-[570px] '>
              <div className='w-[180px] h-[300px] flex items-center justify-center group relative'>
                <img className='mx-auto w-[190px]  h-[280px]  ' src={item.type}></img>
               
               
              </div>
              <div class=""><p  class="text-[14px] mt-2  text-white  leading-5 ">{item.img}</p></div>
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
          <p class=" text-[24px] mt-[70px]  ml-[22px] font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif">Subtitled in Hindi</p>
      <p class=" text-[14px] ml-[22px] leading-5 font-[Crunchyroll,Helvetica Neue,helvetica,sans-serif]">Watch these anime now subbed in Hindi!</p>
    <p class="w-100% h-1 ml-[22px] mt-2 bg-orange-600  mr-[22px]"></p></div>
        <div className='relative flex items-center   '>
        <div className='bg-[#2b2b2b] z-99 relative bottom-[300px]  rounded-2xl  hidden '><p className='fill-[#ffffff]' onClick={slideLeft} size={20}></p></div>
  
      <div id='slider2' className='w-[1300px] relative overflow-auto scroll-smooth flex ml-[-69px] '>
       
      {
          data7.map((item) =>( 
            <div className='min-w-[190px] h-[570px] '>
              <div className='w-[180px] h-[300px] flex items-center justify-center group relative'>
                <img className='mx-auto w-[190px]  h-[280px]  ' src={item.type}></img>
               
               
              </div>
              <div class=""><p  class="text-[14px] mt-2  text-white  leading-5 ">{item.img}</p></div>
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
  
  export default Sectionmbl1