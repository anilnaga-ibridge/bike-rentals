import { useState, useMemo } from 'react';
import { Bike, addOns, getPriceForDays } from '@/data/bikes';
import { sampleCoupons } from '@/data/coupons';
import { DateTimePicker } from './DateTimePicker';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { differenceInDays } from 'date-fns';
import { Tag, Check, X } from 'lucide-react';

interface BookingFormProps {
  bike: Bike;
}

export function BookingForm({ bike }: BookingFormProps) {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [pickupTime, setPickupTime] = useState('09:00');
  const [returnDate, setReturnDate] = useState<Date>();
  const [returnTime, setReturnTime] = useState('18:00');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<typeof sampleCoupons[0] | null>(null);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const pricing = useMemo(() => {
    if (!pickupDate || !returnDate) return null;

    const totalDays = Math.max(1, differenceInDays(returnDate, pickupDate));
    const pricePerDay = getPriceForDays(bike, totalDays);
    const rentalCost = totalDays * pricePerDay;

    const addOnCost = selectedAddOns.reduce((sum, id) => {
      const addon = addOns.find((a) => a.id === id);
      return sum + (addon ? addon.pricePerDay * totalDays : 0);
    }, 0);

    const subtotal = rentalCost + addOnCost;

    let discount = 0;
    if (appliedCoupon) {
      if (subtotal >= appliedCoupon.minOrderAmount) {
        if (appliedCoupon.type === 'percentage') {
          discount = Math.min(Math.round(subtotal * appliedCoupon.value / 100), appliedCoupon.maxDiscount);
        } else {
          discount = Math.min(appliedCoupon.value, appliedCoupon.maxDiscount);
        }
      }
    }

    return {
      totalDays,
      pricePerDay,
      rentalCost,
      addOnCost,
      subtotal,
      discount,
      deposit: bike.deposit,
      total: subtotal - discount + bike.deposit,
    };
  }, [pickupDate, returnDate, selectedAddOns, bike, appliedCoupon]);

  const applyCoupon = () => {
    const coupon = sampleCoupons.find(c => c.code === couponCode.toUpperCase() && c.active);
    if (!coupon) {
      toast.error('Invalid or expired coupon code');
      return;
    }
    if (pricing && pricing.subtotal < coupon.minOrderAmount) {
      toast.error(`Minimum order amount is ₹${coupon.minOrderAmount}`);
      return;
    }
    setAppliedCoupon(coupon);
    toast.success(`Coupon ${coupon.code} applied!`);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    toast.info('Coupon removed');
  };

  const handleBooking = () => {
    if (!pickupDate || !returnDate) {
      toast.error('Please select pickup and return dates');
      return;
    }
    toast.success(`Booking confirmed! Total: ₹${pricing?.total}`);
  };

  return (
    <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-5">
      <h3 className="font-display text-xl">Book This Bike</h3>

      <DateTimePicker
        label="Pickup Date & Time"
        date={pickupDate}
        onDateChange={setPickupDate}
        time={pickupTime}
        onTimeChange={setPickupTime}
        minDate={new Date()}
      />

      <DateTimePicker
        label="Return Date & Time"
        date={returnDate}
        onDateChange={setReturnDate}
        time={returnTime}
        onTimeChange={setReturnTime}
        minDate={pickupDate || new Date()}
      />

      {/* Add-ons */}
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Add-ons</p>
        {addOns.map((addon) => (
          <div key={addon.id} className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={selectedAddOns.includes(addon.id)}
                onCheckedChange={() => toggleAddOn(addon.id)}
                id={`addon-${addon.id}`}
              />
              <label htmlFor={`addon-${addon.id}`} className="text-sm cursor-pointer">
                {addon.icon} {addon.name}
              </label>
            </div>
            <span className="text-[11px] text-muted-foreground">₹{addon.pricePerDay}/day</span>
          </div>
        ))}
      </div>

      {/* Coupon Code */}
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Coupon Code</p>
        {appliedCoupon ? (
          <div className="flex items-center justify-between bg-primary/10 border border-primary/20 rounded-xl px-4 py-2.5">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <code className="font-mono font-bold text-sm text-primary">{appliedCoupon.code}</code>
            </div>
            <button onClick={removeCoupon} className="text-muted-foreground hover:text-destructive transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                placeholder="Enter code"
                className="bg-secondary border-none pl-10 uppercase font-mono"
              />
            </div>
            <Button variant="outline" size="sm" onClick={applyCoupon} disabled={!couponCode}>Apply</Button>
          </div>
        )}
      </div>

      {/* Price Breakdown */}
      {pricing && (
        <div className="border-t border-border pt-4 space-y-2.5">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration</span>
            <span>{pricing.totalDays} day{pricing.totalDays !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Rate per day</span>
            <span className="text-primary font-semibold">₹{pricing.pricePerDay}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Rental Cost</span>
            <span>₹{pricing.rentalCost}</span>
          </div>
          {pricing.addOnCost > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Add-ons</span>
              <span>₹{pricing.addOnCost}</span>
            </div>
          )}
          {pricing.discount > 0 && (
            <div className="flex justify-between text-sm text-emerald-400">
              <span>Discount</span>
              <span>-₹{pricing.discount}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Security Deposit</span>
            <span>₹{pricing.deposit}</span>
          </div>
          <div className="border-t border-border pt-3 flex justify-between items-center">
            <span className="text-muted-foreground font-medium">Total</span>
            <span className="font-display text-3xl text-primary">₹{pricing.total}</span>
          </div>
        </div>
      )}

      <Button
        className="w-full text-sm font-bold gold-shine text-primary-foreground border-0"
        size="lg"
        disabled={!bike.available || !pickupDate || !returnDate}
        onClick={handleBooking}
      >
        {bike.available ? 'Book Now' : 'Currently Unavailable'}
      </Button>
    </div>
  );
}
