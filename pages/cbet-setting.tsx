import React from 'react';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
import CbetprofileOthers from 'components/CbetSetting/CbetprofileOthers';

const Cbetsetting = () => {
  return (
    <>
     <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part">
            <div className='c-bet-container pt-3 pb-15'>
                <CbetprofileOthers />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cbetsetting