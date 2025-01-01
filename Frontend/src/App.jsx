import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import Home from './pages/Home';
import CaptainHome from './pages/CaptainHome';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout'; 
import Riding from './pages/Riding';// Import CaptainLogout
import CaptainRiding from './pages/CaptainRiding';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path='/riding' element={<Riding />}/>
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-riding"
        element={<CaptainRiding />} />


        <Route 
          path="/home" 
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } 
        />
        <Route 
          path="/user/logout" 
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          } 
        />
        <Route 
          path="/captain-home" 
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          } 
        />
        <Route 
          path="/captain-logout" 
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          } 
        />
      </Routes>

    </div>
  );
};

export default App;
