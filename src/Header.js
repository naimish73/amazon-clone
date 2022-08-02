import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header-logo"
                    src="https://pngpress.com/wp-content/uploads/2020/07/uploads_amazon_amazon_PNG11.png"
                    alt="amazon logo"
                />
            </Link>
            <div className="header-search">
                <input type="text" className="header-searchInput" />
                <SearchIcon className="header-searchIcon" />
            </div>
            <div className="header-nav">
                <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">hello neo</span>
                        <span className="header-optionLineTwo">sign in</span>
                    </div>
                </Link>
                <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Returns</span>
                        <span className="header-optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Your</span>
                        <span className="header-optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header-link">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header-optionLineTwo header-basketCount">
                            0
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
