import React from 'react'
import Footer from "./Footer"
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";

function Contact() {
  return (
    <>
    <div className='contact-page-wrapper'>
    <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-heading'>Let Us Help You</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='mail us'></input>
            
            <button className='secondary-button'>Submit</button>
            
        </div>
        
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Contact