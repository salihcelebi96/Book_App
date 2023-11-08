import React, { useState,useRef, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";


const Menu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleOutsideClick = (e:any) => {
        if(menuRef.current && !menuRef.current.contains(e.target)){
            setMenuOpen(false);
        }
    };
    useEffect(()=> {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    },[]);

    return (
        <div className='w-screen h-12 flex justify-between  bg-blue-900'>
            <div className='p-5 text-white' onClick={handleMenuToggle}>
                <AiOutlineMenu />
                
            </div>
            {menuOpen && (
                <div className='w-screen z-10' ref={menuRef}>
                    <nav className='w-screen z-10'>
                        <ul className='flex z-10  w-1/5 p-5 text-sm list-disc  h-30 flex-col  gap-3 sm:gap-10 lg:gap-10 bg-blue-900 text-white lg:text-2xl sm:text-xl'>
                            <li className='z-10'>
                                <Link className="navbar-link z-10" to="/">Home</Link>
                            </li>
                            <li className='z-10'>
                                <Link className="navbar-link z-10" to="/about">About</Link>
                            </li>
                            <li className='z-10'>
                                <Link className="navbar-link z-10" to="/sepet">My Basket</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            )}
            <div className='text-white a list-none gap-5 pr-10     flex    items-center justify-center'>
                
                <div>
                    <li className=''>
                        <Link className="navbar-link" to="/iletisim">Contact</Link>
                    </li>
                </div>

            </div>

        </div>
    );
}

export default Menu;
