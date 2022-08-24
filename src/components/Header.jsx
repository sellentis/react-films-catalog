import React, {useEffect, useState} from 'react';
import searchIcon from '../assets/icons/search.svg'
import userIcon from '../assets/icons/user.svg'
import {Link, NavLink, useLocation} from "react-router-dom";
import Modal from '@mui/material/Modal';
import {useDebounce} from "../hooks/debounce";
import {useSearchFilmsQuery} from "../redux";

const Header = () => {
	const [searchModalVisible, setSearchModalVisible] = useState(false);
	const [dropdown, setDropdown] = useState(false)
	const [searchFocused, setSearchFocused] = useState(false)
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
	const modalOpenHandler = () => setSearchModalVisible(true);
	const modalCloseHandler = () => setSearchModalVisible(false);
	const location = useLocation()

	const [keyword, setKeyword] = useState('')
	const debounced = useDebounce(keyword)

	const {data, isLoading} = useSearchFilmsQuery(debounced, {
		skip: debounced.length < 3,
	})
	useEffect(() => {
		mobileMenuVisible && setMobileMenuVisible(false)
	}, [location])
	useEffect(() => {
		setDropdown(debounced.length > 3 && data?.results.length > 0 && searchFocused)
	}, [debounced, data, searchFocused])
	return (
		<>
			<Modal
				open={searchModalVisible}
				onClose={modalCloseHandler}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="modal"
			>
				<div className="search">
					<div className="search__inner">
						<input
							value={keyword}
							onChange={e => setKeyword(e.target.value)}
							type="text"
							className="search__input"
							placeholder="Search film"
							onFocus={() => setSearchFocused(true)}
						/>
						{dropdown && <ul className="search__results">
							{
								data?.results.map(movie => (
									<li className="search__item" key={movie.id}><NavLink onClick={modalCloseHandler} to={`/catalog/${movie.id}`}>{movie.title}</NavLink></li>
								))
							}
						</ul>}
					</div>
				</div>
			</Modal>

			<header className="header">
				<div className="container">
					<div className="header__inner">
						<NavLink to="/" className="header__logo">Filmer</NavLink>
						<div className={`header__menu ${mobileMenuVisible && "active"}`} id="menu">
							<nav className="header__nav">
								<NavLink className="header__link" to="/">Main</NavLink>
								<NavLink className="header__link" to="/catalog">Catalog</NavLink>
							</nav>
						</div>
						<div className="header__cabinet">
							<button onClick={modalOpenHandler} className="header__btn">
								<img src={searchIcon} alt="Search"/>
							</button>
							<a href="#" className="header__btn">
								<img src={userIcon} alt="Cabinet"/>
							</a>
						</div>
						<div onClick={(e) => setMobileMenuVisible(!mobileMenuVisible)} className={`header__burger ${mobileMenuVisible && "active"}`} id="burger">
							<span/>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;