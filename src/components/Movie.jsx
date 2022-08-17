import React from 'react';
import {motion} from "framer-motion";

const Movie = ({movie}) => {
	return (
		<motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout className="movies__item">
			<div className="movies__item-img">
				<img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
			</div>
			<div className="movies__item-footer">
				<h2 className="movies__item-title">{movie.title}</h2>
			</div>
		</motion.div>
	);
};

export default Movie;