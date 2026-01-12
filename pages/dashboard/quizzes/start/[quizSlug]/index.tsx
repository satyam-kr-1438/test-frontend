import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';

import { FaCirclePause } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Swal from 'sweetalert2';
import { getQuizDetailForPlayingQuizzes, resetQuizTimerIfNoAnswerFound, submitQuizQuestionAnswer, submitQuizResult, updateQuizTimerEverySeconds } from 'components/request/request';
import { useRouter } from 'next/router';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { checkUserProfileStatus, getAuthenticatedUserData, removeAuthenticationDataHandleLogout } from 'hooks/localStorageInfo';
import { ErrorMessage, SuccessMessage, WarningMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
let language = "English"
let selected = 0
const QuizStart: NextPage = () => {
    const [startCounter, setStartCounter] = useState<number>(3)
    const [index, setIndex] = useState<number>(0)
    const router = useRouter()
    const [quizTimerSeconds, setQuizTimerSeconds] = useState<number>(60)
    const [open, setOpen] = useState(false)
    const [fullScreenVisible, setFullScreenVisible] = useState(false)
    const [fullScreenImage, setFullScreenImage] = useState("")
    const [quiz, setQuiz] = useState<any>(undefined)
    const [questions, setQuestions] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [oneByOneAnswerArray, setOneByOneAnswerArray] = useState<any[]>([{
        quiz_id: undefined,
        question_id: undefined,
        question_bank_id: undefined,
        option_id: undefined
    }
    ])
    const [allAtOnceAnswerArray, setAllAtOnceAnswerArray] = useState<any[]>([])
    let userAnswerType = {
        quiz_id: undefined,
        question_id: undefined,
        question_bank_id: undefined,
        option_id: undefined
    }





    useEffect(() => {
        if (!getAuthenticatedUserData()?.id) {
            removeAuthenticationDataHandleLogout()
            router.push("/")
        }
    }, [])

    const getQuizDetailForPlayingQuizData = async () => {
        try {
            if (router?.query?.quizSlug) {
                const quizSlug = router?.query?.quizSlug
                let user_id = getAuthenticatedUserData()?.id
                const { data } = await getQuizDetailForPlayingQuizzes(quizSlug, user_id)
                if (data?.success) {
                    setQuiz(data?.quiz)
                    if (data?.quiz?.results && data?.quiz?.results?.length > 0) {
                        if (data?.quiz?.question_visibility == 1) {
                            let temp: any = []
                            data?.quiz?.results?.map((item: any) => {
                                let findQuestionBank: any = undefined
                                data?.data?.find((item3: any) => {
                                    item3?.find((item2: any) => {
                                        if (item2?.language == language && item2?.id == item?.question_id) {
                                            findQuestionBank = item2
                                        }
                                    })
                                })
                                let payload = {
                                    quiz_id: item?.quiz_id,
                                    question_id: item?.question_id,
                                    question_bank_id: findQuestionBank?.question_bank_id,
                                    option_id: item?.user_ans_option_id
                                }
                                temp.push(payload)
                                setAllAtOnceAnswerArray(temp)
                            })
                        } else {
                            let temp: any = []
                            data?.quiz?.results?.map((item: any) => {
                                let findQuestionBank: any = undefined
                                data?.data?.find((item3: any) => {
                                    item3?.find((item2: any) => {
                                        if (item2?.language == language && item2?.id == item?.question_id) {
                                            findQuestionBank = item2
                                        }
                                    })
                                })
                                let payload = {
                                    quiz_id: item?.quiz_id,
                                    question_id: item?.question_id,
                                    question_bank_id: findQuestionBank?.question_bank_id,
                                    option_id: item?.user_ans_option_id
                                }
                                temp.push(payload)
                                setOneByOneAnswerArray(temp)
                            })

                        }
                    }
                    if (data?.time_taken > 0) {
                        setQuizTimerSeconds(Number(data?.quiz?.duration) * 60 - (data?.time_taken / 1000))
                    } else {
                        setQuizTimerSeconds(Number(data?.quiz?.duration) * 60)
                    }

                    setQuestions(data?.data)
                    setTimeout(() => {
                        setLoading(false)
                    }, 200)
                } else {
                    ErrorMessage("Unauthorized Access")
                    router.push("/dashboard/home")
                }
            } else {
                ErrorMessage("Unauthorized Access")
                router.push("/dashboard/home")
            }
        } catch (err) {
            ErrorMessage("Unauthorized Access")
            router.push("/dashboard/home")
        }
    }

    useEffect(() => {
        if (!checkUserProfileStatus()) {
            ErrorMessage("Please complete your profile.")
            router.push("/dashboard/profile")
        } else if (checkUserProfileStatus()) {
            getQuizDetailForPlayingQuizData()
        }
    }, [])



    const submitQuiz = async (type: string) => {
        try {
            if (quiz?.question_visibility == 1) {
                let user = getAuthenticatedUserData()
                let payload = {
                    user_id: user?.id,
                    quiz_id: quiz?.id
                }
                const { data } = await submitQuizResult(payload)
                if (data?.success) {
                    // SuccessMessage(data?.message) 
                    if (router?.query?.quizSlug) {
                        router.push(`/dashboard/home/report/${router?.query?.quizSlug}`)
                    }
                } else {
                    if (type == "Timeout") {
                        const { data } = await resetQuizTimerIfNoAnswerFound(payload)
                        if (data?.success) {
                            // WarningMessage("At least one answer is required.Please re-attempt.")
                            router.push("/dashboard/home")
                        }
                    } else {
                        WarningMessage(data?.message)
                    }
                }
            } else {
                let user = getAuthenticatedUserData()
                let payload = {
                    user_id: user?.id,
                    quiz_id: quiz?.id
                }
                const { data } = await submitQuizResult(payload)
                if (data?.success) {
                    // SuccessMessage(data?.message)
                    if (router?.query?.quizSlug) {
                        router.push(`/dashboard/home/report/${router?.query?.quizSlug}`)
                    }
                } else {
                    if (type == "Timeout") {
                        const { data } = await resetQuizTimerIfNoAnswerFound(payload)
                        if (data?.success) {
                            // WarningMessage("At least one answer is required.Please re-attempt.")
                            router.push("/dashboard/home")
                        }
                    } else {
                        WarningMessage(data?.message)
                    }
                }
            }
        } catch (err) {
            ErrorMessage("Unauthorized Access")
        }
    }

    const submitQuizResultInfo = async (quizInfo: any) => {
        try {
            let payload = {
                ...quizInfo,
                user_id: getAuthenticatedUserData()?.id,
                quiz_id: quiz?.id,
                total_duration: Number(quiz?.duration),
                time_taken: Number(quiz?.duration * 60 - quizTimerSeconds),
                total_questions: quiz?.total_questions
            }
            const { data } = await submitQuizQuestionAnswer(payload)
            if (data?.success) {
                if (quiz?.question_visibility == 0) {
                    if (index < questions?.length - 1) {
                        let temp = [...oneByOneAnswerArray]
                        temp.push(userAnswerType)
                        setOneByOneAnswerArray(temp)
                        setIndex((pre) => pre + 1)
                    }
                }
            } else {
                ErrorMessage(data?.message)
            }
        } catch (err) {

        }
    }
    const updateTimeStatusForActiveQuiz = async (time: number) => {
        try {
            const { data } = await updateQuizTimerEverySeconds({
                user_id: getAuthenticatedUserData()?.id,
                quiz_id: quiz?.id,
                time_taken: time
            })
        } catch (err) {

        }
    }

    useEffect(() => {
        let intervalId: any;
        intervalId = setInterval(() => {
            setQuizTimerSeconds((pre) => {
                if (pre <= 1) {
                    clearInterval(intervalId);
                    if (quiz && quiz?.duration) {
                        updateTimeStatusForActiveQuiz(quiz?.duration * 60)
                    }
                    setOpen(true)
                    return 0; // Ensure timer stops at 0
                } else {
                    //  if(exams?.section_wise_time==0){
                    //     updateTimeStatusForActiveExamSection(Number(exams?.exam_duration)*60-quizTimerSeconds)
                    //  }else{
                    //     updateTimeStatusForActiveExamSectionSectionWise(Number(exams?.examsections?.find((item:any)=>item?.id==activeSection)?.duration)*60-quizTimerSeconds)
                    //  }
                    // console.log(quiz)
                    if (quiz && quiz?.duration) {
                        updateTimeStatusForActiveQuiz(quiz?.duration * 60 - quizTimerSeconds)
                    }
                    return pre - 1;
                }
            });
        }, 1000); // Update elapsed time every second

        return () => clearInterval(intervalId); // Cleanup interval when component unmounts or is updated
    }, [quizTimerSeconds]);
    const formatTime = (timeInSeconds: any) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <Fragment>

            {
                loading ? <Loading /> : <>
                    {/* ========== header section ========== */}
                    <header className="wrapper bg-soft-primary py-3" style={{ position: "fixed", top: "0px", width: "100%", zIndex: "99" }}>
                        <div className="my-2 text-center mx-auto">
                            <span>{quiz?.name}</span>
                            <span className="quiz_timer_icon_time_data"><FaCirclePause style={{ transform: "scale(1.2)", marginRight: "10px" }} />{formatTime(quizTimerSeconds)}</span>
                        </div>
                    </header>

                    <main className="">
                        <section className="wrapper quiz_start_background_main" style={{ paddingTop: "50px" }}>
                            <div className="container pt-5 pb-14 " >
                                <div className="row">
                                    <div className="col-lg-8 col-12 order-1 mx-auto">
                                        {
                                            quiz && quiz?.question_visibility == 1 && questions?.map((item: any, indexItem: any) => {
                                                let temp = item?.find((x: any) => x.language == language)
                                                return <div className="card my-10 row gy-4 pb-10 pt-0 quiz_start_main_container" id={indexItem} key={indexItem}>
                                                    <div className="col-12">
                                                        <div>
                                                            <span>Questions {indexItem + 1} of {questions?.length}</span>
                                                        </div>
                                                    </div>

                                                    {temp?.image && <div className="col-12">
                                                        <div className="question_image_main_container">
                                                            <div className="question_image_container">
                                                                {<img src="/img/salesforce-img.jpg" alt="image" onClick={() => {
                                                                    setFullScreenVisible(true)
                                                                    setFullScreenImage("/img/salesforce-img.jpg")
                                                                }} />}

                                                                {/* <audio controls>
                                                            <source src="horse.ogg" type="audio/ogg"/>
                                                    </audio>
                                                    <video width="320" height="240" controls>
                                                            <source src="movie.ogg" type="video/ogg"/>
                                                    </video> */}
                                                            </div>
                                                        </div>
                                                    </div>}

                                                    <div className="col-12">
                                                        <div className="">
                                                            <div className="">
                                                                <div className="question_number_question_container">
                                                                    <div className="preview" dangerouslySetInnerHTML={{ __html: `${temp?.question}` }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {
                                                        temp?.options?.map((optionItem: any, i: any) => {
                                                            let findItem: any = undefined
                                                            if (allAtOnceAnswerArray?.length > 0) {
                                                                findItem = allAtOnceAnswerArray?.find((x: any) => x.question_id == optionItem?.question_id)
                                                            }
                                                            return <div className="col-12" key={i}>
                                                                <div className="">
                                                                    <div className="">
                                                                        <div className={findItem?.option_id == optionItem?.id ? "quiz_start_option_container_selected" : "quiz_start_option_container"} onClick={() => {
                                                                            if (selected != indexItem) {
                                                                                selected = (indexItem)
                                                                            }
                                                                            let tempVar = [...allAtOnceAnswerArray]
                                                                            let findTemp = tempVar.find((x) => x.question_bank_id == temp?.question_bank_id)
                                                                            if (!findTemp) {
                                                                                if (tempVar[selected]?.option_id) {
                                                                                    tempVar[selected].option_id = optionItem?.id
                                                                                    tempVar[selected].question_id = optionItem?.question_id
                                                                                    tempVar[selected].quiz_id = quiz?.id
                                                                                    tempVar[selected].question_bank_id = temp?.question_bank_id
                                                                                    setAllAtOnceAnswerArray(tempVar)
                                                                                } else {
                                                                                    let oneMoreTemp = userAnswerType
                                                                                    oneMoreTemp.option_id = optionItem?.id
                                                                                    oneMoreTemp.question_id = optionItem?.question_id
                                                                                    oneMoreTemp.quiz_id = quiz?.id
                                                                                    oneMoreTemp.question_bank_id = temp?.question_bank_id
                                                                                    tempVar.push(oneMoreTemp)
                                                                                    setAllAtOnceAnswerArray(tempVar)
                                                                                }
                                                                            } else {
                                                                                if (tempVar[selected]?.option_id) {
                                                                                    tempVar[selected].option_id = optionItem?.id
                                                                                    tempVar[selected].question_id = optionItem?.question_id
                                                                                    tempVar[selected].quiz_id = quiz?.id
                                                                                    tempVar[selected].question_bank_id = temp?.question_bank_id
                                                                                    setAllAtOnceAnswerArray(tempVar)
                                                                                } else {
                                                                                    let oneMoreTemp = userAnswerType
                                                                                    oneMoreTemp.option_id = optionItem?.id
                                                                                    oneMoreTemp.question_id = optionItem?.question_id
                                                                                    oneMoreTemp.quiz_id = quiz?.id
                                                                                    oneMoreTemp.question_bank_id = temp?.question_bank_id
                                                                                    tempVar.push(oneMoreTemp)
                                                                                    setAllAtOnceAnswerArray(tempVar)
                                                                                }
                                                                            }
                                                                            submitQuizResultInfo({ question_id: temp?.id, option_id: optionItem?.id, question_bank_id: temp?.question_bank_id })
                                                                        }}>
                                                                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} >
                                                                                <span className={findItem?.option_id == optionItem?.id ? "quiz_start_option_count_selected" : "quiz_start_option_count"}>{i + 1}</span>
                                                                                {optionItem?.image && <div className="option_image_audio_video_container">
                                                                                    {<img src="/img/salesforce-img.jpg" alt="image" />}
                                                                                    {/* <audio controls>
                                                                                <source src="horse.ogg" type="audio/ogg"/>
                                                                                </audio>
                                                                                <video width="320" height="240" controls>
                                                                                        <source src="movie.ogg" type="video/ogg"/>
                                                                                </video> */}
                                                                                </div>}
                                                                                <span className="preview" style={{ marginLeft: "10px", marginBottom: "0px" }} dangerouslySetInnerHTML={{ __html: `${optionItem?.option}` }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </div>
                                            })
                                        }

                                        {
                                            quiz && quiz?.question_visibility == 0 && questions?.slice(index, index + 1)?.map((item: any, index2: any) => {
                                                let temp = item?.find((x: any) => x.language == language)
                                                return <div className="card my-10 row gy-4 pb-10 pt-0 quiz_start_main_container" key={index2}>
                                                    <div className="col-12">
                                                        <div>
                                                            <span>Questions {index + 1} of {questions?.length}</span>
                                                        </div>
                                                    </div>

                                                    {temp?.image && <div className="col-12">
                                                        <div className="question_image_main_container">
                                                            <div className="question_image_container">
                                                                {<img src="/img/salesforce-img.jpg" alt="image" onClick={() => {
                                                                    setFullScreenVisible(true)
                                                                    setFullScreenImage("/img/salesforce-img.jpg")
                                                                }} />}

                                                                {/* <audio controls>
                                                                <source src="horse.ogg" type="audio/ogg"/>
                                                        </audio>
                                                        <video width="320" height="240" controls>
                                                                <source src="movie.ogg" type="video/ogg"/>
                                                        </video> */}
                                                            </div>
                                                        </div>
                                                    </div>}

                                                    <div className="col-12">
                                                        <div className="">
                                                            <div className="">
                                                                <div className="question_number_question_container">
                                                                    <div className="preview" dangerouslySetInnerHTML={{ __html: `${temp?.question}` }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {
                                                        temp?.options?.map((optionItem: any, i: any) => {
                                                            let findItem: any = undefined
                                                            if (oneByOneAnswerArray?.length > 0) {
                                                                findItem = oneByOneAnswerArray?.find((x: any) => x.question_id == optionItem?.question_id)
                                                            }
                                                            return <div className="col-12" key={i}>

                                                                <div className="">
                                                                    <div className="">
                                                                        <div className={findItem?.option_id == optionItem?.id ? "quiz_start_option_container_selected" : "quiz_start_option_container"} onClick={() => {
                                                                            let tempVar = [...oneByOneAnswerArray]
                                                                            tempVar[index].option_id = optionItem?.id
                                                                            tempVar[index].question_id = temp?.id
                                                                            tempVar[index].quiz_id = quiz?.id
                                                                            tempVar[index].question_bank_id = temp?.question_bank_id
                                                                            setOneByOneAnswerArray(tempVar)
                                                                            submitQuizResultInfo({ question_id: temp?.id, option_id: optionItem?.id, question_bank_id: temp?.question_bank_id })

                                                                        }}>
                                                                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} >
                                                                                <span className={findItem?.option_id == optionItem?.id ? "quiz_start_option_count_selected" : "quiz_start_option_count"}>{i + 1}</span>
                                                                                {optionItem?.image && <div className="option_image_audio_video_container">
                                                                                    {<img src="/img/salesforce-img.jpg" alt="image" />}
                                                                                    {/* <audio controls>
                                                                                    <source src="horse.ogg" type="audio/ogg"/>
                                                                                    </audio>
                                                                                    <video width="320" height="240" controls>
                                                                                            <source src="movie.ogg" type="video/ogg"/>
                                                                                    </video> */}
                                                                                </div>}
                                                                                <span className="preview" style={{ marginLeft: "10px", marginBottom: "0px" }} dangerouslySetInnerHTML={{ __html: `${optionItem?.option}` }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </div>
                                            })
                                        }
                                        {quiz && quiz?.question_visibility == 0 && <div className=" quiz_start_main_container  my-5 row">
                                            <div className="col-12">
                                                <div className="">
                                                    <div className="">
                                                        <div className="quiz_start_prev_next_conatainer">
                                                            <div>
                                                                <button disabled={index == 0} className="btn prev_button_quiz_start btn-sm" onClick={() => {
                                                                    if (index > 0) {
                                                                        setIndex((pre) => pre - 1)
                                                                    }
                                                                }}>Prev</button>
                                                            </div>
                                                            <div>
                                                                {index == questions?.length - 1 ? <div className="quizzes_pagination_submit_button_container">
                                                                    <button className="" onClick={() => {
                                                                        Swal.fire({
                                                                            title: "Are you sure?",
                                                                            text: "You want to submit the quiz!",
                                                                            icon: "warning",
                                                                            showCancelButton: true,
                                                                            confirmButtonColor: "#3085d6",
                                                                            cancelButtonColor: "#d33",
                                                                            confirmButtonText: "Submit"
                                                                        }).then(async (result: any) => {
                                                                            if (result.isConfirmed) {
                                                                                try {
                                                                                    submitQuiz("Submit")
                                                                                } catch (err) {

                                                                                }
                                                                            }
                                                                        })
                                                                    }}>Submit Quiz</button>
                                                                </div> :
                                                                    <button disabled={index == questions?.length - 1} className="btn next_button_quiz_start btn-sm" onClick={() => {
                                                                        if (index < questions?.length - 1) {
                                                                            let temp = [...oneByOneAnswerArray]
                                                                            temp.push(userAnswerType)
                                                                            setOneByOneAnswerArray(temp)
                                                                            setIndex((pre) => pre + 1)
                                                                        }
                                                                    }}>Next</button>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>

                                    {quiz?.question_visibility == 1 && <div className="col-lg-4 col-12 order-2">
                                        <div className="card mx-1 my-10 row gy-4 pb-10 pt-0 d-md-none d-lg-block" style={{ position: "fixed", width: "30%" }}>
                                            <div>
                                                <h6 style={{ marginBottom: "0px" }}>Questions Pagination</h6>
                                            </div>
                                            <div className="quiz_detail_question_count_pagination_container mx-1">
                                                {/* {
                                              quiz?.question_visibility==0 &&   questions?.map((item:any,i:any)=>{
                                                  return  <span key={i} className={index==i ? "quiz_detail_question_count_pagination_active":"quiz_detail_question_count_pagination"} onClick={()=>{
                                                    setIndex(i)
                                                  }}>{i+1}</span>
                                                })
                                            } */}

                                                {
                                                    quiz?.question_visibility == 1 && questions?.map((item: any, i: any) => {
                                                        return <a href={`#${i}`} key={i} className={selected == i ? "quiz_detail_question_count_pagination_active" : "quiz_detail_question_count_pagination"}>{i + 1}</a>
                                                    })
                                                }

                                            </div>
                                            <div className="quizzes_pagination_submit_button_container">
                                                <button className="" onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "You want to submit the quiz!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3085d6",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: "Submit"
                                                    }).then(async (result: any) => {
                                                        if (result.isConfirmed) {
                                                            try {
                                                                submitQuiz("Submit")
                                                            } catch (err) {

                                                            }
                                                        }
                                                    })
                                                }}>Submit Quiz</button>
                                            </div>
                                        </div>

                                        <div className="card mx-1 my-10 row gy-4 pb-10 pt-0 d-md-block d-lg-none">
                                            <div>
                                                <h6 style={{ marginBottom: "0px" }}>Questions Pagination</h6>
                                            </div>
                                            <div className="quiz_detail_question_count_pagination_container mx-1">
                                                {
                                                    quiz?.question_visibility == 0 && questions?.map((item: any, i: any) => {
                                                        return <span key={i} className={index == i ? "quiz_detail_question_count_pagination_active" : "quiz_detail_question_count_pagination"} onClick={() => {
                                                            setIndex(i)
                                                        }}>{i + 1}</span>
                                                    })
                                                }

                                                {
                                                    quiz?.question_visibility == 1 && questions?.map((item: any, i: any) => {
                                                        return <a href={`#${i}`} key={i} className={selected == i ? "quiz_detail_question_count_pagination_active" : "quiz_detail_question_count_pagination"}>{i + 1}</a>
                                                    })
                                                }

                                            </div>
                                            <div className="quizzes_pagination_submit_button_container">
                                                <button className="" onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "You want to submit the quiz!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3085d6",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: "Submit"
                                                    }).then(async (result: any) => {
                                                        if (result.isConfirmed) {
                                                            try {
                                                                submitQuiz("Submit")
                                                            } catch (err) {

                                                            }
                                                        }
                                                    })
                                                }}>Submit Quiz</button>
                                            </div>
                                        </div>
                                    </div>}

                                </div>
                            </div>
                        </section>
                    </main>
                    {/* <ContentNotFound/> */}
                    <footer className="footer_container_dashboard_content">
                        <DashboardFooter />
                    </footer>

                    {fullScreenVisible && <div className="goverlay">
                        <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: "999" }}>
                            <span>
                                <RxCross1 style={{ transform: "scale(1.5)", color: "white", fontWeight: "900", cursor: "pointer" }} onClick={() => {
                                    setFullScreenVisible(false)
                                }} />
                            </span>
                        </div>
                        <div style={{ position: "fixed", top: "0", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={fullScreenImage} alt="image" style={{ maxWidth: "90%", margin: "auto", textAlign: "center" }} />
                        </div>
                    </div>}

                    <Modal open={open} onClose={() => {
                    }}>
                        <div style={{ padding: "10px 15px", textAlign: "center", maxWidth: "400px" }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/5757/5757923.png" style={{ width: "90px", height: "90px", margin: "auto auto 10px auto", textAlign: "center" }} />
                            <h2 style={{ margin: "3px auto" }}>Quiz Timeout!!</h2>
                            <p style={{ margin: "3px auto" }}>
                                Please Submit the Exam.
                            </p>

                            <div style={{ margin: "10px auto", textAlign: "center" }}>
                                <button className="btn btn-primary btn-sm" onClick={async () => {
                                    Swal.fire({
                                        title: "Are you sure?",
                                        text: "You want to submit the quiz!",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "Submit"
                                    }).then(async (result: any) => {
                                        if (result.isConfirmed) {
                                            try {
                                                submitQuiz("Timeout")
                                            } catch (err) {

                                            }
                                        }
                                    })
                                }}>Submit Quiz</button>
                            </div>
                        </div>
                    </Modal>
                </>
            }



            {/* ========== footer section ========== */}
        </Fragment>
    );
};

export default QuizStart;
