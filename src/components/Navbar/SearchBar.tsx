import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BsFillMicFill as MicIcon } from "react-icons/bs"
import { AiOutlineSearch as SearchIcon} from "react-icons/ai"

const SearchBar = () => {
  return (
    <main className="m-2 flex w-[45%] gap-2 items-center">
        <div className='w-full flex text-sm md:text-base'>
            <input 
              className="p-1 sm:px-[2vw] w-[85%] h-6 sm:h-10 rounded-l-full border border-r-0 bg-zinc-900 border-zinc-500 border-opacity-25"
              type="text"
              placeholder="Search"
            />

            <button className="px-[2vw] md:py-2 h-6 sm:h-10 rounded-r-full border border-zinc-500 bg-zinc-700 bg-opacity-50 border-opacity-25" >
                <SearchIcon color="white" fontWeight="light" className="md:text-2xl font-extralight"/>
            </button>
        </div>
        <MicIcon className="md:text-2xl" />
    </main>
  )
}

export default SearchBar