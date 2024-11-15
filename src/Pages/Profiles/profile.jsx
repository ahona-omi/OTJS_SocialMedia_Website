import React from 'react';
import { ProfileUserdetails } from '../../Components/ProfileComponents/ProfileUserdetails';
import { ReqUserPostPart } from '../../Components/ProfileComponents/ReqUserPostPart';

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileUserdetails />
      </div>

      <div>
        <ReqUserPostPart />
      </div>
    </div>
  );
}

export default Profile;
