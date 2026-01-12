import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Breadcrumb from 'components/reuseable/Breadcrumb';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
// -------- data -------- //
const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Contact', url: '#' }
];

const Contactus: NextPage = () => {
  return (
    <Fragment>
      <main className="content-wrapper">
      <Testerikaheader />
      <Testerikamianheader />
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white"
          style={{ backgroundImage: 'url(/img/websiteimage/contact-bg-img.jpg)' }}
        >
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-white">Get in Touch</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container ">
            {/* ========== contact info section ========== */}
            <div className="row  mb-10">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          allowFullScreen
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9342505051086!2d75.73954768488775!3d26.905581700210373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49bb7fd0c89%3A0x54397fedc67aee89!2s8%2C%208%2C%20Gandhi%20Path%20W%2C%20near%20Agarwal%20Caterers%2C%20Girnar%20Colony%2C%20Nemi%20Nagar%2C%20Vaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1742455702273!5m2!1sen!2sin"
                          style={{ width: '100%', height: '100%', border: 0 }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                      <div className="d-flex flex-row">

                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-3">Testerika Edutech PVT. LTD</h5>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1">Address</h5>
                            <address>
                            86 G 1 SCHEM 8 GANDHIPATH, VAISHALI NAGAR , JAIPUR, <br className="d-none d-md-block" />Rajasthan, India - 302021.
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">Phone</h5>
                            <p className="mb-0">
                              <a href="tel:+91 7688800404" className="link-body">
                                +91 7688800404
                              </a>
                            </p>
                            <p className="mb-0">
                              <a href="tel:+91 8955174627" className="link-body">
                                +91 8955174627
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row mt-3">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">E-mail</h5>
                            <p className="mb-0">
                              <a href="mailto:thetesterika@gmail.com" className="link-body">
                                thetesterika@gmail.com
                              </a>
                            </p>
                            <p className="mb-0">
                              <a href="mailto:hrtesterika@gmail.com" className="link-body">
                                hrtesterika@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Say Hello!!</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Contactus;
