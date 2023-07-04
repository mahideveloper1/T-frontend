import Image from 'next/image'
import React from 'react'
import {BsBookmark, BsEnvelope, BsTwitter} from "react-icons/bs"
import {BiHomeCircle} from "react-icons/bi"
import {BiHash,BiUser} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import FeedCard from '@/components/FeedCard'

export default function Home() {
  interface  TwitterSideBitton
  {
    tittle:string,
    icon:React.ReactNode
  }
  const SidebarMenuItems: TwitterSideBitton[]=[
    {
    tittle:"Home",
    icon:<BiHomeCircle/>
    },
    {
      tittle:"Explore",
      icon:<BiHash/>
    },
    
    {
      tittle:"Notifications",
      icon:<BsBell/>
    },
    {
      tittle:"Mesaages",
      icon:<BsEnvelope/>
    },
    {
      tittle:"Bookmarks",
      icon:<BsBookmark/>
    },
    {
      tittle:"Profile",
      icon:<BiUser/>
    },

  ]
  return (
    <div>
  <div className='grid grid-cols-12 h-screen w-screen px-56'>

       <div className="col-span-3  ml-10 px-2 pt-2">
        <div className='flex  items-center justify-center rounded-full w-fit text-2xl h-fit text-twitter-blue hover:bg-twitter-gray   p-2  cursor-pointer transition-all'>
       <BsTwitter  />
       </div>
       <div className=' mt-4  '>
        <ul>
          {SidebarMenuItems.map((items)=>(
        
            <li className='flex font-serif  items-center gap-3 hover:bg-twitter-gray rounded-full px-3 py-2 w-fit cursor-pointer mt-2'>
              <span className='text-[1.3em]' >{items.icon}</span>
              <span  className='text-[1.3em]'>{items.tittle}</span>
          
            </li>
            
          )
          )
          }
        </ul>
        <div className='mt-8  px-4'>
        <button className=' bg-[#1d9bf0]   py-3 rounded-full  w-full text-white text-lg text-bold'>Tweet</button>
        </div>
       </div>
       </div>
       <div className='col-span-5 overflow-scroll no-scrollbar border-r-[1px] border-l-[1px] border-twitter-border'>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>
               <FeedCard/>

         </div>
        <div className='col-span-3'></div>

       </div>

  
    </div>
  )
}
