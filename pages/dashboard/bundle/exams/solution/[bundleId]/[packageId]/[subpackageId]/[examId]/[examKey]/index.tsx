import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkBundlePackageIsAvailableForUser, checkPackageIsAvailableForUser, clearResponseDeleteQuestionAndAnswer, findExamSectionLeftTime, findTotalTimeTakenForExamSection, findTotalTimeTakenForExamSectionSectionWize, getExamDetailWithQuestions, getExamDetailWithQuestionsAndAnswer, getExamQuestionStatus, setExamSectionTimeAndQuestionTime, submitExam, submitQuestionAnswerForExam, updateExamSectionTimeStatusOnEverySeconds, updateExamSectionTimeStatusOnEverySecondsSecionWise } from 'components/request/request';
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
const BundleSolution = () => {
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
                        let examId=router.query.examId
                        let examKey=router.query.examKey
                        const {data}=await getExamDetailWithQuestionsAndAnswer(examId,examKey)
                        if(data?.success){
                           if(data?.questions?.length<=0){
                              ErrorMessage("You are not authorized to access.")
                              router.push("/dashboard/home")
                           }else{
                              dispatch(setExamDetail(data?.exam))
                              setActiveSection(data?.exam?.examsections[0]?.id)
                              let allQuestionBankIds=data?.exam?.examsections[0]?.questions?.map((item:any)=>item?.question_bank_id)
                              setSectionQuestions(data?.questions?.filter((item:any)=>{
                                 return allQuestionBankIds?.includes(item?.id)
                              }))
                              dispatch(setExamQuestions(data?.questions))
                           }
                        }
                }
            }
        }catch(err){
            ErrorMessage("You are not authorized to access")
            router.push("/dashboard/home")
        }
    }
    useEffect(()=>{
        checkPackageAvailability()
    },[router,useSelector])
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
                                        <h6 style={{marginBottom:"0px",fontSize:"14px"}}>{exams?.name} {" "} (Solution)</h6>
                                    </div>
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
                                                exams?.examsections.map((item:any,index:number)=>{
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
                                                                        item5?.right_option==1?
                                                                        <span style={{width:"21px",height:"21px",borderRadius:"100%",border:"1px solid #2683fd",background:"#2683fd"}}></span>:
                                                                        <span style={{width:"21px",height:"21px",borderRadius:"100%",border:"1px solid #2683fd"}}></span>

                                                                      }
                                                                      <span className="mx-2 preview quiz_start_option_span_inside_p" style={{margin:"0px 3px"}} dangerouslySetInnerHTML={{__html:`${item5?.option}`}}/>
                                                             </label>
                                                          </div>
                                                         })
                                                 }
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
                                                   return <span key={item2?.id} className="active_exam_questions_show" onClick={()=>{
                                                      setQuestionNumber(index)
                                                   }}>{index+1}</span>
                                                }else{
                                                   return <span key={item2?.id} className="not_visited_exam_questions_not_show" onClick={()=>{
                                                      setQuestionNumber(index)
                                                   }}>{index+1}</span>
                                                }
                                                
                                             })
                                          }
                                       </div>
                                  </div>

                                  <div className="exam_section_sidebar_fixed_botton_section" style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                                      <button className="btn btn-outline-primary btn-sm my-1" style={{width:"100px",padding:"5px 6px"}} onClick={async ()=>{
                                          if(questionNumber<sectionQuestions?.length-1){
                                            setQuestionNumber((pre)=>pre+1)
                                          }
                                       }}>Next</button>

                                       <button className="btn btn-outline-primary btn-sm my-1 ms-2" style={{padding:"5px 6px"}} onClick={async ()=>{
                                          router.push("/dashboard/home")
                                       }}>Back to Home</button>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
              </div>
         </div>
    </Fragment>
  )
}

export default BundleSolution