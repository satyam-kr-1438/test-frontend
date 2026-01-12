import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const PaymentSuccess = () => {
    const router=useRouter()
    useEffect(()=>{
            if(router && !router?.query?.reference){
                router.push("/dashboard/home")
            }
            setTimeout(()=>{
              router.push("/dashboard/home")
            },2000)
    },[router])
  return (
    <div>
         <div className="container-fluid">
                <div className="row">
                      <div className="col-12" style={{margin:"auto",display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
                         <div className="card p-5" style={{position:"relative",top:"0px",zIndex:"999",maxWidth:"550px",minWidth:"250px"}}>
                                   <div style={{position:"absolute",background:"white",top:"-35px",left:"38%",textAlign:"center",margin:"auto",zIndex:"999999"}}>
                                         <img src="https://cdn-icons-png.flaticon.com/512/8832/8832119.png" alt="Payment Success" style={{width:"70px"}}/>
                                    </div>
                               <div>
                                    <div style={{marginTop:"35px",textAlign:"center"}}>
                                         <h5 style={{color:"green"}}>Payment Successful</h5>
                                         <p style={{margin:"10px auto",fontSize:"12px"}}>Transaction ID:- {router && router?.query && router?.query?.reference ? router?.query?.reference:""}</p>
                                    </div>
                                    <div style={{margin:"20px auto",textAlign:"center"}}>
                                         <button className="btn btn-sm btn-outline-primary" onClick={()=>{
                                            router.push("/dashboard/home")
                                         }}>Back to Home</button>
                                    </div>
                               </div>
                         </div>
                      </div>
                </div>
         </div>
    </div>
  )
}

export default PaymentSuccess