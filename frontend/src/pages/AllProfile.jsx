import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProfileItem from '../components/ProfileItem'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import GoToTop from '../components/GoToTop/GoToTop'

const AllProfile = () => {

    const { profiles } = useContext(AppContext)
    const [showFilter,setShowFilter] = useState(false)
    const [filterProfiles, setFilterProfiles] = useState([])
    const [category,setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType,setSortType] = useState('relevent')

    //Here we Create a function for category
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item =>item !== e.target.value))
        }
        else{
            setCategory(prev => [...prev,e.target.value])
        }
    }

    //Here we create a function for Subcategroy
    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setSubCategory(prev =>[...prev, e.target.value])
        }
    }

    const applyFilter = () => {

        let profilesCopy = profiles.slice()

        if (category.length > 0) {
            profilesCopy = profilesCopy.filter(item => category.includes(item.category))
        }

        if (subCategory.length > 0) {
            profilesCopy = profilesCopy.filter(item => subCategory.includes(item.subCategory))
        }

        setFilterProfiles(profilesCopy)

    }

    // Here we create a function for Sot By
    const sortProfile = () => {

        let fpCopy = filterProfiles.slice()

        switch (sortType) {
            case 'low-high':
                setFilterProfiles(fpCopy.sort((a,b)=>(a.price - b.price)))
                break;

                case 'high-low':
                    setFilterProfiles(fpCopy.sort((a,b)=>(b.price - a.price)))
                    break;
        
            default:
                applyFilter()
                break;
        }

    }

    {/*useEffect(()=>{
        setFilterProfiles(profiles)
    },[]) */}

    useEffect(()=>{
        applyFilter()
    },[category,subCategory])

    useEffect(()=>{
        sortProfile()
    },[sortType])


   {/* useEffect(()=>{
        console.log(subCategory); // Here we check a function console log tab
    },[subCategory])
     */ }

  return (
    <div className=' flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

     {/**Filter Options */}
     <div className=' min-w-60'>
        <motion.p onClick={()=>setShowFilter(!showFilter)} className=' my-2 text-xl flex items-center cursor-pointer gap-2 bg-gradient-to-b from-black to-white'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
         >FILTERS
        <img className={` h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </motion.p>

        {/**Category Filter */}
        <motion.div className={` border border-red-600 pl-5 py-3 mt-6 mx-5 bg-gradient-to-b from-black to-white ${showFilter ? '' : 'hidden'} sm:block`}
            initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
         >
          <p className=' mb-3 text-sm font-medium text-black'>CATEGORIES</p>

          <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className=' flex gap-2'>
                <input className=' w-3' type="checkbox" value={'TopProfile'} onChange={toggleCategory} />TOP PROFILES
            </p>

            <p className=' flex gap-2'>
                <input className=' w-3' type="checkbox" value={'BestProfile'} onChange={toggleCategory} />BEST PROFILES
            </p>

            <p className=' flex gap-2'>
                <input className=' w-3' type="checkbox" value={'IndependentProfile'} onChange={toggleCategory} />INDEPENDENT PROFILES
            </p>
          </div>

        </motion.div>

        {/** SubCategory Filter 
        <motion.div className={` border border-red-600 pl-5 py-3 my-5 mx-5 ${showFilter ? '' : 'hidden'} sm:block`}
            initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
         >
            <p className=' mb-3 text-sm font-medium'>TYPE</p>

            <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className=' flex gap-2'>
                <input className=' w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
                </p>

                <p className=' flex gap-2'>
                <input className=' w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
                </p>

                <p className=' flex gap-2'>
                <input className=' w-3' type="checkbox" value={'WinterWear'} onChange={toggleSubCategory} /> Winterwear
                </p>
            </div>
         </motion.div> */}

      </div>

      {/** Right Side */}
      <div className=' flex-1'>

        <motion.div className=' flex justify-between text-base sm:text-2xl mb-4 mx-5'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
         >
            <Title text1={'All-'} text2={'PROFILES'} />

            {/** Product Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className=' border-2 border-red-600 text-sm px-2 bg-red-600 text-white'>
                <option value="relevent">Sort by: Relevent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by:High to Low</option>
            </select>
        </motion.div>

        {/** Map Products */}
        <motion.div onClick={()=> scrollTo(0,0)} className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'
             initial={{opacity:0.2, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
         >
            {
              filterProfiles.map((item,index)=>(
                <ProfileItem key={index} id={item._id} image={item.image} name={item.name} />
              ))
            }
        </motion.div>

      </div>
       
       <GoToTop />
       <Button />
    </div>
  )
}

export default AllProfile
