import React from 'react'

const BecomePartner = () => {
  return (
    <>
    <section className='section-spacing'>
        <div className="width-container">
            <div className="row">
                <div className="col-lg-6 border-right-solids">
                 <div className="partners">
                    <div className='become-instructor-image'>
                     <img src="/img/websiteimage/instructor.png" alt="Become-instructor" />
                    </div>
                    <div className='instructor-become'>
                        <h3>Become an Instructor</h3>
                        <p>Testerika gives you the platform to reach thousands of learners and make a real difference.</p>
                        <button>APPLY NOW</button>
                    </div>
                 </div>
                </div>
                <div className="col-lg-6">
                <div className="partners">
                    <div className='become-instructor-image'>
                     <img src="/img/websiteimage/partner.png" alt="Become-instructor" />
                    </div>
                    <div className='instructor-become'>
                        <h3>Become a Partner</h3>
                        <p>By partnering with Testerika, you can be part of a global movement that’s shaping the future of learning. </p>
                        <button>CONTACT US</button>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BecomePartner