import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black py-12 text-gray-400">
            <div className="max-w-7xl mx-auto px-8">
                {/* Upper Footer */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Get Started */}
                    <div>
                        <h4 className="text-white font-extrabold text-lg tracking-wide mb-6">Get Started</h4>
                        <ul className="space-y-3 text-base">
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Download TIDAL</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Pricing & Plans</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Transfer Music</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Supported Devices</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Get Support</a></li>
                        </ul>
                    </div>

                    {/* Discover TIDAL */}
                    <div>
                        <h4 className="text-white font-extrabold text-lg tracking-wide mb-6">Discover TIDAL</h4>
                        <ul className="space-y-3 text-base">
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">About</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">For Music</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">For Artists</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Culture</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Magazine</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Originals</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Rising</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Sound Quality</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">TIDAL Connect</a></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h4 className="text-white font-extrabold text-lg tracking-wide mb-6">Account</h4>
                        <ul className="space-y-3 text-base">
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Sign Up</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Redeem Voucher</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Redeem Giftcard</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Manage Account</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-extrabold text-lg tracking-wide mb-6">Company</h4>
                        <ul className="space-y-3 text-base">
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">What is TIDAL?</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Partners</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200 ease-in-out">Press</a></li>
                        </ul>
                    </div>

                    {/* Free Trial Button */}
                    <div className="col-span-1 md:col-span-4 flex justify-center md:justify-end mt-8 md:mt-0">
                        <button className="text-teal-500 border border-teal-500 px-8 py-3 rounded-full text-lg hover:bg-teal-500 hover:text-black transition-all duration-300 ease-in-out">
                            Start Free Trial
                        </button>
                    </div>
                </div>

                {/* Lower Footer */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-base">
                    <p className="text-sm text-gray-500">&copy; 2024 TIDAL Music AS</p>
                    <div className="space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">Privacy Notice</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">Terms and Conditions</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">Cookie Settings</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">Accessibility Statement</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">Contact</a>
                    </div>
                </div>

                {/* Social Media & Language Switcher */}
                <div className="flex justify-between items-center mt-8 text-base">
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">X</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">Instagram</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">Facebook</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">YouTube</a>
                        <a href="#" className="hover:text-white transition duration-200 ease-in-out">TikTok</a>
                    </div>
                    <div className="flex items-center">
                        <select className="bg-gray-900 text-white font-semibold border border-gray-700 rounded-lg px-4 py-2 text-xl">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="en">Hindi</option>
                            <option value="en">French</option>
                            {/* Add more language options as needed */}
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}
