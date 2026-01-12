import { FC, useState } from 'react';


const Filter: FC<any> = ({ courses, setCategory, setActivePage }) => {
  const [selectedCategory, setSelectedCategory] = useState("View All")
  return (
    
    <div className="col-lg-3  my-lg-14 widget mob-none" >

      <div className="unordered-list text-reset">

        <div className="col-lg-12 mt-3 mb-3">
          <div className='exam-category-listed-here'>
            <div className="search-bar-exam-category">
              <div className="inputss-search-categoriess p-1">
                <svg xmlns="http://www.w3.org/2000/svg" height='17' width='17' className='search-icon' fill='#60A37E' viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                <input type="text" placeholder='Search exams' className='input-border-none-border-inputs' />
              </div>
            </div>
            <ul className="nav nav-tabs display-exam-category" id="myTab" role="tablist">
             
              {
                courses?.length > 0 ? courses?.slice()?.map((item: any, index: number) => {
                  return <li key={index} className="nav-item" role="presentation" onClick={() => {
                    setCategory(item?.id)
                    setSelectedCategory(item?.course_name)
                    setActivePage(1)
                  }}>
                    <button
                      className={selectedCategory == item?.course_name ? "nav-link active" : "nav-link"}
                      id="home-tab"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                      </svg>
                      {item?.course_name}
                    </button>
                  </li>
                  
                }) : <p className="mb-1" style={{ fontSize: "15px" }}>
                  No Category Found
                </p>
              }
               <li className="nav-item" role="presentation" onClick={() => {
                setCategory(undefined)
                setActivePage(1)
                setSelectedCategory("View All")
              }}>
                <button
                  className={selectedCategory == "View All" ? "nav-link active" : "nav-link"}
                  id="home-tab"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='12' height='12' className='me-2'>
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                  </svg>
                  View All
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
