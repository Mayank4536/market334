import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import RelatedProfile from '../components/RelatedProfile'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import GoToTop from '../components/GoToTop/GoToTop'
import ProfileDescription from '../components/ProfileDescription'
import Location from '../components/Location'
import Newsletter from '../components/Newsletter'

const profile = () => {

  const {profileId} = useParams()
  const{profiles,currency} = useContext(AppContext)
  const [profileData,setProfileData] = useState(false)
  const [image,setImage] = useState('')

  const fetchProfileData = async () => {

    profiles.map((item)=>{
      if (item._id === profileId) {
        setProfileData(item)
        setImage(item.image[0])
        return null;
      }
    })
    
  }

  useEffect(()=>{
    fetchProfileData()
  },[profileId])

  return profileData ? (
    <div className=' border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100 bg-gradient-to-b from-black to-black'>

      {/** --------Products Data------ */}
      <div className=' flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/**--------Product Images----- */}
        <motion.div className=' flex-1 flex flex-col-reverse gap-3 sm:flex-row'
          initial={{opacity:0.2, y:100}}
          transition={{duration:1}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
         >
          <motion.div className=' flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           >
            {
              profileData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} key={index} src={item} className=' w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </motion.div>

           <motion.div className=' w-full sm:w-[80%]'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
            >
            <img className=' w-full h-auto' src={image} alt="" />
           </motion.div>

        </motion.div>

        {/** -------Product Information---- */}
        <div className=' flex-1 mx-5 '>
          <h1 className=' font-medium text-2xl mt-2 flex gap-2' style={{color: "white"}}>{profileData.name} <img src={assets.verified_icon} alt="" /></h1>

          <motion.div className=' flex items-center gap-1 mt-2'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           >
            <img src={assets.star_icon} className=' w-3 5' alt="" />
            <img src={assets.star_icon} className=' w-3 5' alt="" />
            <img src={assets.star_icon} className=' w-3 5' alt="" />
            <img src={assets.star_icon} className=' w-3 5' alt="" />
            <img src={assets.star_icon} className=' w-3 5' alt="" />
          </motion.div>

          <motion.div className=' flex gap-3 mt-8 mb-8'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           >
           <a href=''><button className=' bg-red-700 text-white px-8 py-3 text-sm active:bg-gray-700'>ContactUs</button></a>
           <a href=''><button className=' bg-green-500 text-white px-8 py-3 text-sm active:bg-gray-700'>WhatsApp</button></a>
          </motion.div>

         {/*<p>{currency}{profileData.price}</p>*/}
          <motion.p style={{color: "white"}}
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           >{profileData.description}</motion.p>

          <hr className=' mt-8 sm:w-4/5' />

          <motion.div className=' text-xl text-gray-700 mt-5 flex flex-col gap-1'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           >
            <p className=' flex gap-1' style={{color: "white"}}><img src={assets.verified_icon} className='w-3' alt="" />100% Genuine Profile</p>
            <p className=' flex gap-1 border-t' style={{color: "white"}}><img src={assets.verified_icon} className='w-3' alt="" />Cash payment is available when you book your hotels and send the hotels details to our call girls agency.</p>
            <p className=' flex gap-1 border-t' style={{color: "white"}}><img src={assets.verified_icon} className=' w-3' alt="" />We provide 24/7 Client's Support until they meet the right girls.</p>
          </motion.div>

        </div>

      </div>


      {/**--------Description Section------- */}
      <div className=' mt-20 bg-gradient-to-b from-black to-black'>
        <div className=' flex'>
          <motion.b className=' border px-5 py-3 text-sm'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           ><Title text1={'About Bangalore'} text2={'Call girls'}/></motion.b>
        </div>

        <div className=' flex flex-col gap-4 border px-6 py-6 text-sm text-yellow-600'>
          <motion.p style={{color: ""}}
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore libero, praesentium adipisci beatae earum commodi voluptatibus incidunt quidem delectus ducimus, qui sed. Odio quam accusantium, reprehenderit, repellat repellendus dolorem, quos iste necessitatibus voluptate ab tenetur ea quia! Dolore cupiditate nesciunt repellat unde incidunt et ipsum natus corrupti minus, eaque aperiam.</motion.p>
          <motion.p style={{color: ""}}
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
           >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, architecto facilis necessitatibus facere id, unde culpa expedita laborum eligendi molestias minima iste animi deleniti similique. Fuga deserunt excepturi veritatis magni debitis illo cumque, dolores rem alias! Et quidem, perferendis, quasi eaque suscipit molestias doloremque fuga error aliquam assumenda fugit iure.</motion.p>
        </div>
      </div>

      {/** -------------Display Related Profiles--------- */}

      <RelatedProfile category={profileData.category} />
      
      <ProfileDescription />
      <Location />
      <Newsletter />
      <GoToTop />
      <Button />
    </div>
  ) : <div className=' opacity-0'></div>
}

export default profile
