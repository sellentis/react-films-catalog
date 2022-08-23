import React from "react";
import "./scss/style.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import Search from "./components/Search";
import Movie from "./pages/Movie";

function App() {
	return (
		<>
			<Header/>
			<main>
				<Routes>
					<Route path="/" element={<Homepage/>}/>
					<Route path="/catalog" element={<Catalog/>}/>
					<Route path="/catalog/:filmId" element={<Movie/>}/>
					<Route path="/search" element={<Search/>}/>
					<Route path="*" element={<Homepage/>}/>
				</Routes>
			</main>
			<Footer/>
		</>
	);
}

export default App;
