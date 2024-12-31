import React from 'react'
import './Map.css'
import Title from '../Title'
import { motion } from 'framer-motion'

const Map = () => {
  return (
    <div className=' my- bg-gradient-to-b from-black to-black'>
      
      <motion.div className='text-center text-3xl'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        <div className='text-center py-8 text-3xl border-t-2 border-red-700 mt-5'>
          <Title text1={'Bengaluru'} text2={'Call Girls'} />
        </div>

        <motion.div className='responsive-map'
          initial={{opacity:0.2, y:100}}
          transition={{duration:1}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
         >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42442.35384453366!2d77.56952691327882!3d12.956777286274894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1734858580481!5m2!1sen!2sin" 
            width="600" height="450" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
        
      </motion.div>
      
    </div>
  )
}

export default Map
