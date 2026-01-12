import React from 'react';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
import { Fragment } from 'react';
import CareersSlider from 'components/careers/CareersSlider';
import CareerGallery from 'components/careers/CareerGallery';
import BenefitsJoining from 'components/careers/BenefitsJoining';
import CareersReviews from 'components/careers/CareersReviews';
import JobSearchCareer from 'components/careers/JobSearchCareer';


const careers = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <CareersSlider />
    <CareerGallery />
    <BenefitsJoining />
    <CareersReviews />
    <JobSearchCareer />
    <Footer/>
    </Fragment>
  )
}

export default careers