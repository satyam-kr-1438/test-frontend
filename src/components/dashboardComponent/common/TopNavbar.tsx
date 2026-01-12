import React, { Fragment } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { FaCartPlus } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const TopNavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router=useRouter()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
       <div className="container-fluid">
           <div className="row mx-auto text-end">
              <div className="col-12 mx-auto text-end">
                   <div className="dashboard_main_footer_container"
                          style={{cursor:"pointer",width:"280px",float:"right",marginRight:"200px"}}>
                            <div style={{display:"flex",alignItems:"center",float:"right",marginLeft:"auto",width:"75px"}}>
                                <span className="mx-2">
                                  <FaCartPlus style={{transform:"scale(1.3)",color:"white",cursor:"pointer"}} onClick={()=>{
                                    router.push("/dashboard/cart")
                                  }}/>
                                </span>
                                <span className="mx-2">
                                  <IoNotifications style={{transform:"scale(1.3)",color:"white",cursor:"pointer"}}/>
                                </span>
                            </div>
                           
                           <div style={{display:"flex",alignItems:"center",float:"right",marginLeft:"auto",width:"125px"}} aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={(e:any)=>{
                                  handleClick(e)
                                }} >
                               <span>
                                 <img style={{width:"30px",color:"white",height:"30px",borderRadius:"100%"}} src="/img/avatar.svg" alt="Profile"/>
                               </span>
                               <span style={{color:"white",fontSize:"10px",marginLeft:"10px"}}>Satyam Ku....</span>
                           </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                  'aria-labelledby': 'basic-button',
                                }}
                              >
                                <MenuItem onClick={()=>{
                                  router.push("/dashboard/profile")
                                  handleClose()
                                }}>Profile</MenuItem>
                                <MenuItem onClick={()=>{
                                  router.push("/")
                                  handleClose()
                                }}>Logout</MenuItem>
                              </Menu>
                   </div>
              </div>
           </div>
       </div>
    </Fragment>
  )
}

export default TopNavBar