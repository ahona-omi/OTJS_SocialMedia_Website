import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";

import logo from "../../Resources/logo.png";
import { mainu } from "./sidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();

  const handleTabClick=(title)=> {
    setActiveTab(title)

    if (title === "My Profile") {
      navigate("/username")
    } else if (title === "Home") {
      navigate("/")
    } else if (title === "Messages") {
      navigate("/inbox")
    } else if (title === "Reels") {
      navigate("/video")
    } else if (title === "Search") {
      navigate("/search")
    } else if (title === "Add Post") {
      navigate("/post")
    } else if (title === "Notification") {
      navigate("/notification")
    } else if (title === "Explore") {
      navigate("/explore")
    }
  }


  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-8">
        <div>
          <div className="mt-10">
            <img src={logo} alt="logo" style={{ width: "120px" }} />
          </div>

          <div className="mt-10">
            {mainu.map((item) => (
              <div onClick={()=> handleTabClick(item.title)} className="flex items-center mb-5 cursor-pointer text-lg">
                {activeTab === item.title? item.activeIcon:item.icon}
                <p className={`ml-3 ${activeTab === item.title ? 'font-bold' : 'font-semibold'}`}>{item.title}</p>

              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center cursor-pointer mb-10">
          <IoReorderThree className="text-2xl" />
          <p className="ml-3">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
