import React from 'react';
import Link from 'next/link';
import { getAuthenticatedUserData, removeAuthenticationDataHandleLogout } from 'hooks/localStorageInfo';
import { SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { useRouter } from 'next/router';

const CbetTopBar = () => {
  const router = useRouter()
  return (
    <>
      <div className="c-bet-top-bar ">
        <div className="c-bet-container d-flex align-items-center">
          {/* <div className="search-examsssss c-bet-container">
            <div className="search-exam-search-box bg-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17"
                className="search-icon-exam"
                fill="#60A37E"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
              </svg>
              <input type="text" placeholder="Search for exam" />
            </div>
          </div> */}
          <div className="c-bet-profile-sec">
            <nav className="navbar navbar-expand-lg ">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav padding-zero">
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center p-2"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="/img/websiteimage/us-flag.jpg" className="language-flag" alt="Testerika-logo" />
                      English
                    </a>
                    <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item listing-menu-c-bet" href="#">
                        <img src="/img/websiteimage/us-flag.jpg" className="language-flag" alt="Testerika-logo" />
                        Hindi
                      </a>
                    </div>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 448 512">
                          <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                        </svg>
                      </span>
                      <sup className="notification-no">1</sup>
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      <button className="pass-pro">Pass Elite</button>
                    </a>
                  </li> */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center p-2"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src={getAuthenticatedUserData()?.profile_image?getAuthenticatedUserData()?.profile_image:"/img/websiteimage/tb-avatar.svg"}
                        className="Man-profile-image-c-bet "
                        alt="Testerika-logo"
                      />
                      <div>
                        <p className="p-0 m-0">{getAuthenticatedUserData()?.firstname}....</p>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu menu-dropdown position-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <span className="dropdown-item listing-menu-c-bet" style={{cursor:"pointer"}} onClick={()=>{
                         router.push("/dashboard/profile")
                      }}>
                        Profile
                      </span>
                      <span className="dropdown-item listing-menu-c-bet" style={{cursor:"pointer"}} onClick={()=>{
                         router.push("/dashboard/transaction-history")
                      }}>
                        Transactions
                      </span>
                      <span className="dropdown-item listing-menu-c-bet" style={{cursor:"pointer"}} onClick={() => {
                        const data = removeAuthenticationDataHandleLogout()
                        if (data) {
                          SuccessMessage("User Logout Successfully")
                          router.push("/")
                        }
                      }}>
                        Logout
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="top-bar-mobile-none">
            <div className='three-line'>
              <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <svg xmlns="http://www.w3.org/2000/svg" height='18' width='18' viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
              </a>
            </div>
            <div className='c-betmobile-top-listing'>
              <ul>
                {/* <li className='d-flex align-items-center'>
              
              <div className="dropdown background-color-none">
             
                          <button
                            className="dropdown-toggle background-color-none"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <p>
                              <img src="/img/websiteimage/us-flag.jpg" className="language-flag" alt="Testerika-logo" />
                            <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" height='13' width='13' viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </p>
                            
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                              <p>
                              <img src="/img/websiteimage/us-flag.jpg" className="language-flag" alt="Testerika-logo" />

                            Hindi
                            </p>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                              <p>
                              <img src="/img/websiteimage/us-flag.jpg" className="language-flag" alt="Testerika-logo" />

                            English
                            </p>
                              </a>
                            </li>

                          </ul>
                        </div>
              </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 448 512">
                          <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                        </svg>
                      </span>
                      <sup className="notification-no">1</sup>
                    </a>
                  </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17"
                fill="#60A37E"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
              </svg>
                    </a>
                  </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="dropdown nav-link dropdown-toggle d-flex align-items-center p-2"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    
                    <div>
                     
                      <div className="dropdown background-color-none">
                      

                        <button
                          className="dropdown-toggle background-color-none"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                        src={getAuthenticatedUserData()?.profile_image?getAuthenticatedUserData()?.profile_image:"/img/websiteimage/tb-avatar.svg"}
                        className="Man-profile-image-c-bet"
                      alt="Testerika-logo"
                    />

                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <span className="dropdown-item listing-menu-c-bet" style={{cursor:"pointer"}} onClick={()=>{
                         router.push("/dashboard/profile")
                      }}>
                              Profile
                            </span>

                          </li>
                          <li>
                            <span className="dropdown-item listing-menu-c-bet" style={{cursor:"pointer"}}  onClick={()=>{
                         router.push("/dashboard/transaction-history")
                      }}>
                              Transactions
                            </span>

                          </li>
                          <li>
                            <span className="dropdown-item listing-menu-c-bet" style={{cursor:"pointer"}} onClick={()=>{
                               const data=removeAuthenticationDataHandleLogout()
                                          if(data){
                                            SuccessMessage("User Logout Successfully")
                                            router.push("/")
                                          }
                            }}>
                              Logout
                            </span>
                          </li>


                        </ul>
                      </div>
                    </div>
                  </a>

                </li>

              </ul>
            </div>




            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body p-0">
              <div className="c-bet-sidebar">
<Link href="/dashboard/home"> <img src="/img/websiteimage/testerika-logo.png" className="mx-auto" alt="Testerika-slider" /></Link>


        <div className="home-cbet">
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/home">Home</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/online-test-series/">Online Test Series</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/attempted-exam">Attempted Exams</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/saved-questions">Saved Questions</Link></li>
          </ul>
          <ul className="side-bar-menu-listing">
          <li><Link href="/dashboard/live-exams">Live Exams</Link></li>
          </ul>
        </div>
      </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CbetTopBar;
