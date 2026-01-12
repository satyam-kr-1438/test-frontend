import React from 'react';
import Slider from "react-slick";

const CbetOnlinetestseriesexam = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
     <section className='section-spacing pb-15'>
            <div className="c-bet-container pb-3">
                <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="sub-main purple-submain">| Test Series</div>
                  <div className="main-title">
                    <h2>New <span>Test Series</span> for you
                    </h2>
                  </div>
                </div>
                <div className="col-lg-12 mt-2">
                    <Slider {...settings}>
                    <div>
                    <div className="live-test-card">
                    <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                <div className='testseries-name-section'><img src="/img/websiteimage/best-test-series-umage.jpg" alt="best-exam-profile" /></div>
                                <div className='user-profile-image d-flex'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>645.12k Users</span></div>
                            </div>
                            <h5>NICL Assistant (Pre + Mains) Mock Test 2024</h5>
                            <div className="test-details mt-1">
                                <div><span className='ms-1'>18 Total Tests |</span></div>
                                <div><span className='ms-1'>1 Free</span></div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English & Hindi </span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                    <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                <div className='testseries-name-section'><img src="/img/websiteimage/railway-exams.jpeg" alt="best-exam-profile" /></div>
                                <div className='user-profile-image d-flex'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>645.12k Users</span></div>
                            </div>
                            <h5>NICL Assistant (Pre + Mains) Mock Test 2024</h5>
                            <div className="test-details mt-1">
                                <div><span className='ms-1'>18 Total Tests |</span></div>
                                <div><span className='ms-1'>1 Free</span></div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English & Hindi </span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                    <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                <div className='testseries-name-section'><img src="/img/websiteimage/rajasthan-police.jpg" alt="best-exam-profile" /></div>
                                <div className='user-profile-image d-flex'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>645.12k Users</span></div>
                            </div>
                            <h5>NICL Assistant (Pre + Mains) Mock Test 2024</h5>
                            <div className="test-details mt-1">
                                <div><span className='ms-1'>18 Total Tests |</span></div>
                                <div><span className='ms-1'>1 Free</span></div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English & Hindi </span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                    <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                <div className='testseries-name-section'><img src="/img/websiteimage/CSIR-NET.jpg" alt="best-exam-profile" /></div>
                                <div className='user-profile-image d-flex'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>645.12k Users</span></div>
                            </div>
                            <h5>NICL Assistant (Pre + Mains) Mock Test 2024</h5>
                            <div className="test-details mt-1">
                                <div><span className='ms-1'>18 Total Tests |</span></div>
                                <div><span className='ms-1'>1 Free</span></div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English & Hindi </span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                    <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                <div className='testseries-name-section over-flow-img-auto'><img src="/img/websiteimage/ssc-cgl.jpg" alt="best-exam-profile" /></div>
                                <div className='user-profile-image d-flex'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>645.12k Users</span></div>
                            </div>
                            <h5>NICL Assistant (Pre + Mains) Mock Test 2024</h5>
                            <div className="test-details mt-1">
                                <div><span className='ms-1'>18 Total Tests |</span></div>
                                <div><span className='ms-1'>1 Free</span></div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English & Hindi </span>
                            </div>
                        </div>
                    </div>
                    
    
         
    
        </Slider>
                    </div>
                </div>
            </div>
         </section>
         </>
  )
}

export default CbetOnlinetestseriesexam