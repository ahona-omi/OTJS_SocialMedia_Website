import React, { useState } from 'react';
import { BsPostageHeart } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { LuSave } from "react-icons/lu";
import { FaUserTag } from "react-icons/fa6";
import ReqUserPostCard from '../../Components/ProfileComponents/ReqUserPostCard';


export const ReqUserPostPart = () => {
  const [activeTab, setActiveTab] = useState("Posts"); // Default to "Posts"
  const tabs = [
    {
      icon: <BsPostageHeart />,
      tab: "Posts",
      activeTab: ""
    },
    {
      icon: <MdSlowMotionVideo />,
      tab: "Reels",
      activeTab: ""
    },
    {
      icon: <LuSave />,
      tab: "Saved",
      activeTab: ""
    },
    {
      icon: <FaUserTag />,
      tab: "Tagged",
      activeTab: ""
    },
  ]

  return (
    <div className='pl-20'>
      <div className='flex space-x-40 border-t relative'>
        {tabs.map((item) => (
          <div onClick={()=> setActiveTab(item.tab)} key={item.tab} className={`${activeTab===item.tab? "border-t border-black": "opacity-60"} flex items-center cursor-pointer py-2 text-sm`}>
            <p>{item.icon}</p>
            <p className='ml-1'>{item.tab}</p>
          </div>
        ))}
      </div>

      <div>
        <div className='flex flex-wrap'>
          {[1,1,1,1,1,1,1].map((item)=><ReqUserPostCard />)}
        </div>
      </div>
    </div>

  );
};

export default ReqUserPostPart;
