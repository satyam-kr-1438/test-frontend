import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import FreeTestseriesFaq from 'components/FreeTestsQuizzes/FreeTestseriesFaq';
import CurrentAffairsQuizSlide from 'components/CurrentAffairsQuiz/CurrentAffairsQuizSlide';
import CurrentAffairExamListed from 'components/CurrentAffairsQuiz/CurrentAffairExamListed';


const Currentaffairsquiz = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <CurrentAffairsQuizSlide />
    <CurrentAffairExamListed />
    <div className='bg-light-color'>
    <FreeTestseriesFaq />
    </div>
    <Footer/>
    </Fragment>
  )
}

export default Currentaffairsquiz