import { useRouter } from 'next/router';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const  ConfirmPopup=()=> {
     const router=useRouter()
    const submit = () => {
        confirmAlert({
          title: 'Confirm to pause',
          message: 'Are you sure to do this??',
          buttons: [
            {
              label: 'Yes',
              onClick: () =>{
                router.push("/dashboard/home")
              }
            },
            {
              label: 'No',
              onClick: () =>{
    
              }
            }
          ]
        });
      };
    return (
      <button onClick={submit} className="btn btn-sm btn-outline-primary ms-3">
        Pause
      </button>
    );
  
}

export default ConfirmPopup