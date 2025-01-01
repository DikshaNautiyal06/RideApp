import React, { useState } from 'react';
import { Link } from 'react-router-dom'



const Start = () => {
 
  return (
    <div
      className="h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        
        backgroundImage: `url('/maxim-abramov-GFjyimhomaM-unsplash (1).jpg')`,
        
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
    >
      <div className="mx-0.5" style={{ marginTop: '-20px' }}>
        <img
          className="h-36 w-36 rounded"
          src="/freepik_br_d736b35f-478a-4a46-a44e-e79dd48451a9.png"
          alt="logo"
        />
      </div>

      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-2xl font-bold">Get Started With GlideCab</h2>
        <Link to ='/login'className="flex items -center  justify-center w-full bg-black text-white py-3 rounded mt-5 font-bold text-xl">Continue</Link>
      </div>
    </div>
  );
};

export default Start;
