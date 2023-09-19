import React from 'react'

export function HeaderHomeSection() {
  return (
    <nav className='flex justify-between bg-blue-200 py-5 px-5 items-center shadow-lg'>
      <div>
        <h1 className='text-2xl'>Astawa Putra</h1>
      </div>
      <div>
        <ul className='flex gap-4'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

