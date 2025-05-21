import { Product } from "../types";

export const verificationProduct: Product = {
  id: "1",
  type: "Telefon",
  brand: "Apple",
  model: "iPhone 12",
  storageCapacity: "128 GB",
  color: "Siyah",
  condition: "İyi",
  serialNumber: "34Apple3434",
  sellDate: "2024-06-05",
  daysAgo: 34,
  offerAmount: 24500,
  offerValidDays: 26
};

export const verificationCode = "Ae17c8";

// Calculate offer based on product specs
export const calculateOffer = (specs: Record<string, string>): number => {
  let basePrice = 0;
  
  // Base price by product type
  if (specs.type === "Telefon") basePrice = 5000;
  if (specs.type === "Tablet") basePrice = 3500;
  if (specs.type === "Bilgisayar") basePrice = 8000;
  if (specs.type === "Akıllı Saat") basePrice = 2000;
  
  // Adjustments by brand
  if (specs.brand === "Apple") basePrice *= 1.5;
  if (specs.brand === "Samsung") basePrice *= 1.3;
  
  // Adjustments by model
  if (specs.model?.includes("14")) basePrice *= 1.4;
  if (specs.model?.includes("13")) basePrice *= 1.3;
  if (specs.model?.includes("12")) basePrice *= 1.2;
  
  // Adjustments by storage
  if (specs.storageCapacity?.includes("512")) basePrice *= 1.3;
  if (specs.storageCapacity?.includes("256")) basePrice *= 1.2;
  if (specs.storageCapacity?.includes("128")) basePrice *= 1.1;
  
  // Adjustments by condition
  if (specs.condition === "Yeni") basePrice *= 1.3;
  if (specs.condition === "Çok İyi") basePrice *= 1.2;
  if (specs.condition === "İyi") basePrice *= 1.0;
  if (specs.condition === "Orta") basePrice *= 0.8;
  if (specs.condition === "Hasarlı") basePrice *= 0.5;
  
  return Math.round(basePrice / 100) * 100; // Round to nearest 100
};