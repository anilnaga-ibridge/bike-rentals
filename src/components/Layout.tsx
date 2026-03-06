import { Navbar } from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Bike, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { HelpCenter } from './HelpCenter';

export function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-background">
      {!isAdmin && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isAdmin && <HelpCenter />}
      {!isAdmin && (
        <footer className="border-t border-border pt-14 pb-8 mt-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
              <div className="space-y-4">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Bike className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-display text-xl">Ride<span className="text-primary">X</span></span>
                </Link>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  India's most trusted bike rental platform. Affordable, reliable & available in 6 cities.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Home', path: '/' },
                    { label: 'Bikes', path: '/bikes' },
                    { label: 'Monthly Rentals', path: '/packages' },
                    { label: 'Offers', path: '/offers' },
                    { label: 'About', path: '/about' },
                    { label: 'Contact', path: '/contact' },
                  ].map((l) => (
                    <Link key={l.path} to={l.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-display text-base mb-4">Cities</h4>
                <div className="space-y-2">
                  {['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Chennai'].map((c) => (
                    <p key={c} className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-primary" /> {c}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-display text-base mb-4">Contact</h4>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-3 w-3 text-primary" /> +91 9876543210
                  </a>
                  <a href="mailto:support@ridex.com" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-3 w-3 text-primary" /> support@ridex.com
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors">
                    <MessageCircle className="h-3 w-3 text-primary" /> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">© 2026 RideX. All rights reserved.</p>
              <div className="flex gap-6">
                <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
                <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
                <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Refund Policy</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
