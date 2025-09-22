import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar'
import { Baloo_Paaji_2 } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import Input from './components/Input'

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
    <div className="w-full h-[100dvh] relative flex items-center justify-center">
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
        w-[98%] h-[98%] inset-0 z-0 flex flex-col overflow-hidden"
      >
        <Navbar />

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center flex-1 text-center gap-6">
          <h1
            className="text-white lg:-mb-8 mt-15 drop-shadow-4xl lg:text-[10vw] text-[10.5vw] whitespace-nowrap lg:leading-none leading-10 font-bold"
            style={baloo.style}
          >
            Talk. Listen. Heal.
          </h1>

          <h2
            className="text-white drop-shadow-2xl lg:text-[2vw]  font-semibold"
            style={nunito.style}
          >
            Anonymous, safe mental health chat. Coming soon.
          </h2>

          <Input />

          <h2
            className="text-white drop-shadow-2xl md:mt-0 mt-20 lg:text-lg"
            style={nunito.style}
          >
            We&apos;ll let you know when we launch!
          </h2>
        </div>

        {/* Footer */}
        <div
          className="w-full flex items-center justify-center md:gap-20 gap-4 text-white text-sm mt-6"
          style={nunito.style}
        >
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default Page
