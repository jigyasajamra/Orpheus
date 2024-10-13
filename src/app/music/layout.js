// app/layout.js
"use client";
import Sidebar from "../components/sidebar";
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'; // For play and pause icons
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faCompass, faClock, faPodcast, faHeart, faList } from '@fortawesome/free-solid-svg-icons';


const songs = [
    {
        title: 'Daily Mix 1',
        artist: 'Yo Yo Honey Singh, Mahalakshmi Iyer, Diljit',
        cover: 'https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png',
        soundUrl: '/path-to-song1.mp3',
    },
    {
        title: 'Daily Mix 2',
        artist: 'Harnoor, Guru Randhawa, Karan Aujla',
        cover: 'https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png',
        soundUrl: '/path-to-song2.mp3',
    },
    {
        title: 'Daily Mix 3',
        artist: 'Mitraz, Anuv Jain, The Local Train',
        cover: 'https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png',
        soundUrl: '/path-to-song3.mp3',
    },
    {
        title: 'Daily Mix 4',
        artist: 'Agam Aggarwal, Jubin Nautiyal, Rock D',
        cover: 'https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png',
        soundUrl: '/path-to-song4.mp3',
    },
    {
        title: 'Daily Mix 5',
        artist: 'Another Artist',
        cover: 'https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png',
        soundUrl: '/path-to-song5.mp3',
    },
    {
        title: 'Daily Mix 6',
        artist: 'Another Artist',
        cover: 'https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png',
        soundUrl: '/path-to-song6.mp3',
    },
];

export default function Layout({ children }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [play, { stop, pause, sound }] = useSound(currentSong ? currentSong.soundUrl : '', {
        onend: () => setIsPlaying(false),
    });

    // Handle play/pause functionality
    const handlePlayPause = (song) => {
        if (currentSong?.title === song.title) {
            if (isPlaying) {
                pause();
                setIsPlaying(false);
            } else {
                play();
                setIsPlaying(true);
            }
        } else {
            stop();
            setCurrentSong(song);
            play();
            setIsPlaying(true);
        }
    };

    // Update progress and duration of song
    useEffect(() => {
        if (sound) {
            const interval = setInterval(() => {
                setProgress(sound.seek());
                setDuration(sound.duration() / 1000);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [sound]);

    return (
        <div className="flex h-screen bg-black text-white">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-900 p-6 space-y-6 border-r border-gray-700 shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-4">Your Library</h2>
                <ul className="space-y-4">
                    {[
                        { name: 'Home', icon: faHome },
                        { name: 'New', icon: faNewspaper },
                        { name: 'Explore', icon: faCompass },
                        { name: 'Recently Played', icon: faClock },
                        { name: 'Podcasts', icon: faPodcast },
                        { name: 'Liked Songs', icon: faHeart },
                        { name: 'Playlists', icon: faList },
                    ].map((item) => (
                        <li key={item.name}>
                            <a
                                href="#"
                                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 rounded-lg p-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600"
                            >
                                <span className="mr-3 text-xl">
                                    <FontAwesomeIcon icon={item.icon} />
                                </span>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>



            {/* Main Content */}
            <aside className="max-h-screen sticky w-full">{children}</aside>
        </div>
    );
}
