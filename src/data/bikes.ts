export interface Bike {
  id: string;
  name: string;
  brand: string;
  category: 'Sports' | 'Cruiser' | 'Adventure' | 'Scooty';
  engineCC: number;
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Electric';
  pricePerHour: number;
  pricePerDay: number;
  weekendMultiplier: number;
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
  { id: 'nyc', name: 'New York', bikeCount: 12 },
  { id: 'la', name: 'Los Angeles', bikeCount: 18 },
  { id: 'miami', name: 'Miami', bikeCount: 9 },
  { id: 'chicago', name: 'Chicago', bikeCount: 14 },
  { id: 'sf', name: 'San Francisco', bikeCount: 11 },
];

export const addOns: AddOn[] = [
  { id: 'helmet', name: 'Premium Helmet', pricePerDay: 5, icon: '🪖' },
  { id: 'jacket', name: 'Riding Jacket', pricePerDay: 8, icon: '🧥' },
  { id: 'insurance', name: 'Full Insurance', pricePerDay: 15, icon: '🛡️' },
  { id: 'extra-km', name: 'Extra 100 KM', pricePerDay: 12, icon: '🛣️' },
  { id: 'flexible-return', name: 'Flexible Return (±2hr)', pricePerDay: 10, icon: '⏰' },
];

export const bikes: Bike[] = [
  {
    id: '1',
    name: 'Panigale V4',
    brand: 'Ducati',
    category: 'Sports',
    engineCC: 1103,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerHour: 45,
    pricePerDay: 280,
    weekendMultiplier: 1.3,
    deposit: 500,
    rating: 4.9,
    reviewCount: 128,
    available: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    city: 'nyc',
    specs: { topSpeed: '299 km/h', mileage: '15 km/l', weight: '198 kg', seatHeight: '830 mm' },
  },
  {
    id: '2',
    name: 'Street Triple RS',
    brand: 'Triumph',
    category: 'Sports',
    engineCC: 765,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerHour: 35,
    pricePerDay: 220,
    weekendMultiplier: 1.25,
    deposit: 400,
    rating: 4.8,
    reviewCount: 96,
    available: true,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    city: 'la',
    specs: { topSpeed: '260 km/h', mileage: '20 km/l', weight: '166 kg', seatHeight: '826 mm' },
  },
  {
    id: '3',
    name: 'Fat Boy 114',
    brand: 'Harley-Davidson',
    category: 'Cruiser',
    engineCC: 1868,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerHour: 50,
    pricePerDay: 320,
    weekendMultiplier: 1.35,
    deposit: 600,
    rating: 4.7,
    reviewCount: 74,
    available: true,
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&q=80',
    city: 'miami',
    specs: { topSpeed: '180 km/h', mileage: '18 km/l', weight: '317 kg', seatHeight: '675 mm' },
  },
  {
    id: '4',
    name: 'Africa Twin',
    brand: 'Honda',
    category: 'Adventure',
    engineCC: 1084,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerHour: 38,
    pricePerDay: 240,
    weekendMultiplier: 1.2,
    deposit: 450,
    rating: 4.8,
    reviewCount: 112,
    available: true,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
    city: 'chicago',
    specs: { topSpeed: '210 km/h', mileage: '22 km/l', weight: '226 kg', seatHeight: '870 mm' },
  },
  {
    id: '5',
    name: 'R 1250 GS',
    brand: 'BMW',
    category: 'Adventure',
    engineCC: 1254,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerHour: 42,
    pricePerDay: 260,
    weekendMultiplier: 1.25,
    deposit: 500,
    rating: 4.9,
    reviewCount: 89,
    available: false,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
    city: 'sf',
    specs: { topSpeed: '230 km/h', mileage: '19 km/l', weight: '249 kg', seatHeight: '850 mm' },
  },
  {
    id: '6',
    name: 'Vespa GTS 300',
    brand: 'Vespa',
    category: 'Scooty',
    engineCC: 278,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    pricePerHour: 15,
    pricePerDay: 90,
    weekendMultiplier: 1.15,
    deposit: 150,
    rating: 4.6,
    reviewCount: 203,
    available: true,
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80',
    city: 'la',
    specs: { topSpeed: '130 km/h', mileage: '35 km/l', weight: '160 kg', seatHeight: '790 mm' },
  },
  {
    id: '7',
    name: 'CBR 1000RR-R',
    brand: 'Honda',
    category: 'Sports',
    engineCC: 999,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerHour: 48,
    pricePerDay: 300,
    weekendMultiplier: 1.3,
    deposit: 550,
    rating: 4.9,
    reviewCount: 67,
    available: true,
    image: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=800&q=80',
    city: 'nyc',
    specs: { topSpeed: '299 km/h', mileage: '14 km/l', weight: '201 kg', seatHeight: '820 mm' },
  },
  {
    id: '8',
    name: 'Iron 883',
    brand: 'Harley-Davidson',
    category: 'Cruiser',
    engineCC: 883,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerHour: 30,
    pricePerDay: 180,
    weekendMultiplier: 1.2,
    deposit: 350,
    rating: 4.5,
    reviewCount: 156,
    available: true,
    image: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?w=800&q=80',
    city: 'miami',
    specs: { topSpeed: '170 km/h', mileage: '20 km/l', weight: '256 kg', seatHeight: '760 mm' },
  },
];
