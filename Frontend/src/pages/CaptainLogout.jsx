import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const token = localStorage.getItem('captain-token');
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger the logout API call when the component mounts
        const logout = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    localStorage.removeItem('captain-token');
                    navigate('/captain-login');
                }
            } catch (error) {
                console.error('Error during logout:', error.response?.data || error.message);
                // Optional: Redirect to login or show an error message
                navigate('/captain-login');
            }
        };

        logout();
    }, [token, navigate]);

    return <div>Logging out...</div>;
};

export default CaptainLogout;
