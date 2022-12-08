import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const NavLinks = () => {
    const [open, setOpen] = useState('');
    const [title, setTitle] = useState('');
    const links = [
        { name: 'All', link: '/products' },
        {
            name: 'Men',
            link: '',
            subMenu: true,
            subLinks: [
                {
                    title: 'Clothes',
                    sublink: [
                        { name: 'Shirts', link: '/mens-shirts' },
                        { name: 'Shoes', link: '/mens-shoes' },
                        { name: 'Watches', link: '/mens-watches' },
                        { name: 'Sunglasses', link: '/sunglasses' },

                    ]
                }
            ]
        },
        {
            name: 'Women',
            link: '',
            subMenu: true,
            subLinks: [
                {
                    title: 'Clothes',
                    sublink: [
                        { name: 'Dresses', link: '/womens-dresses' },
                        { name: 'Tops', link: '/tops' },
                        { name: 'Shoes', link: '/womens-shoes' },
                    ]
                },

                {
                    title: 'Accesories',
                    sublink: [
                        { name: 'Bags', link: '/womens-bags' },
                        { name: 'Watches', link: '/womens-watches' },
                        { name: 'Jewellery', link: '/womens-jewellery' },
                    ]
                }
            ],
        },
        {
            name: 'Other',
            link: '',
            subMenu: true,
            subLinks: [
                {
                    title: 'Electonics',
                    sublink: [
                        { name: 'Smartphones', link: '/smartphones' },
                        { name: 'Laptops', link: '/laptops' },
                        { name: 'Lighting', link: '/lighting' },
                        { name: 'automotive', link: '/automotive' },
                    ]
                },
                {
                    title: 'Beauty',
                    sublink: [
                        { name: 'Skincare', link: '/skincare' },
                        { name: 'Fragrances', link: '/fragrances' },
                    ]
                },
                {
                    title: 'Others',
                    sublink: [
                        { name: 'Home decoration', link: '/home-decoration' },
                        { name: 'Furniture', link: '/furniture' },
                        { name: 'groceries', link: '/groceries' },
                        { name: 'Motorcycle', link: '/motorcycle' },
                    ]
                }
            ]
        },
    ]
    return (
        <div>
            <div className=' px-3 py-3 md:mt-4 mt-0  cursor-pointer md:flex md:items-center font-semibold text-gray-700 ng-white bg-white md:bg-none' style={{ fontFamily: 'Roboto, sans-serif absolute' }}>
                {links.map((link) => {
                    return (
                        <div key={link.name}>
                            <div className='group'>
                                {link.link !== '' ?
                                    <Link href={link.link}>
                                        <h2 className='pb-2 lg:mx-3 mx-2 lg:px-2'
                                            onClick={() => title !== link.name ? setTitle(link.name) : setTitle('')}>{link.name}
                                        </h2>
                                    </Link> :
                                    <h2 className='pb-2 lg:mx-3 mx-2 lg:px-2'
                                        onClick={() => title !== link.name ? setTitle(link.name) : setTitle('')}>{link.name}
                                    </h2>
                                }
                                <div className='absolute'>
                                    {link.subMenu && link.subLinks.map((sub) => {
                                        return (
                                            <div key={sub.title}>
                                                <div className='relative px-2 py-1  bg-white hidden group-hover:md:block hover:md:block z-50 group-hover:shadow-xl' >
                                                    <div className='w-4 h-4 bg-white absolute top-[-9px] rotate-45 ml-1'>
                                                    </div>
                                                    <div className='' style={{ fontFamily: 'Signika Negative, sans-serif' }}>
                                                        <h2 className='text-pink-600 ml-3 font-thin'>{sub.title}
                                                        </h2>
                                                        <div>
                                                            {sub.sublink?.map((sLink) => {
                                                                
                                                                return (
                                                                    <Link href={sLink.link}>
                                                                        <div key={sLink.name} className='mx-3 my-2 hover:text-gray-400 font-thin text-[14px]'>{sLink.name}
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/*  Responsive menus */}
                            <div className={`
                            ${title === link.name ? 'md:hidden' : 'hidden'} `}>
                                {link?.subLinks?.map((sLink) => {
                                    return (
                                        <div className='my-3' key={sLink.title}>
                                            <div className=' my-2 py-2 flex justify-between hover:bg-slate-200' onClick={() => open !== sLink.title ? setOpen(sLink.title) : setOpen('')}>
                                                <h1 className='font-bold pl-6'>{sLink?.title}</h1>
                                                <i className='fa fa-angle-down font-bold mr-5 mt-1'></i>
                                            </div>
                                            <div className={`duration-300 ${open === sLink.title ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                                {sLink.sublink.map((subMenu, index) => {
                                                    return (
                                                        <Link href={subMenu.link} key={index}>
                                                            <h3 className='ml-7 hover:text-gray-500'>{subMenu.name}
                                                            </h3>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default NavLinks
