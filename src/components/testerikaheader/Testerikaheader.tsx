import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'

const Testerikaheader = () => {
    const Router = useRouter()
  return (
    <>
    <div className="Testerika-bg-color mobile-none">
        <div className="width-container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-10 top-main-services-contact">
                    <ul>
                        <li>
                            <a href=""><Link href="/online-test-series"><span>
                            
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#fff' height='15' width='15'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></span> <span> CBAT Test Series</span> </Link></a>
                        </li>
                        <li>
                            <a href="tel:+91 7688800404"><span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#fff' height='17' width='17'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span> <span> +91-7688800404</span></a>
                        </li>
                        <li className='border-none'>
                            <a href="mailto:thetesterika@gmail.com"><span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#fff' height='17' width='17'><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span> <span>thetesterika@gmail.com</span></a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 socialmedia-link-testerika-pre-header">
                <nav className="nav social social-muted white-icons text-end">
                    <a href="https://x.com/Testerika_" target="_blank"><i className="uil uil-twitter text-white"></i></a>
                    <a href="https://www.facebook.com/thetesterika" target="_blank"><i className="uil uil-facebook-f"></i></a>
                    <a href="https://www.instagram.com/thetesterika" target="_blank"><i className="uil uil-instagram"></i></a>
                    <a href="https://www.youtube.com/@testerika" target="_blank"><i className="uil uil-youtube"></i></a>
                </nav>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testerikaheader