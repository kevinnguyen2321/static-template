import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import OpeningHours from '@/components/OpeningHours';
import OurStory from '@/components/OurStory';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Menu />
      <OpeningHours />
    </>
  );
}
