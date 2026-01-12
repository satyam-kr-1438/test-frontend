import { FC, Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import Pagination from 'components/reuseable/Pagination';
import { getBlogs } from 'components/request/request';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import BlogCard from 'components/reuseable/blog-cards/BlogCard';


const BlogTemplate: FC<any> = ({category,search,handleCategory}) => {
  const [blogs,setBlogs]=useState<any>([])
	const [activePage,setActivePage]=useState<any>(1)
  const [total,setTotal]=useState(1)
  const [totalPage,setTotalPage]=useState<any>(1)
  const [pageArr,setPageArr]=useState<Array<number[]>>([])
	const [loading,setLoading]=useState(true)
	const getAllBlogs=async ()=>{
      try{
        const {data}=await getBlogs(activePage,category,search)
        if(data?.success){
          setTotal(data?.count)
          setTotalPage(Math.ceil(data?.count/6))
          let temp:any[]=[]
          for(let i=0;i<Math.ceil((data?.count/6));i++){
             temp.push(i+1)
             setPageArr(temp)
          }
          setBlogs(data?.data)
        }
      }catch(err){

      }
	}
    useEffect(()=>{
        getAllBlogs()
    },[activePage,setActivePage,category,search])
  return (
    <Fragment>
       {
        blogs?.length<=0?
        <div className="blog grid grid-view">
            <div className="row isotope gx-md-8 gy-8 mb-8">
                <ContentNotFound button_text="Back to Home" to="/dashboard/home"/>
            </div>
        </div>
        :<>
                 <div className="blog grid grid-view">
                    <div className="row isotope gx-md-8 gy-8 mb-8">
                      {blogs.map((item:any,index:any) => (
                        <Fragment key={index}><BlogCard {...item} key={index} /></Fragment>
                      ))}
                    </div>
                 </div>
         {/* ========== pagination section ========== */}
         { blogs?.length>0 && <Pagination total={total} activePage={activePage} totalPage={totalPage} pageArr={pageArr} setActivePage={setActivePage}/>}
        </>
       }
    </Fragment>
  );
}

export default BlogTemplate;
