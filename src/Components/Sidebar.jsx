import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubetv} from "react-icons/si";
import { MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BsMusicNote } from 'react-icons/bs';




function Sidebar() {
    const Sidebaritem=[
        {
            id:1,
            name:"Home",
            icon:<GoHome/>
        },
        {
            id:2,
            name:"Shorts",
            icon:<SiYoutubeshorts/>
        },
        {
            id:3,
            name:"Subcription",
            icon:<MdOutlineSubscriptions/> ,
        },
    ]
    const Sidebaritem2=[
        {
            id:1,
            name:"Your Channel",
            icon:<GoHome/>
        },
        {
            id:2,
            name:"History",
            icon:<SiYoutubeshorts/>
        },
        {
            id:3,
            name:"Playlist",
            icon:<MdOutlineSubscriptions/> ,
        },
        {
            id:3,
            name:"Your Videos",
            icon:<MdOutlineSubscriptions/> ,

        },
        {
            id:3,
            name:"Watch later",
            icon:<MdOutlineSubscriptions/> ,
        },
        {
            id:3,
            name:"Liked videos",
            icon:<MdOutlineSubscriptions/> ,
        }
    ]
    const Sidebaritem3=[
        {
            id:1,
            name:"Trending",
            icon:<SiTrendmicro/>
        },
        {
            id:2,
            name:"Shopping",
            icon:<HiOutlineShoppingBag/>
        },
        {
            id:3,
            name:"Music",
            icon:<SiYoutubemusic/> ,
        },
        {
            id:3,
            name:"Films",
            icon:<PiFilmSlateLight/> ,

        },
        {
            id:4,
            name:"Live",
            icon:<MdWatchLater/> ,
        },
        {
            id:5,
            name:"Gaming",
            icon:<SiYoutubegaming/> ,
        },
        {
            id:6,
            name:"News",
            icon:<FaRegNewspaper/> ,
        },
        {
            id:7,
            name:"Sports",
            icon:<TfiCup/> ,
        },
        {
            id:8,
            name:"Courses",
            icon:<SiStylelint/> ,
        },
        {
            id:9,
            name:"Fashion & beauty",
            icon:<PiLightbulbLight/> ,
        },
      
        {
            id:11,
            name:"  Podcasts",
            icon:<MdPodcasts/> ,
        }
    ]
    const Sidebaritem4=[
        {
            id:1,
            name:"Youtube Premium",
            icon:<FaYoutube/>
        },
        {
            id:2,
            name:"Youtube Studio",
            icon:<SiYoutubestudio/>
        },
        {
            id:3,
            name:"Youtube Music",
            icon:<SiYoutubemusic/> ,
        },
        {
            id:3,
            name:"Youtube Kids",
            icon:<SiYoutubekids/> ,
        },
    ] 
    const Sidebaritem5=[
        {
            id:1,
            name:"Settings",
            icon:<FaYoutube/>
        },
        {
            id:2,
            name:"Report History",
            icon:<SiYoutubestudio/>
        },
        {
            id:3,
            name:"Help",
            icon:<SiYoutubemusic/> ,
        },
        {
            id:4,
            name:"Send feedback",
            icon:<SiYoutubekids/> ,
        },
    ] 
  return (
    <div className='px-6 w-[35%] h-[calc(100vh-6.265rem)] overflow-y-scroll overflow-x-hidden'>
        {/* Home */}
    <div className=' space-y-3 items-center'> 
     {
         Sidebaritem.map((item)=>{
            return(
                <div key={item.id} className='space-x-6 flex items-center hover:bg-gray-300 duration-300 rounded-xl' >
                <div className='text-xl cursor-pointer'>{item.icon}</div>
                <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
         })
     }
    </div>
    <br />
    <hr />

    {/* you */}
    <div className='mt-4 space-y-3 items-center'> 
        <div className='flex items-center space-x-2'>
            <h1>You</h1>
            <FaChevronRight/>
        </div>
     {
         Sidebaritem2.map((item)=>{
            return(
                <div key={item.id} className='space-x-6 flex items-center hover:bg-gray-300 duration-300 rounded-xl' >
                <div className='text-xl cursor-pointer'>{item.icon}</div>
                <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
         })
     }
    </div>
    <br />
    <hr />
      {/* explore */}
    
    <div className='mt-4 space-y-3 items-center'> 
        <div className=' items-center space-x-2'>
            <h1 className='font-semibold'>Explore</h1>
            {/* <FaChevronRight/> */}
        </div>
     {
         Sidebaritem3.map((item)=>{
            return(
                <div key={item.id} className='space-x-6 flex items-center hover:bg-gray-300 duration-300 rounded-xl' >
                <div className='text-xl cursor-pointer'>{item.icon}</div>
                <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
         })
     }
    </div>
    <br /> 
    <hr />
    {/* More section */}
    
    <div className='mt-4 space-y-3 items-center'> 
        <div className=' items-center space-x-2'>
            <h1 className='font-semibold'>More from youtube</h1>
            {/* <FaChevronRight/> */}
        </div>
     {
         Sidebaritem4.map((item)=>{
            return(
                <div key={item.id} className='space-x-6 flex items-center hover:bg-gray-300 duration-300 rounded-xl' >
                <div className='text-xl cursor-pointer text-red-600'>{item.icon}</div>
                <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
         })
     }
    </div>
    {/* settings */}
    <br /> 
    <hr />
    <div className='mt-4 space-y-3 items-center'> 
        <div className=' items-center space-x-2'>
            {/* <h1 className='font-semibold'>More from youtube</h1> */}
            {/* <FaChevronRight/> */}
        </div>
     {
         Sidebaritem5.map((item)=>{
            return(
                <div   key={item.id} className='space-x-6 flex items-center hover:bg-gray-300 duration-300 rounded-xl' >
                <div className='text-xl cursor-pointer'>{item.icon}</div>
                <span className='cursor-pointer'>{item.name}</span>
                </div>
            )
         })
         
     }
     <hr />
    </div> <br />
    <span className='text-xs font-semibold text-gray-500'>About Press Copyright <br/> Contact us Creators <br /> Advertise Developers <br />
    <p>
        <br />
    Terms privacy Policy & Safety<br/>How YouTube works<br/>Test new features
    </p>
    </span>
    <br />
    <p className='text-xs text-gray-800 mt-1'> © 2024 Learn coding</p>

    </div>
  )
}

export default Sidebar
