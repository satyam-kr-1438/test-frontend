import { Fragment, useEffect, useState } from 'react';
import Footer from 'components/blocks/footer/Footer';
import TesterikaExperience from 'components/testerikaexperience/TesterikaExperience';
import { getAllCoursesSubject, getAllQuizzes, getCourses, getCoursesCategoryWithCourses, getPackages, getPackagesHomePage } from 'components/request/request';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Testerikaslider from 'components/testerikaheader/Testerikaslider';
import Trustedby from 'components/trustedby/Trustedby';
import Livetest from 'components/livetest/Livetest';
import PopularTestSeries from 'components/populartestseries/PopularTestSeries';
import WallOfFame from 'components/walloffame/WallOfFame';
import TesterikaFaq from 'components/testerikafaq/TesterikaFaq';
import Downloadapp from 'components/downloadapp/Downloadapp';
import BecomePartner from 'components/becomepartner/BecomePartner';
import Newsletter from 'components/newsletter/Newsletter';
import Testerikaexamlistedexam from 'components/testerikaexperience/Testerikaexamlistedexam';
import { setCoursesCategory, setCoursesData, setFreeQuizzes, setPackagesData, setPopularPackages, setSubjectsData } from 'reducers/reducerSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [activePage, setActivePage] = useState(1)
  const [category, setCategory] = useState<any>(undefined)
  const [loading, stLoading] = useState(true)
  const { subjects, courses, quizzes, popularPackages }: any = useSelector((state: any) => state?.reducerSlice)
  const dispatch = useDispatch();

  const getAllFreeOrPaidQuizzes = async () => {
    try {
      let query = `page=${activePage}&items_per_page=1000&category=${category}&type=Quizzes`
      const { data } = await getAllQuizzes(query)
      if (data && data?.data) {
        dispatch(setFreeQuizzes(data?.data))
        
      }
      else {
      
      }
    } catch (err) {
     
    }
  }

  const getAllPackages = async () => {
    try {
      let query = `page=1&items_per_page=4&category=${category}`
      const { data } = await getPackages(query)
      if (data && data?.data) {
        dispatch(setPopularPackages(data?.data))
        setTimeout(() => {
          stLoading(false)
        }, 500)
      }
      else {
        setTimeout(() => {
          stLoading(false)
        }, 500)
      }
    } catch (err) {
      setTimeout(() => {
        stLoading(false)
      }, 500)
    }
  }
  const getAllSubjects = async () => {
    try {
      const { data } = await getAllCoursesSubject()
      dispatch(setSubjectsData(data))
    } catch (err) {

    }
  }
  const getAllCourses = async () => {
    try {
      const { data } = await getCourses()
      const data2=await getCoursesCategoryWithCourses()
      dispatch(setCoursesData(data))
      dispatch(setCoursesCategory(data2?.data))

    } catch (err) {

    }
  }

  useEffect(() => {
    if (quizzes?.length <= 0)
      getAllFreeOrPaidQuizzes()
    if (popularPackages?.length <= 0)
      getAllPackages()
  }, [])


  useEffect(() => {
    if (subjects?.length <= 0)
      getAllSubjects()
    if (courses?.length <= 0)
      getAllCourses()
  }, [])


  return (
    <Fragment>
      <Testerikaheader />
      <Testerikamianheader />
      <Testerikaslider />
      <Trustedby />
      {/* <Livetest quizzes={quizzes} /> */}
      {/* <Testerikaexamlistedexam /> */}
      <PopularTestSeries loading={loading} packages={popularPackages} />
      <TesterikaExperience />
      {/* <Downloadapp /> */}
      {/* <FeaturedBlog /> */}
      {/* <WallOfFame /> */}
      <TesterikaFaq />
      <BecomePartner />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
