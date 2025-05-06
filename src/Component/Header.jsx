import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';






// Component cho header
const Header = () => {
  
  // Hiệu ứng khi cuộn chuột xuống thanh header sẽ hiện màu
  const [scrolling  , setScrolling] =useState(false);

  useEffect  (()=> {
      const checkScroll = () => {
        setScrolling(window.scrollY > 50)
      };

  window.addEventListener('scroll' , checkScroll);
  return() => {
    window.removeEventListener('scroll' , checkScroll);
  }
}, []);

  return(
    <>
      <header className={` w-full fixed ${scrolling ?'bg-[var(--color-bg)]' : 'bg-transparent'} z-20 transition-all duration-1000 ease-in-out`}>
          <div className="max-w-7xl bg-gray- mx-auto font-poppins ">
              <div className="wrapper flex items-center py-1.5">
                <div className="logo text-4xl text-[var(--color-red)] p-1.5"><Link to="/">LOGO</Link></div>
                <nav className='flex'>
                  <ul className='flex p-1'>
                    
                    <li><Link to="/" className='text-[var(--color-text-white)] bold px-3 hover:text-gray-500 transition duration-300 ease-in-out'  >Trang Chủ</Link></li>
                    <li><Link to="/Danh-muc"  className='text-[var(--color-text-white)] px-3 hover:text-gray-500 transition duration-300 ease-in-out'>Danh Mục</Link></li>
                    <li><Link to="/The-loai"  className='text-[var(--color-text-white)] px-3 hover:text-gray-500 transition duration-300 ease-in-out '>Thẻ loại</Link></li>
                   
                  </ul>
                </nav>
                <div className="search-box"></div>
              </div>
          </div>
      </header>
    </>
  )
};

export default Header;
