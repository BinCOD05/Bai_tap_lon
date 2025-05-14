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
    else{
      
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
              <div className="wrapper flex items-center py-1 justify-between">
                <div className="logo text-xl sm:basis-2/6 font-bold text-[var(--color-red)]  mx-3.5  "><Link to="/" className='flex items-center'>
                  <img src="/public/logo.png" className='w-[70px] h-auto'  alt="" />
                  <span className='hidden md:inline'> MeoChill</span>
                </Link></div>
                <nav className=' hidden lg:flex basis-3/6 items-center  justify-center absolute top-[90%] right-[10px] bg-[var(--color-red)]/80  h-[30vh] py-10 lg:py-0 md:px-5  px-3.5 lg:static lg:h-auto lg:bg-transparent z-999  rounded-3xl border-1 lg:border-0'ref={topMenuRef} >
                  <ul className='flex flex-col lg:flex-row p-1 gap-5 justify-between  relative'>
                    
                    <li><Link to="/" className='ct-menu-item'  >Trang Chủ</Link></li>
                    <li><Link to="/Danh-Muc"  className='ct-menu-item'>Danh Mục</Link></li>
                    <li><Link to="/The-loai"  className='ct-menu-item'>Thẻ loại</Link></li>
                   
                  </ul>
                </nav>
                <div className="text-white basis-4/6 lg:basis-1/6 flex items-center  justify-end lg:justify-between  space-x-5">
                      
                      {/* <input className='p-1.5 bg-gray-800' type='text' placeholder='Tìm kiếm'></input>
                      <button className='rounded-[5px] hidden sm:block p-2.5 bg-[var(--color-red)] text-shadow-white cursor-pointer'>Search</button> */}
                      <div id='toggle-menu-icon' className=" px-5 cursor-pointer z-1000 lg:hidden " ref={toggleMenu}>
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
