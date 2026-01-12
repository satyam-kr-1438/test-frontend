import { FC, useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { ErrorMessage } from './messageToast/AlertMessageToast';

const RatingModal: FC<any> = ({data}) => {
  const [userReview,setUserReview]=useState({
    id:data?.id,
    user_id:data?.user_id,
    rate:data?.rate,
    review:data?.review
   })
   useEffect(()=>{
     setUserReview({
      id:data?.id,
      user_id:data?.user_id,
      rate:data?.rate,
      review:data?.review
     })
   },[data])
  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      id="modal-rating"
      className="modal fade"
      style={{ display: 'none',zIndex:"99999999" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />   
            <div>
                     <div>
                          <h4>Are you happy with the quality of Questions??</h4>
                     </div>
                      <form className="text-start mb-3">
                        <div className="mb-4">
                           <label style={{width:"100%"}}>
                               Rate Us
                           </label>
                           <Rating name="half-rating"  value={userReview?.rate} onChange={(e:any)=>{
                                                                 setUserReview({...userReview,rate:e?.target?.value})
                                                            }}/>
                             
                           <label className="my-3" style={{width:"100%"}}>
                               Write Review
                               <textarea placeholder='Write Review...'  value={userReview?.review} rows={3} className="form-control p-2" onChange={(e:any)=>{
                                                                 setUserReview({...userReview,review:e?.target?.value})
                                }}/>
                           </label>
                          
                          
                          {/* <label htmlFor="loginEmail">Phone Number</label> */}
                        </div>
                        <button className="btn btn-primary rounded-pill btn-login w-100 mb-2"  onClick={async (e:any)=>{
                                                                 e?.preventDefault()
                                                                 if(userReview?.rate<=0){
                                                                      ErrorMessage("Plese rate the quiz")
                                                                 }else if(userReview?.review?.trim()==""){
                                                                      ErrorMessage("Plese write review")
                                                                 }else{
                                                                      // const {data}=await updateQuizReview({...userReview,user_id:getAuthenticatedUserData()?.id,quiz_key:router?.query?.quizSlug})
                                                                      // if(data?.success){
                                                                      //      SuccessMessage("Review Submitted Successfully")
                                                                      //      setUserReview({
                                                                      //           user_id:undefined,
                                                                      //           rate:0,
                                                                      //           review:""
                                                                      //      })
                                                                      //      getAllQUizReview()
                                                                      // }else{
                                                                      //      ErrorMessage(data?.message)
                                                                      // }
                                                                 }
                                                          }}>
                          Edit Review
                        </button>
                      </form>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
