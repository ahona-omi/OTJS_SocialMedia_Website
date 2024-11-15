import React from "react";

import profile1 from "../../Resources/prof1.jpg";

const SuggestionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={profile1}
          alt="profile1"
          className=" w-10 h-10 rounded-full"
        />

        <div className="ml-2">
          <p className="text-sm font-semibold">jerry_420_mouse</p>
          <p className="text-sm font-semibold opacity-60">Follows you</p>
        </div>
      </div>
      <button className="text-[#976700] text-sm font-semibold">Follow</button>
    </div>
  );
};

export default SuggestionCard;
