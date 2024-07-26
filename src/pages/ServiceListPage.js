import React from 'react';
import { Link } from 'react-router-dom';
import services from './Services-Content';
import ServiceList from '../components/ServiceList';

const ServiceListPage = () => {
    return (
        <>
            <div className="title">
                <h1>Our <span>Services</span></h1>
                <p>
                    Our representatives are professionaly trained and skilled with latest
                    and futursitic techniques to provide a best quality service. At
                    AutoMob-Mechanic, we provide a high className service to the customers for
                    their happy and memorable driving experience.
                </p>
            </div>
            <div className="service">
                <ServiceList services={services}/>
            </div>
        </>
    )
}

export default ServiceListPage