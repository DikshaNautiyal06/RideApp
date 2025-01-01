import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
    return (
        <div >

            <h5
                onClick={() =>
                    props.setFinishRidePanel(false)

                }
                className="p-1 text-center absolute w-[93%] top-0 cursor-pointer"
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Finish this ride!</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400'>
                <div className='flex items-center gap-3 '>
                    <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/profile-1680768540880-eb67a302289dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"></img>
                    <h2 className='text-lg font-medium'>Dhruv Singh</h2>
                </div>
                <h5 className='text-lg font-semibold '>2.2 KM</h5>
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



                <div className='mt-6 w-full'>


                    <Link to='/captain-home'
                        className="mt-5 w-full bg-green-600 flex justify-center text-white font-semibold p-2 rounded-lg"
                    >
                        Finish Ride
                    </Link>
                    <p className='text-red-500 mt-10 text-xs'>click on finish ride button if you have completed the payment</p>


                </div>
            </div>

        </div>
    )
}

export default FinishRide
