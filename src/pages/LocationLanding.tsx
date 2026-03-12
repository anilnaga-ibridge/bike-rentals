import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Shield, Star, Bike, Clock, ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { bikes } from '@/data/bikes';
import { BikeCard } from '@/components/bikes/BikeCard';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const locationData: Record<string, any> = {
    'hyderabad': {
        name: 'Hyderabad',
        title: 'Self Drive Bike Rental in Hyderabad',
        keywords: 'bike rental hyderabad, two wheeler rental hyderabad, scooty for rent hyderabad',
        description: 'Rent your favorite bike or scooter in Hyderabad with Sri Ganesh Bike Rentals. 500+ vehicles, 3 hubs, lowest prices guaranteed. Book now!',
        content: 'Hyderabad, the City of Pearls, is known for its traffic and heritage. Navigating this beautiful city is best done on two wheels. Sri Ganesh Bike Rentals offers a premium fleet of Royal Enfields, Activas, and sports bikes to make your Hyderabad commute effortless and fun.',
    },
    'madhapur': {
        name: 'Madhapur',
        title: 'Bike Rental in Madhapur | HITECH City Two Wheeler Hire',
        keywords: 'bike rental madhapur, scooty for rent madhapur, hitech city bike rental',
        description: 'Looking for bike rental in Madhapur? Sri Ganesh Bike Rentals offers the best scooties and bikes for IT professionals and residents in HITECH City. Fast booking.',
        content: 'Madhapur is the heart of Hyderabad\'s IT hub. With thousands of professionals commuting daily, our Madhapur hub provides the perfect solution with well-maintained bikes and scooters. Avoid the HITECH city traffic with our seamless rental service.',
    },
    'kukatpally': {
        name: 'Kukatpally',
        title: 'Best Bike Rental in Kukatpally | Scooty for Rent',
        keywords: 'bike rental kukatpally, scooty rent kukatpally, jntu bike rental',
        description: 'Rent a bike in Kukatpally at the best rates. Sri Ganesh Bike Rentals provides a wide range of two wheelers for students and residents in Kukatpally and JNTU area.',
        content: 'Kukatpally is one of the busiest residential and commercial areas in Hyderabad. Whether you are a student at JNTU or a local resident, our Kukatpally hub offers flexible daily and monthly rental plans to suit all your needs.',
    },
    'ameerpet': {
        name: 'Ameerpet',
        title: 'Bike Rental in Ameerpet | Affordable Scooty Hire',
        keywords: 'bike rental ameerpet, scoopty for rent ameerpet, hyderabad city bike hire',
        description: 'Affordable bike and scooter rentals in Ameerpet. Sri Ganesh Bike Rentals is your trusted partner for quick and easy two-wheeler hire in the city center.',
        content: 'Ameerpet is the education hub of Hyderabad. We understand the needs of students and job seekers, which is why our Ameerpet hub offers the most competitive prices for bike rentals in the city.',
    }
};

export default function LocationLanding() {
    const { location = 'hyderabad' } = useParams();
    const navigate = useNavigate();
    const data = locationData[location] || locationData['hyderabad'];

    const localBikes = bikes.filter(b => b.city === (location === 'hyderabad' ? b.city : location)).slice(0, 4);

    return (
        <div className="min-h-screen bg-background pt-20">
            <SEO
                title={data.title}
                description={data.description}
                keywords={data.keywords}
            />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-[#020617] text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-4 bg-white/10 w-fit px-4 py-1.5 rounded-full border border-white/10"
                        >
                            <MapPin className="h-3 w-3 text-secondary" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{data.name} HUB</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-black uppercase leading-tight mb-6"
                        >
                            {data.title.split('|')[0]}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/60 mb-8 leading-relaxed"
                        >
                            {data.content}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button onClick={() => navigate('/bikes')} className="h-12 px-8 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-black text-xs uppercase tracking-widest">
                                Browse {data.name} Fleet
                            </Button>
                            <Button variant="outline" onClick={() => navigate('/contact')} className="h-12 px-8 rounded-xl border-white/20 text-white hover:bg-white hover:text-primary font-black text-xs uppercase tracking-widest">
                                Contact Hub
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 bg-muted/50 border-y border-primary/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, label: 'Fully Insured', sub: 'Safe Rides' },
                            { icon: Star, label: '4.9/5 Rating', sub: 'Customer Love' },
                            { icon: Bike, label: 'New Fleet', sub: '2024 Models' },
                            { icon: Clock, label: '24/7 Support', sub: 'We are here' }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <item.icon className="h-8 w-8 text-secondary mb-3" />
                                <p className="font-display font-black text-primary uppercase text-sm">{item.label}</p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="container mx-auto px-6 py-6">
                <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span>Locations</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-secondary">{data.name}</span>
                </nav>
            </div>

            {/* Main Content Sections */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase mb-6">
                                Why Choose Sri Ganesh for <span className="text-secondary">Bike Hire in {data.name}?</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Wide Selection', content: 'Our collection includes everything from fuel-efficient scooters to heavy-duty Royal Enfields.' },
                                    { title: 'Zero Maintenance Hassle', content: 'Each vehicle in our ' + data.name + ' hub is regularly serviced and thoroughly cleaned after every ride.' },
                                    { title: 'Paperless Process', content: 'Book your ride via WhatsApp in under 2 minutes with minimal documentation.' },
                                    { title: 'Best Local Rates', content: 'We offer the most competitive prices in ' + data.name + ' with no hidden charges.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                                        <div>
                                            <h3 className="font-display font-bold text-xl text-primary mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 blur-2xl rounded-full" />
                            <div className="relative glass p-8 rounded-[2.5rem] border border-primary/5">
                                <h3 className="font-display font-black text-2xl text-primary uppercase mb-6">Top Rated Bikes in {data.name}</h3>
                                <div className="space-y-4">
                                    {localBikes.map(bike => (
                                        <div key={bike.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-primary/5 hover:border-secondary/20 transition-all cursor-pointer group">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted">
                                                <img src={bike.image} alt={bike.name + ' for rent in ' + data.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" loading="lazy" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-primary">{bike.name}</h4>
                                                <p className="text-xs text-muted-foreground">{bike.category} · {bike.engineCC}cc</p>
                                                <p className="text-secondary font-black text-sm mt-1">₹{bike.pricingTiers[0].pricePerDay}/day</p>
                                            </div>
                                            <Link to={`/bikes/${bike.id}`}>
                                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-secondary hover:text-white">
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <Button onClick={() => navigate('/bikes')} variant="link" className="w-full mt-6 text-primary font-bold">
                                    View Full {data.name} Inventory →
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Specific Info Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-display font-black text-3xl text-primary uppercase mb-8">Ready to explore {data.name}?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                        Our {data.name} hub is strategically located to serve the residents and students of the area efficiently.
                        We offer daily, weekly, and monthly rental plans that are designed to fit your budget.
                        With Sri Ganesh Bike Rentals, you get the freedom to move at your own pace without the burden of vehicle ownership.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link to="/contact">
                            <Button size="lg" className="h-14 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
                                Find Our Hub
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
