
import './App.css'
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sepet from "./pages/SepetPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import DarkMode from "./components/DarkMode";
import Payment from "./pages/Payment";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact';







function App() {


  return (
    <>
    
      <Router>
        <ToastContainer />
        <div className='absolute top-5 right-5'>
          <DarkMode/>
        </div>
       
      <Navbar/>
      
        <Routes>
          <Route  path='/' element={<Home/>}  />
          <Route  path='/sepet' element={<Sepet/>}  />
          <Route  path='/about' element={<About/>}    />
          <Route  path='/payment' element={<Payment/>}    />
          <Route  path='/contact' element={<Contact/>} />


        </Routes>
      </Router>


    </>
  )
}

export default App
