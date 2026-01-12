import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProLiveTests = () => {
    var settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
  return (
    <>
    <section className='section-spacing'>
            <div className="c-bet-container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                     <h2 className='pb-3 '>Popular Pro Live Tests & <span className='theme-color'>Free</span> Quizzes</h2>
                     <p className='text-dark'>Attempt 150+ daily Live tests & quizzes and test your all India ranking.<br />
                     Improve your scores and chances of selection in your target exam.</p>
                     <div className='type-of-quiz-category-wise mt-10'>
                     <ul className="nav nav-tabs" id="myTabs" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link border-radious-test-live-quiz active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Tests</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link border-radious-test-live-quiz" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><span className='Pro-in-live-test'>Pro</span> Live Tests</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link border-radious-test-live-quiz" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><span className='elite-in-live-test'>Elite</span>Live Tests</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link border-radious-test-live-quiz" id="Quizzez-tab" data-bs-toggle="tab" data-bs-target="#Quizzez" type="button" role="tab" aria-controls="Quizzez" aria-selected="false">Quizzes</button>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <Slider {...settings}>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
        </Slider>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <Slider {...settings}>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
        </Slider>
      </div>
      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <Slider {...settings}>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
        </Slider>
      </div>
      <div className="tab-pane fade" id="Quizzez" role="tabpanel" aria-labelledby="Quizzez-tab">
      <Slider {...settings}>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="live-test-card">
                            <button className='live-test'>Live Test</button>
                            <button className='free ms-3'>Free</button>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-details mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg></span>
                                    <span className='ms-1'>30 Questions</span>
                                </div>
                                <div><span className='ms-1'>| 35 Mins.</span></div>
                                <div><span className='ms-1'>| 60 Marks</span></div>
                            </div>
                            <div className="test-date mt-1">
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
                                    <span className='ms-1'>24 Sep, 9:00 to 26 Sep, 21:00</span>
                                </div>
                                <div>
                                 <button className='free'>Start Now</button>
                                </div>
                            </div>
                            <div className='syllabus-live-test-card mt-2'>
                                <span className='testerika-color'>Syllabus</span>
                                <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2 text-dark'>English , Hindi + 4 More</span>
                            </div>
                        </div>
                    </div>
        </Slider>
      </div>
    </div>
    <div className=''>
    <img src="/img/websiteimage/pass-image-1.png" className="w-100" alt="Coupon-image" />
    </div>
                     </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProLiveTests