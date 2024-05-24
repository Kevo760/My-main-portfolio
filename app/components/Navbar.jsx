"use client"

import Link from "next/link"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useState } from "react"

export const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(true);

  const handleOpenNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="absolute flex flex-row justify-between items-center gap-2 w-full h-20 max-h-fit p-4">
        <Link href='/' className="flex flex-row justify-center items-center gap-2">
          <h1 className="bg-gray-300 size-9 rounded-full p-1 font-bold text-lg">
             KD.
          </h1>
        </Link>

        <div className="sm:hidden flex gap-1 justify-center items-center dark:text-white ">
          <button onClick={e => handleOpenNav()} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 " aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>


        <div className="max-sm:hidden flex flex-row justify-center items-center gap-4 dark:text-white text-lg">
          <Link href='/projects'>Projects</Link>
          <Link href='/projects'>Contact</Link>
          <ThemeSwitcher />
        </div>
        {
          isOpen ?
          <div className="absolute left-0 w-full p-8 sm:hidden text-lg dark:text-black mt-60">
            <div className="flex flex-col justify-center items-center gap-2 w-full p-4 bg-gray-200  rounded-md">
              <Link href='/projects'>Projects</Link>
              <Link href='/projects'>Contact</Link>
              <ThemeSwitcher />
            </div>
          </div>
          :
          null
        }

    </nav>
  )
}
