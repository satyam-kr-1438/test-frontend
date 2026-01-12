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
import { addDoubtSolution, deleteDoubt, getSingleDoubtWithSolution, uploadImage } from 'components/request/request';
import Swal from 'sweetalert2'
import EditDeleteSolutionModal from './EditDeleteSolutionModal';
import { setDoubtTotalAnswerShow } from 'reducers/reducerSlice';
import { CheckActivePassAvailable } from 'services/CheckActivePassAvailable';
import { useRouter } from 'next/router';

const ViewDoubtSolutions = ({ item, setTotalAnswerShow, getAllDoubtDetails }: any) => {
    const fileRef: any = useRef(null)
    const [imagesData, setImagesData] = useState<Array<any[]>>([])
    const [doubtSolution, setDoubtSolution] = useState("")
    const [hintReference, setHintReference] = useState("")
    const { subjects, userDetails, passes, premiumPackages, passesFeatures } = useSelector((state: any) => state?.reducerSlice)
    const [answerOpen, setAnswerOpen] = useState(false)
    const dispatch = useDispatch()
    const router=useRouter()
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
            <div style={{ border: "1px solid #c8c3c3", marginBottom: "10px", padding: "10px", borderRadius: "5px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <div>
                            <img style={{ borderRadius: "100%", width: "40px", height: "40px" }} src={userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image ? userDetails.find((item2: any) => item2?.id == item?.userid)?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                        </div>
                        <div className='ms-2' style={{ marginTop: "-12px" }}>
                            <p className='text-primary' style={{ fontSize: "14px", marginBottom: "-8px" }}>{userDetails.find((item2: any) => item2?.id == item?.userid) ? userDetails.find((item2: any) => item2?.id == item?.userid)?.firstname + " " + userDetails.find((item2: any) => item2?.id == item?.userid)?.lastname : ""} | <Moment fromNow>{new Date(item.createdAt)}</Moment></p>
                            <span className='text-warning' style={{ fontSize: "12px", marginBottom: "0px" }}>{item?.subject_id ? subjects?.find((item2: any) => item2?.id == item?.subject_id)?.subject_name : item?.other_subject}</span>
                        </div>
                    </div>

                    <div>
                        <button className="btn my-3 btn-outline-primary btn-sm" type="button" style={{ padding: "6px" }} onClick={() => {
                            getAllDoubtDetails(`page=1&items_per_page=10`)
                            setTotalAnswerShow(false)
                        }}>View All Doubts</button>
                    </div>

                    {/* <div className='d-block' >
                        <DashboardDoubtModal item={item} getAllDoubtDetails={getAllDoubtDetails} currentPage={currentPage} editDoubtData={editDoubtData} setOpen={setOpen} status={status}/>
                    </div> */}
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
                        item?.image?.length > 0 && (item?.image)?.map((item: any, index: number) => {
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
                            <div style={{ cursor: "pointer" }}>
                                <span>
                                    <BiMessageRoundedDots style={{ transform: "scale(1.3)" }} />
                                </span>
                                <span className='ms-1 me-1'>{item?.solutions?.length > 0 ? item?.solutions?.length : 0}</span>
                                <span style={{ fontSize: "12px" }}>Total answers</span>
                            </div>

                            {!item?.solutions?.find((item2: any) => item2?.userid == getAuthenticatedUserData()?.id) && <button className='btn btn-outline-primary btn-sm ms-2' style={{ padding: "5px 10px" }} onClick={() => {

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
                            }}>{"Answer Now"}</button>}

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
                                            const userDoubtSolution = await getSingleDoubtWithSolution(item?.id)
                                            if (userDoubtSolution?.data?.success) {
                                                dispatch(setDoubtTotalAnswerShow(userDoubtSolution?.data?.data))
                                                setTotalAnswerShow(true)
                                            }
                                            setAnswerOpen(false)
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
            </div>

            <div className='col-12'>
                <div>
                    <h6 className='text-primary'>Answers:-</h6>
                </div>
                <div>
                    {
                        item?.solutions?.map((data: any, index: number) => {
                            return data?.userid == getAuthenticatedUserData()?.id && <div key={index} className='my-3'>
                                <div className='card p-2' style={{ background: `${index % 2 == 0 ? "#fbf9f9" : "#edfbfc"}` }}>
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                <div>
                                                    <img style={{ borderRadius: "100%", width: "40px", height: "40px" }} src={userDetails.find((item2: any) => item2?.id == data?.userid)?.profile_image ? userDetails.find((item2: any) => item2?.id == data?.userid)?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                                                </div>
                                                <div className='ms-2' style={{ marginTop: "-12px" }}>
                                                    <p className='text-danger' style={{ fontSize: "14px", marginBottom: "-8px" }}>{userDetails.find((item2: any) => item2?.id == data?.userid) ? userDetails.find((item2: any) => item2?.id == data?.userid)?.firstname + " " + userDetails.find((item2: any) => item2?.id == data?.userid)?.lastname : ""}</p>
                                                    <span className='text-primary' style={{ fontSize: "12px", marginBottom: "0px" }}><Moment fromNow>{new Date(data.createdAt)}</Moment></span>
                                                </div>
                                            </div>

                                            <div className='d-block' >
                                                <EditDeleteSolutionModal item={item} handleAnswerChange={handleAnswerChange} />
                                            </div>

                                        </div>



                                        {data?.solution && <div className='col-12 mt-2'>
                                            <div>
                                                <span style={{ fontSize: "13px" }}>Solution:-</span>
                                            </div>
                                            <textarea disabled className='w-100 form-control p-2' rows={3} placeholder='Write your doubt here...' value={data?.solution} onChange={(e: any) => {
                                            }} />
                                        </div>}
                                        {data?.hint_or_reference && <div className='col-12 my-2'>
                                            <div>
                                                <span style={{ fontSize: "13px" }}>Reference:-</span>
                                            </div>
                                            <input disabled className='w-100 form-control p-2' placeholder='Add hint or reference...' value={data?.hint_or_reference} onChange={(e: any) => {
                                            }} />
                                        </div>}

                                        {data?.image?.length > 0 && <div className='doubt_image_listing mt-4'>

                                            {
                                                data?.image?.length > 0 && (data?.image)?.map((item: any, index: number) => {
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
                                    </div>
                                </div>
                            </div>
                        })
                    }


                    {
                        item?.solutions?.map((data: any, index: number) => {
                            return data?.userid != getAuthenticatedUserData()?.id && <div key={index} className='my-3'>
                                <div className='card p-2' style={{ background: `${index % 2 == 0 ? "#fbf9f9" : "#edfbfc"}` }}>
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                <div>
                                                    <img style={{ borderRadius: "100%", width: "40px", height: "40px" }} src={userDetails.find((item2: any) => item2?.id == data?.userid)?.profile_image ? userDetails.find((item2: any) => item2?.id == data?.userid)?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                                                </div>
                                                <div className='ms-2' style={{ marginTop: "-12px" }}>
                                                    <p className='text-danger' style={{ fontSize: "14px", marginBottom: "-8px" }}>{userDetails.find((item2: any) => item2?.id == data?.userid) ? userDetails.find((item2: any) => item2?.id == data?.userid)?.firstname + " " + userDetails.find((item2: any) => item2?.id == data?.userid)?.lastname : ""}</p>
                                                    <span className='text-primary' style={{ fontSize: "12px", marginBottom: "0px" }}><Moment fromNow>{new Date(data.createdAt)}</Moment></span>
                                                </div>
                                            </div>

                                        </div>



                                        {data?.solution && <div className='col-12 mt-2'>
                                            <div>
                                                <span style={{ fontSize: "13px" }}>Solution:-</span>
                                            </div>
                                            <textarea disabled className='w-100 form-control p-2' rows={3} placeholder='Write your doubt here...' value={data?.solution} onChange={(e: any) => {
                                            }} />
                                        </div>}
                                        {data?.hint_or_reference && <div className='col-12 my-2'>
                                            <div>
                                                <span style={{ fontSize: "13px" }}>Reference:-</span>
                                            </div>
                                            <input disabled className='w-100 form-control p-2' placeholder='Add hint or reference...' value={data?.hint_or_reference} onChange={(e: any) => {
                                            }} />
                                        </div>}

                                        {data?.image?.length > 0 && <div className='doubt_image_listing mt-4'>

                                            {
                                                data?.image?.length > 0 && data?.image?.map((item: any, index: number) => {
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
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default ViewDoubtSolutions