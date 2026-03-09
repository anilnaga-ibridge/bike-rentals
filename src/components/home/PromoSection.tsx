import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function PromoSection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 relative overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="absolute top-0 left-[-20%] w-[60%] h-full bg-secondary/5 blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-full bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="font-display font-black text-4xl md:text-5xl text-primary"
                    >
                        Exclusive <span className="text-secondary">Offers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-muted-foreground font-medium max-w-2xl mx-auto"
                    >
                        Take advantage of these limited-time deals and ride away with unmatched value!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Promo Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="relative group rounded-3xl overflow-hidden glass shadow-xl border border-primary/10 aspect-[4/5] sm:aspect-video md:aspect-[4/3] flex items-center justify-center bg-white/50"
                    >
                        {/* The user needs to place their image at /public/images/promo-1.jpg */}
                        <img
                            src="/images/promo-1.jpg"
                            alt="Special Promotional Offer 1"
                            className="w-full h-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800"; // Fallback image
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <h3 className="text-white font-display font-black text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                Claim This Offer
                            </h3>
                            <Button onClick={() => navigate('/offers')} variant="secondary" className="w-fit opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 font-bold shadow-lg">
                                View Details
                            </Button>
                        </div>
                    </motion.div>

                    {/* Promo Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative group rounded-3xl overflow-hidden glass shadow-xl border border-primary/10 aspect-[4/5] sm:aspect-video md:aspect-[4/3] flex items-center justify-center bg-white/50"
                    >
                        {/* The user needs to place their image at /public/images/promo-2.jpg */}
                        <img
                            src="/images/promo-2.jpg"
                            alt="Special Promotional Offer 2"
                            className="w-full h-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&q=80&w=800"; // Fallback image
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <h3 className="text-white font-display font-black text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                Book Faster, Ride Longer
                            </h3>
                            <Button onClick={() => navigate('/bikes')} className="bg-primary hover:bg-primary/90 text-white w-fit opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 font-bold shadow-lg shadow-primary/20">
                                Book Now
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
