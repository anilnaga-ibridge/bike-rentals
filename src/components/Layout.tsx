import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>© 2026 RideX. Premium Bike Rentals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
