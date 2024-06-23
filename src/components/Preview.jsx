import React from 'react'
 
import { FiArrowRight } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

const Preview = () => {
  const navigateTooo = useNavigate()
  const handleOrderClick = ()=>{
   navigateTooo('/order')
  }
  return (
    <>
    <div className='prev-section-info'>
        <div className='prev-info-boxes-img-container'>
        <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
        </div>
        <div className="prev-info"> 
        <h2>dish</h2>
         <h2>$20</h2>
        
        <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laudantium asperiores voluptatibus repudiandae. Suscipit tempore voluptate illum quaerat fuga vel..</p>
       
        <button  onClick={handleOrderClick}className='secondary-button'>ORDER <FiArrowRight/>{""} </button>
         {/* <button   className='secondary-button'>ORDER <FiArrowRight/>{""} </button> */}
        </div>
    </div>
  </>
   
  )
}

export default Preview
