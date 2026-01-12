import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReadMoreArea from '@foxeian/react-read-more';
import { useSelector } from 'react-redux';
import PaginationCustom from './PaginationCustom';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { IoEyeOutline } from 'react-icons/io5'
import { BiMessageRoundedDots } from "react-icons/bi";
import Moment from 'react-moment';
const DoutsCommentsFilter = ({ setLoading, loading, setCurrentPage, getAllDoubtDetails, setStatus, currentPage, totalPage, setTotalPage, status }: any) => {
  const { subjects, allDoubts, userDetails } = useSelector((state: any) => state?.reducerSlice)
  var settings = {
    dots: false,
    navText: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="section-spacing">
      <div className="width-container">
        <div className="row">
          <div className="col-lg-9">
            <div className="tabs-heading d-flex justify-content-between align-items-center">
              <div className="dout-tabs">
                {' '}
                <nav className="navigation-tabs-douts">
                  <div className="nav nav-tabs border-none" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      onClick={() => {
                        setLoading(true)
                        setCurrentPage(1)
                        setStatus("All")
                        getAllDoubtDetails(`page=1&items_per_page=10`)
                      }}
                    >
                      All Doubts
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      onClick={() => {
                        setStatus("My")
                      }}
                    >
                      My Doubts
                    </button>
                    {/* <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Explore Exams
                    </button> */}
                  </div>
                </nav>
              </div>
              <div>
                {/* <div className="Douts-filters" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg height="20" widths="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="Glyph">
                      <path
                        d="m17 5a3 3 0 1 1 3 3 3 3 0 0 1 -3-3zm-15 1h12a1 1 0 0 0 0-2h-12a1 1 0 0 0 0 2zm6 3a3 3 0 0 0 -2.82 2h-3.18a1 1 0 0 0 0 2h3.18a3 3 0 1 0 2.82-4zm14 2h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-12 7h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm12 0h-3.18a3 3 0 1 0 0 2h3.18a1 1 0 0 0 0-2z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div> */}
              </div>
            </div>
            <div className="tabs-sections-starts">
              <div className="tab-content" id="nav-tabContent">


                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  {loading ? <p>Loading...</p> : <div>
                    {
                      allDoubts?.data?.length > 0 ? allDoubts?.data?.map((item: any, index: number) => {
                        return <div key={index} className="listed-exams-dout-cards mb-4">
                          <div className="dout-card-header">
                            <div className="d-flex align-items-center">
                              <div className="exams-imagess-dout">
                                <img src={status == "My" ? getAuthenticatedUserData()?.profile_image ? getAuthenticatedUserData()?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png" : userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image ? userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="exam-category-img" />
                              </div>
                              <div className="exam-name-and-solution-details">
                                <span className="m-0">
                                  {/* <span className="theme-color">SSB PO </span>{' '} */}
                                  <span className="dout-sub-category-exam">{item?.subject_id ? subjects?.find((item2: any) => item2?.id == item?.subject_id)?.subject_name : item?.other_subject}</span>
                                </span>{' '}
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                    <path
                                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                      fill="#60A37E"
                                    />
                                  </svg>
                                </span>
                                <div className="sloved-question-named">
                                  {' '}
                                  <span>{status == "My" ? getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname : userDetails.find((item2: any) => item2?.id == item?.userid) ? userDetails.find((item2: any) => item2?.id == item?.userid)?.firstname + " " + userDetails.find((item2: any) => item2?.id == item?.userid)?.lastname : ""} </span>
                                  <span className="theme-color"><Moment fromNow>{new Date(item.createdAt)}</Moment></span>
                                </div>
                              </div>
                              <div></div>
                            </div>
                            <div>
                              <div className="dropdown background-color-none">
                                <button
                                  className="dropdown-toggle background-color-none"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 128 512">
                                    <path
                                      d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                      fill="#60A37E"
                                    />
                                  </svg>
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                      <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                                          <path
                                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                                            fill="#60A37E"
                                          />
                                        </svg>
                                      </span>
                                      <span className="ms-2">Report Post</span>
                                    </a>
                                  </li>

                                  <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                      <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 512">
                                          <path
                                            d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                                            fill="#60A37E"
                                          />
                                        </svg>
                                      </span>
                                      <span className="ms-2">Hide Post</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                      <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512">
                                          <path
                                            d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                                            fill="#60A37E"
                                          />
                                        </svg>
                                      </span>
                                      <span className="ms-2">Turn on notification for this post</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="dout-middle-section">
                            {item?.question && <p>{item?.question}</p>}
                            {item?.hint_or_reference && <div className='col-12 my-2'>
                              <div>
                                <span style={{ fontSize: "13px" }}>Reference:-</span>
                              </div>
                              <input disabled className='w-100 form-control p-2' placeholder='Add hint or reference...' value={item?.hint_or_reference} onChange={(e: any) => {
                              }} />
                            </div>}
                            {<div className='doubt_image_listing mt-4'>
                              {
                                item?.image?.length > 0 ? item?.image?.map((item2: any, index2: number) => {
                                  return <div key={index2} className='m-1' style={{ position: "relative", display: "inline-block" }}>
                                    <a href={item2} target="_blank" className='doubt_listing_image_cross' style={{ position: "absolute", top: "3px", right: "5px", zIndex: "999", color: "white", fontWeight: "bolder", cursor: "pointer" }}>
                                      <IoEyeOutline style={{ transform: "scale(1.3)" }} />
                                    </a>
                                    <span className='doubt_listing_image' style={{ display: "inline-block", width: "120px", height: "100px", border: "0.5px solid black", padding: "2px", borderRadius: "5px" }}>
                                      <img src={item2} style={{ width: "95%", height: "95%", objectFit: "cover" }} />
                                      <span style={{ width: "100%", height: "100%", background: "#000", position: "absolute", top: "0px", left: "0px", opacity: ".5", zIndex: 1, borderRadius: "5px" }}></span>
                                    </span>
                                  </div>
                                }) : null}

                            </div>}
                          </div>
                          <div className="doutfooter-card pt-2">
                            {/* <div className="like-it">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                              </svg>
                              <span className="ms-2">Like</span>
                            </div> */}
                            <div style={{ cursor: "pointer" }} data-bs-toggle="modal"
                              data-bs-target="#modal-signin">
                              <span>
                                <BiMessageRoundedDots style={{ transform: "scale(1.3)" }} />
                              </span>
                              <span className='ms-1 me-1'>{item?.solutions?.length > 0 ? item?.solutions?.length : 0}</span>
                              <span style={{ fontSize: "12px" }}>Total answers</span>
                            </div>
                            {/* <div className="like-it">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 512">
                                <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
                              </svg>
                              <span className="ms-2">Comment</span>
                            </div> */}
                            {/* <div className="like-it">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512">
                                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
                              </svg>
                              <span className="ms-2">Share</span>
                            </div> */}
                            <div className="Answer-now">
                              <button data-bs-toggle="modal"
                                data-bs-target="#modal-signin" >Answer Now</button>
                            </div>
                          </div>
                        </div>
                      }) : <div className='text-warning text-center m-3'>
                        <div>
                          No Doubts have been asked in this Section. Be the first one to ask a Doubt!
                        </div>
                        <div>
                          <button className="btn my-3 btn-outline-primary btn-sm" type="button" style={{ padding: "6px" }} data-bs-toggle="modal"
                            data-bs-target="#modal-signin">Get Started</button>
                        </div>
                      </div>
                    }
                  </div>}
                  {allDoubts?.data?.length > 0 && <div>
                    <PaginationCustom currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} setTotalPage={setTotalPage} getAllDoubtDetails={getAllDoubtDetails} status="All" />
                  </div>}

                </div>




                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  {/* <div className="listed-exams-dout-cards mb-4 pt-2 pb-2">
                    <div className="dout-card-header d-flex align-items-center">
                      <div className="d-flex align-items-center">

                        <div className="exams-imagess-dout your-adeed-exams">
                          <img src="/img/websiteimage/exam-5.png" alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                          <span className="m-0">
                            <span className="theme-color ms-1">SSB PO </span>{' '}
                          </span>{' '}
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="dropdown background-color-none">
                          <button
                            className="dropdown-toggle background-color-none"
                          >

                            <div className="buttons">
                              <button className="main-button">
                                <svg width="15" height="15" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
                                </svg>
                              </button>
                              <button className="discord-button button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
                                  <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
                                </svg>
                              </button>
                              <button className="twitter-button button" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
                                  <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
                                </svg>
                              </button>
                              <button className="reddit-button button">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
                                  <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
                                </svg>
                              </button>
                              <button className="messenger-button button">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
                                </svg>
                              </button>
                              <button className="pinterest-button button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
                                  <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
                                </svg>
                              </button>
                              <button className="instagram-button button">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
                                </svg>
                              </button>
                              <button className="snapchat-button button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
                                  <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z"></path>
                                </svg>
                              </button>
                              <button className="whatsapp-button button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
                                  <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
                                </svg>
                              </button>
                            </div>
                            <div>
                              <input
                                className="form-check-input me-1  ms-2"
                                type="checkbox"
                                value=""
                                id="firstCheckbox"
                              />
                            </div>                        </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {<div>
                    {
                      <div className='text-warning text-center m-3'>
                        <div>
                          No Doubts have been asked in this Section. Be the first one to ask a Doubt!
                        </div>
                        <div>
                          <button className="btn my-3 btn-outline-primary btn-sm" type="button" style={{ padding: "6px" }} data-bs-toggle="modal"
                            data-bs-target="#modal-signin">Get Started</button>
                        </div>
                      </div>
                    }
                  </div>}

                </div>
                {/* <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="search-exam-search-box mb-4">
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


                <div className="listed-exams-dout-cards mb-4 pt-2 pb-2">
                    <div className="dout-card-header d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        
                        <div className="exams-imagess-dout your-adeed-exams">
                          <img src="/img/websiteimage/exam-5.png" alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                          <span className="m-0">
                            <span className="theme-color ms-1">SSB PO </span>{' '}
                          </span>{' '}
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="dropdown background-color-none">
                          <button
                            className="dropdown-toggle background-color-none"
                          >
                            
                            <div className="buttons">
  <button className="main-button">
  <svg width="15" height="15" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
  </svg>
</button>
<button className="discord-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
  </svg>
</button>
<button className="twitter-button button" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
  </svg>
</button>
<button className="reddit-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
     <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
</svg>
</button>
<button className="messenger-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
  </svg>
</button>
<button className="pinterest-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
  </svg>
</button>
<button className="instagram-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
  </svg>
</button>
<button className="snapchat-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z"></path>
  </svg>
</button>
<button className="whatsapp-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
  </svg>
</button>
</div>
<div>
<input
                                    className="form-check-input me-1  ms-2"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                  /> 
                                  </div>                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listed-exams-dout-cards mb-4 pt-2 pb-2">
                    <div className="dout-card-header d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        
                        <div className="exams-imagess-dout your-adeed-exams">
                          <img src="/img/websiteimage/exam-9.png" alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                          <span className="m-0">
                            <span className="theme-color ms-1">JVNL </span>{' '}
                          </span>{' '}
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="dropdown background-color-none">
                          <button
                            className="dropdown-toggle background-color-none"
                          >
                            
                            <div className="buttons">
  <button className="main-button">
  <svg width="15" height="15" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
  </svg>
</button>
<button className="discord-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
  </svg>
</button>
<button className="twitter-button button" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
  </svg>
</button>
<button className="reddit-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
     <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
</svg>
</button>
<button className="messenger-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
  </svg>
</button>
<button className="pinterest-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
  </svg>
</button>
<button className="instagram-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
  </svg>
</button>
<button className="snapchat-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z"></path>
  </svg>
</button>
<button className="whatsapp-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
  </svg>
</button>
</div>
<div>
<input
                                    className="form-check-input me-1  ms-2"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                    
                                  /> 
                                  </div>                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listed-exams-dout-cards mb-4 pt-2 pb-2">
                    <div className="dout-card-header d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        
                        <div className="exams-imagess-dout your-adeed-exams">
                          <img src="/img/websiteimage/exam-6.png" alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                          <span className="m-0">
                            <span className="theme-color ms-1">Rajasthan Police </span>{' '}
                          </span>{' '}
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="dropdown background-color-none">
                          <button
                            className="dropdown-toggle background-color-none"
                          >
                            
                            <div className="buttons">
  <button className="main-button">
  <svg width="15" height="15" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
  </svg>
</button>
<button className="discord-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
  </svg>
</button>
<button className="twitter-button button" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
  </svg>
</button>
<button className="reddit-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
     <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
</svg>
</button>
<button className="messenger-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
  </svg>
</button>
<button className="pinterest-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
  </svg>
</button>
<button className="instagram-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
  </svg>
</button>
<button className="snapchat-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z"></path>
  </svg>
</button>
<button className="whatsapp-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
  </svg>
</button>
</div>
<div>
<input
                                    className="form-check-input me-1  ms-2"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                    
                                  />  
                                  </div>                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listed-exams-dout-cards mb-4 pt-2 pb-2">
                    <div className="dout-card-header d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        
                        <div className="exams-imagess-dout your-adeed-exams">
                          <img src="/img/websiteimage/exam-4.png" alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                          <span className="m-0">
                            <span className="theme-color ms-1">Banking </span>{' '}
                          </span>{' '}
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="dropdown background-color-none">
                          <button
                            className="dropdown-toggle background-color-none"
                          >
                            
                            <div className="buttons">
  <button className="main-button">
  <svg width="15" height="15" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
  </svg>
</button>
<button className="discord-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
  </svg>
</button>
<button className="twitter-button button" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
  </svg>
</button>
<button className="reddit-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
     <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
</svg>
</button>
<button className="messenger-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
  </svg>
</button>
<button className="pinterest-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
  </svg>
</button>
<button className="instagram-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
  </svg>
</button>
<button className="snapchat-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z"></path>
  </svg>
</button>
<button className="whatsapp-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
  </svg>
</button>
</div>
<div>
<input
                                    className="form-check-input me-1  ms-2"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                    
                                  />  
                                  </div>                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listed-exams-dout-cards mb-4 pt-2 pb-2">
                    <div className="dout-card-header d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        
                        <div className="exams-imagess-dout your-adeed-exams">
                          <img src="/img/websiteimage/exam-3.png" alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                          <span className="m-0">
                            <span className="theme-color ms-1">SSC CGL </span>{' '}
                          </span>{' '}
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="dropdown background-color-none">
                          <button
                            className="dropdown-toggle background-color-none"
                          >
                            
                            <div className="buttons">
  <button className="main-button">
  <svg width="15" height="15" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
  </svg>
</button>
<button className="discord-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
  </svg>
</button>
<button className="twitter-button button" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
  </svg>
</button>
<button className="reddit-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
     <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
</svg>
</button>
<button className="messenger-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
  </svg>
</button>
<button className="pinterest-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
  </svg>
</button>
<button className="instagram-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
  </svg>
</button>
<button className="snapchat-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z"></path>
  </svg>
</button>
<button className="whatsapp-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
  </svg>
</button>
</div>
<div>
<input
                                    className="form-check-input me-1  ms-2"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                  />  
                                  </div>                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listed-exams-dout-cards mb-4 pt-2 pb-2">
                    <div className="dout-card-header d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        
                        <div className="exams-imagess-dout your-adeed-exams">
                          <img src="/img/websiteimage/exam-2.png" alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                          <span className="m-0">
                            <span className="theme-color ms-1">NTPC </span>{' '}
                          </span>{' '}
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="dropdown background-color-none">
                          <button
                            className="dropdown-toggle background-color-none"
                          >
                            
                            <div className="buttons">
  <button className="main-button">
  <svg width="15" height="15" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
  </svg>
</button>
<button className="discord-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z"></path>
  </svg>
</button>
<button className="twitter-button button" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
  </svg>
</button>
<button className="reddit-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
     <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
</svg>
</button>
<button className="messenger-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
  </svg>
</button>
<button className="pinterest-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
  </svg>
</button>
<button className="instagram-button button">
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
  </svg>
</button>
<button className="snapchat-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z"></path>
  </svg>
</button>
<button className="whatsapp-button button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
     <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
  </svg>
</button>
</div>
<div>
<input
                                    className="form-check-input me-1  ms-2"
                                    type="checkbox"
                                    value=""
                                    id="firstCheckbox"
                                  />  
                                  </div>                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="downlaod-app-inner-section text-center bg-light-color">
              <div className="app-download-slidersss pb-3">
                <Slider {...settings}>
                  <div>
                    <div className="mobile-slide">
                      <img
                        src="/img/websiteimage/mobile-app-download.png"
                        className="w-50 mx-auto"
                        alt="mobile-app-screen"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mobile-slide">
                      <img
                        src="/img/websiteimage/mobile-app-download.png"
                        className="w-50 mx-auto"
                        alt="mobile-app-screen"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mobile-slide">
                      <img
                        src="/img/websiteimage/mobile-app-download.png"
                        className="w-50 mx-auto"
                        alt="mobile-app-screen"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
              <h5 className="pb-2">Download App</h5>
              <span>Share & Discuss your doubts with greater ease on the Testserika App.</span>
              <br />
              <button className="theme-btn mt-3">Download App Now</button>
            </div>

            {/* <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content width-80-modal-box">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      Filters
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body pt-1">
                    <div className="douts-modal-box-data">
                      <div className="tabs-heading d-flex justify-content-center align-items-center">
                        <div className="dout-tabs">
                          <nav className="navigation-tabs-douts border-none">
                            <div
                              className="nav nav-tabs border-none pb-3 d-flex justify-content-center w-100"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link active"
                                id="allexam-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#allexam-exam"
                                type="button"
                                role="tab"
                                aria-controls="allexam-exam"
                                aria-selected="true"
                              >
                                All Exams
                              </button>
                              <button
                                className="nav-link"
                                id="others-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-others"
                                type="button"
                                role="tab"
                                aria-controls="others-other"
                                aria-selected="false"
                              >
                                Others
                              </button>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div className="tabs-sections-starts">
                        <div className="tab-content mt-2" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="allexam-exam"
                            role="tabpanel"
                            aria-labelledby="search-exam-tab"
                          >
                            <div className="search-bar-douts-search-exam">
                              <div>
                                <div className="search-exam-search-box">
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
                              </div>
                            </div>
                            <span>Exams</span>
                            <ul className="list-group over-flow-hidenss">
                              <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                <input
                                  className="form-check-input space-inputsss"
                                  type="checkbox"
                                  value=""
                                  id="firstCheckbox"
                                />
                                <label className="form-check-label width-label-douts">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item m-0">
                                      <h2 className="accordion-header zero-line-height-header ">
                                        <button
                                          className="accordion-button padding-zeros"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne"
                                          aria-expanded="true"
                                          aria-controls="collapseOne"
                                        >
                                          Physics <span>( 13381 )</span>
                                        </button>
                                      </h2>
                                      <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div className="accordion-body over-flows-autoss">
                                          <ul className="list-group mb-2">
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                <input
                                  className="form-check-input space-inputsss"
                                  type="checkbox"
                                  value=""
                                  id="firstCheckbox"
                                />
                                <label className="form-check-label width-label-douts">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item m-0">
                                      <h2 className="accordion-header zero-line-height-header ">
                                        <button
                                          className="accordion-button padding-zeros"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapsetwo"
                                          aria-expanded="true"
                                          aria-controls="collapsetwo"
                                        >
                                          Physics <span>( 13381 )</span>
                                        </button>
                                      </h2>
                                      <div
                                        id="collapsetwo"
                                        className="accordion-collapse collapse "
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div className="accordion-body over-flows-autoss">
                                          <ul className="list-group mb-2">
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                <input
                                  className="form-check-input space-inputsss"
                                  type="checkbox"
                                  value=""
                                  id="firstCheckbox"
                                />
                                <label className="form-check-label width-label-douts">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item m-0">
                                      <h2 className="accordion-header zero-line-height-header ">
                                        <button
                                          className="accordion-button padding-zeros"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapsethree"
                                          aria-expanded="true"
                                          aria-controls="collapsethree"
                                        >
                                          Physics <span>( 13381 )</span>
                                        </button>
                                      </h2>
                                      <div
                                        id="collapsethree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div className="accordion-body over-flows-autoss">
                                          <ul className="list-group mb-2">
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                <input
                                  className="form-check-input space-inputsss"
                                  type="checkbox"
                                  value=""
                                  id="firstCheckbox"
                                />
                                <label className="form-check-label width-label-douts">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item m-0">
                                      <h2 className="accordion-header zero-line-height-header ">
                                        <button
                                          className="accordion-button padding-zeros"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapseFour"
                                          aria-expanded="true"
                                          aria-controls="collapseFour"
                                        >
                                          Physics <span>( 13381 )</span>
                                        </button>
                                      </h2>
                                      <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div className="accordion-body over-flows-autoss">
                                          <ul className="list-group mb-2">
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                <input
                                  className="form-check-input space-inputsss"
                                  type="checkbox"
                                  value=""
                                  id="firstCheckbox"
                                />
                                <label className="form-check-label width-label-douts">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item m-0">
                                      <h2 className="accordion-header zero-line-height-header ">
                                        <button
                                          className="accordion-button padding-zeros"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapsefive"
                                          aria-expanded="true"
                                          aria-controls="collapsefive"
                                        >
                                          Physics <span>( 13381 )</span>
                                        </button>
                                      </h2>
                                      <div
                                        id="collapsefive"
                                        className="accordion-collapse collapse "
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div className="accordion-body over-flows-autoss">
                                          <ul className="list-group mb-2">
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                <input
                                  className="form-check-input space-inputsss"
                                  type="checkbox"
                                  value=""
                                  id="firstCheckbox"
                                />
                                <label className="form-check-label width-label-douts">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item m-0">
                                      <h2 className="accordion-header zero-line-height-header ">
                                        <button
                                          className="accordion-button padding-zeros"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapsesix"
                                          aria-expanded="true"
                                          aria-controls="collapsesix"
                                        >
                                          Physics <span>( 13381 )</span>
                                        </button>
                                      </h2>
                                      <div
                                        id="collapsesix"
                                        className="accordion-collapse collapse "
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div className="accordion-body over-flows-autoss">
                                          <ul className="list-group mb-2">
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="firstCheckbox"
                                              />
                                              <label className="form-check-label">
                                                thermodynamics <span>( 121213 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electricity and magnetism <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                atomic structure <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                mechanics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                wave and oscillation <span>( 121323 )</span>
                                              </label>
                                            </li>
                                            <li className="list-group-item p-0 pt-1">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="secondCheckbox"
                                              />
                                              <label className="form-check-label">
                                                electronics <span>( 121323 )</span>
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="nav-others" role="tabpanel" aria-labelledby="other-tab">
                            <span>Others</span>
                            <ul className="list-group">
                              <li className="list-group-item">
                                <input className="form-check-input" type="checkbox" value="" id="firstCheckbox" />
                                <label className="form-check-label">
                                  Exam Related Query <span>( 121213 )</span>
                                </label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input" type="checkbox" value="" id="secondCheckbox" />
                                <label className="form-check-label">
                                  Others <span>( 121323 )</span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-filter">
                    <button className="border-filter" data-bs-dismiss="modal" aria-label="Close">
                      Clear All
                    </button>
                    <button className="background-color-filter" data-bs-dismiss="modal" aria-label="Close">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoutsCommentsFilter;
