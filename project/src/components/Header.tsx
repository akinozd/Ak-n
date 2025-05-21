import React from 'react';
import { Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-blue-800 text-2xl font-bold">
          <Package2 size={32} className="text-yellow-500" />
          <span>Akın</span>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link 
                to="/sell" 
                className="text-gray-700 hover:text-blue-800 transition duration-300"
              >
                Eşya Sat
              </Link>
            </li>
            <li>
              <Link 
                to="/retrieve" 
                className="text-gray-700 hover:text-blue-800 transition duration-300"
              >
                Eşyamı Geri Al
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;