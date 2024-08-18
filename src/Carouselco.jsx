import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CarouselComponent.css'; // Import your custom styles

const CarouselComponent = () => {
    const options = {
        items: 4, // Number of items to display
        loop: true, // Infinite loop
        margin: 10, // Margin between items
        nav: true, // Show next/prev buttons
        dots: true, // Show dots for pagination
        autoplay: true, // Autoplay
        autoplayTimeout: 4500, // Autoplay interval
        smartSpeed: 450 // Animation speed
    };
    
    const items = [
        { href: 'https://www.mygov.in/', src: '/WEB/images/slider/08052023014248mygov.png', alt: 'FS3' },
        { href: 'https://www.india.gov.in/', src: '/WEB/images/slider/08052023014335indiagov.in.png', alt: 'FS4' },
        { href: 'https://admin.skillindiadigital.gov.in/', src: '/WEB/images/slider/22062023034015SkillIndia-logo.jpg', alt: 'FS5' },
        { href: 'https://csc.gov.in/digitalIndia', src: '/WEB/images/slider/08052023013857digital-india-logo.png', alt: 'स्टेट आईटी सेंटर' },
        { href: 'https://mpsedc.mp.gov.in/', src: '/WEB/images/slider/22062023033527mpsedclogo.jpg', alt: 'MPSEDC' },
        { href: 'https://mp.mygov.in/', src: '/WEB/images/slider/22062023034703mp-gov-logo.jpg', alt: 'मध्य प्रदेश सरकार' }
    ];

    return (
        <OwlCarousel className="owl-theme" {...options}>
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <img alt={item.alt} src={item.src} className="img-fluid" />
                    </a>
                </div>
            ))}
        </OwlCarousel>
    );
};

export default CarouselComponent;
