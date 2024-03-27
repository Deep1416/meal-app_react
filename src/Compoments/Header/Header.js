import React from 'react'
import { MdFoodBank } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import SectionBg from './SectionBg';

function Header() {
  return (
    <>
      <header className=' bg-orange-700 sticky top-0 z-50'>
        <nav>
            <div className=' max-w-screen-xl mx-auto flex  bg-orange-700 p-4 justify-between  items-center'>
                <div>
                    <a href="" className='flex items-center gap-2 text-2xl text-white '>
                        <span><MdFoodBank /></span>
                        <span>FastEat.</span>
                    </a>
                </div>
                <div className='text-2xl text-white'><GiHamburgerMenu /></div>
            </div>
        </nav>
      </header>
      <SectionBg/>
      </>
  )
}

export default Header
