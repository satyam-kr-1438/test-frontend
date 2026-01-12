import React from 'react'

const PreviousYearPaperexams = () => {
  return (
    <div>
         <section className='section-spacing bg-light-color'>
      <div className="width-container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <h3 className='pb-1 '>Explore <span className='theme-color'>Previous Year Paper</span> of all Exams.</h3>
            <p>Get exam-ready with concepts, questions and study notes as per the latest pattern</p>

            <div className="row pt-3 pb-3">
            <div className="col-lg-3 mt-3 mb-3">
                <div className='exam-category-listed-here'>

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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    SSC exam
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    Banking Exam
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    Railway Exam
                  </button>
                 </li>
                 </ul>
                </div>
            </div>
            <div className="col-lg-9 mt-3 mb-3">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tabone" role="tabpanel" aria-labelledby="home-tab">
                  <div className="category-listed-exam justify-between">
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div> 
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div> 
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>                 
                  </div>
                </div>
                <div className="tab-pane fade" id="tabtwo" role="tabpanel" aria-labelledby="profile-tab">
                <div className="category-listed-exam justify-between">
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div> 
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div> 
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>                 
                  </div>
                </div>
                <div className="tab-pane fade" id="tabthree" role="tabpanel" aria-labelledby="contact-tab">
                <div className="category-listed-exam justify-between">
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div> 
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div>  
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
                        </div>
                    </div> 
                    <div className="exam-category-list-wise">
                        <div>
                         <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='ms-2'>
                          <h6>SSC Exams</h6>
                          <span>188 papers</span>
                        </div>
                        <div className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 320 512">
                             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#86a1ae' />
                            </svg>
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
    </div>
  )
}

export default PreviousYearPaperexams