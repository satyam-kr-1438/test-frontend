import React from 'react'

const SuccessStorySelections = () => {
  return (
    <section className='section-spacing mt-5 mb-5'>
        <div className="width-container">
            <div className="row">
                <div className="col-lg-5">
                 <img src="/img/websiteimage/Selections-testerika.png" className='w-100' alt="our-selection-img" />
                </div>
                <div className="col-lg-6 d-flex justify-content-between">
                    <div className="selections-card">
                        <div className='selection-card-color margin-top-selections selection-catheory-image text-center'>
                            <img src="/img/websiteimage/ssc-trophy.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span>Selections in SSC</span>
                        </div>
                        <div className='selection-card-color-2 selection-catheory-image text-center mt-5'>
                            <img src="/img/websiteimage/railways-icon.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span>Selections in Railways</span>
                        </div>
                    </div>
                    <div className="selections-card">
                        <div className='selection-card-color-3 selection-catheory-image text-center'>
                            <img src="/img/websiteimage/banking-icon.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span>Selections in Banking</span>
                        </div>
                        <div className='selection-card-color-4 selection-catheory-image text-center mt-5'>
                            <img src="/img/websiteimage/government-exam.png" alt="our-selection-img" />
                            <h4 className='pt-2'>19054</h4>
                            <span>Selections in Other Govt Exams</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SuccessStorySelections