import { NextPage } from 'next';
import { FormEvent, Fragment, useEffect, useState } from 'react';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import CouponCard from 'components/reuseable/product-cards/CouponCard';
import { ErrorMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { getAllCoupon } from 'components/request/request';
import useAuthorization from 'hooks/useAuthorization';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';

const PackageDetail: NextPage = () => {
  const [auth,setAuth]=useAuthorization()
  const [coupon,setCoupon]=useState<any>([])
  const [loading,setLoading]=useState(true)
//   const [scrollView,setScrol]



   const getAllCouponDetail=async ()=>{
    try{
        if(auth && auth?.id && auth?.email){
          const {data}=await getAllCoupon(auth?.id,auth?.email)
          if(data?.success){
            setCoupon(data?.data)
            setTimeout(()=>{
              setLoading(false)
            },200)
          }else{
            setCoupon([])
            setTimeout(()=>{
              setLoading(false)
            },200)
          }
        }
    }catch(err){
      ErrorMessage("Something went wrong.Please try again.")
      setTimeout(()=>{
        setLoading(false)
      },200)
    }
   }
   useEffect(()=>{
       getAllCouponDetail()
   },[auth,setAuth])


  return (
    <Fragment>
      {
        loading? <Loading/>:<>
              {/* ========== header section ========== */}
                <header className="wrapper bg-soft-primary">
                      <DashboardNavbar
                          // info
                          navOtherClass="navbar-other ms-lg-4"
                          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                          button={<DashboardNavbarModal/>}
                      />
                </header>

                <main className="">
                  {/* ========== product info section ========== */}
                  {coupon?.length>0?<section className="wrapper quiz_start_background_main">
                    <div className="container pt-5 py-md-5 py-lg-10">
                        <div className="row gx-md-8 gx-xl-12 my-1 gy-8 mx-auto">
                            {
                              coupon?.map((item:any,index:any)=>{
                                return <CouponCard key={index} item={item}/>
                              })
                            }
                        </div>
                    </div>
                  </section>:<section className="wrapper quiz_start_background_main">
                    <ContentNotFound button_text="Back to Home" to="/dashboard/home"/>
                  </section>}
                </main>

                <footer className="footer_container_dashboard_content">
                  <DashboardFooter/>
                </footer>
        </>
      }
    </Fragment>
  );
};

export default PackageDetail;
