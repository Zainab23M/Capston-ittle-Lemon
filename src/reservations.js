import logo1 from './Assest/download.jpg';
import logo2 from './Assest/download2.jpg';
import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api';


const Reservation = () => {
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);


  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    fetchAvailableTimes(today);
  }, []);

  const fetchAvailableTimes = (selectedDate) => {
    fetchAPI(selectedDate)
      .then(times => setAvailableTimes(times))
      .catch(error => console.error(error));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      number,
      date,
      time,
      occasion,
      name,
      email,
      phoneNumber,
      message
    };

    submitAPI(formData)
      .then(success => {
        if (success) {
          console.log('Form submitted successfully');
         
        } else {
          console.log('Form submission failed');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div className='res2'>
        <div className='res3'>
          <div>
            <h4>How do I book a table?</h4>
            <i>Chicago</i>
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</i>
          </div>
        </div>
        <div>
          <img src={logo1} alt="Little Lemon" />
          <img src={logo2} alt="Little Lemon" />
        </div>
      </div>

      <div className="reservation-form">
        <h2>Book a table in the restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="number">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select a time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your own directions:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Book a table</button>
        </form>
      </div>
    </>
  );
};

export default Reservation;
