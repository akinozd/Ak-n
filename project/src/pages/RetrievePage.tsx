import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import ProductDetails from '../components/ProductDetails';
import { verificationCode, verificationProduct } from '../data/mockData';

const RetrievePage: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      setError('Lütfen doğrulama kodunu girin.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (code === verificationCode) {
        setIsVerified(true);
        setError('');
      } else {
        setError('Geçersiz doğrulama kodu. Lütfen tekrar deneyin.');
      }
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-blue-800 hover:text-blue-600 mb-6 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" />
        <span>Ana Sayfa</span>
      </button>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Eşyamı Geri Al</h1>
          
          {!isVerified ? (
            <>
              <p className="text-gray-600 mb-8">
                Daha önce sattığınız ürünü geri almak için size verilen doğrulama kodunu girin.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start">
                  <ShieldCheck className="text-blue-800 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-800 text-sm">
                    Doğrulama kodu, satış işlemi sırasında size verilmiştir. Eğer kodunuzu kaybettiyseniz, 
                    müşteri hizmetlerimiz ile iletişime geçin.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                      Doğrulama Kodu
                    </label>
                    <input
                      type="text"
                      id="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
                      placeholder="Örn: Ae17c8"
                    />
                    
                    {error && (
                      <div className="mt-2 flex items-center text-red-600">
                        <AlertCircle size={16} className="mr-1" />
                        <span className="text-sm">{error}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Doğrulanıyor...' : 'Doğrula'}
                  </Button>
                </form>
                
                <p className="text-center text-sm text-gray-600 mt-6">
                  Test için doğrulama kodu: <code className="bg-gray-100 px-2 py-1 rounded">Ae17c8</code>
                </p>
              </div>
            </>
          ) : (
            <div className="animate-fadeIn">
              <p className="text-gray-600 mb-8">
                Ürününüzün bilgileri aşağıda yer almaktadır. Size sunulan özel teklifi değerlendirebilirsiniz.
              </p>
              
              <ProductDetails product={verificationProduct} />
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" className="flex-1 sm:flex-initial sm:min-w-40">
                  Teklifi Kabul Et
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-initial sm:min-w-40">
                  Vazgeç
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RetrievePage;