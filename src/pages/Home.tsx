import React, { useState } from 'react'
import Data from "../components/Data";
import Search from "../components/Search";

const Home:React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div>
      <Search  searchValue={searchValue} setSearchValue={setSearchValue} />
      <Data    searchValue={searchValue} setSearchValue={setSearchValue}  />
    </div>
  )
}

export default Home;
