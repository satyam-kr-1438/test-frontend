import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CbetOnlinetestseries from 'components/cbetOnlinetestseries/CbetOnlinetestseries';
import CbetRecenttestseries from 'components/cbetOnlinetestseries/CbetRecenttestseries';
import CbetUpcomingtest from 'components/cbethome/CbetUpcomingtest';
import CbetTestseriescategory from 'components/cbetOnlinetestseries/CbetTestseriescategory';
import CbetOnlinetestseriesexam from 'components/cbetOnlinetestseries/CbetOnlinetestseriesexam';
import CbetOnlinefaq from 'components/cbetOnlinetestseries/CbetOnlinefaq';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';

const Cbetonlinetestseries = () => {
  return (
    <>
       <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part slider-container">
            <div className="cbet-online-exam-content pt-10">
              <CbetOnlinetestseries />
              <CbetRecenttestseries />
              <div className="mt-5">
                <CbetUpcomingtest />
              </div>
              <div className="pass pb-10">
                <div className="c-bet-container mb-3">
                  <img src="/img/websiteimage/pass-image-1.png" className="w-100" alt="Coupon-image" />
                </div>
              </div>
              <CbetTestseriescategory />
              <CbetOnlinetestseriesexam />
              <CbetOnlinefaq />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cbetonlinetestseries;
