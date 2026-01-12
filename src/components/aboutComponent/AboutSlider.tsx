import React from 'react'

const AboutSlider = () => {
  return (
    <>
    <section className='light-bg-color section-spacing'>
        <div className="width-container">
            <div className="row">
                <div className="col-lg-6">

              <div className="about-sloide-text">
                <h2 >One <span>Destination </span>For<br /> Competitive<span> Exam Preparation </span></h2>
                <div>
                    <hr />
                </div>
                <div>
                    <p> At Testerika, we believe that success in competitive exams comes from the right guidance, constant practice, and strategic preparation. Our carefully crafted test series simulate real exam conditions, providing you with the opportunity to assess your knowledge, improve time management, and identify areas that need attention. </p>
                </div>
              </div>
                </div>
                <div className="col-lg-6 slider-right-about">
                    <img src="/img/websiteimage/slidere-side-img.png" alt="about-slide" />

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutSlider