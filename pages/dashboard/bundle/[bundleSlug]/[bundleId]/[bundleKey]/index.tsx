import { NextPage } from 'next';
import { FormEvent, Fragment, useEffect, useMemo, useState } from 'react';
import { LuFileQuestion } from "react-icons/lu";
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import { useRouter } from 'next/router';
import { checkUserProfileStatus, getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { addPackagesToCart, addPackagesToWishlist, findExamWhichIsAlreadyGiven, getBundlePackagesUsingKeyAndSlug, getPackageUsingKeyAndSlug, initializedExamStatus } from 'components/request/request';
import { ErrorMessage, SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { BiLock } from "react-icons/bi";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import BuyNowComponent from 'components/dashboardComponent/common/BuyNowComponent';
import { useSelector } from 'react-redux';

const BundleDetail: NextPage = () => {
  const [loading,setLoading]=useState<boolean>(true)
  const [bundleDetail,setBundleDetail]=useState<any>(undefined)
  const [packageDetail,setPackageDetail]=useState<any[]>([])
  const [subPackageDetail,setSubPackageDetail]=useState<any[]>([])
  const [subPackageExam,setSubPackagesExam]=useState<any[]>([])
  const [examTab,setExamTab]=useState(1)
  const [selectedPackageId,setSelectedPackageId]=useState<any>(null)
  const [selectedSubPackageId,setSelectedSubPackageId]=useState<any>(null)
  const [buyNowSection,setBuyNowSection]=useState<boolean>(false)
  const {premiumPackages}:any=useSelector((state:any)=>state?.reducerSlice)
  const [premium,setPremium]=useState(false)
  const [givenExam,setGivenExam]=useState<any[]>([])
  const [examAlreadyStarted,setExamAlreadyStarted]=useState<any[]>([])

  const router=useRouter()
  const memoizedBuyComponent=useMemo(()=>{
     if(bundleDetail && bundleDetail?.id){
        return <BuyNowComponent packageDetail={bundleDetail} type="Bundle"/>
     }
  },[bundleDetail,setBundleDetail])
  const findExamWhichIsAlreadyGivenFun=async ()=>{
    try{
        const {data}=await findExamWhichIsAlreadyGiven({
            packageid:null,
            bundleid:router.query.bundleId,
            userid:getAuthenticatedUserData()?.id
        })
        if(data?.success){
          setGivenExam(data?.data)
          setExamAlreadyStarted(data?.findExamStatusStarted)
        }
    }catch(err){

    }
}
  useEffect(()=>{
      if(premiumPackages && premiumPackages?.length>0 && bundleDetail){
        premiumPackages?.find((item:any)=>{
            if(item?.passid && bundleDetail?.premiumType==0){
                setPremium(true)
            }
            else if(item?.packageid && item?.packageid==bundleDetail?.id && bundleDetail?.type=="Package"){
               setPremium(true)
            }else if(item?.bundleid && item?.bundleid==bundleDetail?.id && bundleDetail?.type=="Bundle"){
               setPremium(true) 
            }
         })
      }
      if(router?.query?.bundleId){
        findExamWhichIsAlreadyGivenFun()
      }
  },[useSelector,premiumPackages,bundleDetail,router])


   const getPackageDetail=async ()=>{ 
        try{
        if(router?.query?.bundleId && router?.query?.bundleKey){
            let user_id=getAuthenticatedUserData()?.id
            const {data}=await getBundlePackagesUsingKeyAndSlug(router?.query?.bundleId,router?.query?.bundleKey,user_id)
            if(data?.success){
                setBundleDetail(data?.bundle)
                setPackageDetail(data?.bundlePackages?.slice())
                setSelectedPackageId(data?.bundlePackages?.slice()[0]?.id)
                setSubPackageDetail(data?.subPackages?.slice())
                setSelectedSubPackageId(data?.subPackages?.slice()[0]?.id)
                setSubPackagesExam(data?.subPackageExam)
                setTimeout(()=>{
                    setLoading(false)
                },200)
            }else{
                router.push("/dashboard/home")
            }
            }
        }catch(err){
            ErrorMessage("Unauthorized Access")
            router.push("/dashboard/home")
        }       
   }

    useEffect(()=>{
    if(router?.query?.bundleId && router?.query?.bundleKey){
        getPackageDetail()
    }
    },[router])
    



  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
                           <main className="" style={{marginBottom:"50px"}}>
                                    <section className="wrapper bg-light">
                                            {buyNowSection?<>
                                                {
                                                    memoizedBuyComponent
                                                }
                                            </>:<div className="container pt-5 py-md-5 py-lg-10">
                                                <div className="row gx-md-8 gx-xl-12 gy-8">
                                                
                                                <div className={`${ premium ?"col-lg-12 col-md-12 order-md-2 order-2 order-lg-1":"col-lg-8 col-md-12 order-md-2 order-2 order-lg-1"}`}>
                                                    <div>
                                                        <div>
                                                            {bundleDetail?.name}
                                                        </div>

                                                        <div className="card my-4">
                                                            <div className="px-2 d-flex justify-content-start align-items-center" style={{overflowX:"scroll"}}>
                                                                {
                                                                packageDetail?.length>0 && packageDetail?.map((item:any,index:any)=>{
                                                                        return  <div key={index} className={`${selectedPackageId==item?.id?"subPackage_styling_selected":"subPackage_styling_not_selected"}`}>
                                                                        <p onClick={()=>{
                                                                            setSelectedPackageId(item?.id)
                                                                            if(subPackageDetail?.length>0){
                                                                            let data=subPackageDetail?.filter((item2:any)=>{
                                                                                return item2?.subpackages?.some((item3:any)=>item3?.packageid==item?.id)
                                                                            })
                                                                            setSelectedSubPackageId(data[0]?.id)
                                                                            }
                                                                            
                                                                        }}>{item?.name}</p>
                                                                    </div>
                                                                })
                                                                }                                                       
                                                            </div>
                                                        </div>

                                                        <div className="card my-4">
                                                            <div className="px-2 d-flex justify-content-start align-items-center" style={{overflowX:"scroll"}}>
                                                                {
                                                                subPackageDetail?.length>0 && subPackageDetail?.filter((item:any)=>{
                                                                        return item?.subpackages?.find((item2:any)=>item2?.packageid==selectedPackageId)
                                                                    //     return  <div key={index} className={`${selectedPackageId==item?.id?"subPackage_styling_selected":"subPackage_styling_not_selected"}`}>
                                                                    //     <p onClick={()=>{
                                                                    //         // setExamTab(index+1)
                                                                    //         setSelectedPackageId(item?.id)
                                                                    //     }}>{item?.name}</p>
                                                                    // </div>
                                                                })?.map((item3:any,index)=>{
                                                                    return  <div key={index} className={`${selectedSubPackageId==item3?.id?"subPackage_styling_selected":"subPackage_styling_not_selected"}`}>
                                                                        <p onClick={()=>{
                                                                            // setExamTab(index+1)
                                                                            setSelectedSubPackageId(item3?.id)
                                                                        }}>{item3?.name}</p>
                                                                    </div>
                                                                })
                                                                }                                                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                        subPackageExam?.length>0 && subPackageExam?.filter((item2:any)=>{
                                                            return item2?.exams?.find((item3:any)=>item3?.subpackageid==selectedSubPackageId)?.subpackageid==selectedSubPackageId
                                                        })?.length>0 ?  subPackageExam?.filter((item2:any)=>{
                                                            return item2?.exams?.find((item3:any)=>item3?.subpackageid==selectedSubPackageId)?.subpackageid==selectedSubPackageId
                                                        })?.map((item:any,index:any)=>{
                                                            return  <div key={index} className="card my-4">
                                                            <div className="py-3 px-2 exam_subpackage_main_container">
                                                                <div className="exam_section_second_section">
                                                                    <div className="exam_section_second_section_section1" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                                        <h6>{item?.name}</h6>
                                                                        {item?.exams?.find((item3:any)=>item3?.subpackageid==selectedSubPackageId)?.type=="Free" && <span className="free_paid_button_exam_subPackage">Free</span>}
                                                                        {item?.exams?.find((item3:any)=>item3?.subpackageid==selectedSubPackageId)?.type=="Premium" && <span className="free_paid_button_exam_subPackage2">Premium</span>}
                                                                    </div>
                                                                    <div className="exam_section_second_section2">
                                                                        <div className="exam_section_second_section2_icon_content">
                                                                            <LuFileQuestion style={{transform:"scale(0.7)"}}/>
                                                                            <span>{item?.total_questions} Questions</span>
                                                                        </div>
                                                                        <div className="exam_section_second_section2_icon_content" style={{marginLeft:"10px"}}>
                                                                            <BsFileEarmarkSpreadsheet style={{transform:"scale(0.7)"}}/>
                                                                            <span>{item?.total_marks} Marks</span>
                                                                        </div>
                                                                        <div className="exam_section_second_section2_icon_content" style={{marginLeft:"10px"}}>
                                                                            <IoMdTimer style={{transform:"scale(0.7)"}}/>
                                                                            <span>{item?.exam_duration} Minutes</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div style={{display:"flex"}}>
                                                                    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",marginRight:"10px"}}>
                                                                        {givenExam?.length>0 && givenExam?.find((itemm:any)=>itemm?.bundleid==bundleDetail?.id && itemm?.packageid==selectedPackageId && itemm?.subpackageid==selectedSubPackageId && itemm?.examid==item?.id) && <span style={{fontSize:"12px",cursor:'Pointer',color:"#3f78e0"}} onClick={()=>{
                                                                                router.push(`/dashboard/bundle/exams/solution/${bundleDetail?.id}/${selectedPackageId}/${selectedSubPackageId}/${item?.id}/${item?.key}`)
                                                                            }}>
                                                                                View Solution
                                                                            </span>}
                                                                            {givenExam?.length>0 && givenExam?.find((itemm:any)=>itemm?.bundleid==bundleDetail?.id && itemm?.packageid==selectedPackageId && itemm?.subpackageid==selectedSubPackageId && itemm?.examid==item?.id) && <span style={{fontSize:"12px",cursor:'Pointer',color:"#3f78e0"}} onClick={()=>{
                                                                                router.push(`/dashboard/bundle/exams/report/${bundleDetail?.id}/${selectedPackageId}/${selectedSubPackageId}/${item?.id}/${item?.key}`)
                                                                            }}>
                                                                                View Report
                                                                            </span>}                                                           
                                                                    </div>
                                                                    {item?.exams?.find((item3:any)=>item3?.subpackageid==selectedSubPackageId)?.type=="Free" && <button className="btn btn-outline-primary btn-sm exam_subPackage_strt_now_button" onClick={async ()=>{
                                                                        try{
                                                                            if(checkUserProfileStatus()){
                                                                                // setBuyNowSection(true)
                                                                                if(item && packageDetail && selectedSubPackageId){
                                                                                    const {data}=await initializedExamStatus({
                                                                                        userid:getAuthenticatedUserData()?.id,
                                                                                        bundleid:bundleDetail?.id,
                                                                                        packageid:selectedPackageId,
                                                                                        subpackageid:selectedSubPackageId,
                                                                                        examid:item?.id,
                                                                                        total_questions:item?.total_questions
                                                                                    })
                                                                                    if(data?.success){
                                                                                        router.push(`/dashboard/bundle/exams/instructions/${bundleDetail?.id}/${selectedPackageId}/${selectedSubPackageId}/${item?.id}/${item?.key}`)
                                                                                    }else{
                                                                                        ErrorMessage(data?.message)
                                                                                    }
                                                                            }
                                                                            }else{
                                                                                ErrorMessage("Please Complete your Profile.")
                                                                                router.push("/dashboard/profile")
                                                                            }
                                                                        }catch(err){

                                                                        }
                                                                    }}>
                                                                         {
                                                                             examAlreadyStarted?.find((itemData:any)=>itemData?.bundleid==bundleDetail?.id && itemData?.packageid==selectedPackageId && itemData?.subpackageid==selectedSubPackageId && itemData?.examid==item?.id)?"Restart Now":"Start Now"
                                                                         }</button>}
                                                                    { 
                                                                    item?.exams?.find((item3:any)=>item3?.subpackageid==selectedSubPackageId)?.type=="Premium" &&
                                                                    premium ?<button className="btn btn-outline-primary btn-sm exam_subPackage_strt_now_button" onClick={async ()=>{
                                                                        try{
                                                                            if(checkUserProfileStatus()){
                                                                                // setBuyNowSection(true)
                                                                                if(item && packageDetail && selectedSubPackageId){
                                                                                    const {data}=await initializedExamStatus({
                                                                                        userid:getAuthenticatedUserData()?.id,
                                                                                        bundleid:bundleDetail?.id,
                                                                                        packageid:selectedPackageId,
                                                                                        subpackageid:selectedSubPackageId,
                                                                                        examid:item?.id,
                                                                                        total_questions:item?.total_questions
                                                                                    })
                                                                                    if(data?.success){
                                                                                        router.push(`/dashboard/bundle/exams/instructions/${bundleDetail?.id}/${selectedPackageId}/${selectedSubPackageId}/${item?.id}/${item?.key}`)
                                                                                    }else{
                                                                                        ErrorMessage(data?.message)
                                                                                    }
                                                                            }
                                                                            }else{
                                                                                ErrorMessage("Please Complete your Profile.")
                                                                                router.push("/dashboard/profile")
                                                                            }
                                                                        }catch(err){

                                                                        }
                                                                    }}>
                                                                        {
                                                                             examAlreadyStarted?.find((itemData:any)=>itemData?.bundleid==bundleDetail?.id && itemData?.packageid==selectedPackageId && itemData?.subpackageid==selectedSubPackageId && itemData?.examid==item?.id)?"Restart Now":"Start Now"
                                                                        }
                                                                    </button>
                                                                    :item?.exams?.find((item3:any)=>item3?.subpackageid==selectedSubPackageId)?.type=="Premium" && 
                                                                    <button className="btn btn-outline-secondary btn-sm exam_subPackage_strt_now_button" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} onClick={()=>{
                                                                        if(checkUserProfileStatus()){
                                                                            setBuyNowSection(true)
                                                                        }else{
                                                                            ErrorMessage("Please Complete your Profile.")
                                                                            router.push("/dashboard/profile")
                                                                        }
                                                                    }}>
                                                                        <BiLock style={{transform:"scale(1.2)"}}/>
                                                                        &nbsp;Unlock Now
                                                                    </button>}

                                                                </div>
                                                            </div>
                                                        </div>
                                                        }):<>
                                                            <div className="row mx-auto text-center my-5">
                                                                                    <div>
                                                                                        <img src="/img/notAvailable.png" style={{maxWidth:"250px",textAlign:"center",margin:"auto"}} alt="Not Available"/>
                                                                                    </div>
                                                                                    <div className="my-4">
                                                                                        <h5>Content you are looking for isn't available at this moment</h5>
                                                                                    </div>
                                                            </div>
                                                        </>
                                                        }

                                                    </div>
                                                    
                                                </div>

                                            { !premium &&  <div className="col-lg-4 col-md-12 quizzes_sticky_container3" id="">
                                                    <div className="card p-4">
                                                        
                                                            <div className="post-header mb-5">
                                                            <h5 className="post-title display-5" style={{fontSize:"24px"}}>
                                                                <a href="#" className="link-dark">
                                                                {bundleDetail?.name}
                                                                </a>
                                                            </h5>

                                                            <p className="price mb-2">
                                                            <del>
                                                                <span className="amount" style={{fontSize:"15px"}}>${bundleDetail?.price_usd*12}</span>
                                                                </del>{' '}<span className="amount" style={{fontSize:"15px"}}>${bundleDetail?.price_usd}</span>
                                                            </p>
                                                            
                                                            <p className="text-danger " style={{margin:"2px 0px 2px 0px",fontSize:"13px"}}>1 day left at this price</p>

                                                            <a href="#" className="link-body ratings-wrapper">
                                                                <span className="ratings four" />
                                                                <span>(3 Reviews)</span>
                                                            </a>
                                                            </div>

                                                            <p className="mb-6" style={{fontSize:"12px"}}>
                                                                {bundleDetail?.description?.length>120?`${bundleDetail?.description?.substring(0,120)}...`:bundleDetail?.description}
                                                            </p>

                                                            <form onSubmit={handleFormSubmit}>
                                                                <div className="row">
                                                                    <div className="col-lg-12 pt-2 quizzes_detail_button_container">
                                                                    
                                                                    { !premium && <div className="mx-2 buy_not_add_to_cart_button_container">
                                                                        {/* <div style={{marginBottom:"10px",width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start"}}> 
                                                                            <button
                                                                            className="add_to_cart"
                                                                            onClick={()=>{
                                                                                addToCartPackages()
                                                                            }}
                                                                            >
                                                                            <span>{bundleDetail?.carts[0]?.id?"Remove from Cart":"Add to Cart"}</span>
                                                                            </button>
                                                                            <span data-tooltip-id="my-tooltip-1" style={{marginLeft:"20px",border:"1px solid black",borderRadius:"5px",padding:"3px 10px"}} onClick={()=>{
                                                                                addToWishlistPackages()
                                                                            }}>
                                                                                <FaRegHeart style={{transform:"scale(1.5)",color:`${bundleDetail?.wishlists[0]?.id?"red":"black"}`,cursor:"pointer"}}/>
                                                                                <ReactTooltip
                                                                                    id="my-tooltip-1"
                                                                                    place="bottom"
                                                                                    content={bundleDetail?.wishlists[0]?.id?"Remove from Wishlist":"Add to Wishlist"}
                                                                                />
                                                                            </span>
                                                                        </div>                                 */}
                                                                        <div style={{width:"100%",marginBottom:"10px"}}>
                                                                            <button
                                                                            className="add_buy_now"
                                                                            onClick={()=>{
                                                                                if(checkUserProfileStatus()){
                                                                                    setBuyNowSection(true)
                                                                                }else{
                                                                                    ErrorMessage("Please Complete your Profile.")
                                                                                    router.push("/dashboard/profile")
                                                                                }
                                                                            }}
                                                                            >
                                                                            <span>Checkout</span>
                                                                            </button>
                                                                        </div>
                                                                        
                                                                    </div>}
                                                                    </div>
                                                                </div>
                                                            </form>
                                                    </div>
                                                </div>}
                                                </div>

                                                { !premium  && <div className="col-lg-4 col-md-12 quizzes_sticky_container2" id="">
                                                    <div className="card p-4" style={{marginBottom:"100px"}}>
                                                            <div className="d-none">
                                                                <img src={bundleDetail?.image} style={{width:"100%",textAlign:"center",margin:"auto"}} alt="Quizzes"/>
                                                            </div>
                                                            <div className="post-header mb-5">
                                                            <h5 className="post-title display-5" style={{fontSize:"24px"}}>
                                                                <a href="#" className="link-dark">
                                                                {bundleDetail?.name}
                                                                </a>
                                                            </h5>

                                                            <p className="price mb-2">
                                                            <del>
                                                                <span className="amount" style={{fontSize:"15px"}}>$${bundleDetail?.price_usd*12}</span>
                                                                </del>{' '}<span className="amount" style={{fontSize:"15px"}}>${bundleDetail?.price_usd}</span>
                                                            </p>
                                                            <p className="text-danger " style={{margin:"2px 0px 2px 0px",fontSize:"13px"}}>1 day left at this price</p>

                                                            <a href="#" className="link-body ratings-wrapper">
                                                                <span className="ratings four" />
                                                                <span>(3 Reviews)</span>
                                                            </a>
                                                            </div>

                                                            <p className="mb-6" style={{fontSize:"12px"}}>
                                                            {bundleDetail?.description?.length>120?`${bundleDetail?.description?.substring(0,120)}...`:bundleDetail?.description}
                                                            </p>

                                                            <form onSubmit={handleFormSubmit}>

                                                            <div className="row">
                                                                <div className="col-lg-9 pt-2 quizzes_detail_button_container">
                                                                
                                                                {!premium && <div className="mx-2 buy_not_add_to_cart_button_container">
                                                                    {/* <div style={{marginBottom:"10px",width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start"}}> 
                                                                        <button
                                                                        className="add_to_cart"
                                                                        onClick={()=>{
                                                                            addToCartPackages()
                                                                        }}
                                                                        >
                                                                        <span>{bundleDetail?.carts[0]?.id?"Remove from Cart":"Add to Cart"}</span>
                                                                        </button>
                                                                        <span data-tooltip-id="my-tooltip-1" style={{marginLeft:"20px",border:"1px solid black",borderRadius:"5px",padding:"3px 10px"}} onClick={()=>{
                                                                            addToWishlistPackages()
                                                                        }}>
                                                                        <FaRegHeart style={{transform:"scale(1.5)",color:`${bundleDetail?.wishlists[0]?.id?"red":"black"}`,cursor:"pointer"}}/>
                                                                        <ReactTooltip
                                                                                id="my-tooltip-1"
                                                                                place="bottom"
                                                                                content={bundleDetail?.wishlists[0]?.id?"Remove from Wishlist":"Add to Wishlist"}
                                                                            />
                                                                        </span>
                                                                    </div>                                 */}
                                                                    <div style={{width:"100%",marginBottom:"10px"}}>
                                                                        <button
                                                                        className="add_buy_now"
                                                                        onClick={()=>{
                                                                            if(checkUserProfileStatus()){
                                                                                setBuyNowSection(true)
                                                                            }else{
                                                                                ErrorMessage("Please Complete your Profile.")
                                                                                router.push("/dashboard/profile")
                                                                            }
                                                                        
                                                                        }}
                                                                        >
                                                                    
                                                                        <span>Checkout</span>
                                                                        </button>
                                                                    </div>
                                                                    
                                                                </div>}
                                                                </div>
                                                            </div>
                                                            </form>
                                                    </div>
                                                </div>}
                                            </div>}
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

export default BundleDetail;
