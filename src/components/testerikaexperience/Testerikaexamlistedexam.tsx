import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Testerikaexamlistedexam = () => {
    const {subjects,courses,coursesCategory}:any=useSelector((state:any)=>state?.reducerSlice)
    const [selectedCourse,setSelectedCourse]=useState(undefined)
    useEffect(()=>{
      if(coursesCategory?.length>0){
        setSelectedCourse(coursesCategory[0]?.id)
      }
    },[courses])
  return (
    <>
      <section className=" section-spacing  mt-2">
        <div className="width-container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="sub-main purple-submain">| 100% QUALITY COURSES</div>
              <div className="main-title">
                <h2>
                  Choose <span>Your</span> Exam
                </h2>
              </div>
            </div>
            <div className="col-lg-3 mt-3 mb-3">
                <div className='exam-category-listed-here'>
                    <div className="search-bar-exam-category">
                        <div className="inputss-search-categoriess p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height='17' width='17' className='search-icon' fill='#60A37E'  viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                         <input type="text" placeholder='Search exams' className='input-border-none-border-inputs' /> 
                        </div>
                    </div>
                 <ul className="nav nav-tabs display-exam-category p-1" id="myTab" role="tablist">
                  {
                    coursesCategory?.length>0 && coursesCategory?.slice()?.map((item:any,index:number)=>{
                      return <li key={index} className="nav-item" role="presentation" onClick={()=>{
                        setSelectedCourse(item?.id)
                      }}>
                      <button
                        className={item?.id==selectedCourse ? "nav-link active":"nav-link"}
                        id="home-tab"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                       <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                      </svg>
                        {item?.course_category}
                      </button>
                     </li>
                    })
                  }
                 </ul>
                </div>
            </div>
            <div className="col-lg-9 mt-3 mb-3">
              <div className="tab-content" id="myTabContent">


                
                <div className="tab-pane fade show active">
                  <div className="category-listed-exam">
                     {
                      coursesCategory?.length>0 && coursesCategory?.find((item2:any)=>item2?.id==selectedCourse)?.courses?.slice()?.map((item:any,index:number)=>{
                         return <div key={index} className='category-list-main-category'>
                         <div className="exam-sub-category">
                          <p  className='margin-top-minius'>
                          <span>
                            <img style={{width:"40px"}} src={item?.image ? item?.image :"img/websiteimage/exam-1.png"} alt="exam-category-img" />
                          </span>
                          </p>
                          <p>{item?.course_name}</p>
                         </div>
                        </div>
                      })
                     }
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testerikaexamlistedexam;
