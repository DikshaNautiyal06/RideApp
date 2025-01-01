import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {
    const[finishRidePanel,setFinishRidePanel]=useState(false)
    const finishRidePanelRef=useRef(null)
    useGSAP(() => {
        if (finishRidePanel) {
          gsap.to(finishRidePanelRef.current, { transform: 'translateY(0)' });
        } else {
          gsap.to(finishRidePanelRef.current, { transform: 'translateY(100%)' });
        }
      }, [finishRidePanel]);

  return (
    <div className="h-screen relative">
        {/* Logo and Logout Button */}
        <div className="relative">
            {/* Logo */}
            <img
                className="h-12 w-12 rounded-full absolute shadow-lg  top-2 left-2"
                src="/freepik_br_d736b35f-478a-4a46-a44e-e79dd48451a9.png"
                alt="logo"
            />
            {/* Logout Button */}
            <Link
                to="/captain-home"
                className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2 shadow-md"
            >
                <i className="ri-logout-box-r-line"></i>
            </Link>
        </div>

        {/* Map Section */}
        <div className="h-4/5">
            <img
                className="h-full w-full object-cover"
                src="/freepik__candid-image-photography-natural-textures-highly-r__11933.jpeg"
                alt="map"
            />
        </div>
        <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10 
        ' onClick={()=>{
            setFinishRidePanel(true);
        }}>

<h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {
}}>
    <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
    </h5>
<h4 className='text-xl font-semibold'>4 KM away</h4>
<button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
</div>

<div 
            ref={finishRidePanelRef}className='fixed w-full z-10 bottom-0 h-screen bg-white 
            translate-y-full px-3 py-10 pt-12'>
              <FinishRide setFinishRidePanel={setFinishRidePanel}/>
              </div>
    </div>
  )
}

export default CaptainRiding
