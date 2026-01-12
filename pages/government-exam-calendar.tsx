import React from 'react';
import FreeTestseriesFaq from 'components/FreeTestsQuizzes/FreeTestseriesFaq';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import GovernmentCalendracontent from 'components/GovernmentExamCalendar/GovernmentCalendracontent';
import ExamCalendar from 'components/examsComponent/ExamCalendar';
import GovernmentCalendraEditor from 'components/GovernmentExamCalendar/GovernmentCalendraEditor';
const Governmentexamcalendar = () => {
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <GovernmentCalendracontent />
    <ExamCalendar />
    <GovernmentCalendraEditor />
    <FreeTestseriesFaq />
    <Footer/>
    </Fragment>
  )
}

export default Governmentexamcalendar