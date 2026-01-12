import { FC, Fragment } from 'react';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';
import ratingGenerate from 'utils/ratings';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LiaSalesforce } from 'react-icons/lia';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineLanguage } from "react-icons/md";
import useAuthorization from 'hooks/useAuthorization';
import { ErrorMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { checkUserProfileStatus, getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { intializedQuizAnalysisStatus } from 'components/request/request';

// =========================================
type QuizCardProps = {
  image?: string;
  title?: string;
  new?: boolean;
  sale?: boolean;
  rating: number;
  category: string;
  salePrice?: number;
  className?: string;
  regularPrice?: number;
};
// =========================================

const QuizCardAuth: FC<any> = (props) => {
  const router=useRouter()
  const [auth,setAuth]=useAuthorization()


  return (
    <Fragment>
         <div className={`card col-12 col-lg-12 my-2 py-3 px-3 col-12`} style={{cursor:"pointer"}} onClick={()=>{
         }}>
                            <div className="quiz_detail_main_container ">
                                  <div>
                                       <div className="quiz_detail_section1_first">
                                           <button className="quiz_section_free_quiz_button">{props?.tblquiz_type?.quiz_type}</button>
                                           <span className="quiz_section_title_top">{props?.name}</span>
                                       </div>
                                       <div className="quiz_detail_section1_second">
                                           <h6 style={{fontSize:"11px",marginBottom:"0px"}}>Key:{" "} {props?.quizKey?.substring(0,14)}...</h6>
                                                <button className="btn quiz_section_start_button btn-sm" style={{padding:"5px 10px",fontSize:"12px",fontWeight:"400"}}  data-bs-toggle="modal"
                      data-bs-target="#modal-signin">Get Started</button>
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
                            </div>
         </div>
    </Fragment>
  );
};

export default QuizCardAuth;
