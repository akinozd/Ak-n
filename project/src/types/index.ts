export type Product = {
  id: string;
  type: string;
  brand: string;
  model: string;
  storageCapacity?: string;
  color?: string;
  condition: string;
  serialNumber?: string;
  sellDate?: string;
  daysAgo?: number;
  offerAmount?: number;
  offerValidDays?: number;
};

export type Category = {
  id: string;
  name: string;
  options: string[];
};

export type FilterSelection = {
  [key: string]: string;
};