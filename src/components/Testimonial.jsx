import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import Footer from "./Footer"
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";


function Testimonial() {
  return (
    <>
    <div className='work-section-wrapper'>
    <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
        <div className='work-section-top'>
            <p className='primary-subheading'> </p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className="primary-text">
            Discover what our satisfied customers are saying about their dining experiences with us. From rave reviews to glowing testimonials, find out why they keep coming back for more.
        </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>lorem ipsom</h2>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>lorem ipsom</h2>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>lorem ipsom</h2>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>lorem ipsom</h2>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>lorem ipsom</h2>
        </div>
             <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>lorem ipsom</h2>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Testimonial