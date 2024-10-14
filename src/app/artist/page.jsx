"use client";
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'; // For play and pause icons
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackward, faForward, faPlay, faPause, faRepeat, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import ArtistProfile from '@/app/components/profile';


// Sample songs (replace with real URLs)
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

export default function Home() {
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
        <div className="flex flex-col h-screen bg-black text-white z-20">
        <div className="absolute inset-0">
                    <Image
                        src="/bg.jpg" // Add your background image here
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                    />
                </div>
            <div className='flex flex-row p-6 pl-24 overflow-y-auto'>
                
                <div className="bg-red-500 h-60 w-60 rounded-full relative overflow-hidden">
                    <Image
                        src="/ed.jpg"
                        alt="Now Playing Cover"
                        layout="fill" // Fills the parent container
                        objectFit="cover" // Ensures the image covers the div
                        className="rounded-full"
                    />
                </div>
                <div className=" p-8 ml-40 rounded-lg shadow-lg max-w-lg">
                    <h1 className="text-5xl font-bold text-white tracking-wider mb-4">NeelKamal Singh</h1>
                    <p className="text-lg text-white opacity-80">
                        Bhojpuri-Music • Music Enthusiast • Dreamer
                    </p>
                </div>

            </div>



            {/* Main Content */}
            <div className="flex-1 bg-black p-6 overflow-y-auto">
                <h3 className="text-4xl font-bold text-blue-700 mb-6">Your Uploads</h3>
                <div className="grid grid-cols-4 gap-6 mb-12">
                    {songs.slice(0, 4).map((song, idx) => (
                        <div key={idx} className="relative bg-gray-800 rounded-lg p-4">
                            <Image src={song.cover} width={200} height={200} alt={song.title} className="rounded-md mb-4" />
                            <p className="font-bold">{song.title}</p>
                            <p className="text-gray-400 text-sm">{song.artist}</p>
                            {/* Play Button */}
                            <button
                                className="absolute bottom-4 right-4 bg-green-500 text-black rounded-full p-2"
                                onClick={() => handlePlayPause(song)}
                            >
                                {currentSong?.title === song.title && isPlaying ? (
                                    <PauseIcon className="w-6 h-6" />
                                ) : (
                                    <PlayIcon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-4 gap-6 mb-12">
                    {songs.slice(4, 8).map((song, idx) => (
                        <div key={idx} className="relative bg-gray-800 rounded-lg p-4">
                            <Image src={song.cover} width={200} height={200} alt={song.title} className="rounded-md mb-4" />
                            <p className="font-bold">{song.title}</p>
                            <p className="text-gray-400 text-sm">{song.artist}</p>
                            {/* Play Button */}
                            <button
                                className="absolute bottom-4 right-4 bg-green-500 text-black rounded-full p-2"
                                onClick={() => handlePlayPause(song)}
                            >
                                {currentSong?.title === song.title && isPlaying ? (
                                    <PauseIcon className="w-6 h-6" />
                                ) : (
                                    <PlayIcon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                <h3 className="text-4xl font-bold text-blue-700 mb-6">Your Earnings : 1.6 APT</h3>
                        
                </div>
                <ArtistProfile />
            </div>




            
            
            {/* Now Playing Bar */}
            {currentSong && (
                <div className="w-[83%] bg-gray-800 p-4 fixed bottom-0 flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src={currentSong.cover} width={60} height={60} alt="Now Playing Cover" className="rounded-md" />
                        <div className="ml-4">
                            <p className="font-bold text-lg">{currentSong.title}</p>
                            <p className="text-gray-400 text-sm">{currentSong.artist}</p>
                        </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faShuffle} className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faBackward} className="w-5 h-5" />
                        </button>
                        <button onClick={() => handlePlayPause(currentSong)} className="bg-green-500 text-black rounded-full p-3">
                            {isPlaying ? (
                                <FontAwesomeIcon icon={faPause} className="w-5 h-5" />
                            ) : (
                                <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                            )}
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faForward} className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faRepeat} className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-grow mx-6">
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            value={progress}
                            onChange={(e) => sound.seek([e.target.value])}
                            className="w-full h-1 bg-gray-600 rounded-full"
                        />
                    </div>

                    {/* Volume Control */}
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faVolumeDown} className="w-5 h-5 text-gray-400" />
                        <input
                            type="range"
                            min="0"
                            max="100"
                            className="w-24 h-1 bg-gray-600 rounded-full"
                        />
                    </div>
                </div>
            )}

        </div>
    );
}
