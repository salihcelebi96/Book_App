
import './App.css'
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sepet from "./pages/SepetPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import DarkMode from "./components/DarkMode";
import Payment from "./pages/Payment";






function App() {


  return (
    <>
    
      <Router>
        <div className='absolute top-5 right-5'>
          <DarkMode/>
        </div>
       
      <Navbar/>
      
        <Routes>
          <Route  path='/' element={<Home/>}  />
          <Route  path='/sepet' element={<Sepet/>}  />
          <Route  path='/about' element={<About/>}    />
          <Route  path='/payment' element={<Payment/>}    />

        </Routes>
      </Router>


    </>
  )
}

export default App
