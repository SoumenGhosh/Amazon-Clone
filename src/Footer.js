import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        {/* <h1>Powered by: <i>30 seconds</i></h1>
        <h3>Email: <i>soumengh007@gmail.com</i></h3>
        <h3>Contact: <i>(+88)01715-001147</i></h3> */}
      
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__column">
              <h4>Amazon</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Get Help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Online Shop</h4>
              <ul>
                <li><a href="#">watch</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">shoe</a></li>
                <li><a href="#">dress</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Follow Us</h4>
              <div className='footer__social'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <a href="#"><i className='fab fa-facebook-f'></i></a>
                <a href="#"><i className='fab fa-twitter'></i></a>
                <a href="#"><i className='fab fa-instagram'></i></a>
                <a href="#"><i className='fab fa-linkedin-in'></i></a>
              </div>
            </div>

          </div>
          
        </div>
        
        <div className='footer__end'>
            <small>developed By:<i>30 seconds</i></small>
            <small>contact: <i>(+88)01715001147</i></small>
            <small>email: <i>soumengh007@gmail</i></small>
        </div>

        
    </div>
  )
}

export default Footer