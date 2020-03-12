const initialState = {
	searchString: null,
	styleFilter: [],
	deliveryTimeFilter: []
};

export default function FilterReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_SEARCHSTRING':
			return {
				...state,
				searchString: action.payload.searchString
			};
		case 'SET_STYLEFILTER':
			return {
				...state,
				styleFilter: [ ...state.styleFilter, action.payload.styleFilter ]
			};
		case 'REMOVE_STYLEFILTER':
			const removeStyleIndex = state.styleFilter.indexOf(action.payload.styleFilter);
			state.styleFilter.splice(removeStyleIndex, 1);

			return {
				...state
			};
		case 'SET_DELIVERYTIMEFILTER':
			return {
				...state,
				deliveryTimeFilter: [ ...state.deliveryTimeFilter, action.payload.deliveryTimeFilter ]
			};
		case 'REMOVE_DELIVERYTIMEFILTER':
			const removeDeliveryTimeIndex = state.deliveryTimeFilter.indexOf(action.payload.deliveryTimeFilter);
			state.deliveryTimeFilter.splice(removeDeliveryTimeIndex, 1);

			return {
				...state
			};
		default:
			return state;
	}
}
