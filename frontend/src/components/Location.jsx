import React from 'react'
import Title from './Title'
import { IoLocation } from 'react-icons/io5'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Location = () => {
  return (
    <motion.div className='bg-gradient-to-b from-white to-black'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
     >
      {/*style={{backgroundImage: `url(${assets.image14})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       minHeight: 'vh',
      }} */}
     
        <div className='text-center text-3xl border-b-2 border-red-700 mb-5'>
            <Title text1={'Our Escorts Service'} text2={'Available In Different Cities'} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-xl'>
           <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Mumbai Escorts</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Delhi Escorts</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Gurgaon Escorts</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Hydrabad Escorts</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi Escorts</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
          <div className='flex gap-1 cursor-pointer font-semibold mb-2'>
             <IoLocation />
             <a href="" className=' text-red-950'>Ranchi</a>
          </div>
        </div>  
        
    </motion.div>
  )
}

export default Location
