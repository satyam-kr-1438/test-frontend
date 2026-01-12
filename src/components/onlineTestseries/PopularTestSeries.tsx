import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const PopularTestSeries = ({packages}:any) => {
    const [packagesDetails,setpackagesDetails]=useState<any[]>([])
    const router=useRouter()
    useEffect(()=>{
        let packageWithSubPackagesArr:any=[]
        packages?.packages?.map((item:any)=>{
            let subIds=item?.subpackages?.map((item2:any)=>item2?.subpackageid)
            packageWithSubPackagesArr.push({
                id:item?.id,
                subpackageid:subIds
            })
        })

        if(packageWithSubPackagesArr){
        let newArray:any=[]
           packageWithSubPackagesArr?.map((item:any)=>{
               let examids=packages?.subpackagesExam?.filter((item2:any)=>item?.subpackageid?.includes(item2?.id))?.map((item3:any)=>{
                    return item3?.exams?.map((item4:any)=>item4?.examid)
               })?.flat()
               newArray.push({
                ...item,
                examids:examids
            })
            })
            setpackagesDetails(newArray)
        }
    },[packages])
  return (
    <>
    <div className="live-test-main section-spacing">
        <div className="width-container">
            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <div className="sub-main testerika-color">| Popular Test Series</div>
                    <div className="main-title">
                        <h2>Explore Our <span>Best Test</span> Series</h2>
                    </div>
                </div>
                {
                    packages?.packages?.length>0 && packages?.packages?.map((item:any,index:number)=>{
                        return <div key={index} className="col-lg-4 mt-3" style={{cursor:"pointer"}}  onClick={() => {
                                                router.push(`/${item?.slug}/${item?.id}/${item?.hash}`)
                                            }}>
                        <div className='best-test-series'>
                            <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                <div className='testseries-name-section'><img src={item?.thumbnail ? item?.thumbnail:"img/websiteimage/best-test-series-umage.jpg"} alt="best-exam-profile" /></div>
                                <div className='user-profile-image'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>645.12k Users</span></div>
                            </div>
                            <div className='bg-light-green mt-3'>
                                <p>{item?.name}</p>
                            </div>
                            <div className='TOTAL-TEST-SERIES mt-2 mb-2'>
                                
                             <p> {packagesDetails?.find((item2:any)=>item2?.id==item?.id)?.examids?.length} Total Tests   | &nbsp;
                                
                                {
                                   packages?.subpackagesExam?.filter((item3:any)=>packagesDetails?.find((item2:any)=>item2?.id==item?.id)?.subpackageid?.includes(item3?.id))?.map((item:any)=>{
                                       return  item?.exams?.map((item5:any)=>item5?.id)?.length
                                    })?.flat()?.reduce((a:number,b:number)=>{
                                        return a+b
                                    },0)
                                }
                                  &nbsp;Free Tests</p>
                            </div>
    
                            <div className="languages-mode-best-test-series">
                                <span><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                <span className='ms-2'>English, Hindi + <b>{packagesDetails?.find((item2:any)=>item2?.id==item?.id)?.examids?.length} More</b></span>
                            </div>
                            <div className="listings-testerika-best-test-series">
                                <ul className='m-0'>
                                    <li>3 सफलता एक्सप्रेस</li>
                                    <li>96 Lucent General Knowledge CT</li>
                                    <li>269 Chapter Test (CBT 1)</li>
                                    <li className='testerika-color'>+{packagesDetails?.find((item2:any)=>item2?.id==item?.id)?.examids?.length} more tests</li>   
                                </ul>
                            </div>
                            <div  className='best-test-series-button'>
                            <button >Buy Now</button>
                            </div>
                        </div>
                    </div> 
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default PopularTestSeries