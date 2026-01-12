import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { getAllTransactionDetails } from 'components/request/request';
import CbetSideBar from 'components/CbetMainComponent/CbetSide-Bar';
import CbetTopBar from 'components/CbetMainComponent/CbetTopBar';
const TransactionHistory: NextPage = () => {
  const [transactions, setTransactions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const getTransactionDetailsData = async () => {
    try {
      let currUser = getAuthenticatedUserData()
      if (currUser && currUser?.id) {
        const { data } = await getAllTransactionDetails(currUser?.id)
        if (data?.success) {
          setTransactions(data?.data)
          setLoading(false)
        } else {
          setLoading(false)
        }
      }
    } catch (err) {
      setTransactions([])
      setLoading(false)
    }
  }
  useEffect(() => {
    getTransactionDetailsData()
  }, [])

  return (
    <Fragment>


      <section className="c-bet-dashboard">
        <CbetSideBar />
        <div className="c-bet-right-side-bar">
          <CbetTopBar />
          <div className="c-bet-content-part slider-container  ">
            <main className="">
              <section className="wrapper bg-light h-100">
                <div className="cbet-container pt-10 pb-14 " >
                  <div className="row gy-10">
                    <div className='col-lg-12'>
                      <h3 className='mt-3'>Transactions</h3>
                      <div className="over-x-auto">
                        <table className='w-160-percent'>
                        <tr className='theme-bg'>
                            <th>Type</th>
                            <th>Order ID</th>
                            <th>Transaction ID</th>

                            <th>Buy Date</th>
                            <th>Expiry Date</th>
                            <th>Payable Amount</th>
                            <th>Payment Status</th>
                            <th>Payment Method</th>
                           </tr>
                           { transactions?.length>0 ? <tbody>
                               {
                                transactions?.length>0 &&   transactions?.map((item:any,index:any)=>{
                                     return <tr key={index}>
                                     <td>
                                      {
                                        item?.packageid?"Packages":item?.bundleid?"Bundle Packages":"Passes"
                                      }
                                     </td>
                                     <td>
                                      {
                                        item?.tbl_transaction?.orderid ? item?.tbl_transaction?.orderid : "--" 
                                      }
                                     </td>
                                     <td >{item?.transactionid}</td>

                                     <td >{  String(new Date(item?.buydate).getDate()+"-"+new Date(item?.buydate).toLocaleString('default', { month: 'long' })+"-"+new Date(item?.buydate).getFullYear())}</td>
                                     <td >{  String(new Date(item?.expirydate).getDate()+"-"+new Date(item?.expirydate).toLocaleString('default', { month: 'long' })+"-"+new Date(item?.expirydate).getFullYear())}</td>
                                     <td >{item?.amount} {item?.currency}</td>
                                     <td className='paid'>Success</td>
                                     <td >{item?.payment_method}</td>
                                 </tr>
                                  })
                               }
                            </tbody>: <div>No transaction found</div> }
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            </main>

          </div>
        </div>
      </section>




    </Fragment>
  );
};

export default TransactionHistory;
