import React from "react";
import { FaHeart, FaCommentDots } from "react-icons/fa";
import post from "../../Resources/post.jpg";
import "./ReqUserPostCard.css";

const ReqUserPostCard = () => {
  return (
    <div className="p-2">
      <div className="post w-60 h-60">
        <img
          src={post}
          alt="post"
          className="cursor-pointer"
        />

        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div>
              <FaHeart /> <span>10</span>
            </div>

            <div>
              <FaCommentDots /> <span>8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
