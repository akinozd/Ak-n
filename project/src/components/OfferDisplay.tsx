import React from 'react';
import Button from './Button';

interface OfferDisplayProps {
  offerAmount: number;
  onAccept?: () => void;
  onDecline?: () => void;
  validDays?: number;
  showActions?: boolean;
}

const OfferDisplay: React.FC<OfferDisplayProps> = ({ 
  offerAmount, 
  onAccept, 
  onDecline,
  validDays,
  showActions = true
}) => {
  // Format the offer amount with thousand separators
  const formattedAmount = offerAmount.toLocaleString('tr-TR');
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 animate-fadeIn">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Teklif</h3>
      <div className="flex items-center justify-center py-6">
        <span className="text-4xl font-bold text-blue-800">
          {formattedAmount} TL
        </span>
      </div>
      
      {validDays && (
        <p className="text-center text-gray-600 mb-6">
          Bu teklif {validDays} gün boyunca geçerlidir.
        </p>
      )}
      
      {showActions && (
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="primary" 
            onClick={onAccept} 
            className="flex-1"
          >
            Teklifi Kabul Et
          </Button>
          <Button 
            variant="outline" 
            onClick={onDecline} 
            className="flex-1"
          >
            Reddet
          </Button>
        </div>
      )}
    </div>
  );
};

export default OfferDisplay;