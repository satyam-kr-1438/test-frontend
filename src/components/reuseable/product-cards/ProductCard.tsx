import { FC, Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ProductCard: FC<any> = (props) => {
  const router = useRouter()
  const [premium, setPremium] = useState(false)
  const { packages }: any = useSelector((state: any) => state?.reducerSlice)
  useEffect(() => {
    if (props && props?.premiumPackages && props?.premiumPackages?.length > 0) {
      props?.premiumPackages?.find((item: any) => {
        if (item?.passid && props?.premiumType == 0) {
          setPremium(true)
        }
        else if (item?.packageid && item?.packageid == props?.id && props?.type == "Package") {
          setPremium(true)
        } else if (item?.bundleid && item?.bundleid == props?.id && props?.type == "Bundle") {
          setPremium(true)
        }
      })
    }
  }, [props, router])

  return (
    <Fragment>
      <div className="col-lg-7 col-md-6 col-12 mt-3">
        <div className='best-test-series'>
          <div className='d-flex justify-content-between space-best-test-series align-items-center'>
            <div className='testseries-name-section'><img src={props?.thumbnail ? props?.thumbnail : "img/websiteimage/best-test-series-umage.jpg"} alt="best-exam-profile" /></div>
            <div className='user-profile-image'><span><img src="/img/websiteimage/best-exam-profile-image-user.png" alt="best-exam-profile" /></span> <span>1k+ Users</span>
              <p className="price mb-2">
                <del>
                  <span className="amount" style={{ fontSize: "15px", fontWeight: "bold", color: "red" }}>₹{props?.price_inr * 12}</span>
                </del>{' '}<span className="amount after-fooer-prize" style={{ fontSize: "25px", fontWeight: "bold", color: "green" }}>₹{props?.price_inr}</span>
              </p></div>
          </div>
          <div className='bg-light-green mt-3'>
            <p>{props?.name}</p>
          </div>
          <div className='TOTAL-TEST-SERIES mt-2 mb-2'>
            <p>{props?.total_test?.split("/")[0]} Total Tests   | &nbsp;

              &nbsp;{props?.total_test?.split("/")[1]} Free Tests</p>
          </div>

          <div className="languages-mode-best-test-series">
            <span><img src="/img/websiteimage/google-translate.png" alt="google-translate" /></span>
            <span className='ms-2'>English, Hindi
              {/*+  <b>
              {props?.packagesDetails?.find((item2: any) => item2?.id == props?.id)?.examids?.length} 
              More</b> */}
            </span>
          </div>
          <div className="listings-testerika-best-test-series">
            <div className="preview" dangerouslySetInnerHTML={{ __html: props?.description }} />
          </div>
          <div className='best-test-series-button'>
            <button onClick={() => {
              if (props?.type == "Package") {
                router.push(`/dashboard/home/${props?.slug}/${props?.id}/${props?.hash}`)
              } else {
                router.push(`/dashboard/bundle/${props?.slug}/${props?.id}/${props?.hash}`)
              }
            }}>View Test series</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
