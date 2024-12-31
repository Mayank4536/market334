import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'

const Descriptionaa = () => {
  return (
    <div className='bg-gradient-to-b from-black to-black'>
        <motion.div className=' text-center py-8 text-3xl'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
        <Title text1={'Call Girls in Bengaluru'} text2={'₹4000 Free DoorStep Delivery'} />
        <p className=' m-auto text-sm sm:text-sm md:text-base text-red-800 ' style={{color: ""}}>
          Welcome to Bengalore no.1 call girls agency, where attractive, intelligent, and well-educated girls  give men the best erotic
          experience they desire. In Bangalore, We are accessible for outcall service. see <a href=''><u style={{color: "red"}}>Bangalore Call Girls</u></a> up close. you'll get the 
          greatest girls you've chosen, along with opportunities for more deep french kisses and other experiences that will ensure your complete fullfillment. professionals call girls and discreate
          high-class massage services are available in Bangalore. The females in our bengalore call girl agency are carefull choosen and professionally trained.
          make a reservation for any of our models from the premium or Top call girls categories right now to receive a level of professional from VIP cal girls Bangalore. We provide expensive<a href=''><u style={{color: "red"}}>Call Girls in Bangalore</u></a>,
          Who are best option if you wamt to keep your sexual encounters private. We do offer Banagalore Massage Call girls. <u style={{color: "red"}}>Get 70% off your first booking for call girl in Bangalore</u>
          When you pay full with cash and receive free home delivery. we are among Bangalore's top providers of call girls services. Get the phone numbers and whatsapp number of over2500 independent call Girls here to speak with them directly. This will not  only 
          save you time , but it will ensure that you encounter <b>Genuine Independent Call Girls in Bangalore</b> that want to offer you better companion call girl services.
        </p>
      </motion.div>

    </div>
  )
}

export default Descriptionaa
