import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Onlinetestseriesslide from 'components/onlineTestseries/Onlinetestseriesslide';
import Livetest from 'components/livetest/Livetest';
import TestSeriesListed from 'components/onlineTestseries/TestSeriesListed';
import NewTestSeries from 'components/onlineTestseries/NewTestSeries';
import TesterikaFaq from 'components/testerikafaq/TesterikaFaq';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesSubject, getCourses, getPackages } from 'components/request/request';
import { setCoursesData, setPackagesData, setPopularPackages, setSubjectsData } from 'reducers/reducerSlice';
import PopularTestSeries from 'components/onlineTestseries/PopularTestSeries';



const Onlinetestseries = () => {
  const [category, setCategory] = useState<any>(undefined)
  const [loading, stLoading] = useState(true)
  const [items_per_page, setItems_per_page] = useState(10000)
  const { courses, subjects, packages, popularPackages }: any = useSelector((state: any) => state?.reducerSlice)
  const dispatch = useDispatch()
  const getAllPopularPackages = async () => {
    try {
      let query = `page=1&items_per_page=3&category=${category}`
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
  const getAllPackages = async () => {
    try {
      let query = `page=1&items_per_page=${items_per_page}&category=${category}`
      const { data } = await getPackages(query)
      if (data && data?.data) {
        dispatch(setPackagesData(data?.data))
         setTimeout(() => {
          stLoading(false)
        }, 200)
      }
      else {
        setTimeout(() => {
          stLoading(false)
        }, 200)
      }
    } catch (err) {
      setTimeout(() => {
        stLoading(false)
      }, 200)
    }
  }
  const getAllSubjects = async () => {
    try {
      const { data } = await getCourses()
      dispatch(setCoursesData(data))
    } catch (err) {

    }
  }
  useEffect(() => {
    getAllPopularPackages()
  }, [])

  useEffect(() => {
    getAllPackages()
  }, [category])
  useEffect(() => {
    if (courses?.length <= 0)
      getAllSubjects()
  }, [courses])
  return (
    <Fragment>
      <Testerikaheader />
      <Testerikamianheader />
      <Onlinetestseriesslide />
      {/* <PopularTestSeries packages={popularPackages} /> */}
      {/* <div className='bg-light-color-1 pb-3'>
        <Livetest />
      </div> */}
      <TestSeriesListed loading={loading} packages={packages} courses={courses} setCategory={setCategory} />
      {/* <NewTestSeries /> */}
      <TesterikaFaq />
      <Footer />
    </Fragment>
  )
}

export default Onlinetestseries;