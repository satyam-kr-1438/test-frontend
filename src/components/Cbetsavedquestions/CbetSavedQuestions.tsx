import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getSavedExamQuestion , removeSavedQuestions} from 'components/request/request'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import PaginationQuizzes from 'components/reuseable/PaginationQuizzes';
import { SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';

const CbetSavedQuestions = () => {
  const [loading, setLoading] = useState(true)
  const [activePage, setActivePage] = useState(1)
  const [passages, setPassages] = useState<any[]>([])
  const [total, setTotal] = useState(1)
  const [savedQues, setSavedQues] = useState<any[]>([])
  const [questions, setQuestions] = useState<any[]>([])
  const router = useRouter()
  const getSavedQuestions = async () => {
    try {
      const { data } = await getSavedExamQuestion(getAuthenticatedUserData()?.id, `page=${activePage}&items_per_page=10`)
      if (data?.success) {
        setTotal(Number(data?.totalCount))
        setPassages(data?.passages)
        setQuestions(data?.questions)
        setSavedQues(data?.savedExamdetail)
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      } else {
        setTotal(1)
        setPassages([])
        setQuestions([])
        setSavedQues([])
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      }
      console.log(data)
    } catch (err) {
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }
  }
  useEffect(() => {
    getSavedQuestions()
  }, [activePage])
  return (
    <>
      <section className="c-bet-report-question">
        <div>
          <div className="row">
            <div className="col-lg-12">
              <div className="repot-cbet-titles pt-5">
                <h2>Saved Questions
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              {
                loading ? <Loading/> : <>
                  {
                    savedQues?.length > 0 ? savedQues?.map((item: any, index: number) => {
                      return <div key={index} className="cbet-report-question">
                        <div className="cbet-test-saved">
                          <div className="report-cbet-question">
                            <span className="fw-light">
                              <span className="text-dark fw-bold">{index + 1} of {savedQues?.length} </span></span>
                          </div>
                          <div className="save-cbet-card">
                            <div>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 384 512"
                                >
                                  <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                                </svg>
                              </span>
                            </div>
                            <div>
                              <span className="ms-2" style={{cursor:"pointer"}} onClick={async ()=>{
                                try{
                                   const {data}=await removeSavedQuestions({
                                    userid:getAuthenticatedUserData()?.id, question_id:item?.question_id, passage_id:item?.passage_id
                                   })
                                   console.log(data)
                                   if(data?.success){
                                    SuccessMessage(data?.message)
                                    setLoading(true)
                                    getSavedQuestions()
                                   }else{
                                    SuccessMessage("Something went wrong")
                                   }
                                }catch(err){
                                  SuccessMessage("Something went wrong")
                                }
                              }}>Remove Saved</span>
                            </div>
                          </div>

                        </div>
                        {item?.passage_id && <div className='Passage-'>
                          <div dangerouslySetInnerHTML={{__html:passages?.find((passItem:any)=>passItem?.id==item?.passage_id)?.passage}}></div>
                        </div>}
                        <div className='Question-Cbet-Text inner-size-cbet-report pt-2'>
                          <div dangerouslySetInnerHTML={{ __html: questions?.find((ques: any) => ques?.id == item?.question_id)?.question }}></div>

                        </div>
                        {
                          questions?.find((ques: any) => ques?.id == item?.question_id)?.options?.map((opt: any, ind2: number) => {
                            return <div key={ind2} className={opt?.right_option == 1 ? "cbet-report-question border-span-tag cbet-right-answer" : opt?.right_option == 0 && item?.option_id == opt?.id
                              ? "cbet-report-question border-span-tag cbet-wrong-answer" : "cbet-report-question border-span-tag"}>
                              <div className='d-flex justify-content-start align-items-center'><span className=''>{ind2 + 1}</span> <div className='ms-2' dangerouslySetInnerHTML={{ __html: opt?.option }}></div></div>
                            </div>
                          })
                        }
                        {/* <div className="cbet-report-question border-span-tag cbet-right-answer">
                         <p><span className=''>1</span> <b className='ms-2'>Culex</b></p>
                       </div>
                       <div className="cbet-report-question border-span-tag cbet-wrong-answer">
                         <p><span className=''>2</span> <b className='ms-2'>Mansonia</b></p>
                       </div>
                       <div className="cbet-report-question border-span-tag ">
                         <p><span className=''>3</span> <b className='ms-2'>Aedes</b></p>
                       </div>
                       <div className="cbet-report-question border-span-tag">
                         <p><span className=''>4</span> <b className='ms-2'>Anopheles</b></p>
                       </div> */}

                      </div>
                    }) : <div className='text-dark my-5 d-flex justify-content-center align-items-center'>No Questions Available</div>
                  }

                </>
              } 

              {savedQues?.length > 0 && <div className='my-3 mx-auto'>
                <PaginationQuizzes currentPage={activePage} totalPage={total} setCurrentPage={setActivePage} />

              </div>}
              {/* <div className="cbet-report-question">
                <div className="cbet-test-saved">
                  <div className="report-cbet-question">
                    <span className="fw-light">
                      <span className="text-dark fw-bold">1 of 2 </span>-  Test - General Awareness Mock Test
                    </span>
                  </div>
                  <div className="save-cbet-card">
                    <div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
                          width="14"
                          fill="#60A37E"
                          viewBox="0 0 384 512"
                        >
                          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <span className="ms-2">Saved</span>
                    </div>


                    <span className="ms-2">
                      <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Wrong Question
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Wrong Answer
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Formatting Issue
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  No Solution
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Other
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </span>
                  </div>

                </div>
                <div className='Question-Cbet-Text pt-2'>
                  <p>Chikungunya is an infection caused by _____ mosquito.</p>
                </div>
              </div> */}







              {/* <div className="cbet-report-question">
                <div className="cbet-test-saved">
                  <div className="report-cbet-question">
                    <span className="fw-light">Solution:
                      <span className="fw-bold theme-color"> 1
                      </span>
                    </span>
                  </div>
                  <div className="save-cbet-card">
                    <div>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14"
                          width="14"
                          fill="#60A37E" viewBox="0 0 512 512">
                          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
                      </span>
                    </div>
                    <div>
                      <span className="ms-2">Report</span>
                    </div>


                    <span className="ms-2">
                      <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav padding-zero">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle d-flex align-items-center p-2"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="14"
                                  width="14"
                                  fill="#60A37E"
                                  viewBox="0 0 128 512"
                                >
                                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                </svg>
                              </a>
                              <div className="dropdown-menu menu-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Wrong Question
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Wrong Answer
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Formatting Issue
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  No Solution
                                </a>
                                <a className="dropdown-item listing-menu-c-bet" href="#">
                                  Other
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </span>
                  </div>

                </div>
                <div className='Question-Cbet-Text pt-2'>
                  <p>Correct Answer Culex</p>
                  <h2 className='pt-2'>Solution is image or Content</h2>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CbetSavedQuestions