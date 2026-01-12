import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import Filter from 'components/common/Filter';

import Pagination from 'components/reuseable/Pagination';

import { ProductCard } from 'components/reuseable/product-cards';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import { getAllCoursesSubject, getPackages, getWishlistPackages } from 'components/request/request';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { useSelector } from 'react-redux';

const WishList: NextPage = () => {
  const [activePage,setActivePage]=useState(1)
  const [total,setTotal]=useState(1)
  const [packages,setPackages]=useState<Array<any[]>>([])
  const [totalPage,setTotalPage]=useState<any>(1)
  const [pageArr,setPageArr]=useState<Array<number[]>>([])
  const [subjects,setSubjects]=useState<Array<any[]>>([])
  const [category,setCategory]=useState<any>(undefined)
  const [currency,setCurrency]=useState<string>("INR")
  const [loading,stLoading]=useState(true)
  const [startPrice,setStartPrice]=useState(undefined)
  const [endPrice,setEndPrice]=useState(undefined)
  const {premiumPackages}:any=useSelector((state:any)=>state?.reducerSlice)

  const getAllPackages=async ()=>{
    try{
      let id=getAuthenticatedUserData()?.id
      let query=`page=${activePage}&items_per_page=6&category=${category}&currency=${currency}&startPrice=${startPrice}&endPrice=${endPrice}&user_id=${id}`
      const {data}=await getWishlistPackages(query)
      if(data && data?.data){
        setTotal(data?.payload?.pagination?.total)
        setTotalPage(Math.ceil(data?.payload?.pagination?.total/6))
        let temp:any=[]
        for(let i=0;i<Math.ceil((data?.payload?.pagination?.total/6));i++){
           temp.push(i+1)
           setPageArr(temp)
        }
        let finallizeData = data?.data.slice().sort((a:any, b:any) => {
          if (a.featured > b.featured) {
            return -1
          } else if (a.featured == b.featured) {
            if (a.id > b.id) {
              return -1
            } else {
              return 0
            }
          }
        })
        setPackages(finallizeData)
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
   const getAllSubjects=async ()=>{
    const {data}=await getAllCoursesSubject()
    setSubjects(data)
 }
 
 useEffect(()=>{
   getAllSubjects()
 },[])
   useEffect(()=>{
      getAllPackages()
   },[activePage,category,startPrice,endPrice,currency])
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
                      <section className="wrapper bg-light">
                        <div className="container pt-0 pt-lg-5">
                          <div className="row gy-10">
                            <div className="col-lg-9 order-lg-2">
                              <div className="row gx-md-4 gy-md-4 mt-4 mb-4">
                                          <div className="col-12">
                                              <div className="row mb-4">
                                                  <div className="col-12">
                                                      {packages?.length>0 && <div style={{width:"200px",textAlign:"center",margin:"auto"}}>
                                                            <button style={{background:`${currency=="INR"?"#2783fd":"#b4b4b4"}`,border:"none",outline:"none",color:"white",padding:"5px 20px"}} onClick={()=>{
                                                              setCurrency("INR")
                                                            }}>INR</button>
                                                            <button style={{background:`${currency=="USD"?"#2783fd":"#b4b4b4"}`,border:"none",outline:"none",color:"white",padding:"5px 20px"}} onClick={()=>{
                                                              setCurrency("USD")
                                                            }}>USD</button>
                                                        </div>}
                                                  </div>
                                              </div>
                                                <div className="row mx-1 gy-5">
                                                    {
                                                        packages?.length>0 ? packages.map((item:any,index:number) => {
                                                          return <Fragment key={index}>
                                                                      <ProductCard  itemKey={index} currency={currency} {...item} packageKey={item?.hash} className="col-lg-10 col-12" premiumPackages={premiumPackages} />
                                                                </Fragment>
                                                        }
                                                        ):<ContentNotFound button_text="" to=""/>
                                                  }
                                              </div>
                                  </div>
                              </div>
                              {packages?.length>0 && <Pagination  total={total} activePage={activePage} totalPage={totalPage} pageArr={pageArr} setActivePage={setActivePage}/>}
                            </div>
                            <Filter  subjects={subjects} setCategory={setCategory} setActivePage={setActivePage} currency={currency} setStartPrice={setStartPrice} setEndPrice={setEndPrice} startPrice={startPrice} endPrice={endPrice}/>
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

export default WishList;
