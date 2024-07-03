import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='w-full h-[600px] bg-[url("./assets/bg.jpg")] bg-no-repeat bg-cover'></div>
    </>
  );
}

export default App