'use client';

import dynamic from 'next/dynamic';

const AboutUsContent = dynamic(() => import('@/components/AboutUsContent'), { ssr: false });

export default function ClientAboutUs() {
  return <AboutUsContent />;
}