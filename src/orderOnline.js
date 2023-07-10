import logo1 from './Assest/download.jpg';
import logo2 from './Assest/download2.jpg';
import React, { useState } from 'react';


const Order = () => {

    const [quantity, setQuantity] = useState(0);

    function handleIncrement() {
        setQuantity(quantity + 1);
    }
  
    function handleDecrement() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phon, setPhonNumber] = useState('');
    const [adress, setAdress] = useState('');
    const [ccnumber, setCCNumber] = useState('');
    const [date, setExpire] = useState('');

  
    
  
   
  const handleSubmit = (e) => {
      e.preventDefault();
      // Perform reservation submission logic here
      console.log('Reservation submitted:', name,email,phon,adress,ccnumber, date);
      // Reset form fields
      setName('');
      setEmail('');
      setPhonNumber('');
      setAdress('');
      setCCNumber('');
      setExpire('');
  
    };

    return (
        <>
        <div className='resv1'>
            <span>
                 <i>Cart</i>
                 
            </span>

            <div className='resv2'>
                
                <i><img src={logo2} alt="Little Lemon" /></i>
                <div className='resv3'>
                 <span>
                 <h3>Bruschetta</h3>
                 <h3>$12.22</h3>
                 </span>
                 <div className="cart-button">
      <button className="decrement-button" onClick={handleDecrement}>
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button className="increment-button" onClick={handleIncrement}>
        +
      </button>
                 </div>
                 </div>
                
            </div>
            <div className='resv2'>
                
                <i><img src={logo1} alt="Little Lemon" /></i>
                <div className='resv3'>
                 <span>
                 <h3>Lemon Cake</h3>
                 <h3>$14.22</h3>
                 </span>
                 <div className="cart-button">
      <button className="decrement-button" onClick={handleDecrement}>
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button className="increment-button" onClick={handleIncrement}>
        +
      </button>
                 </div>
                 </div>
                
            </div>
            <i>Order Summary</i>
            <div className='orders'>
                <span>
                    <div>
                    <i>Bruschetta</i>
                 <i>$12.22</i>  
                 </div>  

                <i><img src={logo2} alt="Little Lemon" /></i>

                </span>
                <hr></hr>
                <span>
                    <div>
                    <i>Lettle Lemon</i>
                 <i>$14.22</i>  
                 </div>  

                <img src={logo1} alt="Little Lemon" />

                </span>
                <hr></hr>
                
                <h2>Total $26.44</h2>
            </div>
  

        </div>
        <div className="reservation-form">
      <h2>Insert Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">FullName *:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email *:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone Number : </label>
          <input
            type="number"
            id="number"
            value={phon}
            onChange={(e) => setPhonNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Adress *: </label>
          <input
            type="adess"
            id="adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            required
          />
          </div>
        
        <h2>Payment</h2>
        <div className="form-group">
          <label htmlFor="number">CC Number * : </label>
          <input
            type="number"
            id="number"
            value={ccnumber}
            onChange={(e) => setCCNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Expire : *</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setExpire(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">submit</button>
      </form>
    </div>




        </>
    );
};

export default Order;