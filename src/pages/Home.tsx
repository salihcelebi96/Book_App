import React, { useState } from 'react'
import Data from "../components/Data";
import Search from "../components/Search";
import Navbar from '../components/Navbar';

const Home:React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div>
      <Navbar/>
      <Search  searchValue={searchValue} setSearchValue={setSearchValue} />
      <Data    searchValue={searchValue} setSearchValue={setSearchValue}  />
    </div>
  )
}

export default Home;
