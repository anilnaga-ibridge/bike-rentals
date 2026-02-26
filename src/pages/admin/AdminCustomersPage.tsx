import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const customers = [
  { id: 1, name: 'Alex Johnson', email: 'alex@email.com', bookings: 12, spent: 4200, verified: true },
  { id: 2, name: 'Sarah Williams', email: 'sarah@email.com', bookings: 8, spent: 2800, verified: true },
  { id: 3, name: 'Mike Chen', email: 'mike@email.com', bookings: 3, spent: 950, verified: false },
  { id: 4, name: 'Emma Davis', email: 'emma@email.com', bookings: 15, spent: 5600, verified: true },
  { id: 5, name: 'Ryan Garcia', email: 'ryan@email.com', bookings: 1, spent: 280, verified: false },
];

export default function AdminCustomersPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/admin" className="text-muted-foreground text-sm hover:text-foreground transition-colors">← Admin</Link>
          <h1 className="font-display text-5xl md:text-6xl">CUSTOMERS</h1>
        </motion.div>

        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Customer</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Bookings</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Total Spent</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">License</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c, i) => (
                  <motion.tr
                    key={c.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-border/50 surface-hover"
                  >
                    <td className="p-4">
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.email}</p>
                    </td>
                    <td className="p-4 text-sm">{c.bookings}</td>
                    <td className="p-4 text-sm font-semibold">${c.spent.toLocaleString()}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={c.verified
                        ? 'border-emerald-500/30 text-emerald-400'
                        : 'border-amber-500/30 text-amber-400'
                      }>
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
    </div>
  );
}
