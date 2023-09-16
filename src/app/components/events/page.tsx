import React from 'react'
import EventsCard from './eventCard/page'
import ideathon_logo from '@/app/Assests/Ideathon4_Full_Logo_Yellow_NoBG 1.png'
import image1 from '@/app/Assests/Image Placeholder1 (Copy paste here).png'
import image2 from '@/app/Assests/Image Placeholder (Copy paste here).png'


const EventsPage = () => {
  return (
    <div className='min-h-screen'>
        <div className='w-full flex items-center justify-center'>
            <h2 className='text-[#F2522E] border-b border-b-[#F2522E] w-fit p-4 text-2xl'>EVENTS</h2>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className='w-8/12 flex items-center justify-around gap-10 flex-wrap mt-10'>
                <EventsCard img={ideathon_logo} text={"Ideathon"}/>
                <EventsCard img={image1} text={"Inception"}/>
                <EventsCard img={image2} text={"Workshops"}/>
            </div>
        </div>

    </div>
  )
}

export default EventsPage
