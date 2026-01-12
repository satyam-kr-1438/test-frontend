import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import PrivacyPolicy from 'components/privacypoilicy/PrivacyPolicy';

const Privacypolicy = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <PrivacyPolicy />
    <Footer/>
    </Fragment>
  )
}

export default Privacypolicy