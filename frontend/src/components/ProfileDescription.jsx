import React from 'react'
import './ProfileDescription.css'
import Title from './Title'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ProfileDescription = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className=' text-center py-3 text-3xl font-medium bg-gradient-to-b from-black to-black'>
        <Title text1={'Our'} text2={'Blogs'} />
      </div>
      <div onClick={()=>scrollTo(0,0)} className=' right-t flex flex-col gap-5 md:gap-14 md:flex-row items-center px-4 bg-gradient-to-b from-black to-black'>
         <img onClick={()=>navigate('/profilea')}  src={assets.image14} alt="" className=' w-80 xl:w-96 rounded-lg mt-6 hover:scale-90 transition ease-in-out right-b' />
          <div>
             <div onClick={()=>navigate('/profilea')} className=' text-center py-3 text-3xl'>
              <Title text1={'Bangalore'} text2={'Escorts Service'} />
             </div>
             <p className=' m-auto text-sm sm:text-sm md:text-base text-yellow-600' style={{color: ""}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
             <p className=' m-auto text-sm sm:text-sm md:text-base mb-5 text-yellow-600' style={{color: ""}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
          </div>
        </div>

      <div onClick={()=>scrollTo(0,0)} className=' right-t flex flex-col gap-5 md:gap-14 md:flex-row items-center px-4 bg-gradient-to-b from-black to-black'>
         <img onClick={()=>navigate('/profileb')}  src={assets.image14} alt="" className=' w-80 xl:w-96 rounded-lg mt-6 hover:scale-90 transition ease-in-out right-b' />
          <div>
             <div onClick={()=>navigate('/profileb')} className=' text-center py-3 text-3xl'>
              <Title text1={'Bangalore'} text2={'Escorts Service'} />
             </div>
             <p className=' m-auto text-sm sm:text-sm md:text-base text-yellow-600' style={{color: ""}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
             <p className=' m-auto text-sm sm:text-sm md:text-base mb-8 text-yellow-600' style={{color: ""}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
          </div>
        </div>

      <div onClick={()=>scrollTo(0,0)} className=' right-t flex flex-col gap-5 md:gap-14 md:flex-row items-center px-4 bg-gradient-to-b from-black to-black'>
         <img onClick={()=>navigate('/profilec')} src={assets.image14} alt="" className=' w-80 xl:w-96 rounded-lg mt-6 hover:scale-90 transition ease-in-out right-b' />
          <div>
             <div onClick={()=>navigate('/profilec')} className=' text-center py-3 text-3xl'>
              <Title text1={'Bangalore'} text2={'Escorts Service'} />
             </div>
             <p className=' m-auto text-sm sm:text-sm md:text-base text-yellow-600' style={{color: ""}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
             <p className=' m-auto text-sm sm:text-sm md:text-base mb-8 text-yellow-600' style={{color: ""}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
          </div>
        </div>

      <div onClick={()=>scrollTo(0,0)} className=' right-t flex flex-col gap-5 md:gap-14 md:flex-row items-center px-4 bg-gradient-to-b from-black to-black'>
         <img onClick={()=>navigate('/profilec')} src={assets.image14} alt="" className=' w-80 xl:w-96 rounded-lg mt-6 hover:scale-90 transition ease-in-out right-b' />
          <div>
             <div onClick={()=>navigate('/profilec')} className=' text-center py-3 text-3xl'>
              <Title text1={'Bangalore'} text2={'Escorts Service'} />
             </div>
             <p className=' m-auto text-sm sm:text-sm md:text-base text-yellow-600' style={{color: ""}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
             <p className=' m-auto text-sm sm:text-sm md:text-base mb-8 text-yellow-600' style={{color: ""}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
          </div>
        </div>

      <div onClick={()=>scrollTo(0,0)} className=' right-t flex flex-col gap-5 md:gap-14 md:flex-row items-center px-4 bg-gradient-to-b from-black to-black'>
         <img onClick={()=>navigate('/profilec')} src={assets.image14} alt="" className=' w-80 xl:w-96 rounded-lg mt-6 hover:scale-90 transition ease-in-out right-b' />
          <div>
             <div onClick={()=>navigate('/profilec')} className=' text-center py-3 text-3xl'>
              <Title text1={'Bangalore'} text2={'Escorts Service'} />
             </div>
             <p className=' m-auto text-sm sm:text-sm md:text-base text-yellow-600' style={{color: ""}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
             <p className=' m-auto text-sm sm:text-sm md:text-base mb-8 text-yellow-600' style={{color: ""}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
          </div>
        </div>
      <div onClick={()=>scrollTo(0,0)} className=' right-t flex flex-col gap-5 md:gap-14 md:flex-row items-center px-4 bg-gradient-to-b from-black to-black'>
         <img onClick={()=>navigate('/profilec')} src={assets.image14} alt="" className=' w-80 xl:w-96 rounded-lg mt-6 hover:scale-90 transition ease-in-out right-b' />
          <div>
             <div onClick={()=>navigate('/profilec')} className=' text-center py-3 text-3xl'>
              <Title text1={'Bangalore'} text2={'Escorts Service'} />
             </div>
             <p className=' m-auto text-sm sm:text-sm md:text-base text-yellow-600' style={{color: ""}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
             <p className=' m-auto text-sm sm:text-sm md:text-base mb-8 text-yellow-600' style={{color: ""}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit odio! Esse dolorem doloremque nisi natus. Asperiores minus ex ut officia eveniet amet impedit doloribus numquam quibusdam aliquid, explicabo dignissimos error magnam magni vitae corporis, maiores suscipit, rerum velit tenetur? Sed hic eveniet numquam quo eligendi incidunt quibusdam neque! Repellat?
             </p>
          </div>
        </div>

    </div>
  )
}

export default ProfileDescription
