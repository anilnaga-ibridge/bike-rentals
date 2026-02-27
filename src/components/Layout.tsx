import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bike, MapPin, Phone, Mail } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-border pt-16 pb-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <Bike className="h-7 w-7 text-primary" />
                <span className="font-display text-2xl">RIDE<span className="text-primary">X</span></span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium bike rentals across 5 cities. Experience the thrill of riding world-class motorcycles.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg mb-4">EXPLORE</h4>
              <div className="space-y-2">
                {[{ label: 'Home', path: '/' }, { label: 'Fleet', path: '/bikes' }, { label: 'My Bookings', path: '/bookings' }, { label: 'Profile', path: '/profile' }].map((l) => (
                  <Link key={l.path} to={l.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div>
              <h4 className="font-display text-lg mb-4">CITIES</h4>
              <div className="space-y-2">
                {['New York', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco'].map((c) => (
                  <p key={c} className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-primary" /> {c}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg mb-4">CONTACT</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Phone className="h-3 w-3 text-primary" /> +1 (555) RIDE-NOW
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="h-3 w-3 text-primary" /> support@ridex.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 RideX. Premium Bike Rentals. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
              <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Refund Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
