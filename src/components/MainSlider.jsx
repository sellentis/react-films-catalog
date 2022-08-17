import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper";
import 'swiper/scss';

const API_KEY = process.env.REACT_APP_FILMS_API

const MainSlider = () => {
	const [popular, setPopular] = useState([])
	const [activeGenre, setActiveGenre] = useState(0)

	useEffect(() => {
		fetchPopular()
	}, [])

	const fetchPopular = async () => {
		const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
		const movies = await data.json()
		setPopular(movies.results)
	}
	return (
		<Swiper
			className="slider"
			spaceBetween={50}
			slidesPerView={1}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{popular.map(movie => {
				return <SwiperSlide
					key={movie.id}
					className="slider__slide"
					style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}
				>
					<div className="container">
						<h2 className="slider__title">{movie.title}</h2>
					</div>
				</SwiperSlide>
			})}
		</Swiper>
	);
};

export default MainSlider;