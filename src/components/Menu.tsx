import React, { useState,useRef, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

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
        <div className='w-screen h-12 flex justify-between  bg-blue-700'>
            <div className='p-5 text-white' onClick={handleMenuToggle}>
                <AiOutlineMenu />
                
            </div>
            {menuOpen && (
                <div className='w-screen' ref={menuRef}>
                    <nav className='w-screen '>
                        <ul className='flex w-1/5 p-5 text-sm list-disc  h-30 flex-col  gap-3 sm:gap-10 lg:gap-10 bg-blue-700 text-white lg:text-2xl sm:text-xl'>
                            <li>
                                <Link className="navbar-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="navbar-link" to="/doctors">Books</Link>
                            </li>
                            <li>
                                <Link className="navbar-link" to="/about">Random</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            )}
            <div className='text-white a list-none gap-5 pr-10 flex items-center justify-center'>
                
                <div>
                    <li>
                        <Link className="navbar-link" to="/iletisim">Contact</Link>
                    </li>
                </div>

            </div>

        </div>
    );
}

export default Menu;
