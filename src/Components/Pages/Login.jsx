import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [forgot, setForgot] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="w-full flex justify-end mt-10 px-6">
      <div className="w-80 p-5 bg-white border border-gray-300 rounded-md shadow-sm text-sm">
        {!forgot ? (
          <>
            <h2 className="text-xl font-semibold mb-5 text-gray-900">Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded mb-4 transition duration-200">
              Login
            </button>

            <button
              onClick={() => setForgot(true)}
              className="text-blue-600 hover:underline mb-4 block text-sm"
            >
              Forgot Password?
            </button>

            <p className="text-gray-600 text-center text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-green-600 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-5 text-gray-900">Forgot Password</h2>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={() => alert('Code sent to phone (simulate)')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded mb-4 transition duration-200"
            >
              Send Code
            </button>
            <button
              onClick={() => setForgot(false)}
              className="w-full text-left text-gray-600 hover:underline text-sm"
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
