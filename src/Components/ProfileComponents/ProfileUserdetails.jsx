import React from 'react';
import { MdOutlineSettingsSuggest } from "react-icons/md";
import profile from "../../Resources/prof.jpg";

export const ProfileUserdetails = () => {
  return (
    <div className="py-10 w-full border">
      <div className="flex items-start space-x-6 px-10">
{/* Profile Image */}
        <div className="w-[150px] flex-shrink-0">
          <img src={profile} alt="profile" style={{ width: "120px", height: "120px" }} className="rounded-full" />
        </div>

{/* User Details */}
        <div className="flex flex-col w-full space-y-5">
          {/* Username, Edit Button, and Settings Icon */}
          <div className="flex items-center space-x-4 mb-3">
            <p className="font-semibold text-lg">tom___cat</p>
            <button className="px-4 py-1 bg-blue-500 text-white rounded">Edit Profile</button>
            <MdOutlineSettingsSuggest className="text-2xl" />
          </div>

{/* Post, Followers, Following Count */}
          <div className="flex space-x-8 text-gray-700 mb-3">
            <div>
              <span className="font-semibold mr-1">10</span>
              <span>Posts</span>
            </div>
            <div>
              <span className="font-semibold mr-1">5</span>
              <span>Followers</span>
            </div>
            <div>
              <span className="font-semibold mr-1">5</span>
              <span>Following</span>
            </div>
          </div>

{/* Bio Information */}
          <div className="text-gray-800">
            <p className="font-semibold">Thomas Jasper Tom Cat Sr.</p>
            <p className="font-light text-sm mt-2">
            🐱 I'm an American cartoon character, created by William Hanna and Joseph Barbera. I'm a grey and white anthropomorphic (but usually silent) domestic short-haired tuxedo British cat who first appeared in the 1940 MGM animated short *Puss Gets the Boot*. I was known as "Jasper" during my debut in the short; however, beginning with my next appearance in *The Midnight Snack*, I was known as "Tom" or "Thomas"🐈
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserdetails;
