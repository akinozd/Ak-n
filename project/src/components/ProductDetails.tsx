import React from 'react';
import { Product } from '../types';
import OfferDisplay from './OfferDisplay';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const details = [
    { label: "Ürün Türü", value: product.type },
    { label: "Marka", value: product.brand },
    { label: "Model", value: product.model },
    { label: "Depolama", value: product.storageCapacity },
    { label: "Renk", value: product.color },
    { label: "Durum", value: product.condition },
    { label: "Seri Numarası", value: product.serialNumber }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 animate-fadeIn">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ürün Bilgileri</h2>
        
        <div className="space-y-3 mb-6">
          {details.map((detail, index) => (
            detail.value && (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{detail.label}:</span>
                <span className="font-medium text-gray-900">{detail.value}</span>
              </div>
            )
          ))}
        </div>
        
        {product.daysAgo && (
          <div className="py-4 px-5 bg-blue-50 rounded-lg mb-6">
            <p className="text-blue-800 font-medium text-center">
              {product.daysAgo} Gün Önce Sisteme Sattınız.
            </p>
          </div>
        )}
        
        {product.offerAmount && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Size Özel Teklifimiz:</h3>
            <OfferDisplay 
              offerAmount={product.offerAmount} 
              validDays={product.offerValidDays}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;