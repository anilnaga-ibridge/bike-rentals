import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    visible: boolean;
}

export function SplashScreen({ visible }: SplashScreenProps) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617]"
                >
                    {/* Atmospheric glow blobs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Logo + Spinner Stack */}
                    <div className="relative flex items-center justify-center">

                        {/* Outer spinning ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                            className="absolute w-48 h-48 rounded-full border-4 border-transparent border-t-secondary border-r-primary"
                            style={{ borderRadius: '50%' }}
                        />

                        {/* Inner pulsing ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                            className="absolute w-36 h-36 rounded-full border-2 border-transparent border-t-primary/50 border-l-secondary/50"
                        />

                        {/* Logo in center */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative z-10 w-24 h-24 flex items-center justify-center"
                        >
                            <img
                                src="/images/logo.png"
                                alt="Sri Ganesh Bike Rentals"
                                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,106,0,0.5)]"
                            />
                        </motion.div>
                    </div>

                    {/* Brand name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <p className="font-display font-black text-3xl text-white uppercase tracking-tight">
                            Sri Ganesh
                        </p>
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary mt-1">
                            Bike Rentals
                        </p>
                    </motion.div>

                    {/* Loading dots */}
                    <div className="flex items-center gap-2 mt-8">
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="w-2 h-2 rounded-full bg-secondary"
                                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.2,
                                    delay: i * 0.2,
                                    ease: 'easeInOut',
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
