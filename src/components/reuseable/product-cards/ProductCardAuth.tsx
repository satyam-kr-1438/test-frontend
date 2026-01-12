import { FC, Fragment, useEffect, useState } from 'react';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';
import ratingGenerate from 'utils/ratings';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LiaSalesforce } from 'react-icons/lia';

// =========================================
type ProductCardProps = {
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

const ProductCardAuth: FC<any> = (props) => {
  const router=useRouter()
 
  return (
    <Fragment>
                        <div className={`project item col-lg-4 col-md-6 col-sm-6 col-12`} style={{cursor:"pointer"}}  data-bs-toggle="modal"
                      data-bs-target="#modal-signin">
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className={props?.itemKey==0?`${"mb-6 position-relative figure_home_page_landing"}`:props?.itemKey==1?"mb-6 position-relative figure_home_page_landing1":props?.itemKey==2?"mb-6 position-relative  figure_home_page_landing2":props?.itemKey==3?"mb-6 position-relative  figure_home_page_landing3":props?.itemKey==4?"mb-6 position-relative  figure_home_page_landing4":props?.itemKey==5?"mb-6 position-relative  figure_home_page_landing5":props?.itemKey==6?"mb-6 position-relative  figure_home_page_landing6":"mb-6 position-relative  figure_home_page_landing7"}>
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      {/* <LiaSalesforce style={{transform:"scale(3)"}}/> */}
                                       <img src={props?.thumbnail} alt="thumbnail" style={{width:"50px",height:"50px",borderRadius:"100%",objectFit:"cover"}}/>
                                    </span>
                                    {/* <span style={{position:"absolute",top:"3px",right:"3px",fontSize:"8px",background:"#fcc032",color:"white",padding:"1px 2px",borderRadius:"3px"}}>
                                        Featured
                                    </span> */}
                                  
                                    {props?.featured==1 && <span style={{position:"absolute",bottom:"5px",right:"5px",zIndex:"99",background:"#57a757",fontSize:"8px",padding:"2px 5px",borderRadius:"2px",fontWeight:"400"}}>
                                        Featured
                                    </span>}
                                    <span className="ms-5" style={{fontSize:"12px"}}>{props?.name}</span></div>
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                    <div className="post-category text-ash mb-0" style={{minHeight:"50px"}}>
                                    {
                                      props?.description?.length<40?props?.description:`${props?.description?.substring(0,40)}...`
                                    }
                                   </div>
                                      {/* <span className={`ratings`} /> */}
                                    </div>

                                    {/* <h2 className="post-title fs-16">
                                      <NextLink title="Salesforce" href="#" className="link-dark" />
                                    </h2> */}

                                    {props?.currency=="INR" && <p className="price">
                                          {/* <del> */}
                                            <span className="amount" style={{fontSize:"12px",textDecoration:"line-through"}}>INR {12*props?.price_inr}</span>
                                          {/* </del>{' '} */}{' '}
                                          <ins>
                                            <span className="amount" style={{fontSize:"12px"}}>INR {props?.price_inr}</span>
                                          </ins>
                                    </p>}
                                    {props?.currency=="USD" && <p className="price">
                                          {/* <del> */}
                                            <span className="amount" style={{fontSize:"12px",textDecoration:"line-through"}}>USD {12*props?.price_usd}</span>
                                          {/* </del>{' '} */} {' '}
                                          <ins>
                                            <span className="amount" style={{fontSize:"12px"}}>USD {props?.price_usd}</span>
                                          </ins>
                                    </p>}
                                  </div>
                            </div>
                        </div>
    </Fragment>
  );
};

export default ProductCardAuth;
