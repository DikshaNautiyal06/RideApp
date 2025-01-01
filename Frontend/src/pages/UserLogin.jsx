import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const userData = { email, password };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`, // Change to the login endpoint
        userData
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user); 
        localStorage.setItem('token', data.token)// Update user context
        // Optionally store token in localStorage
        // localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <div className="mx-0.5 -mt-5">
          <img
            className="h-36 w-36 rounded"
            src="/freepik_br_d736b35f-478a-4a46-a44e-e79dd48451a9.png"
            alt="logo"
          />
        </div>
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2 font-bold">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-xl mb-2 font-bold">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7"
            placeholder="password"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-0">
          New here?{' '}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2 w-full"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
