import dayjs from 'dayjs';
import { FC, useState } from 'react';
import NextLink from './links/NextLink';
import ratingGenerate from 'utils/ratings';
import FigureImage from 'components/reuseable/FigureImage';
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import RatingModal from 'components/dashboardComponent/common/RatingModal';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { deleteQuizReview } from 'components/request/request';
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';


// ===================================================================
type ReviewCardProps = {
  createdAt: Date | string;
  actions: { like: number; dislike: number };
  user: { id: string | number; name: string; image: string };
  review: { body: string; rating: number; title: string | null };
};
// ===================================================================

const ReviewCard: FC<any> = (props) => {
  const {userDetail,review,getAllQUizReview}=props
  const [data,setData]=useState<any>(review)
  return (
    <li className="comment">
      <div className="comment-header d-md-flex align-items-center">
        <FigureImage width={120} height={120} src={userDetail?.profile_image?userDetail?.profile_image:""} className="user-avatar rounded-circle overflow-hidden" />

        <div>
          <h6 className="comment-author">
            <a href="#"  className="link-dark" onClick={(e:any)=>{
               e?.preventDefault()
            }}>{userDetail?.firstname+" "+userDetail?.lastname}</a>
            {review?.user_id==getAuthenticatedUserData()?.id && <span style={{marginLeft:"5px",color:"red",cursor:"pointer"}} onClick={async ()=>{
                  const {data}=await deleteQuizReview(review?.id)
                  if(data?.success){
                    SuccessMessage(data?.message)
                    getAllQUizReview()
                  }else{
                    ErrorMessage("Something went wrong.Please try again.")
                  }
            }}><MdDeleteOutline/></span>}
            {/* <span style={{marginLeft:"5px",color:"green",cursor:"pointer"}} data-bs-toggle="modal"
                      data-bs-target="#modal-rating"  onClick={()=>{
               if(review?.id && review?.quiz_id && review?.user_id){
                setData(review)
               }
            }}><AiOutlineEdit/></span> */}
          </h6>

          <ul className="post-meta">
            <li>
              <i className="uil uil-calendar-alt" />
              {dayjs(review?.createdAt).format('DD MMM YYYY')}
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mt-1 mb-2">
        <span style={{marginTop:"0px",marginBottom:"0px"}} className={`ratings ${ratingGenerate(review?.rate)}`} />
        <p style={{marginTop:"0px",marginBottom:"0px"}}>{review?.review}</p>
      </div>
      
      <RatingModal data={data}/>

    
    </li>
  );
};

export default ReviewCard;
