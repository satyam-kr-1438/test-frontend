"use client"
import axios from 'axios'
import React,{useState,useEffect,memo, FC} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { ErrorMessage } from '../messageToast/AlertMessageToast'
import { PAYMENT_API_KEY, addPaymentDetails, razorPayCheckOut } from 'components/request/request'
import SwipeableButton from 'components/common/SlideToContinue'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import { useRouter } from 'next/router'

const RazorPay:FC<any> = ({currency,payableAmount,couponDetail,packageDetail,couponDiscount,type}) => {
    const [buyNowLoading,setBuyNowLoading]=useState(false)
    const router=useRouter()
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document?.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = (err) => {
            console.log(err)
            setBuyNowLoading(false)
            resolve(false);
          };
    
          document?.body?.appendChild(script);
        })
    }
    
    const checkoutHandler = async (amount:number) => {
        try{
        setBuyNowLoading(true)
        const res = await initializeRazorpay()
        if (!res) {
            setBuyNowLoading(false)
            ErrorMessage(`Unable to process your request.Please try again later.`)
            return;
        }
        // const {data}=await getPaymentGatewayApiKey("RazorPay")
        let userDetail=getAuthenticatedUserData()
        if(userDetail?.address){
            delete userDetail.address
        }
        packageDetail={
            ...packageDetail,
            price_inr:Number(packageDetail?.price_inr)
        }
        const data2 = await razorPayCheckOut({currency,couponDiscount:Number(couponDiscount),payableAmount:Number(payableAmount),couponDetail,packageDetail,userDetail,type})
        if(!data2?.data?.success){
          ErrorMessage(data2?.data?.message)
        }else{
            let order=data2?.data?.order
            const options = {
                key:"rzp_live_RXNHXJ3IB7uwpr",
                amount:order?.amount,
                currency:order?.currency,
                name: "Testerika",
                description: "RazorPay Payment Gateway",
                // image: "/img/razorpay.png",
                order_id: order.id,
                callback_url:`${PAYMENT_API_KEY}/razorPayPaymentVerification`,
                prefill: {
                    name: getAuthenticatedUserData().firstname + " "+ getAuthenticatedUserData().lastname,
                    // name:"Testerika",
                    email: getAuthenticatedUserData().email,
                    contact: getAuthenticatedUserData().phone
                },
                notes: {
                    "address": "RazorPay Corporate Office"
                },
                theme: {
                    "color": "#FF0000"
                }
            };
            if(typeof window!="undefined"){
                const razor: any = new (window as any).Razorpay(options);
                razor.open();
            } 
        }
        }
        catch(err){
            ErrorMessage("Failed to load RazorPay.Please try later")
        }
        
    }
    const addPaymentDetailsData=async (payload:any)=>{
             try{
                const {data}=await addPaymentDetails(payload)
                if(data?.success){
                    router.push(`/dashboard/payment-success?reference=PAYMENT_SUCCESS`)
                }else{
                    router.push(`/dashboard/payment-failed`)
                }
             }catch(err){
    
             }
        }
    
    const onSuccess =()=> {
        if(couponDetail && couponDiscount && Number(payableAmount)==0){
                    let userDetail=getAuthenticatedUserData()
                    addPaymentDetailsData({
                        payableAmount:Number(payableAmount),
                        packageDetail,
                        userDetail,
                        currency,couponDetail,couponDiscount,type
                    })
        }
        else if(payableAmount>0){
            checkoutHandler(Number(payableAmount))
        }else{
            if(currency=="INR"){
                checkoutHandler(packageDetail?.price_inr)
            }else{
                checkoutHandler(packageDetail?.price_usd)
            }
        }
    }



  return (
    <div>
        <ToastContainer/>
        <div>
            <div className='block'>
                {/* <SwipeableButton onSuccess={onSuccess} color='#6ab04c' text='Slide to Continue' /> */}
                <button className='btn btn-primary' onClick={()=>{
                    onSuccess()
                }}>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default memo(RazorPay)