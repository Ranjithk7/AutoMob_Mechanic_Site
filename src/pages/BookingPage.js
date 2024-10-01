import React from 'react'
import BookingImage from '../images/booking.jpg';
import { useNavigate } from 'react-router';

const BookingPage = () => {
  const navigate = useNavigate();
  return (
    <>
     <h2>Book <span>Your</span> Service</h2>

    <div className="form-container">
      <div className="form">
      <form onSubmit={() => navigate('/success')}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="fullname" required spellCheck="false" />
            </div>
            <div>
              <label htmlFor="email">Email Id</label>
              <input type="email" id="email" name="emailid" required />
            </div>
            <div className="mobile">
            <label htmlFor="mobile">Phone Number</label>
                <div className="code">
                  <select name="countrycode" id="code" required>
                    <option selected hidden>Code</option>
                    <option value="+91">+91</option>
                    <option value="+78">+78</option>
                    <option value="+55">+55</option>
                  </select>
                  <input type="number" id="mobile" name="number" required />
                </div>
            </div>
            <div>
            <label htmlFor="service">Select Service</label>
            <select name="services" id="service" required>
                <option selected hidden value="">--Select Service--</option>
                <option value="car care">Car Care Service</option>
                <option value="maintenace">Preventive Maintenance Service</option>
                <option value="body repair">Body Repair Service</option></select>
            </div>
            <div>
            <label htmlFor="manufacturer">Car Make</label>
            <input type="text" id="manufacturer" name="make" required />
            </div>
            <div>
            <label htmlFor="model">Car Model</label>
            <input type="text" id="model" name="model" required />
            </div>
            <div className="fuel">
              <label htmlFor="fuel">Fuel Type</label>
              <input type="radio" id="petrol" name="fuel" value="petrol" /><label htmlFor="petrol">Petrol</label>
              <input type="radio" id="diesel" name="fuel" value="diesel" /><label htmlFor="diesel">Diesel</label>
              <input type="radio" id="lpg" name="fuel" value="lpg" /><label htmlFor="lpg">LPG</label>
              <input type="radio" id="other" name="fuel" value="others" /><label htmlFor="other">Others</label>
            </div>
            <div>
            <label htmlFor="km">Kilometer Ran</label>
            <input type="number" id="km" name="Kilometer"/>
            </div>
            <div className='submit-btn'>
              <button onClick={navigate('/success')} type="submit">Schedule Your Appointment</button>
            </div>
      </form>
      </div>
      <div className="form-img">
        <img src={BookingImage} alt="oops" height={300} width={300} />
      </div>
    </div>
    
    </>
  )
}

export default BookingPage;