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

const Carousel = () => (

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
           <img src={`${process.env.REACT_APP_API_URL}/images/carousel/caro1.jpg`} alt="Caroosel 1"/>
         </div>
  </Slider>
)

export default Carousel

// import React, { Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
//
// const items = [
//   {
//     src: `${process.env.REACT_APP_API_URL}/images/cospaces/cospace-1-2.jpeg`,
//     // altText: 'Slide 1',
//     // caption: 'Slide 1'
//   },
//   {
//     src: `${process.env.REACT_APP_API_URL}/images/cospaces/cospace-2-1.jpeg`,
//     // altText: 'Slide 2',
//     // caption: 'Slide 2'
//   },
//   {
//     src: `${process.env.REACT_APP_API_URL}/images/cospaces/cospace-2-1.jpeg`,
//     // altText: 'Slide 3',
//     // caption: 'Slide 3'
//   }
// ];
//
// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }
//
//   onExiting() {
//     this.animating = true;
//   }
//
//   onExited() {
//     this.animating = false;
//   }
//
//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }
//
//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }
//
//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }
//
//   render() {
//     const { activeIndex } = this.state;
//
//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.src}
//           className="carousel"
//         >
//           <img className="corousel text-centered"src={item.src} alt={item.altText} />
//           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });
//
//     return (
//       <Carousel
//         activeIndex={activeIndex}
//         next={this.next}
//         previous={this.previous}
//         className="carousel mb-3"
//       >
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         {slides}
//         <CarouselControl className="corousel-arrow" direction="prev" directionText="Previous" onClickHandler={this.previous} />
//         <CarouselControl className="corousel-arrow" direction="next" directionText="Next" onClickHandler={this.next} />
//       </Carousel>
//     );
//   }
// }
//
//
// export default Example;
