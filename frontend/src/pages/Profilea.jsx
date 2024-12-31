import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import GoToTop from '../components/GoToTop/GoToTop'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import BestProfile from '../components/BestProfile'

const Profilea = () => {
  return (
    <div>
      <div className='bg-gradient-to-b from-black to-black flex flex-col justify-center items-center pt-5 pb-5'>
          <div className=' text-center py-3 text-3xl'>
            <Title text1={'Bangalore '} text2={'Escorts Service'} />
          </div>
           <img src={assets.image14} alt="" className=' max-w-sm rounded hover:scale-90 transition ease-in-out' />
          <div className=' flex items-center gap-2 py-5 px-5 lg:px-12 lg:py-12'>
            <a href=''><button className=' bg-green-500 text-white px-5 py-2 text-sm active:bg-gray-700'>WhatsApp</button></a>
            <a href='tel: 8356965556'><button className=' bg-red-700 text-white px-5 py-2 text-sm active:bg-gray-700'>Contact Us</button></a>
          </div>

          <p className=' m-auto text-sm sm:text-sm md:text-base mb-5 pl-5 text-pink-950' style={{color: "white"}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
          </p>

        <div className=' text-3xl text-center py-3'>
         <Title text1={'Escorts For '} text2={'Adult Entertainment'} />
        </div>
        <p className=' m-auto text-sm sm:text-sm md:text-base mb-8 pl-5 text-pink-950' style={{color: "white"}}>
          Adult entertainment is another important cal girls services in bangalore that is available at our call girl agency. If you are craving adult entertainment and sexual pressure, Bangalore call girls are perfect for you.
          Adult entertainment is the main motive of our escorts agency. We want all our clients to feel adult entertainment at its highest level. Whether you are looking forward to having oral sex or hookups, everything is possible. Our Housewife call girls in Bnagalore are excited to meet you and greet you with different adult entertainment services.
        </p>

        <p className=' m-auto text-sm sm:text-sm md:text-base pl-5 text-pink-950' style={{color: "white"}}>
         Bangalore call girls is well known for the exclusive services that thay bring to men. Their sensual entertainment skills are aslo very unique. Moreover, they have great sex drive. That is why Hot Bhabhi escorts are always capable for meeting your sexual desires and giving
         you enough satisfication. Whenever you hire our adult entertainment <u className=' font-bold'>bangalore call girls</u>, you will be at top of the world.
         Our Divorce escorts in bangalore, will take you on a ride to heaven, where for you. Hire them right now and enjoy exclusive adult entertainment companionship!
        </p>

      </div>

      <BestProfile />
      <GoToTop />
      <Button />
    </div>
  )
}

export default Profilea
