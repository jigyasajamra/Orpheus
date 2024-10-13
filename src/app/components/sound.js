// components/SoundQualityDisplay.js
import React from "react";

const SoundQualityDisplay = () => {
    return (
        <div className="bg-black text-white p-12">
            <h2 className="text-4xl font-bold mb-6">Powerful sound for any purpose</h2>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Max Quality */}
                
                <div className="flex-1 text-center md:text-left px-4">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <span className="font-bold text-lg">Max</span>
                        <span className="bg-yellow-600 text-black px-2 py-1 rounded text-sm">MAX</span>
                        <span className="text-gray-400">(Up to 24-bit, 192 kHz)</span>
                    </div>
                    <p className="text-gray-300">
                        Experience best-in-class sound quality that opens up every detail with HiRes Free
                        Lossless Audio Codec (HiRes FLAC). Best enjoyed on 5G or WiFi with a hardware connection.
                    </p>
                </div>

                {/* High Quality */}
                <div className="flex-1 text-center md:text-left px-4">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <span className="font-bold text-lg">High</span>
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">HIGH</span>
                        <span className="text-gray-400">(Up to 16-bit, 44.1 kHz)</span>
                    </div>
                    <p className="text-gray-300">
                        Listen to over 110M songs in studio quality with FLAC. As an open-source format,
                        every artist can create and deliver high-fidelity music with ease.
                    </p>
                </div>

                {/* Low Quality */}
                <div className="flex-1 text-center md:text-left px-4">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <span className="font-bold text-lg">Low</span>
                        <span className="bg-gray-600 text-white px-2 py-1 rounded text-sm">LOW</span>
                        <span className="text-gray-400">(Up to 320 kbps)</span>
                    </div>
                    <p className="text-gray-300">
                        Get the music you love on the go without worrying about data. Useful when you have a
                        weak signal, are reaching your data cap, or are running out of download space.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SoundQualityDisplay;
