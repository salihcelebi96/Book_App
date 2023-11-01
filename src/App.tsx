
import './App.css'
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sepet from "./pages/SepetPage";





function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>}  />
          <Route  path='/sepet' element={<Sepet/>}  />
        </Routes>
      </Router>


    </>
  )
}

export default App
