import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {
  const[ridePopupPanel,setRidePopupPanel]=useState(true)
  const ridePopupPanelref=useRef(null)
  const[confirmRidePopUpPanel,setConfirmRidePopupPanel]=useState(false)
  const confirmRidePopUpPanelref=useRef(null)

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelref.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(ridePopupPanelref.current, { transform: 'translateY(100%)' });
    }
  }, [ridePopupPanel]);


  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelref.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(confirmRidePopUpPanelref.current, { transform: 'translateY(100%)' });
    }
  }, [confirmRidePopUpPanel]);
 
 

  return (
    <div className="h-screen">
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
                to="/home"
                className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2 shadow-md"
            >
                <i className="ri-logout-box-r-line"></i>
            </Link>
        </div>

        {/* Map Section */}
        <div className="h-5/2">
            <img
                className="h-full w-full object-cover"
                src="/freepik__candid-image-photography-natural-textures-highly-r__11933.jpeg"
                alt="map"
            />
        </div>
            <CaptainDetails />
            <div 
            ref={ridePopupPanelref}className='fixed w-full z-10 bottom-0  bg-white 
            translate-y-full px-3 py-10 pt-12'>
              <RidePopUp setRidePopupPanel={setRidePopupPanel}
              setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
               
            </div>


            <div 
            ref={confirmRidePopUpPanelref}className='fixed w-full z-10 bottom-0 h-screen bg-white 
            translate-y-full px-3 py-10 pt-12'>
              <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel}
              setRidePopupPanel={setRidePopupPanel} />
               
            </div>
            

    </div>
  )
}

export default CaptainHome
