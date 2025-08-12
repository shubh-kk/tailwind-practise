import React from 'react'

export default function Hero() {
    return (
        <div className='py-12 mt-6'>
            <div className='flex justify-center items-center mx-auto bg-gray-300 hover:bg-gray-400  text-black text-xs font-medium max-w-80 w-fit px-4 py-1 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-all duration-300'>
                <span>
                    QSBS just got better in July 2025 ?
                </span>
                <svg width="16" height="16" fill="none">
                    <path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5">
                    </path>
                </svg>
            </div>
            <div className='text-center mt-8'>
                <h1 className='text-5xl md:text-6xl  font-bold text-neutral-800 mb-4 mx-auto max-w-3xl leading-tight'>
                    Magically simplify accounting and taxes
                </h1>
            </div>
            <p className='text-center text-neutral-600 text-sm md:text-base max-w-2xl mx-auto mt-4'>
                Automated bookkeeping, effortless tax filing, real-time insights. Set up in 10 mins. 
                <br className="hidden sm:block" /> Back to building by 11:37pm.
            </p>
            <div className='flex items-center justify-center mt-10 gap-2'>
                <button className='px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 shadow-lg transition-colors duration-200'>Get Started</button>
                <button className='flex items-center px-4 py-2 text-neutral-600 hover:text-blue-600 transition-colors duration-200 '>
                    <span className='font-bold text-stone-800 shadow-2xl'>Learn more</span>
                    <svg className='ml-1' width="24" height="24" fill="none">
                        <path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M12 4.75v14.5m7.25-7.25h-14.5">
                        </path>
                    </svg>
                </button>
            </div>
            
        </div>

    )
}