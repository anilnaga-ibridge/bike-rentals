export interface Booking {
  id: string;
  bikeId: string;
  bikeName: string;
  city: string;
  pickupDate: string;
  returnDate: string;
  status: 'confirmed' | 'active' | 'completed' | 'cancelled' | 'held';
  totalAmount: number;
  addOns: string[];
  createdAt: string;
}

export const sampleBookings: Booking[] = [
  {
    id: 'BK-001',
    bikeId: '1',
    bikeName: 'Ducati Panigale V4',
    city: 'New York',
    pickupDate: '2026-03-01',
    returnDate: '2026-03-03',
    status: 'confirmed',
    totalAmount: 620,
    addOns: ['Premium Helmet', 'Full Insurance'],
    createdAt: '2026-02-25',
  },
  {
    id: 'BK-002',
    bikeId: '3',
    bikeName: 'Harley-Davidson Fat Boy 114',
    city: 'Miami',
    pickupDate: '2026-02-20',
    returnDate: '2026-02-22',
    status: 'completed',
    totalAmount: 760,
    addOns: ['Riding Jacket'],
    createdAt: '2026-02-18',
  },
  {
    id: 'BK-003',
    bikeId: '6',
    bikeName: 'Vespa GTS 300',
    city: 'Los Angeles',
    pickupDate: '2026-02-26',
    returnDate: '2026-02-27',
    status: 'active',
    totalAmount: 120,
    addOns: ['Premium Helmet'],
    createdAt: '2026-02-24',
  },
];
