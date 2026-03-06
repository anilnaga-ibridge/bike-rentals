import { motion } from 'framer-motion';
import { sampleBookings } from '@/data/bookings';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, IndianRupee, FileText } from 'lucide-react';
import { toast } from 'sonner';

const statusColors: Record<string, string> = {
  confirmed: 'bg-primary/20 text-primary border-primary/30',
  active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  completed: 'bg-muted text-muted-foreground border-border',
  cancelled: 'bg-destructive/20 text-destructive border-destructive/30',
  held: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

export default function MyBookingsPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Dashboard</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1">My Bookings</h1>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Bookings', value: sampleBookings.length },
            { label: 'Active', value: sampleBookings.filter(b => b.status === 'active').length },
            { label: 'Upcoming', value: sampleBookings.filter(b => b.status === 'confirmed').length },
            { label: 'Total Spent', value: `₹${sampleBookings.reduce((s, b) => s + b.totalAmount, 0).toLocaleString()}` },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border/50 p-5"
            >
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
              <p className="font-display text-2xl text-primary mt-1">{s.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {sampleBookings.map((booking, i) => (
            <motion.div key={booking.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border/50 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg">{booking.bikeName}</h3>
                    <Badge variant="outline" className={statusColors[booking.status]}>{booking.status}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-primary" /> {booking.city}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-primary" /> {booking.pickupDate} → {booking.returnDate}</span>
                    <span className="flex items-center gap-1"><IndianRupee className="h-3 w-3 text-primary" /> ₹{booking.totalAmount.toLocaleString()}</span>
                  </div>
                  {booking.addOns.length > 0 && (
                    <div className="flex gap-2">{booking.addOns.map((a) => <Badge key={a} variant="secondary" className="text-[10px]">{a}</Badge>)}</div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => toast.success('Invoice downloaded!')}><FileText className="mr-1 h-3 w-3" /> Invoice</Button>
                  {booking.status === 'confirmed' && <Button variant="destructive" size="sm" onClick={() => toast.success('Booking cancelled')}>Cancel</Button>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
