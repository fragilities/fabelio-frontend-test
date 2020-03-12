import React from 'react';
import SearchInput from '../atoms/SearchInput.jsx';
import FilterInput from '../atoms/FilterInput.jsx';
import { useSelector } from 'react-redux';

export default function FilterBar(props) {
	const styles = useSelector((state) => state.FurnitureReducer.styles);
	const deliveryTimes = [ 7, 14, 30, 'Lebih dari 30' ];

	return (
		<div className="flex flex-col bg-blue-500 px-12 py-6">
			<div className="flex items-center pb-6">
				<SearchInput />
			</div>
			<div className="flex items-center justify-between">
				<FilterInput filterType="style" filterData={styles} filterLabel="Furniture style" />
				<FilterInput filterType="deliveryTime" filterData={deliveryTimes} filterLabel="Delivery Time" />
			</div>
		</div>
	);
}
