import { FC, Fragment } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { accordionList1 } from 'data/faq';
 type PageTypeProps={
  text?:string
 }
const FAQ: FC<PageTypeProps> = (props) => {
  return (
    <Fragment>
      <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">FAQ</h2>
      <h6 className="display-4 mb-10 px-lg-12 px-xl-15 text-center" style={{fontSize:"16px"}}>
        If you don't see an answer to your question, you can send us an email from our contact form.
      </h6>

      <div className="accordion-wrapper" id="accordion">
        <div className="row">
          {accordionList1.map((items, i) => {
            return (
              <div className="col-md-6" key={i}>
                  <Accordion key={items.no} {...items} />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ;
