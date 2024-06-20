import { useState } from 'react'
 
import './App.css'
import Home from './components/Home'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import  Work from './components/Work'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Contact from './components/Contact'
// import { Menu } from '@mui/material'
import Menu from './components/Menu'

//  import { useNavigate } from 'react-router-dom'
 
 

function App() {
  // const navigate = useNavigate();
  // const handleClick = ()=>{
  //   navigate("./components/Reservation");
  // }
  const router = createBrowserRouter([
    {
      
      path: "/",
      element:  <>   <Home/>  </>
    },
    {
      
      path: "/about",
      element:  <> <Navbar/>  <About/>  </>
    },
    {
      
      path: "/testimonial",
      element:  <> <Navbar/>  <Testimonial/>  </>
    },
    {
      
      path: "/contact",
      element:  <> <Navbar/>  <Contact/>  </>
    },
    {
      
      path: "/menu",
      element:  <> <Navbar/>  <Menu/>  </>
    }


  ])
   
  

  return (
    <>
     <RouterProvider router={router}/>

       {/* <Home/>
       <About/>
       <Work/>
       <Testimonial/>
       
       <Contact/>
       <Footer/> */}
    </>
  )
}

export default App
