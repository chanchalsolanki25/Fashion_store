import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer';
import { fetchData, addWishlist, fetchCategoryProduct, recentlyViewed } from '../redux/action/ActionType';

const GetData = () => {
  const data = useSelector(state => state.Reducers.data);
  const search = useSelector(state => state.Reducers.search);
  const wishlistItem = useSelector(state => state.WishReducer.wishlist);
  const viewedProducts = useSelector(state => state.RecentlyViewedReducer.viewedProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleCategory = (category, item) => {
    const sortedViewed = viewedProducts?.filter((viewedP) => viewedP.id === item.id);
    dispatch(fetchCategoryProduct(category));
    if (sortedViewed.length === 0) {
      dispatch(recentlyViewed(item));
    }
  }

  const handleWishList = (item) => {

    const list = wishlistItem?.filter((wishItem) => wishItem?.id === item.id);
    if (list.length > 0) {
      alert('Item already in wishlist');
    }
    else {
      dispatch(addWishlist(item));
    }
  }

  return (
    <>
      <div className='grid mt-6 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-center relative top-14 h-full'>
        {search !== null && search !== undefined && search.length > 0 ? search.map((item, id) => {
          return (
            <div className='my-3 h-auto rounded-md p-4 hover:shadow-2xl mx-auto' key={id} >
              <div className='hover:shadow-2xl lg:h-auto h-80 lg:w-64 sm:w-64 w-72 mx-auto'>
                <div className='h-auto w-64 mx-auto rounded-md py-4 group' >
                  <div className='lg:w-60 md:w-40 sm:w-60 lg:h-44 h-36 mx-auto' >
                    <Link href={`details/${item.id}`} key={item.id} >
                      <img src={item.thumbnail} alt="" srcSet="" className='w-full h-full mx-auto' />
                    </Link>
                    <h3 className='relative lg:top-[-40px] top-[-35px] bg-white lg:text-lg text-sm font-medium py-1 my-1 text-center border-2 group-hover:block hidden cursor-pointer' onClick={() => handleWishList(item)}>Wishlist</h3>
                  </div>
                </div>
                <span className='bg-green-600  flex py-1 px-1 my-2 w-16 align-middle text-white text-center rounded-sm ml-3'>{item.rating}<i className="fa fa-star my-auto mx-1"></i>
                </span>
                <h3 className='font-bold lg:my-4 my-2 lg:text-lg text-sm ml-3'>{item?.title.length > 20 ? `${item?.title.slice(0, 20)}...` : item.title}</h3>
                <p className='text-gray-500 ml-3'>${item?.description.length > 40 ? `${item?.description.slice(0, 40)}...` : item.description}</p>
                <div className="flex justify-between w-60">
                  <p className='text-lg font-mono ml-3'>Rs:{item.price}</p>
                </div>
              </div>
            </div>
          )
        }) :
          data !== null && data !== undefined && data.length > 0 && data.map((item, id) => {
            return (
              <>
                <div className='hover:shadow-2xl lg:h-auto h-80 lg:w-64 sm:w-64 w-72 mx-auto' key={id}>
                  <div className='h-auto w-64 mx-auto rounded-md py-4 group'>
                    <div className='lg:w-60 md:w-40 sm:w-60 lg:h-44 h-36 mx-auto' onClick={() => handleCategory(item.category, item)}>
                      <Link href={`details/${item.id}`}>
                        <img src={item.thumbnail} alt="" srcSet="" className='w-full h-full mx-auto' />
                      </Link>
                      <h3 className='relative lg:top-[-40px] top-[-35px] bg-white lg:text-lg text-sm font-medium py-1 my-1 text-center border-2 group-hover:block hidden cursor-pointer' onClick={() => handleWishList(item)}>Wishlist</h3>
                    </div>

                    <div className='bg-green-600  flex py-1 px-1 my-2 w-16 align-middle text-white text-center rounded-sm ml-3'>{item.rating}<i className="fa fa-star my-auto mx-1"></i></div>
                    <h3 className='font-bold lg:my-4 my-2 lg:text-lg text-sm ml-3'>{item?.title.length > 20 ? `${item?.title.slice(0, 20)}...` : item.title}</h3>
                    <p className='text-gray-500 ml-3'>${item?.description.length > 40 ? `${item?.description.slice(0, 40)}...` : item.description}</p>
                    <div className="flex justify-between w-60">
                      <p className='text-lg font-mono ml-3'>Rs:{item.price}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
      </div>
     { data?.length !== 0 && <Footer />}
    </>
  )
}

export default GetData
