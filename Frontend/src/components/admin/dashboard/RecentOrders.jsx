import React from 'react'
import Cancelled from './status/Cancelled'
import Shipped from './status/Shipped'
import Delivered from './status/Delivered'
import Pending from './status/Pending'

const RecentOrders = () => {
  return (
      <div className='bg-white text-black rounded-xl border-2 border-emerald-700 p-2 w-1/2 h-75 overflow-hidden'>
        <div className='m-2 text-sm flex justify-between'>
          <div>Recent Orders</div>
          <div className='text-orange-600'>View all</div>
        </div>
          <table className='text-sm m-2'>
           <thead>
            <tr className='text-gray-600'>
            <th className='pr-8 pb-2'>OrderId</th>
            <th className='pr-8 pb-2'>Customer</th>
            <th className='pr-8 pb-2'>Amount</th>
            <th className='pr-8 pb-2'>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>harsh</td>
              <td className='pb-1'>₹1200</td>
              <td className='pb-1'><Cancelled/></td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>harsh</td>
              <td className='pb-1'>₹1200</td>
              <td className='pb-1'><Cancelled/></td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>krishna</td>
              <td className='pb-1'>₹100000</td>
              <td className='pb-1'><Shipped/></td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>samarth</td>
              <td className='pb-1'>₹1230</td>
              <td className='pb-1'><Pending/> </td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>Aryan</td>
              <td className='pb-1'>₹1003</td>
              <td className='pb-1'><Delivered/></td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>Aryan</td>
              <td className='pb-1'>₹1003</td>
              <td className='pb-1'><Delivered/></td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>Aryan</td>
              <td className='pb-1'>₹1003</td>
              <td className='pb-1'><Delivered/></td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>Aryan</td>
              <td className='pb-1'>₹1003</td>
              <td className='pb-1'><Delivered/></td>
            </tr>
            <tr>
              <td className='pb-1'>#102</td>
              <td className='pb-1'>Aryan</td>
              <td className='pb-1'>₹1003</td>
              <td className='pb-1'><Delivered/></td>
            </tr>
            </tbody>
          </table>
        </div>
  )
}

export default RecentOrders
