import React from 'react'
import Hero from '../components/Hero'
import TopProfile from '../components/TopProfile'
import BestProfile from '../components/BestProfile'
import Description from '../components/Description'
import Newsletter from '../components/Newsletter'
import OurPolicy from '../components/OurPolicy'
import Map from '../components/Map/Map'
import GoToTop from '../components/GoToTop/GoToTop'
import Button from '../components/Button'
import ProfileDescription from '../components/ProfileDescription'
import Location from '../components/Location'
import Questions from '../components/Questions'
import Descriptionaa from '../components/Descriptionaa'

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProfile />
      <OurPolicy />
      <BestProfile />
      <Description />
      <ProfileDescription />
      <Questions />
      <Descriptionaa />
      <Location />
      <Map />
      <Newsletter />
      <GoToTop />
      <Button />
    </div>
  )
}

export default Home
