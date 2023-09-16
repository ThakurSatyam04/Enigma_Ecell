import React from 'react'
import Image from 'next/image'
import logo from '@/app/Assests/enigma logo 1.png'
import logo2 from '@/app/Assests/enigma logo 2.png'
import NavbarPage from '../navbar/page'
import icon1 from '@/app/Icons/chevrons-down.svg'

const Heropage = () => {
  return (
    <div className=''>
  {/* Hero Logo */}
  <div className='w-full flex items-center justify-center'>
    <Image className='w-[80px] h-[80px]' src={logo} alt='Enigma Logo' />
  </div>

  {/* Navbar - Uncomment when you have the Navbar component */}
  <div className='w-full flex items-center justify-center '>
    <NavbarPage />
  </div>

  <div className='h-full flex flex-col sm:flex-row items-center justify-evenly gap-0 sm:gap-20 glex-wrap'>
    <div className='w-full md:w-4/12 flex items-center justify-center '>
      <Image src={logo2} alt='Enigma logo' />
    </div>
    <div className='hidden md:flex flex-col items-center justify-center'>
      <div className='min-h-[300px] border-r border-white text-white'></div>
      <div><Image src={icon1} alt='Icon'/></div>
    </div>
    <div className='text-white text-2xl sm:text-4xl flex flex-col items-center justify-center gap-5'>
      <div>THE</div>
      <div>ENTREPRENEURSHIP</div>
      <div>CELL OF <span className='text-[#F26938]'>NMIT</span></div>
    </div>
  </div>
</div>

  )
}

export default Heropage
