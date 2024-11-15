import React from 'react'

import story from "../../Resources/prof.jpg";

const storyCircle = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center'>
        <img src={story} alt="story" className=" w-16 h-16 rounded-full" />
        <p>Tom</p>
    </div>
  )
}

export default storyCircle