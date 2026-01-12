import React from 'react';
import Accordion from 'components/reuseable/accordion';

import { accordionList1 } from 'data/faq';
type PageTypeProps = {
  text?: string;
};

const FreeTestseriesFaq = () => {
  return (
    <>
    <div className="live-test-main section-spacing">
        <div className="width-container">
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
                    id="daily-live-quiz-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#daily-live-quiz"
                    type="button"
                    role="tab"
                    aria-controls="daily-live-quiz"
                    aria-selected="true"
                  >
                    Daily Live Quizzes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="testerikapass-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testerikapass"
                    type="button"
                    role="tab"
                    aria-controls="testerikapass"
                    aria-selected="false"
                  >
                    Testerika Pass
                  </button>
                </li>
                
                
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="daily-live-quiz" role="tabpanel" aria-labelledby="daily-live-quiz-tab">
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
                <div className="tab-pane fade" id="testerikapass" role="tabpanel" aria-labelledby="testerikapass-tab">
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

export default FreeTestseriesFaq