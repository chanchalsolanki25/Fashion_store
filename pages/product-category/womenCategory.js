import React from 'react'

const WomenCategory = ({ data, menData }) => {

    return (
        <>
            {/* Women category */}
            <div className='grid grid-cols-7 w-[98vw] mx-auto gap-1'>
                {data.map((singleData) => {
                    return (
                        <div key={singleData.id} >
                            <div className='w-[100%]  mx-auto shadow-xl my-6 text-center cursor-pointer' style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                                <div className='w-[100%] xl:h-52 lg:h-40 md:h-28 h-20 overflow-hidden'>
                                    <img className='w-full h-full hover:scale-110 duration-500 transition-all ease-in' src={singleData.image} alt="category" />
                                </div>
                                <h3 className='lg:text-xl md:text-lg sm:text-[12px] text-[10px] md:my-auto my-1 text-gray-700'>{singleData.name}</h3>
                                <div className='lg:text-sm md:text-xs md:block hidden my-1 text-gray-700'> STARTING <i className="fa fa-rupee" />: {singleData.price}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Men category */}
            <div className='grid grid-cols-7 w-[98vw] mx-auto gap-1'>
                {menData.map((data) => {
                    return (
                        <div key={data.id} >
                            <div className='w-[100%]  mx-auto shadow-xl my-6 text-center cursor-pointer' style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                                <div className='w-[100%] xl:h-52 lg:h-40 md:h-28 h-20 overflow-hidden'>
                                    <img className='w-full h-full hover:scale-110 duration-500 transition-all ease-in' src={data.image} alt="category" /></div>
                                <h3 className='lg:text-xl md:text-lg sm:text-[12px] text-[10px] md:my-auto my-1 text-gray-700'>{data.name}</h3>
                                <p className='lg:text-sm md:text-xs md:block hidden my-1 text-gray-700'> STARTING <i className="fa fa-rupee" />: {data.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default WomenCategory
