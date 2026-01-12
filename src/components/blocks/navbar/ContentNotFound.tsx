import { useRouter } from 'next/router'
import React from 'react'

const ContentNotFound = (props:any) => {
  const router=useRouter()
  return (
    <div className="container d-flex flex-direction-row justify-content-center align-items-center text-center" style={{width:"100vw",height:"60vh"}}>
         <div className="row">
                <div>
                    <img src="/img/notAvailable.png" style={{maxWidth:"250px",textAlign:"center",margin:"auto"}} alt="Not Available"/>
                </div>
                <div className="my-4">
                    <h5>Content you are looking for isn't available at this moment</h5>
                    {props.button_text!="" && <button className="btn btn-primary btn-sm my-2" onClick={()=>{
                         router.push(props?.to)
                    }}>{props?.button_text}</button>}
                </div>
         </div>
        
    </div>
  )
}

export default ContentNotFound