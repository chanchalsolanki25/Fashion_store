import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment/moment';
import { fetchCategoryProduct } from '../redux/action/ActionType';
import Link from 'next/link';
import { useEffect } from 'react';

const Orders = () => {
  const orders = useSelector(state => state.OrderReducer.order);
  const address = useSelector(state => state.OrderReducer.address);
  const id = useSelector(state => state.OrderReducer.id);
  const recentlyViewed = useSelector(state => state.RecentlyViewedReducer.viewedProduct);
  const productQuantity = useSelector(state => state.QuantityReducer.quantity);
  const productQuantityId = useSelector(state => state.QuantityReducer.id);
  const dispatch = useDispatch();

  useEffect(()=>{
     orders = orders?.map((order)=>{
      if(order.id === productQuantityId){
        order.qty = productQuantity
      }
     })
  }),[];

  return (
    <div className='absolute top-24 w-[100%]'>
      <div className='md:w-[90%] w-[100%] mx-auto flex md:flex-row flex-col bg-slate-50 rounded-lg' style={{ fontFamily: 'Ubuntu, sans-serif' }}>
        <div className='md:w-auto w-[100vw] mx-2'>
          <h1 className=' lg:text-xl text-lg text-gray-600 my-2 font-semibold  mt-2'>{orders?.length !== 0 ? 'Order ID:' : ''} {orders.length ? id : ''}</h1>
          {orders !== undefined && orders?.map((order, id) => {
            return (
              <div key={id}>
                {/* Ordered Product */}

                <div className='flex mb-4'>
                  <h3 className='md:basis-auto basis-[45%] my-1 text-gray-400 lg:text-[18px] text-[14px]'>Order date: <i className='text-gray-500'>{moment().format("Do MMM YY")}</i></h3>
                  <span className='h-7 w-[2px] lg:mx-7 mx-3 bg-black'></span>
                  <p className='md:basis-auto basis-[45%] text-green-600 lg:text-[18px] text-[14px] '>Estimated Delivery: {moment().add(5, 'days').format('Do MMM YYYY')} </p>
                </div>

                <div className='md:w-[50vw] w-full flex'>
                  <img src={order.thumbnail} alt={order.title} className='lg:w-44 md:w-40 sm:w-44 w-40 lg:h-44 md:h-40 sm:h-44 h-40 lg:p-8 p-5 rounded-md bg-slate-100 my-3' />
                  <div className='my-3 font-semibold mx-3 text-gray-600'>
                    <h1 className='lg:text-lg md:text-[1rem] sm:text-[1.1rem] text-sm'>{order.title}</h1>
                    <h1 className='lg:text-[1rem] md:text-[0.9rem] sm:text-[1rem] text-sm my-2 text-black'>{order.description}</h1>
                    <h2 className='my-1 t ext-lg'><i className="fa fa-rupee" />{order.price}</h2>
                    <p className='text-gray-400'>Qty: {order.qty}</p>
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
          {/* Shipping Address */}
        </div>
        <div className='md:w-auto w-[100vw] ml-5'>
          <h1 className='md:text-xl text-lg font-semibold my-3'>{address?.length !== 0 ? 'Shipping Address:' : ''}</h1>
          <div className=''>
            <h1 className='text-gray-600 md:text-lg text-[1rem]'>{address?.name}</h1>
            <h1>{address?.houseNo}</h1>
            <h1>{address?.landMark}</h1>
            <h1>{address?.city}</h1>
            <h1>{address?.state}</h1>
            <h1>{address?.pincode}</h1>
            <h1>{address?.number}</h1>
          </div>
        </div>
      </div>

      {/* Recently viewed Products */}
      <div className=' relative lg:top-12 md:top-10 top-8  md:w-auto w-full mx-4'>
        <h1 className='md:text-2xl text-xl my-7 font-bold '>{recentlyViewed?.length > 0 ? 'Recently Viewed Products' : ''}</h1>
        <div className='grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2  mt-6  justify-center '>
          {recentlyViewed !== undefined && (recentlyViewed.length > 10 ? recentlyViewed.slice(0, 10) : recentlyViewed).map((viewedProduct) => {
            return (
              <div className='hover:shadow-2xl md:h-auto h-72 :w-60  lg:mx-4 mx-1  border-2 mb-5 ' key={viewedProduct.id}>
                <div className='lg:h-[23rem] md:h-[21rem] h-[18rem]  md:w-56 w-[11rem] mx-auto rounded-md pb-4 group'>
                  <div className='lg:w-56 md:w-40 w-36 lg:h-44 h-36 mx-auto' onClick={() => dispatch(fetchCategoryProduct(viewedProduct.category))}>
                    <Link href={`details/${viewedProduct.id}`}>
                      <img src={viewedProduct.thumbnail} alt="" srcSet="" className='w-full h-full mx-auto' />
                    </Link>
                  </div>
                  <div className='bg-green-600  flex py-1 px-1 my-2 w-16 align-middle text-white text-center rounded-sm ml-3'>{viewedProduct.rating}<i className="fa fa-star my-auto mx-1"></i></div>
                  <h3 className='font-bold lg:my-4 my-2 lg:text-lg text-sm ml-3'>{viewedProduct?.title.length > 20 ? `${viewedProduct?.title.slice(0, 20)}...` : viewedProduct.title}</h3>
                  <p className='text-gray-500 lg:ml-3 mx-1 md:block hidden'>${viewedProduct?.description.length > 40 ? `${viewedProduct?.description.slice(0, 40)}...` : viewedProduct.description}</p>
                  <div className="flex justify-between w-60">
                    <p className='text-lg font-mono ml-3'>Rs:{viewedProduct.price}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Orders
