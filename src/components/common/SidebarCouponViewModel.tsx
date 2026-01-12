import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { applyCoupon, applyCouponUsingCouponCode, getAllCoupon } from 'components/request/request';
import CouponCard from 'components/reuseable/product-cards/CouponCard';
import useAuthorization from 'hooks/useAuthorization';
import React, { FC, memo, useEffect, useMemo, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDiscount } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import Swal from 'sweetalert2';

const SidebarCouponViewModel: FC<any> = ({ getCouponDetails, couponDiscount, resetPablaeAmountAndCouponDiscount, currency }) => {
  const [auth, setAuth] = useAuthorization()
  const [coupon, setCoupon] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [couponcode, setCouponCode] = useState("")
  //   const [scrollView,setScrol]



  const getAllCouponDetail = async () => {
    try {
      if (auth && auth?.id && auth?.email) {
        const { data } = await getAllCoupon(auth?.id, auth?.email)
        if (data?.success) {
          setCoupon(data?.data)
          setTimeout(() => {
            setLoading(false)
          }, 200)
        } else {
          setCoupon([])
          setTimeout(() => {
            setLoading(false)
          }, 200)
        }
      }
    } catch (err) {
      ErrorMessage("Something went wrong.Please try again.")
      setTimeout(() => {
        setLoading(false)
      }, 200)
    }
  }
  useEffect(() => {
    getAllCouponDetail()
  }, [auth, setAuth])

  const applyCouponToPackages = async (couponDetail: any) => {
    try {
      getCouponDetails(couponDetail)
    } catch (err) {
      ErrorMessage("Something went wrong.Please try again.")
    }
  }
  const memoizedCouponCard = useMemo(() => {
    if (coupon?.length > 0) {
      return coupon?.map((item: any, index: any) => {
        return <CouponCard key={index} item={item} applyCouponToPackages={applyCouponToPackages} currency={currency} />
      })
    }
  }, [coupon, setCoupon, applyCouponToPackages, currency])
  return (
    <div>
      <div id="offcanvas-nav-coupon" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start bg-light coupon_apply_sidebar_style">
        <div className="Top_cross_button_coupon">
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" >
            <RxCross2 style={{ transform: "scale(1.5)" }} />
          </button>
        </div>
        <div className="offcanvas-body h-100" style={{ width: "100%" }}>
          <div className="input_apply_now_container_coupon">
            <input type="text" value={couponcode} placeholder='Enter Coupon Code' className='form-control' onChange={(e: any) => {
              setCouponCode(e?.target?.value)
            }} />
            <button aria-label="Close" data-bs-dismiss="offcanvas" onClick={async () => {
              try {
                if (getAuthenticatedUserData()?.id) {
                  const { data } = await applyCouponUsingCouponCode({
                    code: couponcode,
                    user_id: getAuthenticatedUserData()?.id,
                    email: getAuthenticatedUserData()?.email
                  })
                  if (data?.success) {
                    applyCouponToPackages(data?.data[0])
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

              }
            }}>Apply Now</button>
          </div>

          <div className="w-100 my-4">
            {
              coupon?.length > 0 ? <div className="">
                {
                  memoizedCouponCard
                }
              </div> : <section className="wrapper">
                <div style={{ maxWidth: "200px", margin: "100px auto", textAlign: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><rect x="5" y="5" width="53.97" height="69.95" rx="7" ry="7" fill="#e3e7fe" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></rect><path d="M51.66,15H22.4A7.22,7.22,0,0,0,15,22V78a7.21,7.21,0,0,0,7.41,7H61.56A7.2,7.2,0,0,0,69,78V30.5Z" fill="#fff" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline points="68.96 30.98 51.97 30.91 51.97 15.99" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line x1="23" y1="34" x2="44" y2="34" fill="none" stroke="#c4cefe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><line x1="23" y1="42" x2="57" y2="42" fill="none" stroke="#c4cefe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><line x1="23" y1="50" x2="57" y2="50" fill="none" stroke="#c4cefe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><line x1="23" y1="58" x2="32" y2="58" fill="none" stroke="#c4cefe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><ellipse cx="61.1" cy="61.11" rx="23.9" ry="23.89" fill="#fff" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></ellipse><polygon points="69.56 74.43 47.7 52.84 52.46 48.15 74.32 69.74 69.56 74.43" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><line x1="54.98" y1="51.16" x2="54.22" y2="51.91" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><line x1="57.62" y1="53.77" x2="55.59" y2="55.78" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><line x1="71.22" y1="67.2" x2="70.46" y2="67.95" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><line x1="68.87" y1="64.88" x2="66.84" y2="66.89" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><path d="M69.55,48.21l5,4.89L55.42,72H51V67.6Z" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line x1="65.67" y1="52.24" x2="70.35" y2="56.86" fill="none" stroke="#6576ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line></svg>
                  <p style={{ margin: "10px auto", fontSize: "19px" }}>No Coupon Found</p>
                </div>
              </section>
            }
          </div>
        </div>

      </div>

      {couponDiscount <= 0 && <div data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav-coupon" className="coupon_section_apply_now_button">
        <div className="icon_apply_coupon_icon_container">
          <div>
            <MdOutlineDiscount style={{ transform: "scale(1.5)" }} />
          </div>
          <div className="apply_coupon_see_coupon_inside_container">
            {couponDiscount <= 0 ? <span style={{ fontSize: "16px" }}>Apply Coupon</span> : <span style={{ fontSize: "16px" }}>Coupon Applied</span>}
            {couponDiscount <= 0 ? <span style={{ fontSize: "11px", color: "green" }}>See Coupon inside to Save Extra</span> : <span style={{ fontSize: "11px", color: "red" }}>Remove Coupon</span>}
          </div>
          <div>
            {couponDiscount > 0 && <RxCross2 style={{ transform: "scale(1.7)" }} />}
            {couponDiscount <= 0 && <FaAngleRight style={{ transform: "scale(1.5)" }} />}
          </div>

        </div>
      </div>}
      {
        couponDiscount > 0 && <div className="coupon_section_apply_now_button" onClick={() => {
          resetPablaeAmountAndCouponDiscount()
        }}>
          <div className="icon_apply_coupon_icon_container">
            <div>
              <MdOutlineDiscount style={{ transform: "scale(1.5)" }} />
            </div>
            <div className="apply_coupon_see_coupon_inside_container">
              {couponDiscount <= 0 ? <span style={{ fontSize: "16px" }}>Apply Coupon</span> : <span style={{ fontSize: "16px" }}>Coupon Applied</span>}
              {couponDiscount <= 0 ? <span style={{ fontSize: "11px", color: "green" }}>See Coupon inside to Save Extra</span> : <span style={{ fontSize: "11px", color: "red" }}>Remove Coupon</span>}
            </div>
            <div>
              {couponDiscount > 0 && <RxCross2 style={{ transform: "scale(1.7)" }} />}
              {couponDiscount <= 0 && <FaAngleRight style={{ transform: "scale(1.5)" }} />}
            </div>

          </div>
        </div>
      }
    </div>
  )
}

export default memo(SidebarCouponViewModel)