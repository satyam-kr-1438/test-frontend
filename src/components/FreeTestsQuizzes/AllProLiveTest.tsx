import React from 'react';

const AllProLiveTest = () => {
  return (
    <section className="section-spacing bg-light-color">
      <div className="width-container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <h3 className="pb-1 ">
              All Pro Live Tests & <span className="theme-color">Free</span> Quizzes
            </h3>
            <p>
              Explore 150+ live tests & quizzes & analyse where you stand against your competitors with our AIR feature.
              <br />
              Improve your selection rates & get a better chance at clearing your exam.
            </p>

            <div className="row pt-3 pb-3">
              <div className="col-lg-3 mt-3 mb-3">
                <div className="exam-category-listed-here">
                  <ul className="nav nav-tabs display-exam-category p-1" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tabone"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="12"
                          height="12"
                          className="me-2"
                        >
                          <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                        </svg>
                        All Exams
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tabtwo"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="12"
                          height="12"
                          className="me-2"
                        >
                          <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                        </svg>
                        SSC Exams
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tabthree"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="12"
                          height="12"
                          className="me-2"
                        >
                          <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                        </svg>
                        Banking Exams
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 mt-3 mb-3">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="tabone" role="tabpanel" aria-labelledby="home-tab">
                    <ul className="nav nav-tabs" id="myTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz active"
                          id="live-test-one-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-one"
                          type="button"
                          role="tab"
                          aria-controls="live-test-one"
                          aria-selected="true"
                        >
                          All Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-two-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-two"
                          type="button"
                          role="tab"
                          aria-controls="live-test-two"
                          aria-selected="false"
                        >
                          <span className="Pro-in-live-test">Pro</span> Live Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-three-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-three"
                          type="button"
                          role="tab"
                          aria-controls="live-test-three"
                          aria-selected="false"
                        >
                          <span className="elite-in-live-test">Elite</span>Live Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-four-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-four"
                          type="button"
                          role="tab"
                          aria-controls="live-test-four"
                          aria-selected="false"
                        >
                          Quizzes
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="live-test-one"
                        role="tabpanel"
                        aria-labelledby="live-test-one-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-two"
                        role="tabpanel"
                        aria-labelledby="live-test-two-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-three"
                        role="tabpanel"
                        aria-labelledby="live-test-three-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-four"
                        role="tabpanel"
                        aria-labelledby="live-test-four-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabtwo" role="tabpanel" aria-labelledby="profile-tab">
                  <ul className="nav nav-tabs" id="myTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz active"
                          id="live-test-one-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-one"
                          type="button"
                          role="tab"
                          aria-controls="live-test-one"
                          aria-selected="true"
                        >
                          All Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-two-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-two"
                          type="button"
                          role="tab"
                          aria-controls="live-test-two"
                          aria-selected="false"
                        >
                          <span className="Pro-in-live-test">Pro</span> Live Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-three-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-three"
                          type="button"
                          role="tab"
                          aria-controls="live-test-three"
                          aria-selected="false"
                        >
                          <span className="elite-in-live-test">Elite</span>Live Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-four-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-four"
                          type="button"
                          role="tab"
                          aria-controls="live-test-four"
                          aria-selected="false"
                        >
                          Quizzes
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="live-test-one"
                        role="tabpanel"
                        aria-labelledby="live-test-one-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-two"
                        role="tabpanel"
                        aria-labelledby="live-test-two-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-three"
                        role="tabpanel"
                        aria-labelledby="live-test-three-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-four"
                        role="tabpanel"
                        aria-labelledby="live-test-four-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabthree" role="tabpanel" aria-labelledby="contact-tab">
                  <ul className="nav nav-tabs" id="myTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz active"
                          id="live-test-one-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-one"
                          type="button"
                          role="tab"
                          aria-controls="live-test-one"
                          aria-selected="true"
                        >
                          All Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-two-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-two"
                          type="button"
                          role="tab"
                          aria-controls="live-test-two"
                          aria-selected="false"
                        >
                          <span className="Pro-in-live-test">Pro</span> Live Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-three-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-three"
                          type="button"
                          role="tab"
                          aria-controls="live-test-three"
                          aria-selected="false"
                        >
                          <span className="elite-in-live-test">Elite</span>Live Tests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border-radious-test-live-quiz"
                          id="live-test-four-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#live-test-four"
                          type="button"
                          role="tab"
                          aria-controls="live-test-four"
                          aria-selected="false"
                        >
                          Quizzes
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="live-test-one"
                        role="tabpanel"
                        aria-labelledby="live-test-one-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-two"
                        role="tabpanel"
                        aria-labelledby="live-test-two-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-three"
                        role="tabpanel"
                        aria-labelledby="live-test-three-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="live-test-four"
                        role="tabpanel"
                        aria-labelledby="live-test-four-tab"
                      >
                        <div className="live-text-categories">
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                          <div className="live-test-card bg-white mb-3">
                            <button className="live-test">Live Test</button>
                            <button className="free ms-3">Free</button>
                            <button className="ms-2">UPSC Civil...</button>
                            <span className="many-more-live-test">+9 More</span>
                            <h5>Geography for All PSC Exams (Revise with Us) - Mini Live Test</h5>
                            <div className="test-date mt-1">
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 5 Questions</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1"> 10 Marks</span>
                                </div>
                                <div className="ms-2 d-flex align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      height="12"
                                      width="12"
                                      fill="A5A5A5"
                                    >
                                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                  </span>
                                  <span className="ms-1">6 Mins</span>
                                </div>
                              </div>
                              <div>
                                <button className="free">Start Now</button>
                              </div>
                            </div>
                            <div className="syllabus-live-test-card mt-2">
                              <span>
                                <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                              </span>
                              <span className="ms-2 text-dark">English , Hindi + 4 More</span>
                              <span className="ms-2 theme-color">12 Nov, 20:00 to 13 Nov, 20:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProLiveTest;
