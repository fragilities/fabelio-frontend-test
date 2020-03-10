export const setStyles = (styles) => {
    return {
        type: 'SET_STYLES',
        payload: { styles }
    };
};

export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: { products }
    };
};

export const setFilteredProducts = (filteredProducts) => {
    return {
        type: 'SET_FILTEREDPRODUCTS',
        payload: { filteredProducts }
    };
};
