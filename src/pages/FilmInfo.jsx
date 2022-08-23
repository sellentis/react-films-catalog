import React from 'react';
import {useParams} from "react-router-dom";
import {useGetFilmQuery} from "../redux";

const FilmInfo = () => {
	const {filmId} = useParams()
	const {data = [], isLoading} = useGetFilmQuery(filmId)
	console.log(data)
	return (
		<section className="section section--padding">
			<div className="container">
				<h1>Film info1</h1>
			</div>
		</section>
	);
};

export default FilmInfo;