import React from 'react';

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false); // Ensure setVehiclePanelOpen is passed as a prop
        }}
        className="p-1 text-center absolute w-[93%] top-0 cursor-pointer"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>

      <div className="flex gap-2 justify-between items-center flex-col mt-5">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="logo"
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text font-medium">526/41-A</h3>
            <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-user-line"></i>
          <div>
            <h3 className="text font-medium">526/41-A</h3>
            <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-money-rupee-circle-line"></i>
          <div>
            <h3 className="text font-medium">₹193.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
