import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BikesPage from "./pages/BikesPage";
import BikeDetailsPage from "./pages/BikeDetailsPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import CustomerProfilePage from "./pages/CustomerProfilePage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBikesPage from "./pages/admin/AdminBikesPage";
import AdminBookingsPage from "./pages/admin/AdminBookingsPage";
import AdminCustomersPage from "./pages/admin/AdminCustomersPage";
import AdminMaintenancePage from "./pages/admin/AdminMaintenancePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/bikes" element={<BikesPage />} />
            <Route path="/bikes/:id" element={<BikeDetailsPage />} />
            <Route path="/bookings" element={<MyBookingsPage />} />
            <Route path="/profile" element={<CustomerProfilePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/bikes" element={<AdminBikesPage />} />
            <Route path="/admin/bookings" element={<AdminBookingsPage />} />
            <Route path="/admin/customers" element={<AdminCustomersPage />} />
            <Route path="/admin/maintenance" element={<AdminMaintenancePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
