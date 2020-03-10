import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStyles, setProducts } from '../store/actions/FurnitureActions.js';
import ListCard from '../components/ListCard.jsx';

export default function List(props) {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.FurnitureReducer.products);
    const filteredProducts = useSelector(
        (state) => state.FurnitureReducer.filteredProducts
    );

    const fetchAll = async () => {
        try {
            const response = await fetch(
                'http://www.mocky.io/v2/5c9105cb330000112b649af8'
            );

            const { furniture_styles, products } = await response.json();

            dispatch(setStyles(furniture_styles));
            dispatch(setProducts(products));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAll();
    }, [filteredProducts]);

    const renderList = () => {
        if (!filteredProducts) {
            return products && products.length > 0 ? (
                products.map((product) => (
                    <ListCard product={product} key={product.name} />
                ))
            ) : (
                <p>No products</p>
            );
        } else {
            return filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((filteredProduct) => (
                    <ListCard
                        product={filteredProduct}
                        key={filteredProduct.name}
                    />
                ))
            ) : (
                <p>No products</p>
            );
        }
    };

    if (!products) return <p>Loading...</p>;
    else
        return (
            <div className="flex justify-evenly overflow-y-visible flex-wrap py-4">
                {renderList()}
            </div>
        );
}
