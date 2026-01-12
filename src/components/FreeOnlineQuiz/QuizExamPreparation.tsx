import React, { useState } from 'react'

const QuizExamPreparation = ({ quizzes, subjects, setCategory }: any) => {
  const [selecetdSubject, setSelectedSubject] = useState("All")
  return (
    <>
      <section className="section-spacing">
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
                          className={selecetdSubject == "All" ? "nav-link active" : "nav-link"}
                          id="home-tab"
                          onClick={() => {
                            setSelectedSubject("All")
                            setCategory(undefined)
                          }}
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
                      {
                        subjects?.map((item: any, index: number) => {
                          return <li key={index} className="nav-item" role="presentation" onClick={() => {
                            setSelectedSubject(item?.id)
                            setCategory(item?.id)
                          }}>
                            <button
                              className={selecetdSubject == item?.id ? "nav-link active" : "nav-link"}
                              id="profile-tab"
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
                              {
                                item?.subject_name
                              }
                            </button>
                          </li>
                        })
                      }

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
                        {/* <li className="nav-item" role="presentation">
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
                      </li> */}
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="live-test-one"
                        >
                          <div className="live-text-categories">
                            {
                              quizzes?.length > 0 ? quizzes?.map((item: any, index: number) => {
                                return <div key={index} className="live-test-card bg-white mb-3">
                                  <button className="free">{item?.tblquiz_type?.quiz_type}</button>
                                  {/* <button className="live-test ms-3">Morning News</button> */}
                                  {subjects?.find((item2: any) => item2?.id == selecetdSubject)?.subject_name && <button className="ms-2">{subjects?.find((item2: any) => item2?.id == selecetdSubject)?.subject_name}</button>}
                                  {/* <span className="many-more-live-test">+9 More</span> */}
                                  <h5>{item?.name}</h5>
                                  <div className="test-date mt-1">
                                    <div className="d-flex">
                                      <div className="d-flex align-items-center">
                                        <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" height="12"
                                            width="12"
                                            fill="A5A5A5" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                        </span>
                                        <span className="ms-1"> {item?.total_questions} Questions </span>
                                      </div>
                                      <div className="ms-2 d-flex align-items-center">
                                        <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" height="12"
                                            width="12"
                                            fill="A5A5A5" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" /></svg>

                                        </span>
                                        <span className="ms-1"> {item?.marks} Marks</span>
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
                                        <span className="ms-1"> {item?.duration} Mins </span>
                                      </div>
                                    </div>
                                    <div>
                                      <button className="free">Start Now</button>
                                    </div>
                                  </div>
                                  <div className="syllabus-live-test-card mt-2">
                                    <span className="theme-color">Syllabus</span>
                                    <span className='ms-2'>
                                      <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                                    </span>
                                    <span className="ms-2 text-dark">{item?.language}</span>

                                  </div>
                                </div>
                              }) : <div>No quizzes available</div>
                            }
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
      </section></>
  )
}

export default QuizExamPreparation