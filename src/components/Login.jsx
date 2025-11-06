
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post('https://employee-crud-django-1.onrender.com/login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .then((response) => {
        console.log(response.data);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        alert('Invalid credentials or server error');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl px-10 py-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Login
        </h2>

        <form onSubmit={login} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={loginForm.email}
              onChange={inputHandler}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-4 py-2 outline-none transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={inputHandler}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-4 py-2 outline-none transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;