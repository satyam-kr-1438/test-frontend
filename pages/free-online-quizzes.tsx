import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import FreeOnlineQuizSLide from 'components/FreeOnlineQuiz/FreeOnlineQuizSLide';
import QuizExamPreparation from 'components/FreeOnlineQuiz/QuizExamPreparation';
import FreeOnlinExamDetail from 'components/FreeOnlineQuiz/FreeOnlinExamDetail';
import FreeOnlineQuizFaq from 'components/FreeOnlineQuiz/FreeOnlineQuizFaq';
import PreviousYearPaperDownload from 'components/Previousyearpapers/PreviousYearPaperDownload';
import { useDispatch, useSelector } from 'react-redux';
import { setFreeQuizzes, setSubjectsData } from 'reducers/reducerSlice';
import { getAllCoursesSubject, getAllQuizzes } from 'components/request/request';


const Freeonlinequizzes = () => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState(undefined)
  const { quizzes, subjects }: any = useSelector((state: any) => state?.reducerSlice)

  const getAllFreeOrPaidQuizzes = async () => {
    try {
      let query = `page=1&items_per_page=1000&category=${category}&type=Quizzes`
      const { data } = await getAllQuizzes(query)
      if (data && data?.data) {
        dispatch(setFreeQuizzes(data?.data))
      }
      else {

      }
    } catch (err) {

    }
  }
  const getAllSubjects = async () => {
    try {
      const { data } = await getAllCoursesSubject()
      dispatch(setSubjectsData(data))
    } catch (err) {

    }
  }
  useEffect(() => {
    getAllFreeOrPaidQuizzes()
  }, [category])
  useEffect(() => {
    if (subjects?.length <= 0)
      getAllSubjects()
  }, [])
  return (
    <Fragment>
      <Testerikaheader />
      <Testerikamianheader />
      <FreeOnlineQuizSLide />
      <QuizExamPreparation quizzes={quizzes} subjects={subjects} setCategory={setCategory} />
      <FreeOnlinExamDetail />
      <FreeOnlineQuizFaq />
      <PreviousYearPaperDownload />
      <Footer />
    </Fragment>
  )
}

export default Freeonlinequizzes