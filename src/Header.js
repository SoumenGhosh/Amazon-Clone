import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const hangleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
    <div className='header'>
        {/* Left side amazon logo */}
        <Link to='/'>
            <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/> 
        </Link>
        

        {/* Search Box */}
        <div className='header__search'>
            <input className='header__searchInput' type="text" />
            {/* Logo */}
            <SearchIcon className='header__searchIcon'></SearchIcon>
        </div>

        {/* Right side 4 functions */}
        <div className='header_nav'>
            {/* Hello Sign in */}
            <Link to={!user && '/login'}>
                <div onClick={hangleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello {user ? user?.email : 'Guest'}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            {/* Features and order */}
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            {/* your prime */}
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            {/* cart */}
            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header_basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header