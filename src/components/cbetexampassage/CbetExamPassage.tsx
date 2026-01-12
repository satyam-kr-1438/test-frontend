import React from 'react'

const CbetExamPassage = () => {
  return (
    <>
     <section>
        <div className="c-bet-container">
            <div className="passage-main-flex">
                <div className="Passage-question">
                <div>
                <div className="cbet-test-saved">
                  <div className="report-cbet-question">
                    <span className="fw-light">
                      <span className="text-dark fw-bold">2 of 2 </span></span>
                  </div>
                 
                </div>
                <div className='Question-Cbet-Text inner-size-cbet-report pt-2'>
                    <span className='text-dark'>Railways - Test - Psycho Aptitude - FT 1                    </span>
                    <br/>

                    <p className='pt-1'><b className='theme-color'>Comprehension
                    </b></p>
                    <p  className='text-dark'>Study the given map and try to memorize the location of the stations.</p>
                </div>
                <div className='Question-Cbet-Text pt-2 pb-2 '>
                    <img src="/img/websiteimage/report-image-cbet.png" alt="blog-thumbnail" className='w-25' />
                    <p className='pt-3'><b  className='text-dark'>Question</b></p>
                    <p  className='text-dark'>Question</p>

                </div>
              </div>
                </div>
                <div className="Passage-options">
                <div className='d-flex'>
                  <div className="w-50">
                    <ul>
                      <li>LTT</li>
                      <li>LDC</li>
                      <li>PHC</li>
                      <li>DDl</li>
                    </ul>
                  </div>
                        <div className=' w-50'>
                          <ul className="list-group">
                            <li className="list-group-item ">
                              <div className="d-flex justify-content-between w-100">
                                <div className=" d-flex w-100 align-items-center">
                                  <input
                                    className="form-check-input me-1 "
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                    
                                  />
                                  <label className="form-check-label" htmlFor="firstCheckbox">
                                    A
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                              <label className="form-check-label" htmlFor="secondCheckbox">
                                B
                              </label>
                            </li>
                            <li className="list-group-item">
                              <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                              <label className="form-check-label" htmlFor="thirdCheckbox">
                                C
                              </label>
                            </li>
                            <li className="list-group-item ">
                              <div className="d-flex justify-content-between w-100">
                                <div className="answer-radio-box d-flex w-100 align-items-center">
                                  <input
                                    className="form-check-input me-1 "
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                    
                                  />
                                  <label className="form-check-label" htmlFor="firstCheckbox">
                                    D
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default CbetExamPassage