import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import TestQuizFreeSlide from 'components/FreeTestsQuizzes/TestQuizFreeSlide';
import ProLiveTest from 'components/FreeTestsQuizzes/ProLiveTest';
import AllProLiveTest from 'components/FreeTestsQuizzes/AllProLiveTest';
import FreeTestseriesFaq from 'components/FreeTestsQuizzes/FreeTestseriesFaq';

const Freelivetestsandquizzes = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <TestQuizFreeSlide />
    <ProLiveTest />
    <AllProLiveTest />
    <FreeTestseriesFaq />
    <Footer/>
    </Fragment>
  )
}

export default Freelivetestsandquizzes