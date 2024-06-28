import React from 'react'
import logos from '../../public/logo.svg'

export default function Header() {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-row justify-between py-5 bg-white fixed mx-auto shadow w-full'>
            <div className='flex flex-row'>
                <img src={logos} alt="logo" className='h-8' />
                <p className='text-2xl font-bold ml-1'>Landing</p>
            </div>
            <div className='flex flex-row gap-8'>
                <a href="" className='my-3 text-black hover:text-slate-800 transition-all'>Link1</a>
                <a href="" className='my-3 text-black hover:text-slate-800 transition-all'>link2</a>
                <a href="" className='my-3 text-black hover:text-slate-800 transition-all'>Link3</a>
                <a href="" className='font-semibold bg-[#F6E9D4] hover:underline px-6 py-3 rounded-full'>Action</a>
            </div>
        </div>

    </div>
  )
}
