import React from 'react'
// import Video from './Video'
import { Link } from 'react-router-dom';
import Time from '../Loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

function Suggestionvideo({video}) {
    console.log(video);
  return (
    <div  className=''>
       <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3">
          {/* thumbnail */}
          <div className=" relative h-24 md:h-20 xl:h-24 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full rounded-lg"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex  space-x-2  mt-3">
            {/* logo */}
            <div className="flex items-start">
              <div className="flex h-9 w-9 overflow-hidden rounded-full border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            {/* title */}
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              {/* verified channel */}
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              {/* views */}
              <div className="flex text-gray-500 ">
                <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                <span classname="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1 ">
                  .
                </span>
                <span>{video?.publishdTimeText}</span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </Link>
    </div>
  )
}

export default Suggestionvideo
