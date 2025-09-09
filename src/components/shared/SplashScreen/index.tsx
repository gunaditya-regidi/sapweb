import Image from 'next/image'

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center animate-pulse">
        <Image src={'/images/header/logo.png'} alt='Logo' className={'w-28 h-28 mx-auto'} />
        <h1 className="text-2xl font-semibold mt-4 text-primary">Saptarushi Trust</h1>
        <p className="text-sm text-gray-600">Spreading the Vedic Light...</p>
      </div>
    </div>
  )
}

export default SplashScreen