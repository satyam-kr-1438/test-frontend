import { FC } from 'react';
import NextLink from './links/NextLink';
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

// ==========================================================
type PaginationProps = { className?: string; altStyle?: boolean };
// ==========================================================

const Pagination: FC<any> = (props) => {
  const { className = 'justify-content-center', altStyle = false } = props;
  const NextPreviousBtn = (url: string, icon: string) => {
    return <NextLink href={url} className="page-link" title={<i className={`uil ${icon}`} />} />;
  };

  return (
    <nav className={`d-flex ${className}`} aria-label="pagination">
      <ul className={`pagination ${altStyle ? 'pagination-alt' : ''}`}>
        {  <li className={`page-item}`}>
            <button className="page-link" onClick={(e:any)=>{
              e?.preventDefault()
              props?.activePage>props.pageArr[0] && props?.setActivePage((pre:any)=>pre-1)
            }}><BsArrowLeftShort style={{transform:"scale(1.4)"}}/></button>
          </li>}
         

        {props?.pageArr?.map((item:any, i:any) => (
          <li className={`page-item ${item==props?.activePage  ? 'active' : ''}`} key={item}>
            <button className="page-link" onClick={()=>{
              props.setActivePage(item)
            }}>{item}</button>
          </li>
        ))}

        { <li className={`page-item}`}>
            <button className="page-link" onClick={(e:any)=>{
               e?.preventDefault()
               props?.activePage<props.pageArr[props?.pageArr?.length-1] && props?.setActivePage((pre:any)=>pre+1)
            }}><BsArrowRightShort style={{transform:"scale(1.4)"}}/></button>
          </li>}
       
      </ul>
    </nav>
  );
};

export default Pagination;
