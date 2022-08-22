import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_FILMS_API

export const filmsApi = createApi({
	reducerPath: 'filmsApi',
	baseQuery: fetchBaseQuery({baseUrl: `https://api.themoviedb.org/3/`}),
	endpoints: (build) => ({
		getFilms: build.query({
			query: (page = 1) => `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
		}),
		searchFilms: build.query({
			query: (keyword = '') => `search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
		})
	})
})

export const {useGetFilmsQuery, useSearchFilmsQuery} = filmsApi