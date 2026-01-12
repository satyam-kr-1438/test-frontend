import React from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import PreviousyearpapersSlider from 'components/Previousyearpapers/PreviousyearpapersSlider';
import Coupon from 'components/Coupon/Coupon';
import PopularExam from 'components/examsComponent/PopularExam';
import PreviousYearPaperexams from 'components/Previousyearpapers/PreviousYearPaperexams';
import PreviousYearPaperDownload from 'components/Previousyearpapers/PreviousYearPaperDownload';
import Previousyearpapersfaq from 'components/Previousyearpapers/Previousyearpapersfaq';
const Previousyearpapers = () => {
  return (
    <Fragment>
    <Testerikaheader /> 
    <Testerikamianheader />
    <PreviousyearpapersSlider />
    <Coupon />
    <PopularExam />
    <PreviousYearPaperexams />
    <Previousyearpapersfaq />
    <PreviousYearPaperDownload />
    <Footer/>
    </Fragment>
  )
}

export default Previousyearpapers