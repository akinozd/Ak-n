import { Category } from "../types";

export const categories: Category[] = [
  {
    id: "type",
    name: "Ürün Türü",
    options: ["Telefon", "Tablet", "Bilgisayar", "Akıllı Saat", "Diğer"]
  },
  {
    id: "brand",
    name: "Marka",
    options: ["Apple", "Samsung", "Xiaomi", "Huawei", "LG", "Sony", "Diğer"]
  },
  {
    id: "model",
    name: "Model",
    options: ["iPhone 14", "iPhone 13", "iPhone 12", "Galaxy S22", "Galaxy S21", "Galaxy S20", "Mi 12", "Mi 11", "P40 Pro", "Diğer"]
  },
  {
    id: "storageCapacity",
    name: "Depolama Kapasitesi",
    options: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB", "Diğer"]
  },
  {
    id: "color",
    name: "Renk",
    options: ["Siyah", "Beyaz", "Mavi", "Kırmızı", "Yeşil", "Altın", "Gümüş", "Diğer"]
  },
  {
    id: "condition",
    name: "Durum",
    options: ["Yeni", "Çok İyi", "İyi", "Orta", "Hasarlı"]
  }
];