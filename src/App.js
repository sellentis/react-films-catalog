import React from "react";
import './App.css';
import {useEffect, useState} from 'react'
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import {motion, AnimatePresence} from "framer-motion";

function App() {

	const [popular, setPopular] = useState([])
	const [filtered, setFiltered] = useState([])
	const [activeGenre, setActiveGenre] = useState(0)

	useEffect(() => {
		fetchPopular()
	}, [])

	const fetchPopular = async () => {
		const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6514882deee44570e44a80f24bd4fea7&language=en-US&page=1');
		const movies = await data.json()
		setPopular(movies.results)
		setFiltered(movies.results)
	}
	return (
		<div className="App">
			<Filter
				popular={popular}
				setFiltered={setFiltered}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}/>
			<motion.div layout className="movies">
					{filtered.map(movie => {
						return <Movie key={movie.id} movie={movie}/>
					})}
			</motion.div>
		</div>
	);
}

export default App;
