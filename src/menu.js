import React from 'react';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Burger', price: '$10' },
    { id: 2, name: 'Pizza', price: '$12' },
    { id: 3, name: 'Salad', price: '$8' },
    { id: 4, name: 'Pasta', price: '$14' },
  ];

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
