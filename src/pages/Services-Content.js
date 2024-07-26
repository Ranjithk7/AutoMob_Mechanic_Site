import MaitenanceCard from '../images/preventive-card.jpg';
import BodyRepairCard from '../images/body-repair-card.jpg';
import CarCareCard from '../images/car-care-card.jpg';
import MaitenanceImage from '../images/preventive-measures.jpg'
import CarCareImage from '../images/car-care.jpg';
import BodyRepairImage from '../images/body-repair.jpg'

const services = [
    {
        link: 'maintenance',
        src: [MaitenanceCard, MaitenanceImage],
        title: "Preventive Maintenance",
        descriptions: [
            "Periodically check and keep your car cleaning",
            "Looking to keep your car functioning smoothy?",
            "money and opt for our AutoMob-Mechanic's periodic maitenance services."
        ],
        curr_page:'Preventive Maintenance Service',
        save:'35%',
        aims: [
            'Air filter replacement',
            'Engine oil replacement',
            'Break pad clening'
        ],
        price: '$100',
        offer: '$90'
    },
    {
        link: 'body-repair',
        src: [BodyRepairCard, BodyRepairImage],
        title: "Body Repair",
        descriptions: [
            "Full chasis body repair provided by the experts",
            'Paint scratches and dents degrades the appearance of your car?',
            'Opt for AutMob Mechanic\'s body repair service.'
        ],
        curr_page:'Body Repair Service',
        save:'25%',
        aims: [
            'car dent repair',
            'car painting',
            'complete cer body service'
        ],
        price: '$80',
        offer: '$60'
    },
    {
        link: 'car-care',
        src: [CarCareCard, CarCareImage],
        title: "Car Care",
        descriptions: [
            "Get your sparkling clean in just a minute",
            'Looking to keep your car need and clean?',
            'Money and opt for AutMob Mechanic\'s body repair service.'
        ],
        curr_page:'Car Care Servicee',
        save:'20%',
        aims: [
            'Basic car washing and Vacumming',
            'Detailed interior and Upholstery cleaning',
            'Car Painting',
        ],
        price: '$50',
        offer: '$40'
    }
]

export default services;