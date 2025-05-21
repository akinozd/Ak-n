import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Akın. Tüm hakları saklıdır.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-800 text-sm transition duration-300">
              Hakkımızda
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800 text-sm transition duration-300">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800 text-sm transition duration-300">
              İletişim
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;