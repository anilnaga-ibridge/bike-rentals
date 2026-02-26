import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

export default function AdminBikesPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <Link to="/admin" className="text-muted-foreground text-sm hover:text-foreground transition-colors">← Admin</Link>
            <h1 className="font-display text-5xl md:text-6xl">MANAGE BIKES</h1>
          </div>
          <Button onClick={() => toast.info('Add bike form coming soon!')} className="glow-strong">
            <Plus className="mr-2 h-4 w-4" /> Add Bike
          </Button>
        </motion.div>

        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Bike</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Category</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">City</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Price/Day</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground p-4">Status</th>
                  <th className="text-right text-xs uppercase tracking-wider text-muted-foreground p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bikes.map((bike, i) => (
                  <motion.tr
                    key={bike.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-border/50 surface-hover"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={bike.image} alt={bike.name} className="w-12 h-8 rounded object-cover" />
                        <div>
                          <p className="font-medium text-sm">{bike.brand} {bike.name}</p>
                          <p className="text-xs text-muted-foreground">{bike.engineCC}cc</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4"><Badge variant="secondary" className="text-xs">{bike.category}</Badge></td>
                    <td className="p-4 text-sm text-muted-foreground">{bike.city}</td>
                    <td className="p-4 text-sm font-semibold">${bike.pricePerDay}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={bike.available
                        ? 'border-emerald-500/30 text-emerald-400'
                        : 'border-destructive/30 text-destructive'
                      }>
                        {bike.available ? 'Available' : 'Booked'}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" onClick={() => toast.info('Edit form coming soon')}>
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => toast.error('Bike deleted (demo)')}>
                          <Trash2 className="h-3 w-3" />
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
