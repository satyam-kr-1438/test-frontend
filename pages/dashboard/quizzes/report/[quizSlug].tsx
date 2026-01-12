import { NextPage } from 'next';
import { Fragment, useEffect, useRef, useState } from 'react';
import { MdQuiz } from "react-icons/md";
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import { Rating } from '@mui/material';
import QuizzesRatingSection from 'components/dashboardComponent/common/QuizzesRatingSection';
import { useRouter } from 'next/router';
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkUserProfileStatus, getAuthenticatedUserData, removeAuthenticationDataHandleLogout } from 'hooks/localStorageInfo';
import { getAllReviewUsingQuizKey, getQuizResult, reattemptQuizAnalysisStatus, submitQuizReview } from 'components/request/request';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import useAuthorization from 'hooks/useAuthorization';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
const QuizReport: NextPage = () => {
     const [startCounter, setStartCounter] = useState<number>(3)
     const [auth, setAuth] = useAuthorization()
     const [loading, setLoading] = useState(true)
     const reviewRef: any = useRef(null)
     const [selectAttempt, setSelectAttempt] = useState<any>()
     const [index, setIndex] = useState<number>(-1)
     const [questionTimer, setQuestionTimer] = useState(20)
     const [result, setResult] = useState<any>(undefined)
     const [totalUser, setTotalUser] = useState<number>(0)
     const [selectOption, setSelectOption] = useState<number>(0)
     const [user, setUser] = useState<any[]>([])
     const [review, setReview] = useState<any[]>([])
     const [ratingDistribution, setRatingDistribution] = useState<any>()
     const [allAttempt, setAllAttempt] = useState<any[]>([])
     const [loading2, setLoading2] = useState<boolean>(false)
     const [userReview, setUserReview] = useState({
          user_id: undefined,
          rate: 0,
          review: ""
     })
     const router = useRouter()
     const getQuizResultUsingQuizKey = async (offset_data: any) => {
          try {
               let payload = {
                    user_id: getAuthenticatedUserData()?.id,
                    quiz_key: router?.query?.quizSlug,
                    offset_data
               }
               const { data } = await getQuizResult(payload)
               if (data?.success) {
                    setAllAttempt(data?.allAttempt?.slice())
                    setSelectAttempt(data?.allAttempt?.length)
                    setResult(data?.data)
                    setTotalUser(data?.total_user)
                    setLoading(false)
                    setLoading2(false)
               } else {
                    ErrorMessage("Unauthorized Access")
                    router.push("/dashboard/home")
               }
          } catch (err) {
               ErrorMessage("Unauthorized Access")
               // router.push("/dashboard/home")
          }
     }

     const setReviewdata = (data: any) => {
          if (data?.id && data?.user_id && data?.quiz_id) {
               reviewRef?.current?.click()
          }
     }

     const getAllQUizReview = async () => {
          try {
               const { data } = await getAllReviewUsingQuizKey(router?.query?.quizSlug)
               if (data?.success) {
                    setReview(data?.review)
                    setUser(data?.data)
                    setRatingDistribution(data?.obj)
               } else {
                    setReview([])
                    setUser([])
                    setRatingDistribution(undefined)
               }
          } catch (err) {

          }
     }
     useEffect(() => {
          if (!checkUserProfileStatus()) {
               ErrorMessage("Please complete your profile.")
               router.push("/dashboard/profile")
          } else if (checkUserProfileStatus()) {
               if (router?.query?.quizSlug) {
                    getQuizResultUsingQuizKey(0)
                    getAllQUizReview()
               }
          }
     }, [router])
     useEffect(() => {
          if (!getAuthenticatedUserData()?.id) {
               removeAuthenticationDataHandleLogout()
               router.push("/")
          }
     }, [])
     return (
          <Fragment>

               <Testerikaheader />
               <Testerikamianheader />

               {
                    loading ? <Loading /> : <>
                         <main className="">
                              <section className="wrapper quiz_start_background_main">
                                   <div className="container pt-10 pb-14 " >
                                        <div className="row gy-5">
                                             <div className="col-12">
                                                  <div className="row">
                                                       <div className="col-12">
                                                            <div className="card py-4 px-3 text-center report_top_banner_main_container">
                                                                 <h4 style={{ color: "#f69917", marginBottom: "2px" }}>
                                                                      {(result?.rank == 1 || result?.rank == 2 || result?.rank == 3) ? "Excellent Try" : "Good Try"}, {getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname}!</h4>
                                                                 <p style={{ marginBottom: "0px" }}>Keep Practicing, Keep Improving</p>
                                                                 <p style={{ marginBottom: "0px" }}>
                                                                      {loading2 ? "Loading..." : "Total Points :-"}
                                                                      {!loading2 && <span style={{ color: "#f69917" }}>{result?.total_points}</span>}
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             {!loading2 ? <div className="card py-4  text-center col-lg-9 col-12">
                                                  <div>
                                                       <div className="report_rank_trophy_container">
                                                            <img src="/img/winner.png" style={{ width: "80px" }} />
                                                            <span className="report_quiz_your_rank">Your Rank</span>
                                                            <h6 style={{ color: "#f69917" }}>{result?.rank} / {totalUser}</h6>
                                                       </div>

                                                       <div className="report_question_correct_incorrect_section ">
                                                            <div className="card report_question_correct_incorrect_section_1">
                                                                 <span>Correct</span>
                                                                 <h6>{result?.total_correct}</h6>
                                                            </div>
                                                            <div className="card report_question_correct_incorrect_section_1">
                                                                 <span>In-Correct</span>
                                                                 <h6>{result?.total_incorrect}</h6>
                                                            </div>
                                                            <div className="card report_question_correct_incorrect_section_1">
                                                                 <span>Time Taken</span>
                                                                 <h6>{(Number(result?.total_time_taken) / 1000)?.toFixed(2)} Seconds</h6>
                                                            </div>
                                                       </div>


                                                       <div className="">
                                                            <div className="card  py-4 px-4 report_reatttempt_test_container">
                                                                 <div className="report_reatttempt_test_container_first">
                                                                      <span>
                                                                           <MdQuiz style={{ transform: "scale(1.5)" }} />
                                                                      </span>
                                                                 </div>
                                                                 <div className="report_reatttempt_test_container_second">
                                                                      <h6>Reattempt Quiz</h6>
                                                                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                 </div>
                                                                 <div className="report_reatttempt_test_container_third">
                                                                      <button onClick={async () => {
                                                                           try {
                                                                                if (auth) {
                                                                                     // router.push(`/dashboard/home/start/${props?.quizKey}`)
                                                                                     let payload = {
                                                                                          user_id: getAuthenticatedUserData()?.id,
                                                                                          quiz_key: router?.query?.quizSlug
                                                                                     }
                                                                                     const { data } = await reattemptQuizAnalysisStatus(payload)
                                                                                     if (data?.success) {
                                                                                          router.push(`/dashboard/home/start/${router?.query?.quizSlug}`)
                                                                                     } else {
                                                                                          ErrorMessage(data?.message)
                                                                                     }
                                                                                } else {
                                                                                     ErrorMessage("You are not authorized to access.")
                                                                                     router.push("/")
                                                                                }
                                                                           } catch (err) {

                                                                           }
                                                                      }}>Reattempt Quiz</button>
                                                                 </div>
                                                            </div>
                                                       </div>

                                                  </div>
                                             </div> : <div className="card py-4  text-center col-lg-9 col-12">
                                                  <div style={{ alignContent: "center", alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                                       <div>
                                                            <svg
                                                                 className="animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 
                                                                                h-10 w-10
                                                                           "
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24"
                                                            >
                                                                 <circle
                                                                      className="opacity-25"
                                                                      cx="12"
                                                                      cy="12"
                                                                      r="10"
                                                                      stroke="currentColor"
                                                                      strokeWidth="4"
                                                                 ></circle>
                                                                 <path
                                                                      className="opacity-75"
                                                                      fill="currentColor"
                                                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                 ></path>
                                                            </svg>
                                                       </div>
                                                       <div style={{ marginTop: "0px" }}>
                                                            <h3 style={{ fontSize: "28px" }}>Loading...</h3>
                                                       </div>
                                                  </div>
                                             </div>}

                                             <div className="col-lg-3 col-12 order-2">
                                                  {allAttempt?.length > 0 && <div className="card py-4 px-3 mb-4">
                                                       <div className="report_rating_review_container" ref={reviewRef}>
                                                            <div>
                                                                 <h4>Select your attempt to view result!!</h4>
                                                            </div>

                                                            <label className="my-1" style={{ width: "100%" }}>
                                                                 <span className="mb-2 d-block" style={{ fontSize: "13px" }}>Your Attempt</span>
                                                                 {/* <div className="form-select-wrapper"> */}
                                                                 <select className="form-select p-2" onChange={(e: any) => {
                                                                      setLoading2(true)
                                                                      setSelectAttempt(e?.target?.value)
                                                                      let offsetData = allAttempt?.length - (Number(e?.target?.value))
                                                                      getQuizResultUsingQuizKey(offsetData)
                                                                 }}>
                                                                      {
                                                                           allAttempt?.map((item: any, index: number) => {
                                                                                return <option value={index + 1} key={index}>
                                                                                     {index + 1}<sup>{index + 1 == 1 ? "st" : index + 1 == 2 ? "nd" : index + 1 == 1 ? "rd" : "th"} Attempt</sup>
                                                                                </option>
                                                                           })
                                                                      }

                                                                 </select>
                                                                 {/* </div> */}
                                                            </label>

                                                       </div>
                                                  </div>}
                                                  <div className="card py-4 px-3">
                                                       <div className="report_rating_review_container" ref={reviewRef}>
                                                            <div>
                                                                 <h4>Are you happy with the quality of Questions??</h4>
                                                            </div>
                                                            <div>
                                                                 <span>
                                                                      <Rating name="half-rating" value={userReview?.rate} onChange={(e: any) => {
                                                                           setUserReview({ ...userReview, rate: e?.target?.value })
                                                                      }} />
                                                                 </span>
                                                            </div>
                                                            <label className="my-1" style={{ width: "100%" }}>
                                                                 <span className="mb-2 d-block" style={{ fontSize: "13px" }}>Write Review</span>
                                                                 <textarea placeholder='Write Review...' value={userReview?.review} rows={3} className="form-control p-2" onChange={(e: any) => {
                                                                      setUserReview({ ...userReview, review: e?.target?.value })
                                                                 }} />
                                                            </label>
                                                            <div className="mt-2">
                                                                 <button className="btn btn-success btn-sm" onClick={async (e: any) => {
                                                                      e?.preventDefault()
                                                                      if (userReview?.rate <= 0) {
                                                                           ErrorMessage("Plese rate the quiz")
                                                                      } else if (userReview?.review?.trim() == "") {
                                                                           ErrorMessage("Plese write review")
                                                                      } else {
                                                                           const { data } = await submitQuizReview({ ...userReview, user_id: getAuthenticatedUserData()?.id, quiz_key: router?.query?.quizSlug })
                                                                           if (data?.success) {
                                                                                SuccessMessage("Review Submitted Successfully")
                                                                                setUserReview({
                                                                                     user_id: undefined,
                                                                                     rate: 0,
                                                                                     review: ""
                                                                                })
                                                                                getAllQUizReview()
                                                                           } else {
                                                                                ErrorMessage(data?.message)
                                                                           }
                                                                      }
                                                                 }}>Submit Review</button>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </section>

                              <section className="wrapper bg-light">
                                   <div className="container pt-5 py-md-5 py-lg-10">
                                        <div className="row gx-md-8 gx-xl-12 gy-8">
                                             <div className="col-lg-12 col-12">
                                                  <div className="">
                                                       <QuizzesRatingSection review={review} user={user} ratingDistribution={ratingDistribution} getAllQUizReview={getAllQUizReview} setReviewdata={setReviewdata} />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </section>
                         </main>
                    </>
               }
               <footer className="footer_container_dashboard_content">
                    <DashboardFooter />
               </footer>
          </Fragment>
     );
};

export default QuizReport;
