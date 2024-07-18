import React, { useState } from 'react'
import Avatar from 'react-avatar';
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/logo.jpg"
import avt from "../../public/avt.png"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchQuery,setsearchQuery]=useState("")
  
   const navigate=useNavigate()


   const searchQueryHandler=(event)=>{
    if((event?.key==="Enter" || event==="searchButton") && searchQuery?.length>0 ){
      navigate(`/search/${searchQuery}`)
      setsearchQuery("")
    }
   }
  return (
    <div className='flex justify-between fixed top-0 w-[100%] bg-white  px-6 py-2'>
      <div className=' flex items-center space-x-4 '>
        {/* menubar */}
        <CiMenuBurger className='text-xl' />
        {/* logo */}
        <img src={logo} alt="" className='w-14 cursor-pointer'  />

      </div>
      <div className=' flex w-[35%] '>
        <div className='w-[100%] px-3 py-2 border rounded-l-full border-gray-400'> 
        <input type="text"placeholder='search' className='outline-none' onChange={(e)=>setsearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
         />

        </div>
        <button className='px-4 py-2 border bg-gray-400 border-gray-400 rounded-r-full'
        onClick={()=>searchQueryHandler("searchButton")}
        >
            <CiSearch size={"24px"}/>
            </button>
        <IoMdMic className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' size={"42px"} />

      </div>
      <div className='flex space-x-5 items-center '>
        {/* videoicon */}
        <RiVideoAddLine className='text-2xl'  />
        {/* bellicon */}
        <AiOutlineBell className='text-2xl'/>
        {/* profile */}
        <Avatar src={avt} size="32" round={true} />

      </div>
    </div>
  )
}

export default Navbar
