import { FC, FormEvent, Fragment, useRef, useState } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/router';
import { registerOrLoginOtpSend, registerOrLoginOtpVerify } from 'components/request/request';
import { isValidPhoneNumber } from 'react-phone-number-input'
import { ErrorMessage, SuccessMessage, WarningMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { setAuthenticationData } from 'hooks/localStorageInfo';

const LoginForm: FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<any>(undefined);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const closeRef:any=useRef(null)
  const [otp, setOtp] = useState<any>("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const router=useRouter()
  const otpSendOnPhoneNumber=async ()=>{
     try{
        if(isValidPhoneNumber(`+91${phoneNumber}`)){
             const {data}=await registerOrLoginOtpSend(`+91${phoneNumber}`)
             if(data?.success){
                SuccessMessage(data?.message)
                setOtpSent(true)
             }else{
              ErrorMessage(data?.message?.message)
             }
        }else{
           WarningMessage("Invalid Phone Number")
        }
     }catch(err){
       ErrorMessage("Something went wrong.Please try later.")
     }
  }
  const otpVerifyWhileRegisterOrLogin=async ()=>{
      try{
        const {data}=await registerOrLoginOtpVerify({phone:phoneNumber,otp})
          if(data?.success){
            SuccessMessage(data?.message)
            let response=setAuthenticationData(data?.data)
            if(response){
               if(closeRef && closeRef?.current){
                closeRef?.current?.click();
               }
               if(typeof window!="undefined"){
                 window.location.pathname="/dashboard/home"
               }
            }else{
              ErrorMessage("Something went wrong.Please try again.")
            }
          }else{
            if(data?.message=="User inactive.Please contact with admin"){
              ErrorMessage(data?.message)
            }else if(data?.message=="Unauthorized Access"){
              ErrorMessage(data?.message)
            }else{
              ErrorMessage(data?.message?.message)
            }
          }
      }catch(err){
        ErrorMessage("Something went wrong.Please try later.")
      }
  }
  return (
    <Fragment>
      <h2 className="mb-2 text-center">Welcome to Testerika</h2>
      {otpSent?<p className="lead mb-2 text-center">Enter Valid OTP</p>:<p className="lead mb-2 text-center">Enter your mobile number</p>}

      <form className="text-start mb-3">
        <div className="mb-4">
          {!otpSent && <input
            type="number"
            value={phoneNumber}
            placeholder="Enter Phone Number"
            className="form-control"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />}
           
          {otpSent && <OTPInput
                   value={otp}
                   onChange={setOtp}
                   numInputs={6}
                   renderSeparator={<span>{" "}</span>}
                   inputStyle={{background:"white",border:"1px solid #e3e3e3",outline:"none",borderRadius:"5px",padding:"10px",width:"44px",height:"44px",margin:"2px auto"}}
                   renderInput={(props) => <input {...props} />}
           />}
          {/* <label htmlFor="loginEmail">Phone Number</label> */}
        </div>

        {/* <div className="form-floating password-field mb-4">
          <input
            value={password}
            id="loginPassword"
            placeholder="Password"
            className="form-control"
            type={visiblePassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? 'uil-eye-slash' : 'uil-eye'}`} />
          </span>

          <label htmlFor="loginPassword">Password</label>
        </div> */}
        <button style={{display:"none"}} ref={closeRef}  data-bs-toggle="modal"
          data-bs-target="#modal-signin" onClick={(e:any)=>{
              e?.preventDefault()
          }}></button>

        {otpSent ? <button className="btn btn-success rounded-pill btn-login w-100 mb-2" onClick={(e:React.MouseEvent)=>{
          e?.preventDefault()
          // router.push("/dashboard/home")
          otpVerifyWhileRegisterOrLogin()
        }}>
          Verify OTP
        </button>: <button className="btn btn-primary rounded-pill btn-login w-100 mb-2" onClick={(e:React.MouseEvent)=>{
           e?.preventDefault()
           otpSendOnPhoneNumber()
        }}>
          Request OTP
        </button>}

        {
          otpSent && <button className="btn btn-primary rounded-pill btn-login w-100 mb-2" onClick={(e:React.MouseEvent)=>{
            e?.preventDefault()
            setOtp("")
            setOtpSent(false)
          }}>
            Back
          </button>
        }
      </form>

      {/* <p className="mb-1">
        <NextLink title="?" href="/register" className="hover" />
      </p>

      <p className="mb-0">
        Don&apos;t have an account? <NextLink title="Sign up" href="/register" className="hover" />
      </p> */}

      {/* <div className="divider-icon my-4">or</div> */}

      {/* <nav className="nav social justify-content-center text-center">
        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-google">
          <i className="uil uil-google" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-facebook-f">
          <i className="uil uil-facebook-f" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-twitter">
          <i className="uil uil-twitter" />
        </a>
      </nav> */}
    </Fragment>
  );
};

export default LoginForm;
