import React from 'react'

const CareersSlider = () => {
  return (
    <section className='bg-light-color section-spacing'>
        <div className="width-container">
            <div className="row ">
                <div className="col-lg-12 mx-auto">
                    <div className="row justify-between">
                    <div className="col-lg-6 slide-text-headding">
                      <div className='test-quiz-border-bottom'>
                        <h1>Join Us in <span className='theme-color'>our Mission</span></h1>
                        <p className='pt-2 pb-1'>To personalize education for every Government Job aspirant & help them achieve their dream career</p>
                        <p>We created a space to <span className='theme-color'>INTERACT | </span><span className='theme-color'>CONNECT | </span><span className='theme-color'>BELONG | </span><span className='theme-color'>SHARE</span> to Our Portal</p>
                      </div>
                      <div className="d-flex mt-2">
                      <div className="three-card-career">
                        <div className='career-card-sldie-img'>
                        <img
                            src="/img/websiteimage/career-slide-img.PNG"
                            alt="online-test-series-img"
                          />
                        </div>
                        <div className='carrrer-text-slidess'>
                            <h5>Growth Focused</h5>
                            <p>Growth oriented Portal</p>
                        </div>
                      </div>
                      <div className="three-card-career">
                        <div className='career-card-sldie-img'>
                        <img
                            src="/img/websiteimage/career-slide-img.PNG"
                            alt="online-test-series-img"
                          />
                        </div>
                        <div className='carrrer-text-slidess'>
                        <h5>Growth Focused</h5>
                        <p>Growth oriented Portal</p>
                        </div>
                      </div>
                      <div className="three-card-career">
                        <div className='career-card-sldie-img'>
                        <img
                            src="/img/websiteimage/career-slide-img.PNG"
                            alt="online-test-series-img"
                          />
                        </div>
                        <div className='carrrer-text-slidess'>
                        <h5>Growth Focused</h5>
                        <p>Growth oriented Portal</p>
                        </div>
                      </div>
                      </div>
                </div>
                <div className="col-lg-5 text-end">
                <img
                            src="/img/websiteimage/career-slide-img.PNG"
                            className="w-100"
                            alt="online-test-series-img"
                          />
                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CareersSlider