export const setSearchString = (searchString) => {
	return {
		type: 'SET_SEARCHSTRING',
		payload: { searchString }
	};
};

export const setStyleFilter = (styleFilter) => {
	return {
		type: 'SET_STYLEFILTER',
		payload: { styleFilter }
	};
};

export const removeStyleFilter = (styleFilter) => {
	return {
		type: 'REMOVE_STYLEFILTER',
		payload: { styleFilter }
	};
};

export const setDeliveryTimeFilter = (deliveryTimeFilter) => {
	return {
		type: 'SET_DELIVERYTIMEFILTER',
		payload: { deliveryTimeFilter }
	};
};

export const removeDeliveryTimeFilter = (deliveryTimeFilter) => {
	return {
		type: 'REMOVE_DELIVERYTIMEFILTER',
		payload: { deliveryTimeFilter }
	};
};
