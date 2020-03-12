import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStyles, setProducts, setFilteredProducts } from '../store/actions/FurnitureActions.js';
import ListCard from '../components/ListCard.jsx';
import { intersectingStyle, intersectingDeliveryTime } from '../helpers/intersecting.js';

export default function List(props) {
	const dispatch = useDispatch();
	const furnitures = useSelector((state) => state.FurnitureReducer);
	const filters = useSelector((state) => state.FilterReducer);

	const fetchAll = async () => {
		try {
			const response = await fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8');
			const { furniture_styles, products } = await response.json();

			dispatch(setStyles(furniture_styles));
			dispatch(setProducts(products));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAll();
	}, []);

	useEffect(
		() => {
			if (furnitures.products && furnitures.products.length > 0) {
				let filteredProducts = [ ...furnitures.products ];

				if (filters.searchString && filters.searchString.length > 0) {
					filteredProducts = filteredProducts.filter((product) => {
						return new RegExp(filters.searchString, 'i').test(product.name);
					});
				}

				if (filters.styleFilter && filters.styleFilter.length > 0) {
					filteredProducts = filteredProducts.filter((product) => {
						return intersectingStyle(product.furniture_style, filters.styleFilter);
					});
				}

				if (filters.deliveryTimeFilter && filters.deliveryTimeFilter.length > 0) {
					filteredProducts = filteredProducts.filter((product) => {
						return intersectingDeliveryTime(product.delivery_time, filters.deliveryTimeFilter);
					});
				}

				dispatch(setFilteredProducts(filteredProducts));
			}
		},
		[ filters ]
	);

	const renderList = () => {
		if (!furnitures.filteredProducts || furnitures.filteredProducts.length < 1) {
			return furnitures.products && furnitures.products.length > 0 ? (
				furnitures.products.map((product) => <ListCard product={product} key={product.name} />)
			) : (
				<p>No products</p>
			);
		} else {
			return furnitures.filteredProducts && furnitures.filteredProducts.length > 0 ? (
				furnitures.filteredProducts.map((filteredProduct) => (
					<ListCard product={filteredProduct} key={filteredProduct.name} />
				))
			) : (
				<p>No products</p>
			);
		}
	};

	if (!furnitures.products) return <p>Loading...</p>;
	else return <div className="flex justify-evenly overflow-y-visible flex-wrap py-4">{renderList()}</div>;
}
