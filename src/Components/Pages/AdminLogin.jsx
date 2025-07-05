import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "Niraj@321";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  const handleForgotPassword = () => {
    alert("Contact system admin or reset password manually. (Demo mode)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <p
          onClick={handleForgotPassword}
          className="mt-3 text-sm text-blue-500 hover:underline text-center cursor-pointer"
        >
          Forgot Password?
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
