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
 
 
 

function App() {
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
