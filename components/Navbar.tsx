import { useCallback, useEffect, useState } from "react";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";

import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [ShowBackground, setShowBackground] = useState(false);


    useEffect(() =>{
        const handleScroll = () => {
            if (window.scrollY > TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    return(
        <nav className="w-full fixed z-10">
            <div 
               className={`
               px-4
               md:px-16
               py-6
               flex
               flex-row
               justify-between
               transition
               duration-500
                bg-zinc-900 bg-opacity-100
               `}
            >
<<<<<<< HEAD
                <span className="lg:text-2xl text-sm  text-amber-600 lg:font-extrabold font-extrabold">EnjoyLand</span>
=======
                <span className="h-4 lg:h-7 text-amber-700 font-extrabold text-lg">EnjoyLand</span>
>>>>>>> 0bcc47b4c97eb7eac386489037b149931f26a753
                <div
                  className="
                    px-20
                    hidden
                    justify-between
                    lg:flex
                    w-full
                  "
                >
                    <NavbarItem label="OnGoings"/>
                    <NavbarItem label="Anons"/>
                    <NavbarItem label="Genre"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Films"/>
                    <NavbarItem label="TOP - 10"/>
                    <NavbarItem label="Search"/>
                </div>
                <div className="w-32 bg-amber-600 px-2 py-1 rounded-md">
                   <span className="text-white cursor-pointer hover:text-gray-300 transition">My Account</span> 
                </div> 
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2  cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
<<<<<<< HEAD
=======
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell/>
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-8 lg:w-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="" />
                        </div>
                        <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
>>>>>>> 0bcc47b4c97eb7eac386489037b149931f26a753
            </div>
        </nav>
    )
}

export default Navbar;