import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { SocketContext } from '../context/SocketContext';

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);
    const { socket } = useContext(SocketContext);
    const [rideDetails, setRideDetails] = useState(null);

    useEffect(() => {
        // Listen for ride updates from the server
        socket.on('rideConfirmed', (data) => {
            if (data.captainId === captain._id) {
                console.log('Ride confirmed for this captain:', data);
                setRideDetails(data); // Update the state with new ride details
            }
        });

        return () => {
            socket.off('rideConfirmed'); // Clean up the event listener on unmount
        };
    }, [socket, captain]);

    if (!captain) {
        return <div>Loading captain details...</div>;
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s'
                        alt=''
                    />
                    <h4 className='text-lg font-medium capitalize'>
                        {captain.fullname.firstname + ' ' + captain.fullname.lastname}
                    </h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
            {rideDetails && (
                <div className='mt-8 p-4 bg-blue-100 rounded-xl'>
                    <h3 className='text-lg font-bold'>Ride Details</h3>
                    <p>Ride ID: {rideDetails.rideId}</p>
                    <p>Pickup Location: {rideDetails.pickupLocation}</p>
                    <p>Drop Location: {rideDetails.dropLocation}</p>
                    <p>Status: {rideDetails.status}</p>
                </div>
            )}
        </div>
    );
};

export default CaptainDetails;
