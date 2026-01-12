import React from 'react';
import { Fragment } from 'react';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
import NewsSlider from 'components/news/NewsSlider';
import NewsColoum from 'components/news/NewsColoum';

const news = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <NewsSlider />
    <NewsColoum />
    <Footer/>
    </Fragment>
  )
}

export default news