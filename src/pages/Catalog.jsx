import React, {useEffect, useState} from 'react';
import Filter from "../components/Filter";
import {motion} from "framer-motion";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Movie from "../components/Movie";
import {useGetFilmsQuery} from "../redux";


const Catalog = () => {
	const [page, setPage] = useState(1)
	const {data = [], isLoading} = useGetFilmsQuery(page)
	const pageChangeHandler = (event, value) => {
		setPage(value)
	}
	let totalPages = data.total_pages
	//API restriction only 500 pages
	if (totalPages > 500) totalPages = 500

	let movies = data.results

	return (
		<>
			<section className="section--padding catalog">
				<div className="container">
					{isLoading
						?
						<CircularProgress />
						:
						<>
							<motion.div layout className="movies">
								{movies.map(movie => {
									return <Movie key={movie.id} movie={movie}/>
								})}
							</motion.div>
							<Stack spacing={2}>
								<Pagination className="pagination" count={totalPages} size="large" onChange={pageChangeHandler}/>
							</Stack>
						</>
					}
				</div>
			</section>
		</>
	)
};

export default Catalog;