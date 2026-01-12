import React from 'react'

const CbetprofileOthers = () => {
  return (
    <>
    <div className="pt-7">
        <h2>Settings</h2>
      </div>
      <div className=" pt-5">
        <nav className="navigation-tabs-douts">
          <div className="nav nav-tabs  w-100 pb-4" id="nav-tab" role="tablist">
            <button
              className="nav-link current-affair active border-none"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="all-other"
              aria-selected="true"
            >
              Profile
            </button>
            <button
              className="nav-link current-affair border-none"
              id="allexam-tab"
              data-bs-toggle="tab"
              data-bs-target="#allexam-exam"
              type="button"
              role="tab"
              aria-controls="allexam-exam"
              aria-selected="false"
            >
              Your Exams
            </button>
            <button
              className="nav-link current-affair border-none"
              id="allexamone-tab"
              data-bs-toggle="tab"
              data-bs-target="#allexamone-exam"
              type="button"
              role="tab"
              aria-controls="allexamone-exam"
              aria-selected="false"
            >
              Account
            </button>
            <button
              className="nav-link current-affair border-none"
              id="allexamtwo-tab"
              data-bs-toggle="tab"
              data-bs-target="#allexamtwo-exam"
              type="button"
              role="tab"
              aria-controls="allexamtwo-exam"
              aria-selected="false"
            >
              Pass
            </button>
          </div>
        </nav>
            <div>
            <div className="tabs-sections-starts">
          <div className="tab-content mt-2" id="nav-tabContent">
            <div className="tab-pane fade  show active" id="nav-all" role="tabpanel" aria-labelledby="all-tab">
                
                <div className="cbet-profile">
                    <div className='text-center cbet-profile-image'>
                    <img className='mb-2' src="/img/websiteimage/profile-picture-setting.jpg" alt="user-profile-cbet" /><br/>
                    <button className='pass-pro'>Uploade Profile Picture</button>                        
                    </div>
                    <div className='c-bet-profile-name-and-other'>
                        <div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p>Full Name :</p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>Harikesh Yadav</span>
                            </div>
                        </div>
                        <div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p>Date of Birth :</p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>1 March 1999</span>
                            </div>
                        </div>
                        <div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p>Education : </p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>BSC Nursing</span>
                            </div>
                        </div>
                        <div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p>Category : </p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>General</span>
                            </div>
                        </div><div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p>Location : </p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>Kardhani Scheme, Kalwar Road, Jaipur</span>
                            </div>
                        </div>
                    </div>
                    <div className='edit-profile-button'>
                    <button className='pass-pro'>Edit Profile</button>                        
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="allexam-exam" role="tabpanel" aria-labelledby="search-exam-tab">
            <div className="cbet-profile">
                    <div className='c-bet-profile-name-and-other w-75'>
                        <div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p>Email :</p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>harikeshyadav200788@gmail.com</span>
                            </div>
                        </div>
                        <div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p> Mobile number :</p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>7627012603</span>
                            </div>
                        </div>
                        <div className='c-bet-profile-flex'>
                            <div className='cbet-profile-details-type'>
                                <p>Username : </p>
                            </div>
                            <div className='cbet-profile-details-type-link'>
                                <span>nryciYuyRh</span>
                            </div>
                        </div>
                    </div>
                    <div className='edit-profile-button w-25 text-end'>
                    <button className='pass-pro-delet-profile'>Delete Account</button>                        
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="allexamone-exam" role="tabpanel" aria-labelledby="allexamone-exam-tab">
                <h4 className='mt-5'>SSC Exams</h4>
                <div className="cbet-exams row pt-3">
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                </div>
                <h4 className='mt-5'>KVS Stenographer</h4>
                <div className="cbet-exams row pt-3">
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <div className='d-flex cbet-exams-profile'>
                        <div className='cbet-exam-image'>
                        <img src="/img/websiteimage/exam-1.png" alt="exam-category-img" />
                        </div>
                        <div className='cbet-exam-text'>
                            <p className='text-dark'>SSC CGL</p>
                        </div>
                        <div className='cbet-exam-three-dot'>
                        <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Remove
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="allexamtwo-exam" role="tabpanel" aria-labelledby="allexamtwo-exam-tab">
                xccx
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default CbetprofileOthers