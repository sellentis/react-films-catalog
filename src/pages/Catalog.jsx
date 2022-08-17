import React, {useEffect, useState} from 'react';
import Filter from "../components/Filter";
import {motion} from "framer-motion";
import Movie from "../components/Movie";

const API_KEY = process.env.REACT_APP_FILMS_API

const Catalog = () => {

	const [popular, setPopular] = useState([])
	const [filtered, setFiltered] = useState([])
	const [activeGenre, setActiveGenre] = useState(0)

	useEffect(() => {
		fetchPopular()
	}, [])

	const fetchPopular = async () => {
		const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
		const movies = await data.json()
		setPopular(movies.results)
		setFiltered(movies.results)
	}

	return (
		<>
			<section className="catalog">
				<div className="container">
					<Filter
						popular={popular}
						setFiltered={setFiltered}
						activeGenre={activeGenre}
						setActiveGenre={setActiveGenre}
					/>
					<motion.div layout className="movies">
						{filtered.map(movie => {
							return <Movie key={movie.id} movie={movie}/>
						})}
					</motion.div>
				</div>
			</section>
		</>
	)
};

export default Catalog;