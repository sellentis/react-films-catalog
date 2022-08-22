import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper";
import 'swiper/scss';
import {useGetFilmsQuery} from "../redux";


const MainSlider = () => {
	const {data = [], isLoading} = useGetFilmsQuery()
	let movies = data.results
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
			{movies?.map(movie => {
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