import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import { getLivePackages, liveExamFindExamWhichIsAlreadyGiven, joinNowLiveExam } from 'components/request/request';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setPackagesData } from 'reducers/reducerSlice';
import PaginationQuizzes from 'components/reuseable/PaginationQuizzes';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import { LuFileQuestion } from "react-icons/lu";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkUserProfileStatus } from 'hooks/localStorageInfo';

const Packages: NextPage = () => {
  const [activePage, setActivePage] = useState(1)
  const [total, setTotal] = useState(1)
  const [category, setCategory] = useState<any>("Upcoming")
  const [loading, stLoading] = useState(true)
  const { packages }: any = useSelector((state: any) => state?.reducerSlice)
  const dispatch = useDispatch()
  const router = useRouter()

  const [liveStatus, setLiveStatus] = useState({
    status: "not registered",
    count: 0
  })
  // function isDateInPastOrToday(givenDate: any) {
  //   const inputDate = new Date(givenDate);
  //   const today = new Date();

  //   // Set both dates to midnight to ignore time portion
  //   inputDate.setHours(0, 0, 0, 0);
  //   today.setHours(0, 0, 0, 0);

  //   return inputDate <= today;
  // }
  // function isDateInPastOrToday(givenDate: any): boolean {
  //   const inputDate = new Date(givenDate);
  //   const today = new Date();
  
  //   // Set both dates to UTC midnight to ignore time portion and timezone differences
  //   const inputUTC = Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate());
  //   const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  
  //   return inputUTC <= todayUTC;
  // }
  /**
 * Returns true if (givenDate + 5 h 30 m) is today or in the past.
 * `givenDate` can be any value accepted by the JS Date constructor.
 */
  function isDateInPastOrToday(givenDate: any): boolean {
    const originalDate = new Date(givenDate);
    //  console.log(givenDate)
    // ✅ Add 5 hours 30 minutes (330 minutes)
    // const adjustedDate = new Date(originalDate.getTime() + 330 * 60 * 1000);
  //  console.log(adjustedDate)
    // ✅ Get current date and time
    const now = new Date();
  
    // ✅ Compare entire timestamp
    let data=originalDate <= now;
    // console.log(data)
    return data
  }
  
  
  

  


  const getAllPackages = async () => {
    try {
      let query = `category=${category}`
      const { data } = await getLivePackages(query)
      if (data?.success) {
        // setTotal(data?.payload?.pagination?.total)
        dispatch(setPackagesData(data?.data))
        let packageid = data?.data?.packages[0]?.id
        let subpackageid = data?.data?.packages[0]?.subpackages[0]?.subpackageid
        let examid = data?.data?.exams[0]?.id

        const examStatus = await liveExamFindExamWhichIsAlreadyGiven({
          userid: getAuthenticatedUserData()?.id,
          packageid,
          subpackageid,
          examid,
          bundleid: null
        })
        if (examStatus?.data) {
          setLiveStatus(examStatus?.data?.data)
        }
        setTimeout(() => {
          stLoading(false)
        }, 200)
      }
      else {
        dispatch(setPackagesData(undefined))
        setTimeout(() => {
          stLoading(false)
        }, 200)
      }
    } catch (err) {
      setTimeout(() => {
        stLoading(false)
      }, 200)
    }
  }

  useEffect(() => {
    getAllPackages()
  }, [activePage, category])
  return (
    <Fragment>
      {
        loading ? <Loading /> : <>
          <section className="c-bet-dashboard">
            <CbetSideBar />
            <div className="c-bet-right-side-bar">
              <CbetTopBar />
              <div className="c-bet-content-part slider-container">
                <main>

                  <section className="wrapper  pt-11">
                    <div className="cbet-container pt-0 pt-lg-5">
                      <div className="row gy-10">
                        <div className="col-lg-9 mt-5">
                          <div className="row gx-md-4 gy-md-4 mb-4">
                            <div className="col-12">
                              <div className="row mx-1 gy-5">
                                <div>
                                <button className={`${category == "Upcoming" ? 'btn btn-sm btn-primary me-2' : 'btn btn-sm btn-outline-primary me-2'}`} onClick={() => {
                                    if (category != "Upcoming") {
                                      stLoading(true)

                                      setCategory("Upcoming")
                                    }
                                  }}>Upcoming</button>
                                  <button className={`${category == "Live" ? 'btn btn-sm btn-primary ms-2' : 'btn btn-sm btn-outline-primary ms-2'}`} onClick={() => {
                                    if (category != "Live") {
                                      stLoading(true)
                                      setCategory("Live")
                                    }
                                  }}>Live</button>
                                 
                                </div>
                                {
                                  packages?.exams?.length > 0 ? packages?.exams?.map((item: any, index: number) => {
                                    return <Fragment key={index}>
                                      {/* <ProductCard {...item} packageKey={item?.hash} itemKey={index} className="col-lg-10 col-12" premiumPackages={premiumPackages} packagesDetails={packagesDetails} /> */}
                                      <div className="card my-4">
                                        <div className="py-3 px-2 exam_subpackage_main_container">
                                          <div className="exam_section_second_section">
                                            <div className="exam_section_second_section_section1" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                              <h6>{item?.name}</h6>
                                              {<span className="free_paid_button_exam_subPackage">Free</span>}
                                              {<span className="free_paid_button_exam_subPackage bg-danger">User Joined:- {liveStatus?.count}</span>}

                                              {/* {item?.type == "Premium" && <span className="free_paid_button_exam_subPackage2">Premium</span>} */}
                                            </div>
                                            <div className="exam_section_second_section2">
                                              <div className="exam_section_second_section2_icon_content">
                                                <LuFileQuestion style={{ transform: "scale(0.7)" }} />
                                                <span>{item?.total_questions} Questions</span>
                                              </div>
                                              <div className="exam_section_second_section2_icon_content" style={{ marginLeft: "10px" }}>
                                                <BsFileEarmarkSpreadsheet style={{ transform: "scale(0.7)" }} />
                                                <span>{item?.total_marks} Marks</span>
                                              </div>
                                              <div className="exam_section_second_section2_icon_content" style={{ marginLeft: "10px" }}>
                                                <IoMdTimer style={{ transform: "scale(0.7)" }} />
                                                <span>{item?.exam_duration} Minutes</span>
                                              </div>

                                            </div>

                                            <ul className='exam_section_list_container mt-2 mb-2' style={{ fontSize: "13px", padding: "2px" }}>
                                              {
                                                item?.examsections?.map((sectionItem: any, indexItem: number) => {
                                                  return <li className='exam_section_list_margin custom-margin-rightpage' key={indexItem} >{sectionItem?.section_name}</li>
                                                })
                                              }
                                            </ul>
                                          </div>
                                          <div style={{ display: "flex" }}>
                                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: "10px" }} className='flex-on-web'>
                                              {/*                                              
                                              {givenExam?.length > 0 && givenExam?.find((itemm: any) => itemm?.packageid == packageDetail?.id && itemm?.subpackageid == selectedSubPackageId && itemm?.examid == item?.id) && <div className='btn btn-outline-greenish ms-2 text-green' style={{ fontSize: "12px", cursor: 'Pointer', color: "#3f78e0" }} onClick={() => {
                                                router.push(`/dashboard/exams/report/${packageDetail?.id}/${selectedSubPackageId}/${item?.id}/${item?.key}`)
                                              }}>
                                                View Report
                                              </div>} */}



                                              {
                                                liveStatus?.status == "not registered" && category == "Upcoming" && isDateInPastOrToday(packages?.packages[0]?.reg_start_date) && <button className='btn btn-primary btn-sm' onClick={async () => {
                                                  try {
                                                    let packageid = packages?.packages[0]?.id
                                                    let subpackageid = packages?.packages[0]?.subpackages[0]?.subpackageid

                                                    const { data } = await joinNowLiveExam({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid,
                                                      subpackageid,
                                                      examid: item?.id,
                                                      bundleid: null,
                                                      total_questions: item?.total_questions
                                                    })
                                                    if (data?.success) {
                                                      stLoading(true)
                                                      SuccessMessage("Joined Successfully")
                                                      getAllPackages()
                                                    } else {
                                                      ErrorMessage("Not authorized")
                                                    }
                                                  } catch (err) {
                                                    ErrorMessage("Not authorized")
                                                  }
                                                }}>Join Now</button>}


                                              {
                                                liveStatus?.status == "initialized" && category == "Upcoming" && !isDateInPastOrToday(packages?.packages[0]?.start_date) && <button className='btn btn-primary btn-sm' disabled>Exam Available On
                                                 {" "} {new Date(packages?.packages[0]?.start_date).toLocaleString('default', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: true
                                                  })}</button>
                                              }

                                              {
                                                liveStatus?.status == "initialized" && category == "Upcoming" && !isDateInPastOrToday(packages?.packages[0]?.start_date) && <span style={{ color: "green", fontWeight: "bolder", marginLeft: "4px" }}>Already Joined</span>
                                              }


                                              {
                                                liveStatus?.status == "initialized" && category == "Live" && !isDateInPastOrToday(packages?.packages[0]?.start_date) && <button className='btn btn-primary btn-sm' disabled>Exam Available On {" "}
                                                  {new Date(packages?.packages[0]?.start_date).toLocaleString('default', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: true
                                                  })}
                                                </button>
                                              }














                                              {
                                                liveStatus?.status == "completed" && category == "Live" && isDateInPastOrToday(packages?.packages[0]?.result_publish_date) ? <button className='btn btn-primary btn-sm' onClick={() => {
                                                  router.push(`/dashboard/exams/report/${packages?.packages[0]?.id}/${packages?.packages[0]?.subpackages[0]?.subpackageid}/${item?.id}/${item?.key}`)

                                                }}>View Report</button> : liveStatus?.status == "completed" && category == "Live" && <button className='btn btn-primary btn-sm' disabled>Report Available on {" "}{new Date(packages?.packages[0]?.result_publish_date).toLocaleString('default', {
                                                  day: 'numeric',
                                                  month: 'long',
                                                  year: 'numeric',
                                                  hour: 'numeric',
                                                  minute: '2-digit',
                                                  hour12: true
                                                })}</button>
                                              }


                                              {
                                                liveStatus?.status == "not completed" && category == "Live" && isDateInPastOrToday(packages?.packages[0]?.start_date) && !isDateInPastOrToday(packages?.packages[0]?.end_date) && <button className='btn btn-primary btn-sm' onClick={() => {
                                                  try {
                                                    if (checkUserProfileStatus()) {
                                                      // setBuyNowSection(true)
                                                      if (item && packages?.packages[0]?.id && packages?.packages[0]?.subpackages[0]?.subpackageid && item?.id) {
                                                        router.push(`/dashboard/exams/instructions/${packages?.packages[0]?.id}/${packages?.packages[0]?.subpackages[0]?.subpackageid}/${item?.id}/${item?.key}`)
                                                      } else {
                                                        ErrorMessage("Invalid details.")
                                                      }
                                                    } else {
                                                      ErrorMessage("Please Complete your Profile.")
                                                      router.push("/dashboard/profile")
                                                    }
                                                  } catch (err) {
                                                    ErrorMessage("Invalid details.")
                                                  }
                                                }}>Restart Now</button>
                                              }
                                              {
                                                liveStatus?.status == "initialized" && category == "Live" && isDateInPastOrToday(packages?.packages[0]?.start_date) && !isDateInPastOrToday(packages?.packages[0]?.end_date) && <button className='btn btn-primary btn-sm' onClick={() => {
                                                  try {
                                                    if (checkUserProfileStatus()) {
                                                      // setBuyNowSection(true)
                                                      if (item && packages?.packages[0]?.id && packages?.packages[0]?.subpackages[0]?.subpackageid && item?.id) {
                                                        router.push(`/dashboard/exams/instructions/${packages?.packages[0]?.id}/${packages?.packages[0]?.subpackages[0]?.subpackageid}/${item?.id}/${item?.key}`)
                                                      } else {
                                                        ErrorMessage("Invalid details.")
                                                      }
                                                    } else {
                                                      ErrorMessage("Please Complete your Profile.")
                                                      router.push("/dashboard/profile")
                                                    }
                                                  } catch (err) {
                                                    ErrorMessage("Invalid details.")
                                                  }
                                                }}>Start Now</button>
                                              }

                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Fragment>
                                  }
                                  ) : <ContentNotFound button_text="" to="" />
                                }

                              </div>
                            </div>
                          </div>
                          {/* {packages?.packages?.length > 0 && Math.ceil((total) / 6) > 1 && <PaginationQuizzes currentPage={activePage} totalPage={total} setCurrentPage={setActivePage} />} */}
                        </div>

                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </section>
          <footer className="footer_container_dashboard_content">
            <DashboardFooter />
          </footer>
        </>
      }


    </Fragment>
  );
};

export default Packages;
