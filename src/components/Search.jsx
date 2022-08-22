import React, {useState} from 'react';
import {useDebounce} from "../hooks/debounce";
import {useSearchFilmsQuery} from "../redux";
import Modal from "@mui/material/Modal";

const Search = () => {
	const [keyword, setKeyword] = useState('')
	const debounced = useDebounce(keyword, 1000)

	// const {data, isLoading} = useSearchFilmsQuery(debounced, {
	// 	skip: debounced.length < 3,
	// })

	console.log(debounced)
	return (
		<></>
	);
};

export default Search;