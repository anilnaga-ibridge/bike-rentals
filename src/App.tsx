import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { SplashScreen } from "@/components/SplashScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BikesPage from "./pages/BikesPage";
import BikeDetailsPage from "./pages/BikeDetailsPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import CustomerProfilePage from "./pages/CustomerProfilePage";
import TripPackagesPage from "./pages/TripPackagesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OffersPage from "./pages/OffersPage";
import ListVehiclePage from "./pages/ListVehiclePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBikesPage from "./pages/admin/AdminBikesPage";
import AdminBookingsPage from "./pages/admin/AdminBookingsPage";
import AdminCustomersPage from "./pages/admin/AdminCustomersPage";
import AdminMaintenancePage from "./pages/admin/AdminMaintenancePage";
import AdminCouponsPage from "./pages/admin/AdminCouponsPage";
import AdminPackagesPage from "./pages/admin/AdminPackagesPage";

const queryClient = new QueryClient();

function AdminGuard({ children }: { children: React.ReactNode }) {
  const isAdmin = localStorage.getItem('sriganesh_admin') === 'true';
  if (!isAdmin) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SplashScreen visible={isLoading} />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/bikes" element={<BikesPage />} />
              <Route path="/bikes/:id" element={<BikeDetailsPage />} />
              <Route path="/bookings" element={<MyBookingsPage />} />
              <Route path="/profile" element={<CustomerProfilePage />} />
              <Route path="/packages" element={<TripPackagesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/list-vehicle" element={<ListVehiclePage />} />
              <Route path="/admin/login" element={<AdminLoginPage />} />
            </Route>

            {/* Admin routes with sidebar layout */}
            <Route element={<AdminGuard><AdminLayout /></AdminGuard>}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/bikes" element={<AdminBikesPage />} />
              <Route path="/admin/bookings" element={<AdminBookingsPage />} />
              <Route path="/admin/customers" element={<AdminCustomersPage />} />
              <Route path="/admin/maintenance" element={<AdminMaintenancePage />} />
              <Route path="/admin/coupons" element={<AdminCouponsPage />} />
              <Route path="/admin/packages" element={<AdminPackagesPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
