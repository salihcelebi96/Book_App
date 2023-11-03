import { Link } from 'react-router-dom';
import "../css/navbar.css";


const Navbar = () => {
  return (
    <div>
      <nav className='w-screen'>
        <ul className='flex w-full justify-center gap-3 sm:gap-10 lg:gap-10 items-center  h-16 bg-blue-700 text-white lg:text-2xl  sm:text-xl'>
          <li>
            <Link className="navbar-link" to="/">Anasayfa</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/doctors">Kitaplar</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/about">Random</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
