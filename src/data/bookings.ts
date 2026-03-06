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
    id: 'BK-001', bikeId: '1', bikeName: 'Honda Activa 6G', city: 'Bangalore',
    pickupDate: '2026-03-01', returnDate: '2026-03-10',
    status: 'confirmed', totalAmount: 4490, addOns: ['Premium Helmet', 'Full Insurance'], createdAt: '2026-02-25',
  },
  {
    id: 'BK-002', bikeId: '3', bikeName: 'RE Classic 350', city: 'Delhi',
    pickupDate: '2026-02-20', returnDate: '2026-02-25',
    status: 'completed', totalAmount: 4995, addOns: ['Riding Jacket'], createdAt: '2026-02-18',
  },
  {
    id: 'BK-003', bikeId: '2', bikeName: 'TVS Jupiter 125', city: 'Mumbai',
    pickupDate: '2026-02-26', returnDate: '2026-02-28',
    status: 'active', totalAmount: 898, addOns: ['Premium Helmet'], createdAt: '2026-02-24',
  },
];
