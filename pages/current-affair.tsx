import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import CureentAffairSlide from 'components/currentAffair/CureentAffairSlide';
import CurrentAffairMiddle from 'components/currentAffair/CurrentAffairMiddle';

const Currentaffair = () => {
  return (
    <Fragment>
      <Testerikaheader />
      <Testerikamianheader />
      <CureentAffairSlide />
      <CurrentAffairMiddle />
      
      <Footer/>
    </Fragment>
  )
}

export default Currentaffair