import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Bikes', path: '/bikes' },
  { label: 'Monthly Rentals', path: '/packages' },
  { label: 'Offers', path: '/offers' },
  { label: 'List Your Vehicle', path: '/list-vehicle' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3",
        scrolled ? "glass shadow-lg border-b border-primary/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/images/logo.png" alt="Sri Ganesh Bike Rentals" className="h-20 w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-500" />
          <div className="hidden sm:block text-left">
            <p className={cn(
              "font-display font-black leading-none text-2xl uppercase tracking-tight transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}>
              Sri Ganesh
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
              Bike Rentals
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className={cn(
          "hidden lg:flex items-center gap-2 p-1 rounded-2xl border transition-all duration-500",
          scrolled ? "glass border-primary/5 bg-white/20" : "bg-white/5 border-white/10 backdrop-blur-sm"
        )}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300",
                location.pathname === item.path
                  ? (scrolled ? "bg-primary text-white shadow-md" : "bg-white text-primary shadow-lg")
                  : (scrolled ? "text-primary/70 hover:text-primary hover:bg-primary/5" : "text-white/70 hover:text-white hover:bg-white/10")
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            size="lg"
            className={cn(
              "h-12 px-8 rounded-xl font-black text-xs uppercase tracking-widest transition-all border-0 shadow-xl",
              scrolled ? "bg-primary text-white shadow-primary/20" : "bg-secondary text-white shadow-secondary/20"
            )}
            onClick={() => navigate('/bikes')}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "lg:hidden p-3 rounded-2xl transition-all",
            scrolled ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
          )}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-primary/5 overflow-hidden p-6"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-colors",
                    location.pathname === item.path ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-primary/5"
                  )}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 opacity-20" />
                </Link>
              ))}
              <div className="pt-6 grid grid-cols-1 gap-3">
                <Button
                  size="lg"
                  className="h-14 rounded-2xl font-black text-xs uppercase tracking-widest gold-shine bg-secondary text-white border-0 shadow-xl shadow-secondary/20"
                  onClick={() => { setMobileOpen(false); navigate('/bikes'); }}
                >
                  Book Your Ride Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
