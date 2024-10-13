"use client";
import React, { useState } from 'react';

const artists = [
    {
        name: 'Arijit Singh',
        image: '/ed.jpg',
        genre: 'Bollywood, Indian Pop',
    },
    {
        name: 'Taylor Swift',
        image: '/ed.jpg',
        genre: 'Pop, Country',
    },
    {
        name: 'Drake',
        image: '/ed.jpg',
        genre: 'Hip-Hop, Rap',
    },
    {
        name: 'Billie Eilish',
        image: '/ed.jpg',
        genre: 'Alternative, Pop',
    },
    {
        name: 'Eminem',
        image: '/ed.jpg',
        genre: 'Rap, Hip-Hop',
    },
];

export default function ArtistGallery() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter artists based on search term
    const filteredArtists = artists.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-black text-white">
            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for artists"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            {/* Artist Grid */}
            <div className="grid grid-cols-2 gap-8">
                {filteredArtists.map((artist, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                        <div className="w-40 h-40 mb-4">
                            <img
                                src={artist.image}
                                alt={artist.name}
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xl font-semibold">{artist.name}</p>
                        <p className="text-gray-400 text-sm mt-1">{artist.genre}</p>
                    </div>
                ))}
            </div>

            {/* No results found */}
            {filteredArtists.length === 0 && (
                <p className="text-center text-gray-500 mt-6">No artists found</p>
            )}
        </div>
    );
}
