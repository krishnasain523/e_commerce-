import React from 'react'
import Navbar from '../../components/admin/HeaderAndSidebar/Navbar'
import Sidebar from '../../components/admin/HeaderAndSidebar/Sidebar'
import Dashboard from './Dashboard'
import AddProduct from './AddProduct'

const Home = () => {
  return (
   <div className='h-full'> 
      <Navbar/>
      
      <div className='flex o'>
        <Sidebar/>
      <AddProduct/>
      </div>
    </div>
  )
}

export default Home
