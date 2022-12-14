import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, addWishlist, removeSelectedProduct, productDetail, fetchCategoryProduct, productQuantuty } from '../../redux/action/ActionType';
import ImgDetail from '../../components/imgDetail';
import { useState } from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';

const Detail = () => {
  const { query } = useRouter();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [qtyFlag, setQtyFlag] = useState(false);

  const productsDetail = useSelector(state => state.Reducers.detail);
  const categoryProduct = useSelector(state => state.Reducers.categoryProduct);
  const loginUser = useSelector(state => state.LoginReducer.logInUser);
  const cartItems = useSelector(state => state.CartReducers.cart);
  const wishlistItem = useSelector(state => state.WishReducer.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.detail && query.detail !== '') {
      dispatch(productDetail(query.detail[0]));
      return () => {
        dispatch(removeSelectedProduct());
      }
    }
  }, [query.detail]);


  // Increase Product Quantity 
  const increaseQty = (id, stock) => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      if (productsDetail.id === id) {
        dispatch(productQuantuty(id, quantity + 1));
        setQtyFlag(true);
      }

    }
  }

  // Decrease Product Quantity 
  const decreaseQty = (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (productsDetail.id === id) {
        dispatch(productQuantuty(id, quantity - 1));
        setQtyFlag(true);
      }
    }
  }

  // Add to cart
  const addToCart = (item) => {

    const data = cartItems?.filter((cart) => cart.id === item.id);
    if (loginUser.length !== 0) {

      if (data.length === 0) {
        dispatch(addCart(item));
        if (!qtyFlag) {
          dispatch(productQuantuty(item.id, quantity));
        }
      }
    }
    else {
      router.push('/login');
      alert('Please use this data to get entered :- \n username: kminchelle \n password: 0lelplR');

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
      <div className='relative top-20 lg:w-auto w-[100vw]'>
        {Object.keys(productsDetail).length === 0 ?
          <div className='text-2xl font-semibold'>Loading...</div> :
          <div className=''>
            <div className='flex md:flex-row flex-col lg:w-auto w-full'>

              <ImgDetail />

              <div className='md:w-1/2 w-full flex flex-col justify-center'>
                <h3 className='font-bold md:text-4xl sm:text-3xl text-2xl mt-4 ml-3'>{productsDetail.title}</h3>
                <p className='text-gray-500 my-2 ml-3 sm:text-lg text-sm mx-2'>{productsDetail?.description}</p>
                <div className='flex'>
                  <div className='bg-green-600  flex py-1 px-1 my-2 w-16 align-middle text-white text-center rounded-sm ml-3'>{productsDetail.rating}<i className="fa fa-star my-auto mx-1"></i>
                  </div>
                  <div className='flex text-white' style={{ alignItems: 'center' }}>
                    <button className='mx-1 px-2 h-8 bg-slate-500 rounded-md' onClick={() => increaseQty(productsDetail.id, productsDetail.stock)}>+</button>
                    <input type="text" name="qty" id="qty" value={quantity} className='text-black text-center w-10 border-2 h-8' />
                    <button className='mx-1 px-2 h-8 bg-slate-500 rounded-md' onClick={() => decreaseQty(productsDetail.id)}>-</button>
                  </div>
                </div>
                <hr className='mx-4' />

                <div className='my-5 flex mx-2'>
                  <p className='md:text-2xl text-xl font-mono ml-3 font-semibold'><i className="fa fa-rupee" />{Math.floor(productsDetail.price - productsDetail.discountPercentage)}</p>
                  <p className='text-xl ml-3'>MRP <strike>{productsDetail.price}</strike></p>
                  <p className='text-xl ml-3 text-orange-400'>(<i className="fa fa-rupee" />{Math.ceil(productsDetail.discountPercentage)} OFF)
                  </p>
                </div>

                <div className='md:text-xl sm:text-lg text-sm mx-2'>
                  <button className='border-2 rounded-lg bg-pink-600 text-white md:py-3 sm:py-2 py-1 md:px-10 sm:px-8 px-6' onClick={() => addToCart(productsDetail)}>Add to cart
                  </button>
                  <button className='border-2 rounded-lg md:py-3 sm:py-2 py-1 md:px-8 sm:px-6 px-4 ml-4' onClick={() => handleWishList(productsDetail)}>
                    <i className="fa fa-heart" aria-hidden="true" /> Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Same category's products */}
            <div className=' relative md:top-10 mx-4 sm:top-[1rem] vsm:top-[1rem] top-[1rem] h-auto'>
              <h1 className='md:text-2xl text-xl my-7 font-bold '>Similar Products</h1>
              <div className='grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2  mt-6  justify-center lg:w-auto '>
                {categoryProduct?.map((item, id) => {
                  return (
                    <div className='hover:shadow-2xl md:h-auto h-72 :w-60  lg:mx-4 mx-1  border-2 mb-5 ' key={id}>
                      <div className='lg:h-[23rem] md:h-[21rem] h-[18rem]  md:w-56 w-[11rem] mx-auto rounded-md pb-4 group'>
                        <div className='lg:w-56 md:w-40 w-36 lg:h-44 h-36 mx-auto' onClick={() => dispatch(fetchCategoryProduct(item.category))}>
                          <Link href={`${item.id}`}>
                            <img src={item.thumbnail} alt="" srcSet="" className='w-full h-full mx-auto' />
                          </Link>
                        </div>
                        <div className='bg-green-600  flex py-1 px-1 my-2 w-16 align-middle text-white text-center rounded-sm ml-3'>{item.rating}<i className="fa fa-star my-auto mx-1" />
                        </div>
                        <h1 className='font-bold lg:my-4 my-2 lg:text-lg text-sm ml-3'>{item?.title.length > 20 ? `${item?.title.slice(0, 20)}...` : item.title}</h1>
                        <p className='text-gray-500 lg:ml-3 mx-1 md:text-lg text-[14px]'>${item?.description.length > 40 ? `${item?.description.slice(0, 35)}...` : item.description}</p>
                        <p className='text-lg font-mono ml-3'>Rs:{item.price}</p>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div>

            <Footer />
          </div>
        }
      </div>
    </>
  )
}

export default Detail
