import React from 'react';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import CbetTestPerformance from 'components/cbetperformancetest/CbetTestPerformance';

const Cbetoverallperformance = () => {
  return (
    <>
     <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part slider-container">
            <div className="cbet-online-exam-content c-bet-container pb-10">
                <CbetTestPerformance />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cbetoverallperformance