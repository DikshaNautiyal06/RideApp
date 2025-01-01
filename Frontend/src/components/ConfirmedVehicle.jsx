import React from 'react';

const ConfirmedVehicle = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setConfirmedVehiclePanel(false)}
        className="p-1 text-center absolute w-[93%] top-0 cursor-pointer"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>

      <div className="flex flex-col items-center mt-5">
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
            <h3 className="font-medium">526/41-A</h3>
            <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-user-line"></i>
          <div>
            <h3 className="font-medium">526/41-A</h3>
            <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-money-rupee-circle-line"></i>
          <div>
            <h3 className="font-medium">₹193.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          props.setVehicleFound(true);
          props.setConfirmedVehiclePanel(false); // Fix: Ensure this prop function is properly passed from the parent
        }}
        className="mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg"
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmedVehicle;
