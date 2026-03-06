export interface Review {
  id: string;
  bikeId: string;
  customerName: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
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
}

export const sampleReviews: Review[] = [
  {
    id: 'r1', bikeId: '1', customerName: 'Rahul Sharma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5, comment: 'Perfect scooter for daily commute in Bangalore! Super smooth and well maintained. Pickup was seamless.', date: '2026-02-15',
  },
  {
    id: 'r2', bikeId: '1', customerName: 'Priya Patel',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    rating: 4, comment: 'Great experience! The Activa was in excellent condition. Would rent again for sure.', date: '2026-02-10',
  },
  {
    id: 'r3', bikeId: '3', customerName: 'Vikram Singh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5, comment: 'The Classic 350 is a beast! Rode from Delhi to Jaipur - an amazing experience. RideX made it so easy.', date: '2026-02-08',
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=600&q=80',
  },
  {
    id: 'r4', bikeId: '4', customerName: 'Sneha Reddy',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5, comment: 'Himalayan 450 was perfect for my weekend adventure. Comfortable and powerful.', date: '2026-01-28',
  },
  {
    id: 'r5', bikeId: '2', customerName: 'Amit Kumar',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 4, comment: 'Jupiter 125 is great for Mumbai traffic! Very fuel efficient and easy to ride.', date: '2026-02-20',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1', name: 'Rahul Sharma', role: 'Daily Commuter',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5, comment: 'RideX has been a lifesaver for my daily commute. The monthly rental package saves me so much compared to owning a bike. Highly recommended!',
    bikeRented: 'Honda Activa 6G', city: 'Bangalore',
  },
  {
    id: 't2', name: 'Priya Patel', role: 'Travel Blogger',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
    rating: 5, comment: 'As a travel blogger, I rent bikes in every city I visit. RideX has the best fleet, transparent pricing, and instant booking. My followers love the Ladakh ride content!',
    bikeRented: 'RE Himalayan 450', city: 'Delhi',
  },
  {
    id: 't3', name: 'Vikram Singh', role: 'Weekend Rider',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5, comment: 'I rent a Classic 350 every weekend for long rides. The pricing tiers are great — the more days I rent, the cheaper it gets. Customer support is also top notch.',
    bikeRented: 'RE Classic 350', city: 'Pune',
  },
  {
    id: 't4', name: 'Sneha Reddy', role: 'College Student',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 4, comment: 'Perfect for students who need a bike temporarily. The deposit is reasonable and the monthly plan is way cheaper than buying a bike. Love the flexible return option!',
    bikeRented: 'TVS Jupiter 125', city: 'Hyderabad',
  },
];
