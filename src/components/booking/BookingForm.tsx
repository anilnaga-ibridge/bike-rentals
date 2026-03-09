import { useState, useMemo } from 'react';
import { Bike, addOns, getPriceForDays } from '@/data/bikes';
import { sampleCoupons } from '@/data/coupons';
import { DateTimePicker } from './DateTimePicker';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { differenceInDays, format } from 'date-fns';
import { Tag, Check, X, ShieldCheck, MapPin, Send } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
  });

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
    if (!bike.available) return;

    if (!pickupDate || !returnDate) {
      toast.error('Please select pickup and return dates');
      return;
    }
    if (!formData.name.trim()) {
      toast.error('Please enter your full name');
      return;
    }
    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      return;
    }
    if (!formData.location) {
      toast.error('Please select a pickup hub');
      return;
    }
    if (!pricing) {
      toast.error('Pricing calculation error. Please re-select dates.');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-primary/10 p-8 shadow-2xl relative overflow-hidden group">
      {/* Branded Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-colors group-hover:bg-primary/10" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-black text-primary">Book Ride</h3>
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <ShieldCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-4">
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
        </div>

        {/* Add-ons Section - Premium List */}
        <div className="space-y-3 pt-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40 font-black">Refine Your Ride</p>
          <div className="grid grid-cols-1 gap-2">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                onClick={() => toggleAddOn(addon.id)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                  selectedAddOns.includes(addon.id)
                    ? "bg-primary/5 border-primary/20 shadow-sm"
                    : "bg-secondary/5 border-transparent hover:border-primary/10"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors",
                    selectedAddOns.includes(addon.id) ? "bg-primary text-white" : "bg-white text-primary/40"
                  )}>
                    {addon.icon}
                  </div>
                  <span className={cn(
                    "text-sm font-bold",
                    selectedAddOns.includes(addon.id) ? "text-primary" : "text-primary/60"
                  )}>
                    {addon.name}
                  </span>
                </div>
                <span className="text-[10px] font-black text-secondary uppercase tracking-tight">+₹{addon.pricePerDay}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coupon Code - Minimalist Branded */}
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40 font-black">Offerings</p>
          {appliedCoupon ? (
            <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-5 py-3">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                <code className="font-display font-black text-sm text-emerald-600">{appliedCoupon.code}</code>
              </div>
              <button onClick={removeCoupon} className="text-emerald-600/50 hover:text-destructive transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
                <Input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="COUPON CODE"
                  className="bg-secondary/30 border-none pl-11 uppercase font-display font-black text-xs tracking-widest h-12 rounded-xl focus-visible:ring-primary"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={applyCoupon}
                disabled={!couponCode}
                className="h-12 px-6 rounded-xl border-primary/10 hover:bg-primary hover:text-white font-black text-[10px] uppercase tracking-widest transition-all"
              >
                APPLY
              </Button>
            </div>
          )}
        </div>

        {/* User Details - Floating Style */}
        <div className="space-y-4 pt-4 border-t border-primary/5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40 font-black">Rider Information</p>

          <div className="grid grid-cols-1 gap-3">
            <Input
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-secondary/30 border-none focus-visible:ring-primary h-12 rounded-xl text-sm font-medium"
            />
            <Input
              required
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-secondary/30 border-none focus-visible:ring-primary h-12 rounded-xl text-sm font-medium"
            />
            <div className="relative">
              <select
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-secondary/30 border-none focus:ring-2 focus:ring-primary h-12 rounded-xl px-4 text-sm outline-none appearance-none cursor-pointer font-medium text-foreground relative z-10"
              >
                <option value="" disabled className="bg-background">Select Pickup Hub</option>
                <option value="Ameerpet" className="bg-background">Ameerpet Hub</option>
                <option value="Madhapur" className="bg-background">Madhapur Hub</option>
                <option value="Kukatpally" className="bg-background">Kukatpally Hub</option>
              </select>
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Dynamic Price Summary */}
        {pricing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="pt-6 space-y-3"
          >
            <div className="p-6 rounded-[2rem] bg-primary/5 border border-primary/10 space-y-2.5">
              <div className="flex justify-between text-xs font-bold text-primary/40 uppercase tracking-wider">
                <span>Rental Duration</span>
                <span className="text-primary">{pricing.totalDays} Day{pricing.totalDays !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-primary/40 uppercase tracking-wider">
                <span>Base Rate</span>
                <span className="text-primary">₹{pricing.pricePerDay}/day</span>
              </div>
              {pricing.addOnCost > 0 && (
                <div className="flex justify-between text-xs font-bold text-primary/40 uppercase tracking-wider">
                  <span>Add-ons</span>
                  <span className="text-primary">+₹{pricing.addOnCost}</span>
                </div>
              )}
              {pricing.discount > 0 && (
                <div className="flex justify-between text-xs font-bold text-emerald-500 uppercase tracking-wider">
                  <span>Discount Applied</span>
                  <span>-₹{pricing.discount}</span>
                </div>
              )}
              <div className="border-t border-primary/10 pt-3 flex justify-between items-center">
                <span className="text-sm font-black text-primary uppercase tracking-widest">Total Pay</span>
                <span className="font-display text-3xl text-primary font-black">₹{pricing.total}</span>
              </div>
            </div>
          </motion.div>
        )}

        <Button
          className={cn(
            "w-full text-[11px] font-black uppercase tracking-[0.2em] border-0 h-16 rounded-[2rem] transition-all mt-4",
            bike.available
              ? "gold-shine text-primary-foreground shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
              : "bg-muted text-muted-foreground cursor-not-allowed opacity-70"
          )}
          size="lg"
          disabled={!bike.available}
          onClick={handleBooking}
        >
          {bike.available ? (
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Confirm on WhatsApp
            </div>
          ) : 'Currently Unavailable'}
        </Button>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bike={bike}
        pickupDate={pickupDate}
        pickupTime={pickupTime}
        returnDate={returnDate}
        returnTime={returnTime}
        price={pricing?.total}
        initialName={formData.name}
        initialPhone={formData.phone}
        initialLocation={formData.location}
      />
    </div>
  );
}
