import React from 'react';

export default function ListCard(props) {
	const descriptionLength = props.product.description.length;
	const shortDescription =
		descriptionLength >= 114 ? props.product.description.slice(0, 114) + '...' : props.product.description;

	return (
		<div className="flex flex-col w-5/12 shadow p-4 mb-6 rounded">
			<div className="flex justify-between mb-2">
				<span className="text-gray-800 font-bold">{props.product.name}</span>
				<span className="text-gray-800">IDR {props.product.price}</span>
			</div>
			<p className="text-gray-700 mb-2">{shortDescription}</p>
			<div className="flex items-center mb-2">
				{props.product.furniture_style && props.product.furniture_style.length > 0 ? (
					props.product.furniture_style.map((furnitureStyle) => (
						<span
							key={furnitureStyle}
							className="text-xs text-gray-800 bg-blue-200 rounded-full py-1 px-2 mr-1"
						>
							{furnitureStyle}
						</span>
					))
				) : (
					<span>Furniture style is not specified</span>
				)}
			</div>
			<div className="flex justify-end">
				<span className="mr-1 text-sm text-gray-800">Delivery time:</span>
				<span className="text-sm text-gray-800">{props.product.delivery_time} day(s)</span>
			</div>
		</div>
	);
}
