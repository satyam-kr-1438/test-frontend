import React from 'react'

const ExamCalendar = () => {
  return (
    <section className='section-spacing'>
        <div className="width-container">
            <div className="row">
                <div className="col-lg-12 mx-auto">
                    <div className="calendar-exam-date mb-2">
                        <h3 className='theme-color mt-2'>Upcoming Govt Exams 2024</h3>
                        <p className='pt-1'>Several significant exams are on the schedule for 2024, including RRB, SSC CHSL, SSC MTS, SSC Sub Inspector Exams, UPSC exams, RBI exams, UPPSC Exams, and more. The comprehensive list of upcoming government exams in 2024 is tabulated below, providing a detailed overview of the diverse opportunities for candidates seeking government positions. Take a look at the complete schedule to plan and prepare effectively for these upcoming examinations.</p>
                    </div>
                </div>
                {/* <div className="col-lg-10 mx-auto">
                <div className="accordion margin-between-accordian" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span className='month-date-exams'>November 2024 </span> 
        <span className='month-exams-upcoming ms-3'>16 EXAMS</span>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>4 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>TPSC Sports Officer</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>5 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>IRDAI Assistant Manager</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>6 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>IBPS SO                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>7 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>IBPS AFO                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>8 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>MHSRB Lab Lechnician                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>9 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>MAHA TET                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>10 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>UCO Bank Apprentice                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>11 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>MP TET Varg 3                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>12 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>KPSC JE                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>13 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Indian Airforce Agniveer Exam                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>14 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>UKPSC Upper Subordinate Services Mains...                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>15 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>TSPSC Group 3                </span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>16 Nov 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>HPSC AMO                </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span className='month-date-exams'>December 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <h2 className='mt-3'>Past Exams</h2>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <span className='month-date-exams'>January 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <span className='month-date-exams'>Febuary 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
   <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <span className='month-date-exams'>March 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <span className='month-date-exams'>April 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      <span className='month-date-exams'>May 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      <span className='month-date-exams'>June 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      <span className='month-date-exams'>July 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      <span className='month-date-exams'>August 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
      <span className='month-date-exams'>September 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed border-left-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
      <span className='month-date-exams'>October 2024 </span> 
      <span className='month-exams-upcoming ms-3'>3 EXAMS</span>
      </button>
    </h2>
    <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="exam-up-coming-examsss">
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>2 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>Odisha Judicial Services Mains</span>
                </div>
            </div>
            <div className='exams-upcoming-cards'>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>3 Dec 2024</p>
                    </div>
                    <div className='ms-2'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                </div>
                <div className='faq-sec-card-section'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>SSC JE Paper 2</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </div> */}
                <div className="col-lg-12 mx-auto">
                <div className="row pt-3 pb-3">
            <div className="col-lg-3 mt-3 mb-3">
                <div className='exam-category-listed-here'>

                 <ul className="nav nav-tabs display-exam-category p-1" id="myTab" role="tablist">
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="november-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabnovember"
                    type="button"
                    role="tab"
                    aria-controls="november"
                    aria-selected="true"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    November 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="december-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabdecember"
                    type="button"
                    role="tab"
                    aria-controls="december"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    December 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="januray-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabjanuray"
                    type="button"
                    role="tab"
                    aria-controls="januray"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    January 2024
                  </button>
                 </li>

                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="november-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabnovember"
                    type="button"
                    role="tab"
                    aria-controls="november"
                    aria-selected="true"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    Febuary 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="december-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabdecember"
                    type="button"
                    role="tab"
                    aria-controls="december"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    March 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="januray-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabjanuray"
                    type="button"
                    role="tab"
                    aria-controls="januray"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    April 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="november-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabnovember"
                    type="button"
                    role="tab"
                    aria-controls="november"
                    aria-selected="true"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    May 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="december-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabdecember"
                    type="button"
                    role="tab"
                    aria-controls="december"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    June 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="januray-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabjanuray"
                    type="button"
                    role="tab"
                    aria-controls="januray"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    July 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="november-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabnovember"
                    type="button"
                    role="tab"
                    aria-controls="november"
                    aria-selected="true"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    August 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="december-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabdecember"
                    type="button"
                    role="tab"
                    aria-controls="december"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    September 2024
                  </button>
                 </li>
                 <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="januray-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabjanuray"
                    type="button"
                    role="tab"
                    aria-controls="januray"
                    aria-selected="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                   <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                    October 2024
                  </button>
                 </li>
                 </ul>
                </div>
            </div>
            <div className="col-lg-9 mt-3 mb-3">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tabnovember" role="tabpanel" aria-labelledby="november-tab">
                  <div className="exam-month-wise-exam-listed">
                    <div className="listed-exam-cards">
                    <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/CSIR-NET.jpg" alt="popular-exam" />
                <span>CSIR NET</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>


            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/sbi-bank.JPG" alt="popular-exam" />
                <span>SBI BANK</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/rajasthan-police.jpg" alt="popular-exam" />
                <span>POLICE</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/railway-exams.jpeg" alt="popular-exam" />
                <span>Railway</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/ssc-cgl.jpg" alt="popular-exam" />
                <span>SSC GD</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/CSIR-NET.jpg" alt="popular-exam" />
                <span>CSIR NET</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>


            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/sbi-bank.JPG" alt="popular-exam" />
                <span>SBI BANK</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/rajasthan-police.jpg" alt="popular-exam" />
                <span>POLICE</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/railway-exams.jpeg" alt="popular-exam" />
                <span>Railway</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/ssc-cgl.jpg" alt="popular-exam" />
                <span>SSC GD</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabdecember" role="tabpanel" aria-labelledby="december-tab">
                <div className="exam-month-wise-exam-listed">
                    <div className="listed-exam-cards">
                    <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/CSIR-NET.jpg" alt="popular-exam" />
                <span>CSIR NET</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>


            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/sbi-bank.JPG" alt="popular-exam" />
                <span>SBI BANK</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/rajasthan-police.jpg" alt="popular-exam" />
                <span>POLICE</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/railway-exams.jpeg" alt="popular-exam" />
                <span>Railway</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/ssc-cgl.jpg" alt="popular-exam" />
                <span>SSC GD</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/CSIR-NET.jpg" alt="popular-exam" />
                <span>CSIR NET</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>


            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/sbi-bank.JPG" alt="popular-exam" />
                <span>SBI BANK</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/rajasthan-police.jpg" alt="popular-exam" />
                <span>POLICE</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/railway-exams.jpeg" alt="popular-exam" />
                <span>Railway</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/ssc-cgl.jpg" alt="popular-exam" />
                <span>SSC GD</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            
                    </div>
                </div>
                </div>
                <div className="tab-pane fade" id="tabjanuray" role="tabpanel" aria-labelledby="januray-tab">
                <div className="exam-month-wise-exam-listed">
                    <div className="listed-exam-cards">
                    <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/CSIR-NET.jpg" alt="popular-exam" />
                <span>CSIR NET</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>


            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/sbi-bank.JPG" alt="popular-exam" />
                <span>SBI BANK</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/rajasthan-police.jpg" alt="popular-exam" />
                <span>POLICE</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/railway-exams.jpeg" alt="popular-exam" />
                <span>Railway</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/ssc-cgl.jpg" alt="popular-exam" />
                <span>SSC GD</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/CSIR-NET.jpg" alt="popular-exam" />
                <span>CSIR NET</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>


            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/sbi-bank.JPG" alt="popular-exam" />
                <span>SBI BANK</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/rajasthan-police.jpg" alt="popular-exam" />
                <span>POLICE</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/railway-exams.jpeg" alt="popular-exam" />
                <span>Railway</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/ssc-cgl.jpg" alt="popular-exam" />
                <span>SSC GD</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
                    </div>
                
            </div>
            <div className='exams-upcoming-cards'>
                    <div className='faq-sec-card-section-1'>
                <img src="/img/websiteimage/best-test-series-umage.jpg" alt="popular-exam" />
                <span>RRB NTPC</span>
                </div>
                <div className='exams-upcoming-date'>
                    <div>
                      <img src="/img/websiteimage/calendars.svg" alt="popular-exam" />  
                    </div>
                    <div className='ms-2'>
                        <p>1 Nov 2024</p>
                    </div>
                    
                </div>
                <div className='text-center'>
                     <span className='month-exams-upcoming exams-month-fs'>OFFICIAL</span>
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
  )
}

export default ExamCalendar