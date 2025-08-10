import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    const links = [
        { title: 'Home', href: '#' },
        { title: 'About', href: '#' },
        { title: 'Services', href: '#' },
        { title: 'Contact', href: '#' },
    ]
  return (
    <div className='flex items-center justify-between py-4'>
        <div className='text-xl font-semibold'>Logo</div>
        
        {/* Center navigation - hidden on mobile */}
        <div className='hidden md:flex items-center space-x-8'>
            {links.map(link => (
                <a key={link.title} href={link.href} className='text-sm text-neutral-600 hover:text-blue-600 transition-colors'>
                    {link.title}
                </a>
            ))}
        </div>
        
        {/* Right side - Authentication options */}
        <div className='flex items-center gap-3'>
            <Link href="/signin" className='text-sm text-neutral-600 hover:text-blue-600 transition-colors'>
                Sign in
            </Link>
            <Link href="/signup" className='text-sm px-4 py-2 text-white transition-colors duration-200 bg-blue-600 hover:bg-blue-700 rounded-md font-medium whitespace-nowrap'>
                Start free trial
            </Link>
        </div>
        
        {/* Mobile menu button - positioned absolutely or use a different approach */}
        <div className='md:hidden absolute right-4'>
            <button className='text-neutral-600 p-2'>☰</button>
        </div>
    </div>
  )
}
