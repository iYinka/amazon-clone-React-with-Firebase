import React from 'react'
import './Amazon.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'



function Header() {
  const [{ basket, user }, dispatch ] = useStateValue();
  
  const handleAuth = () => {
      if (user) {
        auth.signOut();
      }
  }

    return (
        <div className="header">
           <Link to="/">
              <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="header__logo" 
                />
           </Link> 

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder='Search your preferred items here...' />
                <SearchIcon className="header__searchIcon" />
            </div>
            

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>  
                                          {/*user?.email || 'Guest'  */}
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div> 
                </Link>

                <Link to='/orders'>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>                    
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>                    
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span> {/* ? makes it an opyional chaining i.e if the value of basket throws an error, it gracefully terminates */}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;