"use client"
import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import SwipeableButton from 'components/common/SlideToContinue'
import { addPaymentDetails, PAYMENT_API_KEY } from "components/request/request";
import { getAuthenticatedUserData } from "hooks/localStorageInfo";

const Paypal = ({clientkey,currency,payableAmount,couponDetail,packageDetail,couponDiscount,type}) => {
    const [show, setShow] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const router=useRouter()
    const paypalCheckoutOnSuccess=async (paypalData)=>{
         try{
            let userDetail=getAuthenticatedUserData()
            if(userDetail?.address){
                delete userDetail.address
            }
            let {data}=await axios.post(`${PAYMENT_API_KEY}/paypal-payment-verification`,{
                currency,couponDiscount,payableAmount,couponDetail,packageDetail,userDetail,type,paypalData
            })
            if(data?.success){
                router.push(`/dashboard/payment-success?reference=${data?.payment_id}`)
            }else{
                router.push(`/dashboard/payment-failed`)
            }
         }catch(err){

         }
 }
  const createOrder = (data, actions) => {  
    return actions.order.create({
      purchase_units: [
        {
          description: "Testerika Pvt Ltd",
          amount:{
            currency_code: "USD",
            value:(payableAmount>0 && couponDiscount>0 && couponDetail)?payableAmount:packageDetail?.price_usd,
            // value:20,
          },
        }  
      ]
    })
      .then((orderID) => {
        return orderID
    }).catch((err)=>{
      console.log(err)
    })
  }
  const onApprove = (data,actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details
      let paypalData={
        paymentStatus:details.status,
        amount:Number(details.purchase_units[0].amount.value),
        currency:details.purchase_units[0].amount.currency_code,
        transaction_id:details.purchase_units[0].payments.captures[0].id,
        payment_method:"PayPal",
      }
      paypalCheckoutOnSuccess(paypalData)
    })
  }
  const onError = async (data2, actions) => {
       ErrorMessage("Something went wrong.Please try later")
    
 }
 const addPaymentDetailsData=async (payload)=>{
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
                    payableAmount,
                    packageDetail,
                    userDetail,
                    currency,couponDetail,couponDiscount,type
                })
    }else{
      setShow(true)
    }
 }

    return (
      <div className="">
        {show && clientkey && <PayPalScriptProvider options={{ "client-id": clientkey }}>
            <div>
                {(
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                    />
                ) }
            </div>
        </PayPalScriptProvider>}
        {
            !show &&  <div className='block'>
            <SwipeableButton onSuccess={onSuccess} color='#6ab04c' text='Slide to Continue' />
        </div>
        }
        </div>
    );
}

export default Paypal