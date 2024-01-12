import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import Add from '../public/Add.jpg'


// "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
const FeedCard:React.FC = () => {
 
  
   
  
  return (
    <div className='border  p-4 pb-0 border-r-0 border-l-0 border-b-0 hover:bg-[#F7F7F7] translate-all cursor-pointer'>
    <div className='grid grid-cols-12'>
        <div className='  col-span-1 mr-2'>
          
        
            <Image  className='rounded-full ' src ={Add} width={60}  alt="user-img"/>
          

        </div>
        <div className=' col-span-11'>
          <div className='w-full'>
          <span className=' text-[0.92em] font-semibold font-sans'>Puneet Mehandiratta</span>
          </div>
          <span className='text-[0.8em]'>Co-founder of Tiny w/ @_Sparling_. We own @Dribbble, @AeroPress and many other wonderful companies. Funding science and journalism at Tiny Foundation.</span>

          <div className='flex mt-2 items-center gap-[5em]'>

     <div className='flex items-center  w-8 h-8 justify-center rounded-full hover:bg-[#CCE5F6]  hover:text-[#5FB7F2] transition-colors' >
<BiMessageRounded  />
   </div>

   <div className='flex items-center  w-8 h-8 justify-center rounded-full hover:bg-[#C6EBDF] hover:text-[#00BA7C] transition-colors' >
  <FaRetweet />
  
  </div>
  <div className='flex items-center  w-8 h-8 justify-center rounded-full hover:bg-[#F8CBE0] hover:text-[#F91880] transition-colors' >
    <AiOutlineHeart/>
</div>
<div className='flex items-center  w-8 h-8 justify-center rounded-full hover:bg-[#CCE5F6] hover:text-[#1D9BF0]  transition-colors' >
  <BiUpload/>
</div>



</div>


        </div>
       

    </div>
    </div>
  )
}

export default FeedCard