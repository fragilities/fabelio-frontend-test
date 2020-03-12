import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchString } from '../store/actions/FilterActions.js';

export default function SearchInput(props) {
	const dispatch = useDispatch();

	return (
		<input
			type="text"
			className="bg-transparent w-5/12 border-b border-white text-white placeholder-white text-xl font-bold outline-none"
			placeholder="Search Furniture"
			onChange={(e) => dispatch(setSearchString(e.target.value))}
		/>
	);
}
