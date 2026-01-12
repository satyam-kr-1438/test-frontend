import React, { Fragment, useEffect, useState } from 'react'
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkPackageIsAvailableForUser, getExamDetailWithQuestionsAndAnswer, getSolutionSection, saveExamQuestion, getAllSavedQuestion } from 'components/request/request';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useRouter } from 'next/router';
import { CiLock } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setExamDetail, setExamLanguage, setExamQuestions } from 'reducers/reducerSlice';
import { MdOutlinePending } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import ConfirmPopup from 'components/reuseable/popup/ConfirmPopup';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const ExamSolution = () => {
   const router = useRouter()
   const dispatch = useDispatch()
   const [questionNumber, setQuestionNumber] = useState<number>(0)
   const [activeSection, setActiveSection] = useState<any>(-1)
   const { exams, questions, language } = useSelector((state: any) => state.reducerSlice)
   const [sectionQuestions, setSectionQuestions] = useState<any[]>([])
   const [passageIndex, setpassageIndex] = useState(0)
   const [allAttempt, setAllAttempt] = useState<any[]>([]);
   const [result, setResult] = useState<any>(undefined);
   const [memoryTest, setMemoryTest] = useState(true)
   const [savedQues, setSavedQues] = useState<any[]>([])
   const [isFullScreen, setIsFullScreen] = useState(false);
   const toggleFullScreen = () => {
      try {
         const docElement: any = document?.documentElement as any;
         if (!isFullScreen) {
            if (docElement?.requestFullscreen) {
               docElement?.requestFullscreen();
            }
         } else {
            try {
               if (document?.exitFullscreen) {
                  document?.exitFullscreen();
               }
            } catch (err) {

            }

         }
         setIsFullScreen(prevState => !prevState);
      } catch (err) {
         setIsFullScreen(prevState => !prevState);
      }
   };

   const getQuizReport = async (offset: number) => {
      try {
         let payload = {
            userid: getAuthenticatedUserData()?.id,
            bundleid: null,
            packageid: router?.query?.packageId,
            subpackageid: router?.query?.subpackageId,
            examid: router?.query?.examId,
            sectionid: activeSection,
            offset
         };

         const { data } = await getSolutionSection(payload);
         if (data?.success) {
            const loopedArray = Array.from({ length: data?.allAttempt }, (_, index) => index);
            setAllAttempt(loopedArray);
            setResult(data?.data);
         } else {
            // router.push('/access-denied');
         }
      } catch (err) {
         // router.push('/access-denied');
      }
   };

   const checkPackageAvailability = async () => {
      try {
         if (router && router?.query?.packageId && router.query.subpackageId && router.query.examId) {
            let authUser = getAuthenticatedUserData()
            let packageId = router.query.packageId
            let subpackageId = router.query.subpackageId
            let examId = router.query.examId
            const { data } = await checkPackageIsAvailableForUser(packageId, subpackageId, examId, authUser?.id)
            if (!data?.success) {
               router.push("/access-denied")
            } else {
               let examId = router.query.examId
               let examKey = router.query.examKey
               const { data } = await getExamDetailWithQuestionsAndAnswer(examId, examKey)
               if (data?.success) {
                  if (data?.questions?.length <= 0) {
                     router.push("/access-denied")
                  } else {
                     dispatch(setExamDetail(data?.exam))
                     setActiveSection(data?.exam?.examsections[0]?.id)
                     let allQuestionBankIds = data?.exam?.examsections[0]?.questions?.map((item: any) => item?.question_bank_id)
                     setSectionQuestions(data?.questions?.filter((item: any) => {
                        return allQuestionBankIds?.includes(item?.id)
                     }))
                     dispatch(setExamQuestions(data?.questions))
                  }
               }
            }
         }
      } catch (err) {
         router.push("/access-denied")
      }
   }
   useEffect(() => {
      checkPackageAvailability()
   }, [router, useSelector])

   const getAllSavedQues = async () => {
      try {
         const { data } = await getAllSavedQuestion(getAuthenticatedUserData()?.id)
         if (data?.success) {
            let quesIds: any[] = []
            for (let item of data?.data) {
               quesIds?.push(item?.question_id)
            }
            setSavedQues(quesIds)
         } else {
            setSavedQues([])
         }
      } catch (err) {
         setSavedQues([])
      }
   }
   useEffect(() => {
      getAllSavedQues()
   }, [])

   useEffect(() => {
      if (activeSection != -1)
         getQuizReport(0)
   }, [activeSection])

   
   
       useEffect(() => {
       const disableRightClick = (e: MouseEvent) => {
         e.preventDefault();
       };
   
       document.addEventListener('contextmenu', disableRightClick);
   
       return () => {
         document.removeEventListener('contextmenu', disableRightClick);
       };
     },);


   return (
      <Fragment>
         <div className="container-fluid">
            <div className="row">
               <div className="col-12" style={{ position: "fixed", top: "0px", zIndex: "999" }}>
                  <div className="card py-2 px-1" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                     <div className="" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <div style={{ maxWidth: "130px", cursor: "pointer" }} onClick={() => {
                           router.push("/dashboard/home")
                        }}>
                           <img src="/img/logo-dark.png" alt="Testerika" style={{ width: "100%" }} />
                        </div>
                        <div className="bg-colored-heading" style={{ marginLeft: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                           <h6 style={{ marginBottom: "0px", fontSize: "14px" }}>{exams?.name} {" "} (Solution)</h6>

                           <select value={language} className="form-select py-2 ms-2" style={{ width: "200px" }} onChange={(e: any) => {
                              dispatch(setExamLanguage(e?.target?.value))
                           }}>
                              <option value="English">English</option>
                              <option value="Hindi">Hindi</option>
                           </select>

                           <button className="ms-3 btn-sm d-md-none d-none d-lg-block btn btn-sm btn-outline-primary" onClick={toggleFullScreen}>
                              {isFullScreen ? "Exit Full Screen" : "Switch Full Screen"}
                           </button>

                           {allAttempt?.length > 0 && <div>
                              <div className="report_rating_review_container w-100">
                                 <label className="my-1" style={{ width: "100%" }}>
                                    {/* <span className="mb-2 d-block theme-color fw-bold" style={{ fontSize: "13px" }}>Your Attempt</span> */}
                                    <select className="form-select p-2 width-suxtom-attemp" onChange={(e: any) => {
                                       let offsetData = allAttempt?.length - (Number(e?.target?.value))
                                       getQuizReport(offsetData)
                                    }}>
                                       {
                                          allAttempt?.map((item: any, index: number) => {
                                             return <option value={index + 1} key={index}>
                                                {index + 1}<sup>{index + 1 == 1 ? "st" : index + 1 == 2 ? "nd" : index + 1 == 1 ? "rd" : "th"} Attempt</sup>
                                             </option>
                                          })
                                       }
                                    </select>
                                 </label>

                              </div>
                           </div>}
                           <div className='solution-answer-collector'>
                              <div className='displaying-flexing'>
                                 <div className="Wrong-bg"></div>
                                 <div className="Wrong-text ms-2">Wrong</div>
                              </div>
                              <div className='ms-3 displaying-flexing'>
                                 <div className="right-bg"></div>
                                 <div className="Wrong-text ms-2">Right</div>
                              </div>
                              <div className='ms-3 displaying-flexing'>
                                 <div className="correct-bg"></div>
                                 <div className="correct-text ms-2">Correct</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-12" style={{ marginTop: "60px" }}>
                  <div className="row">
                     <div className={`${exams?.examtypesid == 1 ? "col-md-12 col-lg-12 col-12 my-lg-2 mb-md-6" : "col-md-12 col-lg-9 col-12 my-lg-2 mb-md-6"}`}>
                        <div className="card pt-2 pb-0 px-2" style={{ position: "relative" }} >
                           <div className="card d-flex justify-content-start align-items-center pt-3 px-2 flex-row main_container_exam_section overflow-none pb-3">
                              <span style={{ marginBottom: "0px", borderRight: "1px solid #ede4e4", paddingRight: "10px" }}>Section</span>

                              {
                                 exams?.examsections.map((item: any, index: number) => {
                                    if (activeSection == item?.id) {
                                       return <span key={item?.id} className="package_exam_section_button_active" style={{ marginBottom: "0px" }} onClick={async () => {
                                          if (activeSection != item?.id) {
                                             let allSectionIds = exams?.examsections?.map((item: any) => item?.id)
                                             // let indexOfActive = allSectionIds?.indexOf(activeSection)
                                             let indexOfCurr = allSectionIds?.indexOf(item?.id)

                                             setActiveSection(item?.id)
                                             setpassageIndex(0)
                                             // setSelectedQuestions(item?.questions[0]?.id)
                                             let allQuestionBankIds = item?.questions?.map((item: any) => item?.question_bank_id)
                                             setSectionQuestions(questions?.filter((item: any) => {
                                                return allQuestionBankIds?.includes(item?.id)
                                             }))
                                             // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                             setQuestionNumber(0)
                                             if (indexOfCurr == 0 || indexOfCurr == 1) {
                                                setMemoryTest(true)
                                             } else {
                                                setMemoryTest(false)
                                             }
                                          }

                                       }}>
                                          <span style={{ fontSize: "12px" }}>{item?.section_name}</span>
                                          <span style={{ marginLeft: "2px", marginTop: "-2px" }}><IoPlayCircleOutline style={{ transform: "scale(1)" }} /></span>
                                       </span>
                                    } else {
                                       return <span key={item?.id} className="package_exam_section_button_done" style={{ marginBottom: "0px" }} onClick={async () => {
                                          if (activeSection != item?.id) {
                                             let allSectionIds = exams?.examsections?.map((item: any) => item?.id)
                                             // let indexOfActive = allSectionIds?.indexOf(activeSection)
                                             let indexOfCurr = allSectionIds?.indexOf(item?.id)

                                             setActiveSection(item?.id)
                                             setpassageIndex(0)
                                             // setSelectedQuestions(item?.questions[0]?.id)
                                             let allQuestionBankIds = item?.questions?.map((item: any) => item?.question_bank_id)
                                             setSectionQuestions(questions?.filter((item: any) => {
                                                return allQuestionBankIds?.includes(item?.id)
                                             }))
                                             // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                             setQuestionNumber(0)
                                             // setMemoryTest(false)
                                             if (indexOfCurr == 0 || indexOfCurr == 1) {
                                                setMemoryTest(true)

                                             } else {
                                                setMemoryTest(false)

                                             }
                                          }
                                       }}>
                                          <span style={{ fontSize: "12px" }}>{item?.section_name}</span>
                                          <span style={{ marginLeft: "2px", marginTop: "-2px" }}><IoCheckmarkDoneCircleOutline style={{ transform: "scale(1)" }} /></span>
                                       </span>
                                    }
                                 })
                              }


                           </div>


                           {exams?.examtypesid != 1 && <div className="card my-2  py-1 px-2">
                              <div className="exam_start_question_section_timer_container">
                                 <div className="exam_start_question_section_timer_section1_heading">
                                    <h6>Question No. {questionNumber + 1}</h6>
                                 </div>
                                 <div className="exam_start_question_section_timer_section2">
                                    <div className="exam_start_question_section_timer_section2_marks">
                                       <span className="exam_start_question_section_timer_section2_heading">Marks</span>
                                       <div >
                                          <span className="exam_start_question_section_timer_section2_marks_positive">+{sectionQuestions[questionNumber]?.marks?.marks}</span>
                                          {sectionQuestions[questionNumber]?.marks?.negative_marks > 0 && <span className="exam_start_question_section_timer_section2_marks_negative">-{sectionQuestions[questionNumber]?.marks?.negative_marks}</span>}
                                       </div>
                                    </div>
                                    {/* <div className="exam_start_question_section_timer_section2_marks">
                                                            <span className="exam_start_question_section_timer_section2_heading">Time</span>
                                                            <div>
                                                               <span className="exam_start_question_section_timer_section2_time">{formatTime(questionSeconds)}</span>
                                                            </div>
                                                        </div> */}
                                    <div className="exam_start_question_section_timer_section2_marks">
                                       <span className="exam_start_question_section_timer_section2_heading">Language</span>
                                       <div>
                                          <span className="exam_start_question_section_timer_section2_language">{language}</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>}





                           {!memoryTest && exams?.examtypesid == 1 && sectionQuestions[passageIndex]?.passage_bank_id && sectionQuestions[passageIndex]?.passage_bank_id != undefined && sectionQuestions[passageIndex]?.passage_bank_id != null && <div className="row gy-2 mx-1 mb-5">
                              <div className="col-12">
                                 {Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))
                                    .slice(passageIndex, passageIndex + 1)
                                    .map((uniPsg: any) => {
                                       const filteredQuestions = sectionQuestions?.filter(
                                          (filPas: any) => filPas?.passage_bank_id === uniPsg
                                       );

                                       // ✅ Find passage only once based on language preference
                                       const passageLanguage =
                                          filteredQuestions?.[0]?.tblpassage_bank?.passages?.find(
                                             (item4: any) => item4?.language === language
                                          ) ||
                                          filteredQuestions?.[0]?.tblpassage_bank?.passages?.find(
                                             (item4: any) => item4?.language === "English"
                                          );

                                       if (!passageLanguage) return null;

                                       return (
                                          <div key={uniPsg?.id} className="d-flex justify-content-between display-blocks">
                                             {/* ✅ Single col-6 for passage */}
                                             <div className="col-lg-6 col-md-12">
                                                <div className='parent-scrolling'>
                                                   <div
                                                      key={passageLanguage?.id}
                                                      className="preview image-scrolling"
                                                      dangerouslySetInnerHTML={{
                                                         __html: passageLanguage?.passage,
                                                      }}
                                                   />
                                                </div>
                                             </div>

                                             {/* ✅ Single col-5 for all questions */}
                                             <div className="col-lg-5 col-md-12">
                                                <div className='parent-scrolling option-custom-height'>
                                                   {filteredQuestions.map((ques: any, indd: number) => {
                                                      // ✅ Find question in the preferred language first → fallback to English if not available
                                                      const questionLanguage =
                                                         ques?.questions?.find(
                                                            (item4: any) => item4?.language === language
                                                         ) ||
                                                         ques?.questions?.find(
                                                            (item4: any) => item4?.language === "English"
                                                         );

                                                      if (!questionLanguage) return null;

                                                      return (
                                                         <div className='border-shadow flex-wrap postion-relative' key={ques?.id}>
                                                            {/* ✅ Render Question */}
                                                            <div
                                                               key={questionLanguage?.id}
                                                               style={{
                                                                  display: "flex",
                                                                  alignItems: "center",
                                                               }}
                                                            >
                                                               {/* {indd + 1}.{" "} */}
                                                               {sectionQuestions.findIndex((q: any) => q?.id === ques?.id) + 1}.{" "}
                                                               <div
                                                                  className="preview ms-2"
                                                                  dangerouslySetInnerHTML={{
                                                                     __html: questionLanguage?.question,
                                                                  }}
                                                               />


                                                            </div>

                                                            {/* ✅ Render Options */}
                                                            <div className=' d-flex justify-content-between ms-3 '>
                                                               {questionLanguage?.options?.map((item5: any) => {
                                                                  return (
                                                                     <div key={item5?.id}>
                                                                        <label
                                                                           style={{
                                                                              width: "100%",
                                                                              display: "flex",
                                                                              alignItems: "center",
                                                                              justifyContent: "flex-start",
                                                                              cursor: "pointer",
                                                                           }}

                                                                        >
                                                                           <span className='ms-4'
                                                                              style={{
                                                                                 width: "13px",
                                                                                 height: "13px",
                                                                                 borderRadius: "100%",
                                                                                 border: "1px solid #d6d6d6",
                                                                                 background: item5?.right_option == 1 ? result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == item5?.id) ? "green" :
                                                                                    "#2683fd" : result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == item5?.id) ? "red" : "transparent"



                                                                                 // result?.examresults?.find((item:any)=>item?.question_id==questionLanguage?.id && item?.user_ans_option_id==item5?.id) && item5?.right_option==1 ? "green":
                                                                                 // result?.examresults?.find((item:any)=>item?.question_id==questionLanguage?.id) && item5?.right_option==0?  "red" :"transparent"
                                                                                 // item5?.right_option==0? "red"                                                               

                                                                              }}
                                                                           />
                                                                           <span
                                                                              className="mx-2 preview quiz_start_option_span_inside_p"
                                                                              style={{
                                                                                 margin: "0px 3px", color: item5?.right_option == 1 ? result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == item5?.id) ? "green" :
                                                                                    "#2683fd" : result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == item5?.id) ? "red" : "black"
                                                                              }}
                                                                              dangerouslySetInnerHTML={{
                                                                                 __html: item5?.option,
                                                                              }}
                                                                           />
                                                                        </label>
                                                                     </div>
                                                                  );
                                                               })}
                                                               <div className='ms-2'>
                                                                  <button className='postion-absolute bg-none' onClick={async () => {
                                                                     try {
                                                                        const { data } = await saveExamQuestion({
                                                                           userid: getAuthenticatedUserData()?.id,
                                                                           question_id: questionLanguage?.id,
                                                                           option_id: result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id)?.user_ans_option_id || null,
                                                                           passage_id: passageLanguage ? passageLanguage?.id : null
                                                                        })
                                                                        if (data?.success) {
                                                                           SuccessMessage(data?.message)
                                                                           getAllSavedQues()
                                                                        } else {
                                                                           ErrorMessage(data?.message)
                                                                        }
                                                                     } catch (err) {
                                                                        ErrorMessage("Something went wrong")
                                                                     }
                                                                  }}>
                                                                     {
                                                                        savedQues?.includes(questionLanguage?.id) ? <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m19.25 1.25h-14.5a1.5 1.5 0 0 0 -1.5 1.5v17.25a1.72 1.72 0 0 0 1 1.56 1.66 1.66 0 0 0 .78.19 1.77 1.77 0 0 0 1-.35l5.35-4a1 1 0 0 1 1.2 0l5.35 4a1.75 1.75 0 0 0 2.8-1.4v-17.25a1.5 1.5 0 0 0 -1.48-1.5z" /></g></svg> : <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m5 21.75a1.81 1.81 0 0 1 -.78-.18 1.74 1.74 0 0 1 -1-1.57v-17a1.76 1.76 0 0 1 1.78-1.75h14a1.76 1.76 0 0 1 1.75 1.75v17a1.75 1.75 0 0 1 -2.75 1.4l-5.8-4.35a.24.24 0 0 0 -.3 0l-5.85 4.35a1.77 1.77 0 0 1 -1.05.35zm0-19a.25.25 0 0 0 -.25.25v17a.24.24 0 0 0 .14.22.23.23 0 0 0 .26 0l5.85-4.37a1.77 1.77 0 0 1 2.1 0l5.8 4.35a.23.23 0 0 0 .26 0 .24.24 0 0 0 .14-.22v-16.98a.25.25 0 0 0 -.3-.25z" /></g></svg>

                                                                     }
                                                                  </button >
                                                               </div>
                                                            </div>
                                                         </div>
                                                      );
                                                   })}
                                                </div>
                                             </div>
                                          </div>
                                       );
                                    })}
                              </div>




                           </div>}




                           {/* {exams?.examtypesid != 1 && sectionQuestions[questionNumber]?.passage_bank_id && sectionQuestions[questionNumber]?.passage_bank_id != undefined && sectionQuestions[questionNumber]?.passage_bank_id != null && <div className="row gy-2 mx-1 mb-5" style={{ maxHeight: "52vh", overflowY: "scroll", boxSizing: "border-box", paddingBottom: "100px" }}>
                              <div className='col-7'>

                                 {
                                    sectionQuestions[questionNumber]?.passage_bank_id != "" &&
                                    sectionQuestions[questionNumber]?.tblpassage_bank?.passages?.map((item4: any) => {
                                       return language == item4?.language && <div key={item4?.id} className="preview" dangerouslySetInnerHTML={{ __html: `${item4?.passage}` }} />
                                    })
                                 }

                              </div>
                              <div style={{ maxHeight: "1000px", width: "0px", padding: "1px", background: "black", borderRadius: "2px", marginLeft: "1px", marginRight: "1px" }}></div>
                              <div className="col-4">
                                 {
                                    sectionQuestions[questionNumber]?.questions?.map((item4: any) => {
                                       return language == item4?.language && <div key={item4?.id} className="preview" dangerouslySetInnerHTML={{ __html: `${item4?.question}` }} />
                                    })
                                 }
                                 {
                                    sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.options?.map((item5: any) => {
                                       return <div key={item5?.id} className="">
                                          <label style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer" }} onClick={() => {

                                          }}>
                                             {
                                                item5?.right_option == 1 ?
                                                   <span style={{ width: "13px", height: "13px", borderRadius: "100%", border: "1px solid #2683fd", background: "#2683fd" }}></span> :
                                                   <span style={{ width: "13px", height: "13px", borderRadius: "100%", border: "1px solid #2683fd" }}></span>

                                             }


                                             <span className="mx-2 preview quiz_start_option_span_inside_p" style={{ margin: "0px 3px" }} dangerouslySetInnerHTML={{ __html: `${item5?.option}` }} />
                                          </label>
                                       </div>
                                    })

                                 }
                              </div>
                           </div>} */}


                           {
                              memoryTest && <div className='parent-scrolling '><div className="preview p-2 image-scrolling" dangerouslySetInnerHTML={{ __html: `${exams?.examsections?.find((item: any) => item?.id == activeSection)?.memoryQuestion}` }} /></div>
                           }
                           {/* {
                              memoryTest && <div className='parent-scrolling '><div className="preview p-2 image-scrolling" dangerouslySetInnerHTML={{ __html: `${exams?.examsections?.find((item: any) => item?.id == activeSection)?.memoryQuestion}` }} /></div>
                           } */}




                           {!memoryTest && exams?.examtypesid == 1 && (!sectionQuestions[passageIndex]?.passage_bank_id || sectionQuestions[passageIndex]?.passage_bank_id == undefined || sectionQuestions[passageIndex]?.passage_bank_id == null) && <div className="row gy-2 mx-1 mb-5" style={{ maxHeight: "72vh", overflowY: "scroll", boxSizing: "border-box", paddingBottom: "100px" }}>
                              <div className="">
                                 {
                                    sectionQuestions?.map((ques: any, secQueIndex: number) => {
                                       // ✅ Get question in preferred language or fallback to English
                                       const questionLanguage =
                                          ques?.questions?.find((item: any) => item?.language === language) ||
                                          ques?.questions?.find((item: any) => item?.language === "English");

                                       if (!questionLanguage) return null;

                                       return (
                                          <div className='border-shadow flex-wrap postion-relative'
                                             key={ques?.id}
                                             style={{
                                                display: "flex",
                                                alignItems: "center",
                                             }}
                                          >
                                             <div className='d-flex width-60-web'>
                                                {secQueIndex + 1}.{" "}
                                                <div
                                                   className="preview mall-Question-flex  w-75"
                                                   dangerouslySetInnerHTML={{
                                                      __html: questionLanguage?.question,
                                                   }}
                                                />

                                                <button className='postion-absolute bg-none' onClick={async () => {
                                                   try {
                                                      const { data } = await saveExamQuestion({
                                                         userid: getAuthenticatedUserData()?.id,
                                                         question_id: questionLanguage?.id,
                                                         option_id: result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id)?.user_ans_option_id || null,
                                                         passage_id: null
                                                      })
                                                      if (data?.success) {
                                                         SuccessMessage(data?.message)
                                                         getAllSavedQues()
                                                      } else {
                                                         ErrorMessage(data?.message)
                                                      }
                                                   } catch (err) {
                                                      ErrorMessage("Something went wrong")
                                                   }
                                                }}>
                                                   {
                                                      savedQues?.includes(questionLanguage?.id) ? <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m19.25 1.25h-14.5a1.5 1.5 0 0 0 -1.5 1.5v17.25a1.72 1.72 0 0 0 1 1.56 1.66 1.66 0 0 0 .78.19 1.77 1.77 0 0 0 1-.35l5.35-4a1 1 0 0 1 1.2 0l5.35 4a1.75 1.75 0 0 0 2.8-1.4v-17.25a1.5 1.5 0 0 0 -1.48-1.5z" /></g></svg> : <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m5 21.75a1.81 1.81 0 0 1 -.78-.18 1.74 1.74 0 0 1 -1-1.57v-17a1.76 1.76 0 0 1 1.78-1.75h14a1.76 1.76 0 0 1 1.75 1.75v17a1.75 1.75 0 0 1 -2.75 1.4l-5.8-4.35a.24.24 0 0 0 -.3 0l-5.85 4.35a1.77 1.77 0 0 1 -1.05.35zm0-19a.25.25 0 0 0 -.25.25v17a.24.24 0 0 0 .14.22.23.23 0 0 0 .26 0l5.85-4.37a1.77 1.77 0 0 1 2.1 0l5.8 4.35a.23.23 0 0 0 .26 0 .24.24 0 0 0 .14-.22v-16.98a.25.25 0 0 0 -.3-.25z" /></g></svg>

                                                   }
                                                </button >
                                             </div>



                                             {/* ✅ Render Options */}
                                             <div className='d-flex width-40-web'>
                                                {questionLanguage?.options?.map((option: any) => {

                                                   return (
                                                      <div key={option?.id}>
                                                         <label
                                                            style={{
                                                               width: "100%",
                                                               display: "flex",
                                                               alignItems: "center",
                                                               justifyContent: "flex-start",
                                                               cursor: "pointer",
                                                            }}
                                                         >
                                                            {/* ✅ Option Highlight */}
                                                            <span
                                                               style={{
                                                                  width: "14px",
                                                                  height: "14px",
                                                                  borderRadius: "100%",
                                                                  border: "1px solid #d6d6d6",
                                                                  background: option?.right_option == 1 ? result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == option?.id) ? "green" :
                                                                     "#2683fd" : result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == option?.id) ? "red" : "transparent"

                                                               }}
                                                            />
                                                            <span
                                                               className="mx-2 preview quiz_start_option_span_inside_p"
                                                               style={{
                                                                  margin: "0px 3px", color: option?.right_option == 1 ? result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == option?.id) ? "green" :
                                                                     "#2683fd" : result?.examresults?.find((item: any) => item?.question_id == questionLanguage?.id && item?.user_ans_option_id == option?.id) ? "red" : "black"
                                                               }}
                                                               dangerouslySetInnerHTML={{
                                                                  __html: option?.option,
                                                               }}
                                                            />
                                                         </label>
                                                      </div>
                                                   );
                                                })}
                                             </div>
                                          </div>
                                       );
                                    })
                                 }
                              </div>
                           </div>}











                           {/* {exams?.examtypesid != 1 && (!sectionQuestions[questionNumber]?.passage_bank_id || sectionQuestions[questionNumber]?.passage_bank_id == undefined || sectionQuestions[questionNumber]?.passage_bank_id == null) && <div className="row gy-2 mx-1 mb-5" style={{ maxHeight: "52vh", overflowY: "scroll", boxSizing: "border-box", paddingBottom: "100px" }}>
                              <div>

                                 {
                                    sectionQuestions[questionNumber]?.questions?.map((item4: any) => {
                                       return language == item4?.language && <div key={item4?.id} className="preview" dangerouslySetInnerHTML={{ __html: `${item4?.question}` }} />
                                    })
                                 }

                              </div>
                              <div className="">
                                 {
                                    sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.options?.map((item5: any) => {
                                       return <div key={item5?.id} className="">
                                          <label style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer" }} onClick={() => {
                                          }}>

                                             {
                                                item5?.right_option == 1 ?
                                                   <span style={{ width: "13px", height: "13px", borderRadius: "100%", border: "1px solid #2683fd", background: "#2683fd" }}></span> :
                                                   <span style={{ width: "13px", height: "13px", borderRadius: "100%", border: "1px solid #2683fd" }}></span>

                                             }


                                             <span className="mx-2 preview quiz_start_option_span_inside_p" style={{ margin: "0px 3px" }} dangerouslySetInnerHTML={{ __html: `${item5?.option}` }} />
                                          </label>
                                       </div>
                                    })

                                 }
                              </div>
                           </div>} */}



















                           {/* <div className="row gy-2 mx-1 mb-5" style={{ maxHeight: "52vh", overflowY: "scroll", boxSizing: "border-box", paddingBottom: "100px" }}>
                              <div>
                                 {
                                    sectionQuestions[questionNumber]?.questions?.map((item4: any) => {
                                       return language == item4?.language && <div key={item4?.id} className="preview" dangerouslySetInnerHTML={{ __html: `${item4?.question}` }} />
                                    })
                                 }

                              </div>
                              <div className="">
                                 {
                                    sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.options?.map((item5: any) => {
                                       return <div key={item5?.id} className="">
                                          <label style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                             {
                                                item5?.right_option == 1 ?
                                                   <span style={{ width: "13px", height: "13px", borderRadius: "100%", border: "1px solid #2683fd", background: "#2683fd" }}></span> :
                                                   <span style={{ width: "13px", height: "13px", borderRadius: "100%", border: "1px solid #2683fd" }}></span>

                                             }
                                             <span className="mx-2 preview quiz_start_option_span_inside_p" style={{ margin: "0px 3px" }} dangerouslySetInnerHTML={{ __html: `${item5?.option}` }} />
                                          </label>
                                       </div>
                                    })
                                 }
                              </div>
                           </div> */}
                        </div>
                     </div>

                     <div className="exam_section_main_contaent_fixed_botton_section">


                        <div>
                           {memoryTest && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px", marginLeft: "10px" }} onClick={() => {
                              if (memoryTest) {
                                 setMemoryTest(false)
                              }
                           }}>Skip Go Question</button>}
                           {!memoryTest && <div style={{ marginLeft: "auto" }}>
                              {<button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px" }} onClick={() => {
                                 router.push("/dashboard/home")
                              }}>Back to Series</button>}
                           </div>}
                        </div>


                        <div>
                           {!memoryTest && exams?.examtypesid == 1 && <div>
                              {((exams?.examsections[0]?.id == activeSection) || (exams?.examsections[1]?.id == activeSection)) && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px" }} onClick={() => {
                                 setMemoryTest(true)
                              }}>Back to Memory</button>}
                              {passageIndex > 0 && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px" }} onClick={() => {
                                 if (passageIndex > 0) {
                                    setpassageIndex((pre) => pre - 1)
                                 }
                              }}>Previous</button>}
                              {passageIndex < Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1 && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px", marginLeft: "10px" }} onClick={() => {
                                 if (passageIndex < Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1) {
                                    setpassageIndex((pre) => pre + 1)
                                 }
                              }}>Next</button>}
                              {passageIndex < sectionQuestions?.length - 1 && !sectionQuestions[0]?.passage_bank_id && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px", marginLeft: "10px" }}>Next</button>}
                           </div>}
                        </div>



                     </div>





                     {exams?.examtypesid != 1 && <div className="col-lg-3 col-12 my-6 my-lg-2">
                        <div className="card py-2 px-2" style={{ minHeight: "88vh", position: "relative" }}>
                           <div>
                              <img src={getAuthenticatedUserData()?.profile_image ? getAuthenticatedUserData()?.profile_image : "/img/avatar.svg"} alt="Avatar" style={{ width: "30px", height: "30px", borderRadius: "100%", marginRight: "10px", border: "0.3px solid #ede4e4" }} />
                              <span>{getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname}</span>
                           </div>
                           <div className="mt-3">
                              <span style={{ marginRight: "5px" }}><img src="/img/answered.png" alt="Not Visited" style={{ width: "20px" }} /> <span style={{ fontSize: "13px", marginLeft: "4px" }}>Answered</span></span>
                              <span style={{ marginRight: "5px" }}><img src="/img/not-answered.png" alt="Not Visited" style={{ width: "20px" }} /><span style={{ fontSize: "13px", marginLeft: "4px" }}>Not Answered</span></span>
                              <span style={{ marginRight: "5px" }}><img src="/img/marked.png" alt="Not Visited" style={{ width: "20px" }} /><span style={{ fontSize: "13px", marginLeft: "4px" }}>Marked</span></span> <br />
                              <span style={{ marginRight: "5px" }}><img src="/img/not-visited.png" alt="Not Visited" style={{ width: "20px" }} /><span style={{ fontSize: "13px", marginLeft: "4px" }}>Not Visited</span></span>
                              <span style={{ marginRight: "5px" }}><img src="/img/marked-answered.png" alt="Not Visited" style={{ width: "20px" }} /><span style={{ fontSize: "13px", marginLeft: "4px" }}>Mark & Answered</span></span>
                           </div>

                           <div className="card my-3 py-2 px-3">
                              <div>
                                 <span style={{ fontSize: "15px" }}>Section:-</span>
                                 <span style={{ fontSize: "13px", marginLeft: "20px" }}>
                                    {
                                       exams?.examsections.map((item: any, index: number) => {
                                          if (activeSection == item?.id) {
                                             return `${item?.section_name}`
                                          }
                                       })
                                    }
                                 </span>
                              </div>
                           </div>

                           <div className="card py-2 px-3">
                              <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
                                 {
                                    sectionQuestions?.map((item2: any, index: number) => {
                                       if (item2?.id == sectionQuestions[questionNumber]?.id) {
                                          return <span key={item2?.id} className="active_exam_questions_show" onClick={() => {
                                             setQuestionNumber(index)
                                          }}>{index + 1}</span>
                                       } else {
                                          return <span key={item2?.id} className="not_visited_exam_questions_not_show" onClick={() => {
                                             setQuestionNumber(index)
                                          }}>{index + 1}</span>
                                       }

                                    })
                                 }
                              </div>
                           </div>

                           <div className="exam_section_sidebar_fixed_botton_section" style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                              <button className="btn btn-outline-primary btn-sm my-1" style={{ width: "100px", padding: "5px 6px" }} onClick={async () => {
                                 if (questionNumber < sectionQuestions?.length - 1) {
                                    setQuestionNumber((pre) => pre + 1)
                                 }
                              }}>Next</button>

                              <button className="btn btn-outline-primary btn-sm my-1 ms-2" style={{ padding: "5px 6px" }} onClick={async () => {
                                 router.push("/dashboard/home")
                              }}>Back to Home</button>
                           </div>
                        </div>
                     </div>}
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default ExamSolution