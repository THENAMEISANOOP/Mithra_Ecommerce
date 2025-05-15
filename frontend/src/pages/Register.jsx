import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.webp';
import Footer from '../components/Common/Footer';
import Topbar from '../components/Layout/Topbar';
import Navbar from '../components/Layout/Navbar';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user register:", {name, email, password});
    };

    return (
       
            <div className="flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-gray-100" style={{ minHeight: 'calc(100vh - 120px)' }}>
                {/* Registration Form - Left Side */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-indigo-600 mb-1">Mithra</h2>
                            <div className="w-16 h-1 bg-indigo-400 mx-auto"></div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-center mb-3 text-gray-800">Create Account</h2>
                        <p className="text-center text-gray-500 text-sm mb-8">
                            Join our community today
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                    placeholder="Create a password"
                                    required
                                />
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 px-4 rounded-xl hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md transition-all duration-200"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Image - Right Side */}
                <div className="hidden md:block md:w-1/2 relative" style={{ height: 'calc(100vh - 120px)' }}>
                    <div className="absolute inset-0 bg-indigo-600 opacity-10"></div>
                    <img 
                        src={loginImage} 
                        alt="Registration visual" 
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
        
    );
};

export default Register;