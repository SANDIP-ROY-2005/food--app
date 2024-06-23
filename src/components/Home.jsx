import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Footer from "./Footer"
 
 
import Display from './Display';
import About from './About';
import CarouselPage from './CarouselPage';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleButtonClick =()=>{
        navigate('/menu');
    }
  return (
    <>
    <div className='home-container'>
        {/* <Navbar/> */}
        {/* <Carousel data={slides}/> */}
        <CarouselPage/>
        <div className="hero-section">
            <div className="about-us"> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, architecto.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur similique itaque animi labore harum molestiae nesciunt excepturi sunt assumenda repellat nam sapiente, recusandae eveniet eligendi dignissimos id qui, laboriosam quod eaque voluptates cum nisi veniam. Assumenda labore quaerat aliquid!
            </div>
            
        </div>
         
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                Enjoy Tasty Meals, Straight to Your Plate, Always Fresh and Hot!
                </h1>
                <p className='primary-text'>
                Dive into our yummy meals, made just for you and brought to your door, so you can enjoy every bite without waiting!
                </p>
                <button  onClick={handleButtonClick}className='secondary-button'>
                    Order Now <FiArrowRight/>{""}
                </button>
            </div>
            <div className='home-image-section'>
                <img src={BannerImage} alt=''/>
            </div>
        </div>
    </div>
    <Display/>
    <About/>
    
    <Footer/>
    </>
  )
}

export default Home
