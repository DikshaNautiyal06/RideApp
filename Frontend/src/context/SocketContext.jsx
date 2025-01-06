import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

// Create a single socket instance
const socket = io(`${import.meta.env.VITE_BASE_URL}`, {
    transports: ['websocket'], // Ensure stable connection
});

const SocketProvider = ({ children }) => {
    useEffect(() => {
        // Log socket connection
        socket.on('connect', () => {
            console.log('Connected to server with socket ID:', socket.id);
        });

        // Log socket disconnection
        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        // Cleanup function to avoid memory leaks
        return () => {
            socket.removeAllListeners(); // Removes all event listeners
        };
    }, []); // No dependencies, only runs once

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
