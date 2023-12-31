import React from 'react';
import { Link } from 'react-router-dom';
import "../css/data.css";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteBasket } from '../reducers/sepetReducers';
import { useDispatch } from 'react-redux';
import {setPrice} from "../reducers/priceReducer";
import {clearPrices} from "../reducers/priceReducer";


interface Book {
  id: string; 
  volumeInfo: {
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





const SepetPage: React.FC = () => {
  const basket: Book[] = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch();


  const handleUpdatePrice = (bookId: string, newPrice: number) => {
    const shippingPrice = 20;
    dispatch(clearPrices());
    const totalPrice = newPrice < 100 ? newPrice + shippingPrice:newPrice;
    dispatch(setPrice({ bookId, price: totalPrice }));
    
  };








  return (
    <div>
      <div className='relative'>
        <div className='grid md:grid-cols-2 mx-10 sm:grid-cols-1 lg:grid-cols-4'>
          {basket.length === 0 ? (
            <div className=' w-screen flex justify-center   text-3xl items-center h-screen '>
              <p>Sepette Ürün Bulunmamaktadır</p>
            </div>
            
          ) : (
            basket.map((book, index) => (
              <div className='p-5 h-[600px] border relative m-4' key={index}>
                <h1 className="text-lg">{book.volumeInfo.title}</h1>
                <img
                  id='img-book'
                  className='w-full h-[400px] py-4 hover:scale-110 transition-transform duration-500'
                  src={book.volumeInfo.imageLinks?.thumbnail || 'fallback-image-url'}
                  alt="Book Cover"
                />
                <p>Author: {book.volumeInfo.authors.join(', ')}</p>
                <p>Page Count: {book.volumeInfo.pageCount}</p>
                <p>Price: {book.saleInfo?.listPrice?.amount || 'N/A'} TL</p>
                <div className='absolute left-0 flex h-10 hover:bg-orange-500 bottom-0 w-full cursor-pointer bg-orange-600'>
                  <Link  onClick={() => { handleUpdatePrice(book.id, parseInt(book.saleInfo?.listPrice?.amount || '0')) }}  className='text-white w-1/2 bg-green-600 hover:bg-green-500 text-xl flex items-center justify-center' to="/payment">
                    Satın Al
                  </Link>
                  <div onClick={() => {dispatch(deleteBasket(book.id))}} className='text-white w-1/2 h-full bg-red-600 hover-bg-red-400 cursor-pointer text-xl flex items-center justify-center'>
                    <p>Kaldır</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SepetPage;
