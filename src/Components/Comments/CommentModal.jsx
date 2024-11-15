import React, { useRef } from "react";
import { IoMdCloseCircle, IoIosSend } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  BsBookmarkHeart,
  BsBookmarkHeartFill,
  BsChatLeftHeart,
} from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa6";
import { PiHeartbeatLight, PiHeartbeatFill } from "react-icons/pi";

import postHome from "../../Resources/postHome.jpg";
import profile from "../../Resources/prof.jpg";
import CommentCard from "./CommentCard";

function CommentModal({
  onClose,
  isSaved,
  isPostLiked,
  handlePostLike,
  handleSavedPost,
}) {
  const commentModalRef = useRef();

  const commentCloseModal = (e) => {
    if (commentModalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={commentModalRef}
      onClick={commentCloseModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-1 flex flex-col gap-5 text-black relative">
        <button onClick={onClose} className="place-self-end">
          <IoMdCloseCircle className="text-3xl" />
        </button>

        <div className="bg-white rounded-xl px-10 py-6 flex gap-5 mx-4 max-w-6xl h-[87vh]">
          <div className="w-[45%] flex flex-col justify-center">
            <img src={postHome} alt="postHome" className=" max-h-full w-full" />
          </div>

          <div className="w-[55%]">
            <div className="flex justify-between items-center py-5 px-2">
              <div className="flex items-center">
                <div>
                  <img
                    src={profile}
                    alt="profile"
                    className=" w-9 h-9 rounded-full"
                  />
                </div>

                <div className="ml-2">
                  <p className="text-sm">Tom & Jerry</p>
                </div>
              </div>

              <BiDotsHorizontalRounded />
            </div>

            <p>Examing...🩺</p>

            <hr />

            <div className="overflow-y-auto max-h-[45vh]">
              {[1, 1, 1, 1, 1].map(() => (
                <CommentCard />
              ))}
            </div>

            <div className="absolute bottom-0 w-[50%]">
              <div className="flex justify-between items-center py-4 border-t-2">
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

                  <FaRegCommentDots className="text-xl hover:opacity-60 cursor-pointer" />

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

              <div className="">
                <p>420 Likes</p>
                <p>
                  <span className="font-bold">Tom & Jerry</span>: Examing...🩺
                </p>
                <p className="opacity-60 py-2 text-xs">11 minutes ago</p>
              </div>

              <div className="border-t">
                <div className="flex items-center">
                  <BsChatLeftHeart className="opacity-60" />
                  <input
                    className="commentInput"
                    type="text"
                    placeholder="Add your comment..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
