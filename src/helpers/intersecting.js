function intersectingStyle(array1, array2) {
	const intersection = array1.filter((item) => {
		return array2.includes(item);
	});

	if (intersection.length > 0) return true;
	else return false;
}

function intersectingDeliveryTime(deliveryTime, deliveryTimeFilter) {
	console.log({ deliveryTime, deliveryTimeFilter });

	const moreThan30Index = deliveryTimeFilter.indexOf('Lebih dari 30');

	const intersection = deliveryTimeFilter.filter((item) => {
		return item == 'Lebih dari 30' ? +deliveryTime >= +item : +deliveryTime <= +item;
	});
	// console.log({ intersection });
	// console.log({ intersection });
	console.log({ intersection });
	if (intersection.length > 0) return true;
	else return false;
}

module.exports = { intersectingStyle, intersectingDeliveryTime };
