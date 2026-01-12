import { NextPage } from 'next';
import { Fragment, useEffect, useRef, useState } from 'react';
import Select from 'react-select'
import { Country, State, City } from "country-state-city";
import { BsFillPencilFill } from "react-icons/bs";
import validator from "validator"
import VerifyEmailModal from 'components/blocks/navbar/partials/VerifyEmailModal';
import { getAuthenticatedUserData, setAuthenticationData } from 'hooks/localStorageInfo';
import { ErrorMessage, SuccessMessage, WarningMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { completeUserProfile, emailVerificationOTPSent, emailVerificationOTPVerified, uploadImage } from 'components/request/request';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import { useRouter } from 'next/router';

const Profile: NextPage = () => {
     // filter options
     const router=useRouter()
     const closeRef: any = useRef<any>(null)
     const [selectedCountry, setSelectedCountry] = useState<any>({
          currency: "INR",
          flag: "🇮🇳",
          isoCode: "IN",
          name: "India",
          phonecode: "91"
     });
     const [selectedState, setSelectedState] = useState<any>(null);
     const [selectedCity, setSelectedCity] = useState<any>(null);
     const [selectGender, setSelectGender] = useState<any>({
          value: "Male", label: "Male"
     })
     const inputRef: any = useRef(null)
     const [otpSent, setOtpSent] = useState<boolean>(false)
     const [userData, setUserData] = useState<any>({
          id: undefined,
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          gender: "Male",
          country: "India",
          state: "",
          city: "",
          pincode: "",
          phone_verified: 0,
          email_verified: 0,
          profile_image: ""
     })

     useEffect(() => {
          const data = getAuthenticatedUserData()
          if (data && data?.id) {
               setUserData({
                    id: data?.id,
                    firstname: data?.firstname ? data?.firstname : "",
                    lastname: data?.lastname ? data?.lastname : "",
                    email: data?.email ? data?.email : "",
                    phone: data?.phone,
                    gender: data?.gender ? data?.gender : "Male",
                    country: "India",
                    state: data?.address ? data?.address?.state : "",
                    city: data?.address ? data?.address?.city : "",
                    pincode: data?.address ? data?.address?.pincode : "",
                    profile_image: data?.profile_image,
                    phone_verified: data?.phone_verified,
                    email_verified: data?.email_verified ? 1 : 0
               })

               if (data?.gender) {
                    setSelectGender({ value: data?.gender, label: data?.gender })
               }
               if (data?.address?.country && data?.address?.state && data?.address?.city) {
                    setSelectedCountry({
                         currency: "INR",
                         flag: "🇮🇳",
                         isoCode: "IN",
                         name: "India",
                         phonecode: "91"
                    })
                    let cIso: any = {
                         currency: "INR",
                         flag: "🇮🇳",
                         isoCode: "IN",
                         name: "India",
                         phonecode: "91"
                    }?.isoCode
                    let coCode: any = ""
                    let sIso: any = ""
                    if (cIso) {
                         setSelectedState(State?.getStatesOfCountry(cIso)?.find((item) => item?.name == data?.address?.state))
                         sIso = State?.getStatesOfCountry(cIso)?.find((item) => item?.name == data?.address?.state)?.isoCode
                         coCode = State?.getStatesOfCountry(cIso)?.find((item) => item?.name == data?.address?.state)?.countryCode
                    }
                    if (sIso && coCode) {
                         setSelectedCity(City.getCitiesOfState(coCode, sIso)?.find((item) => item?.name == data?.address?.city))

                    }
               }
          }
     }, [])

     const verifyEmailGetOTP = async (otp: any) => {
          const { data } = await emailVerificationOTPVerified({ otp, id: userData?.id, email: userData?.email })
          if (data?.success) {
               SuccessMessage("Email Verified Successfully")
               setUserData({ ...userData, email: data?.data?.email, email_verified: data?.data?.email_verified })
               const dataItem = setAuthenticationData(data?.data)
               if (closeRef && closeRef?.current && dataItem) {
                    closeRef?.current?.click()
               }
          } else {
               ErrorMessage(data?.message)
          }
     }

     const checkValidation = async () => {
          if (userData?.firstname?.trim()?.length < 3 || !userData?.firstname?.trim()) {
               ErrorMessage("First Name can't be less than 3 characters")
          } else if (userData?.lastname?.trim()?.length < 3 || !userData?.lastname?.trim()) {
               ErrorMessage("Last Name can't be less than 3 characters")
          } 
          // else if (!userData?.gender?.trim()) {
          //      ErrorMessage("Select Your Gender")
          // } else if (!userData?.state?.trim()) {
          //      ErrorMessage("Select your State")
          // } else if (!userData?.city?.trim()) {
          //      ErrorMessage("Select your City")
          // } else if (userData?.pincode?.trim()?.length < 6 || userData?.pincode?.trim()?.length > 6) {
          //      ErrorMessage("Enter Valid Pincode")
          // }
          else {
               const { data } = await completeUserProfile(userData, userData?.id)
               if (data?.success) {
                    SuccessMessage("Profile Updated Successfully")
                    setUserData({ ...data?.data })
                    setAuthenticationData(data?.data)
                      router.push("/dashboard/home")
               } else {
                    ErrorMessage(data?.message)
               }
          }
     }

     const options = [
          { value: 'Male', label: "Male" },
          { value: 'Female', label: "Female" },
          { value: 'Others', label: "Others" },
     ];

     return (
          <Fragment>

               <section className="c-bet-dashboard">
                    <CbetSideBar />
                    <div className="c-bet-right-side-bar">
                         <CbetTopBar />
                         <div className="c-bet-content-part slider-container  ">
                              <main className="">
                                   <section className="wrapper bg-light">
                                        <div className="cbet-container pt-10 pb-14 " >
                                             <div className="row gy-10">
                                                  <div className="col-lg-12 my-4 margin-custom-top">
                                                       <div>
                                                            <div className="my-4">
                                                                 <h6>Complete Your Profile</h6>
                                                            </div>
                                                            <div style={{ position: "relative", zIndex: "999" }}>
                                                                 <img src={userData?.profile_image ? userData?.profile_image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="Profile" style={{ width: "160px", height: "160px", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} />
                                                                 <span style={{ position: "absolute", top: "-10px", left: "130px", width: "35px", height: "35px", zIndex: "9999", padding: "5px", borderRadius: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", background: "white" }}
                                                                      onClick={() => {
                                                                           if (inputRef && inputRef?.current) {
                                                                                inputRef?.current?.click()
                                                                           }
                                                                      }}>
                                                                      <BsFillPencilFill fill='#000' style={{ transform: "scale(1)" }} />
                                                                 </span>
                                                                 <input ref={inputRef} type="file" style={{ display: 'none' }} onChange={async (e: any) => {
                                                                      let data = await uploadImage(e?.target?.files)
                                                                      if (data && data?.data && data?.data?.image) {
                                                                           setUserData({ ...userData, profile_image: data?.data?.image })
                                                                      }
                                                                 }} />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                                                       <div>
                                                            <label style={{ width: "100%" }}>
                                                                 Enter First Name
                                                                 <input type="text" className="form input form-control p-2" placeholder='Enter First Name' value={userData?.firstname} onChange={(e: any) => {
                                                                      if (e?.target?.value?.trim()?.length < 15)
                                                                           setUserData({ ...userData, firstname: e?.target?.value })
                                                                 }} />
                                                            </label>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                                                       <div>
                                                            <label style={{ width: "100%" }}>
                                                                 Enter Last Name
                                                                 <input type="text" className="form input form-control p-2" placeholder='Enter Last Name' value={userData?.lastname} onChange={(e: any) => {
                                                                      if (e?.target?.value?.trim()?.length < 15)
                                                                           setUserData({ ...userData, lastname: e?.target?.value })
                                                                 }} />
                                                            </label>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                                                       <div>
                                                            <label style={{ width: "100%", position: "relative", top: "0px" }}>
                                                                 Enter Email
                                                                 <input type="text" className="form input form-control p-2" placeholder='Enter Eamil' value={userData?.email} onChange={(e: any) => {
                                                                      setUserData({ ...userData, email: e?.target?.value })
                                                                 }} />
                                                                 {/* {validator?.isEmail(userData?.email?userData?.email:"") &&  userData?.email_verified==0 && <a href="#" className="email_verify_button"  data-bs-toggle="modal"
                                data-bs-target="#modal-email-verify"  style={{position:"absolute",top:"35px",right:"10px"}} onClick={async (e:any)=>{
                                    e?.preventDefault()
                                    const {data}=await emailVerificationOTPSent({email:userData?.email,id:userData?.id})
                                    if(data?.success){
                                        SuccessMessage("OTP Sent Successfully")
                                        setOtpSent(true)
                                    }else{
                                        WarningMessage(data?.message)
                                    }
                                }}>Verify</a>} */}
                                                                 {/* {
                                   userData?.email_verified==1 && <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png"  style={{position:"absolute",top:"35px",right:"10px",width:"30px",height:"30px",borderRadius:"100%"}} alt="Verified" />
                                } */}
                                                            </label>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                                                       <div>
                                                            <label style={{ width: "100%", position: "relative", top: "0px" }}>
                                                                 Enter Phone Number
                                                                 <input disabled={userData?.phone_verified == 1} type="text" className="form input form-control p-2" placeholder='Enter Phone Number' value={userData?.phone} />
                                                                 {
                                                                      userData?.phone_verified == 1 && <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" style={{ position: "absolute", top: "35px", right: "10px", width: "30px", height: "30px", borderRadius: "100%" }} alt="Verified" />
                                                                 }
                                                            </label>

                                                       </div>
                                                  </div>
                                                  {/* <div className="col-lg-4 col-md-6 col-sm-6 my-2 options-colored">
                                                       <div>
                                                            <label style={{ width: "100%" }}>
                                                                 Select Gender
                                                                 <Select
                                                                      onChange={(e: any) => {
                                                                           setSelectGender(e)
                                                                           setUserData({ ...userData, gender: e?.value })
                                                                      }}
                                                                      autoFocus={false}
                                                                      value={selectGender}
                                                                      options={options}
                                                                 />
                                                            </label>
                                                       </div>
                                                  </div> */}
                                                  {/* <div className="col-lg-4 col-md-6 col-sm-6 my-2 options-colored">
                                                       <div>
                                                            <label style={{ width: "100%" }}>
                                                                 Select Country
                                                                 <Select
                                                                 isDisabled={true}
                                                                      options={Country.getAllCountries()}
                                                                      getOptionLabel={(options) => {
                                                                           return options["name"];
                                                                      }}
                                                                      getOptionValue={(options) => {
                                                                           return options["name"];
                                                                      }}
                                                                      autoFocus={false}
                                                                      value={selectedCountry}
                                                                      onChange={(item: any) => {
                                                                           setSelectedCountry(item);
                                                                           setUserData({
                                                                                ...userData, country: item?.name
                                                                           })
                                                                      }}
                                                                 />
                                                            </label>
                                                       </div>
                                                  </div> */}
                                                  {/* {selectedCountry && selectedCountry?.isoCode && <div className="col-lg-4 col-md-6 col-sm-6 my-2 options-colored">
                                                       <div>
                                                            <label style={{ width: "100%" }}>
                                                                 Select State
                                                                 <Select
                                                                      options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                                                                      getOptionLabel={(options) => {
                                                                           return options["name"];
                                                                      }}
                                                                      getOptionValue={(options) => {
                                                                           return options["name"];
                                                                      }}
                                                                      value={selectedState}
                                                                      onChange={(item: any) => {
                                                                           setSelectedState(item);
                                                                           setUserData({
                                                                                ...userData, state: item?.name
                                                                           })
                                                                      }}
                                                                 />
                                                            </label>
                                                       </div>
                                                  </div>} */}
                                                  {/* {selectedState && selectedState?.isoCode && <div className="col-lg-4 col-md-6 col-sm-6 my-2 options-colored">
                                                       <div>
                                                            <label style={{ width: "100%" }}>
                                                                 Select City
                                                                 <Select className='text-dark'
                                                                      options={City.getCitiesOfState(
                                                                           selectedState?.countryCode,
                                                                           selectedState?.isoCode
                                                                      )}
                                                                      getOptionLabel={(options) => {
                                                                           return options["name"];
                                                                      }}
                                                                      getOptionValue={(options) => {
                                                                           return options["name"];
                                                                      }}
                                                                      value={selectedCity}
                                                                      onChange={(item: any) => {
                                                                           setSelectedCity(item);
                                                                           setUserData({
                                                                                ...userData, city: item?.name
                                                                           })
                                                                      }}
                                                                 />
                                                            </label>
                                                       </div>
                                                  </div>} */}
                                                  {/* <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                                                       <div>
                                                            <label style={{ width: "100%" }}>
                                                                 Enter Pincode
                                                                 <input type="text" className="form input form-control p-2" placeholder='Enter Pincode' value={userData?.pincode} onChange={(e: any) => {
                                                                      setUserData({ ...userData, pincode: e?.target?.value })
                                                                 }} />
                                                            </label>
                                                       </div>
                                                  </div> */}

                                                  <div className="col-12 mb-6 mt-1">
                                                       <div>
                                                            <button className="text-white btn btn-primary" onClick={(e: any) => {
                                                                 e?.preventDefault()
                                                                 checkValidation()
                                                            }}>Save Info</button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </section>
                              </main>
                              <button style={{ display: "none" }} ref={closeRef} data-bs-toggle="modal" data-bs-target="#modal-email-verify" onClick={(e: any) => {
                                   e?.preventDefault()
                              }}></button>


                              {/* ========== footer section ========== */}
                              <VerifyEmailModal verifyEmailGetOTP={verifyEmailGetOTP} otpSent={otpSent} />
                         </div>
                    </div>
               </section>


          </Fragment>
     );
};

export default Profile;
