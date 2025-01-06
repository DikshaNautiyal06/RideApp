import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const captain = { email, password };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captain
      );

      if (response.status === 200) {
        const data = response.data;

        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');

        // Clear input fields on success
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        {/* Logo */}
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Driver Logo"
        />

        {/* Login Form */}
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          Join a fleet?{' '}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>

      {/* Switch to User Login */}
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
