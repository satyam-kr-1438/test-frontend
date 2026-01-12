import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import Pagination from 'components/reuseable/Pagination';
// -------- data -------- //
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import QuizFilter from 'components/common/QuizFilter';
import QuizCard from 'components/reuseable/product-cards/QuizCard';
import { getAllCoursesSubject, getAllLiveQuizzes, getAllQuizzes, getQuizReportStatus } from 'components/request/request';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import PaginationQuizzes from 'components/reuseable/PaginationQuizzes';
import { setFreeQuizzes, setLiveQuizzes, setSubjectsData } from 'reducers/reducerSlice';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import LiveQuizCard from 'components/reuseable/product-cards/LiveQuizCard';

const Quizzes: NextPage = () => {
    // filter options
    const [activePage, setActivePage] = useState(1)
    const [total, setTotal] = useState(1)
    const [quizReportStatus, setQuizReportStatus] = useState<any[]>([])
    const [category, setCategory] = useState<any>(undefined)
    const [loading, stLoading] = useState(true)
    const dispatch = useDispatch()
    const [tabStatus,setTabStatus]=useState("Live")
    const { subjects, quizzes,liveQuizzes }: any = useSelector((state: any) => state?.reducerSlice)


    const getAllLiveQuiz = async () => {
        try {
            let query = `page=${activePage}&items_per_page=5&category=${category}&type=Live&status=${tabStatus}`
            const { data } = await getAllLiveQuizzes(query)
            if (data && data?.data) {
                setTotal(data?.payload?.pagination?.total)
                dispatch(setLiveQuizzes(data?.data))
                // let ids = data?.data?.map((item: any) => item?.id)

                // if (ids?.length > 0) {
                //     const { data } = await getQuizReportStatus({
                //         user_id: getAuthenticatedUserData()?.id,
                //         quiz_ids: ids
                //     })
                //     if (data?.success) {
                //         setQuizReportStatus(data?.data)
                //     }
                // }
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
            const { data } = await getAllCoursesSubject()
            dispatch(setSubjectsData(data))
        } catch (err) {

        }
    }

    useEffect(() => {
        getAllLiveQuiz()
    }, [activePage, category,tabStatus])
    useEffect(() => {
        if (subjects?.length <= 0)
            getAllSubjects()
    }, [subjects])


    return (
        <Fragment>
            {/* <header className="wrapper bg-soft-primary">
                    <DashboardNavbar
                    // info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={<DashboardNavbarModal/>}
                    />
               </header> */}

            <Testerikaheader />
            <Testerikamianheader />

            {
                loading ? <Loading /> : <>
                    <main className="mb-14">
                        <section className="wrapper quiz_start_background_main">
                            <div className="container pt-0 pt-lg-5">
                                <div className="row gy-10">
                                    <div className="col-lg-10 col-12 order-lg-2">
                                        <div className="row gx-md-4 gy-4 gy-md-4 my-4">
                                            <div className="col-12">
                                                <div className="row mx-1">
                                                    <div>
                                                        <button className='free me-1' onClick={async () => {
                                                            setTabStatus("Live")
                                                        }}>Live Test</button>
                                                        <button className='free me-1' onClick={async () => {
                                                            setTabStatus("Upcoming")
                                                        }}>Upcoming Test</button>
                                                        <button className='free me-1' onClick={async () => {
                                                            setTabStatus("Expired")
                                                        }}>Expired test</button>
                                                    </div>
                                                    {/* {products.map((item) => (
                                                <QuizCard {...item} key={item.id} className="col-lg-10 col-12" />
                                              ))} */}
                                                    {
                                                        liveQuizzes?.length > 0 ? liveQuizzes.map((item: any, index: number) => {
                                                            return <LiveQuizCard {...item} key={index} quizKey={item?.key} quizReportStatus={quizReportStatus} className="col-lg-12 col-12" />
                                                        }
                                                        ) : <ContentNotFound button_text="" to="" />
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {quizzes?.length > 0 && <PaginationQuizzes currentPage={activePage} totalPage={total} setCurrentPage={setActivePage} />}
                                    </div>
                                    {subjects?.length > 0 && <QuizFilter subjects={subjects} setCategory={setCategory} setActivePage={setActivePage} />}
                                </div>
                            </div>
                        </section>
                    </main>
                </>
            }

            <footer className="footer_container_dashboard_content">
                <DashboardFooter />
            </footer>

        </Fragment>
    );
};

export default Quizzes;
