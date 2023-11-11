import  { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Kullanıcı sayfayı aşağı kaydırdıkça isVisible durumunu güncelle
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sayfa yüklendiğinde ve her sayfa kaydırıldığında kaydırma işlevselliğini takip et
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sayfayı en üstüne kaydıran işlev
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Yavaşça kaydır
    });
  };

  return (
    <div className='relative'>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button  absolute bottom-8 text-3xl border-none right-5      text-black   ">
         <FaArrowCircleUp  />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
