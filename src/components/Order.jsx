import React, { useState } from 'react';
// import Footer from './Footer';
 

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Reservation Details:', formData);
    setSubmitted(true);
  };

  return (
    <>
    <section className="reservation-container">
      <h2>Place your order</h2>
      <div className="image">
        <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      {submitted ? (
        <div className="confirmation-message">
          <h3>Thank you for your order!</h3>
          <p>Your order will be delivered on {formData.date} at {formData.time}.</p>
        </div>
      ) : (
        <form className="reservation-form" onSubmit={handleSubmit}>
          
            <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} required />
            
            <input type="email" name="email" placeholder='Your Email' value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder='Mobile Contact' value={formData.phone} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder='Card Details' value={formData.phone} onChange={handleChange} required />
            <input type="date" name="date" placeholder='Expected Date' value={formData.date} onChange={handleChange} required />
            <input type="time" name="time" placeholder='At What Time?' value={formData.time} onChange={handleChange} required />
            <input type="number" name="guests" placeholder='Quantity' value={formData.guests} onChange={handleChange} required min="1" />
            {/* <textarea name="specialRequests" placeholder='Any Special Request?' value={formData.specialRequests} onChange={handleChange}></textarea> */}
            <div className='rs-btn'>
                <button type="submit">ORDER</button>
            </div>
        </form>
      )}
    </section>
  
    </>
  );
};


export default Order


 
