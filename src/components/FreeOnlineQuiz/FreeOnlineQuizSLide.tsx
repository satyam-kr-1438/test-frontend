import React from 'react'

const FreeOnlineQuizSLide = () => {
  return (
    <>
      <section className='bg-light-color section-spacing'>
        <div className="width-container">
            <div className="row ">
                <div className="col-lg-12 mx-auto">
                    <div className="row justify-between">
                    <div className="col-lg-6 slide-text-headding">
                      <div className='test-quiz-border-bottom'>
                        <div className='d-flex align-items-center'>
                      <button className='live-test mb-1'>Free</button><br />
                        <span className='free-online-quiz-sliders-span'>Daily Online Quizzes</span>
                        </div>
                        <p>Test your knowledge and concepts with specially designed Daily Free Quizzes!<br />
                        Get your All India Rank among lakhs of students and track your progress.</p>
                      </div>
                      <div className="testerika-app-download-button">
                        <img src="/img/websiteimage/appstore.svg" alt="App-download-button" />
                        <img src="/img/websiteimage/playstore.svg" className='ms-2' alt="App-download-button" />
                      </div>
                </div>
                <div className="col-lg-6 text-end">
                <img
                            src="/img/websiteimage/Daily-Online-Quizzes.png"
                            className="Daily-online-quiz"
                            alt="online-test-series-img"
                          />
                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default FreeOnlineQuizSLide