import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold'>
          Everythis <br />
          is better with <br />a &nbsp;
          <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-gray-500 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          molestias soluta. Sit possimus amet, velit veritatis vel officia quia
          cumque.
        </p>
        <div className='flex gap-4 text-sm'>
          <button className='bg-primary flex items-center gap-4 text-white px-4 py-2 rounded-full uppercase '>
            Order Now
            <Right />
          </button>
          <button className='flex gap-4 py-2 text-gray-600 font-semibold'>
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={'/pizza.png'}
          alt={'pizza'}
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </section>
  )
}

export default Hero
