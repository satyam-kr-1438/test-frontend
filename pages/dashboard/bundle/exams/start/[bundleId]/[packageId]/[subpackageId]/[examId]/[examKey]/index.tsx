import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkBundlePackageIsAvailableForUser, checkPackageIsAvailableForUser, clearResponseDeleteQuestionAndAnswer, findExamSectionLeftTime, findTotalTimeTakenForExamSection, findTotalTimeTakenForExamSectionSectionWize, getExamDetailWithQuestions, getExamQuestionStatus, setExamSectionTimeAndQuestionTime, submitExam, submitQuestionAnswerForExam, updateExamSectionTimeStatusOnEverySeconds, updateExamSectionTimeStatusOnEverySecondsSecionWise } from 'components/request/request';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react'
import { CiLock } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setExamDetail, setExamQuestions } from 'reducers/reducerSlice';
import { MdOutlinePending } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import ConfirmPopup from 'components/reuseable/popup/ConfirmPopup';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Swal from 'sweetalert2';
const BundleStart = () => {
    const router=useRouter()
    const dispatch=useDispatch()
    const [quizTimerSeconds,setQuizTimerSeconds]=useState<number>(60)
    const [questionNumber,setQuestionNumber]=useState<number>(0)
    const [activeSection,setActiveSection]=useState<any>(-1)
    const [selectedQuestions,setSelectedQuestions]=useState<any>(-1)
    const [userAnsdata,setUserAnsData]=useState<any[]>([])
    const {exams,questions,language}=useSelector((state:any)=>state.reducerSlice)
    const [sectionQuestions,setSectionQuestions]=useState<any[]>([])
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [open,setOpen]=useState(false)
    const toggleFullScreen = () => {
       try{
         const docElement:any = document?.documentElement as any;
      if (!isFullScreen) {
        if (docElement.requestFullscreen) {
          docElement?.requestFullscreen();
        }
      } else {
        if (document?.exitFullscreen) {
          document?.exitFullscreen();
        }
      }
      setIsFullScreen(prevState => !prevState);
       }catch(err){
         setIsFullScreen(prevState => !prevState);
       }
    };
    const checkPackageAvailability=async ()=>{
        try{
            if(router && router?.query?.packageId && router.query.subpackageId && router.query.examId){
                let authUser=getAuthenticatedUserData()
                let bundleId=router.query.bundleId
                let packageId=router.query.packageId
                let subpackageId=router.query.subpackageId
                let examId=router.query.examId
                const {data}=await checkBundlePackageIsAvailableForUser(bundleId,packageId,subpackageId,examId,authUser?.id)
                if(!data?.success){
                    ErrorMessage("You are not authorized to access.")
                    router.push("/dashboard/home")
                }else{
                    if(questions?.length<=0){
                        let examId=router.query.examId
                        let examKey=router.query.examKey
                        const {data}=await getExamDetailWithQuestions(examId,examKey)
                        if(data?.success){
                           if(data?.questions?.length<=0){
                              ErrorMessage("You are not authorized to access.")
                              router.push("/dashboard/home")
                           }else{
                              dispatch(setExamDetail(data?.exam))
                              setActiveSection(data?.exam?.examsections[0]?.id)
                              if(data?.exam?.section_wise_time==0){
                                 const data2= await findTotalTimeTakenForExamSection({
                                    userid:getAuthenticatedUserData()?.id,
                                    packageid:router.query.packageId,
                                    subpackageid:router.query.subpackageId,
                                    examid:router.query.examId,
                                    bundleid:router.query.bundleId,
                                 })
                                 if(data2?.data?.success){
                                    setQuizTimerSeconds(Number(data?.exam?.exam_duration)*60-data2?.data?.data?.time_taken)
                                 }else{
                                    setQuizTimerSeconds(Number(data?.exam?.exam_duration)*60)
                                 }
                              }else{
                                 const data2= await findTotalTimeTakenForExamSectionSectionWize({
                                    userid:getAuthenticatedUserData()?.id,
                                    packageid:router.query.packageId,
                                    subpackageid:router.query.subpackageId,
                                    examid:router.query.examId,
                                    bundleid:router.query.bundleId,
                                    examsectionid:data?.exam?.examsections[0]?.id
                                 })
                                 if(data2?.data?.success){
                                    setQuizTimerSeconds(Number(data?.exam?.examsections[0]?.duration)*60-data2?.data?.data?.time_taken)
                                 }else{
                                    setQuizTimerSeconds(Number(data?.exam?.examsections[0]?.duration)*60)
                                 }
                              }
                              
                              // setSelectedQuestions(data?.exam?.examsections[0]?.questions[0]?.id)
                              let allQuestionBankIds=data?.exam?.examsections[0]?.questions?.map((item:any)=>item?.question_bank_id)
                              setSectionQuestions(data?.questions?.filter((item:any)=>{
                                 return allQuestionBankIds?.includes(item?.id)
                              }))
                              dispatch(setExamQuestions(data?.questions))
                              // setQuizTimerMinutes(Math.floor(Number(data?.exam?.examsections[0]?.duration))-1)
                              // setQuizTimerSeconds(Number(data?.exam?.examsections[0]?.duration)*60)
                           }
                        }else{
                           ErrorMessage("Unauthorized Access")
                           router.push("/dashboard/home")
                        }
                    }else{
                     if(exams?.section_wise_time==0){
                        const {data}= await findTotalTimeTakenForExamSection({
                           userid:getAuthenticatedUserData()?.id,
                           packageid:router.query.packageId,
                           subpackageid:router.query.subpackageId,
                           examid:router.query.examId,
                           bundleid:router.query.bundleId,
                        })
                        if(data?.success){
                           setQuizTimerSeconds(Number(exams?.exam_duration)*60-data?.data?.time_taken)
                        }else{
                           setQuizTimerSeconds(Number(exams?.exam_duration)*60)
                        }
                     }else{
                        const data2= await findTotalTimeTakenForExamSectionSectionWize({
                           userid:getAuthenticatedUserData()?.id,
                           packageid:router.query.packageId,
                           subpackageid:router.query.subpackageId,
                           examid:router.query.examId,
                           bundleid:router.query.bundleId,
                           examsectionid:exams?.examsections[0]?.id
                        })
                        if(data2?.data?.success){
                           setQuizTimerSeconds(Number(exams?.examsections[0]?.duration)*60-data2?.data?.data?.time_taken)
                        }else{
                           setQuizTimerSeconds(Number(exams?.examsections[0]?.duration)*60)
                        }
                        // setQuizTimerSeconds(Number(exams?.examsections[0]?.duration)*60)
                     }
                     setActiveSection(exams?.examsections[0]?.id)
                     let allQuestionBankIds=exams?.examsections[0]?.questions?.map((item:any)=>item?.question_bank_id)
                     setSectionQuestions(questions?.filter((item:any)=>{
                        return allQuestionBankIds?.includes(item?.id)
                     }))
                    }
                }
            }
        }catch(err){
            ErrorMessage("You are not authorized to access")
            router.push("/dashboard/home")
        }
    }
    const getExamQuestionStatusData=async ()=>{
        try{
               let packageid=router.query.packageId
               let subpackageid=router.query.subpackageId
               let examid=router.query.examId
               let userid=getAuthenticatedUserData()?.id
               let bundleid=router.query.bundleId
             const {data}=await getExamQuestionStatus({
                 packageid,subpackageid,bundleid,examid,userid
             })
             if(data?.success){
               setUserAnsData(data?.data)
             }
        }catch(err){

        }
    }
    useEffect(()=>{
        checkPackageAvailability()
        getExamQuestionStatusData()
    },[router,useSelector])

   
 const updateTimeStatusForActiveExamSection=async (time:number)=>{
      try{
         const {data}=await updateExamSectionTimeStatusOnEverySeconds({
            userid:getAuthenticatedUserData()?.id,
            packageid:router.query.packageId,
            subpackageid:router.query.subpackageId,
            examid:router.query.examId,
            bundleid:router.query.bundleId,
            exam_section_time_taken:time
         })
      }catch(err){

      }
 }
 const updateTimeStatusForActiveExamSectionSectionWise=async (time:number)=>{
   try{
      const {data}=await updateExamSectionTimeStatusOnEverySecondsSecionWise({
         userid:getAuthenticatedUserData()?.id,
         packageid:router.query.packageId,
         subpackageid:router.query.subpackageId,
         examid:router.query.examId,
         bundleid:router.query.bundleId,
         examsectionid:activeSection,
         exam_section_time_taken:time
      })
   }catch(err){

   }
}

  useEffect(() => {
   let intervalId:any;
     intervalId = setInterval(() => {
       setQuizTimerSeconds(pre =>{
         if (pre <= 1) {
            clearInterval(intervalId);
            if(exams?.section_wise_time==0){
               updateTimeStatusForActiveExamSection(Number(exams?.exam_duration)*60)
            }else{
               updateTimeStatusForActiveExamSectionSectionWise(Number(exams?.examsections?.find((item:any)=>item?.id==activeSection)?.duration)*60)
            }
            setOpen(true)
            return 0; // Ensure timer stops at 0
        } else {
            if(exams?.section_wise_time==0){
               updateTimeStatusForActiveExamSection(Number(exams?.exam_duration)*60-quizTimerSeconds)
            }else{
               updateTimeStatusForActiveExamSectionSectionWise(Number(exams?.examsections?.find((item:any)=>item?.id==activeSection)?.duration)*60-quizTimerSeconds)
            }
            return pre - 1;
        }
       });
     }, 1000); // Update elapsed time every second
   
   return () => clearInterval(intervalId); // Cleanup interval when component unmounts or is updated
 }, [quizTimerSeconds]);


 useEffect(() => {
    const handleBeforeUnload = (event:any) => {
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


 

 const formatTime = (timeInSeconds:any) => {
   const hours = Math.floor(timeInSeconds / 3600);
   const minutes = Math.floor((timeInSeconds % 3600) / 60);
   const seconds = timeInSeconds % 60;
   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
 };


 const setQuestionTimeAndExamSectionTime=async(payload:any,status:string)=>{
    try{
         let dataPayload={
            ...payload,
            question_status:status
         }
         const {data}=await setExamSectionTimeAndQuestionTime(dataPayload)
         if(!data?.success){
            ErrorMessage("You are not authorized to access")
            router.push("/dashboard/home")
         }else{
            setUserAnsData(data?.data)
         }
    }catch(err){

    }
 }

 const submitQuestionAnsAnswerForExam=async (payload:any)=>{
    try{
       const {data}=await submitQuestionAnswerForExam(payload)
       if(data?.success){
         setUserAnsData(data?.data)
       }
    }catch(err){
      
    }
 }
    
  return (
    <Fragment>
         <div className="container-fluid">
              <div className="row">
                   <div className="col-12" style={{position:"fixed",top:"0px",zIndex:"999"}}>
                      <div className="card py-2 px-1" style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
                               <div className="" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                    <div style={{maxWidth:"130px",cursor:"pointer"}} onClick={()=>{
                                       router.push("/dashboard/home")
                                    }}>
                                         <img src="/img/logo-dark.png" alt="Testerika" style={{width:"100%"}}/>
                                    </div>
                                    <div className="d-md-none d-none d-lg-block" style={{marginLeft:"20px"}}>
                                        <h6 style={{marginBottom:"0px",fontSize:"14px"}}>{exams?.name}</h6>
                                    </div>
                               </div>
                               

                               <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                    <div>
                                        <h6 style={{marginBottom:"0px",fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center"}}><span className="d-none d-md-block me-1">Time Left: </span> 
                                        <span className="ms-1">{formatTime(quizTimerSeconds)}</span></h6>
                                    </div>
                                   <button className="ms-3 btn-sm d-md-none d-none d-lg-block btn btn-sm btn-outline-primary"onClick={toggleFullScreen}>
                                      {isFullScreen?"Exit Full Screen":"Switch Full Screen"}
                                   </button>
                                   
                                   <ConfirmPopup/>
                               </div>
                      </div>
                   </div>

                   <div className="col-12" style={{marginTop:"60px"}}>
                       <div className="row">
                           <div className="col-md-12 col-lg-9 col-12 my-lg-2 mb-md-6">
                              <div className="card pt-2 pb-0 px-2" style={{minHeight:"88vh",position:"relative"}} >
                                       <div className="card d-flex justify-content-start align-items-center pt-3 px-2 flex-row main_container_exam_section">
                                            <span style={{marginBottom:"0px",borderRight:"1px solid #ede4e4",paddingRight:"10px"}}>Section</span>

                                             {
                                                exams?.section_wise_time==1 && exams?.examsections.map((item:any,index:number)=>{
                                                   //   if(activeSection==item?.id){
                                                   //       return <span  key={item?.id} className="package_exam_section_button_active" style={{marginBottom:"0px"}}>
                                                   //       <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                   //       <span style={{marginLeft:"2px",marginTop:"-2px"}}><IoPlayCircleOutline style={{transform:"scale(1)"}}/></span>
                                                   //    </span>
                                                   //   }else if(activeSection>item?.id){
                                                   //    return  <span key={item?.id}  className="package_exam_section_button_done" style={{marginBottom:"0px"}}>
                                                   //               <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                   //               <span style={{marginLeft:"2px",marginTop:"-2px"}}><IoCheckmarkDoneCircleOutline style={{transform:"scale(1)"}}/></span>
                                                   //        </span>
                                                   //   }else{
                                                      //  return  <span key={item?.id} className="package_exam_section_button" style={{marginBottom:"0px",}}>
                                                      //              <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                      //              <span style={{marginLeft:"2px",marginTop:"-2px"}}><CiLock style={{transform:"scale(1)"}}/></span>
                                                      //        </span>
                                                   //   }


                                                  if(activeSection==item?.id){
                                                      return <span  key={item?.id} className="package_exam_section_button_active" style={{marginBottom:"0px"}} onClick={async()=>{
                                                         //   if(activeSection!=item?.id){
                                                         //    const {data}= await findTotalTimeTakenForExamSection({
                                                         //       userid:getAuthenticatedUserData()?.id,
                                                         //       packageid:router.query.packageId,
                                                         //       subpackageid:router.query.subpackageId,
                                                         //       examid:router.query.examId,
                                                         //       examsectionid:item?.id,
                                                         //       bundleid:router.query.bundleId,
                                                         //    })
                                                         //    if(data?.success){
                                                         //       if(item?.duration*60==data?.data?.time_taken){
                                                         //          setOpen(true)
                                                         //       }else{
                                                                  // setActiveSection(item?.id)
                                                                  // // setSelectedQuestions(item?.questions[0]?.id)
                                                                  // let allQuestionBankIds=item?.questions?.map((item:any)=>item?.question_bank_id)
                                                                  // setSectionQuestions(questions?.filter((item:any)=>{
                                                                  //    return allQuestionBankIds?.includes(item?.id)
                                                                  // }))
                                                                  // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                                                  // setQuestionNumber(0)
                                                         //       }
                                                         //    }else{
                                                         //       setActiveSection(item?.id)
                                                         //       // setSelectedQuestions(item?.questions[0]?.id)
                                                         //       let allQuestionBankIds=item?.questions?.map((item:any)=>item?.question_bank_id)
                                                         //       setSectionQuestions(questions?.filter((item:any)=>{
                                                         //          return allQuestionBankIds?.includes(item?.id)
                                                         //       }))
                                                         //       setQuizTimerSeconds(Number(item?.duration)*60)
                                                         //       setQuestionNumber(0)
                                                         //    }
                                                            
                                                         //   }
                                                         
                                                      }}>
                                                      <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                      <span style={{marginLeft:"2px",marginTop:"-2px"}}><IoPlayCircleOutline style={{transform:"scale(1)"}}/></span>
                                                   </span>
                                                  }else{
                                                   return  <span key={item?.id}  className="package_exam_section_button" style={{marginBottom:"0px"}} onClick={async ()=>{
                                                      //   if(activeSection!=item?.id && quizTimerSeconds<=0){
                                                             
                                                      //          const {data}= await findTotalTimeTakenForExamSection({
                                                      //             userid:getAuthenticatedUserData()?.id,
                                                      //             packageid:router.query.packageId,
                                                      //             subpackageid:router.query.subpackageId,
                                                      //             examid:router.query.examId,
                                                      //             examsectionid:item?.id,
                                                      //             bundleid:router.query.bundleId,
                                                      //          })
                                                      //          if(data?.success){
                                                      //             if(item?.duration*60==data?.data?.time_taken){
                                                      //                   setOpen(true)
                                                      //             }else{
                                                      //                setActiveSection(item?.id)
                                                      //                // setSelectedQuestions(item?.questions[0]?.id)
                                                      //                let allQuestionBankIds=item?.questions?.map((item:any)=>item?.question_bank_id)
                                                      //                setSectionQuestions(questions?.filter((item:any)=>{
                                                      //                   return allQuestionBankIds?.includes(item?.id)
                                                      //                }))
                                                      //                setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                                      //                setQuestionNumber(0)
                                                      //             }
                                                      //          }else{
                                                      //             setActiveSection(item?.id)
                                                      //             // setSelectedQuestions(item?.questions[0]?.id)
                                                      //             let allQuestionBankIds=item?.questions?.map((item:any)=>item?.question_bank_id)
                                                      //             setSectionQuestions(questions?.filter((item:any)=>{
                                                      //                return allQuestionBankIds?.includes(item?.id)
                                                      //             }))
                                                      //             setQuizTimerSeconds(Number(item?.duration)*60)
                                                      //             setQuestionNumber(0)
                                                      //          }
                                                         
                                                      //   }
                                                   }}>
                                                              <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                              <span style={{marginLeft:"2px",marginTop:"-2px"}}><CiLock style={{transform:"scale(1)"}}/></span>

                                                       </span>
                                                   // return <span key={item?.id} className="package_exam_section_button" style={{marginBottom:"0px",}}>
                                                   //             <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                   //             <span style={{marginLeft:"2px",marginTop:"-2px"}}><CiLock style={{transform:"scale(1)"}}/></span>
                                                   //        </span>
                                                  }
                                                })
                                             }

                                             {
                                                exams?.section_wise_time==0 && exams?.examsections.map((item:any,index:number)=>{
                                                     if(activeSection==item?.id){
                                                         return <span  key={item?.id} className="package_exam_section_button_active" style={{marginBottom:"0px"}} onClick={async()=>{
                                                              if(activeSection!=item?.id){
                                                               setActiveSection(item?.id)
                                                               // setSelectedQuestions(item?.questions[0]?.id)
                                                               let allQuestionBankIds=item?.questions?.map((item:any)=>item?.question_bank_id)
                                                               setSectionQuestions(questions?.filter((item:any)=>{
                                                                  return allQuestionBankIds?.includes(item?.id)
                                                               }))
                                                               // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                                               setQuestionNumber(0)
                                                              }
                                                            
                                                         }}>
                                                         <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                         <span style={{marginLeft:"2px",marginTop:"-2px"}}><IoPlayCircleOutline style={{transform:"scale(1)"}}/></span>
                                                      </span>
                                                     }else{
                                                      return  <span key={item?.id}  className="package_exam_section_button_done" style={{marginBottom:"0px"}} onClick={async ()=>{
                                                            if(activeSection!=item?.id){
                                                               setActiveSection(item?.id)
                                                               // setSelectedQuestions(item?.questions[0]?.id)
                                                               let allQuestionBankIds=item?.questions?.map((item:any)=>item?.question_bank_id)
                                                               setSectionQuestions(questions?.filter((item:any)=>{
                                                                  return allQuestionBankIds?.includes(item?.id)
                                                               }))
                                                               // setQuizTimerSeconds(Number(item?.duration)*60-data?.data?.time_taken)
                                                               setQuestionNumber(0)
                                                              }
                                                      }}>
                                                                 <span style={{fontSize:"12px"}}>{item?.section_name}</span>
                                                                 <span style={{marginLeft:"2px",marginTop:"-2px"}}><IoCheckmarkDoneCircleOutline style={{transform:"scale(1)"}}/></span>
                                                          </span>
                                                     }
                                                })
                                             }
                                             {/* <span  className="package_exam_section_button_done" style={{marginBottom:"0px"}}>
                                                         <span style={{fontSize:"12px"}}>juehh</span>
                                                         <span style={{marginLeft:"2px",marginTop:"-2px"}}><IoCheckmarkDoneCircleOutline style={{transform:"scale(1)"}}/></span>
                                              </span>
                                              <span  className="package_exam_section_button_pending" style={{marginBottom:"0px"}}>
                                                         <span style={{fontSize:"12px"}}>juehh</span>
                                                         <span style={{marginLeft:"2px",marginTop:"-2px"}}><MdOutlinePending style={{transform:"scale(1)"}}/></span>
                                              </span> */}
                                             {/* <span className="package_exam_section_button_active" style={{marginBottom:"0px",}}>
                                                <span style={{fontSize:"12px"}}>SSc Exam</span>
                                                <span style={{marginLeft:"2px"}}><IoPlayCircleOutline style={{transform:"scale(1)"}}/></span>
                                             </span>
                                             <span className="package_exam_section_button_active" style={{marginBottom:"0px",}}>
                                                <span style={{fontSize:"12px"}}>SSc Exam</span>
                                                <span style={{marginLeft:"2px"}}><IoPlayCircleOutline style={{transform:"scale(1)"}}/></span>
                                             </span>
                                             <span className="package_exam_section_button_active" style={{marginBottom:"0px",}}>
                                                <span style={{fontSize:"12px"}}>SSc Exam</span>
                                                <span style={{marginLeft:"2px"}}><IoPlayCircleOutline style={{transform:"scale(1)"}}/></span>
                                             </span>
                                             <span className="package_exam_section_button" style={{marginBottom:"0px",}}>
                                                <span style={{fontSize:"12px"}}>SSc Exam</span>
                                                <span style={{marginLeft:"2px"}}><CiLock style={{transform:"scale(1)"}}/></span>
                                             </span>
                                             <span className="package_exam_section_button_active" style={{marginBottom:"0px",}}>
                                                <span style={{fontSize:"12px"}}>SSc Exam</span>
                                                <span style={{marginLeft:"2px"}}><IoPlayCircleOutline style={{transform:"scale(1)"}}/></span>
                                             </span>
                                             <span className="package_exam_section_button" style={{marginBottom:"0px",}}>
                                                <span style={{fontSize:"12px"}}>SSc Exam</span>
                                                <span style={{marginLeft:"2px"}}><CiLock style={{transform:"scale(1)"}}/></span>
                                             </span> */}

                                       </div>


                                       <div className="card my-2  py-1 px-2">
                                              <div className="exam_start_question_section_timer_container">
                                                   <div className="exam_start_question_section_timer_section1_heading">
                                                        <h6>Question No. {questionNumber+1}</h6>
                                                   </div>
                                                   <div className="exam_start_question_section_timer_section2">
                                                        <div className="exam_start_question_section_timer_section2_marks">
                                                            <span className="exam_start_question_section_timer_section2_heading">Marks</span>
                                                            <div >
                                                               <span className="exam_start_question_section_timer_section2_marks_positive">+{sectionQuestions[questionNumber]?.marks?.marks}</span>
                                                               {sectionQuestions[questionNumber]?.marks?.negative_marks>0 && <span className="exam_start_question_section_timer_section2_marks_negative">-{sectionQuestions[questionNumber]?.marks?.negative_marks}</span>}
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
                                       </div>


                                       <div className="row gy-2 mx-1 mb-5" style={{maxHeight:"52vh",overflowY:"scroll",boxSizing:"border-box",paddingBottom:"100px"}}>
                                            <div>
                                                {
                                                    sectionQuestions[questionNumber]?.questions?.map((item4:any)=>{
                                                        return language==item4?.language && <div key={item4?.id} className="preview" dangerouslySetInnerHTML={{__html:`${item4?.question}`}}/>
                                                   })
                                                }
                                               
                                            </div>
                                            <div className="">
                                                 {
                                                         sectionQuestions[questionNumber]?.questions?.find((item4:any)=>item4?.language==language)?.options?.map((item5:any)=>{
                                                              return <div key={item5?.id} className="">
                                                             <label style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
                                                                      {/* <input className="form-check-input text-center text-center" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  checked={userAnsdata?.find((item:any)=>item?.question_id==sectionQuestions[questionNumber]?.questions?.find((item4:any)=>item4?.language==language)?.id && item?.option_id==item5?.id && item?.examsectionid==activeSection)} onChange={(e:any)=>{
                                                                             e?.preventDefault()
                                                                      }}/> */}
                                                                      {
                                                                        userAnsdata?.find((item:any)=>item?.question_id==sectionQuestions[questionNumber]?.questions?.find((item4:any)=>item4?.language==language)?.id && item?.user_ans_option_id==item5?.id && item?.examsectionid==activeSection)?
                                                                        <span style={{width:"21px",height:"21px",borderRadius:"100%",border:"1px solid #2683fd",background:"#2683fd"}}></span>:
                                                                        <span style={{width:"21px",height:"21px",borderRadius:"100%",border:"1px solid #2683fd"}}></span>

                                                                      }
                                                                     
                                                                      
                                                                      <span className="mx-2 preview quiz_start_option_span_inside_p" style={{margin:"0px 3px"}} dangerouslySetInnerHTML={{__html:`${item5?.option}`}}  onClick={()=>{
                                                                           // let payload={
                                                                           //    id:undefined,
                                                                           //    examsectionid:activeSection,
                                                                           //    question_id:sectionQuestions[questionNumber]?.questions?.find((item4:any)=>item4?.language==language)?.id,
                                                                           //    user_ans_option_id:item5?.id
                                                                           // }
                                                                           // let newTemp:any[]=[]
                                                                           // userAnsdata?.map((item:any)=>{
                                                                           //     if(item?.examsectionid==payload?.examsectionid && item?.question_id==payload?.question_id){

                                                                           //     }else{
                                                                           //         newTemp.push(item)
                                                                           //     }
                                                                           // })
                                                                           //  let temp3:any[]=[...newTemp]
                                                                           //  temp3.push(payload)
                                                                           //  setUserAnsData(temp3) 
                                                                           if(exams?.section_wise_time==0){
                                                                              submitQuestionAnsAnswerForExam({
                                                                                 userid:getAuthenticatedUserData()?.id,
                                                                                 packageid:router.query.packageId,
                                                                                 subpackageid:router.query.subpackageId,
                                                                                 examid:router.query.examId,
                                                                                 examsectionid:activeSection,
                                                                                 bundleid:router.query.bundleId,
                                                                                 question_bank_id:sectionQuestions[questionNumber]?.id,
                                                                                 question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>item4?.language==language)?.id,
                                                                                 user_ans_option_id:item5?.id,
                                                                                 question_status:"Answered",
                                                                                 exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                                              })     
                                                                           }else{
                                                                              submitQuestionAnsAnswerForExam({
                                                                                 userid:getAuthenticatedUserData()?.id,
                                                                                 packageid:router.query.packageId,
                                                                                 subpackageid:router.query.subpackageId,
                                                                                 examid:router.query.examId,
                                                                                 examsectionid:activeSection,
                                                                                 bundleid:router.query.bundleId,
                                                                                 question_bank_id:sectionQuestions[questionNumber]?.id,
                                                                                 question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>item4?.language==language)?.id,
                                                                                 user_ans_option_id:item5?.id,
                                                                                 question_status:"Answered",
                                                                                 exam_section_time_taken:Number(exams?.examsections?.find((item:any)=>item?.id==activeSection)?.duration)*60-quizTimerSeconds                                                       
                                                                              })     
                                                                           }   
                                                                                                                                            
                                                                     }}/>
                                                             </label>
                                                          </div>
                                                         })
                                                         // {
                                                         //    if(item4?.language==language){
                                                         //       return item4?.options?.map((item5:any)=>{
                                                         //          return <div key={item5?.id} className="" onClick={()=>{
                                                         //                let payload={
                                                         //                   examsectionid:activeSection,
                                                         //                   question_id:item4?.id,
                                                         //                   option_id:item5?.id
                                                         //                }
                                                         //                let temp=[...userAnsdata]
                                                         //                temp.push(payload)
                                                         //                setUserAnsData(temp)
                                                         //          }}>
                                                         //              <label style={{display:"flex",alignItems:"center"}}>
                                                         //                   <span>
                                                         //                       <input className="form-check-input text-center mx-auto text-center" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                         //                   </span>
                                                         //                    <span className="mx-2 preview quiz_start_option_span_inside_p" style={{margin:"0px 3px"}} dangerouslySetInnerHTML={{__html:`${item5?.option}`}}/>
                                                         //              </label>
                                                         //           </div>
                                                         //       })
                                                         //    }
                                          
                                                         // })
                                                 }
                                            </div>
                                       </div>





                            
                                       <div className="exam_section_main_contaent_fixed_botton_section">
                                          <div>
                                             <button className="btn btn-outline-primary btn-sm my-1" style={{padding:"5px 6px"}} onClick={()=>{
                                                   if(userAnsdata?.filter((item3:any)=>{
                                                      return item3?.examsectionid==activeSection
                                                     })?.find((item4:any)=>(item4?.question_bank_id==sectionQuestions[questionNumber]?.id && item4?.user_ans_option_id)
                                                  )){
                                                   setQuestionTimeAndExamSectionTime({
                                                      userid:getAuthenticatedUserData()?.id,
                                                      packageid:router.query.packageId,
                                                      subpackageid:router.query.subpackageId,
                                                      examid:router.query.examId,
                                                      examsectionid:activeSection,
                                                      bundleid:router.query.bundleId,
                                                      question_bank_id:sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                         return language==item4?.language ? item4?.id : null
                                                      })?.id,
                                                      user_ans_option_id:null,
                                                      exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                      // question_time_taken:
                                                   },"Marked Answered")
                                                   }else{
                                                      setQuestionTimeAndExamSectionTime({
                                                         userid:getAuthenticatedUserData()?.id,
                                                         packageid:router.query.packageId,
                                                         subpackageid:router.query.subpackageId,
                                                         examid:router.query.examId,
                                                         examsectionid:activeSection,
                                                         bundleid:router.query.bundleId,
                                                         question_bank_id:sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                            return language==item4?.language ? item4?.id : null
                                                         })?.id,
                                                         user_ans_option_id:null,
                                                         exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                         // question_time_taken:
                                                      },"Marked")
                                                   }
                                                  
                                                   // setsectionQuestions[questionNumber](item2?.id)
                                                   if(questionNumber<sectionQuestions?.length-1){
                                                      setQuestionNumber((pre)=>pre+1)
                                                   }else{
                                                      setQuestionNumber(0)
                                                   }
                                             }}>Mark for Review & Next</button>
                                             <button className="btn btn-outline-primary btn-sm ms-3 my-1" style={{padding:"5px 6px"}}
                                              onClick={async ()=>{
                                                   const {data}=await clearResponseDeleteQuestionAndAnswer({
                                                      userid:getAuthenticatedUserData()?.id,
                                                      packageid:router.query.packageId,
                                                      subpackageid:router.query.subpackageId,
                                                      examid:router.query.examId,
                                                      examsectionid:activeSection,
                                                      bundleid:router.query.bundleId,
                                                      question_bank_id:sectionQuestions[questionNumber]?.id,
                                                      question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                         return language==item4?.language ? item4?.id : null
                                                      })?.id,
                                                   })
                                                   if(data?.success){
                                                      setUserAnsData(data?.data)
                                                   }
                                              }}
                                             >Clear Response</button>
                                          </div>
                                          <div>
                                             <button className="btn btn-outline-primary btn-sm my-1" style={{padding:"5px 6px"}} onClick={()=>{
                                                 if(userAnsdata?.filter((item3:any)=>{
                                                   return item3?.examsectionid==activeSection
                                                  })?.find((item4:any)=>(item4?.question_bank_id==sectionQuestions[questionNumber]?.id && item4?.user_ans_option_id)
                                               )){

                                                  setQuestionTimeAndExamSectionTime({
                                                   userid:getAuthenticatedUserData()?.id,
                                                   packageid:router.query.packageId,
                                                   subpackageid:router.query.subpackageId,
                                                   examid:router.query.examId,
                                                   examsectionid:activeSection,
                                                   bundleid:router.query.bundleId,
                                                   question_bank_id:sectionQuestions[questionNumber]?.id,
                                                   question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                      return language==item4?.language ? item4?.id : null
                                                   })?.id,
                                                   user_ans_option_id:null,
                                                   exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                   // question_time_taken:
                                                },"Answered")
                                             }else{
                                                setQuestionTimeAndExamSectionTime({
                                                   userid:getAuthenticatedUserData()?.id,
                                                   packageid:router.query.packageId,
                                                   subpackageid:router.query.subpackageId,
                                                   examid:router.query.examId,
                                                   examsectionid:activeSection,
                                                   bundleid:router.query.bundleId,
                                                   question_bank_id:sectionQuestions[questionNumber]?.id,
                                                   question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                      return language==item4?.language ? item4?.id : null
                                                   })?.id,
                                                   user_ans_option_id:null,
                                                   exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                   // question_time_taken:
                                                },"Not Answered")
                                             }
                                                  if(questionNumber<sectionQuestions?.length-1){
                                                   setQuestionNumber((pre)=>pre+1)
                                                  }else{
                                                   setQuestionNumber(0)
                                                  }
                                             }}>Save & Next</button>
                                          </div>
                                       </div>
                              </div>
                           </div>

                           <div className="col-lg-3 col-12 my-6 my-lg-2">
                              <div className="card py-2 px-2" style={{minHeight:"88vh",position:"relative"}}>
                                  <div>
                                     <img src={getAuthenticatedUserData()?.profile_image? getAuthenticatedUserData()?.profile_image:"/img/avatar.svg"} alt="Avatar" style={{width:"30px",height:"30px",borderRadius:"100%",marginRight:"10px",border:"0.3px solid #ede4e4"}}/>
                                                                       <span>{getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname}</span>
                                  </div>
                                  <div className="mt-3">
                                     <span style={{marginRight:"5px"}}><img src="/img/answered.png" alt="Not Visited" style={{width:"20px"}}/> <span style={{fontSize:"13px",marginLeft:"4px"}}>Answered</span></span>
                                     <span style={{marginRight:"5px"}}><img src="/img/not-answered.png" alt="Not Visited" style={{width:"20px"}}/><span style={{fontSize:"13px",marginLeft:"4px"}}>Not Answered</span></span>
                                     <span style={{marginRight:"5px"}}><img src="/img/marked.png" alt="Not Visited" style={{width:"20px"}}/><span style={{fontSize:"13px",marginLeft:"4px"}}>Marked</span></span> <br/>
                                     <span style={{marginRight:"5px"}}><img src="/img/not-visited.png" alt="Not Visited" style={{width:"20px"}}/><span style={{fontSize:"13px",marginLeft:"4px"}}>Not Visited</span></span>
                                     <span style={{marginRight:"5px"}}><img src="/img/marked-answered.png" alt="Not Visited" style={{width:"20px"}}/><span style={{fontSize:"13px",marginLeft:"4px"}}>Mark & Answered</span></span>
                                  </div>

                                  <div className="card my-3 py-2 px-3">
                                       <div>
                                          <span style={{fontSize:"15px"}}>Section:-</span>
                                          <span style={{fontSize:"13px",marginLeft:"20px"}}>
                                             {
                                                exams?.examsections.map((item:any,index:number)=>{
                                                   if(activeSection==item?.id){
                                                      return `${item?.section_name}`
                                                   }
                                                })
                                             }
                                          </span>
                                       </div>
                                  </div>

                                  <div className="card py-2 px-3">
                                       <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap"}}>
                                           

                                          {
                                             sectionQuestions?.map((item2:any,index:number)=>{
                                                if(item2?.id==sectionQuestions[questionNumber]?.id){
                                                   return <span key={item2?.id} className="active_exam_questions" onClick={()=>{
                                                      
                                                      setQuestionTimeAndExamSectionTime({
                                                         userid:getAuthenticatedUserData()?.id,
                                                         packageid:router.query.packageId,
                                                         subpackageid:router.query.subpackageId,
                                                         examid:router.query.examId,
                                                         examsectionid:activeSection,
                                                         bundleid:router.query.bundleId,
                                                         question_bank_id:sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                            return language==item4?.language ? item4?.id : null
                                                         })?.id,
                                                         user_ans_option_id:null,
                                                         exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                         // question_time_taken:
                                                      },"Not Answered")
                                                      // setsectionQuestions[questionNumber](item2?.id)
                                                      setQuestionNumber(index)
                                                     
                                                   }}>{index+1}</span>
                                                }
                                                else if(userAnsdata?.filter((item3:any)=>{
                                                     return item3?.examsectionid==activeSection
                                                 })?.find((item4:any)=>(item4?.question_bank_id==item2?.id && item4?.question_status=="Answered")
                                                 )){
                                                   return <span key={item2?.id} className="answered_exam_questions" onClick={()=>{
                                                      
                                                      setQuestionTimeAndExamSectionTime({
                                                         userid:getAuthenticatedUserData()?.id,
                                                         packageid:router.query.packageId,
                                                         subpackageid:router.query.subpackageId,
                                                         examid:router.query.examId,
                                                         examsectionid:activeSection,
                                                         bundleid:router.query.bundleId,
                                                         question_bank_id:sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                            return language==item4?.language ? item4?.id : null
                                                         })?.id,
                                                         user_ans_option_id:null,
                                                         exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                         // question_time_taken:
                                                      },"Not Answered")
                                                      // setsectionQuestions[questionNumber](item2?.id)
                                                      setQuestionNumber(index)
                                                     
                                                   }}>{index+1}</span>
                                                 }else if(userAnsdata?.filter((item3:any)=>{
                                                   return item3?.examsectionid==activeSection
                                                })?.find((item4:any)=>(item4?.question_bank_id==item2?.id && item4?.question_status=="Not Answered")
                                                )){
                                                   return <span key={item2?.id} className="not_answered_exam_questions" onClick={()=>{
                                                      
                                                      setQuestionTimeAndExamSectionTime({
                                                         userid:getAuthenticatedUserData()?.id,
                                                         packageid:router.query.packageId,
                                                         subpackageid:router.query.subpackageId,
                                                         examid:router.query.examId,
                                                         examsectionid:activeSection,
                                                         bundleid:router.query.bundleId,
                                                         question_bank_id:sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                            return language==item4?.language ? item4?.id : null
                                                         })?.id,
                                                         user_ans_option_id:null,
                                                         exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                         // question_time_taken:
                                                      },"Not Answered")
                                                      // setsectionQuestions[questionNumber](item2?.id)
                                                      setQuestionNumber(index)
                                                     
                                                   }}>{index+1}</span>
                                                }else if(userAnsdata?.filter((item3:any)=>{
                                                   return item3?.examsectionid==activeSection
                                                })?.find((item4:any)=>(item4?.question_bank_id==item2?.id && item4?.question_status=="Marked")
                                                )){
                                                   return <span key={item2?.id} className="marked_exam_questions" onClick={()=>{
                                                      
                                                      setQuestionTimeAndExamSectionTime({
                                                         userid:getAuthenticatedUserData()?.id,
                                                         packageid:router.query.packageId,
                                                         subpackageid:router.query.subpackageId,
                                                         examid:router.query.examId,
                                                         examsectionid:activeSection,
                                                         bundleid:router.query.bundleId,
                                                         question_bank_id:sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                            return language==item4?.language ? item4?.id : null
                                                         })?.id,
                                                         user_ans_option_id:null,
                                                         exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                         // question_time_taken:
                                                      },"Not Answered")
                                                      // setsectionQuestions[questionNumber](item2?.id)
                                                      setQuestionNumber(index)
                                                     
                                                   }}>{index+1}</span>
                                                }
                                                else if(userAnsdata?.filter((item3:any)=>{
                                                   return item3?.examsectionid==activeSection
                                                })?.find((item4:any)=>(item4?.question_bank_id==item2?.id && item4?.question_status=="Marked Answered")
                                                )){
                                                   return <span key={item2?.id} className="marked_and_answered_exam_questions" onClick={()=>{
                                                      
                                                      setQuestionTimeAndExamSectionTime({
                                                         userid:getAuthenticatedUserData()?.id,
                                                         packageid:router.query.packageId,
                                                         subpackageid:router.query.subpackageId,
                                                         examid:router.query.examId,
                                                         examsectionid:activeSection,
                                                         bundleid:router.query.bundleId,
                                                         question_bank_id:sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                            return language==item4?.language ? item4?.id : null
                                                         })?.id,
                                                         user_ans_option_id:null,
                                                         exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                         // question_time_taken:
                                                      },"Not Answered")
                                                      // setsectionQuestions[questionNumber](item2?.id)
                                                      setQuestionNumber(index)
                                                     
                                                   }}>{index+1}
                                                              <span className="marked_and_answered_tick_symbol">✔</span>
                                                          </span>
                                                }else{
                                                   return <span key={item2?.id} className="not_visited_exam_questions" onClick={()=>{
                                                      
                                                      setQuestionTimeAndExamSectionTime({
                                                         userid:getAuthenticatedUserData()?.id,
                                                         packageid:router.query.packageId,
                                                         subpackageid:router.query.subpackageId,
                                                         examid:router.query.examId,
                                                         examsectionid:activeSection,
                                                         bundleid:router.query.bundleId,
                                                         question_bank_id:sectionQuestions[questionNumber]?.id,
                                                         question_id: sectionQuestions[questionNumber]?.questions?.find((item4:any)=>{
                                                            return language==item4?.language ? item4?.id : null
                                                         })?.id,
                                                         user_ans_option_id:null,
                                                         exam_section_time_taken:Number(exams?.exam_duration)*60-quizTimerSeconds                                                       
                                                         // question_time_taken:
                                                      },"Not Answered")
                                                      // setsectionQuestions[questionNumber](item2?.id)
                                                      setQuestionNumber(index)
                                                     
                                                   }}>{index+1}</span>
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
                                                         // bundleid:router.query.bundleId,
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
                                                //          bundleid:router.query.bundleId,
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
                                      <button className="btn btn-outline-primary btn-sm w-100 my-1" style={{padding:"5px 6px"}} onClick={async ()=>{
                                          
                                          Swal.fire({
                                            title: "Are you sure?",
                                            text: "You want to submit the exam!",
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText: "Submit"
                                          }).then(async (result:any) => {
                                            if (result.isConfirmed) {
                                                try{
                                                    const {data}=await submitExam({
                                                       userid:getAuthenticatedUserData()?.id,
                                                       packageid:router.query.packageId,
                                                       subpackageid:router.query.subpackageId,
                                                       examid:router.query.examId,
                                                       bundleid:router.query.bundleId,
                                                    })
                                                    if(data?.success){
                                                       SuccessMessage("Exam Submitted Successfully")
                                                       router.push("/dashboard/home")
                                                    }else{
                                                        ErrorMessage(data?.message)
                                                    }
                                              }catch(err){
    
                                              }
                                            }
                                          })
                                       }}>Submit Exam</button>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
              </div>
         </div>
         <Modal open={open} onClose={()=>{
         }}>
            <div style={{padding:"10px 15px",textAlign:"center",maxWidth:"400px"}}>
               <img src="https://cdn-icons-png.flaticon.com/512/5757/5757923.png" style={{width:"90px",height:"90px",margin:"auto auto 10px auto",textAlign:"center"}}/>
               {exams?.section_wise_time==0 ? <h2 style={{margin:"3px auto"}}>Exam Timeout!!</h2>:<h2 style={{margin:"3px auto"}}>Exam Section Timeout!!</h2>}
               {exams?.section_wise_time==0 ? <p style={{margin:"3px auto"}}>
                  Please Submit the Exam.
               </p>:<p style={{margin:"3px auto"}}>
                  Go to Next Section.
               </p>}
               {exams?.section_wise_time==0 && <div style={{margin:"10px auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <button className="btn btn-primary btn-sm" onClick={async ()=>{

                      Swal.fire({
                        title: "Are you sure?",
                        text: "You want to submit the exam!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Submit"
                      }).then(async (result:any) => {
                        if (result.isConfirmed) {
                            try{
                                const {data}=await submitExam({
                                 userid:getAuthenticatedUserData()?.id,
                                 packageid:router.query.packageId,
                                 subpackageid:router.query.subpackageId,
                                 examid:router.query.examId,
                                 bundleid:router.query.bundleId,
                                })
                                if(data?.success){
                                  SuccessMessage("Exam Submitted Successfully")
                                  router.push("/dashboard/home")
                                }else{
                                   ErrorMessage(data?.message)
                                }
                         }catch(err){
   
                         }
                        }
                      })
                   }}>Submit Exam</button>
                   {/* <button className="btn btn-danger btn-sm" onClick={async ()=>{
                     setOpen(false)
                      try{
                         const {data}=await findExamSectionLeftTime({
                           userid:getAuthenticatedUserData()?.id,
                           packageid:router.query.packageId,
                           subpackageid:router.query.subpackageId,
                           examid:router.query.examId,
                           examsectionid:activeSection,
                           bundleid:router.query.bundleId                         
                         })
                         setOpen(false)
                         console.log(data)
                      }catch(err){

                      }

                   }}>Cancel</button> */}
               </div>}
               {
                  exams?.section_wise_time==1 && <div style={{margin:"10px auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <button className="btn btn-primary btn-sm" onClick={async ()=>{
                                 
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You want to submit the exam!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Submit"
                                }).then(async (result:any) => {
                                    if (result.isConfirmed) {
                                        try{
                                            const {data}=await submitExam({
                                               userid:getAuthenticatedUserData()?.id,
                                               packageid:router.query.packageId,
                                               subpackageid:router.query.subpackageId,
                                               examid:router.query.examId,
                                               bundleid:router.query.bundleId,
                                            })
                                            if(data?.success){
                                               SuccessMessage("Exam Submitted Successfully")
                                               router.push("/dashboard/home")
                                            }else{
                                             ErrorMessage(data?.message)
                                            }
                                      }catch(err){
     
                                      }
                                    }
                                })
                          }}>Submit Exam</button>
                        <button className="btn btn-warning btn-sm" onClick={async ()=>{
                        // setOpen(false)
                           try{
                             
                              let examSectionId=exams?.examsections?.slice()?.map((item:any)=>item?.id)
                              let index = examSectionId.indexOf(activeSection)

                              if(index!=examSectionId?.length-1){
                                    const {data}=await findExamSectionLeftTime({
                                       userid:getAuthenticatedUserData()?.id,
                                       packageid:router.query.packageId,
                                       subpackageid:router.query.subpackageId,
                                       examid:router.query.examId,
                                       bundleid:router.query.bundleId  
                                    })
                                    if(data?.success){
                                       setActiveSection(data?.examsectionid)
                                       let allQuestionBankIds=exams?.examsections?.find((item:any)=>item?.id==data?.examsectionid)?.questions?.map((item:any)=>item?.question_bank_id)
                                       setSectionQuestions(questions?.filter((item:any)=>{
                                          return allQuestionBankIds?.includes(item?.id)
                                       }))
                                       setQuizTimerSeconds(Number(exams?.examsections?.find((item:any)=>item?.id==data?.examsectionid)?.duration)*60-data?.time_taken)
                                       setQuestionNumber(0)
                                       setOpen(false)
                                       // break
                                    }
                              }

                              // if(index!=examSectionId?.length-1){
                              //    const {data}=await findExamSectionLeftTime({
                              //       userid:getAuthenticatedUserData()?.id,
                              //       packageid:router.query.packageId,
                              //       subpackageid:router.query.subpackageId,
                              //       examid:router.query.examId,
                              //       bundleid:router.query.bundleId  
                              //    })
                              //    if(data?.success){
                              //       setActiveSection(data?.sectionid)
                              //       let allQuestionBankIds=exams?.examsections?.find((item:any)=>item?.id==data?.sectionid)?.questions?.map((item:any)=>item?.question_bank_id)
                              //       setSectionQuestions(questions?.filter((item:any)=>{
                              //          return allQuestionBankIds?.includes(item?.id)
                              //       }))
                              //       setQuizTimerSeconds(Number(exams?.examsections?.find((item:any)=>item?.id==data?.sectionid)?.duration)*60-data?.time_taken)
                              //       setQuestionNumber(0)
                              //       setOpen(false)
                              //    }
                              // }
                           }catch(err){

                           }

                        }}>Next</button>
                  </div>}
            </div>
        </Modal>
    </Fragment>
  )
}

export default BundleStart