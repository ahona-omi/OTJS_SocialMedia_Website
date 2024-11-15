import React, { useState } from 'react'

import profile1 from "../../Resources/prof1.jpg";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";

const CommentCard = () => {
    const [isCommentLike, setIsCommentLike] = useState(false);

    const handleLikeComment=() =>{
        setIsCommentLike(!isCommentLike)
    }

  return (
    <div>
        <div className='flex items-center justify-between py-5'>
            <div className='flex items-center'>
                <div>
                <img
                    src={profile1}
                    alt="profile1"
                    className=" w-9 h-9 rounded-full"
                  />
                </div>

                <div className='ml-2'>
                    <p>
                        <span className='font-semibold'>Jerry Mouse</span>

                        <span className='ml-2'>You can't catch me 😏</span>
                    </p>

                    <div className='flex items-center space-x-3 text-xs opacity-60'>
                        <span>1h</span>
                        <span>5 likes</span>
                        <span>Reply</span>
                    </div>
                </div>
            </div>

            {isCommentLike? <RiHeart2Fill onClick={handleLikeComment} className='text-xs hover:opacity-60 cursor-pointer text-red-800'/> : <RiHeart2Line onClick={handleLikeComment} className='text-xs hover:opacity-60 cursor-pointer'/>}
        </div>
    </div>
  )
}

export default CommentCard