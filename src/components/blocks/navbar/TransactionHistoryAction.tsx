import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import PdfGenerater from "../../blocks/navbar/GenerateInvoicePDF"
export default function TarnsactionHistoryAction({item}:any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const memoizedPDFGenerator=React.useMemo(()=>{
     if(item)return <PdfGenerater item={item}/>
  },[item])
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
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IoEllipsisVerticalSharp style={{transform:"scale(1.4)"}}/>
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
            handleClose()
        }}>
          {
            memoizedPDFGenerator
          }
        </MenuItem>
        {/* <MenuItem onClick={()=>{
            handleClose()
        }}>Share Invoice</MenuItem> */}
       
      </Menu>
    </div>
  );
}