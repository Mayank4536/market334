import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProfileItem = ({id,image,name,price}) => {

  const {currency} = useContext(AppContext)

  return (
      <Link className=' text-gray-700 cursor-pointer' to={`/profile/${id}`}>
        <div className=' overflow-hidden'>
            <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" />
        </div>
        <p className=' pt-3 pb-1 text-sm'>{name}</p>
        <p className=' text-sm font-medium'>{currency}{price}</p>
      </Link>
  )
}

export default ProfileItem
