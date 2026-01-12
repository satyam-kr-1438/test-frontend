import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { getAuthenticatedUserData, removeAuthenticationDataHandleLogout } from 'hooks/localStorageInfo';
import { SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';

export default function DashboardNavbarModal() {
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
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <a href="#" style={{padding:"5px"}} onClick={(e:React.MouseEvent)=>{
            e?.preventDefault()
        }}>
           <img src={getAuthenticatedUserData()?.profile_image?getAuthenticatedUserData()?.profile_image:"/img/avatar.svg"} alt="Avater" style={{width:"40px",height:"40px",borderRadius:"100%"}}/>
        </a>
      </Button>
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
            router.push("/dashboard/transaction-history")
            handleClose()
        }}>Transaction History</MenuItem>
        <MenuItem onClick={()=>{
            router.push("/dashboard/cart")
            handleClose()
        }}>View Cart</MenuItem>
        <MenuItem onClick={()=>{
            router.push("/dashboard/favourite")
            handleClose()
        }}>My Wishlist</MenuItem>
        {/* <MenuItem onClick={()=>{
            router.push("/dashboard/my-order-history")
            handleClose()
        }}>My Order</MenuItem> */}
        <MenuItem onClick={()=>{
            const data=removeAuthenticationDataHandleLogout()
            if(data){
              SuccessMessage("User Logout Successfully")
              router.push("/")
              handleClose()
            }
        }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}