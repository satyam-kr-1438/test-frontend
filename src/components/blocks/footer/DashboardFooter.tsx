import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const DashboardFooter = () => {
  const router=useRouter()
  return (
    <Fragment>
       <div className="container-fluid">
           <div className="row">
              <div className="col-12">
                   <div className="d-lg-flex d-md-none d-none dashboard_main_footer_container">
                           <h5 className='footer_dashboard_copyright d-md-none d-none d-lg-block'>COPYRIGHT © {new Date().getFullYear()} Testerika, All rights Reserved</h5>
                           <h5 className="footer_dashboard_handcrafted d-md-none d-none  d-lg-block">Hand-crafted & Made by Testerika</h5>
                   </div>
                   <div className="py-2 d-lg-none d-md-block" style={{marginTop:"-50px",textAlign:"center",cursor:"pointer"}}>
                      <img style={{width:"50px",height:"50px",borderRadius:"100%",border:"10px solid #559cfb",cursor:"pointer"}} src={getAuthenticatedUserData()?.profile_image?getAuthenticatedUserData()?.profile_image:"/img/avatar.svg"} alt="Profile" onClick={()=>{
                        router.push("/dashboard/profile")
                      }}/>
                   </div>
              </div>
           </div>
       </div>
    </Fragment>
  )
}

export default DashboardFooter