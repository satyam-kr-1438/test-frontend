import { NextPage } from 'next';
import { FormEvent, Fragment, useEffect, useMemo, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { LuFileQuestion } from "react-icons/lu";
import { useRouter } from 'next/router';
import { checkUserProfileStatus, getAuthenticatedUserData } from 'hooks/localStorageInfo';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';

import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { useSelector } from 'react-redux';

import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import { getPackageUsingKeyAndSlug } from 'components/request/request';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Signin from 'components/blocks/navbar/partials/Signin';


const PackageDetail: NextPage = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [packageDetail, setPackageDetail] = useState<any>(undefined)
    const [subPackageDetail, setSubPackageDetail] = useState<any[]>([])
    const [subPackageExam, setSubPackagesExam] = useState<any[]>([])
    const [selectedSubPackageId, setSelectedSubPackageId] = useState<any>(null)
    const { premiumPackages, passes, passesFeatures }: any = useSelector((state: any) => state?.reducerSlice)
    const [premium, setPremium] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (premiumPackages && premiumPackages?.length > 0 && packageDetail) {
            premiumPackages?.find((item: any) => {
                if (item?.passid && packageDetail?.premiumType == 0) {
                    setPremium(true)
                }
                // if (item?.passid && packageDetail?.premiumType == 1 && CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Pass Pro")) {
                //     setPremium(true)
                // }
                else if (item?.packageid && item?.packageid == packageDetail?.id && packageDetail?.type == "Package") {
                    setPremium(true)
                } else if (item?.bundleid && item?.bundleid == packageDetail?.id && packageDetail?.type == "Bundle") {
                    setPremium(true)
                }
            })
        }
    }, [useSelector, premiumPackages, packageDetail, router])


    const getPackageDetail = async () => {
        try {
            if (router?.query?.packageId && router?.query?.packageKey) {
                let user_id = getAuthenticatedUserData()?.id
                const { data } = await getPackageUsingKeyAndSlug(router?.query?.packageId, router?.query?.packageKey, user_id)
                if (data?.success) {
                    setPackageDetail(data?.packages)
                    setSubPackageDetail(data?.subPackages?.slice())
                    setSelectedSubPackageId(data?.subPackages?.slice()[0]?.id)
                    setSubPackagesExam(data?.subPackageExam)
                    setTimeout(() => {
                        setLoading(false)
                    }, 200)
                } else {
                    router.push("/access-denied")
                }
            }
        } catch (err) {
            router.push("/access-denied")

        }
    }

    useEffect(() => {
        if (router?.query?.packageId && router?.query?.packageKey) {
            getPackageDetail()
        }
    }, [router])


    return (
        <Fragment>
            <Testerikaheader />
            <Testerikamianheader />


            {
                loading ? <Loading /> : <>
                    <section style={{ marginTop: "0px" }}>
                        <div >
                            <main>
                                <section className="wrapper">
                                    {<div className="width-container pt-5 py-md-5 py-lg-10">
                                        <div className="row gx-md-8 gx-xl-12 gy-8">

                                            <div className={`${premium ? "col-lg-12 col-md-12 order-md-2" : "col-lg-8 col-md-12 order-md-2"}`}>
                                                <div>
                                                    <div className='text-dark-package-name'>
                                                        {packageDetail?.name}
                                                    </div>
                                                    <div className="card my-4">
                                                        <div className="d-flex justify-content-start align-items-center padding-main-tab-exam-list">
                                                            {
                                                                subPackageDetail?.length > 0 && subPackageDetail?.map((item: any, index: any) => {
                                                                    return <div key={index} className={`${selectedSubPackageId == item?.id ? "subPackage_styling_selected" : "subPackage_styling_not_selected"}`}>
                                                                        <p onClick={() => {
                                                                            // setExamTab(index+1)
                                                                            setSelectedSubPackageId(item?.id)
                                                                        }}>{item?.name}</p>
                                                                    </div>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    {
                                                        subPackageExam?.length > 0 && subPackageExam?.filter((item2: any) => {
                                                            return item2?.exams?.find((item3: any) => item3?.subpackageid == selectedSubPackageId)?.subpackageid == selectedSubPackageId
                                                        })?.length > 0 ? subPackageExam?.filter((item2: any) => {
                                                            return item2?.exams?.find((item3: any) => item3?.subpackageid == selectedSubPackageId)?.subpackageid == selectedSubPackageId
                                                        })?.map((item: any, index: any) => {
                                                            return <div key={index} className="card my-4">
                                                                <div className="py-3 px-2 exam_subpackage_main_container">
                                                                    <div className="exam_section_second_section">
                                                                        <div className="exam_section_second_section_section1" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                                            <h6>{item?.name}</h6>
                                                                            {item?.exams?.find((item3: any) => item3?.subpackageid == selectedSubPackageId)?.type == "Free" && <span className="free_paid_button_exam_subPackage">Free</span>}
                                                                            {item?.exams?.find((item3: any) => item3?.subpackageid == selectedSubPackageId)?.type == "Premium" && <span className="free_paid_button_exam_subPackage2">Premium</span>}
                                                                        </div>
                                                                        <div className="exam_section_second_section2">
                                                                            <div className="exam_section_second_section2_icon_content">
                                                                                <LuFileQuestion style={{ transform: "scale(0.7)" }} />
                                                                                <span>{item?.total_questions} Questions</span>
                                                                            </div>
                                                                            <div className="exam_section_second_section2_icon_content" style={{ marginLeft: "10px" }}>
                                                                                <BsFileEarmarkSpreadsheet style={{ transform: "scale(0.7)" }} />
                                                                                <span>{item?.total_marks} Marks</span>
                                                                            </div>
                                                                            <div className="exam_section_second_section2_icon_content" style={{ marginLeft: "10px" }}>
                                                                                <IoMdTimer style={{ transform: "scale(0.7)" }} />
                                                                                <span>{item?.exam_duration} Minutes</span>
                                                                            </div>
                                                                        </div>

                                                                        <ul className='exam_section_list_container mt-2 mb-2' style={{ fontSize: "13px", padding: "2px" }}>
                                                                                {
                                                                                    item?.examsections?.map((sectionItem: any, indexItem: number) => {
                                                                                        return <li className='exam_section_list_margin custom-margin-rightpage' key={indexItem} >{sectionItem?.section_name}</li>
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                    </div>
                                                                    <div style={{ display: "flex" }}>
                                                                        {<button className="btn btn-outline-greenish btn-sm exam_subPackage_strt_now_button" data-bs-toggle="modal" data-bs-target="#modal-signin">
                                                                            Get Started
                                                                        </button>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }) : <>
                                                            <div className="row mx-auto text-center my-5">
                                                                <div>
                                                                    <img src="/img/notAvailable.png" style={{ maxWidth: "250px", textAlign: "center", margin: "auto" }} alt="Not Available" />
                                                                </div>
                                                                <div className="my-4">
                                                                    <h5>Content you are looking for isn't available at this moment</h5>
                                                                </div>
                                                            </div>
                                                        </>
                                                    }

                                                </div>

                                            </div>

                                            {!premium && <div className="col-lg-4 col-md-12 quizzes_sticky_container3 position-none" id="">
                                                <div className="card p-4 border-green-custom-exam-name">

                                                    <div className="post-header mb-2">
                                                        <h5 className="post-title display-5" style={{ fontSize: "24px" }}>
                                                            <a href="#" className="link-dark">
                                                                {packageDetail?.name}
                                                            </a>
                                                        </h5>

                                                        <p className="price mb-2">
                                                            <del>
                                                                <span className="amount" style={{ fontSize: "15px" }}>₹{packageDetail?.price_inr * 12}</span>
                                                            </del>{' '}<span className="amount colored-red" style={{ fontSize: "15px" }}>₹{packageDetail?.price_inr}</span>
                                                        </p>

                                                        {/* <p className="text-danger " style={{ margin: "2px 0px 2px 0px", fontSize: "13px" }}>1 day left at this price</p> */}
                                                    </div>

                                                    <p className="mb-2" style={{ fontSize: "12px" }}>
                                                        {/* Description:  */}
                                                        <div className='preview' dangerouslySetInnerHTML={{ __html: packageDetail?.description }}></div>
                                                    </p>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>}
                                </section>
                            </main>

                        </div>
                    </section>




                </>
            }
            <Signin />

        </Fragment>
    );
};

export default PackageDetail;
