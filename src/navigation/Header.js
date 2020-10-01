import React from 'react'
import '../css/header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket, LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <div>
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' alt='LOGO'  src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>
            <div className='header__search'>
                <input 
                    className='header__searchInput' type='text'
                />
                <SearchIcon 
                    className='header__serarchIcon' 
                />
            </div>
            
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionOne'>
                        Hello, Guest
                    </span>
                    <span className='header__optionTwo'>
                        Sign in
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionOne'>
                        Returns
                    </span>
                    <span className='header__optionTwo'>
                       & orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionOne'>
                        Your
                    </span>
                    <span className='header__optionTwo'>
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasket/>
                        <span className='header__optionLineTwo header__basketCount' >0</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className='header__secundary'>
           
            <div className='two'>
                <div className='header__location'>
                    <LocationOn/>
                </div>
              <div className='header__secundaryOne' >
                <div>
                    Deliver to Jonathan
                </div>
                <div>
                    Doral 123456
                </div>
              </div>
            </div>
            <div>
                <span>jonathan´s Amazon.com</span>
            </div>
            <div>
                <span>Customer Service</span>
            </div>
            <div>
                <span>Browsing History</span>
            </div>
            <div>
                <span>Prime Video</span>
            </div>
            <div>
                <span>Best Seller</span>
            </div>
            <div>
                <span>Today´s Deals</span>
            </div>
            <div>
                <span>Find a Gift</span>
            </div>
        </div>
    </div>
      
    )
}

export default Header
