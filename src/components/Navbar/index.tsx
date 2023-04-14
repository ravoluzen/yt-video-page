import SearchBar from './SearchBar'
import { RiVideoAddLine as VideoIcon } from "react-icons/ri"
import { FaRegBell as Bell } from "react-icons/fa"
import { AiFillYoutube as YoutubeIcon} from "react-icons/ai"
import { RxHamburgerMenu as MenuIcon } from "react-icons/rx"


function NavBar() {
  return (
    <nav className='sticky z-10 top-0 w-full flex justify-between items-center sm:text-sm bg-zinc-900'>
        <div className='w-1/4 flex justify-start gap-6'>
            <MenuIcon className='md:text-4xl text-white cursor-pointer'/>
            <YoutubeIcon className='text-red-500 md:text-4xl cursor-pointer'/>
        </div>

        <SearchBar />
        <div className='w-1/4 flex gap-6 items-center justify-end md:text-2xl text-base'>
            <VideoIcon className='cursor-pointer'/>
            <Bell className='cursor-pointer'/>
            <div className='w-8 h-8 rounded-full border hidden md:block cursor-pointer'/>
        </div>
    </nav>
  )
}

export default NavBar