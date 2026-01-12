import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CareersReviews = () => {
    var settings = {
        dots: true,
        infinite: false,
        // autoplay: true,
        // autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <section className='section-spacing'>
        <div className="width-container">
            <div className="row">
            <div className="col-lg-12 text-center">
                    <div className="sub-main testerika-color">| Employee Speak</div>
                    <div className="main-title">
                        <h2>What Our Employee Share With You</h2>
                    </div>
                </div>
            <div className="col-lg-12 mx-auto pt-3 pb-5">
                <Slider {...settings}>
                <div>
                    <div className='testimonial-career'>
                        <div className='testimonial-profile pb-2'>
                            <div className='testimonial-profiles'>
                            <img
                            src="/img/websiteimage/career-testimonial-1.jpg"
                            alt="team-img"
                          />
                            </div>
                            <div className='ms-3'>
                                <h5>Ramesh M Nair</h5>
                                <p>Senior Android Developer</p>
                            </div>
                            <div className='carrrer-testimonial-icons'>
                            <img
                            src="/img/websiteimage/testimonial-icon.svg"
                            alt="team-img-icon"
                          /></div>
                        </div>
                        <p className='testimonial-text'>For me, it has been three years working with Oliveboard and it has been a great learning experience. The best part I like about working here is the ownership culture where everyone is given an equal and fair chance to contribute to the company's vision.</p>
                    </div>
                </div>
                <div>
                    <div className='testimonial-career'>
                        <div className='testimonial-profile pb-2'>
                            <div className='testimonial-profiles'>
                            <img
                            src="/img/websiteimage/career-testimonial-1.jpg"
                            alt="team-img"
                          />
                            </div>
                            <div className='ms-3'>
                                <h5>Ramesh M Nair</h5>
                                <p>Senior Android Developer</p>
                            </div>
                            <div className='carrrer-testimonial-icons'>
                            <img
                            src="/img/websiteimage/testimonial-icon.svg"
                            alt="team-img-icon"
                          /></div>
                        </div>
                        <p className='testimonial-text'>For me, it has been three years working with Oliveboard and it has been a great learning experience. The best part I like about working here is the ownership culture where everyone is given an equal and fair chance to contribute to the company's vision.</p>
                    </div>
                </div>
                <div>
                    <div className='testimonial-career'>
                        <div className='testimonial-profile pb-2'>
                            <div className='testimonial-profiles'>
                            <img
                            src="/img/websiteimage/career-testimonial-1.jpg"
                            alt="team-img"
                          />
                            </div>
                            <div className='ms-3'>
                                <h5>Ramesh M Nair</h5>
                                <p>Senior Android Developer</p>
                            </div>
                            <div className='carrrer-testimonial-icons'>
                            <img
                            src="/img/websiteimage/testimonial-icon.svg"
                            alt="team-img-icon"
                          /></div>
                        </div>
                        <p className='testimonial-text'>For me, it has been three years working with Oliveboard and it has been a great learning experience. The best part I like about working here is the ownership culture where everyone is given an equal and fair chance to contribute to the company's vision.</p>
                    </div>
                </div>
                <div>
                    <div className='testimonial-career'>
                        <div className='testimonial-profile pb-2'>
                            <div className='testimonial-profiles'>
                            <img
                            src="/img/websiteimage/career-testimonial-1.jpg"
                            alt="team-img"
                          />
                            </div>
                            <div className='ms-3'>
                                <h5>Ramesh M Nair</h5>
                                <p>Senior Android Developer</p>
                            </div>
                            <div className='carrrer-testimonial-icons'>
                            <img
                            src="/img/websiteimage/testimonial-icon.svg"
                            alt="team-img-icon"
                          /></div>
                        </div>
                        <p className='testimonial-text'>For me, it has been three years working with Oliveboard and it has been a great learning experience. The best part I like about working here is the ownership culture where everyone is given an equal and fair chance to contribute to the company's vision.</p>
                    </div>
                </div>
                <div>
                    <div className='testimonial-career'>
                        <div className='testimonial-profile pb-2'>
                            <div className='testimonial-profiles'>
                            <img
                            src="/img/websiteimage/career-testimonial-1.jpg"
                            alt="team-img"
                          />
                            </div>
                            <div className='ms-3'>
                                <h5>Ramesh M Nair</h5>
                                <p>Senior Android Developer</p>
                            </div>
                            <div className='carrrer-testimonial-icons'>
                            <img
                            src="/img/websiteimage/testimonial-icon.svg"
                            alt="team-img-icon"
                          /></div>
                        </div>
                        <p className='testimonial-text'>For me, it has been three years working with Oliveboard and it has been a great learning experience. The best part I like about working here is the ownership culture where everyone is given an equal and fair chance to contribute to the company's vision.</p>
                    </div>
                </div>
                <div>
                    <div className='testimonial-career'>
                        <div className='testimonial-profile pb-2'>
                            <div className='testimonial-profiles'>
                            <img
                            src="/img/websiteimage/career-testimonial-1.jpg"
                            alt="team-img"
                          />
                            </div>
                            <div className='ms-3'>
                                <h5>Ramesh M Nair</h5>
                                <p>Senior Android Developer</p>
                            </div>
                            <div className='carrrer-testimonial-icons'>
                            <img
                            src="/img/websiteimage/testimonial-icon.svg"
                            alt="team-img-icon"
                          /></div>
                        </div>
                        <p className='testimonial-text'>For me, it has been three years working with Oliveboard and it has been a great learning experience. The best part I like about working here is the ownership culture where everyone is given an equal and fair chance to contribute to the company's vision.</p>
                    </div>
                </div>
     

    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CareersReviews