const initialState = {
    styles: null,
    products: null,
    filteredProducts: null
};

export default function FurnitureReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_STYLES':
            return {
                ...state,
                styles: action.payload.styles
            };
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload.products
            };
        case 'SET_FILTEREDPRODUCTS':
            return {
                ...state,
                filteredProducts: action.payload.filteredProducts
            };
        default:
            return state;
    }
}
