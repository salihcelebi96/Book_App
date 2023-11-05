import React, { useState } from 'react'
import Data from "../components/Data";
import Search from "../components/Search";
import Scroll from "../components/Scrolling";


const Home:React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div>
      
      
      <Scroll/>
      <Search  searchValue={searchValue} setSearchValue={setSearchValue} />
      <Data    searchValue={searchValue} setSearchValue={setSearchValue}  />
    </div>
  )
}

export default Home;
