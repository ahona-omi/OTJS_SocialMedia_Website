import React from "react";

import profile from "../../Resources/prof.jpg";
import SuggestionCard from "./SuggestionCard";

const homeRight = () => {
  return (
    <div className="border-b mt-5">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-5">
            <div>
              <img
                src={profile}
                alt="profile"
                className=" w-12 h-12 rounded-full"
              />
            </div>

            <div className="ml-3">
              <p className="font-semibold">Thomas Jasper Tom Cat Sr.</p>
              <p className="opacity-60">tom___cat</p>
            </div>
          </div>
          <div>
            <button className="text-[#00745B] font-semibold">Switch</button>
          </div>
        </div>

        <hr />

        <div className="overflow-y-auto max-h-[100%] space-y-5 mt-5 mb-5">
          {[1, 1, 1, 1, 1].map((item) => (
            <SuggestionCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default homeRight;
