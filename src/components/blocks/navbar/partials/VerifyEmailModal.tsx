import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import OTPInput from 'react-otp-input';

const VerifyEmailModal: FC<any> = ({verifyEmailGetOTP,otpSent}) => {
     const router=useRouter()
     const [otp,setOtp]=useState("")
  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      id="modal-email-verify"
      className="modal fade"
      style={{ display: 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              <div>
                <h2 className="mb-2 text-center">Welcome to Testerika</h2>
                <p className="lead mb-2 text-center" style={{fontSize:"12px"}}>Enter Valid OTP!!</p>

                    <form className="text-start mb-3">
                        <div className="mb-4">
                        
                        {otpSent && <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span>{" "}</span>}
                                inputStyle={{background:"white",border:"1px solid #e3e3e3",outline:"none",borderRadius:"5px",padding:"10px",width:"44px",height:"44px",margin:"2px auto"}}
                                renderInput={(props) => <input {...props} />}
                        />}
                          {!otpSent && <span className="text-center mx-auto d-flex justify-content-center flex-column align-items-center" style={{height:"70px",padding:"10px 0px",margin:"10px 0px"}}>
                           <svg style={{width:"100%",height:"60px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <circle fill="green" stroke="green" strokeWidth="40" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle>
                                <circle fill="green" stroke="green" strokeWidth="40" r="15" cx="140" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle>
                                <circle fill="green" stroke="green" strokeWidth="40" r="15" cx="240" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle>
                            </svg>
                          </span>}
                        
                        {/* <label htmlFor="loginEmail">Phone Number</label> */}
                        </div>


                        {otpSent && <button className="btn btn-success rounded-pill btn-login w-100 mb-2" onClick={(e:React.MouseEvent)=>{
                        // setOtpSent(true)
                            e?.preventDefault()
                            verifyEmailGetOTP(otp)
                        }}>
                        Verify OTP
                        </button>}
                    </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailModal;
