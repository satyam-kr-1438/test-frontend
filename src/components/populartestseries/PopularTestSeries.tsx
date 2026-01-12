import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const PopularTestSeries = ({ packages,loading }: any) => {
    const [packagesDetails, setpackagesDetails] = useState<any[]>([])
    const router = useRouter()
    useEffect(() => {
        let packageWithSubPackagesArr: any = []
        packages?.packages?.map((item: any) => {
            let subIds = item?.subpackages?.map((item2: any) => item2?.subpackageid)
            packageWithSubPackagesArr.push({
                id: item?.id,
                subpackageid: subIds
            })
        })

        if (packageWithSubPackagesArr) {
            let newArray: any = []
            packageWithSubPackagesArr?.map((item: any) => {
                let examids = packages?.subpackagesExam?.filter((item2: any) => item?.subpackageid?.includes(item2?.id))?.map((item3: any) => {
                    return item3?.exams?.map((item4: any) => item4?.examid)
                })?.flat()
                newArray.push({
                    ...item,
                    examids: examids
                })
            })
            setpackagesDetails(newArray)
        }
        // packages?.exams?.filter((item6:any)=>[...packages?.subpackagesExam?.filter((item3:any)=>[...item?.subpackages?.map((item2:any)=>item2?.subpackageid)]?.includes(item3?.id))?.map((item4:any)=>item4?.exams?.map((item5:any)=>item5?.examid))]?.includes(item6?.id))
    }, [packages])
    return (
        <>
            <div className="live-test-main light-bg-color section-spacing">
                <div className="width-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12 text-center mb-5">
                            <div className="sub-main testerika-color">| Popular Test Series</div>
                            <div className="main-title">
                                <h2>Explore Our <span>Best Test</span> Series</h2>
                            </div>
                        </div>
                        {
                           loading ? <h2 className='mx-auto text-center my-5'>Loading...</h2> : packages?.packages?.length > 0 && packages?.packages?.map((item: any, index: number) => {
                                return <div key={index} className="col-lg-5 mt-3" style={{cursor:"pointer"}}  onClick={() => {
                                                router.push(`/${item?.slug}/${item?.id}/${item?.hash}`)
                                            }}>
                                    <div className='best-test-series'>
                                        <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                            <div className='testseries-name-section'><img src={item?.thumbnail ? item?.thumbnail : "img/websiteimage/best-test-series-umage.jpg"} alt="best-exam-profile" /></div>
                                            <div className='user-profile-image'>
                                                <span><img src="img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>1k+ Users</span>

                                                <p className="price mb-2">
                                                <del>
                                                    <span className="amount" style={{ fontSize: "15px",color:"#cbcbcb" }}>₹{item?.price_inr * 12}</span>
                                                </del>{' '}<span className="amount after-fooer-prize" style={{ fontSize: "25px",fontWeight:"bold",color:"green" }}>₹{item?.price_inr}</span>
                                            </p>
                                                </div>
                                           
                                        </div>
                                        
                                        <div className='bg-light-green mt-3 mb-4'>
                                            <p>{item?.name}</p>
                                        </div>
                                        <div className='best-test-series-button'>
                                            <button >Buy Now</button>
                                        </div>
                                        <div className='TOTAL-TEST-SERIES mt-4 mb-2'>

                                            <p>
                                                {item?.total_test?.split("/")[0]} Total Tests   | &nbsp;

                                                &nbsp;{item?.total_test?.split("/")[1]} Free Tests</p>
                                        </div>

                                        <div className="languages-mode-best-test-series">
                                            <span><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                            <span className='ms-2'>English, Hindi
                                                {/* + <b>{packagesDetails?.find((item2:any)=>item2?.id==item?.id)?.examids?.length} More</b> */}
                                            </span>
                                        </div>
                                        <div className="listings-testerika-best-test-series">
                                            <div className="preview" dangerouslySetInnerHTML={{ __html: item?.description }} />
                                            {/* <ul className='m-0'>
                                <li>New Pattern Based Mock Test dvs</li>
              <li>Each Battery T-Score</li>
              <li>Instant Result with Right & Wrong Answer</li>
              <li>All India Rank With Compare Report</li>
              <li>Instant Activation</li>
                                    <li className='testerika-color'>+{packagesDetails?.find((item2:any)=>item2?.id==item?.id)?.examids?.length} more tests</li>   
                                </ul> */}
                                        </div>
                                        
                                    </div>
                                </div>
                            })
                        }
                        <div className="col-lg-12 text-center">
                            <button className='Theme-buttons' onClick={() => {
                                router.push("/online-test-series")
                            }}>Explore All Test Series</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularTestSeries