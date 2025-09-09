import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src={'/images/header/logo.png'}
        alt='logo'
        width={350}
        height={120}
        unoptimized={true}
        className='dark:hidden'
      />
      <Image
        src={'/images/header/logo.png'}
        alt='logo'
        width={350}
        height={120}
        unoptimized={true}
        className='dark:block hidden'
      />
    </>
  )
}

export default Logo
