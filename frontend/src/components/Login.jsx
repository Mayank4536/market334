import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Login = () => {

  const [state,setState] = useState('Login')
  const {setShowLogin} = useContext(AppContext)

  //You cannot scroll the webpage when we open login page through this useEffect function.
  useEffect(()=>{
    document.body.style.overflow = 'hidden'

    return ()=>{
      document.body.style.overflow = 'unset'
    }
  },[])

  return (
    <div className=' absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

    <motion.form className=' relative p-10 rounded-xl text-slate-500 bg-gradient-to-b from-white to-black'
        initial={{opacity:0.2, y:50}}
        transition={{duration:0.3}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
     >
        <h1 className=' text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className=' text-sm'>Welcome back! Please sign in to continue</p>

        {state !== 'Login' &&
        <div className='border px-6 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.user_icon} className=' w-7' alt="" />
            <input className=' outline-none text-sm placeholder:bg-gradient-to-b from-white to-black' type="text" placeholder='Enter your name' required />
        </div>
        }

        <div className=' border px-6 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.email_icon} className=' w-7' alt="" />
            <input className=' outline-none text-sm placeholder:bg-gradient-to-b from-white to-black' type="email" placeholder='Email id' required />
        </div>

        <div className=' border px-6 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.lock_icon} alt="" />
            <input className=' outline-none text-sm placeholder:bg-gradient-to-b from-white to-black' type="password" placeholder='Password' required />
        </div>

        <p className=' text-sm text-red-600 my-4 cursor-pointer'>Forgot password?</p>

        <button className=' bg-red-600 w-full text-white py-2'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

        {state === 'Login' ?
        <p className=' mt-5 text-center'>Don't have an account? <span onClick={()=>setState('Sign Up')} className=' text-red-600 cursor-pointer'>Sign Up</span></p>
        :
        <p className=' mt-5 text-center'>Already have an account? <span onClick={()=>setState('Login')} className=' text-red-600 cursor-pointer'>Login</span></p>
        }

        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className=' absolute top-5 right-5 cursor-pointer' alt="" />

    </motion.form>
      
    </div>
  )
}

export default Login
