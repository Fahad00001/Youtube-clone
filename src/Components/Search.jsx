import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar.jsx'
import { useParams } from 'react-router-dom'
import {fetchData} from "../Utils/Rapidapi"
import Searchcard from './Searchcard.jsx'

function Search() {
  const [result ,setResult]=useState()
  const {searchQuery}=useParams
  // const {loading}=useState

  useEffect(()=>{
    fetchsearchResult()
  },[searchQuery])
   const fetchsearchResult=()=>{
    fetchData(`search/?q=${searchQuery}`).then(({contents})=>{
      console.log(contents);
      setResult(contents)
    })
   }
  
  return (

    <div className=''>
      <div className='mt-24 flex flex-row h-[calc(100%-56px)]'>
        <Sidebar/>
        <div className=' grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
          <div className=' grid grid-cols-1 gap-2 p-2'>
            {
              result?.map((item,index)=>{
                if(item?.type!=="video") return false
                return <Searchcard key={item.id} video={item?.video}/>

              })
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Search