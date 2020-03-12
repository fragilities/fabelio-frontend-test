import React, { useState } from 'react';
import FilterCheckBox from './FilterCheckBox.jsx';

export default function FilterInput(props) {
	const [ showFilterItems, setShowFilterItems ] = useState(false);

	const setFilterBoxStyle = () => {
		const style = 'bg-gray-300 flex-col absolute w-full overflow-x-hidden overflow-y-auto';

		if (showFilterItems) {
			return 'flex ' + style;
		} else {
			return 'hidden ' + style;
		}
	};

	return (
		<div
			className="h-8 bg-gray-200 w-5/12 relative text-gray-500"
			onClick={() => setShowFilterItems(!showFilterItems)}
		>
			<span className="px-3 inline-block pt-1">{props.filterLabel}</span>
			<div className={setFilterBoxStyle()} style={{ top: '2rem', maxHeight: '6rem' }}>
				{props.filterData && props.filterData.length > 0 ? (
					props.filterData.map((filter) => (
						<FilterCheckBox filterType={props.filterType} id={filter} labelName={filter} key={filter} />
					))
				) : (
					<p>No furniture style</p>
				)}
			</div>
		</div>
	);
}
