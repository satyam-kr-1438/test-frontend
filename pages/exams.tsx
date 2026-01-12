import React from 'react';
import { Fragment } from 'react';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
import SearchExam from 'components/examsComponent/SearchExam';
import PopularExam from 'components/examsComponent/PopularExam';
import ExploreExam from 'components/examsComponent/ExploreExam';
import ExamCalendar from 'components/examsComponent/ExamCalendar';

const exams = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <SearchExam />
    <PopularExam />
    <ExploreExam />
    <ExamCalendar />
    <Footer/>
    </Fragment>
  )
}

export default exams