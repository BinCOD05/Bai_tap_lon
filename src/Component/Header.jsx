import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

// Component cho header
const Header = () => {
  //Nhận sự kiện khi click vào màn hình
  const toggleMenu = useRef(null) 
   const topMenuRef = useRef(null) 

  useEffect(()=>{
   const handleClick = (e) =>{
    if(toggleMenu.current && toggleMenu.current.contains(e.target)){
      topMenuRef.current.classList.toggle("hidden");
    }
   } 
   document.addEventListener('click' , handleClick)
   return ()=> document.removeEventListener('click' , handleClick)
  },[])



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
      <header className={` w-full top-0 fixed ${scrolling ?'bg-[var(--color-bg)] ' : 'bg-black/5 '} z-100 transition-all duration-700 ease-in-out`}>
          <div className="max-w-7xl  mx-auto font-poppins ">
              <div className="wrapper flex items-center py-1.5 justify-between">
                <div className="logo text-4xl basis-1/6 font-bold text-[var(--color-red)] p-2 mx-3.5 "><Link to="/">LOGO</Link></div>
                <nav className='lg:flex basis-3/6 hidden'ref={topMenuRef} >
                  <ul className='flex p-1 gap-4'>
                    
                    <li><Link to="/" className='text-[var(--color-text-white)] font-bold px-3 hover:text-gray-500 transition duration-300 ease-in-out'  >Trang Chủ</Link></li>
                    <li><Link to="/Danh-Muc"  className='text-[var(--color-text-white)] px-3 hover:text-gray-500 transition duration-300 ease-in-out'>Danh Mục</Link></li>
                    <li><Link to="/The-loai"  className='text-[var(--color-text-white)] px-3 hover:text-gray-500 transition duration-300 ease-in-out '>Thẻ loại</Link></li>
                   
                  </ul>
                </nav>
                <div className="text-white basis-2/6 flex items-center justify-center space-x-5">
                      
                      <input className='p-2 bg-gray-800' type='text' placeholder='Tìm kiếm'></input>
                      <button className='rounded-[5px] p-2.5 bg-[var(--color-red)] text-shadow-white cursor-pointer'>Search</button>
                      <div id='toggle-menu-icon' className=" px-3 cursor-pointer" ref={toggleMenu}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                      </div>

                </div>
              </div>
          </div>
      </header>
    </>
  )
};

export default Header;
