import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative top-40'>
      <div>
        <Link href='/'><h1 className='text-lg font-semibold font-sans text-center py-3 bg-gray-700 text-white cursor-pointer'>Back to Top</h1></Link>
      </div>
      <div className='grid grid-cols-4 bg-slate-800 text-center text-white h-[50vh]'>

        <div className='my-4'>
          <h1 className='md:text-2xl sm:text-lg vsm:text-[14px] text-[12px] my-2 font-semibold cursor-pointer'>Get to Know Us
          </h1>
          <div className='lg:w-[43%] w-[64%] mx-auto text-left my-3 lg:text-lg md:text-sm vsm:text-[12px] text-[10px]' style={{ fontFamily: 'Oswald, sans-serif' }}>
            <p className='my-0.5 cursor-pointer'>About Us</p>
            <p className='my-0.5 cursor-pointer'>Career</p>
            <p className='my-0.5 cursor-pointer'>Press Releases</p>
          </div>
        </div>

        <div className='my-4'>
          <h1 className='md:text-2xl sm:text-lg vsm:text-[14px] text-[12px] my-2 font-semibold cursor-pointer'>Conect Us
          </h1>
          <div className='lg:w-[28%] w-[43%] text-left mx-auto my-3 lg:text-lg md:text-sm vsm:text-[12px] text-[10px]' style={{ fontFamily: 'Oswald, sans-serif' }}>
            <p className='my-0.5 cursor-pointer'>Facebook</p>
            <p className='my-0.5 cursor-pointer'>Twitter</p>
            <p className='my-0.5 cursor-pointer'>Instgram</p>
          </div>
        </div>

        <div className='my-4'>
          <h1 className='md:text-2xl sm:text-lg vsm:text-[14px] text-[12px] my-2 font-semibold cursor-pointer'>Make Money with Us
          </h1>
          <div className='lg:w-[58%] w-[90%]  mx-auto text-left my-3 lg:text-lg md:text-sm vsm:text-[12px] text-[10px]' style={{ fontFamily: 'Oswald, sans-serif' }}>
            <p className='my-0.5 cursor-pointer'>Sell on Fashion</p>
            <p className='my-0.5 cursor-pointer'>Sell under Fashion Accelerator</p>
            <p className='my-0.5 cursor-pointer'>Fashion Global Selling</p>
            <p className='my-0.5 cursor-pointer'>Become an Affiliate</p>
            <p className='my-0.5 cursor-pointer'>Advertise Your Products</p>
          </div>
        </div>

        <div className='my-4'>
          <h1 className='md:text-2xl sm:text-lg vsm:text-[14px] text-[12px] my-2 font-semibold cursor-pointer'>Let us Help you
          </h1>
          <div className='lg:w-[43%] w-[66%] mx-auto text-left my-3 lg:text-lg md:text-sm vsm:text-[12px] text-[10px]' style={{ fontFamily: 'Oswald, sans-serif' }}>
            <p className='my-0.5 cursor-pointer'>Your Account</p>
            <p className='my-0.5 cursor-pointer'>Returns Centre</p>
            <p className='my-0.5 cursor-pointer'>100% Purchase Protection</p>
            <p className='my-0.5 cursor-pointer'>Help</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
