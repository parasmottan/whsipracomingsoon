import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { Baloo_Paaji_2 } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import Input from '../components/Input'
// import Input from './components/Input'

const baloo = Baloo_Paaji_2({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const Page = () => {
  return (
    <div className="w-full h-[100vh] relative flex items-center justify-center">
      <Image
        src="/bgcover.jpg"
        alt="Description"
        className="absolute inset-0 -z-10"
        draggable="false"
        objectPosition="center"
        objectFit="cover"
        loading="lazy"
        layout="fill"
      />

      {/* Glass Container */}
      <div
        className="p-8 rounded-4xl shadow-xl
        bg-white/10 backdrop-blur-sm 
        border-2 border-white/90 
        w-[98%] h-[98%] inset-0 z-0 flex flex-col"
      >
        <Navbar />

          <div className='drop-shadow-2xl lg:w-[40%] w-[90vw] lg:h-auto right-5 top-[50vw] bg-white rounded-full  relative'>
      <form action="#">

      <input type="text" className='drop-shadow-2xl w-full lg:p-5 p-3  outline-none text-lg pl-7 text-gray-300 bg-white rounded-full' placeholder='Enter your email...' />
      <input type="submit" className=' cursor-pointer md:absolute md:right-0 md:top-0 absolute top-18 right-[1%] h-full  shadow-[4px_-4px_20px_rgba(255,255,255,0.95),4px_4px_25px_rgba(255,255,255,0.95),0_6px_20px_rgba(255,255,255,0.9)]
md:px-8 px-24 md:bg-[#DBBFE7] bg-gradient-to-r from-pink-300 via-pink-200 to-blue-200 
      text-white md:text-lg text-3xl md:font-normal font-bold rounded-full' value='Notify Me' />
        
      </form>
    </div>
        <h2
            className="text-white drop-shadow-2xl md:mt-0 mt-[80vw] ml-3 lg:text-lg"
            style={nunito.style}
          >
            We'll let you know when we launch!
          </h2>
      </div>
    </div>
  )
}

export default Page
