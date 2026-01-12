import React from 'react';
import { Fragment } from 'react';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
import ReferralsSlider from 'components/referralsEarn/ReferralsSlider';
import SharedReferrals from 'components/referralsEarn/SharedReferrals';

const referrals = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <ReferralsSlider />
    <SharedReferrals />
    <Footer/>
    </Fragment>
  )
}

export default referrals