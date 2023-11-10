import  { useState } from 'react';
import masterCard from "../assets/mastercard.svg"
import visa from "../assets/visa.svg"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { toast } from 'react-toastify';




const PaymentPage = () => {
    
    const price = useSelector((state: RootState) => state.price);
    console.log(price)

    
    

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  

  const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleExpiryDateChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); 
    if (input.length > 2) {
      
      setExpiryDate(input.slice(0, 2) + '/' + input.slice(2));
    } else {
      setExpiryDate(input);
    }
  };

  const handleCardNumberChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); 
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 '); 
    setCardNumber(formattedInput);
  };



  const handlePaymentSubmit = () => {
    console.log('Payment Information:', {
      email,
      cardNumber,
      expiryDate,
      cvv,
      cardholderName,
    });
    toast.success('Siparişiniz Alınmıştır !', {
      position: 'top-right', 
      autoClose: 4000, 
    });
  };
  

  const isFormValid = () => {
    return (
      email !== '' &&
      cardNumber !== '' &&
      expiryDate !== '' &&
      cvv !== '' &&
      cardholderName !== '' 
     
    );
  };

  return (
    <div className='flex flex-col  items-center h-screen font-serif '>
        
       
      <div className='w-96  flex flex-col mt-14 border border-blue-800 rounded-sm p-5 items-center gap-3 '>
        <div>
          <h1 className='text-3xl '>Pay with card</h1>
        </div>
        <div className='flex flex-col  '>
          <label>Email :</label>
          <input
            className={`border  rounded-md ${isEmailValid ? '' : 'border-red-500'}`}
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && (
            <p className="text-red-500">Please enter a valid email address.</p>
          )}
        </div>
        <div className='flex flex-col '>
          <label>Card Number :</label>
          <div className=' relative '>
            <div>
              <input
                className="border rounded-md py-1 text-black"
                type="text"
                name="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
                placeholder="xxxx xxxx xxxx xxxx" 
                required
              />
            </div>


            <div className="visa transform  text-black flex absolute  right-1 top-2"> {/* Adjust the position of the icons */}
              {cardNumber.startsWith('4') && <img src={visa} alt="Visa" className="w-7 border rounded-sm " />}
              {cardNumber.startsWith('5') && <img src={masterCard} alt="Mastercard" className="w-7 border rounded-sm" />}
            </div>

          </div>


        </div>
        <div className='flex flex-col '>
          <label>Expiry Date :</label>
          <input
            className='border rounded-md text-black'
            type="text"
            name="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength={5}
            pattern="\d\d/\d{4}"
            placeholder="MM/YYYY"
            required
          />
        </div>
        <div className='flex flex-col '>
          <label>CVV :</label>
          <input className='border rounded-md text-black' maxLength={3} type="text" name="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <div className='flex flex-col '>
          <label>Cardholder Name :</label>
          <input className='border rounded-md text-black' type="text" name="cardholderName" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
        </div>
        
        <div className='flex flex-col'> 
          <label className='flex justify-center text-red-700'>Total Price:</label>
          {Object.keys(price).map((productId) => (
            <div key={productId}>
              
              <p>Price: {price[productId]}</p>
            </div>
          ))}
        </div>
        <div>
          {isFormValid() ? (
            <Link
              to="/"
              className='text-white border bg-gray-700 hover:bg-gray-600 px-2 rounded-md p-1 font-bold'
              onClick={handlePaymentSubmit}
            >
              Submit Payment
            </Link>
          ) : (
            <div  className='text-white border bg-gray-700 opacity-50 cursor-not-allowed px-2 rounded-md p-1 font-bold'>
              Submit Payment
            </div>
          )}
        </div>
       
      </div>
    </div>
  )
}

export default PaymentPage;
