import React from 'react'
const AddProduct = () => {
  return (
  <div className='bg-gray-100 text-black m-8 rounded-xl p-6 border-2 border-emerald-500 w-full h-1/2'>
    <form action="">
      <div className='flex justify-center mb-4'><div className='w-30 h-30 border rounded-2xl flex justify-center items-center'>
        <img src="https://static.vecteezy.com/system/resources/previews/015/337/675/original/transparent-upload-icon-free-png.png" alt="" /></div></div>
      <div className='flex gap-2 m-4'>
        <span>Title:</span>
      <input className='border w-full border-gray-300 outline-none rounded' type="text" />
      </div>
      <div className='flex gap-2 m-4 items-center'>
        <span>Description:</span>
      <div className='h-full w-full'><textarea className='border w-full grid-cols-12 h- border-gray-300 outline-none rounded' name="" id=""></textarea>
      </div>
      </div>
      <div className='flex gap-2 m-4'>
        <span>Category:</span>
      <select name='category' className="border w-full col-12 border-gray-300 outline-none rounded">
        <option value="defaultValue" disable='true'>select</option>
        <option value="Sports equipment">Equipments</option>
        <option value="Sports wear">Clothes</option>
        <option value="Sports shoes">Shoes</option>
      </select>
      </div>
     
     <div className='flex'><div className='flex gap-2 m-4'>
        <span>Price(rs):</span>
      <input className='border border-gray-300 outline-none rounded' type="text" />
      </div>

       <div className='flex gap-2 m-4'>
        <span>Discount %</span>
      <input className='border border-gray-300 outline-none rounded' type="text" />
      </div>

       <div className='flex gap-2 m-4'>
        <span>Delivery Charge</span>
      <input className='border border-gray-300 outline-none rounded' type="text" />
      </div>

       <div className='flex gap-2 m-4'>
        <span>Stocks</span>
      <input className='border border-gray-300 outline-none rounded' type="text" />
      </div>
      </div>
      <button className='p-2 rounded-xl border border-yellow-700 bg-amber-400'>Add Product</button>
     
    </form>
  </div>
  )
}

export default AddProduct
