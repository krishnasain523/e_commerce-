import React from 'react'
import Total from '../../components/admin/dashboard/Total'
import RecentOrders from '../../components/admin/dashboard/RecentOrders'
import StockAlert from '../../components/admin/dashboard/StockAlert'
import ProductList from '../../components/admin/dashboard/ProductList'

const Dashboard = () => {
  return (
    <div className='w-full m-4'>
    <div className='my-4 w-full flex gap-4'>
      <Total total={"Total revenue"} number={"₹12,354"} alert={"+12% this month"}/>
      <Total total={"Total orders"} number={"342"} alert={"+8 today"}/>
      <Total total={"Total products"} number={"128"} alert={"12 low stock"}/>
      <Total total={"Total users"} number={"1,204"} alert={"+34 this week"}/>
    </div>

    <div className='flex gap-4'>
      <RecentOrders/>
      <StockAlert/>
    </div>
    <div className='flex gap-4'>
      <ProductList/>
    </div>
    </div>
  )
}

export default Dashboard
