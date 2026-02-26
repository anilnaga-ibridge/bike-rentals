import { motion } from 'framer-motion';
import { sampleBookings } from '@/data/bookings';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const statusColors: Record<string, string> = {
  confirmed: 'bg-primary/20 text-primary border-primary/30',
  active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  completed: 'bg-muted text-muted-foreground border-border',
  cancelled: 'bg-destructive/20 text-destructive border-destructive/30',
  held: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

export default function AdminBookingsPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/admin" className="text-muted-foreground text-sm hover:text-foreground transition-colors">← Admin</Link>
          <h1 className="font-display text-5xl md:text-6xl">MANAGE BOOKINGS</h1>
        </motion.div>

        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">ID</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Bike</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Dates</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Amount</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Status</th>
                  <th className="text-right text-xs uppercase tracking-wider text-muted-foreground p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleBookings.map((booking, i) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/50 surface-hover"
                  >
                    <td className="p-4 text-sm font-mono text-primary">{booking.id}</td>
                    <td className="p-4">
                      <p className="text-sm font-medium">{booking.bikeName}</p>
                      <p className="text-xs text-muted-foreground">{booking.city}</p>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{booking.pickupDate} → {booking.returnDate}</td>
                    <td className="p-4 text-sm font-semibold">${booking.totalAmount}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={statusColors[booking.status]}>{booking.status}</Badge>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" onClick={() => toast.success('Approved!')}>
                          <Check className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => toast.error('Rejected')}>
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
