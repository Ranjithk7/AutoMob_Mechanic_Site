import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({services}) => {
  return (
    <>
    {services.map((service, i) => (
      <Link key={i} to={`/services/${service.link}`}>
        <div className='img'>
          <img
            src={service.src[0]}
            alt="oops"
            width="300px"
            height="200px" />
          <h3>{service.title}</h3>
          <p>{service.descriptions[0]}</p>
        </div>
      </Link>
    ))}
    </>
  )
}

export default ServiceList;