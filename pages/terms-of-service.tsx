import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import TermsConditions from 'components/termsservice/TermsConditions';

const Termsofservice = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <TermsConditions />
    <Footer/>
    </Fragment>
  )
}

export default Termsofservice