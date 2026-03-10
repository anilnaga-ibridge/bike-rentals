import { motion } from 'framer-motion';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { BRAND } from '@/constants/brand';

export function FloatingWhatsApp() {
    return (
        <motion.a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I'm%20interested%20in%20renting%20a%20bike!`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center glow-strong"
        >
            <WhatsAppIcon className="h-7 w-7 fill-current" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
            </span>
        </motion.a>
    );
}
