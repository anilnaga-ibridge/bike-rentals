import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, User, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bike } from '@/data/bikes';
import { BRAND } from '@/constants/brand';
import { format } from 'date-fns';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    bike: Bike;
    pickupDate?: Date;
    pickupTime?: string;
    returnDate?: Date;
    returnTime?: string;
    price?: number;
    initialName?: string;
    initialPhone?: string;
    initialLocation?: string;
}

export function BookingModal({
    isOpen,
    onClose,
    bike,
    pickupDate,
    pickupTime,
    returnDate,
    returnTime,
    price,
    initialName = '',
    initialPhone = '',
    initialLocation = ''
}: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: initialName,
        phone: initialPhone,
        location: initialLocation,
    });

    // Update local state when initial props change
    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: initialName,
                phone: initialPhone,
                location: initialLocation,
            });
        }
    }, [isOpen, initialName, initialPhone, initialLocation]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `Hello Sri Ganesh Bike Rentals,

I'd like to book a ride with you.

--- VEHICLE DETAILS ---
Type: ${bike.vehicleType} (${bike.category})
Model: ${bike.brand} ${bike.name}
Specs: ${bike.engineCC}cc | ${bike.transmission} | ${bike.fuelType}

--- BOOKING DETAILS ---
Name: ${formData.name}
Phone: ${formData.phone}
Pickup: ${pickupDate ? format(pickupDate, 'dd MMM yyyy') : 'TBD'} at ${pickupTime || 'TBD'}
Return: ${returnDate ? format(returnDate, 'dd MMM yyyy') : 'TBD'} at ${returnTime || 'TBD'}
Location: ${formData.location}
Total Estimated: ₹${price || 'TBD'}

Please confirm my booking availability. Thank you!`;

        const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;

        // Use a slight delay before closing to ensure the popup isn't blocked by unmounting
        window.open(whatsappUrl, '_blank');
        setTimeout(() => {
            onClose();
        }, 100);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-background rounded-3xl shadow-2xl border border-border w-full max-w-md overflow-hidden"
                    >
                        <div className="bg-primary p-6 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <h3 className="font-display text-2xl mb-1">Book Your Ride</h3>
                            <p className="text-white/80 text-sm">Fill in your details to confirm on WhatsApp</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-2xl mb-4 border border-border/50">
                                <img src={bike.image} alt={bike.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                                <div>
                                    <p className="text-[10px] text-secondary uppercase tracking-[0.2em] font-black mb-0.5">{bike.category} Edition</p>
                                    <p className="font-display text-lg leading-tight font-black text-primary">{bike.name}</p>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-1.5">
                                    <User className="h-3 w-3" /> Full Name
                                </label>
                                <Input
                                    required
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-secondary/30 border-none focus-visible:ring-primary h-12 rounded-xl"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-1.5">
                                    <Phone className="h-3 w-3" /> Phone Number
                                </label>
                                <Input
                                    required
                                    type="tel"
                                    placeholder="Enter your phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="bg-secondary/30 border-none focus-visible:ring-primary h-12 rounded-xl"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-1.5">
                                    <MapPin className="h-3 w-3" /> Pickup Location
                                </label>
                                <select
                                    required
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full bg-secondary/30 border-none focus:ring-2 focus:ring-primary h-12 rounded-xl px-4 text-sm outline-none appearance-none cursor-pointer font-medium text-foreground"
                                >
                                    <option value="" disabled>Select Pickup Location</option>
                                    <option value="Ameerpet">Ameerpet</option>
                                    <option value="Madhapur">Madhapur</option>
                                    <option value="Kukatpally">Kukatpally</option>
                                </select>
                            </div>

                            {pickupDate && returnDate && (
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <div className="p-3 bg-secondary/30 rounded-xl border border-border/50">
                                        <p className="text-[10px] text-muted-foreground uppercase font-bold flex items-center gap-1">
                                            <Calendar className="h-2.5 w-2.5" /> Pickup
                                        </p>
                                        <p className="text-sm font-medium">{format(pickupDate, 'dd MMM')}</p>
                                    </div>
                                    <div className="p-3 bg-secondary/30 rounded-xl border border-border/50">
                                        <p className="text-[10px] text-muted-foreground uppercase font-bold flex items-center gap-1">
                                            <Calendar className="h-2.5 w-2.5" /> Return
                                        </p>
                                        <p className="text-sm font-medium">{format(returnDate, 'dd MMM')}</p>
                                    </div>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full gold-shine text-primary-foreground border-0 font-bold h-12 mt-4"
                            >
                                <Send className="mr-2 h-5 w-5" /> Confirm on WhatsApp
                            </Button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
