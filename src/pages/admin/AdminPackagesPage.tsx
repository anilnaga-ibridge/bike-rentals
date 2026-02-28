import { useState } from 'react';
import { motion } from 'framer-motion';
import { tripPackages, TripPackage } from '@/data/packages';
import { bikes } from '@/data/bikes';
import { Plus, Edit, Trash2, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<TripPackage[]>(tripPackages);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [duration, setDuration] = useState('3');
  const [bikeId, setBikeId] = useState('1');
  const [route, setRoute] = useState('');
  const [price, setPrice] = useState('');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Moderate' | 'Challenging'>('Moderate');

  const addPackage = () => {
    if (!name || !price || !route) { toast.error('Fill required fields'); return; }
    const bike = bikes.find(b => b.id === bikeId);
    const pkg: TripPackage = {
      id: `pkg-${Date.now()}`, name, description: desc, duration: Number(duration),
      bikeId, bikeName: bike ? `${bike.brand} ${bike.name}` : 'Unknown',
      route, highlights: [], includes: ['Bike rental', 'Insurance', 'Helmet'],
      price: Number(price), originalPrice: Math.round(Number(price) * 1.2),
      image: bike?.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
      difficulty, rating: 0, reviewCount: 0, featured: false,
    };
    setPackages(prev => [pkg, ...prev]);
    setName(''); setDesc(''); setRoute(''); setPrice('');
    setDialogOpen(false);
    toast.success('Package created!');
  };

  const deletePackage = (id: string) => {
    setPackages(prev => prev.filter(p => p.id !== id));
    toast.success('Package deleted');
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Admin</p>
            <h1 className="font-display text-5xl md:text-6xl">TRIP <span className="text-gradient">PACKAGES</span></h1>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="glow-strong font-bold"><Plus className="h-4 w-4 mr-2" /> New Package</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader><DialogTitle className="font-display text-2xl">CREATE PACKAGE</DialogTitle></DialogHeader>
              <div className="space-y-4 mt-4 max-h-[70vh] overflow-y-auto pr-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Package Name</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Pacific Coast Highway" className="bg-secondary border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Description</label>
                  <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Describe the trip experience..." className="bg-secondary border-none" rows={3} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Duration (Days)</label>
                    <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="bg-secondary border-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Price ($)</label>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-secondary border-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Select Bike</label>
                  <select value={bikeId} onChange={(e) => setBikeId(e.target.value)} className="w-full bg-secondary rounded-lg px-4 py-3 text-foreground text-sm focus:ring-1 focus:ring-primary outline-none">
                    {bikes.map(b => <option key={b.id} value={b.id}>{b.brand} {b.name} ({b.engineCC}cc)</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Route</label>
                  <Input value={route} onChange={(e) => setRoute(e.target.value)} placeholder="City A → City B → City C" className="bg-secondary border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Difficulty</label>
                  <div className="flex gap-2">
                    {(['Easy', 'Moderate', 'Challenging'] as const).map(d => (
                      <Button key={d} variant={difficulty === d ? 'default' : 'outline'} size="sm" onClick={() => setDifficulty(d)}>{d}</Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full font-bold glow-strong" onClick={addPackage}>Create Package</Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="space-y-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-5 flex items-center gap-5"
            >
              <img src={pkg.image} alt={pkg.name} className="w-24 h-16 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl truncate">{pkg.name}</h3>
                  <Badge variant="outline" className="border-border text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" /> {pkg.duration}d
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {pkg.route}
                </p>
                <p className="text-xs text-muted-foreground">🏍️ {pkg.bikeName} • {pkg.difficulty}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-display text-2xl text-primary">${pkg.price}</p>
                <span className="text-xs text-muted-foreground line-through">${pkg.originalPrice}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => deletePackage(pkg.id)} className="text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
