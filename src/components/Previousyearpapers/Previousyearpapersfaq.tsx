import React from 'react';
import Accordion from 'components/reuseable/accordion';
import { accordionList1 } from 'data/faq';
type PageTypeProps = {
  text?: string;
};

const Previousyearpapersfaq = () => {
  return (
    <div className="live-test-main section-spacing ">
        <div className="width-container">
          <div className="row">
            <div className="col-lg-12 text-center mb-3">
              <div className="sub-main purple-submain">| FAQ’s</div>
              <div className="main-title">
                <h2> FAQs of <span>  Previous Year  </span> Papers </h2>
              </div>
            </div>
            <div className="col-lg-9 mr-auto mx-auto">
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
          </div>
        </div>
      </div>
  )
}

export default Previousyearpapersfaq