import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.warn('No token found in localStorage.');
            navigate('/login'); // Redirect to login if no token is found
            return;
        }

        axios
            .get(`${import.meta.env.VITE_API_URL}/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login'); 
                }
            })
            .catch((error) => {
                console.error('Logout failed:', error);
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token'); // Handle unauthorized token
                    navigate('/login');
                }
            });
    }, [navigate]); 

    return <div>UserLogout</div>;
};

export default UserLogout;
 