export interface Review {
  id: string;
  bikeId: string;
  customerName: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
  videoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  bikeRented: string;
  city: string;
  image?: string;
  videoThumbnail?: string;
  videoUrl?: string;
}

export const sampleReviews: Review[] = [
  {
    id: 'r1', bikeId: '1', customerName: 'James Carter', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5, comment: 'Absolutely incredible machine! The Panigale V4 was in pristine condition. Pickup was seamless and the team was super helpful.', date: '2026-02-15',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  },
  {
    id: 'r2', bikeId: '1', customerName: 'Sophia Lane', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    rating: 4, comment: 'Great experience! The bike handled beautifully on the highway. Only wish the helmet fit was a bit better.', date: '2026-02-10',
  },
  {
    id: 'r3', bikeId: '3', customerName: 'Marcus Rivera', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5, comment: 'The Fat Boy is a beast! Cruising through Miami on this was a dream. RideX made it so easy.', date: '2026-02-08',
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=600&q=80',
  },
  {
    id: 'r4', bikeId: '4', customerName: 'Emily Watson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5, comment: 'Africa Twin was perfect for my weekend adventure trip. Comfortable, powerful, and reliable.', date: '2026-01-28',
  },
  {
    id: 'r5', bikeId: '6', customerName: 'David Kim', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 4, comment: 'The Vespa was perfect for getting around LA! Super fun and easy to ride through traffic.', date: '2026-02-20',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1', name: 'James Carter', role: 'Adventure Enthusiast', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5, comment: 'RideX transformed my vacation. The booking was instant, the bike was pristine, and the whole experience felt like a luxury service. I\'ve rented from 5 different services — nothing comes close.',
    bikeRented: 'Ducati Panigale V4', city: 'New York',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
  {
    id: 't2', name: 'Sophia Lane', role: 'Travel Blogger', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
    rating: 5, comment: 'As a travel blogger, I need reliable and photogenic rides. RideX delivered on both. The Harley Fat Boy through Miami was unforgettable. My followers went crazy!',
    bikeRented: 'Harley-Davidson Fat Boy 114', city: 'Miami',
    videoThumbnail: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&q=80',
    videoUrl: '#',
  },
  {
    id: 't3', name: 'Marcus Rivera', role: 'Weekend Rider', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5, comment: 'I rent every weekend now. The fleet is amazing, pricing is transparent, and customer support is top-notch. The flexible return add-on is a game changer.',
    bikeRented: 'BMW R 1250 GS', city: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
  },
  {
    id: 't4', name: 'Emily Watson', role: 'Corporate Professional', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 4, comment: 'Used RideX for a team building weekend. Rented 6 bikes for our group. The process was seamless and the team loved it. Already planning the next trip!',
    bikeRented: 'Honda Africa Twin', city: 'Chicago',
  },
];
