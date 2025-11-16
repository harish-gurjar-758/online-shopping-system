import { useState } from 'react'
import NavBar from './assets/Complonants/NavBar/NavBar';
import Registration from './assets/Pages/Registration';
import Home from './assets/Pages/Home';

function App() {

  return (
    <div className='bg-black'>
      <NavBar />
      <Registration />
      <Home/>
    </div>
  )
}

export default App
