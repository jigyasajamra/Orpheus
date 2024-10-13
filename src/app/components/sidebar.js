// components/Sidebar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faCompass, faClock, faPodcast, faHeart, faList } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    return (
        <div className="w-1/5 bg-gray-900 p-6 space-y-6 border-r border-gray-700 rounded-lg shadow-lg">
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
    );
}
