import React, { useEffect } from 'react';
import {
	setStyleFilter,
	setDeliveryTimeFilter,
	removeStyleFilter,
	removeDeliveryTimeFilter
} from '../store/actions/FilterActions.js';
import { useDispatch } from 'react-redux';

export default function FilterCheckBox(props) {
	const dispatch = useDispatch();
	const isDeliveryTime = props.filterType == 'deliveryTime' ? true : false;

	let deliveryTimeLabel =
		isDeliveryTime && props.labelName.toString().includes('Lebih')
			? `${props.labelName} hari`
			: `Dalam ${props.labelName} hari`;

	const handleCheckboxChange = (e) => {
		if (props.filterType == 'style') {
			if (e.target.checked) {
				dispatch(setStyleFilter(e.target.id));
			} else {
				dispatch(removeStyleFilter(e.target.id));
			}
		} else if (props.filterType == 'deliveryTime') {
			if (e.target.checked) {
				dispatch(setDeliveryTimeFilter(e.target.id));
			} else {
				dispatch(removeDeliveryTimeFilter(e.target.id));
			}
		}
	};

	return (
		<div className="flex justify-between items-center px-3 py-1 text-gray-700">
			<label htmlFor={props.id}>
				{/* {isDeliveryTime ? 'Dalam ' : ''} {props.labelName} {isDeliveryTime ? 'hari' : ''} */}
				{isDeliveryTime ? deliveryTimeLabel : props.labelName}
			</label>
			<input type="checkbox" id={props.id} onChange={handleCheckboxChange} />
		</div>
	);
}
