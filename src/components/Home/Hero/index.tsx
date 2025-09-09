import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-7xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-15'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm text-red-900 font-medium'>Welcome to</p>
            <h1 className='text-inherit text-6xl text-red-600 sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6 color-skyblue'>
              Saptarushi Charitable Trust
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contactus" className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-indigo-800 hover:border-indigo-800 text-base font-semibold rounded-full hover:cursor-pointer'>
                Get in touch
              </Link>
              <button className='px-8 py-4 border border-indigo-800 dark:border-dark bg-transparent text-indigo-800 dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                View Details
              </button>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-10'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='heroImg'
              width={800}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        

        <div className="container max-w-7xl mx-auto px-4 sm:items-center mt-7">
  <div className="w-full py-6 bg-primary rounded-2xl overflow-hidden">
    <div className="flex items-center animate-slide whitespace-nowrap">
      <p className="text-white mx-8 font-semibold">
         VIDYA SIDDIRBHAVATHI - ADI SHANKARACHARYA VIGRAHA DISTRIBUTION
      </p>
      <p className="text-white mx-8 font-semibold">
       VEDA BHARATA PARIKRAMA YATRA - SHIVOHAM - VEDA DIVAS - NITYA VEDA NADHAM
      </p>
      <p className="text-white mx-8 font-semibold">
        DEVA YAGNAM - PITRU YAGNAM - MANUSHYA YAGNAM - AROGYA SIDDI 
      </p>
      <p className="text-white mx-8 font-semibold">
       GO SEVA - SAPTARUSHI VEDA PATASALA - DHARMA PRASADAM - SPIRITUAL CLASSES 
      </p>
    </div>
  </div>
</div>


            
          </div>
    </section>
  )
}

export default Hero
