import React from 'react'

const Total = ({total,number,alert}) => {
    return (
        <div className='bg-white rounded-xl border-2 border-emerald-700 w-1/4 h-24 p-2'>
            <div className='text-gray-500 text-sm'>{total}</div>
            <h3 className='text-black font-bold text-2xl'>{number}</h3>
            <div className='text-green-500 text-sm'>{alert}</div>
        </div>
    )
}

export default Total
