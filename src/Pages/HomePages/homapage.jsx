import React from 'react';

import StoryCircle from '../../Components/Story/storyCircle';
import PostCard from '../../Components/Posts/PostCard';
import HomeRight from '../../Components/HomeRight/homeRight';

const Homepage =() => {
  return (
    <div>
      <div className='wt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-3 border p-4 rounded-md justify-start w-full'>
            {[1, 1, 1].map((item)=> <StoryCircle/>)}
          </div>

          <div className='space-y-10 w-full mt-10'>
            {[1, 1, 1].map((item)=> <PostCard/>)}
          </div>
        </div>

        <div className='w-[35%]'>
            <HomeRight/>
          </div>
      </div>
    </div>
  );
}

export default Homepage;
