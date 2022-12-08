import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeWishListItem, addCart } from '../redux/action/ActionType'

const Wishlist = () => {
  const wishlistItem = useSelector(state => state.WishReducer.wishlist);
  const cartItem = useSelector(state => state.CartReducers.cart);
  const dispatch = useDispatch();
  const uniqueDataList = [];

  useEffect(() => {
    const removeDuplicates = (wishlistItem) => {

      wishlistItem?.filter(element => {
        if (!uniqueDataList.includes(element)) {
          uniqueDataList.push(element);
        }
      });

    }
    removeDuplicates(wishlistItem);
  }, [])

  const moveToCart = (item) => {
    const list = cartItem.filter((listItem) => item.id === listItem.id);
    if (list.length > 0) {
      alert('Item already in the cart');
    }
    else {
      dispatch(addCart(item));
      dispatch(removeWishListItem(item.id))
    }
  }

  return (
    <div className='relative top-20'>
      {wishlistItem !== undefined && wishlistItem.length > 0 ?
        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
          {wishlistItem?.map((item, id) => {

            return (
              <>
                <div className='mx-4 flex w-auto  h-auto border-2 rounded-lg my-2' key={item.id}>
                  <div className=' mx-auto'>
                    <i className="fa fa-times m-2 cursor-pointer inline text-right" aria-hidden="true" onClick={() => dispatch(removeWishListItem(item.id))} />
                    <img src={item?.thumbnail} alt="" className='w-60 h-40 my-auto' />
                    <h1 className='font-bold text-lg'>{item.title}</h1>
                    <div className='my-2 flex text-center'>
                      <div className='text-md font-mono font-semibold'><i className="fa fa-rupee" />{Math.floor(item.price - item.discountPercentage)}</div>
                      <div className='text-md ml-3'>MRP <strike>{item.price}</strike></div>
                      <div className='text-md ml-3 text-orange-400'>(<i className="fa fa-rupee" />{Math.ceil(item.discountPercentage)} OFF)</div>
                    </div>
                    <hr className='w-full' />
                    <div className='text-center text-pink-600 text-lg py-1 cursor-pointer' onClick={() => moveToCart(item)}>Move to cart</div>
                    {/* <div className='text-pink-600 rounded-md border-pink-600 text-center text-lg border-2 py-1 w-52 my-1 mx-auto' onClick={() => moveToCart(item)}>Move to cart</div> */}
                  </div>
                </div>

              </>
            )
          })}
        </div> :
        <div className='lg:text-5xl md:text-4xl text-2xl text-center mt-11'>Empty Wishlist!<i className="fa fa-heart" aria-hidden="true" /></div>
      }
    </div>
  )
}

export default Wishlist
