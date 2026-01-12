import React from 'react'

const SharedReferrals = () => {
  return (
    <div>
        <div className="width-container bg-light-color-2 section-spacing mt-5">
         <div className="row d-flex justify-content-between pt-2 pb-2">
            <div className="col-lg-12 pb-3">
                <h2 className='text-center'>Your <span className='theme-color'>Referal</span> history</h2>
            </div>
            <div className="col-lg-12">
            <div className='overflow-x-auto'>
  <table className='tables'>
    <tr>
      <th>Invited</th>
      <th>Invitee</th>
      <th>Earning</th>
      <th>Status</th>
    </tr>
    <tr className='border-bottom-light'>
        <td>20 nov 2024</td>
        <td className='theme-color  fw-bold '>Harikesh Yadav</td>
        <td>₹50</td>
        <td className='successfully'>successfully !</td>
    </tr>
    <tr className='border-bottom-light'>
        <td>21 nov 2024</td>
        <td className='theme-color  fw-bold'>Ankush Singh</td>
        <td>₹75</td>
        <td className='successfully'>successfully !</td>
    </tr>
    <tr className='border-bottom-light'>
        <td>22 nov 2024</td>
        <td className='theme-color  fw-bold'>Nikita Jangid</td>
        <td>₹0</td>
        <td className='Unsuccessful'>Unsuccessful !</td>
    </tr>
    <tr className='border-bottom-light'>
        <td>23 nov 2024</td>
        <td className='theme-color  fw-bold'>Anurag Khandal</td>
        <td>₹0</td>
        <td className='Unsuccessful'>Unsuccessful !</td>
    </tr>
    <tr className='border-bottom-light'>
        <td>24 nov 2024</td>
        <td className='theme-color fw-bold'>Nitin Sharma</td>
        <td>₹50</td>
        <td className='successfully'>successfully</td>
    </tr>
    <tr className='border-boootm-light'>
        <td>25 nov 2024</td>
        <td className='theme-color fw-bold'>Mrinal Kumawat</td>
        <td>₹50</td>
        <td className='Unsuccessful'>Unsuccessful !</td>
    </tr>

  </table>
</div>
            </div>
         </div>
        </div>

    </div>
  )
}

export default SharedReferrals