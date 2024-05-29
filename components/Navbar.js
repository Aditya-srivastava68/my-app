import React from 'react'

const Navbar = () => {
  return (
  <nav className='bg-slate-900 text-white justify-between flex px-4 h-16 items-center'>
    <div className='logo font-bold text-lg'>GetMeaCofFee!!</div>
    <ul className='flex  gap-4'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Sign Up</li>
      <li>Login</li>
    </ul>
  </nav>
  )
}

export default Navbar
