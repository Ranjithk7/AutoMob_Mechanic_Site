import React from 'react'
import { useParams } from 'react-router-dom'
import services from './Services-Content';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find((service) => service.link === serviceId);
  const navigate = useNavigate();

  return (
    <>
    <div className="bg"></div>
    <div className="container container1">
      <div className="img-container">
        <img src={service.src[1]} alt={service.curr_page}/>
      </div>
      <div className="content">
        <div className="navbar">
          <Link to='/'>Home</Link> / <Link to='/services'>Services</Link> / <Link to='#'>{service.curr_page}</Link>
        </div>
        <h3>{service.title}</h3>
        <h4>Save: {service.save}</h4>
        <p>
          {service.descriptions.map((description, i) => (
            i >= 1 ? <li key={i}>{description}</li> : null
          ))}
        </p>
        <ul className="aims">
          <p>This service aims at:</p>
          {service.aims.map((aim, i) => (
            <li key={i}>{aim}</li>
          ))}
        </ul>
        <div className='price-tag'>
        <p><strong>Offer Price: </strong>
        <del>{service.price}</del> <span>{service.offer}</span>
        </p>
        </div>
        <button onClick={() => navigate('/booking')}>Book Service</button>
      </div>
    </div>
    </>
  )
}

export default ServicePage