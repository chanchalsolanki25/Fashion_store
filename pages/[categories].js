import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchCategoryProduct, addWishlist, recentlyViewed } from '../redux/action/ActionType'

const Categories = () => {
    const categoryProduct = useSelector(state => state.Reducers.categoryProduct);
    const viewedProducts = useSelector(state => state.RecentlyViewedReducer.viewedProduct);

    const wishlistItem = useSelector(state => state.WishReducer.wishlist);
    const { query } = useRouter();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryProduct(query.categories));
    }, [query.categories]);

    const handleWishList = (item) => {

        const list = wishlistItem?.filter((wishItem) => wishItem?.id === item.id);

        if (list.length > 0) {
            alert('Item already in wishlist');
        }
        else {
            dispatch(addWishlist(item));
        }
    }

    const handleViewedProduct = (product) => {
        // dispatch(recentlyViewed(product));
        const sortedViewed = viewedProducts?.filter((viewedP) => viewedP.id === product.id);
        if (sortedViewed.length === 0) {
            dispatch(recentlyViewed(product));       
         }
    }


    return (
        <div className='absolute top-20 w-full'>
            <div className='grid mt-6 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-center relative top-14'>
                {categoryProduct !== null && categoryProduct !== undefined && categoryProduct.length > 0 && categoryProduct.map((product, id) => {
                    return (
                        <>
                            <div className='hover:shadow-2xl lg:h-auto h-80 lg:w-64 sm:w-64 w-72 mx-auto' key={id}>
                                <div className='h-auto w-64 mx-auto rounded-md py-4 group'>
                                    <div className='lg:w-60 md:w-40 sm:w-60 lg:h-44 h-36 mx-auto' onClick={() => handleViewedProduct(product)}>
                                        <Link href={`details/${product.id}`} key={product.id}>
                                            <img src={product.thumbnail} alt="" srcSet="" className='w-full h-full mx-auto' />
                                        </Link>
                                        <h3 className='relative lg:top-[-40px] top-[-35px] bg-white lg:text-lg text-sm font-medium py-1 my-1 text-center border-2 group-hover:block hidden cursor-pointer' onClick={() => handleWishList(product)}>Wishlist</h3>
                                    </div>

                                    <div className='bg-green-600  flex py-1 px-1 my-2 w-16 align-middle text-white text-center rounded-sm ml-3'>{product.rating}<i className="fa fa-star my-auto mx-1"></i>
                                    </div>
                                    <h3 className='font-bold lg:my-4 my-2 lg:text-lg text-sm ml-3'>{product?.title.length > 20 ? `${product?.title.slice(0, 20)}...` : product.title}</h3>
                                    <p className='text-gray-500 ml-3'>${product?.description.length > 40 ? `${product?.description.slice(0, 40)}...` : product.description}</p>
                                    <div className="flex justify-between w-60">
                                        <p className='text-lg font-mono ml-3'>Rs:{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
