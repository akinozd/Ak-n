import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CategorySelector from '../components/CategorySelector';
import Button from '../components/Button';
import OfferDisplay from '../components/OfferDisplay';
import { categories } from '../data/categories';
import { calculateOffer } from '../data/mockData';
import { FilterSelection } from '../types';

const SellPage: React.FC = () => {
  const navigate = useNavigate();
  const [filterSelections, setFilterSelections] = useState<FilterSelection>({});
  const [offer, setOffer] = useState<number | null>(null);
  const [showOffer, setShowOffer] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  
  // Check if all required fields are filled
  useEffect(() => {
    const requiredFields = ['type', 'brand', 'model', 'condition'];
    const allFilled = requiredFields.every(field => 
      filterSelections[field] && filterSelections[field].trim() !== ''
    );
    setIsFormComplete(allFilled);
  }, [filterSelections]);
  
  const handleFilterChange = (categoryId: string, value: string) => {
    setFilterSelections(prev => ({
      ...prev,
      [categoryId]: value
    }));
    
    // Hide offer when filters change
    if (showOffer) {
      setShowOffer(false);
    }
  };
  
  const handleGetOffer = () => {
    const calculatedOffer = calculateOffer(filterSelections);
    setOffer(calculatedOffer);
    setShowOffer(true);
  };
  
  const handleAcceptOffer = () => {
    // In a real app, this would submit data to the backend
    alert('Teklif kabul edildi! Satış işlemine devam edilecek.');
  };
  
  const handleDeclineOffer = () => {
    setShowOffer(false);
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
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Eşya Sat</h1>
          <p className="text-gray-600 mb-8">
            Satmak istediğiniz ürünün özelliklerini seçin ve size özel teklifimizi alın.
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-8">
            {/* Form Section */}
            <div className={`transition-opacity duration-300 ${showOffer ? 'md:opacity-70' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ürün Özellikleri</h2>
              
              {categories.map(category => (
                <CategorySelector
                  key={category.id}
                  category={category}
                  selected={filterSelections[category.id] || ''}
                  onChange={handleFilterChange}
                />
              ))}
              
              <div className="mt-8">
                <Button 
                  onClick={handleGetOffer} 
                  disabled={!isFormComplete}
                  className="w-full"
                >
                  Teklif Al
                </Button>
                {!isFormComplete && (
                  <p className="text-sm text-orange-600 mt-2">
                    Lütfen tüm gerekli alanları doldurun.
                  </p>
                )}
              </div>
            </div>
            
            {/* Offer Section */}
            <div className={`mt-8 md:mt-0 transition-all duration-500 ${
              showOffer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden md:block'
            }`}>
              {showOffer && offer && (
                <div className="animate-fadeIn">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Teklifimiz</h2>
                  <OfferDisplay
                    offerAmount={offer}
                    onAccept={handleAcceptOffer}
                    onDecline={handleDeclineOffer}
                    validDays={30}
                  />
                  <p className="text-sm text-gray-600 mt-4">
                    Not: Bu teklif ürünün incelenmesi sonucunda değişiklik gösterebilir.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPage;