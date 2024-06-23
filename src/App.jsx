import { useState } from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import  Work from './components/Work'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Reservation from './components/Reservation'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
 
import Menu from './components/Menu'
import  Preview  from'./components/Preview'
import Order from './components/Order';
 

//  import { useNavigate } from 'react-router-dom'
 
 

function App() {
  // const navigate = useNavigate();
  // const handleClick = ()=>{
  //   navigate("./components/Reservation");
  // }
  // const router = createBrowserRouter([
  //   {
      
  //     path: "/",
  //     element:  <>   <Home/>  </>
  //   },
  //   {
      
  //     path: "/about",
  //     element:  <> <Navbar/>  <About/>  </>
  //   },
  //   {
      
  //     path: "/testimonial",
  //     element:  <> <Navbar/>  <Testimonial/>  </>
  //   },
  //   {
      
  //     path: "/work",
  //     element:  <> <Navbar/>  <Work/>  </>
  //   },
  //   {
      
  //     path: "/contact",
  //     element:  <> <Navbar/>  <Contact/>  </>
  //   },
  //   {
      
  //     path: "/menu",
  //     element:  <> <Navbar/>  <Menu/>  </>
  //   },
  //   {
      
  //     path: "/reservation",
  //     element:  <> <Navbar/>  <Reservation/>  </>
  //   }
     


  // ])
   
  

  return (
    <>
     {/* <RouterProvider router={router}/> */}
     <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/work' element= {<Work/>}/>
          <Route path='/menu' element= {<Menu/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/testimonial' element= {<Testimonial/>}/>
          <Route path='/reservation' element= {<Reservation/>}/>
          <Route path='/preview' element= {<Preview/>}/>
          <Route path='/order' element= {<Order/>}/>
        </Routes>
      </main>
     </Router>

       
    </>
  )
}

export default App
