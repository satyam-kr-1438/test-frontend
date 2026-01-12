import React, { Fragment } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { BiMessageRoundedDots } from "react-icons/bi";
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const ViewDoubtGridAuth = ({ item, index, status }: any) => {
    const { subjects, userDetails } = useSelector((state: any) => state?.reducerSlice)
    return (

        <Fragment>
            <div style={{ border: "1px solid #c8c3c3", marginBottom: "10px", padding: "10px", borderRadius: "5px", background: `${index % 2 == 0 ? "#fbf9f9" : "#edfbfc"}` }}>
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
                                <a href={item} target="_blank" className='doubt_listing_image_cross' style={{ position: "absolute", top: "3px", right: "5px", zIndex: "999", color: "white", fontWeight: "bolder", cursor: "pointer" }}>
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
                            <div style={{ cursor: "pointer" }} data-bs-toggle="modal"
                                data-bs-target="#modal-signin">
                                <span>
                                    <BiMessageRoundedDots style={{ transform: "scale(1.3)" }} />
                                </span>
                                <span className='ms-1 me-1'>{item?.solutions?.length > 0 ? item?.solutions?.length : 0}</span>
                                <span style={{ fontSize: "12px" }}>Total answers</span>
                            </div>
                            <button className='btn btn-outline-primary btn-sm ms-2' style={{ padding: "5px 10px" }} data-bs-toggle="modal"
                                data-bs-target="#modal-signin" >{"Answer Now"}</button>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ViewDoubtGridAuth