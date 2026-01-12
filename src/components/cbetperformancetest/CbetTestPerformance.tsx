import React, { useEffect, useState } from 'react';
import CorrectIncorrect from './CorrectIncorrect';
import CorrectIncorrectSection from './CorrectIncorrectSection';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useRouter } from 'next/router';
import { generateTSCOREReportForExamResult } from 'components/request/request';
const CbetTestPerformance = ({ tScore,findTScoreAfterCalculating, result, leaderboard = [], setLoading2, allAttempt, getQuizReport, setSelectAttempt }: any) => {
  const router = useRouter()
  const [tab, setTab] = useState(result?.exam?.examsections?.slice()[0]?.id)
  const [compositeScore, setCompositeScore] = useState<any[]>([])
  const { userDetails } = useSelector((state: any) => state?.reducerSlice)


  const formatTime = (minutes: number) => {
    if (!minutes) return "00:00:00";

    const totalSeconds = Math.floor(minutes * 60);
    const hours = Math.floor(totalSeconds / 3600);
    const minutesPart = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutesPart).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };



  useEffect(() => {
    let newArr: any[] = []
    if (result?.exam?.examsections?.length > 0) {
      result?.exam?.examsections?.slice()?.forEach((item: any, index: number) => {
        // ✅ Compute T-Score
        const tScoreFinal = tScore?.sections?.find((itemSec: any) => itemSec?.section_id == item?.id)?.t_score

        // compositeScoreArr.push(tScore)
        // let newArr=[...compositeScore]
        newArr.push(Number(tScoreFinal?.toFixed(2)))
        setCompositeScore(newArr)
      })
    }

  }, [result])




  return (
    <>
      <div className="pt-7 d-flex justify-content-between align-items-center">
        <h2>Overall Performance Summary </h2>
        {allAttempt?.length > 0 && <div>
          <div className="report_rating_review_container w-100">
            <label className="my-1" style={{ width: "100%" }}>
              <span className="mb-2 d-block theme-color fw-bold" style={{ fontSize: "13px" }}>Your Attempt</span>
              <select className="form-select p-2 width-suxtom-attemp" onChange={(e: any) => {
                setLoading2(true)
                setSelectAttempt(e?.target?.value)
                let offsetData = allAttempt?.length - (Number(e?.target?.value))
                getQuizReport(offsetData)
                findTScoreAfterCalculating(offsetData)
              }}>
                {
                  allAttempt?.map((item: any, index: number) => {
                    return <option value={index + 1} key={index}>
                      {index + 1}<sup>{index + 1 == 1 ? "st" : index + 1 == 2 ? "nd" : index + 1 == 1 ? "rd" : "th"} Attempt</sup>
                    </option>
                  })
                }
              </select>
            </label>

          </div>
        </div>}

      </div>
      <div className=" pt-5 pb-15">
        <nav className="navigation-tabs-douts">
          <div className="nav nav-tabs  w-100 pb-4 d-none-on-mobile" id="nav-tab" role="tablist">
            <button
              className="nav-link current-affair active border-none"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="all-other"
              aria-selected="true"
            >
              Result Analysis
            </button>
            <button
              className="nav-link current-affair border-none"
              id="allexam-tab"
              data-bs-toggle="tab"
              data-bs-target="#allexam-exam"
              type="button"
              role="tab"
              aria-controls="allexam-exam"
              aria-selected="false"
            >
              Sections Report
            </button>
            <button
              className="nav-link current-affair border-none"
              id="new-tab"
              data-bs-toggle="tab"
              data-bs-target="#new-exam"
              type="button"
              role="tab"
              aria-controls="new-exam"
              aria-selected="false"
            >
              Compare Yourself
            </button>
          </div>
        </nav>
        <div className="tabs-sections-starts pt-5">
          <div className="tab-content mt-2" id="nav-tabContent">
            <div className="tab-pane fade  show active" id="nav-all" role="tabpanel" aria-labelledby="all-tab">
              <div className="result-analysis">
                <div className="result-screen-test-name-detail">
                  <div className="result-test-name-cbet">
                    <h5>{result?.exam?.name}</h5>
                  </div>
                  <div className="result-view-solution">
                    <button onClick={() => {
                      if (router?.query?.packageId && router?.query?.subpackageId && router?.query?.examId && router?.query?.examKey) {
                        router.push(`/dashboard/exams/solution/${router?.query?.packageId}/${router?.query?.subpackageId}/${router?.query?.examId}/${router?.query?.examKey}`)
                      }
                    }}>View Solutions</button>
                  </div>
                </div>
                <div className="c-bet-test-date-time pt-2">
                  <p className="text-dark">Attempted on {new Date(result?.attempted_on).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', ' ||')}</p>
                </div>
              </div>
              <div className="c-bet-test-summary-ranks">
                <div className="score-rank-time">
                  <div className="score-cbet-card d-flex justify-content-center align-items-center flex-column">
                    <div>Your Score</div>
                    <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                      <CircularProgressbar text={`${(result?.total_points || 0)}/${(result?.exam?.total_marks || 0)}`} value={(result?.total_points / result?.exam?.total_marks) * 100} />
                    </div>
                  </div>
                  <div className="score-cbet-card d-flex justify-content-center align-items-center flex-column">
                    <div>Rank</div>
                    <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                      <CircularProgressbar text={`${(leaderboard?.find((res: any) => res?.user_id == getAuthenticatedUserData()?.id)?.rank || 0)}/${(leaderboard?.length || 0)}`} value={(leaderboard?.find((res: any) => res?.user_id == getAuthenticatedUserData()?.id)?.rank / leaderboard?.length) * 100} />
                    </div>
                  </div>
                  <div className="score-cbet-card d-flex justify-content-center align-items-center flex-column">
                    <div>Time Spent</div>
                    <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                      <CircularProgressbar
                        text={`${(result?.total_time_taken / 60).toFixed(2)}/${result?.total_section
                          ?.map((item: any) => Number(item?.duration))
                          ?.reduce((acc: any, curr: any) => acc + curr, 0)?.toFixed(2)
                          }`}
                        value={
                          (
                            ((result?.total_time_taken / 60) /
                              result?.total_section
                                ?.map((item: any) => Number(item?.duration))
                                ?.reduce((acc: any, curr: any) => acc + curr, 0)) * 100
                          ) || 0
                        }
                      />
                    </div>
                  </div>
                </div>

              </div>
              <CorrectIncorrect result={result} leaderboard={leaderboard} />
            </div>






















            <div className="tab-pane fade" id="allexam-exam" role="tabpanel" aria-labelledby="search-exam-tab">
              <div className="result-analysis">
                <div className="result-screen-test-name-detail">
                  <div className="result-test-name-cbet">
                    <h5>{result?.exam?.name}</h5>
                  </div>
                  <div className="result-view-solution">
                    <button onClick={() => {
                      if (router?.query?.packageId && router?.query?.subpackageId && router?.query?.examId && router?.query?.examKey) {
                        router.push(`/dashboard/exams/solution/${router?.query?.packageId}/${router?.query?.subpackageId}/${router?.query?.examId}/${router?.query?.examKey}`)
                      }
                    }}>View Solutions</button>
                  </div>
                </div>
                <div className="c-bet-test-date-time pt-2">
                  <p className="text-dark">Attempted on {new Date(result?.attempted_on).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', ' ||')}</p>
                </div>
              </div>
              <nav className="navigation-tabs-douts mt-3">
                <div className="nav nav-tabs  w-100 pb-4 d-none-on-mobile" id="nav-tab" role="tablist">
                  {
                    result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                      return <button
                        key={index}
                        className={item?.id == tab ? "nav-link current-affair active border-none" : "nav-link current-affair border-none"}
                        type="button"
                        onClick={() => {
                          setTab(item?.id)
                        }}
                      >
                        {item?.section_name}
                      </button>
                    })
                  }
                </div>
              </nav>

              {/* tabs-start herer */}
              <div className="tabs-sections-starts">
                <div className="tab-content mt-2" id="nav-tabContent">
                  <div
                    className="tab-pane fade  show active"
                    id="english-all"
                    role="tabpanel"
                    aria-labelledby="english-tab"
                  >
                    <div className="over-x-auto">
                      <table>
                        <tr>
                          <th></th>
                          {
                            result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                              return <th key={index}>{item?.section_name}</th>

                            })
                          }
                        </tr>
                        <tr>
                          <td>Total Question</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{item?.questions?.length}</td>
                          })}
                        </tr>
                        <tr>
                          <td>Test Duration</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{item?.duration} Minutes</td>
                          })}
                        </tr>
                        <tr>
                          <td>Attempt Question</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{result?.correct_section_id?.filter((x: any) => x == item?.id)?.length + result?.incorrect_section_id?.filter((x: any) => x == item?.id)?.length}</td>
                          })}
                        </tr>
                        <tr>
                          <td>Correct Answer</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{result?.correct_section_id?.filter((x: any) => x == item?.id)?.length}</td>
                          })}

                        </tr>
                        <tr>
                          <td>Incorrect</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{result?.incorrect_section_id?.filter((x: any) => x == item?.id)?.length}</td>
                          })}
                        </tr>
                        <tr>
                          <td>Unattempted</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{item?.questions?.length - (result?.correct_section_id?.filter((x: any) => x == item?.id)?.length + result?.incorrect_section_id?.filter((x: any) => x == item?.id)?.length)}</td>
                          })}
                        </tr>
                        <tr>
                          <td>Accuracy</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>
                              {(
                                ((result?.correct_section_id?.filter((x: any) => x == item?.id)?.length || 0) /
                                  (item?.questions?.length || 1)) * 100
                              ).toFixed(2)}%
                            </td>
                          })}
                        </tr>

                        <tr>
                          <td>Time Taken</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{result?.section_time_taken?.slice()?.find((x: any) => x?.section_id == item?.id)?.time_taken / 60 > 0 ? (result?.section_time_taken?.slice()?.find((x: any) => x?.section_id == item?.id)?.time_taken / 60)?.toFixed(2) : 0} Minutes</td>
                          })}
                        </tr>
                        <tr>
                          <td>T Score</td>
                          {result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                            return <td key={index}>{tScore?.sections?.find((itemSec: any) => itemSec?.section_id == item?.id)?.t_score}</td>
                          })}
                        </tr>


                        <tr>
                          <td>Status</td>
                          {result?.exam?.examsections?.map((section: any, index: number) => {

                            const tScoreFinal = tScore?.sections?.find((itemSec: any) => itemSec?.section_id == section?.id)?.t_score

                            // ✅ Conditional status based on T-Score
                            const status = Number(tScoreFinal?.toFixed(2)) >= 42 ? "Qualified" : "Disqualified";

                            return (
                              <td key={index} style={{ color: `${status == "Qualified" ? "green" : "red"}` }} className={status === "Qualified" ? "Qualified" : "Disqualified"}>
                                {status}
                              </td>
                            );
                          })}
                        </tr>
                      </table>
                    </div>


                    <div className='d-flex justify-content-between my-2 align-items-center'>
                      <div className="compare-t-score">
                        <h4>Composite T-Score: {compositeScore?.reduce((acc: any, curr: any) => {
                          return (Number(acc) + Number(curr))
                        }, 0)?.toFixed(2)}</h4>
                      </div>

                      <div className="compare-t-score">
                        <h4>Marks out of 30: {((compositeScore?.reduce((acc: any, curr: any) => {
                          return (((Number(acc) + Number(curr))))
                        }, 0) / 400) * 30)?.toFixed(2)}</h4>
                      </div>
                    </div>
                    <div className="c-bet-test-summary-ranks mt-5">
                      <div className="score-rank-time d-flex flex-column justify-content-center align-items-center">
                        <div>Your Score</div>
                        <div style={{ width: 80, height: 80, marginTop: "10px" }}>

                          <CircularProgressbar
                            text={`${(result?.section_wise_points?.find((item: any) => item?.section_id == tab)?.points || 0)
                              }/${(result?.section_wise_points?.find((item: any) => item?.section_id == tab)?.total_points || 0)
                              }`}
                            value={(result?.section_wise_points?.find((item: any) => item?.section_id == tab)?.points || 0) /
                              (result?.section_wise_points?.find((item: any) => item?.section_id == tab)?.total_points || 0) * 100}
                          />
                        </div>

                      </div>
                      <div className="score-rank-time d-flex flex-column justify-content-center align-items-center">
                        <div>Rank</div>
                        <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                          <CircularProgressbar
                            text={`${(leaderboard?.find((res: any) => res?.user_id == getAuthenticatedUserData()?.id)?.rank || 0)}/${(leaderboard?.length || 0)}`}
                            value={((leaderboard?.find((res: any) => res?.user_id == getAuthenticatedUserData()?.id)?.rank || 0) / (leaderboard?.length || 0)) * 100}
                          />                        </div>

                      </div>

                      <div className="score-rank-time d-flex flex-column justify-content-center align-items-center">
                        <div>Time Spent</div>
                        <div style={{ width: 80, height: 80, marginTop: "10px" }}>
                          <CircularProgressbar
                            text={`${typeof result?.section_time_taken?.find((x: any) => x?.section_id == tab)?.time_taken === 'number'
                              ? (result.section_time_taken.find((x: any) => x?.section_id == tab).time_taken / 60).toFixed(2)
                              : '0.00'
                              }/${typeof result?.exam?.examsections?.find((item: any) => item?.id == tab)?.duration === 'number'
                                ? result.exam.examsections.find((item: any) => item?.id == tab).duration.toFixed(2)
                                : '0.00'
                              }`}
                            value={
                              (
                                (Number(result?.total_time_taken / 60) /
                                  result?.total_section
                                    ?.map((item: any) => Number(item?.duration))
                                    ?.reduce((acc: any, curr: any) => acc + curr, 0)) * 100
                              ) || 0
                            }
                          />
                        </div>
                      </div>


                    </div>
                    <CorrectIncorrectSection result={result} tab={tab} leaderboard={leaderboard} />

                  </div>
                  <div className="tab-pane fade" id="physics-exam" role="tabpanel" aria-labelledby="physics-tab">

                    <CorrectIncorrect result={result} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Mathematics-exam"
                    role="tabpanel"
                    aria-labelledby="Mathematics-tab"
                  >

                    <CorrectIncorrect result={result} />
                  </div>
                </div>
              </div>
            </div>












            <div className="tab-pane fade" id="new-exam" role="tabpanel" aria-labelledby="search-exam-tab">
              <div className="result-analysis">
                <div className="result-screen-test-name-detail">
                  <div className="result-test-name-cbet">
                    <h5>{result?.exam?.name}</h5>
                  </div>
                  <div className="result-view-solution">
                    <button onClick={() => {
                      if (router?.query?.packageId && router?.query?.subpackageId && router?.query?.examId && router?.query?.examKey) {
                        router.push(`/dashboard/exams/solution/${router?.query?.packageId}/${router?.query?.subpackageId}/${router?.query?.examId}/${router?.query?.examKey}`)
                      }
                    }}>View Solutions</button>
                  </div>
                </div>
                <div className="c-bet-test-date-time pt-2">
                  <p className="text-dark">Attempted on {new Date(result?.attempted_on).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', ' ||')}</p>
                </div>
              </div>
              <nav className="navigation-tabs-douts mt-3">
                <div className="nav nav-tabs  w-100 pb-4 d-none-on-mobile" id="nav-tab" role="tablist">
                  {
                    result?.exam?.examsections?.slice()?.map((item: any, index: number) => {
                      return <button
                        key={index}
                        className={item?.id == tab ? "nav-link current-affair active border-none" : "nav-link current-affair border-none"}
                        type="button"
                        onClick={() => {
                          setTab(item?.id)
                        }}
                      >
                        {item?.section_name}
                      </button>
                    })
                  }

                </div>
              </nav>

              {/* tabs-start herer */}
              <div className="tabs-sections-starts">
                <div className="tab-content mt-2" id="nav-tabContent">
                  <div
                    className="tab-pane fade  show active"
                    id="englishyourself-all"
                    role="tabpanel"
                    aria-labelledby="englishyourself-tab"
                  >
                    <div className="marked-dcore-leather-flex mt-5">
                      <div className='marked-score-cbet'>
                        <div className="marked-score-card">
                          <h4>Mark Score</h4>
                          <div className="range-cbet mt-3 mb-3">

                          </div>
                          <div className="exams-toper pb-4">
                            <div className='exam-topper-others you-bg text-center'>
                              <span>
                                {
                                  leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.section_wise_points?.find((item: any) => item?.section_id == tab)?.points ? leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.section_wise_points?.find((item: any) => item?.section_id == tab)?.points : 0
                                }
                              </span>
                              <p className='text-dark mt-2'>You</p>
                            </div>
                            <div className='exam-topper-others topper-bg text-center ms-2'>
                              <span>
                                {leaderboard[0]?.section_wise_points?.find((item: any) => item?.section_id == tab)?.points ? leaderboard[0]?.section_wise_points?.find((item: any) => item?.section_id == tab)?.points : 0
                                }
                              </span>
                              <p className='text-dark mt-2'>Topper</p>
                            </div>
                            <div className='exam-topper-others total-bg text-center ms-2'>
                              <span>
                                {/* {leaderboard[0]?.total_questions ||  0
                                } */}
                                {result?.exam?.examsections?.find((item: any, index: number) => {
                                  return item?.id == tab
                                })?.questions?.length}
                              </span>
                              <p className='text-dark mt-2'>Total</p>
                            </div>
                          </div>

                        </div>
                        <div className="marked-score-card">
                          <h4>Accuracy</h4>
                          <div className="range-cbet mt-3 mb-3">

                          </div>
                          <div className="exams-toper pb-4">
                            <div className='exam-topper-others you-bg text-center'>
                              <span>
                                {
                                  leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.correct_section_id?.filter((item: any) => item == tab)?.length > 0 ? ((leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.correct_section_id?.filter((item: any) => item == tab)?.length / leaderboard[0]?.section_wise_points?.find((item: any) => item?.section_id == tab)?.total_points) * 100)?.toFixed(2) : 0
                                }%

                              </span>
                              <p className='text-dark mt-2'>You</p>
                            </div>
                            <div className='exam-topper-others topper-bg text-center ms-2'>
                              <span>
                                {
                                  leaderboard[0]?.correct_section_id?.filter((item: any) => item == tab)?.length > 0 ? ((leaderboard[0]?.correct_section_id?.filter((item: any) => item == tab)?.length / leaderboard[0]?.section_wise_points?.find((item: any) => item?.section_id == tab)?.total_points) * 100)?.toFixed(2) : 0
                                }%
                              </span>
                              <p className='text-dark mt-2'>Topper</p>
                            </div>
                            <div className='exam-topper-others total-bg text-center ms-2'>
                              <span> {result?.exam?.examsections?.find((item: any, index: number) => {
                                return item?.id == tab
                              })?.questions?.length}</span>
                              <p className='text-dark mt-2'>Total</p>
                            </div>
                          </div>

                        </div>
                        <div className="marked-score-card">
                          <h4>Incorrect Responses</h4>
                          <div className="range-cbet mt-3 mb-3">

                          </div>
                          <div className="exams-toper pb-4">
                            <div className='exam-topper-others you-bg text-center'>
                              <span>
                                {
                                  leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.incorrect_section_id?.filter((item: any) => item == tab)?.length
                                }
                              </span>
                              <p className='text-dark mt-2'>You</p>
                            </div>
                            <div className='exam-topper-others topper-bg text-center ms-2'>
                              <span>
                                {
                                  leaderboard[0]?.incorrect_section_id?.filter((item: any) => item == tab)?.length || 0
                                }
                              </span>
                              <p className='text-dark mt-2'>Topper</p>
                            </div>
                            <div className='exam-topper-others total-bg text-center ms-2'>
                              <span>{result?.exam?.examsections?.find((item: any, index: number) => {
                                return item?.id == tab
                              })?.questions?.length}</span>
                              <p className='text-dark mt-2'>Total</p>
                            </div>
                          </div>

                        </div>
                        <div className="marked-score-card">
                          <h4>Correct Responses</h4>
                          <div className="range-cbet mt-3 mb-3">

                          </div>
                          <div className="exams-toper pb-4">
                            <div className='exam-topper-others you-bg text-center'>
                              <span>
                                {
                                  leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.correct_section_id?.filter((item: any) => item == tab)?.length || 0
                                }
                              </span>
                              <p className='text-dark mt-2'>You</p>
                            </div>
                            <div className='exam-topper-others topper-bg text-center ms-2'>
                              <span>
                                {
                                  leaderboard[0]?.correct_section_id?.filter((item: any) => item == tab)?.length
                                }
                              </span>
                              <p className='text-dark mt-2'>Topper</p>
                            </div>
                            <div className='exam-topper-others total-bg text-center ms-2'>
                              <span>{result?.exam?.examsections?.find((item: any, index: number) => {
                                return item?.id == tab
                              })?.questions?.length}</span>
                              <p className='text-dark mt-2'>Total</p>
                            </div>
                          </div>

                        </div>
                        <div className="marked-score-card w-100">
                          <h4>Time Spent</h4>
                          <div className="range-cbet mt-3 mb-3">

                          </div>
                          <div className="exams-toper pb-4">
                            <div className='exam-topper-others you-bg text-center'>
                              <span>
                                {
                                  formatTime(leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.section_time_taken?.find((item: any) => item?.section_id == tab)?.time_taken / 60)
                                }
                              </span>
                              <p className='text-dark mt-2'>You</p>
                            </div>
                            <div className='exam-topper-others topper-bg text-center ms-2'>
                              <span>{
                                formatTime(leaderboard[0]?.section_time_taken?.find((item: any) => item?.section_id == tab)?.time_taken / 60)
                              }</span>
                              <p className='text-dark mt-2'>Topper</p>
                            </div>
                            <div className='exam-topper-others total-bg text-center ms-2'>
                              <span>{
                                formatTime(result?.exam?.examsections?.find((item: any) => item?.id == tab)?.duration)
                              }</span>
                              <p className='text-dark mt-2'>Total</p>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className='marked-score-leather-rating'>

                        <div className="leather-board-bg mt-4 leather-board-listing-cbet">
                          <h3>Leaderboard</h3>
                          <ul className="pt-5 p-3">
                            <li>
                              <div className="leather-board-user-profile">
                                <div className="user-position-cbet">
                                  <div className="user-name-cbet">
                                    {
                                      getAuthenticatedUserData()?.profile_image ? <img style={{ width: "40px", height: "40px", borderRadius: "100%" }} src={getAuthenticatedUserData()?.profile_image} /> : <span>{getAuthenticatedUserData()?.firstname?.substring(0, 1)?.toUpperCase()}</span>
                                    }
                                  </div>
                                  <span>{leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.rank}</span>
                                </div>
                                <div className="ms-4">
                                  <p>{getAuthenticatedUserData()?.firstname + " " + getAuthenticatedUserData()?.lastname}</p>
                                </div>
                                <div className="ms-4 out-of-cbet-user">
                                  <span>{leaderboard?.find((item: any) => item?.user_id == getAuthenticatedUserData()?.id)?.total_points || 0}/{result?.exam?.total_marks}</span>
                                </div>
                              </div>
                            </li>
                            {
                              leaderboard?.length > 0 ? leaderboard?.slice(0, 10)?.filter((item2: any) => item2?.user_id != getAuthenticatedUserData()?.id)?.map((item: any, index: number) => {
                                return <li key={index}>
                                  <div className="leather-board-user-profile">
                                    <div className="user-position-cbet">
                                      <div className="user-name-cbet">
                                        {
                                          userDetails?.find((user: any) => user?.id == item?.user_id)?.profile_image ? <img style={{ width: "40px", height: "40px", borderRadius: "100%" }} src={userDetails?.find((user: any) => user?.id == item?.user_id)?.profile_image} /> : <span>{userDetails?.find((user: any) => user?.id == item?.user_id)?.firstname?.substring(0, 1)?.toUpperCase()}</span>
                                        }

                                      </div>
                                      <span>{item?.rank}</span>
                                    </div>
                                    <div className="ms-4">
                                      <p>{userDetails?.find((user: any) => user?.id == item?.user_id)?.firstname + " " + userDetails?.find((user: any) => user?.id == item?.user_id)?.lastname}</p>
                                    </div>
                                    <div className="ms-4 out-of-cbet-user">
                                      <span>{item?.total_points || 0}/{result?.exam?.total_marks}</span>
                                    </div>
                                  </div>
                                </li>
                              }) : <li>
                                <div>No Leaderboard available</div>
                              </li>
                            }
                          </ul>
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
    </>
  );
};

export default CbetTestPerformance;
