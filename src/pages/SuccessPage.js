import React from 'react';
import successImage from '../images/thankyou.jpg';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <>
    <div className="bg"></div>
    <div className="container">
      <div className="img-container">
        <img src={successImage} alt="Thank you" widht />
      </div>
      <div className="content">
        <h3>Your Booking is Confirmed&#x1F44D;</h3>
        <main className='thank-you'>
          <li>We will get you soon withthe details via email/phone.</li>
          <div className='cancel'>
          <li>For any reason want to re-schedule/cancel it?</li>
          <li>Please drop us a note at <Link to='mailto:admin@automob.co.in'>admin@automob.co.in</Link></li>
          </div>
          <li>Cheers,</li>
          <li>The AutoMob-Mechanic Team.</li>
        </main>
      </div>
    </div>
    </>
  )
}

export default SuccessPage