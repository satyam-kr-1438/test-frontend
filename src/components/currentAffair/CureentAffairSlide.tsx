import React from 'react';

const CureentAffairSlide = () => {
  return (
    <section className="bg-light-color-2 section-spacing p-0 pt-5">
      <div className="width-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-cum-design d-flex align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 320 512">
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </span>
              <span>Home</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 320 512">
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </span>
              <span>Current Affairs</span>
            </div>
            <div className="current-affair-header-content">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>
                    Daily Current Affairs 2024 : <span className="theme-color">FREE PDF</span>
                  </h2>
                </div>
                <div>
                  <button className="Theme-buttons mt-0">
                    {' '}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14" width="14" className="">
                        <path
                          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    <span className="ms-2">Download as PDF</span>
                  </button>
                </div>
              </div>
              <p className="pt-2 fs-14">
                Testerika Current Affairs Today initiative simplifies preparing for UPSC, SSC, bank, insurance and other
                exams by keeping you updated with daily current affairs and monthly current affairs PDFs. Staying
                up-to-date with the latest news around India and the world can be taxing and time-consuming but
                Testerika's current affairs updates allow you to stay informed while focusing your preparation. Download
                Today's Current Affairs PDF to create an important news and events repository for better general
                awareness and a competitive edge in government exams like UPSC IAS, SSC CGL & CHSL, RRB NTPC, Group D &
                JE and others where the current affairs section holds significant weightage. Testerika's Daily Current
                Affairs as well as Monthly Current Affairs will help you stay prepared for the current affairs questions
                in these most sought-after exams.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-menu-colored">
        <div className="width-container">
          <div className="row">
            <div className="col-lg-12 p-0">
              <div className="menu-listing-current-affair">
                <ul className='d-flex'>
                  <li>Previous Year Current Affair</li>
                  <li>Daily Current Affair</li>
                  <li>Language Wise Current Affair</li>
                  <li>Banking Current Affair</li>
                  <li>SSC Current Affairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CureentAffairSlide;
