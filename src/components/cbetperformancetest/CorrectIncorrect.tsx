import { ErrorMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { initializedExamStatus } from 'components/request/request';
import { checkUserProfileStatus, getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useRouter } from 'next/router';
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
const CorrectIncorrect = ({ result, leaderboard }: any) => {
    const { userDetails } = useSelector((state: any) => state?.reducerSlice)
    const router = useRouter()
    return (
        <div className="question-rating-score-somparison">
            <div className="score-rating">
                <div className="Question-distribution">
                    <h4>Question Distribution </h4>
                    <div className="options-distrubtion mt-5">
                        <div className="option-card-cbet">
                            <div className="Correct-cbet-overview d-flex flex-column justify-content-center align-items-center">
                                <div className='d-flex justify-content-center align-items-center'>
                                    <span>{result?.total_correct}</span><p className='ms-2'>Correct</p>
                                </div>
                                <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                                    <CircularProgressbar value={result?.correct_percentage} text={`${result?.correct_percentage?.toFixed(2)}%`} />
                                </div>
                            </div>
                            {/* <div className="ms-3">
                                <p>Correct</p>
                            </div> */}
                        </div>
                        <div className="option-card-cbet wrong-cbet">
                            <div className="wrong-cbet-overview d-flex flex-column justify-content-center align-items-center">
                                <div className='d-flex justify-content-center align-items-center'>
                                    <span>{result?.total_incorrect}</span><p className='ms-2'>Incorrect</p>
                                </div>
                                <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                                    <CircularProgressbar value={result?.incorrect_percentage} text={`${result?.incorrect_percentage?.toFixed(2)}%`} />
                                </div>
                            </div>
                        </div>
                        <div className="option-card-cbet Unattempted-cbet">
                            <div className="Unattempted-cbet-overview d-flex flex-column justify-content-center align-items-center">
                                <div className='d-flex justify-content-center align-items-center'>
                                    <span>{result?.not_attempted > 0 ? result?.not_attempted : 0}</span><p className='ms-2'>Unattempted</p>
                                </div>
                                <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                                    <CircularProgressbar value={result?.not_attempted_percentage} text={`${result?.not_attempted_percentage?.toFixed(2)}%`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="re-attempt-overall-test" onClick={async () => {
                        try {
                            if (checkUserProfileStatus()) {
                                if (router.query.packageId && router.query.subpackageId) {
                                    const { data } = await initializedExamStatus({
                                        userid: getAuthenticatedUserData()?.id,
                                        bundleid: null,
                                        packageid: router.query.packageId,
                                        subpackageid: router.query.subpackageId,
                                        examid: router.query.examId,
                                        total_questions: result?.exam?.total_questions
                                    })
                                    if (data?.success) {
                                        router.push(`/dashboard/exams/instructions/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)
                                    } else {
                                        ErrorMessage(data?.message)
                                    }
                                }
                            } else {
                                ErrorMessage("Please Complete your Profile.")
                                router.push("/dashboard/profile")
                            }
                        } catch (err) {

                        }

                    }}>Re-Attempt</button>
                </div>
                {/* <div className="rate-this-app-overview">
                    <div className="rate-cbet-app">
                        <div className="rate-cbet text-center">
                            <h5>Rate this test</h5>
                            <p className="text-dark">We would love to know how was your experience with this test?</p>
                            <div className="rating-cbet-star mt-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512">
                                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512">
                                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512">
                                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512">
                                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512">
                                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="c-bet-rating-image">
                            <img
                                src="/img/websiteimage/cbet-rating-img.png"
                                className="rating-main-img-cbet"
                                alt="Testerika-slider"
                            />
                        </div>
                    </div>
                </div> */}
                {/* <div className="Question-distribution mt-5">
                    <h4>Score Comparison</h4>
                </div> */}
            </div>
            <div className="leather-baord-cbet">
                <div className="leather-board-bg">
                    <h3>Leaderboard</h3>
                    <ul className="pt-5 p-3">
                        <li>
                            <div className="leather-board-user-profile">
                                <div className="user-position-cbet">
                                    <div className="user-name-cbet">
                                        {
                                            getAuthenticatedUserData()?.profile_image ? <img style={{ width: "40px", height: "40px", borderRadius: "100%" }} src={getAuthenticatedUserData()?.profile_image} /> : <span>{getAuthenticatedUserData()?.firstname?.substring(0, 1)?.toUpperCase()}</span>
                                        }
                                    </div>
                                    <span>{leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.rank}</span>
                                </div>
                                <div className="ms-4">
                                    <p>{getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname}</p>
                                </div>
                                <div className="ms-4 out-of-cbet-user">
                                    <span>{leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.total_points || 0}/{result?.exam?.total_marks}</span>
                                </div>
                            </div>
                        </li>
                        {
                            leaderboard?.length > 0 ? leaderboard?.slice(0, 10)?.filter((item2: any) => item2?.user_id != getAuthenticatedUserData()?.id)?.map((item: any, index: number) => {
                                return <li key={index}>
                                    <div className="leather-board-user-profile">
                                        <div className="user-position-cbet">
                                            <div className="user-name-cbet">
                                                {
                                                    userDetails?.find((user: any) => user?.id == item?.user_id)?.profile_image ? <img style={{ width: "40px", height: "40px", borderRadius: "100%" }} src={userDetails?.find((user: any) => user?.id == item?.user_id)?.profile_image} /> : <span>{userDetails?.find((user: any) => user?.id == item?.user_id)?.firstname?.substring(0, 1)?.toUpperCase()}</span>
                                                }

                                            </div>
                                            <span>{item?.rank}</span>
                                        </div>
                                        <div className="ms-4">
                                            <p>{userDetails?.find((user: any) => user?.id == item?.user_id)?.firstname + " " + userDetails?.find((user: any) => user?.id == item?.user_id)?.lastname}</p>
                                        </div>
                                        <div className="ms-4 out-of-cbet-user">
                                            <span>{item?.total_points || 0}/{result?.exam?.total_marks}</span>
                                        </div>
                                    </div>
                                </li>
                            }) : <li>
                                <div>No Leaderboard available</div>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CorrectIncorrect
