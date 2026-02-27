import { useState, useMemo } from 'react';
import { Bike, addOns } from '@/data/bikes';
import { DateTimePicker } from './DateTimePicker';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { differenceInHours } from 'date-fns';

interface BookingFormProps {
  bike: Bike;
}

export function BookingForm({ bike }: BookingFormProps) {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [pickupTime, setPickupTime] = useState('09:00');
  const [returnDate, setReturnDate] = useState<Date>();
  const [returnTime, setReturnTime] = useState('18:00');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const pricing = useMemo(() => {
    if (!pickupDate || !returnDate) return null;

    const pickup = new Date(pickupDate);
    const [ph, pm] = pickupTime.split(':').map(Number);
    pickup.setHours(ph, pm, 0, 0);

    const ret = new Date(returnDate);
    const [rh, rm] = returnTime.split(':').map(Number);
    ret.setHours(rh, rm, 0, 0);

    const totalHours = Math.max(1, differenceInHours(ret, pickup));
    const totalDays = Math.ceil(totalHours / 24);
    const remainingHours = totalHours % 24;

    // Check weekend days
    let weekendDays = 0;
    for (let d = new Date(pickup); d <= ret; d.setDate(d.getDate() + 1)) {
      const day = d.getDay();
      if (day === 0 || day === 6) weekendDays++;
    }
    const weekdayDays = totalDays - weekendDays;

    const baseDayRate = weekdayDays * bike.pricePerDay + weekendDays * bike.pricePerDay * bike.weekendMultiplier;
    const hourlyExtra = remainingHours > 0 && totalDays === 0 ? remainingHours * bike.pricePerHour : 0;
    const rentalCost = Math.round(baseDayRate + hourlyExtra);

    const addOnCost = selectedAddOns.reduce((sum, id) => {
      const addon = addOns.find((a) => a.id === id);
      return sum + (addon ? addon.pricePerDay * Math.max(1, totalDays) : 0);
    }, 0);

    return {
      totalHours,
      totalDays,
      rentalCost,
      addOnCost,
      deposit: bike.deposit,
      total: rentalCost + addOnCost + bike.deposit,
      weekendDays,
    };
  }, [pickupDate, returnDate, pickupTime, returnTime, selectedAddOns, bike]);

  const handleBooking = () => {
    if (!pickupDate || !returnDate) {
      toast.error('Please select pickup and return dates');
      return;
    }
    toast.success(`Booking confirmed! Total: $${pricing?.total}. Check your dashboard for details.`);
  };

  return (
    <div className="glass rounded-xl p-6 space-y-5">
      <h3 className="font-display text-2xl">BOOK THIS BIKE</h3>

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
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Add-ons</p>
        {addOns.map((addon) => (
          <div key={addon.id} className="flex items-center justify-between py-1">
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
            <span className="text-xs text-muted-foreground">${addon.pricePerDay}/day</span>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      {pricing && (
        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration</span>
            <span>{pricing.totalDays} day{pricing.totalDays !== 1 ? 's' : ''} ({pricing.totalHours}h)</span>
          </div>
          {pricing.weekendDays > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Weekend days ({bike.weekendMultiplier}x)</span>
              <span className="text-primary">{pricing.weekendDays} day{pricing.weekendDays !== 1 ? 's' : ''}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Rental Cost</span>
            <span>${pricing.rentalCost}</span>
          </div>
          {pricing.addOnCost > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Add-ons</span>
              <span>${pricing.addOnCost}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Security Deposit</span>
            <span>${pricing.deposit}</span>
          </div>
          <div className="border-t border-border pt-3 flex justify-between items-center">
            <span className="text-muted-foreground font-medium">Total</span>
            <span className="font-display text-3xl text-primary">${pricing.total}</span>
          </div>
        </div>
      )}

      <Button
        className="w-full text-base font-bold glow-strong"
        size="lg"
        disabled={!bike.available || !pickupDate || !returnDate}
        onClick={handleBooking}
      >
        {bike.available ? 'Book Now' : 'Currently Unavailable'}
      </Button>
    </div>
  );
}
