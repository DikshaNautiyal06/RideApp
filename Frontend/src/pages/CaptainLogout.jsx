import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const token = localStorage.getItem('captain-token');
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
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
        console.error('Logout failed:', error.response?.data?.message || error.message);
      }
    };

    handleLogout();
  }, [token, navigate]);

  return (
    <div className="h-screen flex items-center justify-center">
      <h2 className="text-xl font-semibold">Logging you out...</h2>
    </div>
  );
};

export default CaptainLogout;
