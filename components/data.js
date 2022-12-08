import React from 'react'
import WomenCategory from '../pages/product-category/womenCategory'

const Data = () => {
    const womenCategory = [
        {
            id: 1,
            name: 'Women dresses',
            image: '/img/category-img/women-dresses.jpg',
            price: '299'
        },
        {
            id: 2,
            name: 'Women top',
            image: '/img/category-img/women-top.jpg',
            price: '499'

        },
        {
            id: 3,
            name: 'Women bags',
            image: '/img/category-img/women-bags.jpg',
            price: '300'

        },
        {
            id: 4,
            name: 'Women shoes',
            image: '/img/category-img/women-shoes.jpg',
            price: '699'

        },
        {
            id: 5,
            name: 'Women watches',
            image: '/img/category-img/women-watches.jpg',
            price: '250'

        },
        {
            id: 6,
            name: 'Women skincare',
            image: '/img/category-img/skin-care.jpg',
            price: '99'
        },
        {
            id: 7,
            name: 'Women jewellery',
            image: '/img/category-img/women-jewellery.jpg',
            price: '777'

        },
        
    ]
   const menCategory = [
    { 
        id: 1,
        name: 'Men shirts',
        image: '/img/category-img/men-shirt.jpg',
        price: '299'
    },
    {
        id: 2,
        name: 'Men jeans',
        image: '/img/category-img/men-jeans.jpg',
        price: '499'

    },
    {
        id: 3,
        name: 'Men shoes',
        image: '/img/category-img/men-shoes.jpg',
        price: '300'

    },
    {
        id: 4,
        name: 'Men belt',
        image: '/img/category-img/men-belt.jpg',
        price: '699'

    },
    {
        id: 5,
        name: 'Men sunglasses',
        image: '/img/category-img/sunglasses.jpg',
        price: '250'

    },
    {
        id: 6,
        name: 'Men wallet',
        image: '/img/category-img/men-wallet.jpg',
        price: '99'
    },
    {
        id: 7,
        name: 'Men perfume',
        image: '/img/category-img/men-perfume.jpg',
        price: '777'
    },
    
   ]
  return (
    <div className='relative lg:top-40 top-32'> 
        <h1 className='lg:text-5xl md:text-3xl text-2xl text-center  text-[#00ab90]' style={{ fontFamily: 'Playfair Display, serif' }}>SHOP BY CATEGORY</h1>
        <hr className='lg:w-96 md:w-80 w-56 h-0.5 bg-[#00ab90] mx-auto mb-6'/>
        <WomenCategory data={womenCategory} menData={menCategory}/>
    </div>
  )
}

export default Data
