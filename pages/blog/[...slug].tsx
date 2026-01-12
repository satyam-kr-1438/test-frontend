import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import BlogSidebar from 'components/reuseable/BlogSidebar';
import Footer from 'components/blocks/footer/Footer';
import BlogDetailsTemplate from 'components/common/BlogDetailsTemplate';
import AuthNavbar from 'components/blocks/navbar/AuthNavbar';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import { useRouter } from 'next/router';
import { getBlogByIdData } from 'components/request/request';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';

const Blog = () => {
  const [blog,setBlog]=useState<any>()
    const [latestBlog,setlatestBlog]=useState()
    const [loading,setLoading]=useState(true)
    const router=useRouter()
    const getBlogById=async ()=>{
      try{
        const {data}=await getBlogByIdData(router?.query?.slug)
        if(data?.success){
          if(!data?.data){
            setBlog(undefined)
          }
          setBlog(data?.data)
          setlatestBlog(data?.latestBlogData)
          setTimeout(()=>{
            setLoading(false)
          },200)
        }else{
          setBlog(undefined)
           setTimeout(()=>{
            setLoading(false)
          },200)
        }
      }catch(err){
         setBlog(undefined)
          setTimeout(()=>{
            setLoading(false)
          },200)
      }
     
    }
    useEffect(()=>{
      if(router.query.slug !==undefined){
        getBlogById()
      }
    },[router,useRouter])
  return (
    <Fragment>
                 <header className="wrapper bg-soft-primary">
                    {getAuthenticatedUserData()?.id ?  <DashboardNavbar
                                // info
                                navOtherClass="navbar-other ms-lg-4"
                                navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                                button={<DashboardNavbarModal/>}
                                />:<AuthNavbar
                      // info
                      navOtherClass="navbar-other ms-lg-4"
                      navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                      button={
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-signin"
                            className="btn btn-sm btn-primary py-1 px-2"
                            style={{fontWeight:"400",fontSize:"14px"}}
                        >
                           Sign In
                        </a>
                      }
                />}
                 </header>

                   
                  { loading? <Loading/> :                  
                    blog?<>
                        <main className="content-wrapper">
                            {/* ========== title section ========== */}
                            <section className="section-frame overflow-hidden">
                              <div className="wrapper bg-soft-primary">
                                <div className="container py-10 text-center">
                                  <div className="row">
                                    <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                                      <h1 className="display-1 mb-3">Blog</h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>

                            <section className="wrapper bg-light">
                                    <div className="container py-14 py-md-16">
                                      <div className="row gx-lg-8 gx-xl-12">
                                        {/* ========== blog details section ========== */}
                                        <div className="col-lg-8">
                                        <div className="blog classic-view">
                                          <BlogDetailsTemplate blog={blog} />
                                        </div>
                                        </div>

                                        {/* ========== sidebar section ========== */}
                                        <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                                          <BlogSidebar latestBlog={latestBlog}/>
                                        </aside>
                                      </div>
                                    </div>
                            </section>
                        </main>
                    </>:
                    
                    <ContentNotFound button_text="View Blogs" to="/blog"/>
                  }

                  {getAuthenticatedUserData()?.id?<footer className="footer_container_dashboard_content">
                              <DashboardFooter/>
                  </footer>:<Footer />}
    </Fragment>
  );
};

export default Blog;
