import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/data.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addBook } from '../reducers/allBookReducer';
import { addBasket } from '../reducers/sepetReducers';

interface DataProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

interface Book {
  id: string;
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
  const dispatch = useDispatch();
  const searchValue = props.searchValue;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<Book[]>();
  const API_KEY = 'AIzaSyC7WGg2plr_s_btmyrSw4IIGDS7ptIWZJk';
  const maxResults = 32;
  let query = 'subject:fantasy';

  const Price = [45, 100, 100, 120, 95, 75, 85, 25, 30, 45, 55, 88, 77, 99, 44, 55, 22, 44, 65, 75, 65, 45, 55, 85, 90, 70, 50, 55, 65, 90, 55, 45];

  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&key=${API_KEY}`;

    fetch(apiUrl)
      .then((response) => response.json() as Promise<{ items: Book[] }>)

      .then((data) => {
        const books = data.items.map((book, index) => {
          const price = Price[index] || 'N/A';
          book.saleInfo = {
            listPrice: {
              amount: price.toString(),
            },
          };

          return book;
        });

        const filteredBooks = books.filter((book) =>
          book.volumeInfo.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        filteredBooks.forEach((book: Book) => {
          dispatch(addBook(book));
        });

        setSearchResults(filteredBooks);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, [searchValue]);

  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems: Book[] | undefined = searchResults?.slice(startIndex, endIndex);

  const pageCount = Math.ceil((searchResults?.length || 0) / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  const handleBasket = (book: Book) => {
    if (currentItems) {
      const selectedBook = currentItems.find(item => item.id === book.id);
      console.log(selectedBook)
      if (selectedBook) {
        dispatch(addBasket(selectedBook));
      }
    }
  };



  return (
    <div className='relative '>
      <div id='book-card' className='grid md:grid-cols-2  my-5  sm:mx-1  md:mx-5  lg:mx-10 sm:grid-cols-1 bg-black  lg:grid-cols-3  xl:grid-cols-4 '>
        {currentItems && currentItems.length > 0 ? (
          currentItems.map((book, index) => (
            <div className='p-5  border relative m-4  bg-blue-700   h-auto  ' key={index}>
              <h1 className="text-lg ">{book.volumeInfo.title}</h1>
              <img
                id='img-book'
                className='w-full h-[400px] py-4 hover:scale-110 transition-transform duration-500'
                src={book.volumeInfo.imageLinks?.thumbnail || 'fallback-image-url'}
                alt="Book Cover"
              />
              <p>Author: {book.volumeInfo.authors.join(', ')}</p>
              <p>Page Count: {book.volumeInfo.pageCount}</p>
              <p>Price: {book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'N/A'} TL</p>
              <div className='absolute left-0 py-2 hover:bg-orange-500 bottom-0 w-full bg-orange-600'>
                <Link onClick={() => handleBasket(book)} className='text-white text-xl flex items-center justify-center' to="/sepet">
                  <p >Sepete Ekle</p>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
        <div className="w-screen flex justify-center">
          <Stack className='' spacing={2}>
            <Pagination
              count={pageCount}
              variant="outlined"
              onChange={(_, page) => handlePageClick({ selected: page - 1 })}
            />

          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Data;