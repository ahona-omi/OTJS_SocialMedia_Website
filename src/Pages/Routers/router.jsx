import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from '../../Components/Sidebar/sidebar';
import Homepage from '../HomePages/homapage';
import Profile from '../Profiles/profile';

const Router = () => {
  return (
    <div>
      <div className="flex">
        <div className='w-[17%] min-w-[200px] border border-l-slate-700'>
          <Sidebar />
        </div>

        <div className='w-full'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/username" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Router;
