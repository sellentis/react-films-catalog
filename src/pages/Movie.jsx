import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetFilmQuery, useGetFilmVideosQuery} from "../redux";
import VideoModal from "../components/Modals/VideoModal";
import Modal from "@mui/material/Modal";

const Movie = () => {
	const {filmId} = useParams()
	const {data: movie = [], isFilmLoading} = useGetFilmQuery(filmId)
	const {data: videos = [], isFilmVideosLoading} = useGetFilmVideosQuery(filmId)
	const youtubeTrailers = videos?.results?.filter(item => item.type === 'Trailer' && item.site === 'YouTube')
	const [videoModalVisible, setVideoModalVisible] = useState(false);
	const [videoId, setVideoId] = useState("")
	const modalOpenHandler = () => setVideoModalVisible(true);
	const modalCloseHandler = () => setVideoModalVisible(false);

	const playTrailerHandler = (e, link) => {
		e.preventDefault()
		modalOpenHandler()
		setVideoId(link)
	}

	return (
		<>
			<Modal
				open={videoModalVisible}
				onClose={modalCloseHandler}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="modal"
			>
				<>
					<VideoModal videoId={videoId}/>
				</>
			</Modal>

			<section className="movie"
			         style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
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
								{movie.release_date &&
								<p className="movie__date"><strong>Release date: </strong>{movie.release_date}</p>}
								{movie.status && <p className="movie__status"><strong>Status: </strong>{movie.status}</p>}
								{movie.overview && <p className="movie__overview"><strong>Description: </strong>{movie.overview}</p>}
								{movie.vote_average && <p className="movie__rate"><strong>Rating: </strong>{movie.vote_average}</p>}
								<div className="movie__trailers">
									{youtubeTrailers?.map(trailer => (
										<a
											href={`https://www.youtube.com/watch?v=${trailer.key}`}
											key={trailer.key}
											className="btn"
											onClick={e => playTrailerHandler(e, trailer.key)}
										>
											{trailer.name}
										</a>
									))
									}
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		</>
	);
};

export default Movie;