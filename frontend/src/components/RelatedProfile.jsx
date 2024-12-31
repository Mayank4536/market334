import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Title from './Title'
import ProfileItem from './ProfileItem'
import { motion } from 'framer-motion'

const RelatedProfile = ({category,subCategory}) => {

    const { profiles } = useContext(AppContext)
    const [related,setRelated] = useState([])

    useEffect(()=>{

        if (profiles.length > 0) {

            let profilesCopy = profiles.slice()

            profilesCopy = profilesCopy.filter((item)=> category === item.category)

            setRelated(profilesCopy.slice(0,5))
            
        }

    },[profiles])

  return (
    <div className=' my-24'>
       <motion.div className=' text-center text-3xl py-2'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
        <Title text1={'RELATED'} text2={'PROFILES'} />
       </motion.div>

       <motion.div onClick={()=> scrollTo(0,0)} className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
        {
            related.map((item,index)=>(
                <ProfileItem key={index} id={item._id} name={item.name} image={item.image} />
            ))
        }
       </motion.div>
      
    </div>
  )
}

export default RelatedProfile
