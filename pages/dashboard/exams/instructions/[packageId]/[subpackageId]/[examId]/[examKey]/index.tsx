import InactiveStatus from 'components/dashboardComponent/common/inactiveStatus/InactiveStatus'
import Loading from 'components/dashboardComponent/common/loadingPart/Loading'
import { ErrorMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast'
import { checkPackageIsAvailableForUser, getExamDetailWithQuestions } from 'components/request/request'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setExamDetail, setExamLanguage, setExamQuestions } from 'reducers/reducerSlice'

const ExamInstruction = () => {
    const [instructions, setIntructions] = useState(true)
    const { exams, questions, language }: any = useSelector((state: any) => state.reducerSlice)
    const [agree, setAgree] = useState(false)
    const router = useRouter()
    const [authorized, setAuthorized] = useState(true)

    const [exam, setExam] = useState<any>()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const checkPackageAvailability = async () => {
        try {
            if (router && router?.query?.packageId && router?.query?.subpackageId && router?.query?.examId) {
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
                            dispatch(setExamQuestions(data?.questions))
                            setAuthorized(true)
                            setTimeout(() => {
                                setLoading(false)
                            }, 300)
                        }
                    } else {
                        setAuthorized(false)
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
    useEffect(() => {
        checkPackageAvailability()
    }, [router])
    return (
        <Fragment>
            <div className="container-fluid">
                {loading ? <Loading /> : authorized ? <div className="row">
                    <div className="col-12 exam_start_top_bar_section">
                        <div className="row card py-3 px-2">
                            <div className="" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                <div style={{ maxWidth: "130px" }} onClick={() => {
                                    router.push("/dashboard/home")
                                }}>
                                    <img src="/img/logo-dark.png" alt="Testerika" style={{ width: "100%", cursor: "pointer" }} />
                                </div>
                                <div className='bg-colored-heading' style={{ marginLeft: "30px" }}>
                                    <h6 style={{ marginBottom: "0px" }}>{exams?.name}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        instructions && <>
                            <div className="col-12">
                                <div className="row" style={{ margin: "70px 0px 0px 0px", padding: "20px 10px 0px 10px" }}>
                                    <div className="">
                                        <div className="text-center mx-auto mb-5">
                                            <h6>Please read the instructions carefully</h6>
                                        </div>
                                        <div>
                                            <h6>General Instructions:</h6>
                                            <ul className="list_style_instruction_exam">
                                                <li>The clock will be set at the server. The countdown timer in the top left corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                                                <li>The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</li>
                                            </ul>
                                            <div style={{ marginLeft: "20px" }}>
                                                <div>
                                                    <img src="/img/not-visited.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">You have not visited the question yet.</span>
                                                </div>
                                                <div>
                                                    <img src="/img/not-answered.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3"> You have not answered the question.</span>
                                                </div>
                                                <div>
                                                    <img src="/img/answered.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">You have answered the question.</span>
                                                </div>
                                                <div>
                                                    <img src="/img/marked.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">You have NOT answered the question, but have marked the question for review.</span>
                                                </div>
                                                <div>
                                                    <img src="/img/marked-answered.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">You have answered the question, but marked it for review.</span>
                                                </div>
                                            </div>

                                            <div className="my-5">
                                                <h6 className="font_size_instructions_content">The <span style={{ color: "#60697b" }}>Mark For Review</span> status for a question simply indicates that you would like to look at that question again. <span style={{ color: "#c0392b" }}>If a question is answered, but marked for review, then the answer will be considered for evaluation.</span></h6>
                                            </div>


                                            <div>
                                                <h6>Navigating to a Question :</h6>
                                                <span className="font_size_instructions_content">3. To answer a question, do the following: <br />
                                                    <span style={{ marginLeft: "30px" }}>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly.</span><br />
                                                    <span style={{ marginLeft: "30px" }}>Click on Save & Next to save your answer for the current question and then go to the next question.</span><br />
                                                    <span style={{ marginLeft: "30px" }}>Click on Mark for Review & Next to save your answer for the current question and also mark it for review , and then go to the next question.</span>
                                                </span>
                                            </div>


                                            <div className="my-6">
                                                <h6>Answering a Question :</h6>
                                                <p style={{ margin: "10px 0px" }}>Procedure for answering a multiple choice (MCQ) type question:</p>
                                                <ul className="list_style_instruction_exam">
                                                    <li>To select your answer, click on the button of one of the options.</li>
                                                    <li>To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button.</li>
                                                    <li>To change your chosen answer, click on the button of another option.</li>
                                                    <li>To save your answer, you MUST click on the Save & Next button.</li>
                                                    <li>To mark the question for review, click on the Mark for Review & Next button. <span style={{ color: "#c0392b" }}>If an answer is selected for a question that is Marked for Review, that answer will be considered in the evaluation.</span></li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr style={{ margin: "20px auto" }} />


                            <div className="col-12">
                                <div className="row" style={{ margin: "0px 0px 70px 0px", padding: "20px 10px 0px 10px" }}>
                                    <div className="">
                                        <div className="text-center mx-auto mb-5">
                                            <h6>कृपया निम्नलिखित निर्देशों को ध्यान से पढ़ें</h6>
                                        </div>
                                        <div>
                                            <h6>सामान्य अनुदेश:</h6>
                                            <ul className="list_style_instruction_exam">
                                                <li>सर्वर पर घड़ी लगाई गई है तथा आपकी स्क्रीन के बाये कोने में शीर्ष पर काउंटडाउन टाइमर में आपके लिए परीक्षा समाप्त करने के लिए शेष समय प्रदर्शित होगा। परीक्षा समय समाप्त होने पर, आपको अपनी परीक्षा बंद या जमा करने की जरूरत नहीं है । यह स्वतः बंद या जमा हो जाएगी।</li>
                                                <li>स्क्रीन के दाहिने कोने पर प्रश्न पैलेट, प्रत्येक प्रश्न के लिए निम्न में से कोई एक स्थिति प्रकट करता है:</li>
                                            </ul>
                                            <div style={{ marginLeft: "20px" }}>
                                                <div>
                                                    <img src="/img/not-visited.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">आप अभी तक प्रश्न पर नहीं गए हैं।</span>
                                                </div>
                                                <div>
                                                    <img src="/img/not-answered.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">आपने प्रश्न का उत्तर नहीं दिया है।</span>
                                                </div>
                                                <div>
                                                    <img src="/img/answered.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">आप प्रश्न का उत्तर दे चुके हैं।</span>
                                                </div>
                                                <div>
                                                    <img src="/img/marked.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">आपने प्रश्न का उत्तर नहीं दिया है पर प्रश्न को पुनर्विचार के लिए चिन्हित किया है।</span>
                                                </div>
                                                <div>
                                                    <img src="/img/marked-answered.png" alt="Not Visited" style={{ width: "30px" }} />
                                                    <span className="font_size_instructions_content ms-3">आप प्रश्न का उत्तर दे चुकें हैं पर प्रश्न को पुनर्विचार के लिए चिन्हित किया है।</span>
                                                </div>
                                            </div>

                                            <div className="my-5">
                                                <h6 className="font_size_instructions_content"><span style={{ color: "#60697b" }}>पुनर्विचार के लिए चिह्नित</span> (Marked for Review) स्थिति सामान्यतः अनुस्मारक के रूप में कार्य करती है जिसे आपने प्रश्न को दुबारा देखने के लिए सेट किया है। <span style={{ color: "#c0392b" }}>यदि किसी प्रश्न के लिए उत्तर चुना हो जोकि पुनर्विचार के लिए चिन्हित किया है, तब अंतिम मूल्यांकन में उस उत्तर पर ध्यान दिया जाएगा |</span></h6>
                                            </div>


                                            <div>
                                                <h6>किसी प्रश्न पर जाना :</h6>
                                                <span className="font_size_instructions_content">3.उत्तर देने हेतु कोई प्रश्न चुनने के लिए, आप निम्न में से कोई एक कार्य कर सकते हैं:<br />
                                                    <span style={{ marginLeft: "30px" }}>स्क्रीन के दांयी ओर प्रश्न पट्टिका में प्रश्न पर सीधे जाने के लिए प्रश्न संख्या पर क्लिक करें। ध्यान दें कि इस विकल्प का प्रयोग करने से मौजूदा प्रश्न के लिए आपका उत्तर सुरक्षित नहीं होता है।</span><br />
                                                    <span style={{ marginLeft: "30px" }}>वर्तमान प्रश्न का उत्तर सुरक्षित करने के लिए और क्रम में अगले प्रश्न पर जाने के लिए Save and Next पर क्लिक करें।</span><br />
                                                    <span style={{ marginLeft: "30px" }}>वर्तमान प्रश्न का उत्तर सुरक्षित करने के लिए, पुनर्विचार के लिए चिह्नित करने और क्रम में अगले प्रश्न पर जाने के लिए Mark for Review and Next पर क्लिक करें।</span>
                                                </span>
                                            </div>


                                            <div className="my-6">
                                                <h6>प्रश्नों का उत्तर देना :</h6>
                                                <p style={{ margin: "10px 0px" }}>बहुविकल्प प्रकार प्रश्न के लिए</p>
                                                <ul className="list_style_instruction_exam">
                                                    <li>अपना उत्तर चुनने के लिए, विकल्प के बटनों में से किसी एक पर क्लिक करें।</li>
                                                    <li>अपना उत्तर बदलने के लिए, अन्य वांछित विकल्प बटन पर क्लिक करें।</li>
                                                    <li>अपना उत्तर सुरक्षित करने के लिए, आपको Save & Next पर क्लिक करना जरूरी है।</li>
                                                    <li>चयनित उत्तर को अचयनित करने के लिए, चयनित विकल्प पर दुबारा क्लिक करें या Clear Response बटन पर क्लिक करें।</li>
                                                    <li>किसी प्रश्न को पुनर्विचार के लिए चिन्हित करने हेतु Mark for Review & Next पर क्लिक करें।  <span style={{ color: "#c0392b" }}>यदि किसी प्रश्न के लिए उत्तर चुना हो जोकि पुनर्विचार के लिए चिन्हित किया है, तब अंतिम मूल्यांकन में उस उत्तर पर ध्यान दिया जाएगा।</span></li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 exam_start_bottom_bar_section">
                                <div className="row card py-3 px-2">
                                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => {
                                            router.push("/dashboard/home")
                                        }}>Back</button>
                                        <button className="btn btn-outline-primary btn-sm" style={{ marginRight: "70px" }} onClick={() => {
                                            setIntructions(false)
                                        }}>Next</button>
                                    </div>

                                </div>
                            </div>
                        </>
                    }
                    {
                        !instructions && <>
                            <div className="col-12">
                                <div className="row" style={{ margin: "50px 0px 0px 0px", padding: "20px 10px 0px 10px" }}>
                                    <div className="">
                                        <div className="text-center mx-auto mb-3" >
                                            <h6 style={{ fontSize: "16px" }}>{exams?.name}</h6>
                                        </div>
                                        <div className="text-center mx-auto" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                                            <h6 style={{ fontSize: "15px" }}>Duration: {exams?.exam_duration} Mins.</h6>
                                            <h6 style={{ fontSize: "15px" }}>Maximun Marks: {exams?.total_marks}</h6>
                                        </div>
                                        <div>
                                            <h6 style={{ fontSize: "15px" }}>Read the following instructions carefully.</h6>
                                            <ul className="list_style_instruction_exam">
                                                <li>The test contains {exams?.total_questions} total questions.</li>
                                                <li>Each question has at least 3 options out of which only one is correct.</li>
                                                <li>You have to finish the test in {exams?.exam_duration} minutes.</li>
                                                {/* <li>You will be awarded 2 mark for each correct answer and 0.25 will be deducted for each wrong answer.</li> */}
                                                <li>There is no negative marking for the questions that you have not attempted.</li>
                                                <li>You can write this test only once.<span style={{ color: "#c0392b" }}> Make sure that you complete the test before you submit the test and/or close the browser.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 card py-4 mt-6 px-3">
                                <div>
                                    <label style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                        Choose your default language:
                                        <select value={language} className="form-select py-2 ms-2" style={{ width: "200px" }} onChange={(e: any) => {
                                            dispatch(setExamLanguage(e?.target?.value))
                                        }}>
                                            <option value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                        </select>
                                    </label>
                                    <p className="text-danger" style={{ margin: "10px 0px" }}>Please note all questions will appear in your default language. This language can be changed for a particular question later on</p>
                                    <div>
                                        <h6>Declaration:</h6>
                                        <span className="font_size_instructions_content">To answer a question, do the following: <br />
                                            <label>
                                                <input className="form-check-input" type="checkbox" checked={agree} id="flexCheckDefault" onChange={() => {
                                                    setAgree(!agree)
                                                }} />
                                                <span style={{ marginLeft: "10px" }}> I have read all the instructions carefully and have understood them. I agree not to cheat or use unfair means in this examination. I understand that using unfair means of any sort for my own or someone else’s advantage will lead to my immediate disqualification.</span><br />

                                            </label>
                                        </span>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => {
                                            setIntructions(true)
                                        }}>Back</button>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => {
                                            if (!agree) {
                                                ErrorMessage("Accept terms & conditions")
                                            } else {
                                                router.push(`/dashboard/exams/start/${router.query.packageId}/${router.query.subpackageId}/${router.query.examId}/${router.query.examKey}`)
                                            }
                                        }}>Next</button>
                                    </div>

                                </div>
                            </div>
                        </>
                    }

                </div> : <InactiveStatus />}
            </div>
        </Fragment>
    )
}

export default ExamInstruction