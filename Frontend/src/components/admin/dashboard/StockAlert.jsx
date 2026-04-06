import React from 'react'

const StockAlert = () => {
  return (
    <div className='bg-white text-black rounded-xl border-2 border-emerald-700 p-2 w-1/2 h-75 overflow-hidden'>
        <div className='m-2 text-sm flex justify-between'>
          <div>Low stock alert</div>
          <div className='text-orange-600'>Manage</div>
        </div>
          <table className='text-sm m-2'>
           <thead>
            <tr className='text-gray-600'>
            <th className='pr-28 pb-2'>Product</th>
            <th className='pr-28 pb-2'>Category</th>
            <th className='pr-28 pb-2'>Stock</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className='pb-1 flex gap-1 items-center
              '>
                <img className='w-8 h-8 border-1 rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
              </td>
              <td>Cricket</td>
              <td className='text-orange-600'>3 lefts</td>
            </tr>   
            <tr>
              <td className='pb-1 flex gap-1 items-center
              '>
                <img className='w-8 h-8 border-1 rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
              </td>
              <td>Cricket</td>
              <td className='text-orange-600'>3 lefts</td>
            </tr>   
            <tr>
              <td className='pb-1 flex gap-1 items-center
              '>
                <img className='w-8 h-8 border-1 rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
              </td>
              <td>Cricket</td>
              <td className='text-orange-600'>3 lefts</td>
            </tr>   
            <tr>
              <td className='pb-1 flex gap-1 items-center
              '>
                <img className='w-8 h-8 border-1 rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
              </td>
              <td>Cricket</td>
              <td className='text-orange-600'>3 lefts</td>
            </tr>   
            <tr>
              <td className='pb-1 flex gap-1 items-center'>
                <img className='w-8 h-8 border-1 rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
              </td>
              <td>Cricket</td>
              <td className='text-orange-600'>3 lefts</td>
            </tr>   
            <tr>
              <td className='pb-1 flex gap-1 items-center
              '>
                <img className='w-8 h-8 border-1 rounded border-gray-500' src="https://www.dsc-cricket.co.uk/media/catalog/product/cache/ead9833944ee19ab74f6785fdc9a346d/x/l/xlite-l-e-english-willow-cricket-bat.jpg" alt="image" />
                <div>SS Ton Bat</div>
              </td>
              <td>Cricket</td>
              <td className='text-orange-600'>3 lefts</td>
            </tr>   
            </tbody>
          </table>
        </div>
  )
}

export default StockAlert
