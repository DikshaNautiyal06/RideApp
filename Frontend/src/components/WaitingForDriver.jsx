import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.waitingForDriver(false); 
        }}
        className="p-1 text-center absolute w-[93%] top-0 cursor-pointer"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <div className='flex items-center justify-between'>
      <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="logo"
        />
        <div className='text-right'>
            <h2 className='text-lg font-medium'>
               Sarthak 
            </h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>
                MP 04 AB 1234
            </h4>
            <p className='text-sm'>Maruti Suzuki Alto</p>
        </div>
      </div>
    

      <div className="flex gap-2 justify-between items-center flex-col mt-5">
       
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
  )
}

export default WaitingForDriver
