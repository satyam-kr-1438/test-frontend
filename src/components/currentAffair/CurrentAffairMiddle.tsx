import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Accordion from 'components/reuseable/accordion';

import { accordionList1 } from 'data/faq';
type PageTypeProps = {
  text?: string;
};

const CurrentAffairMiddle = () => {
    var settings = {
        dots: false,
        navText: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section className='section-spacing'>
        <div className="width-container">
            <div className="row">
                <div className="col-lg-9 p-0">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                        <div className="attempt-free-quiz-card">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height='14' width='18' viewBox="0 0 576 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" fill='#60A37E'/></svg></span>
                        <span className='ms-4'>Attempts Free Current Affairs Quiz -</span>
                        <span className='theme-color ms-2 pointer'>Click Here</span>
                    </div>
                        </div>
                        <div>
                        <button className="Theme-buttons mt-0">
                    {' '}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14" width="14" className="">
                        <path
                          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    <span className="ms-2">Download Today's Current Affairs</span>
                  </button>
                        </div>
                    </div>
                   
                    
                    <div className="bg-light-colored-green">
                    <nav className="navigation-tabs-douts">
                            <div
                              className="nav nav-tabs  w-100 pb-4"
                              id="nav-tab"
                              role="tablist"
                            >
                                 <button
                                className="nav-link current-affair active border-none"
                                id="all-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-all"
                                type="button"
                                role="tab"
                                aria-controls="all-other"
                                aria-selected="true"
                              >
                                All
                              </button>
                              <button
                                className="nav-link current-affair border-none"
                                id="allexam-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#allexam-exam"
                                type="button"
                                role="tab"
                                aria-controls="allexam-exam"
                                aria-selected="false"
                              >
                                Daily
                              </button>
                              <button
                                className="nav-link  current-affair border-none"
                                id="others-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-others"
                                type="button"
                                role="tab"
                                aria-controls="others-other"
                                aria-selected="false"
                              >
                                Monthly
                              </button>
                            </div>
                          </nav>
                          <div className="tabs-sections-starts">
                        <div className="tab-content mt-2" id="nav-tabContent">
                        <div className="tab-pane fade  show active" id="nav-all" role="tabpanel" aria-labelledby="all-tab">
                         <h3 className='pt-2 pb-2 theme-bg-2 mb-3 mt-3 p-3'>Current Affairs Today in English - Stay Updated With The Latest News</h3>
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <p className='text-center theme-color'>Load More</p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="allexam-exam"
                            role="tabpanel"
                            aria-labelledby="search-exam-tab"
                          >
                            <h3 className='pt-2 pb-2 theme-bg-2 mb-3 mt-3 p-3'>Current Affairs Today in English - Stay Updated With The Latest News</h3>
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <p className='text-center theme-color'>Load More</p>
                          </div>
                          <div className="tab-pane fade" id="nav-others" role="tabpanel" aria-labelledby="other-tab">
                          <h3 className='pt-2 pb-2 theme-bg-2 mb-3 mt-3 p-3'>Current Affairs Today in English - Stay Updated With The Latest News</h3>
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <hr />
                         <div className='current-affair-card-box'>
                         <img
                            src="/img/websiteimage/Daily-Current-Affairs-in-English.jpg"
                            alt="current-affair-img"
                          />
                           <p className='theme-color'>December 3, 2024</p>
                          <h2 className='pt-1'>Ayush Sector Achieves $43 Billion Market in 2023</h2>
                          <ul className='pt-2 pb-2'>
                            <li>The Ayush sector has registered tremendous growth in the last 10 years, and its market will surpass 43 billion dollars in 2023.</li>
                            <li>The Ayush market has grown exponentially, from USD 2.85 billion in 2014 to USD 43.4 billion in 2023, with exports doubling from USD 1.09 billion to USD 2.16 billion.</li>
                            <li>Registered Ayush Practitioners: More than 755,780.</li>
                            <li>Healthcare: 3,844 Ayush hospitals.</li>
                          </ul>
                         </div>
                         <p className='text-center theme-color'>Load More</p>
                          </div>
                         
                        </div>
                      </div> 


                                          
                    </div>
                    <div className="mt-5">
                    <div className="live-test-main section-spacing bg-light-colored-green">
        <div className="width-container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="main-title">
                <h2>
                  Frequently <span>Ask</span> Question
                </h2>
              </div>
            </div>
            <div className="col-lg-9 mt-2 mr-auto mx-auto">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Test
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Payment/Transaction
                  </button>
                </li>
                
                
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="accordion-wrapper" id="accordion">
                    <div className="row">
                      {accordionList1.map((items, i) => {
                        return (
                          <div className="col-md-12" key={i}>
                            <Accordion key={items.no} {...items} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="accordion-wrapper" id="accordion">
                    <div className="row">
                      {accordionList1.map((items, i) => {
                        return (
                          <div className="col-md-12" key={i}>
                            <Accordion key={items.no} {...items} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='test-knowledge-number'>
                    <div className="downlaod-app-inner-section text-center bg-light-color">
              <div className="app-download-slidersss pb-3">
                <Slider {...settings}>
                  <div>
                    <div className="mobile-slide">
                      <img
                        src="/img/websiteimage/mobile-app-download.png"
                        className="w-50 mx-auto"
                        alt="mobile-app-screen"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mobile-slide">
                      <img
                        src="/img/websiteimage/mobile-app-download.png"
                        className="w-50 mx-auto"
                        alt="mobile-app-screen"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mobile-slide">
                      <img
                        src="/img/websiteimage/mobile-app-download.png"
                        className="w-50 mx-auto"
                        alt="mobile-app-screen"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
              <h5 className="pb-2">Download App</h5>
              <span>Share & Discuss your doubts with greater ease on the Testserika App.</span>
              <br />
              <button className="theme-btn mt-3">Download App Now</button>
            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CurrentAffairMiddle