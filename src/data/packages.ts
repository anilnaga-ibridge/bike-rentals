export interface TripPackage {
  id: string;
  name: string;
  description: string;
  duration: number; // days
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
    id: 'pkg-1', name: 'Pacific Coast Highway', description: 'Ride the iconic PCH from LA to San Francisco on a premium cruiser. 3 days of breathtaking ocean views, coastal towns, and legendary roads.',
    duration: 3, bikeId: '3', bikeName: 'Harley-Davidson Fat Boy 114', route: 'Los Angeles → Santa Barbara → Big Sur → San Francisco',
    highlights: ['Big Sur coastline', 'Santa Barbara wine country', 'Golden Gate Bridge finish'],
    includes: ['Bike rental', 'Full insurance', 'Premium helmet', 'Route GPS', 'Hotel recommendations'],
    price: 899, originalPrice: 1110, image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    difficulty: 'Easy', rating: 4.9, reviewCount: 87, featured: true,
  },
  {
    id: 'pkg-2', name: 'Mountain Thunder', description: 'Conquer the Rockies on an adventure bike. 5 days of alpine passes, national parks, and high-altitude thrills.',
    duration: 5, bikeId: '4', bikeName: 'Honda Africa Twin', route: 'Denver → Rocky Mountain NP → Aspen → Telluride → Denver',
    highlights: ['Trail Ridge Road', 'Independence Pass', 'Million Dollar Highway'],
    includes: ['Bike rental', 'Full insurance', 'Riding gear', 'Route GPS', 'Emergency kit'],
    price: 1499, originalPrice: 1800, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    difficulty: 'Challenging', rating: 4.8, reviewCount: 54, featured: true,
  },
  {
    id: 'pkg-3', name: 'Miami Vice Cruise', description: 'Experience Miami\'s vibrant culture on a Vespa. 2 days exploring South Beach, Art Deco, and the Keys.',
    duration: 2, bikeId: '6', bikeName: 'Vespa GTS 300', route: 'Miami Beach → Key Biscayne → Coconut Grove → Wynwood',
    highlights: ['South Beach sunset', 'Art Deco District', 'Key Biscayne bridge'],
    includes: ['Bike rental', 'Basic insurance', 'Helmet', 'City guide map'],
    price: 249, originalPrice: 310, image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80',
    difficulty: 'Easy', rating: 4.7, reviewCount: 132, featured: true,
  },
  {
    id: 'pkg-4', name: 'Speed Demon NYC', description: 'A weekend superbike experience in New York. Track day included with highway cruising through scenic upstate.',
    duration: 2, bikeId: '1', bikeName: 'Ducati Panigale V4', route: 'NYC → Bear Mountain → Storm King → NYC',
    highlights: ['Track day experience', 'Bear Mountain views', 'Hudson Valley ride'],
    includes: ['Bike rental', 'Track access', 'Full insurance', 'Racing suit rental', 'Pro instructor'],
    price: 799, originalPrice: 960, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    difficulty: 'Moderate', rating: 4.9, reviewCount: 41, featured: false,
  },
];
