export interface Bike {
  id: string;
  name: string;
  brand: string;
  category: 'Sports' | 'Cruiser' | 'Adventure' | 'Scooty';
  engineCC: number;
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Electric';
  pricingTiers: PricingTier[];
  deposit: number;
  rating: number;
  reviewCount: number;
  available: boolean;
  image: string;
  city: string;
  specs: {
    topSpeed: string;
    mileage: string;
    weight: string;
    seatHeight: string;
  };
}

export interface PricingTier {
  minDays: number;
  maxDays: number | null;
  pricePerDay: number;
}

export interface City {
  id: string;
  name: string;
  bikeCount: number;
}

export interface AddOn {
  id: string;
  name: string;
  pricePerDay: number;
  icon: string;
}

export const cities: City[] = [
  { id: 'bangalore', name: 'Bangalore', bikeCount: 24 },
  { id: 'mumbai', name: 'Mumbai', bikeCount: 18 },
  { id: 'delhi', name: 'Delhi', bikeCount: 20 },
  { id: 'hyderabad', name: 'Hyderabad', bikeCount: 15 },
  { id: 'pune', name: 'Pune', bikeCount: 12 },
  { id: 'chennai', name: 'Chennai', bikeCount: 10 },
];

export const addOns: AddOn[] = [
  { id: 'helmet', name: 'Premium Helmet', pricePerDay: 49, icon: '🪖' },
  { id: 'jacket', name: 'Riding Jacket', pricePerDay: 99, icon: '🧥' },
  { id: 'insurance', name: 'Full Insurance', pricePerDay: 149, icon: '🛡️' },
  { id: 'extra-km', name: 'Extra 100 KM', pricePerDay: 199, icon: '🛣️' },
  { id: 'flexible-return', name: 'Flexible Return (±2hr)', pricePerDay: 79, icon: '⏰' },
];

export const bikes: Bike[] = [
  {
    id: '1',
    name: 'Activa 6G',
    brand: 'Honda',
    category: 'Scooty',
    engineCC: 109,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 499 },
      { minDays: 6, maxDays: 10, pricePerDay: 449 },
      { minDays: 11, maxDays: 15, pricePerDay: 399 },
      { minDays: 16, maxDays: null, pricePerDay: 349 },
    ],
    deposit: 2000,
    rating: 4.8,
    reviewCount: 312,
    available: true,
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80',
    city: 'bangalore',
    specs: { topSpeed: '85 km/h', mileage: '50 km/l', weight: '107 kg', seatHeight: '765 mm' },
  },
  {
    id: '2',
    name: 'Jupiter 125',
    brand: 'TVS',
    category: 'Scooty',
    engineCC: 124,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 449 },
      { minDays: 6, maxDays: 10, pricePerDay: 399 },
      { minDays: 11, maxDays: 15, pricePerDay: 349 },
      { minDays: 16, maxDays: null, pricePerDay: 299 },
    ],
    deposit: 1500,
    rating: 4.6,
    reviewCount: 198,
    available: true,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    city: 'mumbai',
    specs: { topSpeed: '90 km/h', mileage: '55 km/l', weight: '108 kg', seatHeight: '770 mm' },
  },
  {
    id: '3',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    category: 'Cruiser',
    engineCC: 349,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 999 },
      { minDays: 6, maxDays: 10, pricePerDay: 899 },
      { minDays: 11, maxDays: 15, pricePerDay: 799 },
      { minDays: 16, maxDays: null, pricePerDay: 699 },
    ],
    deposit: 5000,
    rating: 4.9,
    reviewCount: 456,
    available: true,
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&q=80',
    city: 'delhi',
    specs: { topSpeed: '120 km/h', mileage: '35 km/l', weight: '195 kg', seatHeight: '805 mm' },
  },
  {
    id: '4',
    name: 'Himalayan 450',
    brand: 'Royal Enfield',
    category: 'Adventure',
    engineCC: 452,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 1299 },
      { minDays: 6, maxDays: 10, pricePerDay: 1149 },
      { minDays: 11, maxDays: 15, pricePerDay: 999 },
      { minDays: 16, maxDays: null, pricePerDay: 899 },
    ],
    deposit: 5000,
    rating: 4.8,
    reviewCount: 234,
    available: true,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
    city: 'bangalore',
    specs: { topSpeed: '150 km/h', mileage: '30 km/l', weight: '196 kg', seatHeight: '825 mm' },
  },
  {
    id: '5',
    name: 'Apache RTR 200',
    brand: 'TVS',
    category: 'Sports',
    engineCC: 197,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 799 },
      { minDays: 6, maxDays: 10, pricePerDay: 699 },
      { minDays: 11, maxDays: 15, pricePerDay: 599 },
      { minDays: 16, maxDays: null, pricePerDay: 499 },
    ],
    deposit: 3000,
    rating: 4.7,
    reviewCount: 178,
    available: true,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    city: 'hyderabad',
    specs: { topSpeed: '127 km/h', mileage: '40 km/l', weight: '153 kg', seatHeight: '800 mm' },
  },
  {
    id: '6',
    name: 'Pulsar NS200',
    brand: 'Bajaj',
    category: 'Sports',
    engineCC: 199,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 749 },
      { minDays: 6, maxDays: 10, pricePerDay: 649 },
      { minDays: 11, maxDays: 15, pricePerDay: 549 },
      { minDays: 16, maxDays: null, pricePerDay: 449 },
    ],
    deposit: 3000,
    rating: 4.6,
    reviewCount: 256,
    available: true,
    image: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=800&q=80',
    city: 'pune',
    specs: { topSpeed: '136 km/h', mileage: '35 km/l', weight: '156 kg', seatHeight: '805 mm' },
  },
  {
    id: '7',
    name: 'Dominar 400',
    brand: 'Bajaj',
    category: 'Adventure',
    engineCC: 373,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 899 },
      { minDays: 6, maxDays: 10, pricePerDay: 799 },
      { minDays: 11, maxDays: 15, pricePerDay: 699 },
      { minDays: 16, maxDays: null, pricePerDay: 599 },
    ],
    deposit: 4000,
    rating: 4.5,
    reviewCount: 145,
    available: false,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
    city: 'chennai',
    specs: { topSpeed: '148 km/h', mileage: '28 km/l', weight: '184 kg', seatHeight: '800 mm' },
  },
  {
    id: '8',
    name: 'Access 125',
    brand: 'Suzuki',
    category: 'Scooty',
    engineCC: 124,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 399 },
      { minDays: 6, maxDays: 10, pricePerDay: 349 },
      { minDays: 11, maxDays: 15, pricePerDay: 299 },
      { minDays: 16, maxDays: null, pricePerDay: 249 },
    ],
    deposit: 1500,
    rating: 4.5,
    reviewCount: 289,
    available: true,
    image: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?w=800&q=80',
    city: 'mumbai',
    specs: { topSpeed: '90 km/h', mileage: '52 km/l', weight: '104 kg', seatHeight: '773 mm' },
  },
];

export function getPriceForDays(bike: Bike, days: number): number {
  const tier = bike.pricingTiers.find(
    t => days >= t.minDays && (t.maxDays === null || days <= t.maxDays)
  );
  return tier ? tier.pricePerDay : bike.pricingTiers[0].pricePerDay;
}
