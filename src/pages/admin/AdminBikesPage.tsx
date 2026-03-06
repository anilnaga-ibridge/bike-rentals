import { motion } from 'framer-motion';
import { bikes, cities } from '@/data/bikes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminBikesPage() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-end justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl">Manage Bikes</h1>
          <p className="text-sm text-muted-foreground mt-1">Add, edit, and manage your fleet</p>
        </div>
        <Button onClick={() => toast.info('Add bike form coming soon!')} className="gold-shine text-primary-foreground border-0">
          <Plus className="mr-2 h-4 w-4" /> Add Bike
        </Button>
      </motion.div>

      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Bike</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Category</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">City</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Starting Price</th>
                <th className="text-left text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Status</th>
                <th className="text-right text-[11px] uppercase tracking-wider text-muted-foreground p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((bike, i) => {
                const cityName = cities.find(c => c.id === bike.city)?.name || bike.city;
                return (
                  <motion.tr key={bike.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                    className="border-b border-border/30 surface-hover"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={bike.image} alt={bike.name} className="w-12 h-8 rounded-lg object-cover" />
                        <div>
                          <p className="font-medium text-sm">{bike.brand} {bike.name}</p>
                          <p className="text-[11px] text-muted-foreground">{bike.engineCC}cc</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4"><Badge variant="secondary" className="text-[10px]">{bike.category}</Badge></td>
                    <td className="p-4 text-sm text-muted-foreground">{cityName}</td>
                    <td className="p-4 text-sm font-semibold">₹{bike.pricingTiers[0].pricePerDay}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={bike.available ? 'border-emerald-500/30 text-emerald-400' : 'border-destructive/30 text-destructive'}>
                        {bike.available ? 'Available' : 'Booked'}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => toast.info('Edit form coming soon')}><Edit className="h-3 w-3" /></Button>
                        <Button variant="ghost" size="sm" onClick={() => toast.error('Bike deleted (demo)')}><Trash2 className="h-3 w-3" /></Button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
