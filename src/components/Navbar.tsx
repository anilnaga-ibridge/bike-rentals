import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, Bike, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Fleet', path: '/bikes' },
  { label: 'My Bookings', path: '/bookings' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Bike className="h-8 w-8 text-primary" />
          <span className="font-display text-3xl tracking-wider text-foreground">
            RIDE<span className="text-primary">X</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Admin Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 flex items-center gap-1 ${
              location.pathname.startsWith('/admin') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}>
              Admin <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild><Link to="/admin">Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/admin/bikes">Manage Bikes</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/admin/bookings">Manage Bookings</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/admin/customers">Customers</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/admin/maintenance">Maintenance</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="font-semibold">
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem asChild><Link to="/profile">My Profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/bookings">My Bookings</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-primary">Sign In</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border px-6 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium uppercase tracking-wide ${
                location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/admin" onClick={() => setMobileOpen(false)} className="block text-sm font-medium uppercase tracking-wide text-muted-foreground">Admin</Link>
          <Link to="/profile" onClick={() => setMobileOpen(false)} className="block text-sm font-medium uppercase tracking-wide text-muted-foreground">Profile</Link>
          <Button size="sm" className="w-full font-semibold">
            <User className="mr-2 h-4 w-4" /> Sign In
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
