// src/pages/register.jsx
import React from "react";

const Register = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form>
        <label className="block mb-2">First Name:</label>
        <input type="text" className="border p-2 mb-4 w-full" placeholder="Enter your first name" />

        <label className="block mb-2">Surname:</label>
        <input type="text" className="border p-2 mb-4 w-full" placeholder="Enter your surname" />

        <label className="block mb-2">Email:</label>
        <input type="email" className="border p-2 mb-4 w-full" placeholder="Enter your email" />

        <label className="block mb-2">Password:</label>
        <input type="password" className="border p-2 mb-4 w-full" placeholder="Create a password" />

        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;