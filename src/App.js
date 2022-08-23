import React from "react";
import "./scss/style.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import FilmInfo from "./pages/FilmInfo";
import Search from "./components/Search";

function App() {
	return (
		<>
			<Header/>
			<main>
				<Routes>
					<Route path="/" element={<Homepage/>}/>
					<Route path="/catalog" element={<Catalog/>}/>
					<Route path="/catalog/:filmId" element={<FilmInfo/>}/>
					<Route path="/search" element={<Search/>}/>
					<Route path="*" element={<Homepage/>}/>
				</Routes>
			</main>
			<Footer/>
		</>
	);
}

export default App;
