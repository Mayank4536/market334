import React from 'react'
import {assets} from '../assets/assets'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
  <motion.div className=' mb- flex flex-col sm:flex-row bg-gradient-to-b from-black to-white'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
   >

    {/* Hero Left side */}
    <div className='w-full sm:w-1/2 flex items-center border border-gray-700 justify-center py-10 sm:py-0'>
      <div className='text-[#a57b33]'>

          <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-sm md:text-base'>OUR BEST ESCORTS SERVICE</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>BANGALORE HUB</h1>

          <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>BOOK NOW</p>
              <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>

          <div className=' flex items-center gap-2 py-5 px-5 lg:px-12 lg:py-12'>
           <a href=''><button className=' bg-green-500 text-white px-5 py-2 text-sm active:bg-gray-700'>WhatsApp</button></a>
            <a><button className=' bg-red-700 text-white px-5 py-2 text-sm active:bg-gray-700'>Contact Us</button></a>
          </div>
           
      </div>
     </div>

     {/* Hero Right Side */}
     <img src={assets.hero_img} className='w-full sm:w-1/2' alt='hero-img' />
  </motion.div>

  )
}

export default Hero
