import React from 'react'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Monday from './Monday'
import Footer from './Footer'
import { AiFillStar } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";

const Menu = () => {
     const navigateTo = useNavigate()
  const handlePreviewClick = ()=>{
    navigateTo('/preview')
     
  }
  const navigateToo = useNavigate()
  const handleOrderClick = ()=>{
   navigateToo('/order')
  }
   
  
 
  return (
    <> 
     {/* <RouterProvider router={routertwo}/> */}

  {/* <div className='movies-container favorites'> 
    <h1>MENU</h1>
    <div className="movie-gird"> 
  
    <div className=" card" id="123456">
    <div className="img">
       
       <img src="https://unsplash.it/500/1000"alt="" />
    </div>
    <div className="info">
        <h2>Name</h2>
        <div className="single-info">
            <span>Rate:</span>
            <span>10/10</span>

        </div>
     </div>
        <div className="info">
        
           <div className="single-info">
              <span>Release Date:</span>
              <span>10/10/10</span>
           </div>
          
        </div>
        <div className="overview">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
      
        </div>
     
   </div>
   <div className=" card" id="123456">
    <div className="img">
       
       <img src="https://unsplash.it/500/1000"alt="" />
    </div>
    <div className="info">
        <h2>Name</h2>
        <div className="single-info">
            <span>Rate:</span>
            <span>10/10</span>

        </div>
     </div>
        <div className="info">
        
           <div className="single-info">
              <span>Release Date:</span>
              <span>10/10/10</span>
           </div>
          
        </div>
        <div className="overview">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
      
        </div>
     
   </div>
   <div className=" card" id="123456">
    <div className="img">
       
       <img src="https://unsplash.it/500/1000"alt="" />
    </div>
    <div className="info">
        <h2>Name</h2>
        <div className="single-info">
            <span>Rate:</span>
            <span>10/10</span>

        </div>
     </div>
        <div className="info">
        
           <div className="single-info">
              <span>Release Date:</span>
              <span>10/10/10</span>
           </div>
          
        </div>
        <div className="overview">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
      
        </div>
     
   </div>
   <div className=" card" id="123456">
    <div className="img">
       
       <img src="https://unsplash.it/500/1000"alt="" />
    </div>
    <div className="info">
        <h2>Name</h2>
        <div className="single-info">
            <span>Rate:</span>
            <span>10/10</span>

        </div>
     </div>
        <div className="info">
        
           <div className="single-info">
              <span>Release Date:</span>
              <span>10/10/10</span>
           </div>
          
        </div>
        <div className="overview">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
      
        </div>
     
   </div>
   </div>
   </div> */}
   <div className='work-section-bottom'>
   <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
 
    <div className='work-section-info'>
        <div className='info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <h2>dish</h2>
        <p>Lorem, ipsum dolor.</p>
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='btn'>
        <button  onClick={handlePreviewClick}className='secondary-button'>PREVIEW <FiArrowRight/>{""} 
        

        </button>
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
        </div>
    </div>
    <div className='work-section-info'>
        <div className='info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <h2>dish</h2>
        <p>Lorem, ipsum dolor.</p>
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='btn'>
        <button  onClick={handlePreviewClick}className='secondary-button'>PREVIEW <FiArrowRight/>{""} 
        

        </button>
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
        </div>

 
    </div>
    <div className='work-section-info'>
        <div className='info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <h2>dish</h2>
        <p>Lorem, ipsum dolor.</p>
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='btn'>
        <button  onClick={handlePreviewClick}className='secondary-button'>PREVIEW <FiArrowRight/>{""} 
        

        </button>
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
        </div>
    </div>
    <div className='work-section-info'>
        <div className='info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <h2>dish</h2>
        <p>Lorem, ipsum dolor.</p>
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='btn'>
        <button  onClick={handlePreviewClick}className='secondary-button'>PREVIEW <FiArrowRight/>{""} 
        

        </button>
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
        </div>
    </div>
    <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
    
    <div className='work-section-info'>
        <div className='info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <h2>dish</h2>
        <p>Lorem, ipsum dolor.</p>
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='btn'>
        <button  onClick={handlePreviewClick}className='secondary-button'>PREVIEW <FiArrowRight/>{""} 
        

        </button>
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
        </div>
        
    </div>
    <div className='work-section-info'>
        <div className='info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <h2>dish</h2>
        <p>Lorem, ipsum dolor.</p>
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='btn'>
        <button  onClick={handlePreviewClick}className='secondary-button'>PREVIEW <FiArrowRight/>{""} 
        

        </button>
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
        </div>    </div>
    <div className='work-section-info'>
        <div className='info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <h2>dish</h2>
        <p>Lorem, ipsum dolor.</p>
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <div className='btn'>
        <button  onClick={handlePreviewClick}className='secondary-button'>PREVIEW <FiArrowRight/>{""} 
        

        </button>
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
        </div>
    </div>
    
 
</div>
{/* <Footer/> */}
    


   </>
  )
}

export default Menu
