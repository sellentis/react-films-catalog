import React, {useEffect, useState} from 'react';
import searchIcon from '../assets/icons/search.svg'
import userIcon from '../assets/icons/user.svg'
import {Link, NavLink} from "react-router-dom";
import Modal from '@mui/material/Modal';
import Search from "./Search";
import {useDebounce} from "../hooks/debounce";
import {useSearchFilmsQuery} from "../redux";
import CircularProgress from "@mui/material/CircularProgress";
import {light} from "@mui/material/styles/createPalette";

const Header = () => {
	const [searchModalVisible, setSearchModalVisible] = useState(false);
	const [dropdown, setDropdown] = useState(false)
	const [searchFocused, setSearchFocused] = useState(false)
	const modalOpenHandler = () => setSearchModalVisible(true);
	const modalCloseHandler = () => setSearchModalVisible(false);

	const [keyword, setKeyword] = useState('')
	const debounced = useDebounce(keyword)

	const {data, isLoading} = useSearchFilmsQuery(debounced, {
		skip: debounced.length < 3,
	})
	useEffect(() => {
		setDropdown(debounced.length > 3 && data?.results.length > 0 && searchFocused)
		console.log(searchFocused)
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
							onBlur={() => setSearchFocused(false)}
						/>
						{dropdown && <ul className="search__results">
							{
								data?.results.map(movie => (
									<li className="search__item" key={movie.id}>{movie.title}</li>
								))
							}
						</ul>}
					</div>
				</div>
			</Modal>

			<header className="header">
				<div className="container">
					<div className="header__inner">
						<a href="#" className="header__logo">
							Filmer
						</a>
						<div className="header__menu" id="menu">
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
						<div className="header__burger" id="burger">
							<span/>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;