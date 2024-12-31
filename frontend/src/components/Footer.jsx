import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import Title from './Title'
import { IoLocation } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-b from-red-950 to-black'> 
           {/*} style={{backgroundImage: `url(${assets.hero_img})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             minHeight: '50vh',
            }}*/}
     

     <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm mx-5 '>
       <motion.div
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
          <NavLink to='/'><img src={assets.Logo} className=' mb-5 w-32 mt-6' alt="" /></NavLink>

          <div className='text-center text-3xl border-b-2 border-white mb-5'>
            <Title text1={'Nearby Cities In'} text2={' Bangalore'} />
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-xl'>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
            <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
              <IoLocation />
              <a href="" className=' text-white'>Mumbai</a>
            </div>
          </div>

        </motion.div>

        <motion.div
         initial={{opacity:0.2, y:100}}
         transition={{duration:1}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}}
         >
          {/*<p className=' text-xl font-medium mb-5'>❌❌Bangalore Hubs❌❌</p>*/}
          <ul className=' flex flex-col gap-1 text-white cursor-pointer font-bold text-xl '>
            <a href="/"><li>HOME</li></a>
            <a href="/all-profile"><li>PROFILE</li></a>
            <a href="/about"><li>ABOUT US</li></a>
            <a href=""><li>CONTACT</li></a>
          </ul>
        </motion.div>

        <motion.div
          initial={{opacity:0.2, y:100}}
          transition={{duration:1}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
         >
          <p className=' text-2xl font-medium mb-5 underline text-white'>GET IN TOUCH</p>
          <u className=' flex flex-col gap-1 text-gray-400 cursor-pointer mb-5 text-xl'>
            <Link to=''>+91 435785475348</Link>
            <a href="">hshdfe@gmail.com</a>
          </u>
        </motion.div>

      </div> 

      <motion.div
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        <hr />
        <p className=' py-5 text-sm text-center text-white'>Copyright 2024@ CodewithCorporateWorld - All Right Reserved. </p>
      </motion.div>
      
    </div>
  )
}

export default Footer
