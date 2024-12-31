import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'
import Map from '../components/Map/Map'
import {motion} from 'framer-motion'
import Button from '../components/Button'
import GoToTop from '../components/GoToTop/GoToTop'

const About = () => {
  return (
    <div>

      <motion.div className=' text-2xl text-center pt-8 border-t'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
        <Title text1={'ABOUT OUR'} text2={'BANGALORE ESCORTS'} />
      </motion.div>

      <motion.div className='my-10 flex flex-col md:flex-row gap-16'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        <img className=' w-full md:max-w-[450px]' src={assets.image14} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4'>
            <p className=' text-red-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui, minima at ullam sunt nesciunt, blanditiis omnis deserunt, asperiores animi maxime esse? Voluptatem inventore, repellendus ipsa iure ab aspernatur delectus consequuntur in minima tempore officia. Quos quis, itaque ab, minima praesentium mollitia rem corporis adipisci similique modi ad quod nesciunt.</p>
            <p className=' text-blue-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius aliquid quasi rem autem obcaecati nulla. Mollitia recusandae sapiente obcaecati pariatur, quisquam, aut quaerat nisi neque atque maiores earum, expedita commodi sed nobis numquam delectus. Eligendi aspernatur nemo, consectetur pariatur error iure dignissimos aut odio quisquam perferendis atque corrupti optio.</p>
            <b className=' text-2xl'>Our Mission</b>
            <p className=' text-red-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero sapiente, omnis dolor eveniet possimus quisquam quia illo? Similique inventore vero accusamus ipsa libero voluptatibus molestiae! Ea exercitationem, nostrum eum quisquam, cupiditate, consequatur hic sunt tempora iste amet mollitia officiis.</p>
        </div>
      </motion.div>

      <motion.div className=' text-4xl py-4'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </motion.div>

      <motion.div className=' flex flex-col md:flex-row text-sm mb-20'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className='text-white'>Quality assurance:</b>
            <p className=' text-red-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque cum deserunt enim doloremque est explicabo vero facere sit quod!</p>
        </div>

        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className=' text-white'>Convenience</b>
            <p className=' text-blue-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore praesentium deserunt fugiat expedita ad debitis nihil minus! Adipisci, beatae quas.</p>
        </div>

        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className='text-white'>Exceptional Customer service</b>
            <p className=' text-red-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam fuga veritatis praesentium voluptates facilis corporis harum ea! Iusto, nisi sit.</p>
        </div>
      </motion.div>

      <Map />
      <Newsletter />
      
      <GoToTop />
      <Button />
    </div>
  )
}

export default About
