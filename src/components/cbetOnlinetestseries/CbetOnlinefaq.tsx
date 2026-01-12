import React from 'react'
import Accordion from 'components/reuseable/accordion';

import { accordionList1 } from 'data/faq';
type PageTypeProps = {
  text?: string;
};

const CbetOnlinefaq = () => {
  return (
    <>
    <div className="live-test-main pb-15">
        <div className="">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="sub-main purple-submain">| FAQ’s</div>
              <div className="main-title">
                <h2>
                  Frequently <span>Ask</span> Question
                </h2>
              </div>
            </div>
            <div className="col-lg-9 mt-2 mr-auto mx-auto">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Test
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Payment/Transaction
                  </button>
                </li>
                
                
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="accordion-wrapper" id="accordion">
                    <div className="row">
                      {accordionList1.map((items, i) => {
                        return (
                          <div className="col-md-12" key={i}>
                            <Accordion key={items.no} {...items} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="accordion-wrapper" id="accordion">
                    <div className="row">
                      {accordionList1.map((items, i) => {
                        return (
                          <div className="col-md-12" key={i}>
                            <Accordion key={items.no} {...items} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="accordion-wrapper" id="accordion">
                    <div className="row">
                      {accordionList1.map((items, i) => {
                        return (
                          <div className="col-md-12" key={i}>
                            <Accordion key={items.no} {...items} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default CbetOnlinefaq