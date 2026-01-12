import { FC, Fragment, memo } from 'react';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';
import ratingGenerate from 'utils/ratings';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LiaSalesforce } from 'react-icons/lia';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineLanguage } from "react-icons/md";
import { BiLock } from 'react-icons/bi';

// =========================================
type CouponCardProps = {
  image?: string;
  title?: string;
  new?: boolean;
  sale?: boolean;
  rating: number;
  category: string;
  salePrice?: number;
  className?: string;
  regularPrice?: number;
};
// =========================================

const CouponCard:FC<any> = ({key,item,applyCouponToPackages,currency}) => {
  const router=useRouter()
  const badge = (title: string, color: string) => {
    return (
      <span
        style={{ top: '1rem', left: '1rem' }}
        className={`avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`}
      >
        <span>{title}</span>
      </span>
    );
  };

  return (
    <Fragment>
               <div className="card col-12 my-6 mx-auto">
                                                 <div className="py-3 px-2 exam_subpackage_main_container">
                                                      <div className="exam_section_second_section">
                                                           <div className="exam_section_second_section_section1" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                               <h6 style={{fontSize:"12px"}}>{item?.coupon_name}</h6>
                                                               <span className="free_paid_button_exam_subPackage2">FLAT {currency=="INR"?item?.discount_percentage_inr:item?.discount_percentage_usd}% OFF</span>

                                                           </div>
                                                           <div className="exam_section_second_section2">
                                                               <p style={{marginTop:"2px",marginBottom:"0px",fontSize:"10px"}} dangerouslySetInnerHTML={{__html:item?.description}}></p>
                                                           </div>
                                                           <button className="btn coupon_button_details btn-sm mt-2" style={{maxWidth:"120px",minWidth:"100px",padding:"4px 4px"}} onClick={()=>{
                                                            }}>{item?.coupon_code}</button>

                                                      </div>
                                                      <div>
                                                           <button aria-label="Close" data-bs-dismiss="offcanvas"  className="btn btn-outline-primary btn-sm exam_subPackage_strt_now_button" onClick={()=>{
                                                             applyCouponToPackages(item)
                                                           }}>Apply Now</button>
                                                      </div>
                                                 </div>
              </div>
              
    </Fragment>
  );
};

export default memo(CouponCard);
