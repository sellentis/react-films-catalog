import React from 'react';
import {useParams} from "react-router-dom";
import {useGetFilmQuery, useGetFilmVideosQuery} from "../redux";

const Movie = () => {
	const {filmId} = useParams()
	const {data: movie = [], isFilmLoading} = useGetFilmQuery(filmId)
	const {data: videos = [], isFilmVideosLoading} = useGetFilmVideosQuery(filmId)
	console.log(videos?.results)
	const youtubeTrailers = videos?.results?.filter(item => item.type === 'Trailer' && item.site === 'YouTube')
	console.log(youtubeTrailers)
	return (
		<section className="movie" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
			<div className="movie__bg section--padding">
				<div className="container">
					<div className="movie__inner">
						<div className="movie__header">
							<h1 className="movie__title">{movie.title}</h1>
							<h2 className="movie__subtitle">{movie.tagline}</h2>
						</div>
						<div className="movie__preview">
							<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
						</div>
						<div className="movie__info">
							{movie.release_date && <p className="movie__date"><strong>Release date: </strong>{movie.release_date}</p>}
							{movie.status && <p className="movie__status"><strong>Status: </strong>{movie.status}</p>}
							{movie.overview && <p className="movie__overview"><strong>Description: </strong>{movie.overview}</p>}
							{movie.vote_average && <p className="movie__rate"><strong>Rating: </strong>{movie.vote_average}</p>}
							<div className="movie__trailers">
							{youtubeTrailers?.map(trailer => (
									<a href={`https://www.youtube.com/watch?v=${trailer.key}`} key={trailer.key} target="_blank" className="btn">{trailer.name}</a>
								))
							}
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
};

export default Movie;