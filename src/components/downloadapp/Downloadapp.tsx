import React from 'react'

const Downloadapp = () => {
  return (
    <>
    <section className='section-spacing'>
        <div className="width-container">
            <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="sub-main testerika-color">| Get App Link</div>
              <div className="main-title">
                <h2>Learning Today,<span>Leading </span>Tomorrow</h2>
              </div>
            </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="download-app-text ">
                        <h3>With <span> India’s</span> no 1  Selling 
                        <br/><span>Test series</span></h3>
                        <hr />
                        <p className='pt-3'>Download Our app & Discover Testerika <br/>Best way of learning !</p>
                        <div className='download-button'>
                         <img src="/img/websiteimage/android-testerika.png" alt="Download-app" />
                         <img src="/img/websiteimage/ios-testerika.png" alt="Download-app" />
                        </div>
                        <div className="app-download-link">
                         <input type="text" placeholder='+91 | Enter Your Mobile No.' />
                         <button>Get Link</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="button-downloadss">
                      <div className='app-downoad-app-screen'>
                        <img src="/img/websiteimage/mobile-app-download.png" alt="Download-app" />
                      </div>
                      <div>
                        <img src="/img/websiteimage/mobile-app-Ellipse.png" alt="Download-app" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Downloadapp