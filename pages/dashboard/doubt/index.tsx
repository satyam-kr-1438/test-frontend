import AuthNavbar from 'components/blocks/navbar/AuthNavbar'
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar'
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal'
import DoubtLoading from 'components/dashboardComponent/common/doubt/DoubtLoading'
import PaginationCustom from 'components/dashboardComponent/common/doubt/PaginationCustom'
import ViewDoubtGrid from 'components/dashboardComponent/common/doubt/ViewDoubtGrid'
import ViewDoubtSolutions from 'components/dashboardComponent/common/doubt/ViewDoubtSolutions'
import Loading from 'components/dashboardComponent/common/loadingPart/Loading'
import { ErrorMessage, SuccessMessage, WarningMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast'
import { addDoubt, getAllCoursesSubject, getAllDoubt, getAllDoubtsCoursesAndSubject, getAllMyDoubts, getAllUserDetailUsingUserIds, getCourses, updateDoubt, uploadImage } from 'components/request/request'
import NextLink from 'components/reuseable/links/NextLink'
import Testerikaheader from 'components/testerikaheader/Testerikaheader'
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-responsive-modal'
import "react-responsive-modal/styles.css";
import { addAllDoubts, addAllMyDoubts, setCoursesData, setDoubtCategoryDetails, setSubjectsData, setUserDetails } from 'reducers/reducerSlice'
import { CheckActivePassAvailable } from 'services/CheckActivePassAvailable'
import Swal from 'sweetalert2'

const Doubt = () => {
    const [open, setOpen] = useState<boolean>(false)
    const fileRef: any = useRef(null)
    const [imagesData, setImagesData] = useState<Array<any[]>>([])
    const [doubtQuestion, setDoubtQuestion] = useState("")
    const [doubtId, setDoubtId] = useState(undefined)
    const [hintReference, setHintReference] = useState("")
    const [doubtCategory, setDoubtCategory] = useState(undefined)
    const [otherCategory, setOtherCategory] = useState("")
    const [step, setStep] = useState(1)
    const { subjects, allDoubts, myDoubts, doubtSolutions, premiumPackages, passes, passesFeatures,courses , doubtCategoryDetail} = useSelector((state: any) => state?.reducerSlice)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageMyDoubt, setCurrentPageMyDoubt] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [totalPageMyDoubt, setTotalPageMyDoubt] = useState(1)
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [totalAnswerShow, setTotalAnswerShow] = useState(false)
    const [showDoubtForTotalAnswer, setShowDoubtForTotalAnswer] = useState(undefined)
    const [selectedDoubtCategory,setSelectedDoubtCategory]=useState(0)
    const [filterCourse,setFilterCourse]=useState<any>({
        courseIds:[],
        subjectIds:[]
    })
    const router = useRouter()

    const [status, setStatus] = useState("All")

    const dispatch = useDispatch()
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

    const getAllSubjects = async () => {
        try {
            const { data } = await getAllCoursesSubject()
            dispatch(setSubjectsData(data))
        } catch (err) {

        }
    }

    const getAllCourses = async () => {
        try {
          const { data } = await getCourses()
          dispatch(setCoursesData(data))
        } catch (err) {
    
        }
      }

      const getAllDoubtsCoursesAndSubjects=async ()=>{
        try{
           const {data}=await getAllDoubtsCoursesAndSubject()
           dispatch(setDoubtCategoryDetails(data?.data))
        }catch(err){

        }
      }

    const editDoubtData = (data: any) => {
        if (data) {
            setDoubtId(data?.id)
            setDoubtQuestion(data?.question)
            setHintReference(data?.hint_or_reference)
            setDoubtCategory(data?.subject_id)
            setOtherCategory(data?.other_subject)
            setImagesData((data?.image))
        }
    }

    useEffect(() => {
        if (subjects?.length <= 0)
            getAllSubjects()
        if(courses?.length<=0)
             getAllCourses()
        if(doubtCategoryDetail?.length<=0)
            getAllDoubtsCoursesAndSubjects()
    }, [subjects,courses])
    const getAllDoubtDetails = async (query: string) => {
        try {
            const { data } = await getAllDoubt(query)
            if (data) {
                dispatch(addAllDoubts(data))
                if (data?.userIds?.length > 0) {
                    let userDetail = await getAllUserDetailUsingUserIds(data?.userIds)
                    if (userDetail?.data?.success) {
                        dispatch(setUserDetails(userDetail?.data?.data))
                    }
                }
                setTimeout(() => {
                    setLoading(false)
                }, 400)
                let totalPagesforPagination = Math.ceil((data?.payload?.pagination?.total) / 10)
                if (totalPagesforPagination) {
                    setTotalPage(totalPagesforPagination)
                }
            }
        } catch (err) {

        }
    }

    const getAllMyDoubtsDetails = async (query: string) => {
        try {
            const { data } = await getAllMyDoubts(query)
            if (data) {
                dispatch(addAllMyDoubts(data))
                let totalPagesforPagination = Math.ceil((data?.payload?.pagination?.total) / 10)
                if (totalPagesforPagination) {
                    setTotalPageMyDoubt(totalPagesforPagination)
                }
                setTimeout(() => {
                    setLoading2(false)
                }, 400)
                // dispatch(addAllDoubts(data))
                // let totalPagesforPagination = Math.ceil((data?.payload?.pagination?.total) / 10)
                // if (totalPagesforPagination) {
                //     setTotalPage(totalPagesforPagination)
                // }
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        if(filterCourse?.subjectIds?.length>0){
            getAllDoubtDetails(`page=${currentPage}&items_per_page=10&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
        }else{
            getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
        }
    }, [])

    return (
        <Fragment>

            {/* <header className="wrapper bg-soft-primary">
                {getAuthenticatedUserData()?.id ? <DashboardNavbar
                    // info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={<DashboardNavbarModal />}
                /> : <AuthNavbar
                    // info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-signin"
                            className="btn btn-sm btn-primary py-1 px-2"
                            style={{ fontWeight: "400", fontSize: "14px" }}
                        >
                            Sign In
                        </a>
                    }
                />}
            </header> */}

            <Testerikaheader />
            <Testerikamianheader />


            <main className="content-wrapper">
                <section className="wrapper bg-light">
                    <div className="container pt-6 pb-14">
                        <div className="row">

                            <div className='col-md-12 col-lg-9 col-sm-12 col-12'>
                                {
                                    totalAnswerShow ? <div className='card p-2'>
                                        <ViewDoubtSolutions item={doubtSolutions} setTotalAnswerShow={setTotalAnswerShow} getAllDoubtDetails={getAllDoubtDetails} />
                                    </div> :
                                        <div className='card p-2'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true" style={{ fontSize: "14px", padding: "5px" }} onClick={() => {
                                                            setLoading(true)
                                                            setCurrentPage(1)
                                                            setStatus("All")
                                                            if(filterCourse?.subjectIds?.length>0){
                                                                getAllDoubtDetails(`page=1&items_per_page=10&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                                            }else{
                                                                getAllDoubtDetails(`page=1&items_per_page=10`)
                                                            }
                                                        }}>All Doubts</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link ms-2" id="my-tab" data-bs-toggle="tab" data-bs-target="#my-tab-pane" type="button" role="tab" aria-controls="my-tab-pane" aria-selected="false" style={{ fontSize: "14px", padding: "5px" }} onClick={() => {
                                                            setLoading2(true)
                                                            setStatus("My")
                                                            setCurrentPageMyDoubt(1)
                                                            if(filterCourse?.subjectIds?.length>0){
                                                                getAllMyDoubtsDetails(`page=1&items_per_page=10&userid=${getAuthenticatedUserData()?.id}&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                                            }else{
                                                                getAllMyDoubtsDetails(`page=1&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                                                            }
                                                        }}>My Doubts</button>
                                                    </li>

                                                </ul>
                                                <div className='p-3 d-flex'>
                                                    <button className="btn btn-outline-primary btn-sm" type="button" style={{ padding: "6px" }} onClick={() => {
                                                        if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Pass Pro")) {
                                                            setOpen(true)
                                                        } else {
                                                            Swal.fire({
                                                                title: "Oops!!",
                                                                text: "This Features only available in Pass Pro",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor: "#3085d6",
                                                                cancelButtonColor: "#d33",
                                                                confirmButtonText: "Buy Pass Pro"
                                                            }).then(async (result: any) => {
                                                                if (result.isConfirmed) {
                                                                    router.push("/dashboard/passes")
                                                                }
                                                            })
                                                        }
                                                        // setOpen(true)
                                                    }}>Ask Doubt</button>
                                                    <div className="ms-1 Douts-filters" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        <svg height="20" widths="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Glyph">
                                                                <path
                                                                    d="m17 5a3 3 0 1 1 3 3 3 3 0 0 1 -3-3zm-15 1h12a1 1 0 0 0 0-2h-12a1 1 0 0 0 0 2zm6 3a3 3 0 0 0 -2.82 2h-3.18a1 1 0 0 0 0 2h3.18a3 3 0 1 0 2.82-4zm14 2h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-12 7h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm12 0h-3.18a3 3 0 1 0 0 2h3.18a1 1 0 0 0 0-2z"
                                                                    fill="#fff"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>


                                            </div>




                                            <div className="tab-content" id="myTabContent">

                                                <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
                                                    {loading ? <DoubtLoading /> : <div>
                                                        {
                                                            allDoubts?.data?.length > 0 ? allDoubts?.data?.map((item: any, index: number) => {
                                                                return <ViewDoubtGrid key={index} item={item} index={index} setOpen={setOpen} open={open} editDoubtData={editDoubtData} getAllDoubtDetails={getAllDoubtDetails} currentPage={currentPage} status="All" setTotalAnswerShow={setTotalAnswerShow} totalAnswerShow={totalAnswerShow} />
                                                            }) : <div className='text-warning text-center m-3'>
                                                                <div>
                                                                    No Doubts have been asked in this Section. Be the first one to ask a Doubt!
                                                                </div>
                                                                <div>
                                                                    <button className="btn my-3 btn-outline-primary btn-sm" type="button" style={{ padding: "6px" }} onClick={() => {
                                                                        if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Pass Pro")) {
                                                                            setOpen(true)
                                                                        } else {
                                                                            Swal.fire({
                                                                                title: "Oops!!",
                                                                                text: "This Features only available in Pass Pro",
                                                                                icon: "warning",
                                                                                showCancelButton: true,
                                                                                confirmButtonColor: "#3085d6",
                                                                                cancelButtonColor: "#d33",
                                                                                confirmButtonText: "Buy Pass Pro"
                                                                            }).then(async (result: any) => {
                                                                                if (result.isConfirmed) {
                                                                                    router.push("/dashboard/passes")
                                                                                }
                                                                            })
                                                                        }
                                                                    }}>Ask Doubt</button>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>}
                                                    {allDoubts?.data?.length > 0 && <div>
                                                        <PaginationCustom currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} setTotalPage={setTotalPage} getAllDoubtDetails={getAllDoubtDetails} status="All" />
                                                    </div>}
                                                </div>
                                                <div className="tab-pane fade" id="my-tab-pane" role="tabpanel" aria-labelledby="my-tab" tabIndex={0}>
                                                    {loading2 ? <DoubtLoading /> : <div>
                                                        {
                                                            myDoubts?.data?.length > 0 ? myDoubts?.data?.map((item: any, index: number) => {
                                                                return <ViewDoubtGrid key={index} item={item} index={index} setOpen={setOpen} open={open} editDoubtData={editDoubtData} getAllDoubtDetails={getAllMyDoubtsDetails} currentPage={currentPageMyDoubt} status="My" setTotalAnswerShow={setTotalAnswerShow} totalAnswerShow={totalAnswerShow} />
                                                            }) : <div className='text-warning text-center m-3'>
                                                                <div>
                                                                    No Doubts have been asked in this Section. Be the first one to ask a Doubt!
                                                                </div>
                                                                <div>
                                                                    <button className="btn my-3 btn-outline-primary btn-sm" type="button" style={{ padding: "6px" }} onClick={() => {
                                                                        if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Pass Pro")) {
                                                                            setOpen(true)
                                                                        } else {
                                                                            Swal.fire({
                                                                                title: "Oops!!",
                                                                                text: "This Features only available in Pass Pro",
                                                                                icon: "warning",
                                                                                showCancelButton: true,
                                                                                confirmButtonColor: "#3085d6",
                                                                                cancelButtonColor: "#d33",
                                                                                confirmButtonText: "Buy Pass Pro"
                                                                            }).then(async (result: any) => {
                                                                                if (result.isConfirmed) {
                                                                                    router.push("/dashboard/passes")
                                                                                }
                                                                            })
                                                                        }
                                                                    }}>Ask Doubt</button>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>}
                                                    {myDoubts?.data?.length > 0 && <div>
                                                        <PaginationCustom currentPage={currentPageMyDoubt} setCurrentPage={setCurrentPageMyDoubt} totalPage={totalPageMyDoubt} setTotalPage={setTotalPageMyDoubt} getAllDoubtDetails={getAllMyDoubtsDetails} status="My" />
                                                    </div>}
                                                </div>

                                            </div>
                                        </div>
                                }
                            </div>

                        </div>
                    </div>

                </section>
            </main>
            <Modal open={open} onClose={() => {
                setOpen(false)
                setStep(1)
                setDoubtQuestion("")
                setDoubtId(undefined)
                setDoubtCategory(undefined)
                setOtherCategory("")
                setHintReference("")
                setImagesData([])
            }}>
                <div className='container align-items-center' style={{ minWidth: "400px" }}>
                    <div className='row'>

                        <div className='col-12'>
                            <div style={{ padding: "0px", textAlign: "center" }}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5 style={{ fontSize: "14px", marginBottom: "0px" }}>{step == 1 ? `${doubtId ? "Edit" : "Ask"} doubt` : "Tell us a little about your doubt"}</h5>
                                    <span onClick={() => {
                                        setOpen(false)
                                        setStep(1)
                                        setDoubtQuestion("")
                                        setDoubtId(undefined)
                                        setDoubtCategory(undefined)
                                        setOtherCategory("")
                                        setHintReference("")
                                        setImagesData([])
                                    }}>
                                        <RxCross1 style={{ transform: "scale(1.2)", cursor: "pointer" }} />
                                    </span>
                                </div>
                                <hr className='separator_line_hr' />
                            </div>
                            {
                                step == 1 ?
                                    <div>
                                        <div className='col-12'>
                                            <textarea className='w-100 form-control p-2' style={{ border: "none" }} rows={7} placeholder='Write your doubt here...' value={doubtQuestion} onChange={(e: any) => {
                                                setDoubtQuestion(e?.target?.value)
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
                                                    <div className=' p-1 d-flex justify-content-evenly align-items-center' style={{ width: "140px", border: "0.5px solid black", borderRadius: "5px", cursor: "pointer" }} onClick={() => {
                                                        if (fileRef) {
                                                            fileRef?.current?.click()
                                                        }
                                                    }}>
                                                        <span><IoCloudUploadOutline style={{ transform: "scale(1.3)" }} />
                                                        </span>
                                                        <span style={{ fontSize: "15px", marginLeft: "9px" }}>Add Image</span>
                                                    </div>

                                                </div>
                                                <button className='btn btn-outline-primary btn-sm ms-2' onClick={() => {
                                                    if ((doubtQuestion?.trim() == "" || !doubtQuestion?.trim()) && (imagesData?.length <= 0)) {
                                                        ErrorMessage("Please add your doubt")
                                                    } else {
                                                        setStep(2)
                                                    }
                                                }}>Next</button>
                                            </div>
                                        </div>
                                    </div> : <div>
                                        <div>
                                            <h6>Suggested Subjects:</h6>
                                        </div>
                                        <div className='doubt_category_container'>
                                            {
                                                subjects?.length > 0 && subjects?.map((item: any, index: number) => {
                                                    return <div key={index} className={doubtCategory == (item?.id) ? 'doubt_dubject_category_selected' : 'doubt_dubject_category'} onClick={() => {
                                                        if (otherCategory == "" || !otherCategory?.trim()) {
                                                            if (doubtCategory == item?.id) {
                                                                setDoubtCategory(undefined)
                                                            } else {
                                                                setDoubtCategory(item?.id)
                                                            }
                                                        } else {
                                                            WarningMessage("You have already selected other tag")
                                                        }
                                                    }}>
                                                        <span>{item?.subject_name}</span>
                                                        <span className='ms-1'>+</span>
                                                    </div>
                                                })
                                            }

                                        </div>


                                        <div className='mt-4 mb-1'>
                                            <h6>Other Tags:</h6>
                                        </div>
                                        <div className='doubt_category_container'>
                                            <div className={otherCategory == ("Exam Related Query") ? 'doubt_dubject_category_selected' : 'doubt_dubject_category'} onClick={() => {
                                                if (doubtCategory == undefined || !doubtCategory) {
                                                    if (otherCategory == "Exam Related Query") {
                                                        setOtherCategory("")
                                                    } else {
                                                        setOtherCategory("Exam Related Query")
                                                    }
                                                } else {
                                                    WarningMessage("You have already selected relevant subject")
                                                }

                                            }}>
                                                <span>Exam Related Query</span>
                                                <span className='ms-1'>+</span>
                                            </div>

                                            <div className={otherCategory == ("General Query") ? 'doubt_dubject_category_selected' : 'doubt_dubject_category'} onClick={() => {
                                                if (doubtCategory == undefined || !doubtCategory) {
                                                    if (otherCategory == "General Query") {
                                                        setOtherCategory("")
                                                    } else {
                                                        setOtherCategory("General Query")
                                                    }
                                                } else {
                                                    WarningMessage("You have already selected relevant subject")
                                                }
                                            }}>
                                                <span>General Query</span>
                                                <span className='ms-1'>+</span>
                                            </div>

                                        </div>
                                        <hr className='separator_line_hr' />

                                        <div>
                                            <div className='d-flex justify-content-end align-items-center'>
                                                <div className='me-2 d-flex justify-content-between align-items-center'>
                                                    <button className='btn btn-outline-primary btn-sm ms-2' onClick={() => {
                                                        setStep(1)
                                                    }}>Previous</button>
                                                </div>
                                                <button className='btn btn-outline-primary btn-sm ms-2' onClick={async () => {
                                                    if ((doubtCategory == undefined || !doubtCategory) && (otherCategory == "" || !otherCategory || otherCategory?.trim() == "")) {
                                                        ErrorMessage("Select Doubt Category")
                                                    } else {
                                                        if (doubtId) {
                                                            let payload = {
                                                                question: doubtQuestion ? doubtQuestion : null,
                                                                subject_id: doubtCategory ? doubtCategory : null,
                                                                other_subject: otherCategory ? otherCategory : null,
                                                                image: imagesData,
                                                                active: 1,
                                                                hint_or_reference: hintReference ? hintReference : null
                                                            }
                                                            try {
                                                                const { data } = await updateDoubt(doubtId, payload)
                                                                if (data?.success) {
                                                                    SuccessMessage(data?.message)
                                                                    setOpen(false)
                                                                    setStep(1)
                                                                    setDoubtQuestion("")
                                                                    setDoubtId(undefined)
                                                                    setDoubtCategory(undefined)
                                                                    setOtherCategory("")
                                                                    setHintReference("")
                                                                    setImagesData([])
                                                                    if (status == "All"){
                                                                        if(filterCourse?.subjectIds?.length>0){
                                                                            getAllDoubtDetails(`page=${currentPage}&items_per_page=10&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                                                        }else{
                                                                            getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
                                                                        }
                                                                    }else{
                                                                        if(filterCourse?.subjectIds?.length>0){
                                                                            getAllMyDoubtsDetails(`page=${currentPageMyDoubt}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                                                        }else{
                                                                            getAllMyDoubtsDetails(`page=${currentPageMyDoubt}&userid=${getAuthenticatedUserData()?.id}&items_per_page=10`)
                                                                        }
                                                                    }
                                                                } else {
                                                                    ErrorMessage(data?.message)
                                                                }
                                                            } catch (err) {
                                                                ErrorMessage("Internal Server Error")
                                                            }
                                                        } else {
                                                            // setStep(2)
                                                            let payload = {
                                                                userid: getAuthenticatedUserData()?.id,
                                                                question: doubtQuestion,
                                                                subject_id: doubtCategory,
                                                                other_subject: otherCategory,
                                                                image: imagesData,
                                                                active: 1,
                                                                hint_or_reference: hintReference
                                                            }
                                                            try {
                                                                const { data } = await addDoubt(payload)
                                                                if (data?.success) {
                                                                    SuccessMessage(data?.message)
                                                                    setOpen(false)
                                                                    setStep(1)
                                                                    setDoubtQuestion("")
                                                                    setDoubtCategory(undefined)
                                                                    setOtherCategory("")
                                                                    setHintReference("")
                                                                    setImagesData([])
                                                                    if (status == "All"){
                                                                        if(filterCourse?.subjectIds?.length>0){
                                                                            getAllDoubtDetails(`page=${currentPage}&items_per_page=10&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                                                        }else{
                                                                            getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
                                                                        }
                                                                    }else{
                                                                        if(filterCourse?.subjectIds?.length>0){
                                                                            getAllMyDoubtsDetails(`page=${currentPageMyDoubt}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                                                        }else{
                                                                            getAllMyDoubtsDetails(`page=${currentPageMyDoubt}&userid=${getAuthenticatedUserData()?.id}&items_per_page=10`)
                                                                        }
                                                                    }
                                                                } else {
                                                                    ErrorMessage(data?.message)
                                                                }
                                                            } catch (err) {
                                                                ErrorMessage("Internal Server Error")
                                                            }
                                                        }
                                                    }


                                                }}>{doubtId ? "Edit" : "Add"} Doubt</button>
                                            </div>
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>
                    <input ref={fileRef} type="file" style={{ display: "none" }} onChange={(e: any) => {
                        handleFileChnage(e?.target?.files)
                    }} />
                </div>
            </Modal>


            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content width-80-modal-box">
                        <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">
                                Filters
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pt-1">
                            <div className="douts-modal-box-data">
                                <div className="tabs-heading d-flex justify-content-center align-items-center">
                                    <div className="dout-tabs">
                                        <nav className="navigation-tabs-douts border-none">
                                            <div
                                                className="nav nav-tabs border-none pb-3 d-flex justify-content-center w-100"
                                                id="nav-tab"
                                                role="tablist"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    id="allexam-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#allexam-exam"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="allexam-exam"
                                                    aria-selected="true"
                                                >
                                                    All Exams
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="others-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-others"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="others-other"
                                                    aria-selected="false"
                                                >
                                                    Others
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="tabs-sections-starts">
                                    <div className="tab-content mt-2" id="nav-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="allexam-exam"
                                            role="tabpanel"
                                            aria-labelledby="search-exam-tab"
                                        >
                                            <div className="search-bar-douts-search-exam">
                                                <div>
                                                    <div className="search-exam-search-box">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="17"
                                                            width="17"
                                                            className="search-icon-exam"
                                                            fill="#60A37E"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                                                        </svg>
                                                        <input type="text" placeholder="Search for exam" />
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Exams</span>
                                            <ul className="list-group over-flow-hidenss">
                                                {
                                                    courses?.map((item:any,index:number)=>{
                                                       return  <li key={index} className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                                        
                                                       <input
                                                           className="form-check-input space-inputsss"
                                                           type="checkbox"
                                                           value=""
                                                           id="firstCheckbox"
                                                        //    checked={
                                                        //     filterCourse?.subjectIds?.filter((x:any)=>{
                                                        //         return subjects?.filter((x:any)=>x?.course_ids?.includes(item?.id))?.map((y:any)=>y?.id)?.includes(x)
                                                        //     })?.length==subjects?.filter((x:any)=>x?.course_ids?.includes(item?.id))?.map((y:any)=>y?.id)?.length?true:false
                                                        //    }
                                                           onChange={(e:any)=>{
                                                             let temp:any=[...filterCourse?.courseIds]
                                                             let temp2= filterCourse?.courseIds?.find((x:any)=>{
                                                                return x==item?.id
                                                            })

                                                            let findSubjectIds=subjects?.filter((x:any)=>x?.course_ids?.includes(item?.id))?.map((y:any)=>y?.id)
                                                             if(temp2){
                                                               let filterId=temp.filter((x:any)=>(x!=temp2 || !findSubjectIds?.includes(x)))
                                                               let filterSubjectIds=filterCourse.subjectIds?.filter((x:any)=>!findSubjectIds?.includes(x))
                                                               setFilterCourse({
                                                                ...filterCourse,
                                                                subjectIds:filterSubjectIds,
                                                                courseIds:filterId
                                                               })
            
                                                             }else{
                                                               temp.push(item?.id)
                                                               setFilterCourse({
                                                                ...filterCourse,
                                                                courseIds:temp,
                                                                subjectIds:[...filterCourse.subjectIds,...findSubjectIds]
                                                             })
                                                             }
                                                             
                                                           }}
                                                       />
                                                       <label className="form-check-label width-label-douts">
                                                           <div className="accordion" id="accordionExample">
                                                               <div className="accordion-item m-0">
                                                                   <h2 className="accordion-header zero-line-height-header ">
                                                                       <button
                                                                           className="accordion-button padding-zeros"
                                                                           type="button"
                                                                           data-bs-toggle="collapse"
                                                                           data-bs-target={`${`#collapse${index}`}`}
                                                                           aria-expanded="true"
                                                                           aria-controls={`${`collapse${index}`}`}
                                                                           onClick={()=>{
                                                                            setSelectedDoubtCategory(index)
                                                                           }}
                                                                       >     
                                                                           {item?.course_name} <span>( {doubtCategoryDetail?.filter((item4:any)=>{
                                                                                return subjects?.filter((item2:any)=>item2?.course_ids?.includes(item?.id))?.map((item3:any)=>item3?.id)?.includes(item4?.subject_id)
                                                                           })?.length} )</span>
                                                                       </button>
                                                                   </h2>
                                                                   <div
                                                                       id={`collapse${index}`}
                                                                       className={`${selectedDoubtCategory==index?"accordion-collapse collapse show":"accordion-collapse collapse"}`}
                                                                       data-bs-parent="#accordionExample"
                                                                   >
                                                                       <div className="accordion-body over-flows-autoss">
                                                                           <ul className="list-group mb-2">
                                                                            {
                                                                                subjects?.filter((item5:any)=>item5?.course_ids?.includes(item?.id))?.map((item6:any,index2:number)=>{
                                                                                       return <li key={index2} className="list-group-item p-0 pt-1">
                                                                                       <input
                                                                                           className="form-check-input"
                                                                                           type="checkbox"
                                                                                           value=""
                                                                                           id="firstCheckbox"
                                                                                           checked={
                                                                                            filterCourse?.subjectIds?.find((item:any)=>{
                                                                                                return item==item6?.id
                                                                                            })?true:false
                                                                                           }
                                                                                           onChange={(e:any)=>{
                                                                                             let temp=[...filterCourse?.subjectIds]
                                                                                             let temp2= filterCourse?.subjectIds?.find((item:any)=>{
                                                                                                return item==item6?.id
                                                                                            })
                                                                                             if(temp2){
                                                                                               let filterId=temp.filter((x)=>x!=temp2)
                                                                                               setFilterCourse({
                                                                                                ...filterCourse,
                                                                                                subjectIds:filterId
                                                                                             })
                                            
                                                                                             }else{
                                                                                                temp.push(item6?.id)
                                                                                               setFilterCourse({
                                                                                                ...filterCourse,
                                                                                                subjectIds:temp
                                                                                             })
                                                                                             }
                                                                                             
                                                                                           }}
                                                                                       />
                                                                                       <label className="form-check-label">
                                                                                            <span>{item6?.subject_name} ( {doubtCategoryDetail?.filter((item2:any)=>item2?.subject_id==item6?.id)?.length} )</span>
                                                                                       </label>
                                                                                   </li>
                                                                                })
                                                                            }
                                                                           </ul>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </label>
                                                   </li>
                                                    })
                                                }
                                               
                                                {/* <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                                    <input
                                                        className="form-check-input space-inputsss"
                                                        type="checkbox"
                                                        value=""
                                                        id="firstCheckbox"
                                                    />
                                                    <label className="form-check-label width-label-douts">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item m-0">
                                                                <h2 className="accordion-header zero-line-height-header ">
                                                                    <button
                                                                        className="accordion-button padding-zeros"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapsetwo"
                                                                        aria-expanded="true"
                                                                        aria-controls="collapsetwo"
                                                                    >
                                                                        Physics <span>( 13381 )</span>
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id="collapsetwo"
                                                                    className="accordion-collapse collapse "
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    <div className="accordion-body over-flows-autoss">
                                                                        <ul className="list-group mb-2">
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                                    <input
                                                        className="form-check-input space-inputsss"
                                                        type="checkbox"
                                                        value=""
                                                        id="firstCheckbox"
                                                    />
                                                    <label className="form-check-label width-label-douts">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item m-0">
                                                                <h2 className="accordion-header zero-line-height-header ">
                                                                    <button
                                                                        className="accordion-button padding-zeros"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapsethree"
                                                                        aria-expanded="true"
                                                                        aria-controls="collapsethree"
                                                                    >
                                                                        Physics <span>( 13381 )</span>
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id="collapsethree"
                                                                    className="accordion-collapse collapse"
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    <div className="accordion-body over-flows-autoss">
                                                                        <ul className="list-group mb-2">
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                                    <input
                                                        className="form-check-input space-inputsss"
                                                        type="checkbox"
                                                        value=""
                                                        id="firstCheckbox"
                                                    />
                                                    <label className="form-check-label width-label-douts">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item m-0">
                                                                <h2 className="accordion-header zero-line-height-header ">
                                                                    <button
                                                                        className="accordion-button padding-zeros"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseFour"
                                                                        aria-expanded="true"
                                                                        aria-controls="collapseFour"
                                                                    >
                                                                        Physics <span>( 13381 )</span>
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id="collapseFour"
                                                                    className="accordion-collapse collapse"
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    <div className="accordion-body over-flows-autoss">
                                                                        <ul className="list-group mb-2">
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                                    <input
                                                        className="form-check-input space-inputsss"
                                                        type="checkbox"
                                                        value=""
                                                        id="firstCheckbox"
                                                    />
                                                    <label className="form-check-label width-label-douts">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item m-0">
                                                                <h2 className="accordion-header zero-line-height-header ">
                                                                    <button
                                                                        className="accordion-button padding-zeros"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapsefive"
                                                                        aria-expanded="true"
                                                                        aria-controls="collapsefive"
                                                                    >
                                                                        Physics <span>( 13381 )</span>
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id="collapsefive"
                                                                    className="accordion-collapse collapse "
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    <div className="accordion-body over-flows-autoss">
                                                                        <ul className="list-group mb-2">
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li className="list-group-item flex-eith-space-between border-bottom-solid mb-2">
                                                    <input
                                                        className="form-check-input space-inputsss"
                                                        type="checkbox"
                                                        value=""
                                                        id="firstCheckbox"
                                                    />
                                                    <label className="form-check-label width-label-douts">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item m-0">
                                                                <h2 className="accordion-header zero-line-height-header ">
                                                                    <button
                                                                        className="accordion-button padding-zeros"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapsesix"
                                                                        aria-expanded="true"
                                                                        aria-controls="collapsesix"
                                                                    >
                                                                        Physics <span>( 13381 )</span>
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id="collapsesix"
                                                                    className="accordion-collapse collapse "
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    <div className="accordion-body over-flows-autoss">
                                                                        <ul className="list-group mb-2">
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="firstCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    thermodynamics <span>( 121213 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electricity and magnetism <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    atomic structure <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    mechanics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    wave and oscillation <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                            <li className="list-group-item p-0 pt-1">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    value=""
                                                                                    id="secondCheckbox"
                                                                                />
                                                                                <label className="form-check-label">
                                                                                    electronics <span>( 121323 )</span>
                                                                                </label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li> */}
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="nav-others" role="tabpanel" aria-labelledby="other-tab">
                                            <span>Others</span>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" checked={
                                                        filterCourse?.subjectIds?.find((x:any)=>x=="Exam Related Query")? true:false
                                                    } id="firstCheckbox" onClick={()=>{
                                                        let temp=[...filterCourse?.subjectIds]
                                                        if(temp?.find((x:any)=>x=="Exam Related Query")){
                                                            let filterData=temp?.filter((x:any)=>x!="Exam Related Query")
                                                            setFilterCourse({
                                                                ...filterCourse,
                                                                subjectIds:filterData
                                                            })
                                                        }else{
                                                            temp.push("Exam Related Query")
                                                            setFilterCourse({
                                                                ...filterCourse,
                                                                subjectIds:temp
                                                            })
                                                        }

                                                    }}/>
                                                    <label className="form-check-label" >
                                                        Exam Related Query <span>( {doubtCategoryDetail?.filter((x:any)=>x?.other_subject=="Exam Related Query")?.length} )</span>
                                                    </label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" checked={
                                                        filterCourse?.subjectIds?.find((x:any)=>x=="General Query")? true:false
                                                    } id="secondCheckbox" onChange={()=>{
                                                        let temp=[...filterCourse?.subjectIds]
                                                        if(temp?.find((x:any)=>x=="General Query")){
                                                            let filterData=temp?.filter((x:any)=>x!="General Query")
                                                            setFilterCourse({
                                                                ...filterCourse,
                                                                subjectIds:filterData
                                                            })
                                                        }else{
                                                            temp.push("General Query")
                                                            setFilterCourse({
                                                                ...filterCourse,
                                                                subjectIds:temp
                                                            })
                                                        }

                                                    }} />
                                                    <label className="form-check-label">
                                                        General Query <span>( {doubtCategoryDetail?.filter((x:any)=>x?.other_subject=="General Query")?.length} )</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-filter">
                            <button className="border-filter" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{
                                setFilterCourse({
                                    courseIds:[],
                                    subjectIds:[]
                                })
                                 if (status == "All"){
                                        getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
                                 }else{
                                        getAllMyDoubtsDetails(`page=${currentPage}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                                 }
                            }}>
                                Clear All
                            </button>
                            <button className="background-color-filter" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{
                                 if (status == "All"){
                                    if(filterCourse?.subjectIds?.length>0){
                                        getAllDoubtDetails(`page=${currentPage}&items_per_page=10&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                    }else{
                                        getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
                                    }
                                 }else{
                                    if(filterCourse?.subjectIds?.length>0){
                                        
                                        getAllMyDoubtsDetails(`page=${currentPage}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}&subject_ids=${filterCourse?.subjectIds?.filter((x:any)=>(x!="Exam Related Query" && x!="General Query"))}&other_subject=${filterCourse?.subjectIds?.filter((x:any)=>(x=="Exam Related Query" || x=="General Query"))}`)
                                    }else{
                                        getAllMyDoubtsDetails(`page=${currentPage}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                                    }
                                 }
                               
                            }}>
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Doubt