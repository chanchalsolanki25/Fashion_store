import React from 'react'


const DealDetail = ({ deal }) => {

    return (
        <>
           
                <div className='dealPage grid grid-rows-1 overflow-x-scroll grid-flow-col w-[98vw] mx-auto lg:gap-1 gap-0.5'>
                    {deal.map((product, id) => {
                        return (
                                <div key={id} className='w-[100%]  mx-auto shadow-xl my-6 text-center cursor-pointer bg-slate-200 border-2 border-dashed border-yellow-600' style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                                    <div className='lg:w-28 md:w-32 w-24 xl:h-28 lg:h-40 md:h-28 h-28 overflow-hidden mx-auto'>
                                        <img className='w-full h-full hover:scale-125 duration-500 transition-all ease-in ' src={product.image} alt="category" />
                                    </div>
                                    <h3 className='lg:text-lg md:text-sm sm:text-[10px] text-[8px] md:my-auto my-1 text-gray-700' style={{ fontFamily: 'Roboto, sans-serif' }}>{product.name}
                                    </h3>

                                </div>
                        )
                    })}
                </div>
        </>
    )
}

export default DealDetail
