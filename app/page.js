import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import OpeningHours from '@/components/OpeningHours';
import OurStory from '@/components/OurStory';

// Structured data for better SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Roots & Co.',
  description:
    'Upscale farm-to-table dining experience with locally sourced ingredients',
  url: 'https://your-domain.com', // Replace with your actual domain
  telephone: '+1-555-123-4567', // Replace with your actual phone number
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street', // Replace with your actual address
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7128', // Replace with your actual coordinates
    longitude: '-74.0060',
  },
  openingHours: ['Mo-Thu 17:00-22:00', 'Fr-Sa 17:00-23:00', 'Su 17:00-21:00'],
  servesCuisine: ['American', 'Farm to Table', 'Gourmet'],
  priceRange: '$$$',
  acceptsReservations: true,
  hasMenu: 'https://your-domain.com/#menu', // Link to your menu section
  image: 'https://your-domain.com/restaurant-image.jpg', // Replace with actual image
  sameAs: [
    'https://www.facebook.com/rootsandco', // Replace with your actual social media
    'https://www.instagram.com/rootsandco',
    'https://www.twitter.com/rootsandco',
  ],
};

export const metadata = {
  title: 'Roots & Co. - Farm-to-Table Restaurant | Local Gourmet Dining',
  description:
    'Discover exceptional farm-to-table dining at Roots & Co. Our chef-crafted menu features the finest locally sourced ingredients. Book your reservation today.',
  keywords:
    'farm to table, local ingredients, gourmet restaurant, fine dining, fresh food, seasonal menu, locally sourced',
  openGraph: {
    title: 'Roots & Co. - Farm-to-Table Restaurant',
    description:
      'Discover exceptional farm-to-table dining at Roots & Co. Our chef-crafted menu features the finest locally sourced ingredients.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Hero />
      <OurStory />
      <Menu />
      <OpeningHours />
    </>
  );
}
