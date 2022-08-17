import React from 'react';
import searchIcon from '../assets/icons/search.svg'
import userIcon from '../assets/icons/user.svg'
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<a href="#" className="header__logo">
						Filmer
					</a>
					<div className="header__menu" id="menu">
						<nav className="header__nav">
							<Link className="header__link" to="/">Main</Link>
							<Link className="header__link" to="/catalog">Popular</Link>
							<Link className="header__link" to="/catalog">Catalog</Link>
						</nav>
					</div>
					<div className="header__cabinet">
						<Link to="/search" className="header__btn">
							<img src={searchIcon} alt="Search"/>
						</Link>
						<a href="#" className="header__btn">
							<img src={userIcon} alt="Cabinet"/>
						</a>
					</div>
					<div className="header__burger" id="burger">
						<span/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;