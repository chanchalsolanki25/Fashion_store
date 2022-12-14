import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getShippingAddress } from '../redux/action/ActionType';
import { useRouter } from 'next/router';
import { useForm, useFormState } from 'react-hook-form';
import Footer from '../components/Footer';

const Map = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    // react-form-hook for form validation
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(getShippingAddress(data));
        router.push('/cart');
    }


    return (
        <>
            <div className='relative top-24 w-[95%] h-[80vh] my-2'>

                <form action="" className='md:w-1/2 w-full my-3  mx-auto py-6 px-8 shadow-inner bg-slate-100 rounded-sm' style={{ fontFamily: 'PT Sans Narrow' }} onSubmit={handleSubmit((onSubmit))}>

                    <div className='my-1'>
                        <label htmlFor='name' className='my-1'>Full Name</label>
                        <input type='text' id='name' className='border-2 w-full py-1 rounded-sm' name='name' {...register('name', { required: 'Full name is required' })} />
                        <p className='text-red-500'>{errors.name?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label htmlFor='email' className='my-1'>Your Email</label>
                        <input type='text' id='email' className='border-2 w-full py-1 rounded-sm' name='email' {...register('email', { required: 'Email is required', pattern: { value: /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-z]){2,7}$/, message: 'Invalid Email' } })} />
                        <p className='text-red-500'>{errors.email?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label htmlFor='mobileNo' className='my-1'>Mobile Number</label>
                        <input type='text' id='mobileNo' className='border-2 w-full py-1 rounded-sm'
                            name='number' {...register('number', { required: 'Phone number is required', pattern: { value: /^([0-9]){10}$/, message: 'Invalid Phone Number' } })} />
                        <p className='text-red-500'> {errors.number?.message}</p>

                    </div>

                    <div className='my-1'>
                        <label htmlFor='pin' className='my-1'>Pin code</label>
                        <input type='text' id='pin' className='border-2 w-full py-1 rounded-sm'
                            name='pincode' {...register('pincode', { required: 'Pincode is required', pattern: { value: /^[1-9]([0-9]){5}$/, message: 'Invalid Pincode' } })} />
                        <p className='text-red-500'>{errors.pincode?.message}</p>

                    </div>

                    <div className='my-1' >
                        <label htmlFor='no'>Flat,House no,Building,Company,Apartment</label>
                        <input type='text' id='no' className='border-2 w-full py-1 rounded-sm'
                            name='houseNo' {...register('houseNo', { required: 'Address is required' })} />
                        <p className='text-red-500'>{errors.houseNo?.message}</p>

                    </div>

                    <div className='my-1'>
                        <label htmlFor='landmark' className='my-1'>Landmark</label>
                        <input type='text' id='landmark' className='border-2 w-full py-1 rounded-sm' name='landMark' {...register('landMark', { required: 'Landmark is required' })} />
                        <p className='text-red-500'>{errors.landMark?.message}</p>

                    </div>

                    <div className='my-1'>
                        <label htmlFor='city' className='my-1'>Town/City</label>
                        <input type='text' id='city' className='border-2 w-full py-1 rounded-sm' name='city' {...register('city', { required: 'City name is required' })} />
                        <p className='text-red-500'>{errors.city?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label htmlFor='state' className='my-1'>State</label>
                        <input type='text' id='state' className='border-2 w-full py-1 rounded-sm' name='state' {...register('state', { required: 'State name is required' })} />
                        <p className='text-red-500'>{errors.state?.message}</p>

                    </div>

                    <div className='bg-green-500 w-60 mx-auto my-6 text-center hover:bg-green-600'>
                        <button type='submit' className='text-center py-2 text-white w-full'>Confirm Address</button>
                    </div>
                </form>

            </div>
            <Footer/>
        </>
    )
}

export default Map

