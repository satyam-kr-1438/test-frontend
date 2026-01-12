import Footer from 'components/blocks/footer/Footer'
import React, { Fragment } from 'react'
import AuthNavbar from 'components/blocks/navbar/AuthNavbar'
import FAQ from 'components/blocks/faq/FAQ';

const FAQs = () => {
  return (
    <Fragment>
    {/* ========= header section ========== */}
    <header className="wrapper bg-soft-primary">
    <AuthNavbar
        // info
        navOtherClass="navbar-other ms-lg-4"
        navClassName="navbar navbar-expand-lg classic transparent navbar-light"
        button={
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modal-signin"
            className="btn btn-sm btn-primary py-1 px-2"
            style={{fontWeight:"400",fontSize:"14px"}}
          >
            Sign In
          </a>
        }
      />
    </header>

    <main className="content-wrapper">
      <section className="wrapper bg-light">
        <div className="container py-8">
          <div className="row gx-lg-8 gx-xl-12">
                <section className="wrapper bg-light">
                        <div className="container">
                            <div className="">
                               <FAQ text="faq"/>
                            </div>
                        </div>
                </section>
          </div>
        </div>
      </section>
    </main>

    {/* ========== footer section ========== */}
    <Footer />
  </Fragment>

  )
}

export default FAQs