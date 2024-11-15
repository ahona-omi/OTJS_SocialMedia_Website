import React, { useState } from "react";
import {
  BsThreeDots,
  BsBookmarkHeart,
  BsBookmarkHeartFill,
  BsChatLeftHeart,
} from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { PiHeartbeatLight, PiHeartbeatFill } from "react-icons/pi";

import "./postCard.css";
import story from "../../Resources/prof.jpg";
import postHome from "../../Resources/postHome.jpg";
import CommentModal from "../Comments/CommentModal";

const PostCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleSavedPost = () => {
    setIsSaved(!isSaved);
  };

  const toggleCommentModal = () => {
    setIsCommentModalVisible(!isCommentModalVisible);
  };

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img src={story} alt="story" className=" w-12 h-12 rounded-full" />

            <div className="pl-2">
              <p className="font-semibold text-sm">Tom & Jerry</p>
              <p className="font-thin text-sm">USA</p>
            </div>
          </div>

          <div className="dropdown">
            <BsThreeDots onClick={handleClick} className="dots" />
            <div className="dropdownContent">
              {showDropdown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full">
          <img src={postHome} alt="postHome" className=" w-full" />
        </div>

        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <PiHeartbeatFill
                onClick={handlePostLike}
                className="text-2xl hover:opacity-60 cursor-pointer text-red-800"
              />
            ) : (
              <PiHeartbeatLight
                onClick={handlePostLike}
                className="text-2xl hover:opacity-60 cursor-pointer"
              />
            )}

            <FaRegCommentDots
              onClick={toggleCommentModal}
              className="text-xl hover:opacity-60 cursor-pointer"
            />

            <IoIosSend className="text-xl hover:opacity-60 cursor-pointer" />
          </div>

          <div>
            {isSaved ? (
              <BsBookmarkHeartFill
                onClick={handleSavedPost}
                className="text-xl hover:opacity-60 cursor-pointer"
              />
            ) : (
              <BsBookmarkHeart
                onClick={handleSavedPost}
                className="text-xl hover:opacity-60 cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="w-full py-2 px-5">
          <p>420 Likes</p>
          <p>
            <span className="font-bold">Tom & Jerry</span>: Examing...🩺
          </p>
          <p className="opacity-60 py-2 cursor-pointer">View all 69 comments</p>
        </div>

        <div className="border-t w-full">
          <div className="flex items-center w-full px-5">
            <BsChatLeftHeart className="opacity-60" />
            <input
              className="commentInput"
              type="text"
              placeholder="Add your comment..."
            />
          </div>
        </div>

        {isCommentModalVisible && (
          <CommentModal
            onClose={() => setIsCommentModalVisible(false)}
            isSaved={isSaved}
            isPostLiked={isPostLiked}
            handlePostLike={handlePostLike}
            handleSavedPost={handleSavedPost}
          />
        )}
      </div>
    </div>
  );
};

export default PostCard;
