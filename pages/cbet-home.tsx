import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CbetUpcomingtest from 'components/cbethome/CbetUpcomingtest';
import CbetLivetest from 'components/cbethome/CbetLivetest';
import ChooseExam from 'components/cbethome/ChooseExam';
import CbetSlider from 'components/cbetslider/CbetSlider';
import CbetFeature from 'components/cbethome/CbetFeature';
import CbetPopulartestseries from 'components/cbethome/CbetPopulartestseries';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';

const Cbethome = () => {

  
  return (
    <>
      <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part slider-container  ">
            <CbetSlider />
            <CbetFeature />
            <div className="pt-5 pb-10">
              <CbetLivetest />
            </div>
            <CbetPopulartestseries />
             <CbetUpcomingtest />
            <div className='pb-5'>
            <ChooseExam />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cbethome;
