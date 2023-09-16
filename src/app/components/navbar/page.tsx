import React from 'react'

const NavbarPage = () => {
  return (
    <div>
      <div className='bg-[#242526] p-1 rounded-md flex items-center justify-around'>
        <ul className='text-[#F26938] flex gap-10 sm:ml-10 sm:mr-10'>
            <li className='navbar_li'>Home</li>
            <li className='navbar_li'>About</li>
            <li className='navbar_li'>Recruitment’ 23</li>
            <li className='navbar_li'>Annual Report’ 21</li>
            <li className='navbar_li'>Ideathon’ 23</li>
            <li className='navbar_li'>Blogs</li>
            <li className='navbar_li'>Team</li>
            <li className='navbar_li'>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarPage
