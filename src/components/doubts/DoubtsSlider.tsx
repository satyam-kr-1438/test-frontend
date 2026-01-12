import React from 'react'

const DoubtsSlider = () => {
  return (
    <section className='bg-light-color section-spacing'>
        <div className="width-container">
            <div className="row ">
                <div className="col-lg-12 mx-auto">
                    <div className="row justify-between">
                    <div className="col-lg-6 slide-text-headding">
                      <div className='test-quiz-border-bottom'>
                        <h1>Share, Discuss & Clear all your Doubts</h1>
                        <span>Post your doubts with ease |</span>
                        <span> Engage with Peers, Teachers & Experts |</span>
                        <span> Learn from doubts of other students</span>
                      </div>
                      <div>
                      <button className="theme-btn mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal-1">Ask Your Doubt</button>
                      <div className="modal fade" id="exampleModal-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content width-80-modal-box">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      Ask a doubt
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body pt-1 pb-0">
                    <div className="douts-modal-box-data">
                      <div className="tabs-heading d-flex justify-content-center align-items-center">
                        <div className="dout-tabs">
                          <nav className="navigation-tabs-douts">
                            <div
                              className="nav nav-tabs border-none d-flex justify-content-center w-100"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link active"
                                id="search-exam-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-search-exam"
                                type="button"
                                role="tab"
                                aria-controls="nav-search-exam"
                                aria-selected="true"
                              >
                               Post 
                              </button>
                              <button
                                className="nav-link"
                                id="other-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-other"
                                type="button"
                                role="tab"
                                aria-controls="nav-other"
                                aria-selected="false"
                              >
                                MCQ / POLL
                              </button>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div className="tabs-sections-starts mt-4">
                        <div className="tab-content mt-2" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-search-exam"
                            role="tabpanel"
                            aria-labelledby="search-exam-tab"
                          >
                          <div className="form-selection mt-3">
                          <select className="form-select form-select-lg mb-3 fs-15" aria-label="Large select example">
  <option selected>Select Exam</option>
  <option value="1">On Exam</option>
  <option value="2">Two Exam</option>
  <option value="3">Three Exam</option>
</select>
                          </div>
                          <div className="douts-testeraa ">
                          <div className="form-floating mb-3">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  <label className='fs-15'>Comments</label>
</div>
<div className="uploade-dout-image">
<div className="input-group mb-3">
  <input type="file" className="form-control" id="inputGroupFile02" />
</div>
</div>
                          </div>
                          </div>
                          <div className="tab-pane fade" id="nav-other" role="tabpanel" aria-labelledby="other-tab">
                          <div className="form-selection mt-3">
                          <select className="form-select form-select-lg mb-3 fs-15" aria-label="Large select example">
  <option selected>Select Exam</option>
  <option value="1">On Exam</option>
  <option value="2">Two Exam</option>
  <option value="3">Three Exam</option>
</select>
                          </div>
                          <div className="Add-questions mb-3">
                            <p className='pb-1'>Question</p>
                            <input type="text" placeholder='' />
                          </div>
                          <div className="douts-testeraa">
<div className="uploade-dout-image">
<div className="input-group mb-3">
  <input type="file" className="form-control fs-15" id="inputGroupFile02" />
</div>
</div>
                          </div> 
                          <div className="add-options-pool">
                          <p className='pb-1'>Options</p>
                          <div className='pool-present mt-2 mb-3'>
                            <div className='option-select-pool'><h6>A</h6> </div>
                            <div className='enter-options-data ms-1'>
                              <input type="text"placeholder='Option' />
                            </div>
                            <div className='border-bottom-add-value ms-1'>
                            <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                  />
                            </div>
                          </div>
                          <div className='pool-present mt-2 mb-3'>
                            <div className='option-select-pool'><h6>B</h6> </div>
                            <div className='enter-options-data ms-1'>
                              <input type="text" placeholder='Option' />
                            </div>
                            <div className='border-bottom-add-value ms-1'>
                            <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                  />
                            </div>
                          </div>
                          <div className=' pb-3'>
                            <button className='add-more-options'>+ Add More Option</button>
                          </div>
                          <div className='dont-know-answer mt-3'>
                            <span>
                            <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                  />
                            </span>
                            <span> Don't Know the Answer</span>
                          </div>
                          
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-filter pt-0">
                    <button className="background-color-filter" data-bs-dismiss="modal" aria-label="Close">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
                      </div>
                </div>
                <div className="col-lg-6 text-end">
                <img
                            src="/img/websiteimage/douts.png"
                            className="w-75"
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

export default DoubtsSlider