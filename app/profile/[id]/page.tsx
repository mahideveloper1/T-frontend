"use client"

import Twitterlayout from "@/components/Layout/TwitterLayout"
import { userCurrentUser } from "@/hooks";

import { BsArrowLeftShort } from "react-icons/bs"
  
const Profile=()=>{
  const {user} = userCurrentUser();


    return(
     
        <Twitterlayout>
          
          <div>
              <div>
          <nav className=" flex items-center gap-3 p-3">
            <BsArrowLeftShort className="text-4xl"/>
            <div>
              <h1  className="text-2xl font-bold">Puneet</h1>
              <h1 className=" text-xs  text-gray-500 ">99 Tweets</h1>
            </div>


          </nav>
        </div>


<div className="container mx-auto p-4">
<div className="flex">
  <div className="mr-4">
    <img
      className="w-20 h-20 rounded-full"
      src="https://placekitten.com/200/200" 
      alt="Profile"
    />
  </div>
  <div>
    <h2 className="font-bold text-xl">Puneet</h2>
    <p className="text-gray-500">@yourusername</p>
    <p className="text-gray-700">Your bio goes here...</p>
  </div>
</div>


<div className="mt-8">
  <h3 className="text-xl  mb- font-bold ">Posts</h3>
  <div className="border-b border-gray-300 mb-4">
  </div>

  
 
</div>
</div>
        </div>

      
     

  </Twitterlayout>
    

         
    )

}
export default Profile;





