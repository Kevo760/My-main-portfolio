import Link from "next/link"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const Navbar = () => {
  return (
    <nav className="overflow-auto absolute flex flex-row justify-between items-center gap-2 w-full h-20 p-4">
        <div className="flex flex-row justify-center items-center gap-2">
          <h1 className="bg-gray-300 size-9 rounded-full p-1 font-bold text-lg">
            KD.
          </h1>
          <span className=" dark:text-white">Kevin David</span>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 dark:text-white text-lg">
          <Link href='/projects'>Projects</Link>
          <Link href='/projects'>Contact</Link>
          <ThemeSwitcher />
        </div>
    </nav>
  )
}
