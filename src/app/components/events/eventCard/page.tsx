import React from 'react'
import Image from 'next/image'

const EventsCard = (props:any) => {
  return (
    <div className=''>
      <div className='flex items-center justify-center flex-col bg-white rounded-md'>
        <div className=' h-[150px] w-[150px] bg-[#815514]  flex  items-center justify-center rounded-md'>
            <div className=''>
                <Image src={props.img} alt='Ideathon logo'/>
            </div>
        </div>
        <div>
            <h3 className='font-bold text-black'>{props.text}</h3>
        </div>
      </div>
    </div>
  )
}

export default EventsCard
