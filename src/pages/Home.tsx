import React, { useState } from 'react'
import Data from "../components/Data";
import Search from "../components/Search";
import Scroll from "../components/Scrolling";
import ScrollTop from "../components/ScrollToTop";


const Home:React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div>
      
      
      
      <Scroll/>
      <Search  searchValue={searchValue} setSearchValue={setSearchValue} />
      <Data    searchValue={searchValue} setSearchValue={setSearchValue}  />
      <ScrollTop/> 
    </div>
  )
}

export default Home;
