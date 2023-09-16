import React from 'react'
import Image from 'next/image'
import logo from '@/app/Assests/enigma logo 1.png'
import logo2 from '@/app/Assests/enigma logo 2.png'
import NavbarPage from '../navbar/page'

const Heropage = () => {
  return (
    <div>
        {/* Hero Logo */}
      <div className='w-full flex items-center justify-center'>
        <Image className='w-[80px] h-[80px]' src={logo} alt='Enigma Logo'/>
      </div>

      <div className='w-full flex items-center justify-center'>
        <NavbarPage/>
      </div>

      <div className='flex items-center justify-evenly gap-20 glex-wrap'>
    <div className='w-4/12'>
        <Image src={logo2} alt='Enigma logo' />
    </div>
    <div className='text-white text-4xl flex flex-col gap-5 relative'>
        <div>THE</div>
        <div>ENTREPRENEURSHIP</div>
        <div>CELL OF</div>
        <div> NMIT</div>
    </div>
</div>


      


    </div>
  )
}

export default Heropage
