import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return( 
        <div className="header">
            <Link to="/" style={{textDecoration: "none"}}>
            
            <div className="header-logo">
            <StorefrontIcon className="header-logoImage"/>
                <h2 className="header-logoTitle">eshop</h2>
            </div>
            </Link>
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-searchIcon" />

            </div>

            <div className="header-nav">
                <div className="header-option">
                <span className="header-optionLineOne">Hello Guest</span>
                <span className="header-optionLineTwo">Sign In</span>
                </div>

                <div className="header-option">
                <span className="header-optionLineOne">Your</span>
                <span className="header-optionLineTwo">Shop</span>   
                </div>
                <Link to="/checkout" style={{textDecoration: "none"}}>
                    
                <div className="header-optionBasket">
                    <ShoppingBasketIcon className="header-itemBasket"/>
                <span className="header-optionLineTwo header-basketCount">
                0 </span>
                </div>
                </Link>
            </div>
        </div>
    )
}


export default Header