import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import TesterikaAi from 'components/TesterikaAi/TesterikaAi';

const Testerikaai = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <TesterikaAi />
    <Footer/>
    </Fragment>
  )
}

export default Testerikaai