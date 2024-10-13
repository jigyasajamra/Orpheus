// components/PlansDisplay.js
import React from 'react';

const PlansDisplay = () => {
    return (
        <div className="bg-gray-900 text-white p-10">
            <h2 className="text-4xl font-bold text-center mb-12">Press play on the perfect Orpheus plan</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
                {/* Individual Plan */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg border border-yellow-500 text-center md:text-left shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Individual</h3>
                    <span className="bg-yellow-600 text-black px-2 py-1 rounded text-sm">ADD-ONS AVAILABLE</span>
                    <p className="mt-6 font-medium text-lg">Powerful sound, on your terms</p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li>• 110M+ tracks in lossless, HiRes FLAC, and Dolby Atmos</li>
                        <li>• Ad-free, offline listening</li>
                        <li>• Personalized mixes, editorial playlists, and Live sessions</li>
                    </ul>
                    <div className="mt-8">
                        <h4 className="font-semibold text-xl">Add-on</h4>
                        <p className="mt-2">DJ Extension</p>
                        <p className="text-gray-400 mt-2">Catalog access and stem separation via select DJ partners. <a href="#" className="text-yellow-400 underline">Learn more</a></p>
                    </div>
                </div>

                {/* Family Plan */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg border border-yellow-500 text-center md:text-left shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Family (up to 6 members)</h3>
                    <span className="bg-yellow-600 text-black px-2 py-1 rounded text-sm">ADD-ONS AVAILABLE</span>
                    <p className="mt-6 font-medium text-lg">Music for the entire family</p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li>• 110M+ tracks in lossless, HiRes FLAC, and Dolby Atmos</li>
                        <li>• Ad-free, offline listening</li>
                        <li>• Clean playlists and curated content for kids</li>
                        <li>• Each member has an individual account</li>
                    </ul>
                    <div className="mt-8">
                        <h4 className="font-semibold text-xl">Add-on</h4>
                        <p className="mt-2">DJ Extension</p>
                        <p className="text-gray-400 mt-2">Catalog access and stem separation via select DJ partners. <a href="#" className="text-yellow-400 underline">Learn more</a></p>
                    </div>
                </div>

                {/* Student Plan */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg border border-yellow-500 text-center md:text-left shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Student</h3>
                    <span className="bg-yellow-600 text-black px-2 py-1 rounded text-sm">ADD-ONS AVAILABLE</span>
                    <p className="mt-6 font-medium text-lg">Eligible students save over 50%</p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li>• 110M+ tracks in lossless, HiRes FLAC, and Dolby Atmos</li>
                        <li>• Ad-free, offline listening</li>
                        <li>• Curated study playlists</li>
                    </ul>
                    <div className="mt-8">
                        <h4 className="font-semibold text-xl">Add-on</h4>
                        <p className="mt-2">DJ Extension</p>
                        <p className="text-gray-400 mt-2">Catalog access and stem separation via select DJ partners. <a href="#" className="text-yellow-400 underline">Learn more</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlansDisplay;
