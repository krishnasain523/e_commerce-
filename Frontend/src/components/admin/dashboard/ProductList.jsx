import React from 'react'

const ProductList = () => {
  return (
     <div className='bg-white text-black rounded-xl border-2 border-emerald-700 p-2 w-full mt-4 h-76 overflow-hidden'>
        <div className='m-2 text-sm flex justify-between'>
          <div>Recent Orders</div>
          <div className='flex gap-2'>
            <div className='border-1 border-gray-300 py-1 px-2 rounded text-gray-600'>Filter</div>
            <div className='bg-orange-600 text-white py-1 px-2 rounded'>+Add Product</div>
          </div>
        </div>
          <table className='text-sm m-2'>
           <thead>
            <tr className='text-gray-600'>
            <th className='pr-20 pb-1'>Product</th>
            <th className='pr-20 pb-1'>Category</th>
            <th className='pr-20 pb-1'>Price</th>
            <th className='pr-20 pb-1'>Stock</th>
            <th className='pr-20 pb-1'>Rating</th>
            <th className='pr-20 pb-1'>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className='pb-1 flex gap-1 items-center'> <img className='w-8 h-8 border rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
                </td>
              <td>Equipment</td>
              <td>₹1200</td>
              <td>120</td>
              <td className='text-orange-600'>★4.5</td>
              <td>
               <div className='pb-1 flex gap-3'>
                <div className='text-orange-600'>Edit</div>
                <div className='text-red-700'>Delete</div>
                </div>
                </td>
            </tr>
            <tr>
              <td className='pb-1 flex gap-1 items-center'> <img className='w-8 h-8 border rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
                </td>
              <td>Equipment</td>
              <td>₹1200</td>
              <td>120</td>
              <td className='text-orange-600'>★4.5</td>
              <td>
               <div className='pb-1 flex gap-3'>
                <div className='text-orange-600'>Edit</div>
                <div className='text-red-700'>Delete</div>
                </div>
                </td>
            </tr>
            <tr>
              <td className='pb-1 flex gap-1 items-center'> <img className='w-8 h-8 border rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
                </td>
              <td>Equipment</td>
              <td>₹1200</td>
              <td>120</td>
              <td className='text-orange-600'>★4.5</td>
              <td>
               <div className='pb-1 flex gap-3'>
                <div className='text-orange-600'>Edit</div>
                <div className='text-red-700'>Delete</div>
                </div>
                </td>
            </tr>
            <tr>
              <td className='pb-1 flex gap-1 items-center'> <img className='w-8 h-8 border rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
                </td>
              <td>Equipment</td>
              <td>₹1200</td>
              <td>120</td>
              <td className='text-orange-600'>★4.5</td>
              <td>
               <div className='pb-1 flex gap-3'>
                <div className='text-orange-600'>Edit</div>
                <div className='text-red-700'>Delete</div>
                </div>
                </td>
            </tr>
            <tr>
              <td className='pb-1 flex gap-1 items-center'> <img className='w-8 h-8 border rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
                </td>
              <td>Equipment</td>
              <td>₹1200</td>
              <td>120</td>
              <td className='text-orange-600'>★4.5</td>
              <td>
               <div className='pb-1 flex gap-3'>
                <div className='text-orange-600'>Edit</div>
                <div className='text-red-700'>Delete</div>
                </div>
                </td>
            </tr>
            <tr>
              <td className='pb-1 flex gap-1 items-center'> <img className='w-8 h-8 border rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
                </td>
              <td>Equipment</td>
              <td>₹1200</td>
              <td>120</td>
              <td className='text-orange-600'>★4.5</td>
              <td>
               <div className='pb-1 flex gap-3'>
                <div className='text-orange-600'>Edit</div>
                <div className='text-red-700'>Delete</div>
                </div>
                </td>
            </tr>
            </tbody>
          </table>
        </div>
  )
}

export default ProductList
