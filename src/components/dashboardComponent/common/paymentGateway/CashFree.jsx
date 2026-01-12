import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
// import { cashfree } from "./utils"
import { ToastContainer } from 'react-toastify'
import {load} from '@cashfreepayments/cashfree-js';
import { ErrorMessage } from '../messageToast/AlertMessageToast'
import { addPaymentDetails, PAYMENT_API_KEY } from 'components/request/request'
import SwipeableButton from 'components/common/SlideToContinue'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import { useRouter } from 'next/router';

const CashFree = ({currency,payableAmount,couponDetail,packageDetail,couponDiscount,type}) => {
    const router=useRouter()
    const checkOutHandler=async ()=>{
          try{
            let userDetail=getAuthenticatedUserData()
            if(userDetail?.address){
                delete userDetail.address
            }
            let cashFreeVersion = await load({
                mode: "production" //or production
            })
            if(cashFreeVersion){
                axios.post(`${PAYMENT_API_KEY}/cashfree-payment-checkout`, {version:cashFreeVersion.version(),currency,couponDiscount,payableAmount,couponDetail,packageDetail,userDetail,type})
                .then(async (res)=>{
                    if(!res?.data?.success){
                        ErrorMessage("Unable to process your request.Please try again later.")
                    }
                    else{
                        let checkoutOptions = {
                            paymentSessionId: res?.data?.session_id,
                            returnUrl: `${PAYMENT_API_KEY}/cashfree-payment-verification/{order_id}`,
                        }   
                        let cashFreeCheckout=await load({
                            mode: "production" //or production
                        })
                        if(cashFreeCheckout){
                            cashFreeCheckout.checkout(checkoutOptions).then(function(result){
                                if(result?.error){
                                    ErrorMessage(result?.error?.message)
                                }
                                if(result?.redirect){
                                }
                            })
                        }else{
                            ErrorMessage("Failed to load CashFree.Please try later")
                        }
                       
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    ErrorMessage("Failed to load CashFree.Please try later")
                })
            }else{
                ErrorMessage("Failed to load CashFree.Please try later")
            }
           
          }catch(err){
            ErrorMessage("Failed to load CashFree.Please try later")
          }
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
        }
        else if(Number(payableAmount)>0){
            checkOutHandler(Number(payableAmount))
        }else{
            if(currency=="INR"){
                checkOutHandler(Number(packageDetail?.price_inr))
            }else{
                checkOutHandler(Number(packageDetail?.price_usd))
            }
        }
    }

  return (
    <>
    <ToastContainer/>
        <div>
            <div className='block'>
                <SwipeableButton onSuccess={onSuccess} color='#6ab04c' text='Slide to Continue' />
            </div>
        </div>
    </>
  )
}

export default CashFree
