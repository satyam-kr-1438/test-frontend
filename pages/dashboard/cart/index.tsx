import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { addPackagesToCart, addPackagesToWishlist, getCartPackages } from 'components/request/request';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { useRouter } from 'next/router';

const Cart: NextPage = () => {
  const [packages,setPackages]=useState<Array<any[]>>([])
   const [loading,stLoading]=useState(true)
   const [currency,setCurrency]=useState<any>("INR")
   const router=useRouter()
   const getCratPackagesDetail=async ()=>{
    try{
      let id=getAuthenticatedUserData()?.id
      let query=`user_id=${id}`
      const {data}=await getCartPackages(query)
      if(data && data?.data){
        setPackages(data?.data)
        setTimeout(()=>{
          stLoading(false)
        },200)
      }
      else{
        setTimeout(()=>{
          stLoading(false)
        },200)
      }
 }catch(err){
  setTimeout(()=>{
    stLoading(false)
  },200)
 }
   }
   const addToCartPackages=async (packageId:any)=>{
    try{
        let user_id=getAuthenticatedUserData()?.id
        const {data}=await addPackagesToCart(user_id,packageId)
        if(data?.success){
            SuccessMessage(data?.message)
            getCratPackagesDetail()
        }else{
           ErrorMessage("Please try again.")
        }
    }catch(err){
        router.push("/dashboard/home")
    }
}

const addToWishlistPackages=async (packageId:any)=>{
    try{
        let user_id=getAuthenticatedUserData()?.id
        const {data}=await addPackagesToWishlist(user_id,packageId)
        if(data?.success){
            SuccessMessage(data?.message)
            router.push("/dashboard/favourite")
        }else{
           ErrorMessage("Please try again.")
        }
    }catch(err){
        router.push("/dashboard/home")
    }
}
   useEffect(()=>{
       getCratPackagesDetail()
   },[]) 
  return (
    <Fragment>
               <header className="wrapper bg-soft-primary">
                  <DashboardNavbar
                      // info
                      navOtherClass="navbar-other ms-lg-4"
                      navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                      button={<DashboardNavbarModal/>}
                      />
               </header>
               {
                 loading ? <Loading/>: <>
                         <main className="mb-14">
                                <section className="wrapper quiz_start_background_main py-5">
                                  <div className="container pt-0 pt-lg-5">
                                    <div className="row gy-10">
                                      <div className="col-lg-9 col-md-12 col-12 order-1">
                                        <div className="row gx-md-4 gy-4 gy-md-4 mb-10">
                                                            {packages?.length>0 && <div className="col-12">
                                                                  <div style={{width:"200px",textAlign:"center",margin:"auto"}}>
                                                                      <button style={{background:`${currency=="INR"?"#2783fd":"#b4b4b4"}`,border:"none",outline:"none",color:"white",padding:"5px 20px"}} onClick={()=>{
                                                                        setCurrency("INR")
                                                                      }}>INR</button>
                                                                      <button style={{background:`${currency=="USD"?"#2783fd":"#b4b4b4"}`,border:"none",outline:"none",color:"white",padding:"5px 20px"}} onClick={()=>{
                                                                        setCurrency("USD")
                                                                      }}>USD</button>
                                                                  </div>
                                                            </div>}
                                            <div className="col-12">
                                                
                                                  {
                                                    packages?.length>0 ? packages?.map((item:any,index:any)=>{
                                                      return <div className="card my-4" key={index}>
                                                                      <div className="py-3 px-2 cart_package_main_container">
                                                                            
                                                                            <div className="exam_section_second_section">
                                                                                <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center"}}>
                                                                                    <div className="d-none d-md-block">
                                                                                      <img src={item?.thumbnail} className="cart_quizzes_image_section" alt="Salesforce"/>
                                                                                    </div>
                                                                                    <div className="exam_section_second_section_section1 mx-2">
                                                                                      <h6 style={{fontSize:"14px"}}>{item?.name}</h6>
                                                                                      <div className="exam_section_second_section2">
                                                                                    <div className="exam_section_second_section2_icon_content">
                                                                                        <FaRegHeart style={{transform:"scale(0.7)"}}/>
                                                                                        <span style={{marginLeft:"2px",display:"inline-block",cursor:"pointer"}} onClick={()=>{
                                                                                          addToWishlistPackages(item?.id)
                                                                                        }}>Move to Wishlist</span>
                                                                                    </div>
                                                                                    <div className="exam_section_second_section2_icon_content" style={{marginLeft:"10px"}}>
                                                                                        <MdDeleteOutline style={{transform:"scale(0.7)"}}/>
                                                                                        <span style={{marginLeft:"2px",display:"inline-block",cursor:"pointer"}}  onClick={()=>{
                                                                                          addToCartPackages(item?.id)
                                                                                        }}>Remove</span>
                                                                                    </div>
                                                                                </div>
                                                                                    </div>

                                                                                </div>
                                                                              
                                                                                
                                                                            </div>
                                                                            <div>
                                                                                <div className="quiz_cart_section4_container">
                                                                                    <h6>{currency=="INR"?"INR":"USD"} {currency=="INR"?item?.price_inr:item?.price_usd}</h6>
                                                                                  </div>                                                    

                                                                            </div>
                                                                      </div>
                                                              </div>
                                                    }):<ContentNotFound button_text="Back to Home" to="/dashboard/home"/>
                                                  }
                                            </div>
                                        </div>
                                      </div>

                                    {packages?.length>0 &&  <div className="col-lg-3 col-md-12 col-12 order-2">
                                        <div className="row gx-md-4 gy-4 gy-md-4 mb-10">
                                          <div className="col-12">
                                                <div className="card py-3 px-3 cart_checkout_price_section">
                                                    <div className="cart_price_checkout_section1">
                                                        <p>Total:</p>
                                                    </div>
                                                    <div className="cart_price_checkout_section2">
                                                        <h5>{currency=="INR"?"INR":"USD"} {currency=="INR"?packages?.map((item:any)=>Number(item?.price_inr))?.reduce((curr,pre)=>pre+curr,0):packages?.map((item:any)=>Number(item?.price_usd))?.reduce((curr,pre)=>pre+curr,0)}</h5>
                                                    </div>
                                                    {/* <div className="cart_price_checkout_section3">
                                                        <button>Checkout</button>
                                                    </div> */}
                                                </div>
                                          </div>
                                            
                                        </div>
                                      
                                      </div>}
                                    </div>
                                  </div>
                                </section>
                         </main>
                  </>
               }
              <footer className="footer_container_dashboard_content">
                <DashboardFooter/>
              </footer>
          

    </Fragment>
  );
};

export default Cart;
