import { Link } from 'react-router-dom';
import "../css/navbar.css";
import book from "../assets/book.png";
import Menu from "./Menu";
import { useEffect, useState } from 'react';
import DarkMode from './DarkMode';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      };
    };

    
    window.addEventListener('resize', handleResize);

    
    handleResize();

    return () => {
     
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-screen '>
      <div  className='flex  relative  items-center'>
       <div className='flex gap-7  px-10 h-20 items-center'>
        <img  className="h-10 w-10 sm:h-16 sm:w-16 " src={book} alt="" />
        <Link className='text-xl sm:text-3xl  font-serif text-blue-500' to="/">KitapEvim</Link>
       </div>
       <div className='absolute   right-10'>
         <DarkMode/>
       </div>
      <div>
        
      </div>
      </div>
      

      {isMobile ? (
       
        <Menu />
      ) : (

        <nav className='w-screen relative'>
          <ul className='flex w-full justify-around sm:gap-5 gap-10 lg:gap-10 items-center h-16 bg-blue-900 text-white lg:text-2xl sm:text-xl'>
            <div className='flex gap-10 justify-center'>
              <li>
                <Link className="navbar-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="navbar-link" to="/about">About</Link>
              </li>
              <li>
                <Link className="navbar-link" to="/sepet">My Basket</Link>
              </li>
            </div>



            <div className='absolute right-10 border p-2 rounded-2xl bg-green-600 '>
              <li>
                <Link className="navbar-link " to="/contact">Contact</Link>
              </li>
            </div>

          </ul>

        </nav>
      )}

    </div>
  )
}

export default Navbar; 