import React from 'react'

const Newsletter = () => {
  return (
    <>
    <section className='newsletter  section-spacing light-bg-color'>
      <div className="width-container">
        <div className="row">
        <div className="col-lg-12 text-center mb-2">
              <div className="sub-main purple-submain">| Get Testerika All Updates</div>
              <div className="main-title">
                <h2>
                Subscribe <span>Our Newsletter</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <p>Enter your email address to register to our newsletter subscription</p>
            </div>
            <div className="col-lg-12 text-center mt-4">
              <div className="news-leeter">
                <input type="text" placeholder='Enter Your Email' />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="add-text text-center pt-2 pb-2">
              <p><b>No Ads, No Trials, No Comments</b></p>
            </div>
            <div className="counter-newsletter">
              <div className='target-testerika text-news-letter-counter'>
                <h2>500+</h2>
                <p><b>Successfully Achive Target</b></p>
                <span>Online Course’s</span>
              </div>
              <div className='certification-testerika text-news-letter-counter'>
                <h2>100+</h2>
                <p><b>Certification Students</b></p>
                <span>Online Course’s</span>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Newsletter