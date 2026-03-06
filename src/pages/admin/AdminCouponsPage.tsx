import { useState } from 'react';
import { motion } from 'framer-motion';
import { sampleCoupons, Coupon } from '@/data/coupons';
import { Plus, Trash2, ToggleLeft, ToggleRight, Tag, Percent, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>(sampleCoupons);
  const [newCode, setNewCode] = useState('');
  const [newType, setNewType] = useState<'percentage' | 'fixed'>('percentage');
  const [newValue, setNewValue] = useState('');
  const [newMin, setNewMin] = useState('100');
  const [newMax, setNewMax] = useState('200');
  const [newLimit, setNewLimit] = useState('100');
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleCoupon = (id: string) => {
    setCoupons((prev) => prev.map((c) => c.id === id ? { ...c, active: !c.active } : c));
    toast.success('Coupon status updated');
  };

  const deleteCoupon = (id: string) => {
    setCoupons((prev) => prev.filter((c) => c.id !== id));
    toast.success('Coupon deleted');
  };

  const addCoupon = () => {
    if (!newCode || !newValue) { toast.error('Fill all fields'); return; }
    const coupon: Coupon = {
      id: `c${Date.now()}`, code: newCode.toUpperCase(), type: newType,
      value: Number(newValue), minOrderAmount: Number(newMin), maxDiscount: Number(newMax),
      usageLimit: Number(newLimit), usedCount: 0,
      validFrom: new Date().toISOString().split('T')[0], validTo: '2026-12-31', active: true,
    };
    setCoupons((prev) => [coupon, ...prev]);
    setNewCode(''); setNewValue('');
    setDialogOpen(false);
    toast.success('Coupon created!');
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl">Coupons</h1>
          <p className="text-sm text-muted-foreground mt-1">Create and manage discount codes</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gold-shine text-primary-foreground border-0 font-bold"><Plus className="h-4 w-4 mr-2" /> New Coupon</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle className="font-display text-xl">Create Coupon</DialogTitle></DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Code</label>
                <Input value={newCode} onChange={(e) => setNewCode(e.target.value)} placeholder="e.g. SUMMER50" className="bg-secondary border-none uppercase" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Type</label>
                <div className="flex gap-2">
                  <Button variant={newType === 'percentage' ? 'default' : 'outline'} size="sm" onClick={() => setNewType('percentage')}><Percent className="h-3 w-3 mr-1" /> Percentage</Button>
                  <Button variant={newType === 'fixed' ? 'default' : 'outline'} size="sm" onClick={() => setNewType('fixed')}><IndianRupee className="h-3 w-3 mr-1" /> Fixed</Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Value</label>
                  <Input type="number" value={newValue} onChange={(e) => setNewValue(e.target.value)} className="bg-secondary border-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Min Order (₹)</label>
                  <Input type="number" value={newMin} onChange={(e) => setNewMin(e.target.value)} className="bg-secondary border-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Max Discount (₹)</label>
                  <Input type="number" value={newMax} onChange={(e) => setNewMax(e.target.value)} className="bg-secondary border-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Usage Limit</label>
                  <Input type="number" value={newLimit} onChange={(e) => setNewLimit(e.target.value)} className="bg-secondary border-none" />
                </div>
              </div>
              <Button className="w-full font-bold gold-shine text-primary-foreground border-0" onClick={addCoupon}>Create Coupon</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      <div className="grid gap-4">
        {coupons.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Tag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <code className="font-mono font-bold text-lg text-primary">{c.code}</code>
                  <Badge variant="outline" className={c.active ? 'border-emerald-500/30 text-emerald-400' : 'border-destructive/30 text-destructive'}>
                    {c.active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {c.type === 'percentage' ? `${c.value}% off` : `₹${c.value} off`} • Min ₹{c.minOrderAmount} • {c.usedCount}/{c.usageLimit} used
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => toggleCoupon(c.id)}>
                {c.active ? <ToggleRight className="h-5 w-5 text-emerald-400" /> : <ToggleLeft className="h-5 w-5 text-muted-foreground" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => deleteCoupon(c.id)} className="text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
