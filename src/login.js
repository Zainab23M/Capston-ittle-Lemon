import React, { useState } from 'react';
import logoh from './Assest/restaurantFood.jpg';
import logo2 from './Assest/9.jpg';
import logo3 from './Assest/8.jpg';
import { FaEnvelope, FaMapMarkerAlt, FaComment } from 'react-icons/fa';


const Login = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Signup clicked!');
  };
    return (
        <>

<div className="signup-container">
      <h2>Create an Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            <FaMapMarkerAlt /> Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <FaComment /> Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div> 
                    <div className='about2'>
                <div >
                    <img src={logoh} alt="Little Lemon" />
                    <br></br>
                    <img id="img1" src={logo2} alt="Little Lemon" />
                    <br>
                    </br>
                    <img src={logo3} alt="Little Lemon" />
                                    </div>
                <div className='about3'>
                    <div>
                        <h4>Connect with us</h4>

                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</i>

                    </div>

               
            </div>
            </div>
        </>
        );
    };
    
    export default Login;