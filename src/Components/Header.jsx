import React from 'react'
import logos from '../../public/logo.svg'
import Hero from '../../public/hero.png'

export default function Header() {
  return (
    <div className='w-full mx-auto'>

      {/* Navbar */}

      <div className='flex flex-row justify-between py-5 bg-gradient-to-r from-[#D53469] to-[#DAAC51]'>
        <div className='flex flex-row'>
          <img src={logos} alt="logo" className='h-8' />
          <p className='text-2xl font-bold ml-1'>Landing</p>
        </div>
        <div className='md:flex flex-row gap-8 hidden'>
          <a href="" className='my-3 text-black hover:text-slate-800 transition-all'>Link1</a>
          <a href="" className='my-3 text-black hover:text-slate-800 transition-all'>link2</a>
          <a href="" className='my-3 text-black hover:text-slate-800 transition-all'>Link3</a>
          <a href="" className='font-semibold bg-[#F6E9D4] hover:underline px-6 py-3 rounded-full'>Action</a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 block md:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#D53469] to-[#DAAC51]'>
        <div className='justify-center md:justify-start flex-col p-4 text-white'>
          <p className='uppercase text-base my-4 text-center md:text-start'>What business are you?</p>
          <h1 className='text-4xl font-bold my-4 text-center md:text-start'>Main Hero Message to sell Product!</h1>
          <h2 className='text-xl font-semibold my-4 text-center md:text-start'>Sub Hero Message, Not too long Not too short. Make it just Right.</h2>
          <button className='px-6 py-3 rounded-full my-8 hover:underline ml-[50%] -translate-x-[50%] md:ml-14 bg-white text-black font-semibold'>Subscribe</button>
        </div>
        <div className='flex justify-center md:justify-end w-2/3'>
          <img src={Hero} alt="hero" className='' />
        </div>
      </div>
      

      

      
    </div>
  )
}
