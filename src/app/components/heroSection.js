import Head from 'next/head';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="relative min-h-screen bg-black">
            <Head>
                <title>Orpheus Music</title>
                <meta name="description" content="Orpheus - Listen to the best-in-class music experience." />
            </Head>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-stars.avif" // Background image for the entire section
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                />
            </div>

            {/* Header */}
            <header className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                <div className="text-white text-3xl font-bold">Orpheus</div>
                <nav className="space-x-8 text-white">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Support</a>
                    <a href="/login" className="hover:underline">Log in</a>
                    <a
                        href="#"
                        className="bg-white text-black px-4 py-2 rounded-full ml-4 hover:bg-gray-200 transition"
                    >
                        Start Free Trial
                    </a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 overflow-hidden text-white flex justify-center items-center h-screen px-8">
                {/* Left Column - Text */}
                <div className="max-w-lg mr-12"> {/* Adjusted margin-right to narrow the gap */}
                    <h1 className="text-6xl font-bold mb-4">Listen. Discover. Repeat.</h1>
                    <p className="text-xl mb-8">Hear your music in the best-in-class sound.</p>
                    <a
                        href="#"
                        className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold transition hover:bg-gray-200"
                    >
                        Start Free Trial
                    </a>
                </div>

                {/* Right Column - Larger Album Cover */}
                <div className="hidden md:block">
                    <div className="bg-gray-900 p-4 rounded-lg shadow-lg" style={{ maxWidth: "900px" }}>
                        <Image
                            src="/album-cover.jpg" // Add your album cover image here
                            alt="Album Cover"
                            width={550}
                            height={550}
                            className="rounded-lg"
                        />
                        <div className="mt-4">
                            <p className="text-white text-lg font-semibold">High Standards</p>
                            <p className="text-gray-400">by Wynne</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-sm text-gray-500">1:16</span>
                                <span className="text-sm text-gray-500">2:00</span>
                            </div>
                            <div className="relative mt-2 bg-gray-700 h-1 rounded-full">
                                <div className="absolute bg-red-500 h-1 w-1/2 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
