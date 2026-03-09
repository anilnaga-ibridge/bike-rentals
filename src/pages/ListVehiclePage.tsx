import { motion, AnimatePresence } from 'framer-motion';
import { IndianRupee, Shield, UserCheck, Wrench, ClipboardList, CheckCircle, Rocket, Wallet, ArrowRight, Star, TrendingUp, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { cities } from '@/data/bikes';
import { toast } from 'sonner';
import { BRAND } from '@/constants/brand';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: IndianRupee,
    title: 'Earn Up to ₹15K/Month',
    desc: 'Your idle bike can generate serious income. Get paid directly to your bank account.',
    gradient: 'from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-200',
    iconClass: 'bg-emerald-50 text-emerald-600',
    stat: '₹15K',
    statLabel: 'Max Monthly',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    desc: 'Your vehicle is protected with comprehensive insurance coverage throughout every rental.',
    gradient: 'from-primary/20 to-blue-500/10',
    border: 'border-primary/20',
    iconClass: 'bg-primary/10 text-primary',
    stat: '100%',
    statLabel: 'Insured',
  },
  {
    icon: UserCheck,
    title: 'Verified Riders Only',
    desc: 'All renters undergo strict KYC verification with ID checks, so your bike is always in safe hands.',
    gradient: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-200',
    iconClass: 'bg-violet-50 text-violet-500',
    stat: 'KYC',
    statLabel: 'Verified',
  },
  {
    icon: Wrench,
    title: 'Zero Maintenance Stress',
    desc: 'We handle regular servicing and quality checks. You earn, we manage the rest.',
    gradient: 'from-secondary/20 to-orange-500/10',
    border: 'border-secondary/20',
    iconClass: 'bg-secondary/10 text-secondary',
    stat: 'Free',
    statLabel: 'Maintenance',
  },
];

const steps = [
  { num: '01', title: 'Register', desc: 'Submit your details and vehicle information using the form below.', icon: ClipboardList },
  { num: '02', title: 'Verification', desc: "Our team verifies your vehicle's documents and physical condition within 24 hrs.", icon: CheckCircle },
  { num: '03', title: 'Go Live', desc: 'Your bike is listed on the platform and becomes available to thousands of renters.', icon: Rocket },
  { num: '04', title: 'Earn Every Month', desc: 'Sit back and watch your bank account grow with monthly rental income.', icon: TrendingUp },
];

const trustedPartners = [
  { name: 'Rahul S.', rating: 5, text: 'Listed my idle Activa and now earn ₹8,000 every month. Best decision ever!', earnings: '₹8K/mo' },
  { name: 'Priya K.', rating: 5, text: 'The team is super professional. My bike is insured and I get payment on time.', earnings: '₹12K/mo' },
  { name: 'Arun M.', rating: 5, text: 'No hassle at all. They handle everything. I just collect my earnings!', earnings: '₹6K/mo' },
];

export default function ListVehiclePage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    vehicleName: '', vehicleType: 'scooty',
    city: '', registrationNumber: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.vehicleName || !form.city) {
      toast.error('Please fill all required fields');
      return;
    }
    setSubmitted(true);
    toast.success("Application submitted! We'll contact you within 24 hours.");
  };

  const field = (
    label: string,
    key: keyof typeof form,
    placeholder: string,
    type = 'text',
    required = false
  ) => (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
        {label}{required && <span className="text-secondary ml-1">*</span>}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="h-12 bg-white/60 border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
      />
    </div>
  );

  return (
    <div className="overflow-x-hidden">

      {/* ── Cinematic Hero ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=1600&q=80"
            alt="List your bike"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-[#020617]/70 to-[#020617]" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-28 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"
          >
            <IndianRupee className="h-3.5 w-3.5 text-secondary" />
            <span className="text-secondary text-xs font-black tracking-widest uppercase">Earn With Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none tracking-tighter"
          >
            Your Bike,{' '}
            <span className="text-secondary drop-shadow-[0_0_25px_rgba(255,106,0,0.5)]">
              Your Income
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Turn your idle two-wheeler into a passive income machine. Join 6,000+ vehicle owners
            already earning with Sri Ganesh Bike Rentals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#register-form">
              <Button size="lg" className="h-14 px-10 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-secondary/30 hover:scale-105 transition-all">
                List My Vehicle <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={`tel:${BRAND.whatsapp}`}>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl border-white/20 text-white hover:bg-white hover:text-[#020617] font-black text-xs uppercase tracking-widest transition-all">
                <Phone className="mr-2 h-4 w-4" /> Call to Register
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute -right-32 top-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Why Partner With Us</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-primary mt-2">The SG Advantage</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={cn(
                  'group relative rounded-[2rem] border p-7 overflow-hidden bg-gradient-to-br cursor-default',
                  b.gradient, b.border
                )}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <b.icon className="w-16 h-16" />
                </div>
                <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300', b.iconClass)}>
                  <b.icon className="h-7 w-7" />
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-display font-black text-foreground">{b.stat}</span>
                  <span className="ml-2 text-xs font-black text-muted-foreground uppercase tracking-wider">{b.statLabel}</span>
                </div>
                <h3 className="font-display font-black text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Simple Process</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-primary mt-2">How It Works</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Get your bike listed and earning in as little as 24 hours.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20" />
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass border border-primary/10 rounded-[2rem] p-7 text-center relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/30 group-hover:bg-secondary group-hover:shadow-secondary/30 transition-all duration-300 relative z-10">
                  <span className="font-display font-black text-lg">{s.num}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-black text-lg mb-2 text-primary">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Testimonials ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Real Stories</span>
            <h2 className="font-display font-black text-4xl text-primary mt-2">Partners Love Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustedPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border border-primary/10 rounded-[2rem] p-7 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: p.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{p.text}"</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/10">
                  <span className="text-sm font-black text-primary">{p.name}</span>
                  <span className="text-xs font-black text-secondary bg-secondary/10 px-3 py-1 rounded-full">{p.earnings}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section id="register-form" className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Ready to Earn?</span>
              <h2 className="font-display font-black text-4xl text-primary mt-2">Register Your Vehicle</h2>
              <p className="text-muted-foreground mt-3">Fill this in and our team will call you within 24 hours.</p>
            </div>

            <div className="glass rounded-[2.5rem] border border-primary/10 p-8 sm:p-10 shadow-2xl shadow-primary/5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="h-12 w-12 text-emerald-500" />
                    </div>
                    <h3 className="font-display font-black text-3xl text-primary mb-3">You're All Set!</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      We've received your application. Our team will call you on <strong>{form.phone}</strong> within 24 hours.
                    </p>
                    <div className="mt-8 p-4 rounded-2xl bg-secondary/10 border border-secondary/20 text-sm font-semibold text-secondary">
                      🎉 Get ready to start earning with Sri Ganesh Bike Rentals!
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {field('Full Name', 'name', 'Your name', 'text', true)}
                      {field('Phone Number', 'phone', '+91 XXXXX XXXXX', 'tel', true)}
                    </div>
                    {field('Email Address', 'email', 'your@email.com', 'email')}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {field('Vehicle Name', 'vehicleName', 'e.g. Honda Activa 6G', 'text', true)}
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Vehicle Type</label>
                        <select
                          value={form.vehicleType}
                          onChange={(e) => setForm({ ...form, vehicleType: e.target.value })}
                          className="w-full h-12 bg-white/60 border border-primary/10 rounded-xl px-4 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none transition-all"
                        >
                          <option value="scooty">Scooty / Scooter</option>
                          <option value="bike">Standard Bike</option>
                          <option value="sports">Sports Bike</option>
                          <option value="cruiser">Cruiser</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                          City <span className="text-secondary">*</span>
                        </label>
                        <select
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full h-12 bg-white/60 border border-primary/10 rounded-xl px-4 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none transition-all"
                        >
                          <option value="">Select City</option>
                          {cities.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      </div>
                      {field('Registration Number', 'registrationNumber', 'TS-01-AB-1234')}
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all mt-2"
                    >
                      Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground pt-2">
                      By submitting, you agree to our Terms & Conditions. We'll never share your data.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
