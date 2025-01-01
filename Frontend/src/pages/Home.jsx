import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedVehicle from '../components/ConfirmedVehicle';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedVehiclePanel, setConfirmedVehiclePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const[waitingForDriver,setwaitingForDriver]=useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedVehiclePanelref = useRef(null);
  const vehicleFoundref = useRef(null);
  const waitingForDriverref=useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '70%', padding: 20 });
      gsap.to(panelCloseRef.current, { opacity: 1 });
    } else {
      gsap.to(panelRef.current, { height: '0%', padding: 0 });
      gsap.to(panelCloseRef.current, { opacity: 0 });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(100%)' });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmedVehiclePanel) {
      gsap.to(confirmedVehiclePanelref.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(confirmedVehiclePanelref.current, { transform: 'translateY(100%)' });
    }
  }, [confirmedVehiclePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundref.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(vehicleFoundref.current, { transform: 'translateY(100%)' });
    }
  }, [vehicleFound]);


  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverref.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(waitingForDriverref.current, { transform: 'translateY(100%)' });
    }
  }, [waitingForDriver]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Header */}
      <div className="absolute top-5 left-5">
        <img
          className="h-16 w-16 rounded-full shadow-lg"
          src="/freepik_br_d736b35f-478a-4a46-a44e-e79dd48451a9.png"
          alt="logo"
        />
      </div>

      {/* Map Background */}
      <div className="h-full w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>

      {/* Form Panel */}
      <div className="flex flex-col justify-end h-screen top-0 absolute w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 text-2xl right-6 top-6 cursor-pointer"
          >
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="font-semibold text-3xl">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-3xl mt-5 w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-3xl mt-3 w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 overflow-hidden">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* Vehicle Selection Panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel
           setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmedVehiclePanel={setConfirmedVehiclePanel}
          setVehicleFound={setVehicleFound}
          
          
        />
      </div>

      {/* Confirmed Vehicle Panel */}
      <div
        ref={confirmedVehiclePanelref}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmedVehicle
  setVehicleFound={setVehicleFound}
  setConfirmedVehiclePanel={setConfirmedVehiclePanel} 
/>

      </div>

      {/* Looking for Driver Panel */}
      <div
        ref={vehicleFoundref}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>


      {/*waiting for driver*/}
      <div
      ref={waitingForDriverref}
        
        className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
