"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MusicCards from '../components/musicCards';

const artists = [
    {
        name: 'Ed Shareen',
        image: '/ed.jpg',
        genre: 'Hip-Hop, Rap',
    },
    {
        name: 'Taylor Swift',
        image: '/ts.jpeg',
        genre: 'Pop, Country',
    },
    {
        name: 'Arijit Singh',
        image: '/as.jpg',
        genre: 'Bollywood, Romantic',
    },
    {
        name: 'Diljit Dosanjh',
        image: '/d.jpg',
        genre: 'Indian Pop, Pop',
    },
];

export default function ArtistGallery() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter artists based on search term
    const filteredArtists = artists.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative bg-black text-white h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-stars.avif" // Add your background image here
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-6 overflow-y-auto h-full">
                {/* Search Bar */}
                <div className="mb-12">
                    <input
                        type="text"
                        placeholder="Search for artists"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-6xl font-bold  p-12 mt-12">Listen by Artists</h1>

                {/* Artist Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredArtists.map((artist, idx) => (
                        <Link href={`/music/${idx + 1}`} key={idx}>
                            <div className="flex flex-col items-center p-6 transform hover:scale-105 transition-transform duration-300">
                                <div className="w-44 h-44 mb-4">
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="rounded-full w-full h-full object-cover border-4 border-purple-600"
                                    />
                                </div>
                                <p className="text-2xl font-bold">{artist.name}</p>
                                <p className="text-gray-400 text-sm mt-2">{artist.genre}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Listen by Genre */}
                <h1 className="text-6xl font-bold  p-12 mt-12">Listen by Genre</h1>
                <MusicCards />

                {/* No results found */}
                {filteredArtists.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">No artists found</p>
                )}
            </div>
        </div>
    );
}
