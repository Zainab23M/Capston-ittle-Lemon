import React from 'react';
import logoh from './Assest/restaurantFood.jpg';
import logo1 from './Assest/download.jpg';
import logo2 from './Assest/2..jpg';
import logo3 from './Assest/3.jpg';
import logo4 from './Assest/svg.svg';
import logo5 from './Assest/5.jpg';
import logo6 from './Assest/6.jpg';
import logo7 from './Assest/star.png';
import logo8 from './Assest/Vector.png';
const About = () => {
    return (
        <>
            <div className='section1'>
                <div>
                    <h4>Little Lemon</h4>
                    <i>Chicago</i>

                    <i>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</i>

                </div>
                <div>
                    <i><img src={logoh} alt="Little Lemon" /></i>

                </div>

            </div >
            <div className='about2'>
                <div >
                    <img src={logo1} alt="Little Lemon" />
                    <img id="img1" src={logo2} alt="Little Lemon" />
                    <img src={logo3} alt="Little Lemon" />
                </div>
                <div className='about3'>
                    <div>
                        <h4>Our story </h4>
                        <i>Chicago</i>

                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</i>

                    </div>

                </div>
            </div>
            <h2 className='about4'>
                Team / Founder
            </h2>
            <div className='about5'>
               
                <div>
                <span>
                    <i><img src={logo8} alt="Little Lemon" /></i>
                    <i><img src={logo8} alt="Little Lemon" /></i>
                    <i><img src={logo8} alt="Little Lemon" /></i>
                    <i><img src={logo7} alt="Little Lemon" /></i>
                    <i><img src={logo7} alt="Little Lemon" /></i>
                </span>
                 <img src={logo6} alt="Little Lemon" />
                    <i>
                        Joudy Tabuti</i>
                    <i>I am the founder of the restaurant and I am passionate about creating a unique dining experience for our customers.  </i>
                    </div>

                    <div>
                <span>
                    <i><img src={logo8} alt="Little Lemon" /></i>
                    <i><img src={logo8} alt="Little Lemon" /></i>
                    <i><img src={logo8} alt="Little Lemon" /></i>
                    <i><img src={logo8} alt="Little Lemon" /></i>
                    <i><img src={logo7} alt="Little Lemon" /></i>
                </span>
                 <img src={logo5} alt="Little Lemon" />
                    <i>
                        Joudy Tabuti</i>
                    <i>I am the founder of the restaurant and I am passionate about creating a unique dining experience for our customers. </i>
                    </div>
            </div>
            <h2 className='about6'>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </h2>

            <div className='about7'>
                <h2 className='about4'>
                    Frequently Asked Questions
                </h2>
                <div> <h3>What are our most requested main meals  ?</h3>
                    <i><img src={logo4} alt="Little Lemon" /></i></div>

                <div> <h3>What are our most requested main meals  ?</h3>
                    <i><img src={logo4} alt="Little Lemon" /></i></div>

                <div> <h3>What are our most requested main meals  ?</h3>
                    <i><img src={logo4} alt="Little Lemon" /></i></div>

                <div> <h3>What are our most requested main meals  ?</h3>
                    <i><img src={logo4} alt="Little Lemon" /></i></div>

                <div> <h3>What are our most requested main meals  ?</h3>
                    <i><img src={logo4} alt="Little Lemon" /></i></div>

                <div> <h3>What are our most requested main meals  ?</h3>
                    <i><img src={logo4} alt="Little Lemon" /></i></div>

                <div>
                    
                    <button> More ... <i><img src={logo4} alt="Little Lemon" /></i> </button></div>

            </div>
            
        </>
    );
};

export default About;