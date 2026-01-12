import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const TestSeriesListed = ({loading, packages, courses, setCategory }: any) => {
  const [selecetdSubject, setSelectedSubject] = useState("All")
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
  }, [packages])
  return (
    <>
      <section className=" section-spacing">
        <div className="width-container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="sub-main purple-submain">| 100% QUALITY TEST SERIES</div>
              <div className="main-title">
                <h2>
                  Choose <span>Your</span> Test Series
                </h2>
              </div>
            </div>
            <div className="col-lg-12 mx-auto">
              <div className="row">
                <div className="col-lg-3 mt-3 mb-3 mob-hide">
                  <div className='exam-category-listed-here'>
                    <div className="search-bar-exam-category">
                      <div className="inputss-search-categoriess p-2">
                        <input type="text" placeholder='Search test series' className='input-border-none-border-inputs' />
                      </div>
                    </div>
                    <ul className="nav nav-tabs display-exam-category p-1 online-testseries-over-flow" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={selecetdSubject == "All" ? "nav-link active" : "nav-link"}
                          id="home-tab"
                          onClick={() => {
                            setSelectedSubject("All")
                            setCategory(undefined)
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="12"
                            height="12"
                            className="me-2"
                          >
                            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                          </svg>
                          All Exams
                        </button>
                      </li>
                      {
                        courses?.length > 0 && courses?.map((item: any, index: number) => {
                          return <li key={index} className="nav-item" role="presentation" onClick={() => {
                            setSelectedSubject(item?.id)
                            setCategory(item?.id)
                          }}>
                            <button
                              className={selecetdSubject == item?.id ? "nav-link active" : "nav-link"}
                              id="profile-tab"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="12"
                                height="12"
                                className="me-2"
                              >
                                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                              </svg>
                              {
                                item?.course_name
                              }
                            </button>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 mt-3 ">
                  <div className="tab-content over-flow-action-placed-part" id="myTabContent">
                    <div className="tab-pane fade show active" id="tabone" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row bg-whitesss-online-test-series">
                        {
                         loading ? <h2 className='mx-auto text-center my-3'>Loading...</h2> : packages?.packages?.length > 0 ? packages?.packages?.map((item: any, index: number) => {
                            return <div key={index} className="col-lg-7 mt-3" style={{cursor:"pointer"}} onClick={()=>{
                                 router.push(`/${item?.slug}/${item?.id}/${item?.hash}`)
                            }}>
                              <div className='best-test-series'>
                                <div className='d-flex justify-content-between space-best-test-series align-items-center'>
                                  <div className='testseries-name-section'><img src={item?.thumbnail ? item?.thumbnail : "img/websiteimage/best-test-series-umage.jpg"} alt="best-exam-profile" /></div>
                                  <div className='user-profile-image'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>1k+ Users</span>
                                  <p className="price mb-2">
                                                <del>
                                                    <span className="amount" style={{ fontSize: "15px",fontWeight:"bold",color:"red" }}>₹{item?.price_inr * 12}</span>
                                                </del>{' '}<span className="amount after-fooer-prize" style={{ fontSize: "25px",fontWeight:"bold",color:"green" }}>₹{item?.price_inr}</span>
                                            </p></div>
                                </div>
                                <div className='bg-light-green mt-3'>
                                  <p>{item?.name}</p>
                                </div>
                                <div className='TOTAL-TEST-SERIES mt-2 mb-2'>
                                <p>{item?.total_test?.split("/")[0]} Total Tests   | &nbsp;
                                
                                &nbsp;{item?.total_test?.split("/")[1]} Free Tests</p>
                                </div>

                                <div className="languages-mode-best-test-series">
                                  <span><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
                                  <span className='ms-2'>English, Hindi 
                                    {/* + <b> {packagesDetails?.find((item2: any) => item2?.id == item?.id)?.examids?.length} More</b> */}
                                    </span>
                                </div>
                                <div className="listings-testerika-best-test-series">
                                <div className="preview" dangerouslySetInnerHTML={{__html:item?.description}}/>
                                </div>
                                <div className='best-test-series-button'>
                                <button >Buy Now</button>
                                </div>
                              </div>
                            </div>
                          }) : <p>No Test Series Found</p>
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default TestSeriesListed