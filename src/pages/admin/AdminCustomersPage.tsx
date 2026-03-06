import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const customers = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@email.com', phone: '+91 9876543210', bookings: 12, spent: 42000, verified: true },
  { id: 2, name: 'Priya Patel', email: 'priya@email.com', phone: '+91 9123456789', bookings: 8, spent: 28000, verified: true },
  { id: 3, name: 'Amit Kumar', email: 'amit@email.com', phone: '+91 9988776655', bookings: 3, spent: 9500, verified: false },
  { id: 4, name: 'Sneha Reddy', email: 'sneha@email.com', phone: '+91 9876512345', bookings: 15, spent: 56000, verified: true },
  { id: 5, name: 'Vikram Singh', email: 'vikram@email.com', phone: '+91 9012345678', bookings: 1, spent: 2800, verified: false },
];

export default function AdminCustomersPage() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-3xl">Customers</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and track all registered customers</p>
      </motion.div>

      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Customer</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Phone</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Bookings</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Total Spent</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Verified</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <motion.tr key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                  className="border-b border-border/30 surface-hover"
                >
                  <td className="p-4">
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-[11px] text-muted-foreground">{c.email}</p>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{c.phone}</td>
                  <td className="p-4 text-sm">{c.bookings}</td>
                  <td className="p-4 text-sm font-semibold">₹{c.spent.toLocaleString()}</td>
                  <td className="p-4">
                    <Badge variant="outline" className={c.verified ? 'border-emerald-500/30 text-emerald-400' : 'border-amber-500/30 text-amber-400'}>
                      {c.verified ? 'Verified' : 'Pending'}
                    </Badge>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
