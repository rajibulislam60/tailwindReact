import React, { useState, useEffect } from 'react';

const Navbar = () => {
  let [darkMode, setDarkMode] = useState('light-theme');
  let toggleTheme = ()=>{
    if (darkMode === 'dark-theme') {
      setDarkMode('light-theme')
    }else{
      setDarkMode('dark-theme')
    }
  }
  useEffect(() => {
    document.body.className = darkMode;
  }, [darkMode])

  return (
    <>
      <div className='mt-10 w-[400px] border mx-auto p-10 relative'>
        <h1 className='text-[28px] font-bold'>Rajibul Islam</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam vitae nesciunt dolorum accusantium, voluptates sunt veritatis enim ipsum nemo.</p>
        <a className='absolute top-[20px] right-[15px]' onClick={toggleTheme}>
          {darkMode === 'dark-theme' ? (
            <i className="fa-solid fa-sun text-2xl"></i>
          ) : (
            <i className="fa-solid fa-moon text-2xl"></i>
          )}
        </a>
      </div>
    </>
  );
}

export default Navbar;

