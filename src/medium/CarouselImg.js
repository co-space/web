import React from 'react'
import  Slider from 'react-slick'

var settings = {
  className: 'slider variable-width',
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  variableWidth: true
};

const CarouselImg = () => (
  <Slider {...settings} className="slidercaro mb-4">
         <div>
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro1.jpg`} alt="Caroosel 1"/>
         </div>
         <div>
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro2.jpg`} alt="Caroosel 1"/>
         </div>
         <div>
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro3.jpg`} alt="Caroosel 1"/>
         </div>
         <div>
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro4.jpg`} alt="Caroosel 1"/>
         </div>
         <div>
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro5.jpg`} alt="Caroosel 1"/>
         </div>
         <div>
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro6.jpg`} alt="Caroosel 1"/>
         </div>
         <div>
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro7.jpg`} alt="Caroosel 1"/>
         </div>
         <div>
           <img src="http://placekitten.com/g/400/200" alt="Caroosel 1"/>
         </div>
  </Slider>
)

export default CarouselImg
