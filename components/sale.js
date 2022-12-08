import React from 'react'

const Sale = () => {
    return (
        <div className='sale  md:w-auto w-full md:py-10 py-5 md:h-auto sm:h-[25rem] relative top-20 my-5 md:my-10 md:mx-14 mx-auto flex border-4 border-dotted' style={{ fontFamily: 'Playfair Display, serif' }}>
            {/* Left section */}
            <div className=' basis-[25%] text-slate-100 lg:block hidden'>
                <div className='bg-[#ff007f] w-56 h-24 text-center mx-auto pt-3 my-4 border-x-4 border-dotted cursor-pointer'>
                    <h3 className='text-2xl'>FLAT</h3>
                    <h1 className='text-4xl'>80% OFF</h1>
                </div>
                <div className='bg-[#ff007f] w-56 h-24 text-center mx-auto pt-3 my-4 border-x-4 border-dotted cursor-pointer'>
                    <h3 className='text-2xl '>FLAT</h3>
                    <h1 className='text-4xl '>70% OFF</h1>
                </div>
                <div className='bg-[#ff007f] w-56 h-24 text-center mx-auto pt-3 my-4 border-x-4 border-dotted cursor-pointer'>
                    <h3 className='text-2xl '>FLAT</h3>
                    <h1 className='text-4xl '>60% OFF</h1>
                </div>

            </div>

            {/* center section */}
            <div className=' lg:basis-[50%] w-full mx-6 lg:mx-auto border-4 border-dotted py-2 bg-[#00ab90]'>
                <div className=' bg-pink-600 lg:w-[30%] md:w-[20%] w-36  mx-auto text-center py-0.5 rounded-lg shadow-2xl cursor-pointer'>
                    <div className='mx-auto px-2 md:px-auto w-28 bg-gradient-to-tl  from-pink-600 to-lime-500 rounded-lg text-2xl text-center max-h-14 mt-3 p-1 text-white' style={{ fontFamily: 'Kaushan Script, cursive' }}>Fashion
                    </div>
                    <h1 className='md:text-xl sm:text-lg text-sm text-[#FFC72C]'>FASHION</h1>
                    <h1 className='2xl:text-3xl sm:text-2xl font-semibold text-[#FFC72C] text-xl'>CARNIVAL</h1>
                    <h3 className='text-white'>12-17 nov</h3>
                </div>

                <div className='md:text-3xl sm:text-2xl text-xl text-center sm:my-4 my-2 font-medium cursor-pointer' style={{ fontFamily: ' sans-serif' }}>
                    <h1>FUN, FASHION,</h1>
                    <h1>SAVINGS & MORE!</h1>
                </div>

                <div className='md:text-6xl sm:text-4xl text-2xl text-center font-semibold text-gray-800 cursor-pointer'>50-80% OFF
                </div>
                <div className='md:text-4xl sm:text-3xl text-xl sm:my-1 text-center font-semibold text-pink-600 font-sans'>SALE IS LIVE!
                </div>
            </div>

            {/* right section */}
            <div className=' basis-[25%] text-slate-100 lg:block hidden'>
                <div className='bg-[#ff007f] w-56 h-24 text-center mx-auto pt-3 my-4 border-x-4 border-dotted cursor-pointer'>
                    <h3 className='text-xl my-[-5px] mt-[-8px]'>HALF</h3>
                    <h3 className='text-5xl my-[-5px]'>PRICE</h3>
                    <h1 className='text-xl my-[-5px]'>STORE</h1>
                </div>
                <div className='bg-[#ff007f] w-56 h-24 text-center mx-auto pt-3 my-4 border-x-4 border-dotted cursor-pointer'>
                    <h3 className='text-xl my-[-5px] mt-[-8px]'>UNDER</h3>
                    <h3 className='text-5xl my-[-5px]'><i className="fa fa-rupee" />499</h3>
                    <h1 className='text-xl my-[-5px]'>STORE</h1>
                </div>
                <div className='bg-[#ff007f] w-56 h-24 text-center mx-auto pt-3 my-4 border-x-4 border-dotted cursor-pointer'>
                    <h3 className='text-xl my-[-5px] mt-[-8px]'>FLAT</h3>
                    <h3 className='text-5xl my-[-5px]'><i className="fa fa-rupee" />400 OFF</h3>
                    <h1 className='text-sm my-[-5px]'>+ FREE SHIPPING ON 1ST ORDER</h1>
                </div>


            </div>
        </div>
    )
}

export default Sale
