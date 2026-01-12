import React, { Fragment, useEffect, useState } from 'react'
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkPackageIsAvailableForUser, clearResponseDeleteQuestionAndAnswer, findExamSectionLeftTime, findTotalTimeTakenForExamSection, findTotalTimeTakenForExamSectionSectionWize, getExamDetailWithQuestions, getExamQuestionStatus, getSectionReport, setExamSectionTimeAndQuestionTime, submitExam, submitQuestionAnswerForExam, updateExamSectionTimeStatusOnEverySeconds, updateExamSectionTimeStatusOnEverySecondsSecionWise, clearResponseSection } from 'components/request/request';
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
import Swal from 'sweetalert2';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import InactiveStatus from 'components/dashboardComponent/common/inactiveStatus/InactiveStatus';

const ExamStart = () => {
   const router = useRouter()
   const dispatch = useDispatch()
   const [quizTimerSeconds, setQuizTimerSeconds] = useState<number>(60)
   const [instructionTimerSeconds, setInstructionTimerSeconds] = useState<number>(60)
   const [memoryTestTimer, setMemoryTestTimer] = useState<number>(60)

   const [passageIndex, setpassageIndex] = useState(0)
   const [questionNumber, setQuestionNumber] = useState<number>(0)
   const [activeSection, setActiveSection] = useState<any>(-1)
   const [selectedQuestions, setSelectedQuestions] = useState<any>(-1)
   const [userAnsdata, setUserAnsData] = useState<any[]>([])
   const { exams, questions, language } = useSelector((state: any) => state.reducerSlice)
   const [sectionQuestions, setSectionQuestions] = useState<any[]>([])
   const [sectionReportStatus, setSectionReportStatus] = useState<boolean>(false)
   const [isFullScreen, setIsFullScreen] = useState(false);
   const [reportData, setReportData] = useState<any>()
   const [open, setOpen] = useState(false)
   const [memoryTest, setMemoryTest] = useState(false)
   const [authorized, setAuthorized] = useState(true)
   const [loading, setLoading] = useState(true)
   const [sectionInstruction, setSectionInstruction] = useState(true)
   function removeHTML(str: string) {
      var tmp = document.createElement('DIV')
      tmp.innerHTML = str
      return tmp.textContent || tmp.innerText || ''
   }
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
   const checkPackageAvailability = async () => {
      try {
         if (router && router?.query?.packageId && router.query.subpackageId && router.query.examId) {
            let authUser = getAuthenticatedUserData()
            let packageId = router.query.packageId
            let subpackageId = router.query.subpackageId
            let examId = router.query.examId
            const { data } = await checkPackageIsAvailableForUser(packageId, subpackageId, examId, authUser?.id)
            if (!data?.success) {
               setAuthorized(false)
               setTimeout(() => {
                  setLoading(false)
               }, 500)
            } else {
               if (questions?.length <= 0) {
                  let examId = router.query.examId
                  let examKey = router.query.examKey
                  const { data } = await getExamDetailWithQuestions(examId, examKey)
                  if (data?.success) {
                     if (data?.questions?.length <= 0) {
                        setAuthorized(false)
                        setTimeout(() => {
                           setLoading(false)
                        }, 500)
                     } else {

                        dispatch(setExamDetail(data?.exam))
                        setActiveSection(data?.exam?.examsections[0]?.id)

                        if (removeHTML(data?.exam?.examsections[0]?.instruction)?.length > 0) {
                           setSectionInstruction(true)
                           setInstructionTimerSeconds(Number(data?.exam?.examsections[0]?.instruction_duration) * 60)
                        }
                        if (data?.exam?.examsections[0]?.memoryTest == 1) {
                           setMemoryTestTimer(Number(data?.exam?.examsections[0]?.memory_duration) * 60)
                        }
                        if (data?.exam?.section_wise_time == 0) {
                           const data2 = await findTotalTimeTakenForExamSection({
                              userid: getAuthenticatedUserData()?.id,
                              packageid: router.query.packageId,
                              subpackageid: router.query.subpackageId,
                              examid: router.query.examId,
                              bundleid: null,
                           })
                           if (data2?.data?.success) {
                              setQuizTimerSeconds(Number(data?.exam?.exam_duration) * 60 - data2?.data?.data?.time_taken)
                           } else {
                              setQuizTimerSeconds(Number(data?.exam?.exam_duration) * 60)
                           }
                        } else {
                           const data2 = await findTotalTimeTakenForExamSectionSectionWize({
                              userid: getAuthenticatedUserData()?.id,
                              packageid: router.query.packageId,
                              subpackageid: router.query.subpackageId,
                              examid: router.query.examId,
                              bundleid: null,
                              examsectionid: data?.exam?.examsections[0]?.id
                           })
                           if (data2?.data?.success) {
                              setQuizTimerSeconds(Number(data?.exam?.examsections[0]?.duration) * 60 - data2?.data?.data?.time_taken)
                           } else {
                              setQuizTimerSeconds(Number(data?.exam?.examsections[0]?.duration) * 60)
                           }
                        }

                        // setSelectedQuestions(data?.exam?.examsections[0]?.questions[0]?.id)
                        let allQuestionBankIds = data?.exam?.examsections[0]?.questions?.map((item: any) => item?.question_bank_id)
                        setSectionQuestions(data?.questions?.filter((item: any) => {
                           return allQuestionBankIds?.includes(item?.id)
                        }))
                        dispatch(setExamQuestions(data?.questions))
                        setAuthorized(true)
                        setTimeout(() => {
                           setLoading(false)
                        }, 300)
                        // setQuizTimerMinutes(Math.floor(Number(data?.exam?.examsections[0]?.duration))-1)
                        // setQuizTimerSeconds(Number(data?.exam?.examsections[0]?.duration)*60)
                     }
                  } else {
                     setAuthorized(false)
                     setTimeout(() => {
                        setLoading(false)
                     }, 500)
                  }
               } else {
                  if (removeHTML(exams?.examsections[0]?.instruction)?.length > 0) {
                     setSectionInstruction(true)
                     setInstructionTimerSeconds(Number(exams?.examsections[0]?.instruction_duration) * 60)
                  }
                  if (exams?.examsections[0]?.memoryTest == 1) {
                     setMemoryTestTimer(Number(exams?.examsections[0]?.memory_duration) * 60)
                  }
                  if (exams?.section_wise_time == 0) {
                     const { data } = await findTotalTimeTakenForExamSection({
                        userid: getAuthenticatedUserData()?.id,
                        packageid: router.query.packageId,
                        subpackageid: router.query.subpackageId,
                        examid: router.query.examId,
                        bundleid: null,
                     })
                     if (data?.success) {
                        setQuizTimerSeconds(Number(exams?.exam_duration) * 60 - data?.data?.time_taken)
                     } else {
                        setQuizTimerSeconds(Number(exams?.exam_duration) * 60)
                     }
                  } else {
                     const data2 = await findTotalTimeTakenForExamSectionSectionWize({
                        userid: getAuthenticatedUserData()?.id,
                        packageid: router.query.packageId,
                        subpackageid: router.query.subpackageId,
                        examid: router.query.examId,
                        bundleid: null,
                        examsectionid: exams?.examsections[0]?.id
                     })
                     if (data2?.data?.success) {
                        setQuizTimerSeconds(Number(exams?.examsections[0]?.duration) * 60 - data2?.data?.data?.time_taken)
                     } else {
                        setQuizTimerSeconds(Number(exams?.examsections[0]?.duration) * 60)
                     }
                     // setQuizTimerSeconds(Number(exams?.examsections[0]?.duration)*60)
                  }
                  setActiveSection(exams?.examsections[0]?.id)
                  let allQuestionBankIds = exams?.examsections[0]?.questions?.map((item: any) => item?.question_bank_id)
                  setSectionQuestions(questions?.filter((item: any) => {
                     return allQuestionBankIds?.includes(item?.id)
                  }))

                  setAuthorized(true)
                  setTimeout(() => {
                     setLoading(false)
                  }, 500)
               }
            }
         }
      } catch (err) {
         setAuthorized(false)
         setTimeout(() => {
            setLoading(false)
         }, 500)
      }
   }
   const getExamQuestionStatusData = async () => {
      try {
         let packageid = router.query.packageId
         let subpackageid = router.query.subpackageId
         let examid = router.query.examId
         let userid = getAuthenticatedUserData()?.id
         let bundleid = null
         const { data } = await getExamQuestionStatus({
            packageid, subpackageid, bundleid, examid, userid
         })
         if (data?.success) {
            //    console.log(data?.data)
            // let latestSection = data?.data.sort((a: any, b: any) => b.id - a.id)[0]?.examsectionid;
            //   console.log(latestSection)
            setUserAnsData(data?.data)
            // if (latestSection) {
            //    setActiveSection(latestSection)
            //    setpassageIndex(0)
            //    // setSelectedQuestions(item?.questions[0]?.id)
            //    let sectionDetail = exams?.examsections?.find((itemD: any) => itemD?.id == latestSection)
            //    if (removeHTML(sectionDetail?.instruction)?.length > 0) {
            //       setSectionInstruction(true)
            //       setInstructionTimerSeconds(Number(sectionDetail?.instruction_duration) * 60)
            //    }
            //    let allQuestionBankIds = exams?.examsections?.find((itemD: any) => itemD?.id == latestSection)?.questions?.map((item: any) => item?.question_bank_id)
            //    setSectionQuestions(questions?.filter((item: any) => {
            //       return allQuestionBankIds?.includes(item?.id)
            //    }))
            //    const data2 = await findTotalTimeTakenForExamSectionSectionWize({
            //       userid: getAuthenticatedUserData()?.id,
            //       packageid: router.query.packageId,
            //       subpackageid: router.query.subpackageId,
            //       examid: router.query.examId,
            //       bundleid: null,
            //       examsectionid: latestSection
            //    })
            //    if (data2?.data?.success) {
            //       setQuizTimerSeconds(Number(exams?.examsections?.find((item: any) => item?.id == latestSection)?.duration) * 60 - data2?.data?.data?.time_taken)
            //       setTimeout(() => {
            //          setLoading(false)
            //       }, 500)
            //    } else {
            //       setQuizTimerSeconds(Number(exams?.examsections?.find((item: any) => item?.id == latestSection)?.duration) * 60)
            //       setTimeout(() => {
            //          setLoading(false)
            //       }, 500)
            //    }
            //    // setQuizTimerSeconds(Number(sectionDetail?.duration) * 60)

            //    // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
            //    setQuestionNumber(0)
            //    setSectionReportStatus(false)
            //    setReportData(null)
            //    setTimeout(() => {
            //       setLoading(false)
            //    }, 500)
            // }

         }
      } catch (err) {

      }
   }
   useEffect(() => {
      checkPackageAvailability()
      if (exams && questions?.length > 0)
         getExamQuestionStatusData()
   }, [router, useSelector])



   useEffect(() => {
      const handleBeforeUnload = (event: any) => {
         // Cancel the event to prevent the browser from closing the page immediately
         event.preventDefault();
         // Chrome requires returnValue to be set
         event.returnValue = '';
         // Display the popup to the user
         alert('Are you sure you want to refresh the page? Your changes may be lost.');
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
         // Cleanup: remove the event listener when the component is unmounted
         window.removeEventListener('beforeunload', handleBeforeUnload);
      };
   }, []); // Empty dependency array ensures the effect runs only once after the component mounts




   const updateTimeStatusForActiveExamSection = async (time: number) => {
      try {
         const { data } = await updateExamSectionTimeStatusOnEverySeconds({
            userid: getAuthenticatedUserData()?.id,
            packageid: router.query.packageId,
            subpackageid: router.query.subpackageId,
            examid: router.query.examId,
            bundleid: null,
            exam_section_time_taken: time
         })
      } catch (err) {

      }
   }
   const updateTimeStatusForActiveExamSectionSectionWise = async (time: number) => {
      try {
         const { data } = await updateExamSectionTimeStatusOnEverySecondsSecionWise({
            userid: getAuthenticatedUserData()?.id,
            packageid: router.query.packageId,
            subpackageid: router.query.subpackageId,
            examid: router.query.examId,
            bundleid: null,
            examsectionid: activeSection,
            exam_section_time_taken: time
         })
      } catch (err) {

      }
   }

   useEffect(() => {
      if (authorized && !loading && !sectionInstruction && !sectionReportStatus && !memoryTest) {
         let intervalId: any;
         intervalId = setInterval(async () => {
            setQuizTimerSeconds((pre) => {
               if (pre <= 1) {
                  clearInterval(intervalId);
                  if (exams?.section_wise_time == 0) {
                     updateTimeStatusForActiveExamSection(Number(exams?.exam_duration) * 60)
                  } else {
                     updateTimeStatusForActiveExamSectionSectionWise(Number(exams?.examsections?.find((item: any) => item?.id == activeSection)?.duration) * 60)
                  }
                  // setOpen(true)
                  setSectionReportStatus(true)
                  let allSectionIds = exams?.examsections?.map((item: any) => item?.id)
                  let indexOfActive = allSectionIds?.indexOf(activeSection)
                  let filterIds = allSectionIds?.filter((item: any, index: number) => index <= indexOfActive)
                  getSectionReport({
                     userid: getAuthenticatedUserData()?.id,
                     bundleid: null,
                     packageid: router?.query?.packageId,
                     subpackageid: router?.query?.subpackageId,
                     examid: router?.query?.examId,
                     sectionid: filterIds
                  }).then((res) => {
                     setReportData(res?.data?.data || [])
                  }).catch((err) => {

                  })

                  // if (data?.success) {
                  //    setReportData(data?.data)
                  //    setOpen(false)
                  // }

                  return 0; // Ensure timer stops at 0
               } else {
                  if (exams?.section_wise_time == 0) {
                     updateTimeStatusForActiveExamSection(Number(exams?.exam_duration) * 60 - quizTimerSeconds)
                  } else {
                     updateTimeStatusForActiveExamSectionSectionWise(Number(exams?.examsections?.find((item: any) => item?.id == activeSection)?.duration) * 60 - quizTimerSeconds)
                  }
                  return pre - 1;
               }
            });
         }, 1000); // Update elapsed time every second

         return () => clearInterval(intervalId); // Cleanup interval when component unmounts or is updated
      }

   }, [quizTimerSeconds, authorized, loading, sectionInstruction, sectionReportStatus, memoryTest]);

   useEffect(() => {
      if (authorized && !loading && sectionInstruction && !sectionReportStatus && !memoryTest) {
         let intervalId: any;
         intervalId = setInterval(() => {
            setInstructionTimerSeconds(pre => {
               if (pre <= 1) {
                  clearInterval(intervalId);

                  setMemoryTest(true)
                  return 0; // Ensure timer stops at 0
               } else {
                  return pre - 1;
               }
            });
         }, 1000); // Update elapsed time every second

         return () => clearInterval(intervalId); // Cleanup interval when component unmounts or is updated
      }

   }, [quizTimerSeconds, authorized, loading, sectionInstruction, sectionReportStatus, memoryTest]);

   useEffect(() => {
      if (authorized && !loading && sectionInstruction && !sectionReportStatus && memoryTest) {
         let intervalId: any;
         intervalId = setInterval(() => {
            setMemoryTestTimer(pre => {
               if (pre <= 1) {
                  clearInterval(intervalId);
                  setSectionInstruction(false)
                  setMemoryTest(false)
                  return 0; // Ensure timer stops at 0
               } else {
                  return pre - 1;
               }
            });
         }, 1000); // Update elapsed time every second

         return () => clearInterval(intervalId); // Cleanup interval when component unmounts or is updated
      }

   }, [quizTimerSeconds, authorized, loading, sectionInstruction, sectionReportStatus, memoryTest]);



   const formatTime = (timeInSeconds: any) => {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
   };


   const setQuestionTimeAndExamSectionTime = async (payload: any, status: string) => {
      try {
         let dataPayload = {
            ...payload,
            question_status: status
         }
         const { data } = await setExamSectionTimeAndQuestionTime(dataPayload)
         if (!data?.success) {
            setAuthorized(false)
            setTimeout(() => {
               setLoading(false)
            }, 500)
         } else {
            setUserAnsData(data?.data)
            setAuthorized(true)
            setTimeout(() => {
               setLoading(false)
            }, 500)
         }
      } catch (err) {

      }
   }

   const submitQuestionAnsAnswerForExam = async (payload: any) => {
      try {
         const { data } = await submitQuestionAnswerForExam(payload)
         if (data?.success) {
            setUserAnsData(data?.data)
         }
      } catch (err) {

      }
   }


    useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      if (e.target instanceof HTMLElement) {
        const isScrollbarDrag =
          e.target.scrollHeight > e.target.clientHeight &&
          e.target === document.scrollingElement;

        if (!isScrollbarDrag) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
    };
  },)

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
            {
               loading ? <Loading /> : authorized ?
                  <div className="row">
                     <div className="col-12" style={{ position: "fixed", top: "0px", zIndex: "999" }}>
                        <div className="card py-2 px-1" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                           <div className="" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                              <div style={{ maxWidth: "130px", cursor: "pointer" }} onClick={() => {
                                 router.push("/dashboard/home")
                              }}>
                                 <img src="/img/logo-dark.png" alt="Testerika" style={{ width: "100%" }} />
                              </div>
                              <div className="d-md-none d-none d-lg-block" style={{ marginLeft: "20px" }}>
                                 <h6 style={{ marginBottom: "0px", fontSize: "14px" }}>{exams?.name}</h6>
                              </div>
                           </div>


                           <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                              <div>
                                 <h6 style={{ marginBottom: "0px", fontSize: "14px", display: "flex", justifyContent: "center", alignItems: "center" }}><span className="d-none d-md-block me-1">Time Left: </span>
                                    {(sectionInstruction && memoryTest) ? <span className="ms-1">{formatTime(memoryTestTimer)}</span> : sectionInstruction ? <span className="ms-1">{formatTime(instructionTimerSeconds)}</span> : <span className="ms-1">{formatTime(quizTimerSeconds)}</span>}
                                 </h6>
                              </div>
                              <select value={language} className="form-select py-2 ms-2" style={{ width: "200px" }} onChange={(e: any) => {
                                 dispatch(setExamLanguage(e?.target?.value))
                              }}>
                                 <option value="English">English</option>
                                 <option value="Hindi">Hindi</option>
                              </select>
                              <button className="ms-3 btn-sm d-md-none d-none d-lg-block btn btn-sm btn-outline-primary" onClick={toggleFullScreen}>
                                 {isFullScreen ? "Exit Full Screen" : "Switch Full Screen"}
                              </button>

                              <ConfirmPopup />
                           </div>
                        </div>
                     </div>

                     {sectionReportStatus ? <div>
                        {
                           reportData?.length > 0 ? reportData?.map((item: any, index: number) => {
                              return <div key={index} className="col-12" style={{ marginTop: "100px" }}>
                                 <div className="row">
                                    <div className="col-md-12 col-lg-12 col-12 my-lg-2 mb-md-6">
                                       <div className="card pt-2 pb-0 px-2" style={{ position: "relative" }} >
                                          <div className="card d-flex justify-content-start align-items-center pt-3 px-2 flex-row main_container_exam_section bg-themegs">
                                             {exams?.examsections.find((item2: any, index: number) => item2?.id == item?.section_id)?.section_name} Report
                                          </div>

                                          <div className='col-12 w-100'>
                                             <div className='overflow-x-auto inner-th-border'>
                                                <table className='w-100 table-responsive'>
                                                   <tr>
                                                      <td className='theme-bgs'>Name</td>
                                                      <td className='theme-bgs'>Total Questions</td>
                                                      <td className='theme-bgs'>Correct</td>
                                                      <td className='theme-bgs'>Incorrect</td>
                                                      <td className='theme-bgs'>Unattempted</td>
                                                      <td className='theme-bgs'>Correct Percentage</td>
                                                      <td className='theme-bgs'>Incorrect Percentage</td>
                                                      <td className='theme-bgs'>Score </td>
                                                      <td className='theme-bgs'>Time Taken</td>
                                                   </tr>

                                                   <tr>
                                                      <td>{getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname}</td>
                                                      <td>{item?.total_questions}</td>
                                                      <td>{item?.total_correct}</td>
                                                      <td>{item?.total_incorrect}</td>
                                                      <td>{item?.not_attempted}</td>
                                                      <td>{item?.correct_percentage}%</td>
                                                      <td>{item?.incorrect_percentage}%</td>
                                                      <td>{item?.total_points}</td>
                                                      <td>{(item?.total_time_taken / 60)?.toFixed(2)} Minutes</td>

                                                   </tr>
                                                </table>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           }) : <div className="col-12" style={{ marginTop: "150px" }}>
                              <div className='mb-4 text-center'>No Reports Available</div>
                           </div>
                        }



                        <div className='my-4 text-center mx-auto'>
                           {exams?.examsections[exams?.examsections?.length - 1]?.id == activeSection ? <button className='btn btn-sm btn-primary' onClick={async () => {
                              Swal.fire({
                                 title: "Are you sure?",
                                 text: "You want to submit the exam!",
                                 icon: "warning",
                                 showCancelButton: true,
                                 confirmButtonColor: "#3085d6",
                                 cancelButtonColor: "#d33",
                                 confirmButtonText: "Submit"
                              }).then(async (result: any) => {
                                 if (result.isConfirmed) {
                                    try {
                                       const { data } = await submitExam({
                                          userid: getAuthenticatedUserData()?.id,
                                          packageid: router.query.packageId,
                                          subpackageid: router.query.subpackageId,
                                          examid: router.query.examId,
                                          bundleid: null,
                                       })
                                       if (data?.success) {
                                          SuccessMessage("Exam Submitted Successfully")
                                          // router.push("/dashboard/home")
                                          router.push(`/dashboard/exams/report/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)

                                       } else {
                                          ErrorMessage(data?.message)
                                       }
                                    } catch (err) {

                                    }
                                 }
                              })
                           }}>Submit Exam</button> : <button className='btn btn-sm btn-greenish-active' onClick={async () => {
                              setLoading(true)
                              let allSectionIds = exams.examsections?.map((item: any) => item?.id)
                              let lastSection = exams?.examsections[exams?.examsections?.length - 1]?.id
                              if (activeSection != lastSection) {

                                 let findIndex = allSectionIds.indexOf(activeSection)
                                 setActiveSection(allSectionIds[findIndex + 1])
                                 setpassageIndex(0)
                                 // setSelectedQuestions(item?.questions[0]?.id)
                                 let sectionDetail = exams?.examsections?.find((itemD: any) => itemD?.id == allSectionIds[findIndex + 1])
                                 if (removeHTML(sectionDetail?.instruction)?.length > 0) {
                                    setSectionInstruction(true)
                                    setInstructionTimerSeconds(Number(sectionDetail?.instruction_duration) * 60)
                                 }
                                 let allQuestionBankIds = exams?.examsections?.find((itemD: any) => itemD?.id == allSectionIds[findIndex + 1])?.questions?.map((item: any) => item?.question_bank_id)
                                 setSectionQuestions(questions?.filter((item: any) => {
                                    return allQuestionBankIds?.includes(item?.id)
                                 }))
                                 const data2 = await findTotalTimeTakenForExamSectionSectionWize({
                                    userid: getAuthenticatedUserData()?.id,
                                    packageid: router.query.packageId,
                                    subpackageid: router.query.subpackageId,
                                    examid: router.query.examId,
                                    bundleid: null,
                                    examsectionid: allSectionIds[findIndex + 1]
                                 })
                                 if (data2?.data?.success) {
                                    setQuizTimerSeconds(Number(exams?.examsections?.find((item: any) => item?.id == allSectionIds[findIndex + 1])?.duration) * 60 - data2?.data?.data?.time_taken)
                                    setTimeout(() => {
                                       setLoading(false)
                                    }, 500)
                                 } else {
                                    setQuizTimerSeconds(Number(exams?.examsections?.find((item: any) => item?.id == allSectionIds[findIndex + 1])?.duration) * 60)
                                    setTimeout(() => {
                                       setLoading(false)
                                    }, 500)
                                 }
                                 // setQuizTimerSeconds(Number(sectionDetail?.duration) * 60)

                                 // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                 setQuestionNumber(0)
                              }
                              setSectionReportStatus(false)
                              setReportData(null)
                              setTimeout(() => {
                                 setLoading(false)
                              }, 500)
                           }}>Next Section</button>}
                        </div>

                     </div> : <div className="col-12" style={{ marginTop: "60px" }}>
                        <div className="row">
                           <div className={`${exams?.examtypesid == 1 ? "col-md-12 col-lg-12 col-12 my-lg-2 mb-md-6" : "col-md-12 col-lg-9 col-12 my-lg-2 mb-md-6"}`}>
                              <div className="card pt-2 pb-0 px-2" style={{ minHeight: "88vh", position: "relative" }} >
                                 <div className="card d-flex justify-content-start align-items-center pt-3 px-2 flex-row main_container_exam_section overflow-none pb-3">
                                    <span style={{ marginBottom: "0px", borderRight: "1px solid #ede4e4", paddingRight: "10px" }}>Section</span>

                                    {
                                       exams?.section_wise_time == 1 && exams?.examsections.map((item: any, index: number) => {
                                          if (activeSection == item?.id) {
                                             return <span key={item?.id} className="package_exam_section_button_active" style={{ marginBottom: "0px" }} onClick={async () => {

                                             }}>
                                                <span style={{ fontSize: "12px" }}>{item?.section_name}</span>
                                                <span style={{ marginLeft: "2px", marginTop: "-2px" }}><IoPlayCircleOutline style={{ transform: "scale(1)" }} /></span>
                                             </span>
                                          } else {
                                             return <span key={item?.id} className="package_exam_section_button" style={{ marginBottom: "0px" }} onClick={async () => {

                                             }}>
                                                <span style={{ fontSize: "12px" }}>{item?.section_name}</span>
                                                <span style={{ marginLeft: "2px", marginTop: "-2px" }}><CiLock style={{ transform: "scale(1)" }} /></span>

                                             </span>
                                          }
                                       })
                                    }

                                    {
                                       exams?.section_wise_time == 0 && exams?.examsections.map((item: any, index: number) => {
                                          if (activeSection == item?.id) {
                                             return <span key={item?.id} className="package_exam_section_button_active" style={{ marginBottom: "0px" }} onClick={async () => {
                                                if (activeSection != item?.id) {
                                                   setActiveSection(item?.id)
                                                   let sectionDetail = exams?.examsections?.find((itemD: any) => itemD?.id == item?.id)
                                                   if (removeHTML(sectionDetail?.instruction)?.length > 0) {
                                                      setSectionInstruction(true)
                                                      setInstructionTimerSeconds(Number(exams?.examsections[0]?.instruction_duration) * 60)
                                                   }
                                                   setpassageIndex(0)
                                                   // setSelectedQuestions(item?.questions[0]?.id)
                                                   let allQuestionBankIds = item?.questions?.map((item: any) => item?.question_bank_id)
                                                   setSectionQuestions(questions?.filter((item: any) => {
                                                      return allQuestionBankIds?.includes(item?.id)
                                                   }))
                                                   // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                                   setQuestionNumber(0)
                                                }

                                             }}>
                                                <span style={{ fontSize: "12px" }}>{item?.section_name}</span>
                                                <span style={{ marginLeft: "2px", marginTop: "-2px" }}><IoPlayCircleOutline style={{ transform: "scale(1)" }} /></span>
                                             </span>
                                          } else {
                                             return <span key={item?.id} className="package_exam_section_button_done" style={{ marginBottom: "0px" }} onClick={async () => {
                                                if (activeSection != item?.id) {
                                                   setActiveSection(item?.id)
                                                   setpassageIndex(0)
                                                   // setSelectedQuestions(item?.questions[0]?.id)
                                                   let allQuestionBankIds = item?.questions?.map((item: any) => item?.question_bank_id)
                                                   setSectionQuestions(questions?.filter((item: any) => {
                                                      return allQuestionBankIds?.includes(item?.id)
                                                   }))
                                                   // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                                   setQuestionNumber(0)
                                                }
                                             }}>
                                                <span style={{ fontSize: "12px" }}>{item?.section_name}</span>
                                                <span style={{ marginLeft: "2px", marginTop: "-2px" }}><IoCheckmarkDoneCircleOutline style={{ transform: "scale(1)" }} /></span>
                                             </span>
                                          }
                                       })
                                    }

                                 </div>


                                 {!sectionInstruction && exams?.examtypesid != 1 && <div className="card my-2  py-1 px-2">
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






                                 {!sectionInstruction && exams?.examtypesid == 1 && sectionQuestions[passageIndex]?.passage_bank_id && sectionQuestions[passageIndex]?.passage_bank_id != undefined && sectionQuestions[passageIndex]?.passage_bank_id != null && <div className="row gy-2 mx-1 mb-5">
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
                                                               <div key={ques?.id}>
                                                                  <div className='border-shadow flex-wrap align-items-center ' >
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
                                                                           className="preview ms-2 if-img"
                                                                           dangerouslySetInnerHTML={{
                                                                              __html: questionLanguage?.question,
                                                                           }}
                                                                        />
                                                                     </div>

                                                                     {/* ✅ Render Options */}
                                                                     <div className='d-flex ms-3 ifsss'>
                                                                        {questionLanguage?.options?.map((item5: any) => {
                                                                           const isSelected = userAnsdata?.some(
                                                                              (item: any) =>
                                                                                 item?.question_id === questionLanguage?.id &&
                                                                                 item?.user_ans_option_id === item5?.id &&
                                                                                 item?.examsectionid === activeSection
                                                                           );

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
                                                                                    onClick={() => {
                                                                                       const timeTaken =
                                                                                          exams?.section_wise_time === 0
                                                                                             ? Number(exams?.exam_duration) * 60 -
                                                                                             quizTimerSeconds
                                                                                             : Number(
                                                                                                exams?.examsections?.find(
                                                                                                   (item: any) =>
                                                                                                      item?.id === activeSection
                                                                                                )?.duration
                                                                                             ) *
                                                                                             60 -
                                                                                             quizTimerSeconds;

                                                                                       submitQuestionAnsAnswerForExam({
                                                                                          userid: getAuthenticatedUserData()?.id,
                                                                                          packageid: router.query.packageId,
                                                                                          subpackageid: router.query.subpackageId,
                                                                                          examid: router.query.examId,
                                                                                          examsectionid: activeSection,
                                                                                          bundleid: null,
                                                                                          question_bank_id: ques?.id,
                                                                                          question_id: questionLanguage?.id,
                                                                                          user_ans_option_id: item5?.id,
                                                                                          question_status: "Answered",
                                                                                          exam_section_time_taken: timeTaken,
                                                                                       });
                                                                                    }}
                                                                                 >
                                                                                    <span className='ms-4'
                                                                                       style={{
                                                                                          width: "13px",
                                                                                          height: "13px",
                                                                                          borderRadius: "100%",
                                                                                          border: "1px solid #d6d6d6",
                                                                                          background: isSelected
                                                                                             ? "#2683fd"
                                                                                             : "transparent",
                                                                                       }}
                                                                                    />
                                                                                    <span
                                                                                       className="mx-2 preview quiz_start_option_span_inside_p"
                                                                                       style={{ margin: "0px 3px" }}
                                                                                       dangerouslySetInnerHTML={{
                                                                                          __html: item5?.option,
                                                                                       }}
                                                                                    />
                                                                                 </label>
                                                                              </div>
                                                                           );
                                                                        })}
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




















                                 {/* 
                                 {!sectionInstruction && exams?.examtypesid != 1 && sectionQuestions[questionNumber]?.passage_bank_id && sectionQuestions[questionNumber]?.passage_bank_id != undefined && sectionQuestions[questionNumber]?.passage_bank_id != null && <div className="row gy-2 mx-1 mb-5" style={{ maxHeight: "52vh", overflowY: "scroll", boxSizing: "border-box", paddingBottom: "100px" }}>
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
                                                   if (exams?.section_wise_time == 0) {
                                                      submitQuestionAnsAnswerForExam({
                                                         userid: getAuthenticatedUserData()?.id,
                                                         packageid: router.query.packageId,
                                                         subpackageid: router.query.subpackageId,
                                                         examid: router.query.examId,
                                                         examsectionid: activeSection,
                                                         bundleid: null,
                                                         question_bank_id: sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.id,
                                                         user_ans_option_id: item5?.id,
                                                         question_status: "Answered",
                                                         exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      })
                                                   } else {
                                                      submitQuestionAnsAnswerForExam({
                                                         userid: getAuthenticatedUserData()?.id,
                                                         packageid: router.query.packageId,
                                                         subpackageid: router.query.subpackageId,
                                                         examid: router.query.examId,
                                                         examsectionid: activeSection,
                                                         bundleid: null,
                                                         question_bank_id: sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.id,
                                                         user_ans_option_id: item5?.id,
                                                         question_status: "Answered",
                                                         exam_section_time_taken: Number(exams?.examsections?.find((item: any) => item?.id == activeSection)?.duration) * 60 - quizTimerSeconds
                                                      })
                                                   }

                                                }}>
                                                   {
                                                      userAnsdata?.find((item: any) => item?.question_id == sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.id && item?.user_ans_option_id == item5?.id && item?.examsectionid == activeSection) ?
                                                         <span style={{ width: "21px", height: "21px", borderRadius: "100%", border: "1px solid #2683fd", background: "#2683fd" }}></span> :
                                                         <span style={{ width: "21px", height: "21px", borderRadius: "100%", border: "1px solid #2683fd" }}></span>

                                                   }


                                                   <span className="mx-2 preview quiz_start_option_span_inside_p" style={{ margin: "0px 3px" }} dangerouslySetInnerHTML={{ __html: `${item5?.option}` }} />
                                                </label>
                                             </div>
                                          })

                                       }
                                    </div>
                                 </div>} */}



                                 {
                                    sectionInstruction && !memoryTest && <div className='parent-scrolling'> <div className="preview p-2 image-scrolling new-image" dangerouslySetInnerHTML={{ __html: `${exams?.examsections?.find((item: any) => item?.id == activeSection)?.instruction}` }} /></div>
                                 }

                                 {
                                    exams?.examsections[0]?.id == activeSection && memoryTest && <div className='parent-scrolling'> <div className="preview p-2 image-scrolling " dangerouslySetInnerHTML={{ __html: `${exams?.examsections?.find((item: any) => item?.id == activeSection)?.memoryQuestion}` }} /></div>
                                 }
                                 {
                                    exams?.examsections[1]?.id == activeSection && memoryTest && <div className='parent-scrolling'> <div className="preview p-2 image-scrolling  " dangerouslySetInnerHTML={{ __html: `${exams?.examsections?.find((item: any) => item?.id == activeSection)?.memoryQuestion}` }} /></div>
                                 }














                                 {!sectionInstruction && exams?.examtypesid == 1 && (!sectionQuestions[passageIndex]?.passage_bank_id || sectionQuestions[passageIndex]?.passage_bank_id == undefined || sectionQuestions[passageIndex]?.passage_bank_id == null) && <div className="row gy-2 mx-1 mb-5" style={{ maxHeight: "72vh", overflowY: "scroll", boxSizing: "border-box", paddingBottom: "100px" }}>
                                    <div className="">
                                       {
                                          sectionQuestions?.map((ques: any, secQueIndex: number) => {
                                             // ✅ Get question in preferred language or fallback to English
                                             const questionLanguage =
                                                ques?.questions?.find((item: any) => item?.language === language) ||
                                                ques?.questions?.find((item: any) => item?.language === "English");

                                             if (!questionLanguage) return null;

                                             return (
                                                <div
                                                   className='border-shadow flex-wrap width-400-custom'
                                                   key={ques?.id}
                                                   style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                   }}
                                                >
                                                   <div className='d-flex width-60-web'>
                                                      {secQueIndex + 1}.{" "}
                                                      <div
                                                         className="preview mall-Question-flex w-75"
                                                         dangerouslySetInnerHTML={{
                                                            __html: questionLanguage?.question,
                                                         }}
                                                      />
                                                   </div>


                                                   {/* ✅ Render Options */}
                                                   <div className='d-flex width-40-web'>
                                                      {questionLanguage?.options?.map((option: any) => {
                                                         const isSelected = userAnsdata?.some(
                                                            (ans: any) =>
                                                               ans?.question_id === questionLanguage?.id &&
                                                               ans?.user_ans_option_id === option?.id &&
                                                               ans?.examsectionid === activeSection
                                                         );

                                                         const handleOptionClick = () => {
                                                            const timeTaken =
                                                               exams?.section_wise_time === 0
                                                                  ? Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                                  : Number(
                                                                     exams?.examsections?.find(
                                                                        (item: any) => item?.id === activeSection
                                                                     )?.duration
                                                                  ) *
                                                                  60 -
                                                                  quizTimerSeconds;

                                                            submitQuestionAnsAnswerForExam({
                                                               userid: getAuthenticatedUserData()?.id,
                                                               packageid: router.query.packageId,
                                                               subpackageid: router.query.subpackageId,
                                                               examid: router.query.examId,
                                                               examsectionid: activeSection,
                                                               bundleid: null,
                                                               question_bank_id: ques?.id,
                                                               question_id: questionLanguage?.id,
                                                               user_ans_option_id: option?.id,
                                                               question_status: "Answered",
                                                               exam_section_time_taken: timeTaken,
                                                            });
                                                         };

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
                                                                  onClick={handleOptionClick}
                                                               >
                                                                  {/* ✅ Option Highlight */}
                                                                  <span className='ms-4'
                                                                     style={{
                                                                        width: "14px",
                                                                        height: "14px",
                                                                        borderRadius: "100%",
                                                                        border: "1px solid #d6d6d6",
                                                                        background: isSelected ? "#2683fd" : "transparent",
                                                                     }}
                                                                  />
                                                                  <span
                                                                     className="mx-2 preview quiz_start_option_span_inside_p"
                                                                     style={{ margin: "0px 3px" }}
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











                                 {/* {!sectionInstruction && exams?.examtypesid != 1 && (!sectionQuestions[questionNumber]?.passage_bank_id || sectionQuestions[questionNumber]?.passage_bank_id == undefined || sectionQuestions[questionNumber]?.passage_bank_id == null) && <div className="row gy-2 mx-1 mb-5" style={{ maxHeight: "52vh", overflowY: "scroll", boxSizing: "border-box", paddingBottom: "100px" }}>
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

                                                   if (exams?.section_wise_time == 0) {
                                                      submitQuestionAnsAnswerForExam({
                                                         userid: getAuthenticatedUserData()?.id,
                                                         packageid: router.query.packageId,
                                                         subpackageid: router.query.subpackageId,
                                                         examid: router.query.examId,
                                                         examsectionid: activeSection,
                                                         bundleid: null,
                                                         question_bank_id: sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.id,
                                                         user_ans_option_id: item5?.id,
                                                         question_status: "Answered",
                                                         exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      })
                                                   } else {
                                                      submitQuestionAnsAnswerForExam({
                                                         userid: getAuthenticatedUserData()?.id,
                                                         packageid: router.query.packageId,
                                                         subpackageid: router.query.subpackageId,
                                                         examid: router.query.examId,
                                                         examsectionid: activeSection,
                                                         bundleid: null,
                                                         question_bank_id: sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.id,
                                                         user_ans_option_id: item5?.id,
                                                         question_status: "Answered",
                                                         exam_section_time_taken: Number(exams?.examsections?.find((item: any) => item?.id == activeSection)?.duration) * 60 - quizTimerSeconds
                                                      })
                                                   }

                                                }}>

                                                   {
                                                      userAnsdata?.find((item: any) => item?.question_id == sectionQuestions[questionNumber]?.questions?.find((item4: any) => item4?.language == language)?.id && item?.user_ans_option_id == item5?.id && item?.examsectionid == activeSection) ?
                                                         <span style={{ width: "21px", height: "21px", borderRadius: "100%", border: "1px solid #2683fd", background: "#2683fd" }}></span> :
                                                         <span style={{ width: "21px", height: "21px", borderRadius: "100%", border: "1px solid #2683fd" }}></span>

                                                   }


                                                   <span className="mx-2 preview quiz_start_option_span_inside_p" style={{ margin: "0px 3px" }} dangerouslySetInnerHTML={{ __html: `${item5?.option}` }} />
                                                </label>
                                             </div>
                                          })

                                       }
                                    </div>
                                 </div>} */}












                                 <div className="exam_section_main_contaent_fixed_botton_section">
                                    {/* {!sectionInstruction && exams?.examtypesid != 1 && <div>
                                       <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px" }} onClick={() => {
                                          if (userAnsdata?.filter((item3: any) => {
                                             return item3?.examsectionid == activeSection
                                          })?.find((item4: any) => (item4?.question_bank_id == sectionQuestions[questionNumber]?.id && item4?.user_ans_option_id)
                                          )) {
                                             setQuestionTimeAndExamSectionTime({
                                                userid: getAuthenticatedUserData()?.id,
                                                packageid: router.query.packageId,
                                                subpackageid: router.query.subpackageId,
                                                examid: router.query.examId,
                                                examsectionid: activeSection,
                                                bundleid: null,
                                                question_bank_id: sectionQuestions[questionNumber]?.id,
                                                question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                   return language == item4?.language ? item4?.id : null
                                                })?.id,
                                                user_ans_option_id: null,
                                                exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                // question_time_taken:
                                             }, "Marked Answered")
                                          } else {
                                             setQuestionTimeAndExamSectionTime({
                                                userid: getAuthenticatedUserData()?.id,
                                                packageid: router.query.packageId,
                                                subpackageid: router.query.subpackageId,
                                                examid: router.query.examId,
                                                examsectionid: activeSection,
                                                bundleid: null,
                                                question_bank_id: sectionQuestions[questionNumber]?.id,
                                                question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                   return language == item4?.language ? item4?.id : null
                                                })?.id,
                                                user_ans_option_id: null,
                                                exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                // question_time_taken:
                                             }, "Marked")
                                          }

                                          // setsectionQuestions[questionNumber](item2?.id)
                                          if (questionNumber < sectionQuestions?.length - 1) {
                                             setQuestionNumber((pre) => pre + 1)
                                          } else {
                                             setQuestionNumber(0)
                                          }
                                       }}>Mark for Review & Next</button>
                                       <button className="btn btn-outline-primary btn-sm ms-3 my-1" style={{ padding: "5px 6px" }}
                                          onClick={async () => {
                                             const { data } = await clearResponseDeleteQuestionAndAnswer({
                                                userid: getAuthenticatedUserData()?.id,
                                                packageid: router.query.packageId,
                                                subpackageid: router.query.subpackageId,
                                                examid: router.query.examId,
                                                examsectionid: activeSection,
                                                bundleid: null,
                                                question_bank_id: sectionQuestions[questionNumber]?.id,
                                                question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                   return language == item4?.language ? item4?.id : null
                                                })?.id,
                                             })
                                             if (data?.success) {
                                                setUserAnsData(data?.data)
                                             }
                                          }}
                                       >Clear Response</button>
                                    </div>}
                                    {!sectionInstruction && exams?.examtypesid != 1 && <div>
                                       <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px" }} onClick={() => {
                                          if (userAnsdata?.filter((item3: any) => {
                                             return item3?.examsectionid == activeSection
                                          })?.find((item4: any) => (item4?.question_bank_id == sectionQuestions[questionNumber]?.id && item4?.user_ans_option_id)
                                          )) {

                                             setQuestionTimeAndExamSectionTime({
                                                userid: getAuthenticatedUserData()?.id,
                                                packageid: router.query.packageId,
                                                subpackageid: router.query.subpackageId,
                                                examid: router.query.examId,
                                                examsectionid: activeSection,
                                                bundleid: null,
                                                question_bank_id: sectionQuestions[questionNumber]?.id,
                                                question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                   return language == item4?.language ? item4?.id : null
                                                })?.id,
                                                user_ans_option_id: null,
                                                exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                // question_time_taken:
                                             }, "Answered")
                                          } else {
                                             setQuestionTimeAndExamSectionTime({
                                                userid: getAuthenticatedUserData()?.id,
                                                packageid: router.query.packageId,
                                                subpackageid: router.query.subpackageId,
                                                examid: router.query.examId,
                                                examsectionid: activeSection,
                                                bundleid: null,
                                                question_bank_id: sectionQuestions[questionNumber]?.id,
                                                question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                   return language == item4?.language ? item4?.id : null
                                                })?.id,
                                                user_ans_option_id: null,
                                                exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                // question_time_taken:
                                             }, "Not Answered")
                                          }
                                          if (questionNumber < sectionQuestions?.length - 1) {
                                             setQuestionNumber((pre) => pre + 1)
                                          } else {
                                             setQuestionNumber(0)
                                          }
                                       }}>Save & Next</button>
                                    </div>} */}


                                    <div>
                                       {!sectionInstruction && exams?.examtypesid == 1 && exams?.examsections[exams?.examsections?.length - 1]?.id != activeSection && exams?.skip_button == "Yes" && <div style={{ marginLeft: "auto" }}>
                                          <button className="btn btn-outline-primary btn-sm my-1 mx-2" style={{ padding: "5px 6px", marginLeft: "auto" }} onClick={async () => {
                                             try {
                                                setLoading(true)
                                                setSectionReportStatus(true)
                                                let allSectionIds = exams?.examsections?.map((item: any) => item?.id)
                                                let indexOfActive = allSectionIds?.indexOf(activeSection)
                                                let filterIds = allSectionIds?.filter((item: any, index: number) => index <= indexOfActive)
                                                const { data } = await getSectionReport({
                                                   userid: getAuthenticatedUserData()?.id,
                                                   bundleid: null,
                                                   packageid: router?.query?.packageId,
                                                   subpackageid: router?.query?.subpackageId,
                                                   examid: router?.query?.examId,
                                                   sectionid: filterIds,
                                                })
                                                if (data?.success) {
                                                   setReportData(data?.data)
                                                   setOpen(false)
                                                   setTimeout(() => {
                                                      setLoading(false)
                                                   }, 500)
                                                } else {
                                                   setTimeout(() => {
                                                      setLoading(false)
                                                   }, 500)
                                                }
                                             } catch (err) {
                                                setTimeout(() => {
                                                   setLoading(false)
                                                }, 500)
                                             }

                                          }}>Skip Section</button>

                                          <button className="btn btn-outline-primary btn-sm ms-3 my-1" style={{ padding: "5px 6px" }}
                                             onClick={async () => {

                                                try {
                                                   const { data } = await clearResponseSection({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid: router.query.packageId,
                                                      bundleid: null,
                                                      subpackageid: router?.query?.subpackageId,
                                                      examid: router?.query?.examId,
                                                      examsectionid: activeSection
                                                   })

                                                   console.log(data, ">>>")
                                                   if (data?.success) {
                                                      getExamQuestionStatusData()
                                                   }
                                                } catch (err) {

                                                }
                                             }}
                                          >Clear Response</button>
                                       </div>}



                                       {!sectionInstruction && passageIndex != Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1 && exams?.examtypesid == 1 && exams?.examsections[exams?.examsections?.length - 1]?.id == activeSection && <div style={{ marginLeft: "auto" }}>

                                          <button className="btn btn-outline-primary btn-sm w-100 my-1" style={{ padding: "5px 6px", marginLeft: "auto" }} onClick={async () => {

                                             try {

                                                Swal.fire({
                                                   title: "Are you sure?",
                                                   text: "You want to submit the exam!",
                                                   icon: "warning",
                                                   showCancelButton: true,
                                                   confirmButtonColor: "#3085d6",
                                                   cancelButtonColor: "#d33",
                                                   confirmButtonText: "Submit"
                                                }).then(async (result: any) => {
                                                   if (result.isConfirmed) {
                                                      try {
                                                         const { data } = await submitExam({
                                                            userid: getAuthenticatedUserData()?.id,
                                                            packageid: router.query.packageId,
                                                            subpackageid: router.query.subpackageId,
                                                            examid: router.query.examId,
                                                            bundleid: null,
                                                         })
                                                         if (data?.success) {
                                                            SuccessMessage("Exam Submitted Successfully")
                                                            // router.push("/dashboard/home")
                                                            router.push(`/dashboard/exams/report/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)
                                                         } else {
                                                            ErrorMessage(data?.message)
                                                         }
                                                      } catch (err) {

                                                      }
                                                   }
                                                })
                                             } catch (err) {

                                             }
                                          }}>Submit Exam</button>
                                       </div>}
                                    </div>
                                    <div>
                                       {!sectionInstruction && exams?.examtypesid == 1 && <div className='d-flex justify-content-end align-items-center'>
                                          {passageIndex > 0 && sectionQuestions[passageIndex]?.passage_bank_id && <button className="btn btn-outline-primary btn-sm my-1 mx-2" style={{ padding: "5px 6px" }} onClick={() => {
                                             if (passageIndex > 0) {
                                                setpassageIndex((pre) => pre - 1)
                                             }
                                          }}>Previous</button>}
                                          {passageIndex < Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1 && <button className="btn btn-outline-primary btn-sm my-1 mx-2" style={{ padding: "5px 6px", marginLeft: "10px" }} onClick={() => {
                                             if (passageIndex < Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1) {
                                                setpassageIndex((pre) => pre + 1)
                                             }
                                          }}>Save & Next</button>}
                                          {passageIndex == Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1 && <button className="btn btn-outline-primary btn-sm my-1 mx-2" style={{ padding: "5px 6px", marginLeft: "10px" }} onClick={() => {

                                          }}>Save</button>}
                                          {/* {exams?.examsections[exams?.examsections?.length - 1]?.id == activeSection && passageIndex == Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1 && <button className="btn btn-outline-primary btn-sm my-1 mx-2" style={{ padding: "5px 6px", marginLeft: "10px" }} onClick={() => {

                                          }}>Save</button>} */}

                                          {!sectionInstruction && passageIndex == Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1 && exams?.examtypesid == 1 && exams?.examsections[exams?.examsections?.length - 1]?.id == activeSection && <button className="btn btn-outline-primary btn-sm w-100 my-1" style={{ padding: "5px 6px", marginLeft: "auto" }} onClick={async () => {

                                             try {

                                                Swal.fire({
                                                   title: "Are you sure?",
                                                   text: "You want to submit the exam!",
                                                   icon: "warning",
                                                   showCancelButton: true,
                                                   confirmButtonColor: "#3085d6",
                                                   cancelButtonColor: "#d33",
                                                   confirmButtonText: "Submit"
                                                }).then(async (result: any) => {
                                                   if (result.isConfirmed) {
                                                      try {
                                                         const { data } = await submitExam({
                                                            userid: getAuthenticatedUserData()?.id,
                                                            packageid: router.query.packageId,
                                                            subpackageid: router.query.subpackageId,
                                                            examid: router.query.examId,
                                                            bundleid: null,
                                                         })
                                                         if (data?.success) {
                                                            SuccessMessage("Exam Submitted Successfully")
                                                            // router.push("/dashboard/home")
                                                            router.push(`/dashboard/exams/report/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)
                                                         } else {
                                                            ErrorMessage(data?.message)
                                                         }
                                                      } catch (err) {

                                                      }
                                                   }
                                                })
                                             } catch (err) {

                                             }
                                          }}>Submit Exam</button>
                                          }

                                          {/* {passageIndex == Array.from(new Set(sectionQuestions?.map((pkgId: any) => pkgId?.passage_bank_id)))?.length - 1 && exams?.examsections[exams?.examsections?.length - 1]?.id == activeSection && <button className="btn btn-outline-primary btn-sm my-1 mx-2" style={{ padding: "5px 6px", marginLeft: "10px" }} onClick={() => {
                                          
                                       }}>Save</button>} */}
                                          {/* {passageIndex < sectionQuestions?.length - 1 && !sectionQuestions[0]?.passage_bank_id && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px", marginLeft: "10px" }} >Save</button>} */}
                                       </div>}
                                    </div>




                                    {sectionInstruction && exams?.skip_button == "Yes" && <div className='ms-2'>
                                       {exams?.skip_button == "Yes" && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px" }} onClick={() => {
                                          setLoading(true)
                                          if (memoryTest && sectionInstruction) {
                                             setMemoryTest(false)
                                             setSectionInstruction(false)
                                             setMemoryTestTimer(0)
                                             setInstructionTimerSeconds(0)
                                             setTimeout(() => {
                                                setLoading(false)
                                             }, 500)
                                          } else {
                                             if (exams?.examsections[0]?.id == activeSection && exams?.examsections[0]?.memoryTest == 1 && exams?.examsections[0]?.memoryQuestion && exams?.examsections?.find((item: any) => item?.id == activeSection)?.memoryTest == 1) {
                                                setMemoryTest(true)
                                                setInstructionTimerSeconds(0)
                                                setTimeout(() => {
                                                   setLoading(false)
                                                }, 500)
                                             } else {
                                                if (exams?.examsections[1]?.id == activeSection && exams?.examsections[1]?.memoryTest == 1 && exams?.examsections[1]?.memoryQuestion && exams?.examsections?.find((item: any) => item?.id == activeSection)?.memoryTest == 1) {
                                                   setSectionInstruction(true)
                                                   setMemoryTest(true)
                                                   setMemoryTestTimer(exams?.examsections[1]?.memory_duration * 60)
                                                   setInstructionTimerSeconds(0)
                                                   setTimeout(() => {
                                                      setLoading(false)
                                                   }, 500)
                                                } else {
                                                   setSectionInstruction(false)
                                                   setMemoryTest(false)
                                                   setInstructionTimerSeconds(0)
                                                   setMemoryTestTimer(0)
                                                   setTimeout(() => {
                                                      setLoading(false)
                                                   }, 1000)
                                                }

                                             }
                                          }
                                       }}>Skip & Continue</button>}
                                    </div>}
                                    {sectionInstruction && exams?.skip_button == "No" && <div className='ms-2'>
                                       {exams?.skip_button == "No" && <button className="btn btn-outline-primary btn-sm my-1" style={{ padding: "5px 6px" }} onClick={() => {
                                       }}>Proceed</button>}
                                    </div>}
                                 </div>
                              </div>
                           </div>

































                           {!sectionInstruction && exams?.examtypesid != 1 && <div className="col-lg-3 col-12 my-6 my-lg-2">
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
                                                return <span key={item2?.id} className="active_exam_questions" onClick={() => {

                                                   setQuestionTimeAndExamSectionTime({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid: router.query.packageId,
                                                      subpackageid: router.query.subpackageId,
                                                      examid: router.query.examId,
                                                      examsectionid: activeSection,
                                                      bundleid: null,
                                                      question_bank_id: sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                         return language == item4?.language ? item4?.id : null
                                                      })?.id,
                                                      user_ans_option_id: null,
                                                      exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      // question_time_taken:
                                                   }, "Not Answered")
                                                   // setsectionQuestions[questionNumber](item2?.id)
                                                   setQuestionNumber(index)

                                                }}>{index + 1}</span>
                                             }
                                             else if (userAnsdata?.filter((item3: any) => {
                                                return item3?.examsectionid == activeSection
                                             })?.find((item4: any) => (item4?.question_bank_id == item2?.id && item4?.question_status == "Answered")
                                             )) {
                                                return <span key={item2?.id} className="answered_exam_questions" onClick={() => {

                                                   setQuestionTimeAndExamSectionTime({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid: router.query.packageId,
                                                      subpackageid: router.query.subpackageId,
                                                      examid: router.query.examId,
                                                      examsectionid: activeSection,
                                                      bundleid: null,
                                                      question_bank_id: sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                         return language == item4?.language ? item4?.id : null
                                                      })?.id,
                                                      user_ans_option_id: null,
                                                      exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      // question_time_taken:
                                                   }, "Not Answered")
                                                   // setsectionQuestions[questionNumber](item2?.id)
                                                   setQuestionNumber(index)

                                                }}>{index + 1}</span>
                                             } else if (userAnsdata?.filter((item3: any) => {
                                                return item3?.examsectionid == activeSection
                                             })?.find((item4: any) => (item4?.question_bank_id == item2?.id && item4?.question_status == "Not Answered")
                                             )) {
                                                return <span key={item2?.id} className="not_answered_exam_questions" onClick={() => {

                                                   setQuestionTimeAndExamSectionTime({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid: router.query.packageId,
                                                      subpackageid: router.query.subpackageId,
                                                      examid: router.query.examId,
                                                      examsectionid: activeSection,
                                                      bundleid: null,
                                                      question_bank_id: sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                         return language == item4?.language ? item4?.id : null
                                                      })?.id,
                                                      user_ans_option_id: null,
                                                      exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      // question_time_taken:
                                                   }, "Not Answered")
                                                   // setsectionQuestions[questionNumber](item2?.id)
                                                   setQuestionNumber(index)

                                                }}>{index + 1}</span>
                                             } else if (userAnsdata?.filter((item3: any) => {
                                                return item3?.examsectionid == activeSection
                                             })?.find((item4: any) => (item4?.question_bank_id == item2?.id && item4?.question_status == "Marked")
                                             )) {
                                                return <span key={item2?.id} className="marked_exam_questions" onClick={() => {

                                                   setQuestionTimeAndExamSectionTime({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid: router.query.packageId,
                                                      subpackageid: router.query.subpackageId,
                                                      examid: router.query.examId,
                                                      examsectionid: activeSection,
                                                      bundleid: null,
                                                      question_bank_id: sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                         return language == item4?.language ? item4?.id : null
                                                      })?.id,
                                                      user_ans_option_id: null,
                                                      exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      // question_time_taken:
                                                   }, "Not Answered")
                                                   // setsectionQuestions[questionNumber](item2?.id)
                                                   setQuestionNumber(index)

                                                }}>{index + 1}</span>
                                             }
                                             else if (userAnsdata?.filter((item3: any) => {
                                                return item3?.examsectionid == activeSection
                                             })?.find((item4: any) => (item4?.question_bank_id == item2?.id && item4?.question_status == "Marked Answered")
                                             )) {
                                                return <span key={item2?.id} className="marked_and_answered_exam_questions" onClick={() => {

                                                   setQuestionTimeAndExamSectionTime({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid: router.query.packageId,
                                                      subpackageid: router.query.subpackageId,
                                                      examid: router.query.examId,
                                                      examsectionid: activeSection,
                                                      bundleid: null,
                                                      question_bank_id: sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                         return language == item4?.language ? item4?.id : null
                                                      })?.id,
                                                      user_ans_option_id: null,
                                                      exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      // question_time_taken:
                                                   }, "Not Answered")
                                                   // setsectionQuestions[questionNumber](item2?.id)
                                                   setQuestionNumber(index)

                                                }}>{index + 1}
                                                   <span className="marked_and_answered_tick_symbol">✔</span>
                                                </span>
                                             } else {
                                                return <span key={item2?.id} className="not_visited_exam_questions" onClick={() => {

                                                   setQuestionTimeAndExamSectionTime({
                                                      userid: getAuthenticatedUserData()?.id,
                                                      packageid: router.query.packageId,
                                                      subpackageid: router.query.subpackageId,
                                                      examid: router.query.examId,
                                                      examsectionid: activeSection,
                                                      bundleid: null,
                                                      question_bank_id: sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4: any) => {
                                                         return language == item4?.language ? item4?.id : null
                                                      })?.id,
                                                      user_ans_option_id: null,
                                                      exam_section_time_taken: Number(exams?.exam_duration) * 60 - quizTimerSeconds
                                                      // question_time_taken:
                                                   }, "Not Answered")
                                                   // setsectionQuestions[questionNumber](item2?.id)
                                                   setQuestionNumber(index)

                                                }}>{index + 1}</span>
                                             }
                                             //  if(true){
                                             //    return "HIIIIIII"
                                             //  }

                                             //  if(item2?.id==sectionQuestions[questionNumber]?.id){
                                             // return  <span key={item2?.id} className="active_exam_questions" onClick={()=>{

                                             //    setQuestionTimeAndExamSectionTime({
                                             // userid:getAuthenticatedUserData()?.id,
                                             // packageid:router.query.packageId,
                                             // subpackageid:router.query.subpackageId,
                                             // examid:router.query.examId,
                                             // examsectionid:activeSection,
                                             // bundleid:null,
                                             //       question_bank_id:sectionQuestions[questionNumber]?.id,
                                             //       question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                             //          return language==item4?.language ? item4?.id : null
                                             //       })?.id,
                                             //       user_ans_option_id:null,
                                             //       question_status:"Not Answered",
                                             //       exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                             //       // question_time_taken:
                                             //    })
                                             //    // setsectionQuestions[questionNumber](item2?.id)
                                             //    setQuestionNumber(index)

                                             // }}>{index+1}</span>
                                             //  }else{
                                             //    return  <span key={item2?.id} className="not_visited_exam_questions" onClick={()=>{

                                             //       setQuestionTimeAndExamSectionTime({
                                             //          userid:getAuthenticatedUserData()?.id,
                                             //          packageid:router.query.packageId,
                                             //          subpackageid:router.query.subpackageId,
                                             //          examid:router.query.examId,
                                             //          examsectionid:activeSection,
                                             //          bundleid:null,
                                             //          question_bank_id:sectionQuestions[questionNumber]?.id,
                                             //          question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                             //             return language==item4?.language ? item4?.id : null
                                             //          })?.id,
                                             //          user_ans_option_id:null,
                                             //          question_status:"Not Answered",
                                             //          exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                             //          // question_time_taken:
                                             //       })
                                             //       // setsectionQuestions[questionNumber](item2?.id)
                                             //       setQuestionNumber(index)
                                             //    }}>{index+1}</span>
                                             //  }

                                          })
                                       }
                                       {/* <span className="not_visited_exam_questions">99</span>
                                          <span className="active_exam_questions">99</span>
                                          <span className="answered_exam_questions">99</span>
                                          <span className="not_answered_exam_questions">99</span>
                                          <span className="marked_exam_questions">99</span>
                                          <span className="marked_and_answered_exam_questions">99
                                             <span className="marked_and_answered_tick_symbol">✔</span>
                                          </span> */}
                                    </div>
                                 </div>

                                 <div className="exam_section_sidebar_fixed_botton_section">
                                    <button className="btn btn-outline-primary btn-sm w-100 my-1" style={{ padding: "5px 6px" }} onClick={async () => {

                                       Swal.fire({
                                          title: "Are you sure?",
                                          text: "You want to submit the exam!",
                                          icon: "warning",
                                          showCancelButton: true,
                                          confirmButtonColor: "#3085d6",
                                          cancelButtonColor: "#d33",
                                          confirmButtonText: "Submit"
                                       }).then(async (result: any) => {
                                          if (result.isConfirmed) {
                                             try {
                                                const { data } = await submitExam({
                                                   userid: getAuthenticatedUserData()?.id,
                                                   packageid: router?.query?.packageId,
                                                   subpackageid: router?.query?.subpackageId,
                                                   examid: router?.query?.examId,
                                                   bundleid: null,
                                                })
                                                if (data?.success) {
                                                   SuccessMessage("Exam Submitted Successfully")
                                                   // router.push("/dashboard/home")
                                                   router.push(`/dashboard/exams/report/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)

                                                } else {
                                                   ErrorMessage(data?.message)
                                                }
                                             } catch (err) {

                                             }
                                          }
                                       })
                                    }}>Submit Exam</button>

                                 </div>
                              </div>
                           </div>}
                        </div>
                     </div>}
                  </div> : <InactiveStatus />}
         </div>
         {/* <Modal open={open} onClose={() => {
         }}>
            <div style={{ padding: "10px 15px", textAlign: "center", maxWidth: "400px" }}>
               <img src="https://cdn-icons-png.flaticon.com/512/5757/5757923.png" style={{ width: "90px", height: "90px", margin: "auto auto 10px auto", textAlign: "center" }} />
               {exams?.section_wise_time == 0 ? <h2 style={{ margin: "3px auto" }}>Exam Timeout!!</h2> : <h2 style={{ margin: "3px auto" }}>Exam Section Timeout!!</h2>}
               {exams?.section_wise_time == 0 ? <p style={{ margin: "3px auto" }}>
                  Please Submit the Exam.
               </p> : exams?.examsections[exams?.examsections?.length - 1]?.id != activeSection && <p style={{ margin: "3px auto" }}>
                  Go to Next Section.
               </p>}
               {exams?.examtypesid != 1 && <div style={{ margin: "10px auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <button className="btn btn-primary btn-sm" onClick={async () => {


                     Swal.fire({
                        title: "Are you sure?",
                        text: "You want to submit the exam!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Submit"
                     }).then(async (result: any) => {
                        if (result.isConfirmed) {
                           try {
                              const { data } = await submitExam({
                                 userid: getAuthenticatedUserData()?.id,
                                 packageid: router.query.packageId,
                                 subpackageid: router.query.subpackageId,
                                 examid: router.query.examId,
                                 bundleid: null,
                              })
                              if (data?.success) {
                                 SuccessMessage("Exam Submitted Successfully")
                                 // router.push("/dashboard/home")
                                 router.push(`/dashboard/exams/report/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)

                              } else {
                                 ErrorMessage(data?.message)
                              }
                           } catch (err) {

                           }
                        }
                     })
                  }}>Submit Exam</button>


               </div>}
               {
                  exams?.examtypesid == 1 && <div style={{ margin: "10px auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                     {exams?.examsections[exams?.examsections?.length - 1]?.id == activeSection && <button className="btn btn-primary btn-sm mx-auto" onClick={async () => {
                        try {


                           setSectionReportStatus(true)
                           let allSectionIds = exams?.examsections?.map((item: any) => item?.id)
                           let indexOfActive = allSectionIds?.indexOf(activeSection)
                           let filterIds = allSectionIds?.filter((item: any, index: number) => index <= indexOfActive)
                           const { data } = await getSectionReport({
                              userid: getAuthenticatedUserData()?.id,
                              bundleid: null,
                              packageid: router?.query?.packageId,
                              subpackageid: router?.query?.subpackageId,
                              examid: router?.query?.examId,
                              sectionid: filterIds
                           })

                           if (data?.success) {
                              setReportData(data?.data)
                              setOpen(false)
                           } else {
                              Swal.fire({
                                 title: "Are you sure?",
                                 text: "You want to submit the exam!",
                                 icon: "warning",
                                 showCancelButton: true,
                                 confirmButtonColor: "#3085d6",
                                 cancelButtonColor: "#d33",
                                 confirmButtonText: "Submit"
                              }).then(async (result: any) => {
                                 if (result.isConfirmed) {
                                    try {
                                       const { data } = await submitExam({
                                          userid: getAuthenticatedUserData()?.id,
                                          packageid: router.query.packageId,
                                          subpackageid: router.query.subpackageId,
                                          examid: router.query.examId,
                                          bundleid: null,
                                       })
                                       if (data?.success) {
                                          SuccessMessage("Exam Submitted Successfully")
                                          // router.push("/dashboard/home")
                                          router.push(`/dashboard/exams/report/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)

                                       } else {
                                          ErrorMessage(data?.message)
                                       }
                                    } catch (err) {

                                    }
                                 }
                              })
                           }
                        } catch (err) {

                        }
                     }}>Submit Exam</button>}
                     {exams?.examsections[exams?.examsections?.length - 1]?.id != activeSection && <button className="btn btn-warning btn-sm mx-auto" onClick={async () => {
                        // setOpen(false)
                        try {


                           setSectionReportStatus(true)
                           let allSectionIds = exams?.examsections?.map((item: any) => item?.id)
                           let indexOfActive = allSectionIds?.indexOf(activeSection)
                           let filterIds = allSectionIds?.filter((item: any, index: number) => index <= indexOfActive)
                          
                           const { data } = await getSectionReport({
                              userid: getAuthenticatedUserData()?.id,
                              bundleid: null,
                              packageid: router?.query?.packageId,
                              subpackageid: router?.query?.subpackageId,
                              examid: router?.query?.examId,
                              sectionid: filterIds
                           })

                           if (data?.success) {
                              setReportData(data?.data)
                              setOpen(false)
                           } else {
                              let examSectionId = exams?.examsections?.slice()?.map((item: any) => item?.id)
                              let index = examSectionId.indexOf(activeSection)
                              if (index != examSectionId?.length - 1) {
                                 const { data } = await findExamSectionLeftTime({
                                    userid: getAuthenticatedUserData()?.id,
                                    packageid: router.query.packageId,
                                    subpackageid: router.query.subpackageId,
                                    examid: router.query.examId,
                                    bundleid: null
                                 })
                                 if (data?.success) {
                                    setActiveSection(data?.examsectionid)
                                    setpassageIndex(0)
                                    if (removeHTML(exams?.examsections?.find((item: any) => item?.id == data?.examsectionid)?.instruction)?.length > 0) {
                                       setSectionInstruction(true)
                                       setInstructionTimerSeconds(Number(exams?.examsections?.find((item: any) => item?.id == data?.examsectionid)?.instruction_duration) * 60)
                                       setMemoryTest(false)
                                       setMemoryTestTimer(0)
                                    }
                                    let allQuestionBankIds = exams?.examsections?.find((item: any) => item?.id == data?.examsectionid)?.questions?.map((item: any) => item?.question_bank_id)
                                    setSectionQuestions(questions?.filter((item: any) => {
                                       return allQuestionBankIds?.includes(item?.id)
                                    }))
                                    setQuizTimerSeconds(Number(exams?.examsections?.find((item: any) => item?.id == data?.examsectionid)?.duration) * 60 - data?.time_taken)
                                    setQuestionNumber(0)
                                    setOpen(false)
                                    // break
                                 } else {
                                    // setActiveSection(exams?.examsections[exams?.examsections?.length - 1]?.id)
                                    let allSectionIds = exams.examsections?.map((item: any) => item?.id)
                                    let lastSection = exams?.examsections[exams?.examsections?.length - 1]?.id
                                    if (activeSection != lastSection) {
                                       let findIndex = allSectionIds.indexOf(activeSection)
                                       setActiveSection(allSectionIds[findIndex + 1])
                                       setpassageIndex(0)
                                       // setSelectedQuestions(item?.questions[0]?.id)
                                       let allQuestionBankIds = exams?.examsections?.find((itemD: any) => itemD?.id == allSectionIds[findIndex + 1])?.questions?.map((item: any) => item?.question_bank_id)
                                       setSectionQuestions(questions?.filter((item: any) => {
                                          return allQuestionBankIds?.includes(item?.id)
                                       }))
                                       // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                       setQuestionNumber(0)
                                    }
                                 }
                              }
                           }
                        } catch (err) {

                        }

                     }}>Next</button>}
                  </div>}
            </div>
         </Modal> */}
      </Fragment>
   )
}

export default ExamStart