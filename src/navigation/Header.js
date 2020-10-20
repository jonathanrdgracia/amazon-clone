import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../css/header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket, LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase/firebase';

function Header() {
    const [{basket, user}] = useStateValue()
    
    const handleAuth=()=>{
        auth.signOut()
        toast("Wow so easy !");
    }
    return (
    <div className='container'>
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
                <Link to={ !user && '/login' }>
                    <div onClick = { handleAuth} className='header__option'>
                        <span className='header__optionOne'>
                            Hello, Guest
                        </span>
                        <span className='header__optionTwo'>
                            { user ? 'Sign out' : 'Sign in' }
                        </span>
                    </div>
                </Link>
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
                        <span className='header__optionLineTwo header__basketCount' >{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
      
    )
}

export default Header
