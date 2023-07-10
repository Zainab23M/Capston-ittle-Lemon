import React from 'react';
import logoh from './Assest/restaurantFood.jpg';
import logo1 from './Assest/download.jpg';
import logo2 from './Assest/8.jpg';
import logo3 from './Assest/3.jpg';
import logo4 from './Assest/6.jpg';
import logo5 from './Assest/5.jpg';
import logo6 from './Assest/11.jpg';
const Home = () => {
  return (
    <>
    
        <div className='section1'>
             <div>
             <h4>Little Lemon</h4>
                 <i>Chicago</i>
                 
                 <i>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</i>
<i><button>sign in free
                     </button></i>
             </div>
             <div>
                 <i><img src={logoh} alt="Little Lemon" /></i>
                
             </div>
        
        </div>
        <div className='home'>
        <div className='home2'>
          <h1>Specials</h1>
          <i><button>Online Menu
             </button></i>
</div>
<div className='home4'>
             <div className='home3'>
             <i><img src={logo3} alt="Little Lemon" /></i>
             <span>
             <h4>Lemon Cake</h4>
                 <h4>$14.22</h4>
             </span>
             <h5>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h5>
               <button>Order Delivery</button>
               </div>

               <div className='home3'>
             <i><img src={logo2} alt="Little Lemon" /></i>
             <span>
             <h4>Lemon Cake</h4>
                 <h4>$14.22</h4>
             </span>
             <h5>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h5>
               <button>Order Delivery</button>
               </div>

               <div className='home3'>
             <i><img src={logo1} alt="Little Lemon" /></i>
             <span>
             <h4>Lemon Cake</h4>
                 <h4>$14.22</h4>
             </span>
             <h5>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h5>
               <button>Order Delivery</button>
               </div>

          </div>

          <div className='home5'>
          <h2 className='hometext'>
          Testimonials
            </h2>
            <div className='home6'>
            <div>

<img src={logo6} alt="Little Lemon" />
   <i>
       Joudy Tabuti</i>
   <i>
        "Really enjoyed the atmosphere."</i>
   </div>
                <div>

                 <img src={logo4} alt="Little Lemon" />
                    <i>
                        Joudy Tabuti</i>
                    <i>
                         "Really enjoyed the atmosphere."</i>
                    </div>

                    <div>
                 <img src={logo5} alt="Little Lemon" />
                    <i>
                        Joudy Tabuti</i>
                    <i>
"Really enjoyed the atmosphere."</i>
                    </div>
            </div>
          </div>
          <div className='section2'>
                <div>
                    <h4>Little Lemon</h4>
                    <i>Chicago</i>

                    <i>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</i>

                </div>
                <div>
                    <i><img src={logo4} alt="Little Lemon" /></i>

                </div>

            </div >
            </div>
        
        </>
  );
};

export default Home;


