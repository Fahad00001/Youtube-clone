import React from 'react'
import Sidebar from './Sidebar.jsx'
// import Playingvideo from './Playingvideo'
import Video from './Video.jsx'
import { useAuth } from '../Context/Authprovider.jsx'
import { data } from 'autoprefixer';
import Listitem from './Listitem.jsx';

function Home() {
    const {data,loading}=useAuth();
    console.log(data);
  return (
    <div className='flex mt-20'>
        <Sidebar/>
        <div className='h-[calc(100vh-6.265rem)] overflow-y-scroll overflow-x-hidden'>
            <Listitem/>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
            <Video/>
            {!loading && data.map((item)=>{
             if(item.type!=="video") return false;
            return <Video key={item.id} video={item?.video}/>
        })}
          </div>
        </div>
      
   
    </div>
  )
}

export default Home
