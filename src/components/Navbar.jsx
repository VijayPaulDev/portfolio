import React from 'react'

const Navbar = () => {
  return (
        <header className='header fixed top-0 left-0 w-full p-5 p-[10%] bg-gray-950 flex justify-between
                         items-center -translate-y-40 translate-x-170'>

            <nav className='navbar -translate-x-10'>
                <a href='/'>HOME</a>
                <a href='/'>WORKS</a>
            </nav>

        </header>
  )
}

export default Navbar
