import React from 'react'
import { Link } from 'react-router-dom';


const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home'className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2'>
            <i className="ri-home-9-line"></i>
            </Link>
            <div className="h-1/2">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="map"
                />
            </div>
            <div className='h-1/2 p-2'>
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


                <div className="flex justify-between items-center flex-col mt-5">

                </div>
                <div className="w-full mt-1">
                   
                    
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
                <button className="mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>


            </div>


        </div>
    )
}

export default Riding
