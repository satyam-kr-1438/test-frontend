import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import RefundCancellation from 'components/refundcancellation/RefundCancellation';

const Refundcancellation = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <RefundCancellation />
    <Footer/>
    </Fragment>
  )
}

export default Refundcancellation