import React from 'react'

function Listitem() {
    const Categories=[
        "All",
        "Music",
        "React Routers",
        "Computer programming",
        "movie musicals",
        "Indian national cricket team",
        "News",
        "Mixes",
        "Telegu cinema",
        "live",
        "Learn coding",

    ]
  return (
    <div className='flex overflow-x-scroll hide-scroll-bar px-4 py-2 '>
    <div className='flex space-x-4 flex-nowrap'>
    {
        Categories.map((Category)=>{
            return(
                <div className='flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer '>{Category}</div>
            )

        })
      }
    </div>
    </div>
  )
}

export default Listitem
