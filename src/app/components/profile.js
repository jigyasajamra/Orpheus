import React from 'react';

const ArtistProfile = () => {
  // Dummy artist data (you can fetch this from an API or database in a real app)
  const artist = {
    name: 'Ed Sheeran',
    bio: `In a scene from Apple Music’s Songwriter documentary about Ed Sheeran, 
          the singer-songwriter struggles out into a garden in Malibu at dawn. Jet-lagged and carrying a cup of tea, 
          he sits down at his laptop and begins writing a song about the moment right in front of him: 
          the crisp air, the birdsong, the hot tea, the day ahead. Sheeran gets a full verse in, melody and all, and then pauses.`,
    hometown: 'Halifax, West Yorkshire, England',
    born: '17 February 1991',
    genre: 'Pop',
  };

  const similarArtists = [
    { name: 'Maroon 5', image: '/maroon5.jpg' },
    { name: 'Shawn Mendes', image: '/shawn.jpg' },
    { name: 'Sam Smith', image: '/sam.jpg' },
    { name: 'Charlie Puth', image: '/charlie.jpg' },
    { name: 'Lewis Capaldi', image: '/lewis.jpg' },
    { name: 'Adele', image: '/adele.jpg' },
    { name: 'Bruno Mars', image: '/bruno.jpg' },
    { name: 'Justin Bieber', image: '/justin.jpg' },
  ];

  return (
    <div className="p-8 text-white">
      {/* Main section */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* About Section */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">About {artist.name}</h1>
          <p className="text-gray-400 mb-6">
            {artist.bio} <span className="text-gray-600">...</span>
          </p>
        </div>

        {/* Artist Info */}
        <div className="md:w-1/3 flex flex-col text-right space-y-2">
          <div>
            <h4 className="text-gray-500">HOMETOWN</h4>
            <p>{artist.hometown}</p>
          </div>
          <div>
            <h4 className="text-gray-500">BORN</h4>
            <p>{artist.born}</p>
          </div>
          <div>
            <h4 className="text-gray-500">GENRE</h4>
            <p>{artist.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
