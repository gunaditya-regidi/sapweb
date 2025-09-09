import { Icon } from '@iconify/react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const aboutus = () => {
  return (

    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-35 pb-10 md:pb-28">
      {/* --- Title Section --- */}
      <div className="text-center mb-16">
        <div className="flex gap-1.0 items-center justify-center mb-3">
          <span>
            <Icon icon="mdi:om" width={20} height={20} className="text-primary" />
          </span>
          <p className="text-base font-semibold text-badge dark:text-white/90">About Us</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
            Saptarushi Charitable Trust
          </h1>
          <p className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6">
            Illuminating Lives Through Vedic Knowledge & Dharmic Service
          </p>
        </div>
      </div>
      <div className="py-10 bg-gray-100 dark:bg-white/5 rounded-xl">
        <h2 className="text-center text-2xl font-semibold text-primary mb-15"> A Glimpse into the Divine Vibes of Saptarushi </h2>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {[
            "/images/aboutus/img1.jpg",
            "/images/aboutus/img2.jpg",
            "/images/aboutus/img3.jpg",
            "/images/aboutus/img4.jpg",
            "/images/aboutus/img5.jpg",
            "/images/aboutus/img6.jpg"
          ].map((src, idx) => (
            <div key={idx} className="mx-4 min-w-[300px] max-w-xs rounded-lg overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`Saptarushi Event ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-1/2 h-0.5 bg-primary/20 mx-auto my-8"></div>
      {/* --- Main Content Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-16">
        {/* Who We Are Section */}
        <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">Who We Are</h2>
          <p className="text-base text-black dark:text-white/80 leading-7">
            <strong>Saptarushi Charitable Trust</strong>, founded on July 7, 2009, by Dr. M. Madhav Sharma, is a non-profit spiritual organization devoted to preserving and promoting the ancient Vedic traditions through structured Veda Patasalas, dharmic outreach, and community service. Under the visionary guidance of Dr. Sharma, the trust has flourished, offering numerous spiritual activities and services to society.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
          <p className="text-base text-black dark:text-white/80 leading-7">
            We envision a harmonious world where ancient Vedic wisdom illuminates modern life, creating a society deeply rooted in dharmic principles while embracing progress. Our aim is to establish a center of excellence that bridges traditional Vedic education with contemporary social needs.
          </p>
        </div>
      </div>

      {/* Mission Section - Full Width */}
      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
        <ul className="list-disc pl-6 text-base text-black dark:text-white/80 leading-7 space-y-2">
          <li>To maintain Veda Patasala`s around India that nurtures the next generation of Vedic scholars and spiritual leaders.</li>
          <li>To conduct regular Vedic ceremonies, yagnas, and spiritual discourses that benefit society and preserve our sacred traditions.</li>
          <li>To provide support and recognition to Vedic scholars and practitioners who dedicate their lives to preserving our ancient wisdom.</li>
          <li>To create educational programs that make Vedic knowledge accessible and relevant to modern society.</li>
          <li>To undertake charitable initiatives that serve the community while upholding dharmic principles.</li>
          <li>To foster a global community of spiritual seekers connected through shared values and practices.</li>
        </ul>
      </div>

      {/* Future Plans Section - Full Width */}
      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-4">Future Plans</h2>
        <p className="text-base text-black dark:text-white/80 leading-7">
          In alignment with our founder`s vision, we are embarking on several transformative initiatives. Our primary focus is to establish a comprehensive Vedic Research Centre dedicated to preserving and transmitting India`s rich Vedic knowledge to future generations. This center will serve as a hub for scholarly research, traditional learning, and modern interpretation of Vedic sciences.
        </p>
      </div>

      {/* --- Marquee Rolling Images --- */}
      <div className="py-10 bg-gray-100 dark:bg-white/5 rounded-xl">
        <h2 className="text-center text-2xl font-semibold text-primary mb-6"> From sacred chants to community seva relive the milestones of our Vedic movement </h2>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {[
            "/images/aboutus/img7.jpg",
            "/images/aboutus/img8.jpg",
            "/images/aboutus/img9.jpg",
            "/images/aboutus/img10.jpg",
            "/images/aboutus/img11.jpg",
            "/images/aboutus/img12.jpeg"
          ].map((src, idx) => (
            <div key={idx} className="mx-4 min-w-[300px] max-w-xs rounded-lg overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`Saptarushi Event ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default aboutus;
