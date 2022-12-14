import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { searchProduct, clearLogin, clearAddress, clearOrder, removeAll } from '../redux/action/ActionType'
import { useDispatch, useSelector } from 'react-redux'
import NavLinks from './navLinks'
import { useRouter } from 'next/router'


const Navbar = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [search, setSearch] = useState(false);
    const [countCart, setCountCart] = useState(0);
    const dispatech = useDispatch();
    const cartItems = useSelector(state => state.CartReducers.cart);
    const loginData = useSelector(state => state.LoginReducer.logInUser);

    const { image } = loginData;



    useEffect(() => {
        if (cartItems !== undefined && cartItems?.length !== 0) {
            setCountCart(cartItems.length);
        }
        else {
            setCountCart(0);
        }
    })

    // Search product code
    const showSearchedProduct = (e) => {
        setSearch(e.target.value);
        dispatech(searchProduct(search));
    }

    const handleLogin = () => {
        if (loginData) {
            router.push('/login');
            alert('Please use this data to get entered :- \n username: kminchelle \n password: 0lelplR');
            dispatech(clearLogin());
            dispatech(clearAddress());
            dispatech(clearOrder());
            dispatech(removeAll());
        }
    }

    return (
        <div>
            {/* Navbar */}
            <nav className='flex shadow-lg w-full h-20 align-middle fixed top-0 left-0 z-50 bg-white'>
                <div className='flex md:flex-row flex-col lg:w-[60%] md:w-[50%] w-[40%] mr-4'>
                    <div className='flex'>
                        {/* Hemburger menu */}
                        <div className='inline ml-2 my-auto md:hidden h-auto' name={`${show ? 'close' : 'menu'}`} onClick={() => setShow(!show)}>
                            <i className='fa fa-bars text-3xl'></i>
                        </div>
                        {/* logo */}
                        <Link href='/'>
                            <div className='ml-3 w-32 bg-gradient-to-tl cursor-pointer from-pink-600 to-lime-500 rounded-lg text-white text-3xl text-center max-h-14 py-2 mt-3 px-4' style={{ fontFamily: 'Kaushan Script, cursive' }}>Fashion
                            </div>
                        </Link>
                    </div>

                    {/* responsive menus */}
                    <div className={`md:flex absolute md:static md:basis-[80%] w-[60%] md:z-auto -z-10 transition-all ease-in-out duration-500 top-20 ${show ? 'left-0 opacity-100 shadow-lg' : 'left-[-400px] md:opacity-100 opacity-0'}`}>
                        <div className='group py-6 px-3 bg-black text-white md:hidden block' onClick={() => handleLogin()}>
                            {loginData.length === 0 ?
                                <i className="fa fa-user text-2xl " /> :
                                loginData.map((user, id) => {
                                    return (
                                        <img src={user.image} key={id} alt="" className='h-10 w-10 ' />)
                                })}
                            <div className='text-xl font-semibold'>{loginData.length === 0 ?
                                <p>Login</p> :
                                loginData.map((user, id) => {
                                    return (
                                        <p key={id}>{user.firstName}</p>
                                    )
                                })
                            }</div>

                            <div className='absolute md:top-[2rem] md:left-[5rem] bg-white text-black hidden group-hover:block hover:block shadow-xl'>
                                <p className='py-2 px-2 hover:text-gray-400' onClick={() => handleLogin()}>
                                    {loginData.length === 0 ? 'Login' : 'Logout'}
                                </p>
                                {loginData.length !== 0 && <Link href='/orders'>
                                    <p className='pb-2 px-2 hover:text-gray-400'>Your Order</p>
                                </Link>}
                            </div>
                        </div>
                        {/* menu list */}
                        <NavLinks />

                    </div>
                </div>

                {/* Profile, whishlist & cart section */}
                <div className='lg:w-[40%] md:[50%] w-[60%] flex flex-row md:justify-around justify-end text-gray-600'>
                    {/* search icon in small screen */}
                    <i className={`fa fa-search md:hidden block text-2xl max-h-14 py-6 mx-3 ${searchBar ? 'group' : 'none'}`} aria-hidden="true" onClick={() => setSearchBar(true)}>
                    </i>
                    {/* search bar */}
                    <input className='bg-slate-100 w-full h-12 my-auto rounded-sm px-3 hidden md:block' type="text" placeholder='Search for products, brands and more...' name='search' onChange={(e) => showSearchedProduct(e)} />

                    <div className='flex md:mr-6 mr-0' style={{ fontFamily: 'sans-serif' }}>
                        {/* Login User */}
                        <div className='group mx-3 md:flex hidden flex-col my-auto text-center cursor-pointer' >
                            {loginData.length === 0 ?
                                <i className="fa fa-user text-2xl " /> :
                                loginData.map((user, id) => {
                                    return (
                                        <img src={user.image} key={id} alt="" className='h-8 w-8 mx-auto' />)
                                })}

                            {/* {`${loginData?.length !== 0} ? ${loginData.firstName} : 'Login'`} */}
                            {loginData.length === 0 ?
                                <p>Login</p> :
                                loginData.map((user, id) => {
                                    return (
                                        <p key={id}>{user.firstName}</p>
                                    )
                                })
                            }
                            <div className='absolute top-[4rem] bg-white hidden group-hover:block hover:block shadow-xl'>
                                <p className='py-2 px-2 hover:text-gray-400' onClick={() => handleLogin()}>
                                    {loginData.length === 0 ? 'Login' : 'Logout'}
                                </p>
                                {loginData.length !== 0 && <Link href='/orders'>
                                    <p className='pb-2 px-2 hover:text-gray-400'>Your Order</p>
                                </Link>}
                            </div>
                        </div>
                        <Link href={`/wishlist`} >
                            <div className='mx-3 flex flex-col my-auto text-center cursor-pointer'>
                                <i className="fa fa-heart text-2xl md:xl" aria-hidden="true" />
                                <span className='md:block hidden'>Wishlist</span>
                            </div>
                        </Link>
                        <Link href='/cart'>
                            <div className='mx-3 flex flex-col my-auto text-center cursor-pointer'>
                                <span className='absolute top-3 text-white px-2 py-0 bg-red-600 rounded-full mx-0.5 md:hidden inline'>{countCart}
                                </span>
                                <i className="fa fa-shopping-cart text-2xl md:xl" />
                                <div className='md:inline hidden '>Cart
                                    <span className='text-white px-2 bg-red-600 rounded-full mx-0.5 inline'>{countCart}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </nav >
        </div >
    )
}

export default Navbar