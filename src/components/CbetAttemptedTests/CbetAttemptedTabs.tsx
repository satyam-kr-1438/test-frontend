import React, { useEffect, useState } from 'react';
import { getAttemptedExam } from 'components/request/request'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useRouter } from 'next/router';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import PaginationQuizzes from 'components/reuseable/PaginationQuizzes';

const CbetAttemptedTabs = () => {
  const [activePage, setActivePage] = useState(1)
  const [data, setData] = useState<any[]>([])
  const [total, setTotal] = useState(1)
  const [exam, setExam] = useState<any[]>([])
  const [groupedData, setGroupedData] = useState<any>()
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const groupByDate = (array: any) => {
    return array.reduce((acc: any, item: any) => {
      const date = new Date(item.createdAt).toLocaleDateString("en-CA"); // e.g., "2025-03-27"
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});
  };
  const getAttemptedExamDetail = async () => {
    try {
      const currUser = getAuthenticatedUserData()
      if (currUser) {
        const { data } = await getAttemptedExam(currUser?.id, `page=${activePage}&items_per_page=10`)
        if (data?.data?.length > 0) {
          setData(data?.data)
          setTotal(data?.payload?.pagination?.total)
          setExam(data?.exams)
          const groupedDat = groupByDate(data?.data);
          setGroupedData(groupedDat)
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        } else {
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        }
      }
    } catch (err) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }



  useEffect(() => {
    getAttemptedExamDetail()
  }, [activePage])
  return (

    <>

      <div className="pt-7">
        <h2>Your Attempted Exams</h2>
      </div>
      {loading ? <div className='container-fluid'>
        <Loading />
      </div> : <div className=" pt-5">
        <nav className="navigation-tabs-douts">
          <div className="nav nav-tabs  w-100 pb-4" id="nav-tab" role="tablist">
            {/* <button
              className="nav-link current-affair active border-none"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="all-other"
              aria-selected="true"
            >
              Exam
            </button> */}
            {/* <button
              className="nav-link current-affair border-none"
              id="allexam-tab"
              data-bs-toggle="tab"
              data-bs-target="#allexam-exam"
              type="button"
              role="tab"
              aria-controls="allexam-exam"
              aria-selected="false"
            >
              Quiz
            </button> */}
          </div>
        </nav>
        <div className="d-flex justify-content-between flex-end-mob">
          {/* <div className='all-attempted-screen-filter d-none-web'>
            <div className="">
              <h4 className="pb-3">Filters
              </h4>
              <div className="over-flow">
                <div className="form-check mb-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <p className='text-dark'>IBPS CLERK</p>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <p className='text-dark'>SSC CGL</p>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <p className='text-dark'>NPCL </p>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <p className='text-dark'>SSC MTS</p>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <p className='theme-color'>+20 More Exam</p>
                  </label>
                </div>

              </div>


            </div>
          </div> */}
          <div className='all-attempted-test-screen'>
            <div className="tabs-sections-starts">
              <div className="tab-content mt-2" id="nav-tabContent">
                <div className="tab-pane fade  show active" id="nav-all" role="tabpanel" aria-labelledby="all-tab">
                  <div className="monthly-record-attempt-record pt-3">


                    {groupedData ? Object.entries(groupedData).map(([date, items]: any) => (
                      <div key={date} className="monthly-record-card">
                        <h4 className="pb-3">{String(new Date(date).getDate() + "-" + new Date(date).toLocaleString('default', { month: 'long' }) + "-" + new Date(date).getFullYear())}</h4>
                        {
                          items?.map((item: any, index: number) => {
                            return <div key={index} className="live-test-card mb-5 c-bet-shadow-none bg-white">
                              <div className="d-flex justify-content-between align-items-center  flex-end-mob">
                                <div>
                                  <h5>{exam?.find((ex: any) => ex?.id == item?.examid)?.name}
                                  </h5>
                                  <div className="test-date-flex mt-1">
                                    {/* <div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                                  </svg>
                                </span>
                                <span className="ms-1">326/330 Rank</span>
                              </div> */}
                                    {/* <div className="ms-2">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                  >
                                    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                                  </svg>
                                </span>
                                <span className="ms-1">-1.65/5 Marks</span>
                              </div> */}
                                  </div>
                                </div>
                                <div>
                                  <button className="pass-pro" onClick={() => {
                                    router.push(`/dashboard/exams/solution/${item?.packageid}/${item?.subpackageid}/${item?.examid}/${exam?.find((ex: any) => ex?.id == item?.examid)?.key}`)
                                  }}>Solution</button>
                                  <button className="pass-pro ms-3" onClick={() => {
                                    router.push(`/dashboard/exams/report/${item?.packageid}/${item?.subpackageid}/${item?.examid}/${exam?.find((ex: any) => ex?.id == item?.examid)?.key}`)
                                  }}>Report</button>
                                </div>
                              </div>

                              <div className="syllabus-live-test-card d-flex justify-content-between mt-2">
                                <div className="d-flex ">
                                  <span className="testerika-color">Language: </span>
                                  <span className="ms-2">
                                    <p className="text-dark">Hindi,English |</p>
                                  </span>
                                  <span className="ms-2 text-dark">Attempted on {String(new Date(item?.createdAt).getDate() + "-" + new Date(item?.createdAt).toLocaleString('default', { month: 'long' }) + "-" + new Date(item?.createdAt).getFullYear())}</span>
                                </div>
                                <div className="resume-cbet testerika-color">
                                  Status:{' '}

                                </div>
                                <span style={{ color: "black" }}>{item?.exam_status}</span>
                              </div>
                            </div>
                          })
                        }

                      </div>
                    )) : <div className='text-dark d-flex justify-content-center align-items-center'>No Exams Available</div>
                    }

                    {groupedData && <div className='my-3 mx-auto'>
                      <PaginationQuizzes currentPage={activePage} totalPage={total} setCurrentPage={setActivePage} />

                    </div>}


                    {/* <div className="monthly-record-card">
                      <h4 className="pb-3">May' 24</h4>
                      <div className="live-test-card mb-5 c-bet-shadow-none bg-white">
                        <div className="d-flex justify-content-between align-items-center flex-end-mob">
                          <div>
                            <button className="free">Free</button>
                            <h5>Psycho Aptitude - FT 1
                            </h5>
                            <div className="test-date-flex mt-1">
                              <div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                                  </svg>
                                </span>
                                <span className="ms-1">326/330 Rank</span>
                              </div>
                              <div className="ms-2">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                  >
                                    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                                  </svg>
                                </span>
                                <span className="ms-1">-1.65/5 Marks</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="pass-pro">Solution</button>
                            <button className="pass-pro ms-3">Analysis</button>
                          </div>
                        </div>

                        <div className="syllabus-live-test-card d-flex justify-content-between mt-2">
                          <div className="d-flex ">
                            <span className="testerika-color">Syllabus</span>
                            <span className="ms-2">
                              <p className="text-dark">|</p>
                            </span>
                            <span className="ms-2 text-dark">Attempted on May 08</span>
                          </div>
                          <div className="resume-cbet">
                            Reattempt{' '}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="12"
                                width="12"
                                fill="60697b"
                                viewBox="0 0 320 512"
                              >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="monthly-record-card">
                      <h4 className="pb-3">May' 26</h4>
                      <div className="live-test-card mb-5 c-bet-shadow-none bg-white">
                        <div className="d-flex justify-content-between align-items-center flex-end-mob">
                          <div>
                            <img src="/img/pass-pro-brand.svg" className='pass-c-bet-attemp' alt="c-bet-pass-img" />
                            <h5>Psycho Aptitude - FT 1
                            </h5>
                            <div className="test-date-flex mt-1">
                              <div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                                  </svg>
                                </span>
                                <span className="ms-1">326/330 Rank</span>
                              </div>
                              <div className="ms-2">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                  >
                                    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                                  </svg>
                                </span>
                                <span className="ms-1">-1.65/5 Marks</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="pass-pro">Solution</button>
                            <button className="pass-pro ms-3">Analysis</button>
                          </div>
                        </div>

                        <div className="syllabus-live-test-card d-flex justify-content-between mt-2">
                          <div className="d-flex ">
                            <span className="testerika-color">Syllabus</span>
                            <span className="ms-2">
                              <p className="text-dark">|</p>
                            </span>
                            <span className="ms-2 text-dark">Attempted on May 08</span>
                          </div>
                          <div className="resume-cbet">
                            Reattempt{' '}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="12"
                                width="12"
                                fill="60697b"
                                viewBox="0 0 320 512"
                              >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="allexam-exam" role="tabpanel" aria-labelledby="search-exam-tab">
                  <div className="monthly-record-attempt-record pt-3">
                    <div className="monthly-record-card">
                      <h4 className="pb-3">May' 24</h4>
                      <div className="live-test-card mb-5 c-bet-shadow-none bg-white">
                        <button className="free">Free</button>
                        <div className="d-flex justify-content-between align-items-center flex-end-mob">
                          <div>
                            <h5>APPSC AE Civil: Surveying Quiz</h5>
                            <div className="test-date-flex mt-1">
                              <div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                                  </svg>
                                </span>
                                <span className="ms-1">326/330 Rank</span>
                              </div>
                              <div className="ms-2">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                  >
                                    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                                  </svg>
                                </span>
                                <span className="ms-1">-1.65/5 Marks</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="pass-pro">Start Now</button>
                          </div>
                        </div>

                        <div className="syllabus-live-test-card d-flex justify-content-between mt-2">
                          <div className="d-flex ">
                            <span className="testerika-color">Syllabus</span>
                            <span className="ms-2">
                              <p className="text-dark">|</p>
                            </span>
                            <span className="ms-2 text-dark">Attempted on May 08</span>
                          </div>
                          <div className="resume-cbet">
                            Resume Now{' '}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="12"
                                width="12"
                                fill="60697b"
                                viewBox="0 0 320 512"
                              >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="monthly-record-card">
                      <h4 className="pb-3">May' 24</h4>
                      <div className="live-test-card mb-5 c-bet-shadow-none  bg-white">
                        <button className="free">Free</button>
                        <div className="d-flex justify-content-between align-items-center flex-end-mob">
                          <div>
                            <h5>APPSC AE Civil: Surveying Quiz</h5>
                            <div className="test-date-flex mt-1">
                              <div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                                  </svg>
                                </span>
                                <span className="ms-1">326/330 Rank</span>
                              </div>
                              <div className="ms-2">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    height="15"
                                    width="15"
                                    fill="60697b"
                                  >
                                    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                                  </svg>
                                </span>
                                <span className="ms-1">-1.65/5 Marks</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="Test-Over-btn">Test Over</button>
                          </div>
                        </div>

                        <div className="syllabus-live-test-card d-flex justify-content-between mt-2">
                          <div className="d-flex ">
                            <span className="testerika-color">Syllabus</span>
                            <span className="ms-2">
                              <p className="text-dark">|</p>
                            </span>
                            <span className="ms-2">
                              <img src="/img/websiteimage/google-translate.png" alt="google-translate" />
                            </span>
                            <span className="testerika-color ms-2">English , Hindi + 4 More</span>
                            <span className="ms-2 text-dark">Attempted on Aug 10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className='all-attempted-screen-filter d-none-mob'>
            <div className="filter-cbet">
              <h4 className="pb-3">Filters
              </h4>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <p className='text-dark'>IBPS CLERK</p>
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <p className='text-dark'>SSC CGL</p>
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <p className='text-dark'>NPCL </p>
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <p className='text-dark'>SSC MTS</p>
                </label>
              </div>
              <p className='theme-color'>+20 More Exam</p>

            </div>
          </div> */}
        </div>
      </div>}
    </>
  );
};

export default CbetAttemptedTabs;
