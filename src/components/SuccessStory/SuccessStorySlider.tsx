import React from 'react';
import CountUp from 'react-countup';

const SuccessStorySlider = () => {
  return (
    <>
    <section className='bg-light-color  section-spacing '>
      <div className="width-container">
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
    </>
  )
}

export default SuccessStorySlider