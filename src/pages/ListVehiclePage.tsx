import { motion } from 'framer-motion';
import { IndianRupee, Shield, UserCheck, Wrench, ClipboardList, CheckCircle, Rocket, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { cities } from '@/data/bikes';
import { toast } from 'sonner';

const benefits = [
  { icon: Wallet, title: 'Earn Extra Income', desc: 'List your idle vehicle and earn up to ₹15,000/month.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Your vehicle is covered with comprehensive insurance.' },
  { icon: UserCheck, title: 'Verified Riders', desc: 'All renters are KYC verified for your safety.' },
  { icon: Wrench, title: 'Maintenance Support', desc: 'We handle regular servicing and maintenance.' },
];

const steps = [
  { num: 1, title: 'Register', desc: 'Fill in your details and vehicle information.', icon: ClipboardList },
  { num: 2, title: 'Verification', desc: 'We verify your vehicle documents and condition.', icon: CheckCircle },
  { num: 3, title: 'Go Live', desc: 'Your vehicle is listed and available for rent.', icon: Rocket },
  { num: 4, title: 'Start Earning', desc: 'Receive bookings and earn money every month.', icon: Wallet },
];

export default function ListVehiclePage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicleName: '', vehicleType: 'scooty', city: '', registrationNumber: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.vehicleName || !form.city) {
      toast.error('Please fill all required fields');
      return;
    }
    setSubmitted(true);
    toast.success('Application submitted! We\'ll contact you within 24 hours.');
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Vehicle Partners</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mt-2">
            List Your <span className="text-gradient">Vehicle</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Turn your idle bike or scooter into a money-making machine. Join 6000+ vehicle owners earning with Sri Ganesh Bike Rentals.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl border border-border/50 p-7 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl text-center mb-12">How It <span className="text-gradient">Works</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-primary">{s.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                <h3 className="font-display text-lg mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border/50 p-8">
            <h2 className="font-display text-2xl mb-6 text-center">Register Your Vehicle</h2>
            
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground">Our team will contact you within 24 hours for vehicle verification.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Full Name *</label>
                    <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-secondary border-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Phone *</label>
                    <Input placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-secondary border-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Email</label>
                  <Input placeholder="Email address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-secondary border-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Vehicle Name *</label>
                    <Input placeholder="e.g. Honda Activa 6G" value={form.vehicleName} onChange={(e) => setForm({ ...form, vehicleName: e.target.value })} className="bg-secondary border-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Vehicle Type</label>
                    <select value={form.vehicleType} onChange={(e) => setForm({ ...form, vehicleType: e.target.value })} className="w-full bg-secondary border-none rounded-xl px-4 py-2.5 text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none">
                      <option value="scooty">Scooty</option>
                      <option value="bike">Bike</option>
                      <option value="sports">Sports Bike</option>
                      <option value="cruiser">Cruiser</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">City *</label>
                    <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full bg-secondary border-none rounded-xl px-4 py-2.5 text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none">
                      <option value="">Select City</option>
                      {cities.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Registration Number</label>
                    <Input placeholder="KA-01-AB-1234" value={form.registrationNumber} onChange={(e) => setForm({ ...form, registrationNumber: e.target.value })} className="bg-secondary border-none" />
                  </div>
                </div>
                <Button type="submit" className="w-full font-bold gold-shine text-primary-foreground border-0 mt-4" size="lg">
                  Submit Application
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
