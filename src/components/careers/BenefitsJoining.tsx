import React from 'react'

const BenefitsJoining = () => {
  return (
    <section className='bg-light-color section-spacing joining-us-benefits'>
        <div className="width-container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-6">
                    <h1><span className='theme-color'>Perks</span> of joining us</h1>
                    <p className='pt-2'>Peace of mind at home, ensures Peace of mind at home, ensures Peace of mind at home, ensures </p>
                    <div className="joining-bonus pt-5">
                        <div className='perf-of-joining-1'>
                        <img
                            src="/img/websiteimage/benefits-of-joining.png"
                            alt="benefits-koining"
                          />
                            <h3 className='mt-2'>Policies that put you in focus</h3>
                            <p>Employee friendly leave policies which include Maternity Leave, Paternity Leave and Wedding Leave.</p>
                        </div>
                        <div className='perf-of-joining-1'>
                        <img
                            src="/img/websiteimage/benefits-of-joining.png"
                            alt="benefits-koining"
                          />
                            <h3 className='mt-2'>Good work, gets noticed</h3>
                            <p>We make sure your efforts stand out with Company wide Quarterly Rewards & Recognition program.</p>
                        </div>
                        <div className='perf-of-joining-1'>
                        <img
                            src="/img/websiteimage/benefits-of-joining.png"
                            alt="benefits-koining"
                          />
                            <h3 className='mt-2'>We've got you Covered</h3>
                            <p>As a full-time employee, you'll be eligible for our Employee Group Health Insurance policy.</p>
                        </div>
                        <div className='perf-of-joining-1'>
                        <img
                            src="/img/websiteimage/benefits-of-joining.png"
                            alt="benefits-koining"
                          />
                            <h3 className='mt-2'>Work Hard, Party Harder!</h3>
                            <p>What's Hard work, if you can't have a bit of Fun! We make sure of it through Employee outings & Gameroom score boards.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 text-end">
                <img
                            src="/img/websiteimage/benefits-of-joining.png"
                            alt="benefits-koining"
                            className='w-100'
                          />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BenefitsJoining