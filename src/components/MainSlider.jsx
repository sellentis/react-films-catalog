import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/scss';
import "swiper/css/pagination";
import "swiper/css/navigation";
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
				delay: 5500,
				disableOnInteraction: false,
			}}
			pagination={{
				dynamicBullets: true,
				clickable: true
			}}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}
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