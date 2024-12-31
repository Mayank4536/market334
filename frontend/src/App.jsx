import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import Profile from './pages/profile'
import AllProfile from './pages/AllProfile'
import { assets } from './assets/assets'
import Profilea from './pages/Profilea'
import Profileb from './pages/Profileb'
import Profilec from './pages/Profilec'

const App = () => {

  //Here We add functionality for cross_icon in login page
  const{showLogin} = useContext(AppContext)

  return (
    <div className='bg-gradient-to-b from-black to-black' >
      {/*style={{backgroundImage: `url(${assets.bg_image})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       minHeight: '100vh',
      }} */}
     
     <Navbar />
     {showLogin &&<Login />}
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile/:profileId' element={<Profile/>} />
        <Route path='/all-profile' element={<AllProfile/>} />
        <Route path='/profilea' element={<Profilea/>} />
        <Route path='/profileb' element={<Profileb/>} />
        <Route path='/profilec' element={<Profilec/>} />
      </Routes>

      <Footer /> 
    </div>
  )
}

export default App
