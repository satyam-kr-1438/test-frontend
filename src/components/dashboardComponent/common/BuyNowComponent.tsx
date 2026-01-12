import SidebarCouponViewModel from 'components/common/SidebarCouponViewModel';
import SwipeableButton from 'components/common/SlideToContinue'
import React, { FC, memo, useEffect, useMemo, useState } from 'react'
import RazorPay from './paymentGateway/RazorPay';
import 'react-toastify/dist/ReactToastify.css';

import { PAYMENT_GATEWAY_CREDENTIALS_API_KEY, addPaymentDetails, applyCoupon } from 'components/request/request';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useRouter } from 'next/router';
import { ErrorMessage, SuccessMessage } from './messageToast/AlertMessageToast';
import axios from 'axios';
import Swal from 'sweetalert2';

const BuyNowComponent: FC<any> = ({ packageDetail, type }) => {
    const [currency, setCurrency] = useState("INR")
    const [payableAmount, setPayableAmount] = useState(0)
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [couponDetail, setCouponDetail] = useState<any>(undefined)
    const router = useRouter()
    const resetPablaeAmountAndCouponDiscount = () => {
        setCouponDetail(undefined)
        setPayableAmount(0)
        setCouponDiscount(0)
    }
    const getCouponDetails = async (couponDetails: any) => {
        try {
            setCouponDetail(couponDetails)
            let curruser = getAuthenticatedUserData()
            if (curruser && type == "Pass") {
                const { data } = await applyCoupon(couponDetails, curruser?.id, undefined, undefined, packageDetail?.id, currency, packageDetail)
                if (data?.success) {
                    setPayableAmount(data?.find_payable_amount)
                    setCouponDiscount(data?.find_coupon_amount)
                    // SuccessMessage("Coupon Applied Successfully")      
                } else {
                    Swal.fire({
                        title: "Oops!",
                        text: `${data?.message}`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "OK"
                    }).then(async (result: any) => {

                    })
                }
            }
            else if (curruser && type == "Package" && router?.query?.packageId) {
                const { data } = await applyCoupon(couponDetails, curruser?.id, router.query.packageId, undefined, undefined, currency, undefined)
                if (data?.success) {
                    setPayableAmount(data?.find_payable_amount)
                    setCouponDiscount(data?.find_coupon_amount)
                    // SuccessMessage("Coupon Applied Successfully")      
                } else {
                    Swal.fire({
                        title: "Oops!",
                        text: `${data?.message}`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "OK"
                    }).then(async (result: any) => {

                    })
                }
            }
            else if (curruser && type == "Bundle" && router?.query?.bundleId) {
                const { data } = await applyCoupon(couponDetails, curruser?.id, undefined, router.query.bundleId, undefined, currency, undefined)
                if (data?.success) {
                    setPayableAmount(data?.find_payable_amount)
                    setCouponDiscount(data?.find_coupon_amount)
                    // SuccessMessage("Coupon Applied Successfully")      
                } else {
                    Swal.fire({
                        title: "Oops!",
                        text: `${data?.message}`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "OK"
                    }).then(async (result: any) => {

                    })
                }
            }
        } catch (err) {
             ErrorMessage("Something went wrong.Please try later")
        }
    }

    const memoizedSideBarCouponViewModal = useMemo(() => {
        return <SidebarCouponViewModel getCouponDetails={getCouponDetails} couponDiscount={couponDiscount} resetPablaeAmountAndCouponDiscount={resetPablaeAmountAndCouponDiscount} currency={currency} />
    }, [getCouponDetails, resetPablaeAmountAndCouponDiscount, couponDiscount, currency])

    const memoizedRazorPay = useMemo(() => {
        if (packageDetail) {
            return <RazorPay currency={currency} payableAmount={payableAmount} couponDetail={couponDetail} packageDetail={packageDetail} couponDiscount={couponDiscount} type={type} />
        }
    }, [currency, payableAmount, couponDetail, packageDetail, setCouponDetail, couponDiscount, type])

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
                        payableAmount,
                        packageDetail,
                        userDetail,
                        currency,couponDetail,couponDiscount,type
                    })
        }else{
        //   setShow(true)
        }
     }
    return (
        <div className="container pt-5 py-md-5 py-lg-10">
            <div className="row">
                {/* <div className="col-12">
                    <div style={{ width: "200px", textAlign: "center", margin: "auto" }}>
                        <button style={{ background: `${currency == "INR" ? "#2783fd" : "#b4b4b4"}`, border: "none", outline: "none", color: "white", padding: "5px 20px" }} onClick={() => {
                            setCurrency("INR")
                            if (currency == "USD") {
                                setPayableAmount(0)
                                setCouponDetail(undefined)
                                setCouponDiscount(0)
                            }

                        }}>INR</button>
                        <button style={{ background: `${currency == "USD" ? "#2783fd" : "#b4b4b4"}`, border: "none", outline: "none", color: "white", padding: "5px 20px" }} onClick={() => {
                            setCurrency("USD")
                            if (currency == "INR") {
                                setPayableAmount(0)
                                setCouponDetail(undefined)
                                setCouponDiscount(0)
                            }

                        }}>USD</button>
                    </div>
                </div> */}
                <div className="col-12">
                    <div className="row my-5">
                        <div className="" style={{ maxWidth: "500px", minWidth: "100px", margin: "auto" }}>
                            {/* <SidebarCouponViewModel/> */}
                            <div className="card p-4 text-center mx-auto">
                                <div>
                                    <h6>{type == "Pass" ? packageDetail?.pass_name : packageDetail?.name}</h6>
                                    {
                                        memoizedSideBarCouponViewModal
                                    }
                                </div>
                                <hr className="coupon_apply_seperator_line" />
                                <div className="">
                                    <div className="coupon_detail_package_price_detail">
                                        <span>Total Amount :</span>
                                        <span className="coupon_detail_package_price_detail_price">{currency} {currency == "INR" ? packageDetail?.price_inr : packageDetail?.price_usd}</span>
                                    </div>
                                    <div className="coupon_detail_package_price_detail">
                                        <span>Coupon Discount :</span>
                                        <span className="coupon_detail_package_price_detail_price coupon_detail_package_price_detail_price_discount">-{currency} {couponDiscount}</span>
                                    </div>
                                    <div className="coupon_detail_package_price_detail">
                                        <span>Net Payable Amount :</span>
                                        <span className="coupon_detail_package_price_detail_price">{currency} {payableAmount ? payableAmount : currency == "INR" ? packageDetail?.price_inr : packageDetail?.price_usd}</span>
                                    </div>
                                </div>
                                <hr className="coupon_apply_seperator_line" />
                                <div>
                                    <div>
                                            {
                                               memoizedRazorPay
                                            }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(BuyNowComponent)