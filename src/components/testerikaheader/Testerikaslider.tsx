import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Testerikaslider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="width-container home-slider-testerika mt-2 mob-none">
        <div className="slider-container main-slider-top">
          <Slider {...settings}>
            <div>
              <img src="/img/websiteimage/cbet-slide-2.jpg" alt="home-slider" />
            </div>
            <div>
              <img src="/img/websiteimage/cbet-slide-3.jpg" alt="home-slider" />
            </div>
             <div>
              <img src="/img/websiteimage/cbet-slide-4.jpg" alt="home-slider" />
            </div>
             <div>
              <img src="/img/websiteimage/cbet-slide-5.jpg" alt="home-slider" />
            </div>
          </Slider>
        </div>
      </div>
      
    </>
  );
};

export default Testerikaslider;
