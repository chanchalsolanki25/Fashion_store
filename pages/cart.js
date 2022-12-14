import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import GoogleMap from './address';
import { removeProduct, removeAll, fetchCategoryProduct, moveAllToWishlist } from '../redux/action/ActionType';
import Link from 'next/link';
import Footer from '../components/Footer';

const Cart = () => {
    const [count, setCount] = useState(0);
    const cartItem = useSelector(state => state.CartReducers.cart);
    const address = useSelector(state => state.OrderReducer.address);
    const productQuantity = useSelector(state => state.QuantityReducer.quantity);
    const productQuantityId = useSelector(state => state.QuantityReducer.id);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (cartItem !== undefined && cartItem.length !== 0) {
            cartItem = cartItem?.map((item) => {
                if (item.id === productQuantityId) {
                    item.qty = productQuantity;
                }
            })
            setCount(cartItem.length);
        }
    }, [cartItem]);

    // Total price of all cart items
    const totalPrice = cartItem?.reduce((curr, next) => {
        return curr + (next.price * next.qty);
    }, 0);

    // Total discount of all cart items
    const totalDiscount = cartItem?.reduce((curr, next) => {
        return curr + (next.discountPercentage * next.qty);
    }, 0);

    const moveAllWIshlist = () => {
        dispatch(moveAllToWishlist(cartItem));
        dispatch(removeAll());
        setCount(0);
    }

    return (
        <>
            <div className='relative top-20'>
                {cartItem !== undefined && cartItem?.length > 0 && cartItem !== null ?
                    <div className='flex md:flex-row flex-col'>
                        {/* Left section code */}
                        < section className='md:w-1/2 w-full lg:mx-4 mx-2' >
                            <div className='flex justify-between my-8'>
                                <h1 className='lg:text-xl text-lg font-semibold mx-2'>{count} ITEMS SELECTED</h1>
                                <div className='flex lg:text-lg md:text-sm text-slate-600'>
                                    <button className='lg:mx-4 mx-2' onClick={() => dispatch(removeAll())}>Remove</button>
                                    <button className='lg:mx-4 mx-2' onClick={() => moveAllWIshlist()}>Move to wishlist</button>
                                </div>
                            </div>
                            <hr />

                            {cartItem?.map((item, id) => {

                                return (

                                    <div key={item.id}>
                                        <div className='flex w-full h-56 border-2 rounded-lg my-2' >
                                            <i className="fa fa-times m-2 cursor-pointer inline text-right" aria-hidden="true" onClick={() => dispatch(removeProduct(item.id))} />
                                            <img src={item.thumbnail} alt="" className='lg:w-36 w-32 lg:h-40 h-36 mx-3 my-auto' />
                                            <div className='my-auto'>
                                                <Link href={`/details/${item.id}`}>
                                                    <p className='font-bold text-lg cursor-pointer hover:text-xl transition-all duration-500' onClick={()=> dispatch(fetchCategoryProduct(item.category))}>{item.title}</p>
                                                </Link>
                                                <p>{item?.description.slice(0, 50)}...</p>
                                                <p className='font-semibold'>Qty: {item.qty}</p>

                                                <div className='my-2 flex'>
                                                    <p className='ld:text-xl text-lg font-mono font-semibold'><i className="fa fa-rupee" />{Math.floor((item.price * item.qty) - (item.discountPercentage * item.qty))}</p>
                                                    <p className='lg:text-lg text-sm ml-3'>MRP <strike>{item.price * item.qty}</strike></p>
                                                    <p className='lg:text-lg text-sm ml-3 text-orange-400'>(<i className="fa fa-rupee" />{Math.ceil(item.discountPercentage * item.qty)} OFF)</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </section>


                        {/* Right section code*/}
                        <section className='md:w-1/2 w-full'>
                            {/* Price Detail code */}
                            <div className='lg:w-1/2 w-full mx-auto mt-10 bg-slate-50 p-12 rounded-lg'>
                                <h1 className='text-xl font-semibold my-4'>Price details ({count} items)</h1>
                                <div className='flex justify-between my-1'>Total MRP <h1><i className="fa fa-rupee" />{Math.trunc(totalPrice)}</h1></div>
                                <div className='flex justify-between my-1 '>Discount on MRP <h1 className='text-green-600'><i className="fa fa-rupee" />{Math.trunc(totalDiscount)}</h1></div>
                                <div className='flex justify-between my-1 '>Coupon Discount<h1 className='text-red-700'>Apply Coupon</h1></div>
                                <div className='flex justify-between my-1'>Convenience Fee <h1 className='text-green-600'>FREE</h1></div>
                                <hr className='mt-5' />
                                <div className='flex justify-between my-1'>Total amount<h1 className='text-red-700'><i className="fa fa-rupee" />{Math.trunc(totalPrice - totalDiscount)}</h1></div>
                                <Link href='/address'>
                                    <button className='bg-purple-600 w-full py-2 my-2 text-white' >Shipping Address</button>
                                </Link>
                                {address?.length !== 0 && <Link href='/checkout'>
                                    <button className='bg-pink-600 w-full py-2 my-2 text-white' >Place Order</button>
                                </Link>}
                            </div>
                        </section >
                    </div > :
                    <div className=' mt-12 text-center h-[35vh]'>
                        <img src='/img/empty-cart.png' className='h-20 w-20 mx-auto'></img>
                        <h1 className='text-2xl my-4'>Empty Cart!</h1>
                        <p>There is nothing in your bag, lets add some items...</p>
                        <button className='py-2 px-10 text-lg text-white bg-pink-600 my-3 rounded-lg hover:bg-pink-500' onClick={() => router.push('/products')}>Add items</button>
                    </div>

                }
            </div >
            <Footer />
        </>

    )
}

export default Cart
