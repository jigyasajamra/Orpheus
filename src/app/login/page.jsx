"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthComponent() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Auth Box */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-stars.avif" // Background image for the entire section
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40"
                />
            </div>
            <div className="relative bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row w-full max-w-5xl">
                {/* Left Side (Form) */}
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        {isLogin ? "Login to Your Account" : "Create a New Account"}
                    </h2>

                    {/* Form */}
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 rounded-lg bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-4 rounded-lg bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                            />
                        </div>
                        <Link href="/artist">
                       
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                        </Link>
                    </form>

                    {/* Toggle Between Login/Signup */}
                    <p className="text-center text-gray-500 mt-6">
                        {isLogin ? (
                            <>
                                Don't have an account?{" "}
                                <span
                                    onClick={toggleForm}
                                    className="text-indigo-600 cursor-pointer"
                                >
                                    Sign up
                                </span>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <span
                                    onClick={toggleForm}
                                    className="text-indigo-600 cursor-pointer"
                                >
                                    Log in
                                </span>
                            </>
                        )}
                    </p>
                </div>

                {/* Right Side (Decorative) */}
                <div className="md:w-1/2 hidden md:block relative">
                    <Image
                        src="/dj.jpg" // Replace with your own image
                        alt="Auth Side Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-r-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-70 rounded-r-2xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white z-10">
                            {isLogin ? "Welcome Back!" : "Join Us Now!"}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
