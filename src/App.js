import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SubHeader from './SubHeader';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // switch is no more with us.
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// 5.56.00
// import ImageSlider from './ImageSlider';


const promise = loadStripe('pk_test_51LFMpwHF7XX3uV38DzqmKt8uXGQfg4GKvG61ec3lF5TG1cXSw4nNbAILoeFrJ7XumDxeBYPdKeb65GLWXfoxnhWr00wEfHVheA');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // it will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log(`the use is ${authUser}`);
      if(authUser){
        // user is just logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          uesr: null
        })
      }
    })
  }, [])
  
  return (
    // BEM
    <Router>
      <div className="App">
        

        <Routes>
        <Route path='/login'element={[<Login />]} />
          <Route path='/'element={[<Header />, <SubHeader />, <Home />, <Footer />]} />
          
          {/* main route should be last */}
          <Route path="/checkout" element={[<Header />, <Checkout />, <Footer />]}/>
          <Route path="/payment" element={[<Header />, 
                      <Elements stripe={promise}><Payment /></Elements>, <Footer />]}/>
        </Routes>
        
    </div>
    </Router> 
  );
}

export default App;
