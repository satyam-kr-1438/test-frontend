import React from 'react'

const Trustedby = () => {
  return (
    <>
    <div className=' mt-2 bg-light-color section-spacing  d-none-mobile'>
        <div className="width-container ">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-3">
                    <div className="trusted-by">
                        <div className='trusted-by-image'>
                         <img src="img/websiteimage/trusted-by-border-left.png" alt="counter-img" />
                        </div>
                        <div>
                        <span className='our-candiated'>Our Candidates</span>
                        <h2>Trusted by</h2>
                        <p><span className='testerika-color'>15,000,00+</span>  Students</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="trusted-by-counter">
                        <div className="row">
                            <div className="col-lg-4 padding-trusted-by">
                                <div className='counter-image-terusted-by'>
                                    <span>
                                     <img src="img/websiteimage/qa.png" alt="counter-img" />
                                    </span>
                                    <h3 className='mt-3 testerika-color'>5,00,000+</h3>
                                    <p className='text-dark'>Questions attempted</p>
                                </div>
                            </div>
                            <div className="col-lg-4 padding-trusted-by">
                                <div className='counter-image-terusted-by'>
                                    <span>
                                     <img src="img/websiteimage/test-counter.png" alt="counter-img" />
                                    </span>
                                    <h3 className='mt-3 testerika-color'>1,000,00+</h3>
                                    <p className='text-dark'>Tests attempted</p>
                                </div>
                            </div>
                            <div className="col-lg-4 padding-trusted-by">
                                <div className='counter-image-terusted-by'>
                                    <span>
                                     <img src="img/websiteimage/attempted-test.png" alt="counter-img" />
                                    </span>
                                    <h3 className='mt-3 testerika-color'>5,000,00+</h3>
                                    <p className='text-dark'>Quizzes attempted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trustedby