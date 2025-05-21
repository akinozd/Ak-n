import React from 'react';
import { Category, FilterSelection } from '../types';

interface CategorySelectorProps {
  category: Category;
  selected: string;
  onChange: (categoryId: string, value: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  category, 
  selected, 
  onChange 
}) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor={category.id} 
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {category.name}
      </label>
      <select
        id={category.id}
        value={selected}
        onChange={(e) => onChange(category.id, e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
      >
        <option value="">Seçiniz</option>
        {category.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;