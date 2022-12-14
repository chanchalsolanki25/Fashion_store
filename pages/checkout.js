import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { removeAll, yourOrders } from '../redux/action/ActionType';
import { v4 as uuidv4 } from 'uuid';

const Checkout = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const cartProduct = useSelector(state => state.CartReducers.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [cartLength, setCartLength] = useState(0);
    const unique = uuidv4();


    const getTotalAmount = () => {
        if (cartProduct !== null && cartProduct.length > 0) {
            setCartLength(cartProduct.length);
            const total = cartProduct?.reduce((rate, next) => {
                return rate + next.price;
            }, 0);
            setTotalPrice(total);

            const discount = cartProduct?.reduce((dis, next) => {
                return dis + next.discountPercentage;

            }, 0);
            setTotalDiscount(discount);

        }
    }

    useEffect(() => {
        getTotalAmount();
    }, [cartProduct]);
    const razorpayMode = (amt) => {

        const amount = amt * 100; // to convert amount in INR
        const options = {
            "key": "rzp_test_02vLsEiaSZpVrE",
            "amount": amount,
            "name": 'Chanchal',
            "description": '',
            "order_id": '',
            "handler": function (res) {
                dispatch(removeAll());
                dispatch(yourOrders(cartProduct,unique));
                router.push('/products');
            },
            "prefill": {
                'name': 'Chanchal Solanki',
                'email': 'abc@gmail.com',
                'contact': 2324324344
            },
            'notes': {
                'address': 'Hello',
            },
            'theme': {
                'color': '528ff0'
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    const onToken = () => {
        dispatch(removeAll());
        dispatch(yourOrders(cartProduct));

        router.push('/products');
    }

    return (
        <div className='relative top-28 flex md:flex-row flex-col h-[50vh] w-[100%]'>
            {/* Payment mode */}
            <div className=' px-10 py-8 bg-slate-50 w-[25rem] mx-auto basis-[50%]'>
                <div className='flex ' onClick={() => razorpayMode(Math.ceil(totalPrice - totalDiscount))}>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.uojlzt_Oze0jtzBhnY2ZFAHaEF&pid=Api&P=0' alt='razorpay' className='w-25 h-[4rem] ml-1 mr-4' />
                    <input type="radio" name="paymentMode" id="razorpay" />
                </div>
                <hr />

                <StripeCheckout
                    name='Payment'
                    shippingAddress
                    token={onToken}
                    currency='INR'
                    amount={(Math.ceil(totalPrice - totalDiscount)) * 100}
                    stripeKey="pk_test_51Loh1QSJiaTswB51HMTRygQDFmJbjaWBpY9bn786OUpHvPC7DElqij1RCnaJV3O4gINN41y9qOhwU6IqjwtN68rp00rsYiipLA">

                    <div className='flex'>
                        <img src='https://tse2.explicit.bing.net/th?id=OIP.dM33oGGnuovStEgEjvzgOgAAAA&pid=Api&P=0' alt='paytm' className='w-25 h-[5rem] ml-8 mr-6' />
                        <input type="radio" name="paymentMode" id="stripe" />
                    </div>

                </StripeCheckout>


            </div>

            {/* Confirm order */}
            <section className=' basis-[50%] ml-6 '>
                <table className='mx-auto md:mt-auto mt-3' style={{ fontFamily: 'Poppins sans-serif' }}>
                    <thead className='md:text-xl text-lg font-semibold '>
                        <tr>
                            <th scope='col' className='pr-3'>No of items</th>
                            <th scope='col' className='pl-3'> Price</th>
                        </tr>
                    </thead>

                    <tbody className='text-lg'>
                        <tr className='mt-5 ml-7'>
                            <td className='ml-5'>{cartLength}</td>
                            <td className='ml-5'>{totalPrice}</td>
                        </tr>
                        <tr>
                            <td />
                            <td className='text-green-500'><i className="fa fa-rupee" />{Math.ceil(totalPrice - totalDiscount)}</td>
                            <td><button className='py-1 px-5 rounded-md bg-pink-700 text-white'>Confirm order</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Checkout
