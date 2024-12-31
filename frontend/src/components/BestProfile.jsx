import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { AppContext } from '../context/AppContext'
import ProfileItem from './ProfileItem'
import { motion } from 'framer-motion'

const BestProfile = () => {

    const {profiles} = useContext(AppContext)
    const [bestSeller,setBestSeller] = useState([])

    useEffect(()=>{
        const bestProfile = profiles.filter((item)=>(item.bestseller))
        setBestSeller(bestProfile.slice(0,6))
    })


  return (
    <div className=' my- bg-gradient-to-b from-black to-black'>
      <motion.div className=' text-center text-3xl py-8'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        <Title text1={'BEST'} text2={'PROFILES'} />
        <p className=' w-2/2 m-auto text-sm sm:text-sm md:text-base text-yellow-600' style={{color: ""}}>
          We are axcited to introduce you to our escort agency in Bangalore. Our agency is leading the adult entertainment world. Our selection of of bengali escorts in Bangalore is very exotic 
          and high-end. That is why you rely on us for your sexual fullfilllment and enjoy the pleasure we bring your way. Lots of fetishes are waiting for you at <a href=""><u style={{color: ""}}>Bangalore call girl</u></a>.
        </p>
      </motion.div>

      {/** Rendering Products */}

      <motion.div onClick={()=>scrollTo(0,0)} className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        {
            bestSeller.map((item,index)=>(
                <ProfileItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </motion.div>

    </div>
  )
}

export default BestProfile
