import { NextPage } from 'next';
import { Fragment } from 'react';``
import BecomePartner from 'components/becomepartner/BecomePartner';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Downloadapp from 'components/downloadapp/Downloadapp';
import AboutSlider from 'components/aboutComponent/AboutSlider';
import MissionVision from 'components/aboutComponent/MissionVision';
import OurAchivements from 'components/aboutComponent/OurAchivements';


const Aboutus: NextPage = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <AboutSlider />
    <MissionVision />
    <OurAchivements />
    {/* <Downloadapp /> */}
    <div>
    <BecomePartner  />
    </div>
      <Footer/>
    </Fragment>
  );
};

export default Aboutus;
