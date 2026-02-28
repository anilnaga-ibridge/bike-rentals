export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrderAmount: number;
  maxDiscount: number;
  usageLimit: number;
  usedCount: number;
  validFrom: string;
  validTo: string;
  active: boolean;
}

export const sampleCoupons: Coupon[] = [
  {
    id: 'c1', code: 'FIRST20', type: 'percentage', value: 20,
    minOrderAmount: 100, maxDiscount: 200, usageLimit: 500, usedCount: 143,
    validFrom: '2026-01-01', validTo: '2026-12-31', active: true,
  },
  {
    id: 'c2', code: 'FLAT50', type: 'fixed', value: 50,
    minOrderAmount: 200, maxDiscount: 50, usageLimit: 200, usedCount: 67,
    validFrom: '2026-02-01', validTo: '2026-06-30', active: true,
  },
  {
    id: 'c3', code: 'WEEKEND30', type: 'percentage', value: 30,
    minOrderAmount: 150, maxDiscount: 300, usageLimit: 100, usedCount: 28,
    validFrom: '2026-03-01', validTo: '2026-05-31', active: true,
  },
  {
    id: 'c4', code: 'SUMMER25', type: 'percentage', value: 25,
    minOrderAmount: 100, maxDiscount: 250, usageLimit: 1000, usedCount: 0,
    validFrom: '2026-06-01', validTo: '2026-08-31', active: false,
  },
];
