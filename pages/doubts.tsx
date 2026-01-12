import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Footer from 'components/blocks/footer/Footer';
import DoubtsSlider from 'components/doubts/DoubtsSlider';
import DoutsCommentsFilter from 'components/doubts/DoutsCommentsFilter';
import { addAllDoubts, setSubjectsData, setUserDetails } from 'reducers/reducerSlice';
import { getAllCoursesSubject, getAllDoubt, getAllUserDetailUsingUserIds } from 'components/request/request';
import { useDispatch, useSelector } from 'react-redux';

const Doubts = () => {
  const { subjects, allDoubts, } = useSelector((state: any) => state?.reducerSlice)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const [status, setStatus] = useState("All")

    const dispatch = useDispatch()

    const getAllSubjects = async () => {
        try {
            const { data } = await getAllCoursesSubject()
            dispatch(setSubjectsData(data))
        } catch (err) {

        }
    }

    useEffect(() => {
        if (subjects?.length <= 0)
            getAllSubjects()
    }, [subjects])

    const getAllDoubtDetails = async (query: string) => {
        try {
            const { data } = await getAllDoubt(query)
            if (data) {
                dispatch(addAllDoubts(data))
                if (data?.userIds?.length > 0) {
                    let userDetail = await getAllUserDetailUsingUserIds(data?.userIds)
                    if (userDetail?.data?.success) {
                        dispatch(setUserDetails(userDetail?.data?.data))
                    }
                }
                setTimeout(() => {
                    setLoading(false)
                }, 400)
                let totalPagesforPagination = Math.ceil((data?.payload?.pagination?.total) / 10)
                if (totalPagesforPagination) {
                    setTotalPage(totalPagesforPagination)
                }
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
    }, [])
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    <DoubtsSlider />
    <DoutsCommentsFilter setLoading={setLoading} loading={loading}  setCurrentPage={setCurrentPage} setStatus={setStatus} getAllDoubtDetails={getAllDoubtDetails} currentPage={currentPage} totalPage={totalPage} setTotalPage={setTotalPage} status={status}/>
    <Footer/>
    </Fragment>
  )
}

export default Doubts