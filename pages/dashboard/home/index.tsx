import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import Filter from 'components/common/Filter';
import { ProductCard } from 'components/reuseable/product-cards';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import { getCourses, getPackages } from 'components/request/request';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setCoursesData, setPackagesData, setSubjectsData } from 'reducers/reducerSlice';
import PaginationQuizzes from 'components/reuseable/PaginationQuizzes';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import CbetSlider from 'components/cbetslider/CbetSlider';

const Packages: NextPage = () => {
  const [activePage, setActivePage] = useState(1)
  const [total, setTotal] = useState(1)
  const [bundlePackages, setBundlePackages] = useState<Array<any[]>>([])
  const [category, setCategory] = useState<any>(undefined)
  const [loading, stLoading] = useState(true)
  const { premiumPackages, subjects, courses, packages }: any = useSelector((state: any) => state?.reducerSlice)
  const dispatch = useDispatch()
  const [packagesDetails, setpackagesDetails] = useState<any[]>([])
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


  const getAllPackages = async () => {
    try {
      let query = `page=${activePage}&items_per_page=6&category=${category}`
      const { data } = await getPackages(query)
      if (data && data?.data) {
        setTotal(data?.payload?.pagination?.total)
        dispatch(setPackagesData(data?.data))
        setTimeout(() => {
          stLoading(false)
        }, 200)
      }
      else {
        setTimeout(() => {
          stLoading(false)
        }, 200)
      }
    } catch (err) {
      setTimeout(() => {
        stLoading(false)
      }, 200)
    }
  }
  //  const getAllBundlePackages=async ()=>{
  //   try{
  //     let query=`page=${activePage}&items_per_page=6`
  //     const {data}=await getBundlePackages(query)
  //     if(data && data?.data){
  //       let finallizeData = data?.data.slice().sort((a:any, b:any) => {
  //         if (a.featured > b.featured) {
  //           return -1
  //         } else if (a.featured == b.featured) {
  //           if (a.id > b.id) {
  //             return -1
  //           } else {
  //             return 0
  //           }
  //         }
  //       })
  //       setBundlePackages(finallizeData)
  //       setTimeout(()=>{
  //         stLoading(false)
  //       },200)
  //     }
  //     else{
  //       setTimeout(()=>{
  //         stLoading(false)
  //       },200)
  //     }
  //   }catch(err){
  //     setTimeout(()=>{
  //       stLoading(false)
  //     },200)
  //   }
  //  }
  const getAllSubjects = async () => {
    try {
      const { data } = await getCourses()
      dispatch(setCoursesData(data))
    } catch (err) {

    }
  }

  useEffect(() => {
    if (courses?.length <= 0)
      getAllSubjects()
  }, [courses])

  useEffect(() => {
    getAllPackages()
    // getAllBundlePackages()
  }, [activePage, category])
  return (
    <Fragment>

      {/* ========== header section ========== */}
      {/* <header className="wrapper bg-soft-primary">
        <DashboardNavbar
          // info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={<DashboardNavbarModal />}
        />
      </header> */}
      {/* <Testerikaheader />
      <Testerikamianheader /> */}
      {
        loading ? <Loading /> : <>

          <section className="c-bet-dashboard">
            <CbetSideBar />
            <div className="c-bet-right-side-bar">
              <CbetTopBar />
              <div className="c-bet-content-part slider-container pt-6 ">
                <CbetSlider />

                <main>
                  <section className="wrapper  pt-11">
                    <div className="cbet-container pt-0 pt-lg-5">
                      <div className="row gy-10">
                        <Filter courses={courses} setCategory={setCategory} setActivePage={setActivePage} />
                        <div className="col-lg-9 mt-5">
                          <div className="row gx-md-4 gy-md-4 mb-4">
                            <div className="col-12">
                              <div className="row mx-1 gy-5">
                                {
                                  packages?.packages?.length > 0 ? packages?.packages?.map((item: any, index: number) => {
                                    return <Fragment key={index}>
                                      <ProductCard {...item} packageKey={item?.hash} itemKey={index} className="col-lg-10 col-12" premiumPackages={premiumPackages} packagesDetails={packagesDetails} />
                                    </Fragment>
                                  }
                                  ) : bundlePackages?.length <= 0 && <ContentNotFound button_text="" to="" />
                                }

                              </div>
                            </div>
                          </div>
                          {packages?.packages?.length > 0 && Math.ceil((total) / 6) > 1 && <PaginationQuizzes currentPage={activePage} totalPage={total} setCurrentPage={setActivePage} />}
                        </div>

                      </div>
                      <div className="row pt-4">
                        <div className="col-lg-12 text-center">
                          <div className="main-title">
                            <h2>CBAT Test Series <span>FAQ</span></h2>
                          </div>
                        </div>
                        <div className="col-lg-12 p-0">
                          <div className="cbet-faq p-3">
                            <div className="tab-content" id="myTabContent">
                              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="accordion-wrapper" id="accordion">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card  accordion-item">
                                        <div className="card-header" id="headingOne"><button data-bs-toggle="collapse" aria-controls="collapseOne" data-bs-target="#collapseOne" aria-expanded="true" >What is the CBAT Test Series?</button></div>
                                        <div id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample" className="accordion-collapse false collapse show" >
                                          <div className="card-body">
                                            <p>The CBAT Test Series is a series of practice tests designed to help candidates prepare for the Computer-Based Aptitude Test (CBAT). These tests simulate the actual exam environment, providing candidates with an opportunity to familiarize themselves with the format, question types, and time management strategies.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="card  accordion-item">
                                        <div className="card-header" id="headingTwo"><button data-bs-toggle="collapse" aria-controls="collapseTwo" data-bs-target="#collapseTwo" aria-expanded="false" className="collapsed" >What is the format of the CBAT?</button></div>
                                        <div id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" className="accordion-collapse collapse false">
                                          <div className="card-body">
                                            <p>The CBAT generally consists of multiple-choice questions (MCQs) that assess a candidate's cognitive and technical skills. The test evaluates logical reasoning, numerical ability, and decision-making skills.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="card  accordion-item">
                                        <div className="card-header" id="headingThree"><button data-bs-toggle="collapse" aria-controls="collapseThree" data-bs-target="#collapseThree" aria-expanded="false" className="collapsed" > Are the practice tests exactly like the actual CBAT?</button></div>
                                        <div id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample" className="accordion-collapse collapse false">
                                          <div className="card-body">
                                            <p>Yes! The tests in the CBAT Test Series are designed to closely resemble the actual exam in terms of format, question types, and difficulty. This will help you build your confidence and improve your performance in the real test.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="card  accordion-item">
                                        <div className="card-header" id="headingFour"><button data-bs-toggle="collapse" aria-controls="collapseFour" data-bs-target="#collapseFour" aria-expanded="false" className="collapsed" > Are there any timed practice tests available?</button></div>
                                        <div id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionExample" className="accordion-collapse collapse false">
                                          <div className="card-body">
                                            <p>Yes, the CBAT Test Series includes timed practice tests that simulate the time constraints of the actual CBAT. These timed tests help you practice managing your time effectively during the real exam</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="card  accordion-item">
                                        <div className="card-header" id="headingFive"><button data-bs-toggle="collapse" aria-controls="collapseFive" data-bs-target="#collapseFive" aria-expanded="false" className="collapsed" >Which payment methods do you accept?</button></div>
                                        <div id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionExample" className="accordion-collapse collapse false">
                                          <div className="card-body">
                                            <p>Yes, the CBAT Test Series includes timed practice tests that simulate the time constraints of the actual CBAT. These timed tests help you practice managing your time effectively during the real exam.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="card  accordion-item">
                                        <div className="card-header" id="headingSix"><button data-bs-toggle="collapse" aria-controls="collapseSix" data-bs-target="#collapseSix" aria-expanded="false" className="collapsed">How will I receive feedback on my performance?</button></div>
                                        <div id="collapseSix" aria-labelledby="headingSix" data-bs-parent="#accordionExample" className="accordion-collapse collapse false">
                                          <div className="card-body">
                                            <p>After completing each test, you will receive a detailed analysis of your performance, including your score, the number of correct/incorrect answers, and explanations for the correct answers. This will help you understand your strengths and weaknesses.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>



                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </section>
          <footer className="footer_container_dashboard_content">
            <DashboardFooter />
          </footer>
        </>
      }


    </Fragment>
  );
};

export default Packages;
