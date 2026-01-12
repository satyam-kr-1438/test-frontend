import AuthNavbar from 'components/blocks/navbar/AuthNavbar'
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar'
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal'
import NextLink from 'components/reuseable/links/NextLink'
import Testerikaheader from 'components/testerikaheader/Testerikaheader'
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import React, { Fragment } from 'react'

const InactiveStatus = () => {
    return (
        <Fragment>

            <Testerikaheader />
            <Testerikamianheader />



            <main className="content-wrapper">
                <section className="wrapper bg-light">
                    <div className="container pt-6 pb-14">
                        <div className="row">
                            <div className="col-lg-9 col-xl-8 mx-auto" style={{ margin: "auto", textAlign: "center" }}>
                                <img style={{ maxWidth: "340px" }} alt="Not Found" src="/img/illustrations/underDevelopment.jpg" className="my-4" />
                            </div>

                            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                                <h1 className="mb-3">Oops! Exam Inactive </h1>
                                <p className="lead px-md-12 px-lg-5 px-xl-7">
                                    This exam is not available at the moment. Please check back later or contact support for assistance.
                                </p>
                                {getAuthenticatedUserData()?.id ? <NextLink title="Go to Homepage" href="/dashboard/home" className="btn btn-primary rounded-pill" /> : <NextLink title="Go to Homepage" href="/" className="btn btn-primary rounded-pill" />}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </Fragment>
    )
}

export default InactiveStatus