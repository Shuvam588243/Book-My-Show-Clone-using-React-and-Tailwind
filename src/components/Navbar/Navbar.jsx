import React from 'react'
import {BiChevronsDown, BiMenu, BiSearch} from 'react-icons/bi'

function Navbar() {

    const NavSmall = () =>
    {
        return(
            <>
              <div className="text-white flex items-center justify-between"> 
              <div> 
              <h3 className="text-xl font-bold"> It All Starts Here </h3>
              <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
                Guwahati <BiChevronsDown />
                </span>
              </div>
              <div className="w-8 h-8">
                  <BiSearch className="w-full h-full" />
              </div>
              </div>  
            </>
        )
    }

    const NavMedium = () =>
    {
        return(
            <> 
             <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md"> 
                <BiSearch/>
                <input type="search" 
                className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Search for Movies, Events, Plays, Sports, Activities" />
            </div>
            </>
        )
    }


    const NavLarge = () =>
    {
        return(
            <> 
            <div className="container flex mx-auto px-4 items-center justify-between">
                <div className="flex items-center w-1/2 gap-3"> 
                <div className="w-10 h-10"> 
                <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md"> 
                <BiSearch/>
                <input type="search" 
                className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Search for Movies, Events, Plays, Sports, Activities" />
                </div>
                </div>
                <div className="flex items-center gap-3"> 
                <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                Guwahati <BiChevronsDown />
                </span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded"> 
                Sign In
                </button>
                <div className="w-8 h-8 text-white"> 
                <BiMenu className="w-full h-full"/>
                </div>
            </div>
            </div>
            </>
        )
    }








    return (
        <>
          <nav className="bg-darkBackground-700 px-4 py-3">
            <div className="md:hidden"> 
            {/* Small Screen */}
            <NavSmall/>
            </div>
            <div className="hidden md:flex lg:hidden">
            {/* Medium Screen */}
            <NavMedium/>
            </div>
            <div className="hidden lg:flex">
            {/* Large Screen */}
            <NavLarge/>
            </div>
          </nav>  
        </>
    )
}

export default Navbar
