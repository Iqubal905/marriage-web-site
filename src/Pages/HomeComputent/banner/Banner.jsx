import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import img1 from '../../../assets/banner/banner/01.jpg'
import img2 from '../../../assets/banner/banner/16.avif'
import img3 from '../../../assets/banner/banner/12.avif'
import img4 from '../../../assets/banner/banner/14.avif'
import img5 from '../../../assets/banner/banner/05.png'
import img6 from '../../../assets/banner/banner/09.avif'
import '../banner/banner.css'


const Banner = () => {
    return (
      <div>
        <div className="carousel   w-full">
  <div id="slide1" className="carousel-item relative  h-screen w-full">
    <img src={img6} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative h-screen w-full">
  <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative h-screen w-full">
  <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative h-screen w-full">
  <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      </div>
    );
};

export default Banner;