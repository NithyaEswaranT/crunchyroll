import React from 'react'
import {data} from './Sl1.js'


function slider1() {
  const slideLeft =()=>{
    var slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft -450;
  }
  const slideRight =()=>{
    var slider = document.getElementById('slider2');
    slider.scrollLeft = slider.scrollLeft +450;
  }
  return (
    <div class="h-[500px] md:hidden bg-black -mt-[24px] mb-[-120px]">
    <div className='w-[390px] h-[370px] relative ml-[90px]'>
      <div className='relative flex items-center   '>
      <div className='bg-[#2b2b2b] z-99 relative bottom-[300px]  rounded-2xl  hidden '><p className='fill-[#ffffff]' onClick={slideLeft} size={20}></p></div>

    <div id='slider2' className='w-[1300px] relative overflow-auto scroll-smooth flex  right-[70px]  '>
     
    {
        data.map((item) =>( 
          <div className='min-w-[200px] h-[570px] '>
            <div className='w-[190px] h-[300px] flex items-center justify-center group relative'>
              <img className='mx-auto w-[190px]  h-[280px]  ' src={item.img}></img>
              <div className='w-[100%] h-[100%] bg-white hover:bg-opacity-[40%] bg-opacity-0 rounded-md absolute top-0 opacity-0 hover:opacity-[100%]'>
              <img className="relative rounded-full w-[20px] top-[13px] left-[170px] bg-opacity-[100%]" src="plus.png"></img>
              </div>
             
            </div>
            <div class=""><p  class="text-[14px]   text-white  leading-5 ">{item.type}</p></div>
            <div class=" flex flex-cols  mt-[2px]"><p class="text-teal-500">{item.t}</p>
            <p class="text-gray-400 text-[14px] ml-3 mt-[2px]">{item.t1}</p></div>

            {/* <div className='relative top-[15px]'><p className='text-[12px] leading[16px] text-[#fffcfd] font-[500] '><span className='text-white px-[6px] py-[4px] rounded bg-[#0074e4] mr-2'>{item.off}</span><span class="line-through text-[16px] font-[500] text-[#939393]">{item.cut}</span><span class="text-[18px] font-[500] text-[#ffffff] relative left-[10px]">{item.price}</span></p></div> */}
          </div>
        ))
        }
    </div>
    <div className='ml-[-50px] z-99  bg-[#2b2b2b] p-[4px] rounded-2xl  relative bottom-[300px] hidden'> <p class='fill-[#ffffff]' onClick={slideRight} size={20}></p></div>
    </div>
    </div>
  </div>
  )
}

export default slider1