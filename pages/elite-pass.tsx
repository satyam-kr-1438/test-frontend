import React from 'react';
import { Fragment } from 'react';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
import ElitePassSlide from 'components/elitePass/ElitePassSlide';
import ElitePassContent from 'components/elitePass/ElitePassContent';
import TesterikaFaq from 'components/testerikafaq/TesterikaFaq';

const Elitepass = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <ElitePassSlide />
    <ElitePassContent />
    <TesterikaFaq />
    <Footer/>
    </Fragment>
  )
}

export default Elitepass