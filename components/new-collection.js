import Link from 'next/link'
import React from 'react'
// import bgVideo from 'bg-video/video.mp4';

const NewCollection = () => {
  return (
    <>
      <div className='relative lg:mx-12 md:mx-8 mx-5 top-20 flex md:h-[70vh] sm:h-[60vh] h-[30vh]'>
        <style jsx>
          {`
         .bgImg{
          background: url('https://static.wixstatic.com/media/3b1f25_3e2682ea3d9648afb84b65349151736c.jpg/v1/fill/w_709,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3b1f25_3e2682ea3d9648afb84b65349151736c.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          height: 100%;
         }

         .bgImg1{
          background: url('https://static.wixstatic.com/media/3b1f25_c5a41957acfc4378af9e509767990e85.jpg/v1/fill/w_495,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b1f25_c5a41957acfc4378af9e509767990e85.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          height: 49.50%;
         }

         .bgImg2{
          background: url('https://static.wixstatic.com/media/3b1f25_539f419837aa4cf0900ef194bbf1a5a6.jpg/v1/fill/w_495,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b1f25_539f419837aa4cf0900ef194bbf1a5a6.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          height: 49%;
         }
         `}
        </style>
        <Link href='/products'>
          <div className='bgImg w-[60%] flex flex-col justify-center row-span-2 mr-2 cursor-pointer'>
            <div className='h-[60%]'>
              <h1 className='ml-4 lg:text-7xl sm:text-5xl text-2xl font-bold w-[50%]  h-full'>Check Out Our New Collection</h1>
            </div>
          </div>
        </Link>
        <div className='basis-[50%] ' style={{ fontFamily: 'Corinthia, cursive' }}>
          <Link href='/womens-dresses'>
            <div className='bgImg1 mb-2  relative cursor-pointer'>
              <h1 className='lg:text-5xl sm:text-4xl text-lg w-[20%] text-gray-600 font-bold absolute sm:right-32 right-[4rem] sm:bottom-20 bottom-[1rem]'>Women's Collection</h1>
            </div>
          </Link>
          <Link href='/mens-shirts'>
            <div className='bgImg2 mt-2 relative cursor-pointer'>
              <h1 className='lg:text-5xl sm:text-4xl text-lg w-[20%] text-yellow-600 font-bold absolute sm:right-32 right-[4rem] sm:bottom-20 bottom-[1rem]'>Men's Collection</h1>
            </div>
          </Link>
        </div>

      </div>
    </>
  )
}

export default NewCollection
