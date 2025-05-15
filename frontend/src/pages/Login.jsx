import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.webp';
import Footer from '../components/Common/Footer';
import Topbar from '../components/Layout/Topbar';
import Navbar from '../components/Layout/Navbar';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user login:", {email, password});
    };

    return (
       
            <div className="flex flex-col md:flex-row bg-gray-50" style={{ minHeight: 'calc(100vh - 120px)' }}>
                {/* Login Form - Left Side */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                    <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-indigo-600">Mithra</h2>
                        </div>
                        
                        <h2 className="text-xl font-bold text-center mb-2 text-gray-800">Welcome Back</h2>
                        <p className="text-center text-gray-500 text-sm mb-6">
                            Enter your credentials to access your account
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center text-xs text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-3 w-3 text-indigo-600 border-gray-300 rounded mr-2"
                                    />
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="text-xs text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm mt-4"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="mt-4 text-center text-xs text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Image - Right Side */}
                <div className="hidden md:block md:w-1/2" style={{ height: 'calc(100vh - 120px)' }}>
                    <img 
                        src={loginImage} 
                        alt="Login visual" 
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
         
    );
};

export default Login;