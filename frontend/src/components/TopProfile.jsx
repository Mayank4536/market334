import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { AppContext } from '../context/AppContext'
import ProfileItem from './ProfileItem'
import { motion } from 'framer-motion'

const TopProfile = () => {

    const { profiles } = useContext(AppContext)
    const [latestPofiles,setLatestProfiles] = useState([])

    useEffect(()=>{
        setLatestProfiles(profiles.slice(0,10))
    },[])

  return (
    <div className=' my-0 bg-gradient-to-b from-black to-black'>
      <motion.div className=' text-center py-8 text-3xl'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        <Title text1={'TOP'} text2={'PROFILE'} />

          <motion.p className=' w-2/2 m-auto text-sm sm:text-sm md:text-base  text-yellow-600' style={{color: ""}}
            initial={{opacity:0.2, y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
           >
           Our call girls services allows our clients to take our beautiful girl into
           their lap and kiss unconditionally to awaken your inner masculinity and enjoy soulful pleasure to attain 
           complete satisfication. we will love to serve you the best call girl upon your arrival. just book our services 
           prior to your arrival so that you can get pleasure since your first day in <a href=""><b>banglore call girl</b></a>.
         </motion.p>
         <motion.p className='w-2/2 m-auto text-sm sm:text-sm md:text-base mb-3 text-yellow-600' style={{color: ""}}
          initial={{opacity:0.2, y:100}}
          transition={{duration:1}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          >
          Hello, guys are you seriously looking for <a>Call Girl in bangalore</a> then why you delayed reaching here I am astonished. it is  a wonderful and amazing 
          website having wide stocks than all agencies in Bengalore. From rupees 3500 to rupees 60k mixed profiles are available with <a href=""><u>banglore Call Girls</u></a>.
         </motion.p>
        
      </motion.div>

      {/** Rendering Products */}
      <motion.div onClick={()=> scrollTo(0,0)} className='  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6' 
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
       >
        {
            latestPofiles.map((item,index)=>(
                <ProfileItem key={index} id={item._id} image={item.image} name={item.name} />
            ))
        }
      </motion.div>

    </div>
  )
}

export default TopProfile
