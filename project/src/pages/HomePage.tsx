import React from 'react';
import { Link } from 'react-router-dom';
import { Package2, ArrowRight, RefreshCw } from 'lucide-react';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Package2 size={64} className="text-yellow-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Akın</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90">
              Teknolojik ürünlerinizi satın, gerektiğinde geri alın.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/sell">
                <Button variant="secondary" className="w-full sm:w-auto">
                  <div className="flex items-center gap-2">
                    Eşya Sat
                    <ArrowRight size={16} />
                  </div>
                </Button>
              </Link>
              <Link to="/retrieve">
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-blue-800">
                  <div className="flex items-center gap-2">
                    Eşyamı Geri Al
                    <RefreshCw size={16} />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nasıl Çalışır?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ürününüzü Tanımlayın</h3>
                <p className="text-gray-600">Ürününüzün tüm özelliklerini seçerek sistemimize tanıtın.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Teklifimizi Alın</h3>
                <p className="text-gray-600">Ürünün özelliklerine göre size anında özel bir teklif sunalım.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">İstediğinizde Geri Alın</h3>
                <p className="text-gray-600">İhtiyacınız olduğunda ürününüzü özel koduyla kolayca geri alabilirsiniz.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Hemen Başlayın</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Kullanmadığınız teknolojik ürünlerinizi değerlendirin veya daha önce sattığınız ürünleri geri alın.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/sell">
                <Button variant="primary">Eşya Sat</Button>
              </Link>
              <Link to="/retrieve">
                <Button variant="outline">Eşyamı Geri Al</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;