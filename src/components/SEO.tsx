import { Helmet } from 'react-helmet-async';
import { BRAND } from '@/constants/brand';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
}

export const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogImage = '/images/logo.png',
    ogType = 'website',
    twitterCard = 'summary_large_image',
}: SEOProps) => {
    const siteTitle = title ? `${title} | ${BRAND.name}` : BRAND.name;
    const siteDescription = description || `${BRAND.name} - Premium bike & scooter rentals in Hyderabad. Affordable, reliable & instant booking in Madhapur, Kukatpally, and Ameerpet.`;
    const siteKeywords = keywords || 'bike rental hyderabad, scooter rental hyderabad, bullet rental hyderabad, madhapur bike rental, kukatpally bike rental, ameerpet bike rental';
    const url = window.location.origin + window.location.pathname;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />
            {canonical && <link rel="canonical" href={canonical} />}
            {!canonical && <link rel="canonical" href={url} />}
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};
