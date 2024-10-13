import React from 'react';

const MusicCards = () => {
  const cards = [
    {
      title: 'Music 1',
      description: 'The new music that matters.',
      liveTime: 'LIVE · 08:30–12:30',
      liveTitle: 'The Apple Music 1 List',
      liveSubtitle: 'Hear our current obsessions and new discoveries.',
      imageUrl: '/album-cover.jpg', // Replace with actual image URLs
      bgColor: 'bg-red-600',
    },
    {
      title: 'Music Hits',
      description: 'Songs you know and love.',
      liveTime: 'LIVE · 10:30–12:30',
      liveTitle: "'90s Hits Essentials",
      liveSubtitle: 'A mix of the decade’s biggest tracks and lost favorites.',
      imageUrl: '/album-cover.jpg',
      bgColor: 'bg-blue-600',
    },
    {
      title: 'Music Country',
      description: 'Where it sounds like home.',
      liveTime: 'LIVE · 11:30–12:30',
      liveTitle: '2010s Country Essentials',
      liveSubtitle: 'The era of new-schoolers and outlaws.',
      imageUrl: '/album-cover.jpg', 
      bgColor: 'bg-blue-400',
    },
  ];

  return (
    <div className="min-h-3.5 p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {cards.map((card, idx) => (
          <div key={idx} className={`p-6 rounded-lg shadow-lg h-96 ${card.bgColor}`}>
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            {/* <p className="text-sm text-gray-300 mb-4">{card.description}</p> */}
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
              <p className="text-sm text-red-500 mb-2">{card.liveTime}</p>
              <h3 className="text-lg font-semibold">{card.liveTitle}</h3>
              <p className="text-sm text-gray-300">{card.liveSubtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicCards;
