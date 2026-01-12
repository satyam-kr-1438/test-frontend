import React, { Fragment, useRef, useState } from 'react'
import { IoAddOutline, IoCloudUploadOutline, IoEyeOutline } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { BiMessageRoundedDots } from "react-icons/bi";
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import DashboardDoubtModal from '../../../../../pages/dashboard/doubt/DropdownDoubtModal';
import { ErrorMessage, SuccessMessage, WarningMessage } from '../messageToast/AlertMessageToast';
import { addDoubtSolution, deleteDoubt, uploadImage } from 'components/request/request';
import Swal from 'sweetalert2'
import EditDeleteSolutionModal from './EditDeleteSolutionModal';
import { setDoubtTotalAnswerShow } from 'reducers/reducerSlice';
import { CheckActivePassAvailable } from 'services/CheckActivePassAvailable';
import { useRouter } from 'next/router';

const ViewDoubtGrid = ({ item, index, setOpen, open, editDoubtData, getAllDoubtDetails, currentPage, status, setTotalAnswerShow, totalAnswerShow }: any) => {
    const fileRef: any = useRef(null)
    const [imagesData, setImagesData] = useState<Array<any[]>>([])
    const [doubtSolution, setDoubtSolution] = useState("")
    const [hintReference, setHintReference] = useState("")
    const { subjects, userDetails, premiumPackages, passes, passesFeatures } = useSelector((state: any) => state?.reducerSlice)
    const [answerOpen, setAnswerOpen] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const handleFileChnage = async (files: any) => {
        try {
            const { data } = await uploadImage(files)
            if (data && data?.image) {
                let images = [...imagesData]
                images.push(data?.image)
                setImagesData(images)
            }
        } catch (err) {

        }
    }

    const handleAnswerChange = (item: any, status: any) => {
        try {
            if (status) {
                let findAnswer = item?.solutions?.find((item2: any) => item2?.userid == getAuthenticatedUserData()?.id)
                if (findAnswer?.id) {
                    setDoubtSolution(findAnswer?.solution)
                    setHintReference(findAnswer?.hint_or_reference)
                    setImagesData((findAnswer?.image))
                    setAnswerOpen(true)
                } else {
                    setDoubtSolution("")
                    setHintReference("")
                    setImagesData([])
                    setAnswerOpen(false)
                }
            } else {
                setDoubtSolution("")
                setHintReference("")
                setImagesData([])
                setAnswerOpen(false)
            }
        } catch (err) {

        }
    }
    return (

        <Fragment>
            <div key={index} className="listed-exams-dout-cards mb-4">
                <div className="dout-card-header">
                    <div className="d-flex align-items-center">
                        <div className="exams-imagess-dout">
                            <img src={status == "My" ? getAuthenticatedUserData()?.profile_image ? getAuthenticatedUserData()?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png" : userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image ? userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="exam-category-img" />
                        </div>
                        <div className="exam-name-and-solution-details">
                            <span className="m-0">
                                {/* <span className="theme-color">SSB PO </span>{' '} */}
                                <span className="dout-sub-category-exam">{item?.subject_id ? subjects?.find((item2: any) => item2?.id == item?.subject_id)?.subject_name : item?.other_subject}</span>
                            </span>{' '}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                    <path
                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                        fill="#60A37E"
                                    />
                                </svg>
                            </span>
                            <div className="sloved-question-named">
                                {' '}
                                <span>{status == "My" ? getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname : userDetails.find((item2: any) => item2?.id == item?.userid) ? userDetails.find((item2: any) => item2?.id == item?.userid)?.firstname + " " + userDetails.find((item2: any) => item2?.id == item?.userid)?.lastname : ""} </span>
                                <span className="theme-color"><Moment fromNow>{new Date(item.createdAt)}</Moment></span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className="dropdown background-color-none">
                        <DashboardDoubtModal item={item} getAllDoubtDetails={getAllDoubtDetails} currentPage={currentPage} editDoubtData={editDoubtData} setOpen={setOpen} status={status} />

                            {/* <button
                                className="dropdown-toggle background-color-none"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 128 512">
                                    <path
                                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                        fill="#60A37E"
                                    />
                                </svg>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                                                <path
                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                                                    fill="#60A37E"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ms-2">Report Post</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 512">
                                                <path
                                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                                                    fill="#60A37E"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ms-2">Hide Post</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512">
                                                <path
                                                    d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                                                    fill="#60A37E"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ms-2">Turn on notification for this post</span>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div className="dout-middle-section">
                    {item?.question && <p>{item?.question}</p>}
                    {item?.hint_or_reference && <div className='col-12 my-2'>
                        <div>
                            <span style={{ fontSize: "13px" }}>Reference:-</span>
                        </div>
                        <input disabled className='w-100 form-control p-2' placeholder='Add hint or reference...' value={item?.hint_or_reference} onChange={(e: any) => {
                        }} />
                    </div>}
                    {<div className='doubt_image_listing mt-4'>
                        {
                            item?.image?.length > 0 ? JSON?.parse(item?.image)?.map((item2: any, index2: number) => {
                                return <div key={index2} className='m-1' style={{ position: "relative", display: "inline-block" }}>
                                    <a href={item2} target="_blank" className='doubt_listing_image_cross' style={{ position: "absolute", top: "3px", right: "5px", zIndex: "999", color: "white", fontWeight: "bolder", cursor: "pointer" }}>
                                        <IoEyeOutline style={{ transform: "scale(1.3)" }} />
                                    </a>
                                    <span className='doubt_listing_image' style={{ display: "inline-block", width: "120px", height: "100px", border: "0.5px solid black", padding: "2px", borderRadius: "5px" }}>
                                        <img src={item2} style={{ width: "95%", height: "95%", objectFit: "cover" }} />
                                        <span style={{ width: "100%", height: "100%", background: "#000", position: "absolute", top: "0px", left: "0px", opacity: ".5", zIndex: 1, borderRadius: "5px" }}></span>
                                    </span>
                                </div>
                            }) : null}

                    </div>}
                </div>
                <div className="doutfooter-card pt-2">
                    {/* <div className="like-it">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                              </svg>
                              <span className="ms-2">Like</span>
                            </div> */}
                    <div style={{ cursor: "pointer" }} onClick={() => {
                        if (item?.solutions?.length > 0) {
                            if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Any")) {
                                dispatch(setDoubtTotalAnswerShow(item))
                                setTotalAnswerShow(true)
                            } else {
                                Swal.fire({
                                    title: "Oops!!",
                                    text: "You don't have any active pass",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Buy Pass"
                                }).then(async (result: any) => {
                                    if (result.isConfirmed) {
                                        router.push("/dashboard/passes")
                                    }
                                })
                            }
                        }
                    }}>
                        <span>
                            <BiMessageRoundedDots style={{ transform: "scale(1.3)" }} />
                        </span>
                        <span className='ms-1 me-1'>{item?.solutions?.length > 0 ? item?.solutions?.length : 0}</span>
                        <span style={{ fontSize: "12px" }}>Total answers</span>
                    </div>
                    {/* <div className="like-it">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 512">
                                <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
                              </svg>
                              <span className="ms-2">Comment</span>
                            </div> */}
                    {/* <div className="like-it">
                              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512">
                                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
                              </svg>
                              <span className="ms-2">Share</span>
                            </div> */}
                    <div className="Answer-now">
                        {
                             item?.solutions?.find((item2: any) => item2?.userid == getAuthenticatedUserData()?.id)?.id ?
                             <EditDeleteSolutionModal item={item} handleAnswerChange={handleAnswerChange} getAllDoubtDetails={getAllDoubtDetails} currentPage={currentPage} status={status} totalAnswerShow={totalAnswerShow} />
                             :<button onClick={() => {
                                if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Any")) {
                                    setAnswerOpen(!answerOpen)
                                } else {
                                    Swal.fire({
                                        title: "Oops!!",
                                        text: "You don't have any active pass",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "Buy Pass"
                                    }).then(async (result: any) => {
                                        if (result.isConfirmed) {
                                            router.push("/dashboard/passes")
                                        }
                                    })
                                }
                            }}>Answer Now</button>
                        }
                        
                    </div>
                </div>
            </div>
            {answerOpen && <div className='col-12'>
                    <hr className='separator_line_hr' />
                    <div className='col-12'>
                        <textarea className='w-100 form-control p-2' style={{ border: "none" }} rows={3} placeholder='Write your answer here...' value={doubtSolution} onChange={(e: any) => {
                            setDoubtSolution(e?.target?.value)
                        }} />
                    </div>
                    <div className='col-12 my-3'>
                        <input className='w-100 form-control p-2' placeholder='Add hint or reference...' value={hintReference} onChange={(e: any) => {
                            setHintReference(e?.target?.value)
                        }} />
                    </div>
                    {imagesData?.length > 0 && <div className='doubt_image_listing mt-4'>
                        

                        {
                            imagesData?.length > 0 && imagesData?.map((item: any, index: number) => {
                                return <div key={index} className='m-1' style={{ position: "relative", display: "inline-block" }}>
                                    <span className='doubt_listing_image_cross' style={{ position: "absolute", top: "3px", right: "5px", zIndex: "999", color: "white", fontWeight: "bolder", cursor: "pointer" }} onClick={() => {
                                        let imagesDetail = [...imagesData]
                                        imagesDetail = imagesDetail.filter((item: any, index2: number) => index2 != index)
                                        setImagesData(imagesDetail)
                                    }}>
                                        <RxCross1 style={{ transform: "scale(1.3)" }} />
                                    </span>
                                    <span className='doubt_listing_image' style={{ display: "inline-block", width: "120px", height: "100px", border: "0.5px solid black", padding: "2px", borderRadius: "5px" }}>
                                        <img src={item} style={{ width: "95%", height: "95%", objectFit: "cover" }} />
                                        <span style={{ width: "100%", height: "100%", background: "#000", position: "absolute", top: "0px", left: "0px", opacity: ".5", zIndex: 1, borderRadius: "5px" }}></span>
                                    </span>
                                </div>
                            })}

                    </div>}
                    <hr className='separator_line_hr' />

                    <div>
                        <div className='d-flex justify-content-end align-items-center'>
                            <div className='me-2 d-flex justify-content-between align-items-center'>
                                <div className='p-1 d-flex justify-content-evenly align-items-center' style={{ width: "120px", border: "0.5px solid black", borderRadius: "5px", cursor: "pointer" }} onClick={() => {
                                    if (fileRef) {
                                        fileRef?.current?.click()
                                    }
                                }}>
                                                    <span><IoCloudUploadOutline style={{ transform: "scale(1.2)" }} />
                                    </span>
                                    <span style={{ fontSize: "13px", marginLeft: "8px" }}>Add Image</span>
                                </div>

                            </div>
                            <button className='btn btn-outline-primary btn-sm py-1 px-2 ms-1' onClick={async () => {
                                // if ((doubtQuestion?.trim() == "" || !doubtQuestion?.trim()) && (imagesData?.length <= 0)) {
                                //     ErrorMessage("Please add your doubt")
                                // } else {
                                //     setStep(2)
                                // }
                                let payload = {
                                    doubt_id: item?.id,
                                    userid: getAuthenticatedUserData()?.id,
                                    solution: doubtSolution ? doubtSolution : null,
                                    image: imagesData,
                                    status: 1,
                                    hint_or_reference: hintReference ? hintReference : null
                                }
                                try {
                                    if ((doubtSolution?.trim() == "" || !doubtSolution?.trim()) && (imagesData?.length <= 0)) {
                                        ErrorMessage("Please add doubt solution")
                                    } else {
                                        const { data } = await addDoubtSolution(payload)
                                        if (data?.success) {
                                            SuccessMessage(data?.message)
                                            setDoubtSolution("")
                                            setHintReference("")
                                            setImagesData([])
                                            setAnswerOpen(false)
                                            if (status == "All") {
                                                getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
                                            } else if (status == "My") {
                                                getAllDoubtDetails(`page=${currentPage}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                                            }
                                        } else {
                                            ErrorMessage(data?.message)
                                        }
                                    }
                                } catch (err) {
                                    ErrorMessage("Internal Server Error")
                                }
                            }}>Submit Answer</button>
                        </div>
                    </div>
                </div>}
                <input ref={fileRef} type="file" style={{ display: "none" }} onChange={(e: any) => {
                    handleFileChnage(e?.target?.files)
                }} />
            {/* </div> */}
            {/* <div style={{ border: "1px solid #c8c3c3", marginBottom: "10px", padding: "10px", borderRadius: "5px", background: `${index % 2 == 0 ? "#fbf9f9" : "#edfbfc"}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <div>
                            <img style={{ borderRadius: "100%", width: "40px", height: "40px" }} src={status == "My" ? getAuthenticatedUserData()?.profile_image ? getAuthenticatedUserData()?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png" : userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image ? userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                        </div>
                        <div className='ms-2' style={{ marginTop: "-12px" }}>
                            <p className='text-primary' style={{ fontSize: "14px", marginBottom: "-8px" }}>{status == "My" ? getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname : userDetails.find((item2: any) => item2?.id == item?.userid) ? userDetails.find((item2: any) => item2?.id == item?.userid)?.firstname + " " + userDetails.find((item2: any) => item2?.id == item?.userid)?.lastname : ""} | <Moment fromNow>{new Date(item.createdAt)}</Moment></p>
                            <span className='text-warning' style={{ fontSize: "12px", marginBottom: "0px" }}>{item?.subject_id ? subjects?.find((item2: any) => item2?.id == item?.subject_id)?.subject_name : item?.other_subject}</span>
                        </div>
                    </div>

                    <div className='d-block' >
                        <DashboardDoubtModal item={item} getAllDoubtDetails={getAllDoubtDetails} currentPage={currentPage} editDoubtData={editDoubtData} setOpen={setOpen} status={status} />
                    </div>
                </div>
                {item?.question && <div className='col-12 mt-2'>
                    <div>
                        <span style={{ fontSize: "13px" }}>Question:-</span>
                    </div>
                    <textarea disabled className='w-100 form-control p-2' rows={3} placeholder='Write your doubt here...' value={item?.question} onChange={(e: any) => {
                    }} />
                </div>}
                {item?.hint_or_reference && <div className='col-12 my-2'>
                    <div>
                        <span style={{ fontSize: "13px" }}>Reference:-</span>
                    </div>
                    <input disabled className='w-100 form-control p-2' placeholder='Add hint or reference...' value={item?.hint_or_reference} onChange={(e: any) => {
                    }} />
                </div>}

                {item?.image?.length > 0 && <div className='doubt_image_listing mt-4'>

                    {
                        item?.image?.length > 0 && JSON.parse(item?.image)?.map((item: any, index: number) => {
                            return <div key={index} className='m-1' style={{ position: "relative", display: "inline-block" }}>
                                <a href={item} target="_blank" className='doubt_listing_image_cross' style={{ position: "absolute", top: "3px", right: "5px", zIndex: "999", color: "white", fontWeight: "bolder", cursor: "pointer" }} onClick={() => {

                                }}>
                                    <IoEyeOutline style={{ transform: "scale(1.3)" }} />
                                </a>
                                <span className='doubt_listing_image' style={{ display: "inline-block", width: "120px", height: "100px", border: "0.5px solid black", padding: "2px", borderRadius: "5px" }}>
                                    <img src={item} style={{ width: "95%", height: "95%", objectFit: "cover" }} />
                                    <span style={{ width: "100%", height: "100%", background: "#000", position: "absolute", top: "0px", left: "0px", opacity: ".5", zIndex: 1, borderRadius: "5px" }}></span>
                                </span>
                            </div>
                        })}

                </div>}
                <hr className='separator_line_hr' />

                <div>
                    <div className=''>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div style={{ cursor: "pointer" }} onClick={() => {
                                if (item?.solutions?.length > 0) {
                                    if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Any")) {
                                        dispatch(setDoubtTotalAnswerShow(item))
                                        setTotalAnswerShow(true)
                                    } else {
                                        Swal.fire({
                                            title: "Oops!!",
                                            text: "You don't have any active pass",
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText: "Buy Pass"
                                        }).then(async (result: any) => {
                                            if (result.isConfirmed) {
                                                router.push("/dashboard/passes")
                                            }
                                        })
                                    }
                                }
                            }}>
                                <span>
                                    <BiMessageRoundedDots style={{ transform: "scale(1.3)" }} />
                                </span>
                                <span className='ms-1 me-1'>{item?.solutions?.length > 0 ? item?.solutions?.length : 0}</span>
                                <span style={{ fontSize: "12px" }}>Total answers</span>
                            </div>

                            {
                                item?.solutions?.find((item2: any) => item2?.userid == getAuthenticatedUserData()?.id)?.id ?
                                    <EditDeleteSolutionModal item={item} handleAnswerChange={handleAnswerChange} getAllDoubtDetails={getAllDoubtDetails} currentPage={currentPage} status={status} totalAnswerShow={totalAnswerShow} />
                                    : <button className='btn btn-outline-primary btn-sm ms-2' style={{ padding: "5px 10px" }} onClick={() => {
                                        if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Any")) {
                                            setAnswerOpen(!answerOpen)
                                        } else {
                                            Swal.fire({
                                                title: "Oops!!",
                                                text: "You don't have any active pass",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Buy Pass"
                                            }).then(async (result: any) => {
                                                if (result.isConfirmed) {
                                                    router.push("/dashboard/passes")
                                                }
                                            })
                                        }
                                    }}>{"Answer Now"}</button>
                            }

                        </div>

                    </div>
                </div>

{answerOpen && <div className='col-12'>
                    <hr className='separator_line_hr' />
                    <div className='col-12'>
                        <textarea className='w-100 form-control p-2' style={{ border: "none" }} rows={3} placeholder='Write your answer here...' value={doubtSolution} onChange={(e: any) => {
                            setDoubtSolution(e?.target?.value)
                        }} />
                    </div>
                    <div className='col-12 my-3'>
                        <input className='w-100 form-control p-2' placeholder='Add hint or reference...' value={hintReference} onChange={(e: any) => {
                            setHintReference(e?.target?.value)
                        }} />
                    </div>
                    {imagesData?.length > 0 && <div className='doubt_image_listing mt-4'>

                        {
                            imagesData?.length > 0 && imagesData?.map((item: any, index: number) => {
                                return <div key={index} className='m-1' style={{ position: "relative", display: "inline-block" }}>
                                    <span className='doubt_listing_image_cross' style={{ position: "absolute", top: "3px", right: "5px", zIndex: "999", color: "white", fontWeight: "bolder", cursor: "pointer" }} onClick={() => {
                                        let imagesDetail = [...imagesData]
                                        imagesDetail = imagesDetail.filter((item: any, index2: number) => index2 != index)
                                        setImagesData(imagesDetail)
                                    }}>
                                        <RxCross1 style={{ transform: "scale(1.3)" }} />
                                    </span>
                                    <span className='doubt_listing_image' style={{ display: "inline-block", width: "120px", height: "100px", border: "0.5px solid black", padding: "2px", borderRadius: "5px" }}>
                                        <img src={item} style={{ width: "95%", height: "95%", objectFit: "cover" }} />
                                        <span style={{ width: "100%", height: "100%", background: "#000", position: "absolute", top: "0px", left: "0px", opacity: ".5", zIndex: 1, borderRadius: "5px" }}></span>
                                    </span>
                                </div>
                            })}

                    </div>}
                    <hr className='separator_line_hr' />

                    <div>
                        <div className='d-flex justify-content-end align-items-center'>
                            <div className='me-2 d-flex justify-content-between align-items-center'>
                                <div className='p-1 d-flex justify-content-evenly align-items-center' style={{ width: "120px", border: "0.5px solid black", borderRadius: "5px", cursor: "pointer" }} onClick={() => {
                                    if (fileRef) {
                                        fileRef?.current?.click()
                                    }
                                }}>
                                                    <span><IoCloudUploadOutline style={{ transform: "scale(1.2)" }} />
                                    </span>
                                    <span style={{ fontSize: "13px", marginLeft: "8px" }}>Add Image</span>
                                </div>

                            </div>
                            <button className='btn btn-outline-primary btn-sm py-1 px-2 ms-1' onClick={async () => {
                                // if ((doubtQuestion?.trim() == "" || !doubtQuestion?.trim()) && (imagesData?.length <= 0)) {
                                //     ErrorMessage("Please add your doubt")
                                // } else {
                                //     setStep(2)
                                // }
                                let payload = {
                                    doubt_id: item?.id,
                                    userid: getAuthenticatedUserData()?.id,
                                    solution: doubtSolution ? doubtSolution : null,
                                    image: imagesData,
                                    status: 1,
                                    hint_or_reference: hintReference ? hintReference : null
                                }
                                try {
                                    if ((doubtSolution?.trim() == "" || !doubtSolution?.trim()) && (imagesData?.length <= 0)) {
                                        ErrorMessage("Please add doubt solution")
                                    } else {
                                        const { data } = await addDoubtSolution(payload)
                                        if (data?.success) {
                                            SuccessMessage(data?.message)
                                            setDoubtSolution("")
                                            setHintReference("")
                                            setImagesData([])
                                            setAnswerOpen(false)
                                            if (status == "All") {
                                                getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
                                            } else if (status == "My") {
                                                getAllDoubtDetails(`page=${currentPage}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                                            }
                                        } else {
                                            ErrorMessage(data?.message)
                                        }
                                    }
                                } catch (err) {
                                    ErrorMessage("Internal Server Error")
                                }
                            }}>Submit Answer</button>
                        </div>
                    </div>
                </div>}
                <input ref={fileRef} type="file" style={{ display: "none" }} onChange={(e: any) => {
                    handleFileChnage(e?.target?.files)
                }} />
            </div> */}
        </Fragment>
    )
}

export default ViewDoubtGrid