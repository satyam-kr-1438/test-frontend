import { NextPage } from 'next';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { getAllPasses } from 'components/request/request';
import { ErrorMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from 'next/router';
import AuthNavbar from 'components/blocks/navbar/AuthNavbar';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import { useSelector } from 'react-redux';


const Passes: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [selectedPlanType, setSelectedPlanType] = useState<any>("Pro")
  const [packages, setPackages] = useState<any>(undefined)
  const [features, setFeatures] = useState<any[]>(["Free Quizzes", "Premium Quizzes", "Packages", "Premium Packages", "Featured Packages", "Doubts"])
  const { passes, passesFeatures }: any = useSelector((state: any) => state?.reducerSlice)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [])
  return (
    <Fragment>
      <Testerikaheader />
      <Testerikamianheader />



      {loading ? <Loading /> : passes?.length > 0 ?
        <main className="content-wrapper" style={{ background: "#e6effb" }}>
          {/* ========== title section ========== */}
          <section className="wrapper">
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-12  mx-auto">
                  <div className="main_passes_container_top">
                    <div className={selectedPlanType == "Pro" ? "passes_top_section_pro_pass1 passes_top_section_pro_pass_common_active" : "passes_top_section_pro_pass1 passes_top_section_pro_pass_common"} onClick={() => {
                      setSelectedPlanType("Pro")
                      setPackages(undefined)
                    }}>
                      <p>Pass Pro</p>
                      <img src="/img/pass-pro-brand.svg" alt="Pass Pro" />
                      <span>Suggested</span>
                    </div>
                    <div className={selectedPlanType == "Pass" ? "passes_top_section_pro_pass2 passes_top_section_pro_pass_common_active" : "passes_top_section_pro_pass2 passes_top_section_pro_pass_common"} onClick={() => {
                      setSelectedPlanType("Pass")
                      setPackages(undefined)

                    }}>
                      <p>Pass</p>
                      <img src="/img/pass-ticket-blue.svg" alt="pass" />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </section>

          <section className="wrapper" style={{ paddingBottom: "100px" }}>
            <div className="container pb-5 pb-md-5">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-7 col-md-12 col-12">
                      <div className={`card my-5 mx-3 py-3 px-2 col-12 mx-auto`}>
                        <table>
                          <tr className="">
                            {/* <th className="text-center"> */}
                            <td className="table_features_td">Pass benefits</td>
                            {/* </th> */}
                            {/* <th className="text-center" style={{backgroundColor:`${selectedPlanType=="Pro"?"#FAF0D1":""}`,borderRadius:"5px 5px 0px 0px",textAlign:"center",marginLeft:"auto"}}> */}
                            <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pro" ? "#FAF0D1" : ""}`, borderRadius: "5px 5px 0px 0px", textAlign: "center", marginLeft: "auto" }} onClick={() => {
                              setSelectedPlanType("Pro")
                            }}>Pass Pro</td>
                            {/* </th> */}
                            {/* <th style={{backgroundColor:`${selectedPlanType=="Pass"?"#FAF0D1":""}`,borderRadius:"5px 5px 0px 0px",textAlign:"center",marginLeft:"auto"}}> */}
                            <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pass" ? "#FAF0D1" : ""}`, borderRadius: "5px 5px 0px 0px", textAlign: "center", marginLeft: "auto" }} onClick={() => {
                              setSelectedPlanType("Pass")
                            }}>Pass</td>
                            {/* </th> */}
                          </tr>

                          <tbody>
                            {
                              features?.map((item: any, index: any) => {
                                return <tr key={index} onClick={() => {
                                  if (selectedPlanType == "Pro") {

                                  }
                                }}>
                                  <td className="table_features_td" style={{ fontSize: "12px" }}>{item}</td>
                                  {
                                    passesFeatures?.find((item2: any) => item2?.name == "Pass Pro")?.features?.find((item3: any, index3: any) => item3?.feature == item)?.feature == item ?
                                      <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pro" ? "#FAF0D1" : ""}` }} onClick={() => {
                                        setSelectedPlanType("Pro")
                                      }}><span style={{ textAlign: "center", marginBottom: "10px", fontSize: "12px" }}><IoCheckmarkOutline style={{ color: "green", transform: "scale(1.4)" }} /></span></td> :
                                      <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pro" ? "#FAF0D1" : ""}` }} onClick={() => {
                                        setSelectedPlanType("Pro")
                                      }}><span style={{ textAlign: "center", marginBottom: "10px", fontSize: "12px" }}><RxCross1 style={{ color: "red", transform: "scale(1.2)" }} /></span></td>
                                  }

                                  {
                                    passesFeatures?.find((item2: any) => item2?.name == "Pass")?.features?.find((item3: any, index3: any) => item3?.feature == item)?.feature == item ?
                                      <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pass" ? "#FAF0D1" : ""}` }} onClick={() => {
                                        setSelectedPlanType("Pass")
                                      }}><span style={{ textAlign: "center", marginBottom: "10px", fontSize: "12px" }}><IoCheckmarkOutline style={{ color: "green", transform: "scale(1.4)" }} /></span></td> :
                                      <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pass" ? "#FAF0D1" : ""}` }} onClick={() => {
                                        setSelectedPlanType("Pass")
                                      }}><span style={{ textAlign: "center", marginBottom: "10px", fontSize: "12px" }}><RxCross1 style={{ color: "red", transform: "scale(1.2)" }} /></span></td>
                                  }


                                </tr>
                              })
                            }

                            <tr>
                              <td>

                              </td>
                              <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pro" ? "#FAF0D1" : ""}` }}>
                                <input className="form-check-input text-center mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={selectedPlanType == "Pro"} onClick={() => {
                                  setSelectedPlanType("Pro")
                                }} />

                              </td>
                              <td className="table_features_td text-center" style={{ backgroundColor: `${selectedPlanType == "Pass" ? "#FAF0D1" : ""}` }}>
                                <input className="form-check-input text-center mx-auto text-center" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={selectedPlanType == "Pass"} onClick={() => {
                                  setSelectedPlanType("Pass")
                                }} />
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>

                      <div className="d-md-none d-sm-none d-none d-lg-block">
                        <button className="btn btn-outline-primary" data-bs-toggle="modal"
                          data-bs-target="#modal-signin" >Get Started</button>
                      </div>
                    </div>


                    <div className="col-lg-5 col-md-12 col-12">

                      {
                        selectedPlanType == "Pro" && passes?.filter((item: any) => item?.tblpass_type?.name == "Pass Pro")?.map((item2: any, index2: any) => {
                          return <div key={index2} className={`card my-5 mx-3 py-3 px-2 col-12 mx-auto`} style={{ cursor: "pointer" }} onClick={() => {
                            setPackages(item2)
                          }}>
                            <label>
                              <div className="pass_detail_container_main">
                                <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: 'flex-start', alignItems: "flex-start" }}>
                                  <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center" }}>
                                    <input className="form-check-input" type="radio" checked={packages?.id == item2?.id} />
                                    <div style={{ marginLeft: "10px" }}>
                                      <div className="">
                                        <span className="" style={{ fontSize: "14px", display: "flex", justifyContent: "flex-start", alignItems: 'center' }}>
                                          <span>{item2?.pass_name}</span>

                                        </span>
                                      </div>
                                      <div className="" >
                                        <span className="" style={{ fontSize: "10px" }}>Valid for {item2?.duration}</span>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                                <div className="">
                                  <span style={{ fontSize: "11px" }}>{item2?.price_inr} INR </span>
                                  <hr style={{ margin: "1px" }} />
                                  <span style={{ fontSize: "11px" }}>{item2?.price_usd} USD</span>
                                </div>
                              </div>
                            </label>
                          </div>
                        })
                      }

                      {
                        selectedPlanType == "Pass" && passes?.filter((item: any) => item?.tblpass_type?.name == "Pass")?.map((item2: any, index2: any) => {
                          return <div key={index2} className={`card my-5 mx-3 py-3 px-2 col-12 mx-auto`} style={{ cursor: "pointer" }} onClick={() => {
                            setPackages(item2)
                          }}>
                            <label>
                              <div className="pass_detail_container_main">
                                <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: 'flex-start', alignItems: "flex-start" }}>
                                  <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center" }}>
                                    <input className="form-check-input" type="radio" checked={packages?.id == item2?.id} />
                                    <div style={{ marginLeft: "10px" }}>
                                      <div className="">
                                        <span className="" style={{ fontSize: "14px", display: "flex", justifyContent: "flex-start", alignItems: 'center' }}>
                                          <span>{item2?.pass_name}</span>

                                        </span>
                                      </div>
                                      <div className="" >
                                        <span className="" style={{ fontSize: "10px" }}>Valid for {item2?.duration}</span>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                                <div className="">
                                  <span style={{ fontSize: "11px" }}>{item2?.price_inr} INR </span>
                                  <hr style={{ margin: "1px" }} />
                                  <span style={{ fontSize: "11px" }}>{item2?.price_usd} USD</span>
                                </div>
                              </div>
                            </label>
                          </div>
                        })
                      }
                    </div>

                    <div className="d-md-block d-sm-block d-block d-lg-none">
                      <button className="btn btn-outline-primary" data-bs-toggle="modal"
                        data-bs-target="#modal-signin">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== our community section ========== */}
          {/* <CTA3 /> */}
        </main> : <main className="content-wrapper">
          <ContentNotFound button_text="Back to Home" to="/dashboard/home" />
        </main>
      }



      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default Passes;
