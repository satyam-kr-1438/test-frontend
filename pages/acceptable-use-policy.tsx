import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import AcceptablePolicy from 'components/AcceptableUsePolicy/AcceptablePolicy';

const Acceptableusepolicy = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <AcceptablePolicy />
    <Footer/>
    </Fragment>
  )
}

export default Acceptableusepolicy