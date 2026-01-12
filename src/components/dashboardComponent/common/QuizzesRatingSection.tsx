import React, { FC, Fragment } from 'react'
import ReviewCard from 'components/reuseable/ReviewCard';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useRouter } from 'next/router';

const QuizzesRatingSection:FC<any> = ({review,user,getAllQUizReview,ratingDistribution,setReviewdata}) => {
  const router=useRouter()
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  return (
    <Fragment>
           <section className="wrapper bg-light">
              <div className="container py-10 py-md-5">
                <div className="row gx-md-8 gx-xl-12 gy-10">
                  {/* ========== sidebar section ========== */}
                  <aside className="col-lg-4 col-12 sidebar">
                      <div className="widget mt-1">
                            <h4 className="widget-title mb-3">Ratings Distribution</h4>

                            <div className="mb-5">
                              <span className="ratings four" />
                            </div>

                            <ul className="progress-list">
                              <li>
                                  <p>5 Stars</p>
                                  <BorderLinearProgress variant="determinate" value={ratingDistribution?.five} />
                                </li>
                                <li>
                                  <p>4 Stars</p>
                                  <BorderLinearProgress variant="determinate" value={ratingDistribution?.four} />
                                </li>
                                <li>
                                  <p>3 Stars</p>
                                  <BorderLinearProgress variant="determinate" value={ratingDistribution?.three} />
                                </li>
                                <li>
                                  <p>2 Stars</p>
                                  <BorderLinearProgress variant="determinate" value={ratingDistribution?.two} />
                                </li>
                                <li>
                                  <p>1 Stars</p>
                                  <BorderLinearProgress variant="determinate" value={ratingDistribution?.one} />
                                </li>
                            </ul>
                      </div>
                  </aside>

                  {/* ========== reviews section ========== */}
                  {
                    review?.length<=0?<div className="col-lg-8 col-12 text-center max-auto"> <div className="row">
                          <div>
                              <img src="/img/notAvailable.png" style={{maxWidth:"250px",textAlign:"center",margin:"auto"}} alt="Not Available"/>
                          </div>
                          <div className="my-4">
                              <h5>Content you are looking for isn't available at this moment</h5>
                              <button className="btn btn-primary btn-sm my-2" onClick={()=>{
                                router.push("/dashboard/home")
                              }}>Back to Quizzes</button>
                          </div>
                    </div></div>:
                    <div className="col-lg-8 col-12">
                      <div className="row align-items-center mb-10 position-relative zindex-1">
                        <div className="col-12 pe-xl-20">
                          <h2 className="display-6 mb-0">Ratings &amp; Reviews</h2>
                        </div>

                      
                      </div>

                      <div id="comments">
                        <ol id="singlecomments" className="commentlist">
                          {review?.length>0 && review.map((item:any,index:any) => (
                            <ReviewCard key={index} review={item}  userDetail={user.find((item2:any)=>item2?.id==item?.user_id)} getAllQUizReview={getAllQUizReview}  setReviewdata={setReviewdata}/>
                          ))}
                        </ol>
                      </div>
                    </div>}
                </div>
              </div>
        </section>
    </Fragment>
  )
}

export default QuizzesRatingSection