import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import CbetAttemptedTabs from 'components/CbetAttemptedTests/CbetAttemptedTabs';

const Cbetattemptedtests = () => {
  return (
    <>
    <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part">
            <div className='c-bet-container pt-3 pb-15'>
                <CbetAttemptedTabs />
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Cbetattemptedtests