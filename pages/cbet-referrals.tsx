import React from 'react';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import Cbethomereferrals from 'components/cbetreferralshome/cbet-home-referrals';

const Cbetreferrals = () => {
  return (
    <>
     <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part">
            <div className='c-bet-container pt-3 pb-15'>
                <Cbethomereferrals />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cbetreferrals 