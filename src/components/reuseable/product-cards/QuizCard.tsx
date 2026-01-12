import { FC, Fragment } from 'react';
import { useRouter } from 'next/router';
import useAuthorization from 'hooks/useAuthorization';
import { ErrorMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkUserProfileStatus, getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { intializedQuizAnalysisStatus } from 'components/request/request';

const QuizCard: FC<any> = (props) => {
  const router = useRouter()

  return (
    <Fragment>
      <div className={`col-12 col-lg-12 my-1 py-1 px-1 col-12`} style={{ cursor: "pointer" }} onClick={() => {
      }}>

        <div className="live-test-card">
          {/* <button className='live-test'>Live Test</button> */}
          <button className='free ms-3'>{props?.tblquiz_type?.quiz_type}</button>
          <h5>{props?.name}</h5>
          <div className="test-details mt-1">
            <div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='15' width='15' fill='A5A5A5'><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" /></svg></span>
              <span className='ms-1'>{props?.total_questions} Questions</span>
            </div>
            <div><span className='ms-1'>| {props?.duration} Mins.</span></div>
            <div><span className='ms-1'>| {props?.marks} Marks</span></div>
          </div>
          <div className="test-date mt-1">
            <div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='15' width='15' fill='A5A5A5'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></span>
              <span className='ms-1'>{new Date(props?.createdAt)?.toLocaleDateString() + "-" + new Date(props?.createdAt)?.toLocaleTimeString()}</span>
            </div>
            <div>
              {props?.quizReportStatus?.find((item: any) => item?.quiz_id == props?.id) &&
                <button className='free me-1' onClick={async () => {
                  router.push(`/dashboard/home/report/${props?.quizKey}`)
                }}>View Report</button>}
              <button className='free' onClick={async () => {
                try {
                  if (!checkUserProfileStatus()) {
                    ErrorMessage("Please complete your profile.")
                    router.push("/dashboard/profile")
                  }
                  else if (checkUserProfileStatus()) {
                    // router.push(`/dashboard/home/start/${props?.quizKey}`)
                    let payload = {
                      user_id: getAuthenticatedUserData()?.id,
                      quiz_id: props?.id
                    }
                    const { data } = await intializedQuizAnalysisStatus(payload)
                    if (data?.success) {
                      router.push(`/dashboard/home/start/${props?.quizKey}`)
                    } else {
                      ErrorMessage(data?.message)
                    }
                  } else {
                    ErrorMessage("You are not authorized to access.")
                    router.push("/")
                  }
                } catch (err) {

                }
              }}>Start Now</button>
            </div>
          </div>
          <div className='syllabus-live-test-card mt-2'>
            <span className='testerika-color'>Syllabus</span>
            <span className='ms-2'><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
            <span className='ms-2 text-dark'>{props?.language}</span>
          </div>
        </div>
        {/* <div className="quiz_detail_main_container quiz_detail_container_main_report_start_button">
                                  <div>
                                       <div className="quiz_detail_section1_first">
                                           <button className="quiz_section_free_quiz_button">{props?.tblquiz_type?.quiz_type}</button>
                                           <span className="quiz_section_title_top">{props?.name}</span>
                                       </div>
                                       <div className="quiz_detail_section1_second">
                                               <h6 style={{fontSize:"11px",marginBottom:"0px"}}>Key:{" "} {props?.quizKey?.substring(0,14)}...</h6>
                                       </div>
                                       <div className="quiz_detail_section1_third">
                                       <div className="quiz_detail_section1_third_question">
                                               <span><AiOutlineQuestionCircle style={{transform:"scale(1.2)"}}/></span>
                                               <span className="quyiz_section_first_text_content" style={{fontSize:"13px"}}>{props?.total_questions} Questions</span>
                                           </div>
                                           <div className="quiz_detail_section1_third_marks">
                                               <span><MdOutlineMessage style={{transform:"scale(1.2)"}}/></span>
                                               <span  className="quyiz_section_first_text_content" style={{fontSize:"13px"}}>{props?.marks} Marks</span>
                                           </div>
                                           <div className="quiz_detail_section1_third_time">
                                               <span><LuAlarmClock style={{transform:"scale(1.2)"}}/></span>
                                               <span  className="quyiz_section_first_text_content" style={{fontSize:"13px"}}>{props?.duration} Minutes</span>
                                           </div>                                                
                                       </div>
                                       <div className="quiz_detail_section1_second">
                                           <div className="quiz_detail_section1_third_question">
                                               <span><MdOutlineLanguage style={{transform:"scale(1.4)",color:"#7a9cad"}}/></span>
                                               <span className="quyiz_section_first_text_content_language" style={{fontSize:"13px"}}>{props?.language}</span>
                                           </div>
                                       </div>
                                  </div>
                                  <div>
                                      {props?.quizReportStatus?.find((item:any)=>item?.quiz_id==props?.id) && <span style={{fontSize:"12px",marginRight:"5px",cursor:'Pointer',color:"#3f78e0"}} onClick={()=>{
                                        router.push(`/dashboard/home/report/${props?.quizKey}`)
                                      }}>
                                        View Report
                                      </span>}
                                      <button className="btn quiz_section_start_button btn-sm" style={{padding:"5px 10px",fontSize:"12px",fontWeight:"400"}}  onClick={async ()=>{
                                                      try{
                                                          if(!checkUserProfileStatus()){
                                                              ErrorMessage("Please complete your profile.")
                                                              router.push("/dashboard/profile")
                                                          }
                                                          else if(checkUserProfileStatus()){
                                                              // router.push(`/dashboard/home/start/${props?.quizKey}`)
                                                              let payload={
                                                                user_id:getAuthenticatedUserData()?.id,
                                                                quiz_id:props?.id
                                                              }
                                                              const {data}=await intializedQuizAnalysisStatus(payload)
                                                              if(data?.success){
                                                                router.push(`/dashboard/home/start/${props?.quizKey}`)
                                                              }else{
                                                                ErrorMessage(data?.message)
                                                              }
                                                          }else{
                                                              ErrorMessage("You are not authorized to access.")
                                                              router.push("/")
                                                          }
                                                      }catch(err){

                                                      }
                                      }}>Start Now</button>
                                  </div>
                                  
                            </div> */}
      </div>
    </Fragment>
  );
};

export default QuizCard;
