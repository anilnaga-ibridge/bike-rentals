export interface TripPackage {
  id: string;
  name: string;
  description: string;
  duration: number;
  bikeId: string;
  bikeName: string;
  route: string;
  highlights: string[];
  includes: string[];
  price: number;
  originalPrice: number;
  image: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const tripPackages: TripPackage[] = [
  {
    id: 'pkg-1', name: 'Goa Beach Ride', description: 'Ride along the stunning Konkan coast from Bangalore to Goa. 3 days of beaches, forts, and coastal roads.',
    duration: 3, bikeId: '3', bikeName: 'Classic Cruiser', route: 'Bangalore → Gokarna → Palolem → North Goa',
    highlights: ['Konkan coast', 'Gokarna beaches', 'Old Goa churches'],
    includes: ['Bike rental', 'Full insurance', 'Premium helmet', 'Route GPS', 'Hotel recommendations'],
    price: 8999, originalPrice: 11100, image: '/images/packages/goa.png',
    difficulty: 'Easy', rating: 4.9, reviewCount: 187, featured: true,
  },
  {
    id: 'pkg-2', name: 'Ladakh Adventure', description: 'Conquer the mighty Himalayas on a premium adventure bike. 7 days of high-altitude passes, monasteries, and pristine lakes.',
    duration: 7, bikeId: '4', bikeName: 'Explorer Adventure', route: 'Manali → Rohtang → Leh → Pangong → Nubra → Leh',
    highlights: ['Khardung La Pass', 'Pangong Lake', 'Magnetic Hill', 'Nubra Valley'],
    includes: ['Bike rental', 'Full insurance', 'Riding gear', 'Route GPS', 'Oxygen can', 'Mechanic support'],
    price: 24999, originalPrice: 32000, image: '/images/packages/ladakh.png',
    difficulty: 'Challenging', rating: 4.8, reviewCount: 94, featured: true,
  },
  {
    id: 'pkg-3', name: 'Pondicherry Weekend', description: 'Experience French colonial charm on a scooter. 2 days exploring cafes, beaches, and Auroville.',
    duration: 2, bikeId: '1', bikeName: 'City Scooty', route: 'Chennai → Mahabalipuram → Pondicherry',
    highlights: ['French Quarter', 'Auroville', 'Rock Beach sunset'],
    includes: ['Bike rental', 'Basic insurance', 'Helmet', 'City guide'],
    price: 2499, originalPrice: 3100, image: '/images/scooter.png',
    difficulty: 'Easy', rating: 4.7, reviewCount: 232, featured: true,
  },
  {
    id: 'pkg-4', name: 'Rajasthan Royal Tour', description: 'A royal ride through the desert state. 5 days of palaces, forts, and golden sand dunes.',
    duration: 5, bikeId: '3', bikeName: 'Classic Cruiser', route: 'Jaipur → Jodhpur → Jaisalmer → Udaipur',
    highlights: ['Thar Desert', 'Mehrangarh Fort', 'Jaisalmer Sand Dunes', 'Lake Pichola'],
    includes: ['Bike rental', 'Full insurance', 'Premium helmet', 'Desert camping', 'Mechanic on call'],
    price: 14999, originalPrice: 18000, image: '/images/cruiser.png',
    difficulty: 'Moderate', rating: 4.9, reviewCount: 71, featured: false,
  },
];
