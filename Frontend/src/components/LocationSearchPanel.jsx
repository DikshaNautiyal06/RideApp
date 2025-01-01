import React from 'react';


const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Police Station, General Store",
    "Third Wave Coffee, Near Police Station, General Store",
    "Block-C, Outer Ring Road, Ambalipura, Bellandur, Bengaluru, Karnataka, India",
    "14th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
  ];

  return (
    <div className="p-4">
      {locations.map((location, index) => (
        <div 
        onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
        }}
          key={index}
          className="flex gap-4 items-center border-gray active:border-black rounded-xl justify-start p-3 my-2 border-2"
        >
          
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-2-fill"></i>
          </h2>
         
          <h4 className="font-semibold">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
