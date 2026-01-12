import React from 'react';
import CountUp from 'react-countup';


const CbetSuccessStoriesMain = () => {
  return (
    <>
     <section className='bg-light-color-2  section-spacing '>
      <div className="c-bet-container">
       <div className="row">
        <div className="col-lg-5">
            <div className="job-selection-card text-center">
                <p>Job Selections.</p>
                <CountUp start={0} end={423891} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span  className='auto-counter-size-color' ref={countUpRef} />
    </div>
  )}
</CountUp>
                <h4></h4>
                <h6>Share your Selection Journey to be part of Testerika Wall of Fame</h6>
                <button className='Theme-buttons mt-2'>Share Your Journey</button>
            </div>
        </div>
        <div className="col-lg-7">
            <div className='job-selection-card pt-2 pb-2 d-flex'>
                <div className="our-selection-img-first-row">
                    <div className='our-selection-img-1'>
                     <img src="/img/websiteimage/our-selection-img-1.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-2'>
                     <img src="/img/websiteimage/our-selection-img-2.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-3'>
                     <img src="/img/websiteimage/our-selection-img-8.png" alt="our-selection-img" />
                    </div>
                </div>
                <div className="our-selection-img-second-row">
                    <div className='our-selection-img-4'>
                     <img src="/img/websiteimage/our-selection-img-4.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-5'>
                     <img src="/img/websiteimage/our-selection-img-5.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-6'>
                     <img src="/img/websiteimage/our-selection-img-6.png" alt="our-selection-img" />
                    </div>
                </div>
                <div className="our-selection-img-third-row">
                    <div>
                    <div className='our-selection-img-7'>
                     <img src="/img/websiteimage/our-selection-img-7.png" className='w-100' alt="our-selection-img" />
                    </div>
                    </div>
                    <div className='d-flex'>
                    <div className='our-selection-img-8 w-50'>
                     <img src="/img/websiteimage/our-selection-img-8.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-9 w-50'>
                     <img src="/img/websiteimage/our-selection-img-9.png" alt="our-selection-img" />
                    </div>
                    </div>
                    <div className='d-flex'>
                    <div className='our-selection-img-10 w-50'>
                     <img src="/img/websiteimage/our-selection-img-10.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-11 w-50'>
                     <img src="/img/websiteimage/our-selection-img-11.png" alt="our-selection-img" />
                    </div>
                    </div>
                </div>
                <div className="our-selection-img-fourth-row">
                    <div className='our-selection-img-12'>
                     <img src="/img/websiteimage/our-selection-img-12.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-13'>
                     <img src="/img/websiteimage/our-selection-img-13.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-14'>
                     <img src="/img/websiteimage/our-selection-img-14.png" alt="our-selection-img" />
                    </div>
                </div>
                <div className="our-selection-img-five-row">
                    <div>
                    <div className='our-selection-img-15'>
                     <img src="/img/websiteimage/our-selection-img-15.png" className='w-100' alt="our-selection-img" />
                    </div>
                    </div>
                    <div className='d-flex'>
                    <div className='our-selection-img-16 w-50'>
                     <img src="/img/websiteimage/our-selection-img-16.png" alt="our-selection-img" />
                    </div>
                    <div className='our-selection-img-17 w-50'>
                     <img src="/img/websiteimage/our-selection-img-17.png" alt="our-selection-img" />
                    </div>
                    </div>
                    <div>
                    <div className='our-selection-img-18'>
                     <img src="/img/websiteimage/our-selection-img-13.png" className='w-100' alt="our-selection-img" />
                    </div>
                    </div>
     
                </div>
            </div>
        </div>
       </div>
      </div>
    </section>
    <section className='section-spacing mt-5 mb-5'>
        <div className="width-container">
            <div className="row">
                <div className="col-lg-5">
                 <img src="/img/websiteimage/Selections-testerika.png" className='w-100' alt="our-selection-img" />
                </div>
                <div className="col-lg-6 d-flex justify-content-between">
                    <div className="selections-card">
                        <div className='selection-card-color margin-top-selections selection-catheory-image text-center'>
                            <img src="/img/websiteimage/ssc-trophy.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span className='text-dark'>Selections in SSC</span>
                        </div>
                        <div className='selection-card-color-2 selection-catheory-image text-center mt-5'>
                            <img src="/img/websiteimage/railways-icon.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span className='text-dark'>Selections in Railways</span>
                        </div>
                    </div>
                    <div className="selections-card">
                        <div className='selection-card-color-3 selection-catheory-image text-center'>
                            <img src="/img/websiteimage/banking-icon.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span className='text-dark'>Selections in Banking</span>
                        </div>
                        <div className='selection-card-color-4 selection-catheory-image text-center mt-5'>
                            <img src="/img/websiteimage/government-exam.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span className='text-dark'>Selections in Other Govt Exams</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='bg-light-color-2'>
    <div className="live-test-main section-spacing">
        <div className="width-container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="sub-main testerika-color">| Our Testimonial</div>
              <div className="main-title">
                <h2>
                  Testerika <span>Wall of Fame</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="main-testimonial">
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
                <div className="wall-of-fame text-center custom-fame-width-cbet">
                  <div className="fame-circle">
                    <img src="/img/websiteimage/testerika-fame-circle.png" alt="fame-circle" />
                  </div>
                  <h3 className="testerika-color">Harikesh jangid</h3>
                  <p>Executive Chairman of Testrika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section-spacing'>
        <div className="width-container">
            <div className="row">
                <div className="col-lg-6 born-to-be-hero-img">
                <img src="/img/websiteimage/born -to-be-hero.jpg" alt="bor-to-be-hero" />
                </div>
                <div className="col-lg-6">
                    <div className="share-your-stories">
                        <h2 className='pb-3'>Share Your <span className='theme-color'>Success <br />Journey</span> With Us</h2>
                        <hr />
                        <p className='pb-2'><b className='theme-color'>Become a Hero For Others</b></p>
                        <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's </p>
 <button className='Theme-buttons mt-2'>Share Your Journey</button>


                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CbetSuccessStoriesMain