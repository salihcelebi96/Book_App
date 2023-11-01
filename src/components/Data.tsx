import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/data.css";

interface DataProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

interface Book {
  volumeInfo: {
    id: string;
    title: string;
    authors: string[];
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    listPrice: {
      amount: string;
    } | null;
  };
}

const Data: React.FC<DataProps> = (props) => {

  const searchValue = props.searchValue;
  const setSearchValue = props.setSearchValue;
 

 

  const [searchResults, setSearchResults] = useState<Book[]>();
  const API_KEY = 'AIzaSyC7WGg2plr_s_btmyrSw4IIGDS7ptIWZJk';
  const maxResults = 21;
  let query = 'subject:fantasy';

  

  useEffect(() => {
    
  
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&key=${API_KEY}`;
  
    fetch(apiUrl)
      .then((response) => response.json() as Promise<{ items: Book[] }>)
      .then((data) => {
        const books = data.items;
        const filteredBooks = books.filter((book) =>
        book.volumeInfo.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredBooks);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, [searchValue]);
  

  return (
    <div className=''>
      <div id='book-card' className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 '>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((book, index) => (
            <div className='p-5 h-[600px] border relative m-4' key={index}>
              <h1 className="text-lg ">{book.volumeInfo.title}</h1>
              <img
                id='img-book'
                className='w-full h-[400px] py-4 hover:scale-110 transition-transform duration-500'
                src={book.volumeInfo.imageLinks?.thumbnail || 'fallback-image-url'}
                alt="Book Cover"
              />
              <p>Author: {book.volumeInfo.authors.join(', ')}</p>
              <p>Page Count: {book.volumeInfo.pageCount}</p>
              <p>Price: {book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'N/A'}</p>
              <div className='absolute left-0 py-2 hover:bg-orange-500 bottom-0 w-full bg-orange-600'>
                <Link className='text-white text-xl flex items-center justify-center' to="/sepet">
                   <p>Sepete Ekle</p> 
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Data;
