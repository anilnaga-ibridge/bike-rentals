export interface Bike {
  id: string;
  name: string;
  brand: string;
  category: string;
  vehicleType: 'Bike' | 'Car';
  engineCC: number;
  transmission: 'Gear' | 'Gearless';
  fuelType: 'Petrol' | 'E-Bike' | 'CNG-Petrol';
  pricingTiers: PricingTier[];
  pricingPackages?: string[]; // e.g. ['3 Hours', '6 Hours', 'Daily']
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
  { id: 'ameerpet', name: 'Ameerpet', bikeCount: 15 },
  { id: 'madhapur', name: 'Madhapur', bikeCount: 22 },
  { id: 'kukatpally', name: 'Kukatpally', bikeCount: 18 },
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
    name: 'City Scooty',
    brand: 'Premium',
    category: 'Scooty',
    vehicleType: 'Bike',
    engineCC: 109,
    transmission: 'Gearless',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 499 },
      { minDays: 6, maxDays: 10, pricePerDay: 449 },
      { minDays: 11, maxDays: 15, pricePerDay: 399 },
      { minDays: 16, maxDays: null, pricePerDay: 349 },
    ],
    pricingPackages: ['Daily', 'Weekly', 'Monthly'],
    deposit: 2000,
    rating: 4.8,
    reviewCount: 312,
    available: true,
    image: '/images/scooter.png',
    city: 'ameerpet',
    specs: { topSpeed: '85 km/h', mileage: '50 km/l', weight: '107 kg', seatHeight: '765 mm' },
  },
  {
    id: '2',
    name: 'Urban Scooty',
    brand: 'Premium',
    category: 'Scooty',
    vehicleType: 'Bike',
    engineCC: 124,
    transmission: 'Gearless',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 449 },
      { minDays: 6, maxDays: 10, pricePerDay: 399 },
      { minDays: 11, maxDays: 15, pricePerDay: 349 },
      { minDays: 16, maxDays: null, pricePerDay: 299 },
    ],
    pricingPackages: ['3 Hours', '6 Hours', 'Daily', 'Weekly'],
    deposit: 1500,
    rating: 4.6,
    reviewCount: 198,
    available: true,
    image: '/images/scooter.png',
    city: 'madhapur',
    specs: { topSpeed: '90 km/h', mileage: '55 km/l', weight: '108 kg', seatHeight: '770 mm' },
  },
  {
    id: '3',
    name: 'Classic Cruiser',
    brand: 'Premium',
    category: 'Cruiser',
    vehicleType: 'Bike',
    engineCC: 349,
    transmission: 'Gear',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 999 },
      { minDays: 6, maxDays: 10, pricePerDay: 899 },
      { minDays: 11, maxDays: 15, pricePerDay: 799 },
      { minDays: 16, maxDays: null, pricePerDay: 699 },
    ],
    pricingPackages: ['Daily', 'Weekly', '15 Days', 'Monthly'],
    deposit: 5000,
    rating: 4.9,
    reviewCount: 456,
    available: true,
    image: '/images/cruiser.png',
    city: 'kukatpally',
    specs: { topSpeed: '120 km/h', mileage: '35 km/l', weight: '195 kg', seatHeight: '805 mm' },
  },
  {
    id: '4',
    name: 'Explorer Adventure',
    brand: 'Premium',
    category: 'Adventure',
    vehicleType: 'Bike',
    engineCC: 452,
    transmission: 'Gear',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 1299 },
      { minDays: 6, maxDays: 10, pricePerDay: 1149 },
      { minDays: 11, maxDays: 15, pricePerDay: 999 },
      { minDays: 16, maxDays: null, pricePerDay: 899 },
    ],
    pricingPackages: ['Daily', 'Weekly', '15 Days', 'Monthly'],
    deposit: 5000,
    rating: 4.8,
    reviewCount: 234,
    available: true,
    image: '/images/premium.png',
    city: 'ameerpet',
    specs: { topSpeed: '150 km/h', mileage: '30 km/l', weight: '196 kg', seatHeight: '825 mm' },
  },
  {
    id: '5',
    name: 'Pro Sports Bike',
    brand: 'Premium',
    category: 'Sports',
    vehicleType: 'Bike',
    engineCC: 197,
    transmission: 'Gear',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 799 },
      { minDays: 6, maxDays: 10, pricePerDay: 699 },
      { minDays: 11, maxDays: 15, pricePerDay: 599 },
      { minDays: 16, maxDays: null, pricePerDay: 499 },
    ],
    pricingPackages: ['Daily', 'Weekly'],
    deposit: 3000,
    rating: 4.7,
    reviewCount: 178,
    available: true,
    image: '/images/sports.png',
    city: 'madhapur',
    specs: { topSpeed: '127 km/h', mileage: '40 km/l', weight: '153 kg', seatHeight: '800 mm' },
  },
  {
    id: '6',
    name: 'Dynamic Sports',
    brand: 'Premium',
    category: 'Sports',
    vehicleType: 'Bike',
    engineCC: 199,
    transmission: 'Gear',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 749 },
      { minDays: 6, maxDays: 10, pricePerDay: 649 },
      { minDays: 11, maxDays: 15, pricePerDay: 549 },
      { minDays: 16, maxDays: null, pricePerDay: 449 },
    ],
    pricingPackages: ['Daily', 'Weekly', 'Monthly'],
    deposit: 3000,
    rating: 4.6,
    reviewCount: 256,
    available: true,
    image: '/images/sports.png',
    city: 'kukatpally',
    specs: { topSpeed: '136 km/h', mileage: '35 km/l', weight: '156 kg', seatHeight: '805 mm' },
  },
  {
    id: '7',
    name: 'Terrain Adventure',
    brand: 'Premium',
    category: 'Adventure',
    vehicleType: 'Bike',
    engineCC: 250,
    transmission: 'Gearless',
    fuelType: 'E-Bike',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 399 },
      { minDays: 6, maxDays: 10, pricePerDay: 349 },
      { minDays: 11, maxDays: 15, pricePerDay: 299 },
      { minDays: 16, maxDays: null, pricePerDay: 249 },
    ],
    pricingPackages: ['3 Hours', '6 Hours', 'Daily'],
    deposit: 1000,
    rating: 4.5,
    reviewCount: 145,
    available: true,
    image: '/images/scooter.png',
    city: 'ameerpet',
    specs: { topSpeed: '45 km/h', mileage: '80 km/charge', weight: '95 kg', seatHeight: '780 mm' },
  },
  {
    id: '8',
    name: 'Vibrant Scooty',
    brand: 'Premium',
    category: 'Scooty',
    vehicleType: 'Bike',
    engineCC: 124,
    transmission: 'Gearless',
    fuelType: 'Petrol',
    pricingTiers: [
      { minDays: 1, maxDays: 5, pricePerDay: 399 },
      { minDays: 6, maxDays: 10, pricePerDay: 349 },
      { minDays: 11, maxDays: 15, pricePerDay: 299 },
      { minDays: 16, maxDays: null, pricePerDay: 249 },
    ],
    pricingPackages: ['Daily', 'Weekly', 'Monthly'],
    deposit: 1500,
    rating: 4.5,
    reviewCount: 289,
    available: true,
    image: '/images/scooter.png',
    city: 'madhapur',
    specs: { topSpeed: '90 km/h', mileage: '52 km/l', weight: '104 kg', seatHeight: '773 mm' },
  },
];

export function getPriceForDays(bike: Bike, days: number): number {
  const tier = bike.pricingTiers.find(
    t => days >= t.minDays && (t.maxDays === null || days <= t.maxDays)
  );
  return tier ? tier.pricePerDay : bike.pricingTiers[0].pricePerDay;
}
