import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const WarningMessage=(message:string)=>{
   return toast.warn(`${message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
    })
}

export const SuccessMessage=(message:string)=>{
    return toast.success(`${message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
            })
 }

 export const ErrorMessage=(message:string)=>{
    return toast.error(`${message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
        })
 }