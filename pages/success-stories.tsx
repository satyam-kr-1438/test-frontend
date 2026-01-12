import React from 'react';
import { Fragment } from 'react';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
import WallOfFame from 'components/walloffame/WallOfFame';
import SuccessStorySlider from 'components/SuccessStory/SuccessStorySlider';
import SuccessStorySelections from 'components/SuccessStory/SuccessStorySelections';
import SuccessStoryShare from 'components/SuccessStory/SuccessStoryShare';

const Successstories = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <SuccessStorySlider />
    <SuccessStorySelections />
    <div className='bg-light-color-2'>
    <WallOfFame />
    </div>
    <SuccessStoryShare />
    <Footer/>
    </Fragment>
  )
}

export default Successstories