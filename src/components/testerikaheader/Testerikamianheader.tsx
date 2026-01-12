import Signin from 'components/blocks/navbar/partials/Signin';
import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/router";


const Testerikamianheader = () => {
    const Router = useRouter()
  return (
    <div className="testerika-main-header">
      <div className="width-container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-4 col-5 d-flex align-items-center">
            <div className="exam-drawer-testerika">
              <a
                className="Drawer-btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#000" height="20" width="20">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </a>
            </div>
            <div className="navbar-top-logo">
             <span onClick={() => {
            Router.push("/")
          }}><img src="/img/websiteimage/testerika-logo.png" alt="Testerika-logo" /></span>
            </div>
          </div>
          <div className="col-lg-8 col-7 main-header-flex ">
            <div className="menu-listing-navbar">
              <ul>
                <li>
                  <Link href="/online-test-series">CBAT Test Series</Link>
                </li>
                                <li>
                  <Link href="/live-exam">Live Exams</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                 <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="last-contact-harders d-flex login-playstore-btn">
              <button className="ms-2" data-bs-toggle="modal" data-bs-target="#modal-signin">
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </div>
      <Signin />
      <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title w-100" id="offcanvasExampleLabel">
            <img src="/img/websiteimage/testerika-logo.png" className="w-75" alt="Testerika-slider" />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          
        <ul>
        <li>
                  <Link href="/online-test-series">CBAT Test Series</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                              <li>
                  <Link href="/live-exam">Live Exams</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
        </div>
      </div>
    </div>
  );
};

export default Testerikamianheader;
