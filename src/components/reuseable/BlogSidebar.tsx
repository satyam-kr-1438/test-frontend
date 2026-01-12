import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, Fragment, useState } from 'react';
import FigureImage from './FigureImage';
import NextLink from 'components/reuseable/links/NextLink';

const BlogSidebar: FC<any> = ({handleCategory,blogCount,latestBlog}) => {
  const [serachItem,setSearchItem]=useState("")
	const [categoryData,setCategoryData]=useState("View All")

  return (
    <Fragment>

      {/* ========== popular posts section ========== */}
      <div className="widget">
        <h4 className="widget-title mb-3">Popular Posts</h4>

        <ul className="image-list">
          {latestBlog && latestBlog?.map((item:any,index:any) => (
            <li key={index} style={{display:"flex",justifyContent:"flex-start"}}>
              {/* <NextLink title={<FigureImage width={100} height={100} className="rounded" src={item?.thumbnail} />} href={`/blog/${item?.slug}`} /> */}
              <img width={80} height={70} style={{objectFit:"cover",overflow:"hidden"}} className="rounded" src={item?.image}/>

              <div className="post-content">
                <h6 className="mb-2">
                  <NextLink className="link-dark" title={`${item?.title?.substring(0,18)}...`} href={`/blog/${item?.slug}`} />
                </h6>

                <ul className="post-meta">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt" />
                    <span>{dayjs(item?.date_time).format('DD MMM YYYY')}</span>
                  </li>

                
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== categories section ========== */}
      {blogCount && <div className="widget">
        <h4 className="widget-title mb-3">Categories</h4>

        <ul className="unordered-list bullet-primary text-reset">
          {blogCount && blogCount.map((item:any,index:any) => (
            <li key={index}>
              {/* <NextLink title={`${item?.name} (${post})`} href={url} /> */}
               <a href="#" onClick={(e:any)=>{
                  e?.preventDefault()
                  setCategoryData(item.name)
									handleCategory(item.name,serachItem?.trim()?.length>0 ? serachItem?.trim():"")
               }}
               >
                 <span style={{color:`${categoryData===item?.name?"#2783fd":"black"}`}}>{item?.name}{" "}({item?.count})</span>
               </a>
            </li>
          ))}
        </ul>
      </div>}

    </Fragment>
  );
};

export default BlogSidebar;
