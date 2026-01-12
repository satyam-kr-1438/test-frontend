import AuthNavbar from 'components/blocks/navbar/AuthNavbar'
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar'
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal'
import NextLink from 'components/reuseable/links/NextLink'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import React, { Fragment } from 'react'

const AccessDenied = () => {
    return (
        <Fragment>

            <header className="wrapper bg-soft-primary">
                {getAuthenticatedUserData()?.id ? <DashboardNavbar
                    // info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={<DashboardNavbarModal />}
                /> : <AuthNavbar
                    // info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-signin"
                            className="btn btn-sm btn-primary py-1 px-2"
                            style={{ fontWeight: "400", fontSize: "14px" }}
                        >
                            Sign In
                        </a>
                    }
                />}
            </header>


            <main className="content-wrapper">
                <section className="wrapper bg-light">
                    <div className="container pt-6 pb-14">
                        <div className="row">
                            <div className="col-lg-9 col-xl-8 mx-auto" style={{ margin: "auto", textAlign: "center" }}>
                                <img style={{ maxWidth: "270px" }} alt="Not Found" src="/img/unauthorized.jpg" className="my-4" />
                            </div>

                            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                                <h1 className="mb-3">Oops! Access Denied</h1>
                                <p className="lead px-md-12 px-lg-5 px-xl-7">
                                Content you are looking for isn't available at this moment.
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

export default AccessDenied