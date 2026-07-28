import type { Metadata, Viewport } from 'next';
import { Cinzel, Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const defaultSiteUrl = 'https://bamidele-iyiola-campaign.vercel.app';
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  defaultSiteUrl;
const siteUrl = rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`;
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#7A1730',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bamidele Iyiola S. (ASSORTED) | Candidate for Premises Secretary | Ikeja Club',
    template: '%s | Bamidele Iyiola S. Campaign',
  },
  description:
    'Elect Bamidele Iyiola S. (ASSORTED) as Premises Secretary. Discover his vision for a cleaner, greener and better Ikeja Club through responsible leadership, transparency and service.',
  keywords: [
    'Premises Secretary',
    'Ikeja Club',
    'Bamidele Iyiola',
    'ASSORTED',
    'Leadership',
    'Campaign',
    'Election',
    'Community',
    'Ikeja',
    'Lagos',
  ],
  authors: [{ name: 'Bamidele Iyiola S. Campaign Organization' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Bamidele Iyiola S. (ASSORTED) | Candidate for Premises Secretary | Ikeja Club',
    description:
      'Elect Bamidele Iyiola S. (ASSORTED) as Premises Secretary. Discover his vision for a cleaner, greener and better Ikeja Club through responsible leadership, transparency and service.',
    siteName: 'Bamidele 2026 Campaign',
    locale: 'en_NG',
    images: [
      {
        url: '/images/social/social-preview.webp',
        width: 1200,
        height: 630,
        alt: 'Bamidele Iyiola S. (ASSORTED) campaign preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@assorted_phone_and_gadgets',
    creator: '@assorted_phone_and_gadgets',
    title: 'Bamidele Iyiola S. (ASSORTED) | Candidate for Premises Secretary | Ikeja Club',
    description:
      'Elect Bamidele Iyiola S. (ASSORTED) as Premises Secretary. Discover his vision for a cleaner, greener and better Ikeja Club through responsible leadership, transparency and service.',
    images: ['/images/social/social-preview.webp'],
  },
  verification: {
    google: googleSiteVerification,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Bamidele 2026 Campaign',
      url: siteUrl,
      inLanguage: 'en-NG',
      description:
        'Official campaign website of Bamidele Iyiola S. (ASSORTED), candidate for Premises Secretary at Ikeja Club.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Person',
      name: 'Bamidele Iyiola S.',
      alternateName: 'ASSORTED',
      jobTitle: 'Candidate for Premises Secretary',
      worksFor: {
        '@type': 'Organization',
        name: 'Ikeja Club',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 1 Adepele Street, Off Medical Road, Computer Village',
        addressLocality: 'Ikeja',
        addressRegion: 'Lagos',
        addressCountry: 'NG',
      },
      url: siteUrl,
    },
    {
      '@type': 'Organization',
      name: 'Bamidele Iyiola S. Campaign Organization',
      url: siteUrl,
      logo: `${siteUrl}/images/branding/campaign-logo.webp`,
      sameAs: [
        'https://instagram.com/assorted_phone_and_gadgets',
        'https://wa.me/2348037758413',
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Campaign Home',
      url: siteUrl,
      isPartOf: {
        '@type': 'WebSite',
        url: siteUrl,
      },
      about: {
        '@type': 'Person',
        name: 'Bamidele Iyiola S.',
      },
      inLanguage: 'en-NG',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-white text-[#1F2937] antialiased selection:bg-[#7A1730] selection:text-white font-inter">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}', { anonymize_ip: true });`,
              }}
            />
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
