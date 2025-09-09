import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us | Saptarushi Charitable Trust",
};

export default function ContactUs() {
  return (
    <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
      <div className='mb-16'>
        <div className='flex gap-2.5 items-center justify-center mb-3'>
          <span>
            <Icon
              icon={'mdi:om'}
              width={20}
              height={20}
              className='text-primary'
            />
          </span>
          <p className='text-base font-semibold text-badge dark:text-white/90'>
            Contact Us
          </p>
        </div>
        <div className='text-center'>
          <h3 className='text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14'>
            Feel free to reach out to Saptarushi Charitable Trust
          </h3>
          <p className='text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6'>
            Have a question about our services, donations, or how to support Vedic traditions?
            We are here to help you connect.
          </p>
        </div>
      </div>
      {/* form */}
      <div className='border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-12'>
          <div className='relative w-fit'>
            <Image
              src={'/images/contactUs/contactUs.jpg'}
              alt='wall'
              width={497}
              height={535}
              className='rounded-2xl brightness-50 h-full'
              unoptimized={true}
            />
            <div className='absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2'>
              <h5 className='text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white'>
                Saptarushi Trust Contact Info
              </h5>
              <p className='text-sm xs:text-base mobile:text-xm font-normal text-white/80'>
                Want to volunteer, donate, or learn more about our Veda Patasala and services? Reach out to us.
              </p>
            </div>
            <div className='absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white'>
              <Link href={'/'} className='w-fit'>
                <div className='flex items-center gap-4 group w-fit'>
                  <Icon icon={'ph:phone'} width={32} height={32} />
                  <p className='text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary'>
                    +91 9492341294
                  </p>
                </div>
              </Link>
              <Link href={'/'} className='w-fit'>
                <div className='flex items-center gap-4 group w-fit'>
                  <Icon icon={'ph:envelope-simple'} width={32} height={32} />
                  <p className='text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary'>
                    saptarushi.trust@gmail.com
                  </p>
                </div>
              </Link>
              <div className='flex items-center gap-4'>
                <Icon icon={'ph:map-pin'} width={32} height={32} />
                <p className='text-sm xs:text-base mobile:text-xm font-normal'>
                  Saptarushi Veda Smartha Samskruta Patasala, Sri Rama Nagar, Peddagollala Palem, Sabbavaram, Visakhapatnam
                </p>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className='flex-1/2'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.4741897929168!2d83.14056254365886!3d17.742376398266828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396574f438bc2d%3A0x64d6678367e0e0ee!2sSapta%20Rushi%20Veda%20Patasala!5e1!3m2!1sen!2sin!4v1756732045239!5m2!1sen!2sin"
              width="100%" 
              height="400" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="rounded-2xl w-full"
            />
          </div>
        </div>

        {/* Donation Details Section */}
        <div className='mt-10 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl'>
          <h2 className='text-2xl font-semibold text-primary mb-6'>Support Our Cause</h2>
          
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h3 className='text-xl font-medium text-black dark:text-white'>Bank Transfer Details</h3>
              <div className='space-y-2 text-black/80 dark:text-white/80'>
                <p>Account Name: Saptarushi Charitable Trust</p>
                <p>Account Number: XXXXXXXXXX</p>
                <p>IFSC Code: XXXXXXXX</p>
                <p>Bank: XXXXX Bank</p>
                <p>Branch: XXXXX, Visakhapatnam</p>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-medium text-black dark:text-white'>Digital Payment Options</h3>
              <div className='space-y-2 text-black/80 dark:text-white/80'>
                <p>UPI ID: saptarushi@upi</p>
                <p>PhonePe/Google Pay: +91 9492341294</p>
                <div className='flex items-center gap-2 mt-4'>
                  <Icon icon="logos:phonepe" width={24} />
                  <Icon icon="logos:google-pay" width={40} />
                </div>
              </div>
            </div>

            <div className='md:col-span-2 bg-primary/10 p-4 rounded-xl'>
              <h3 className='text-xl font-medium text-primary mb-2'>Tax Benefits</h3>
              <p className='text-black/80 dark:text-white/80'>
                Donations to Saptarushi Charitable Trust are eligible for tax exemption under Section 80G and 12A of the Income Tax Act. Tax exemption certificates will be provided for all donations.
              </p>
            </div>
          </div>
        </div>
      </div>
       
      </div>
  )
}
