import React from 'react'
import { motion } from 'framer-motion'

const Newsletter = () => {
  return (
    <motion.div className=' text-center bg-gradient-to-b from-black to-black'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
     >
      <p className=' text-2xl font-medium text-red-700 mt-5'>Subscribe now & get 20% off</p>
      <p className=' text-white text-sm sm:text-sm md:text-base mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam voluptatem vero eius odio distinctio a asperiores voluptatibus ullam suscipit?
      </p>

      <form className=' bg-white w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className=' w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
        <button type='submit' className=' bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>

    </motion.div>
  )
}

export default Newsletter
