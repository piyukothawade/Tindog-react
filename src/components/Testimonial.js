import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// ...

const testimonials = [
  {
    img: 'images/lady-img.jpg',
    text: "My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.",
    name: 'Beverly',
    city: 'New York',
  },
  {
    img: 'images/dog-img.jpg',
    text: "I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.",
    name: 'Pebbles',
    city: '',
  },
  {
    img: 'images/ian-image.png',
    text: 'My dog feels much happier because of TinDog.',
    name: 'Ian Somerhalder',
    city: 'Illinois',
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='main-container'>
      <div className='slider-container'>
        <h1 className='test-title'>Testimonials</h1>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div {...props} className="custom-prev-arrow">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-next-arrow">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const Card = ({ img, text, name, city }) => {
  return (
    <div className='card-con'>
      <img src={img} className='profile' alt={`${name}'s profile`} />
      <p>{text}</p>
      <p className='ptag'>
        <span className='namestyle'>{name},</span> {city}
      </p>
    </div>
  );
};

export default Testimonial;
