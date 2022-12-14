import React from 'react'
import DealDetail from './dealDetail'
import Link from 'next/link'

const Deal = () => {
    const deal = [
        {
            name: 'H&M',
            description: 'Small shoulder bag',
            image: 'img/deal/bag.jpg'
        },
        {
            name: 'Roadster',
            description: 'Pure cotton T-shirt',
            image: 'img/deal/girl-tshirt.jpg'
        },
        {
            name: 'Gucci',
            description: 'Stylish sling bag',
            image: 'img/deal/gucci.jpg'
        },
        {
            name: 'Mast&Harbour',
            description: 'women stylish hoddie and pant',
            image: 'img/deal/hoddie.jpg'
        },
        {
            name: 'Roadster',
            description: 'Solid leather jacket',
            image: 'img/deal/jacket.jpg'
        },
        {
            name: 'MAC',
            description: 'Mac eye shadow palette',
            image: 'img/deal/makeup.jpg'
        },
        {
            name: 'WROGN',
            description: 'Men printed Hoddie',
            image: 'img/deal/men-hoddie.jpg'
        },
        {
            name: 'HIGHLANDER',
            description: 'Men Solid Sweatshirt',
            image: 'img/deal/sweatshirt.jpg'
        },
        {
            name: 'LEVIS',
            description: 'Solid Women T-shirt',
            image: 'img/deal/t-shirt.jpg'
        },
        {
            name: 'HERE&NOW',
            description: 'White puff sleeves T-shirt',
            image: 'img/deal/top.jpg'
        },
        {
            name: 'Athena',
            description: 'Maroon Sheath Midi Dress',
            image: 'img/deal/western.jpg'
        },
        {
            name: 'YouBella',
            description: 'Stylish Earrings',
            image: 'img/deal/jewellery.jpg'
        },

        {
            name: 'VERSACE',
            description: 'Small shoulder bag',
            image: 'img/deal/bags.jpg'
        },
        {
            name: 'ORRA',
            description: 'Pure cotton T-shirt',
            image: 'img/deal/bangles.jpg'
        },
        {
            name: 'HUDA',
            description: 'Stylish sling bag',
            image: 'img/deal/huda-makeup.jpg'
        },
        {
            name: 'ARMANI',
            description: 'women stylish hoddie and pant',
            image: 'img/deal/hoddie.jpg'
        },
        {
            name: 'PC Jewellers',
            description: 'Solid leather jacket',
            image: 'img/deal/ring.jpg'
        },
        {
            name: 'ADIDAS',
            description: 'Mac eye shadow palette',
            image: 'img/deal/shoes.jpg'
        },
        {
            name: 'ROLEX',
            description: 'Men printed Hoddie',
            image: 'img/deal/watch.jpg'
        },
        {
            name: 'HIGHLANDER',
            description: 'Men Solid Sweatshirt',
            image: 'img/deal/sweatshirt.jpg'
        },
        {
            name: 'LEVIS',
            description: 'Solid Women T-shirt',
            image: 'img/deal/t-shirt.jpg'
        },
        {
            name: 'HERE&NOW',
            description: 'White puff sleeves T-shirt',
            image: 'img/deal/top.jpg'
        },
        {
            name: ' HUGO BOSS',
            description: 'Maroon Sheath Midi Dress',
            image: 'img/deal/western.jpg'
        },
        {
            name: 'TANISHQ',
            description: 'Stylish Earrings',
            image: 'img/deal/jewellery.jpg'
        },
    ]
    return (
        <div className='relative lg:top-28 top-24 bg-white '>
            <div className=' text-center'>
                <h1 className='text-red-800 lg:text-5xl md:text-3xl text-2xl font-bold font-serif'>OMG!</h1>
                <h1 className='lg:text-3xl md:text-xl text-sm text-yellow-500 font-bold font-serif'>DEALS</h1>
                <p className='lg:text-xl md:text-lg text-sm text-green-900 font-semibold font-sans'>JAW-DROPPING PRICES THIS WAY</p>
                <Link href='/products'>
                    <button className='lg:text-xl text-lg px-2 py-1 bg-emerald-600 text-white rounded-sm'>View All <i className="fa fa-arrow-right font-extralight text-emerald-600 p-1 bg-white rounded-full" aria-hidden="true">
                    </i>
                    </button>
                </Link>
            </div>
            <DealDetail deal={deal} />
        </div>
    )
}

export default Deal
