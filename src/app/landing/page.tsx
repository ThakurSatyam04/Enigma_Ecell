import React from 'react'
import Heropage from '../components/hero/page'
import AboutPage from '../components/about/page'
import EventsPage from '../components/events/page'

const LandingPage = () => {
  return (
    <div>
      <Heropage/>
      <AboutPage/>
      <EventsPage/>
    </div>
  )
}

export default LandingPage
