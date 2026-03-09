import { Link } from 'react-router-dom';

interface LogoProps {
    className?: string;
    scrolled?: boolean;
}

export function Logo({ className, scrolled = false }: LogoProps) {
    return (
        <Link to="/" className={`flex items-center gap-3 group ${className}`}>
            <img
                src="/images/logo.png"
                alt="Sri Ganesh Bike Rentals"
                className="h-16 w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
            />
            <div className="text-left">
                <p className={`font-display font-black leading-none text-2xl uppercase tracking-tight`}>
                    Sri Ganesh
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
                    Bike Rentals
                </p>
            </div>
        </Link>
    );
}
