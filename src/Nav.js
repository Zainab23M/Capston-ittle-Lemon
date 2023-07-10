import Header from './Header';
import Home from './home';
import About from './about';
import Reservation from './reservations';
import Order from './orderOnline';
import React, { useState } from 'react';
import Login from './login';
const Nav = () => {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'reservations':
        return <Reservation />;
      case 'orderOnline':
        return <Order />;
      case 'login':
        return <Login />;
      default:
        return <Home />;
    }
  };


  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
    <nav>
      <Header />
      <div class="navitem" >        
        <a onClick={() => navigateTo('home')}>Home</a>
        <a onClick={() => navigateTo('about')}>About</a>
        <a onClick={() => navigateTo('reservations')}>Reservation</a>
        <a onClick={() => navigateTo('orderOnline')}>OrderOnline</a>
        <a onClick={() => navigateTo('login')}>Login</a>
        </div>
    </nav>
    {renderPage()}
</>
  );
};

export default Nav;
