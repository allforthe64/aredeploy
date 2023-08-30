import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center'>
      <p className='heading grey text-6xl mb-6 sm:max-md:text-4xl max-sm:text-3xl max-md:mb-2'>Thanks for your order!</p>
      <p className='text text-left text-lg max-lg:text-center mb-6 max-md:mb-2 max-md:text-sm'>A Rep will be in contact with you with next steps</p>
      <Link to={'/'} className='orange-background orange-bg-button orange-border text-white rounded-3xl max-md:text-lg max-md:px-10 headings text-3xl px-16 py-2 transition-color duration-200 ease-in-out' >Back To Home</Link>
    </div>
  )
}

export default Success