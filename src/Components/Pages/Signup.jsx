import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="w-full flex justify-end mt-10 pr-6">
      <div className="w-[250px] p-5 bg-white border border-gray-300 rounded-md shadow-sm text-sm">
        <h2 className="text-xl font-semibold mb-5 text-gray-900">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded mb-4 transition duration-200">
          Create Account
        </button>

        <p className="text-gray-600 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
