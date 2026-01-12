import { FC } from 'react';

const ContactForm: FC = () => {
  return (
    <form className="contact-form needs-validation" method="post">
      <div className="messages"></div>
      <div className="row gx-4">
        {/* <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="name" id="form_name" placeholder="Jane" className="form-control" />
            <label htmlFor="form_name">Full Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your full name. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="form_email">Email *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please provide a valid email address. </div>
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your message"
              style={{ height: 150 }}
            />

            <label htmlFor="form_message">Message *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your messsage. </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <input type="submit" value="Send message" className="btn btn-primary rounded-pill btn-send mb-3" />
        </div> */}
         <div className="col-12">
             {/* <iframe className="" style={{width:"100%",minHeight: "597px"}} src="https://crm.testerika.com/forms/wtl/431f24b9e025d802f398ae309cdf1c40"  scrolling="no" frameBorder="0"  allowFullScreen></iframe> */}
         </div>
      </div>
    </form>
  );
};

export default ContactForm;
