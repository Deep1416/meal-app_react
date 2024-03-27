import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { LuChevronsRight } from "react-icons/lu";
function Nav({title}) {
  return (
    <nav className='w-full bg-[#e16120] mb-[3.2rem]'>
        <div className='py-4 px-8'>
            <div className='flex items-center gap-2 text-white text-xl'>
                <span><AiFillHome /></span>
                <span><LuChevronsRight /></span>
                <span>{title}</span>
            </div>
        </div>
    </nav>
  )
}

export default Nav
