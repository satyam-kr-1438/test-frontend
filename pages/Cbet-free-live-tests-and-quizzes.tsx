import React from 'react';
import ProLiveTests from 'components/CbetFreelivetestquizzes/ProLiveTests';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';

const Cbetfreelivetestsandquizzes = () => {
  return (
    <>
    <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part slider-container pb-15">
            <div className="cbet-online-exam-content pt-10">
            <ProLiveTests />
            </div>
          </div>
        </div>
      </section>
    </>
 )
}
export default Cbetfreelivetestsandquizzes;