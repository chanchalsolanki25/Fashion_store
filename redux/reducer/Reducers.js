// initial states
const initialState = {
    data: [],
    category: [],
    categoryProduct: [],
    cart: [],
    quantity: [],
    wishlist: [],
    detail: [],
    viewedProduct: [],
    search: [],
    logInUser: [],
    order: [],
    address: [],
    id: [],
}

// Reducers
export const Reducers = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'FETCH_DATA':
            return {

                ...state,
                data: payload
            }

        case 'FETCH_CATEGORY':
            return {
                ...state,
                category: payload

            }

        case 'FETCH_CATEGORY_PRODUCT':

            return {
                ...state,
                categoryProduct: payload
            }

        case 'PRODUCT_DETAIL':
            return {
                ...state,
                detail: payload
            }

        case 'REMOVE_SELECTED_PRODUCT':
            return {
                detail: []
            }

        case 'SEARCH_PRODUCT':
            return {
                ...state,
                search: payload
            }

        default:
            return state;
    }
}

export const CartReducers = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case 'ADD_CART':
            return {
                ...state,
                cart: state?.cart.concat(payload),
            }
        case 'DELETE_PRODUCT':
            const id = payload;
            const newCart = state.cart.filter((item) => item.id !== id);
            return {
                ...state,
                cart: newCart
            }

        case 'REMOVE_ALL':
            return {
                cart: []
            }

        default:
            return state;
    }
    
}

export const WishReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'ADD_WISHLIST':
            return {
                ...state,
                wishlist: state?.wishlist?.concat(payload),
                // wishlist: payload                
            }

        case 'REMOVE_WISHLIST_ITEM':
            const wishId = payload;
            const newWishList = state.wishlist.filter((item) => item.id !== wishId)
            return {
                ...state,
                wishlist: newWishList
            }

        case 'MOVE_ALL_TO_WISHLIST':
            return {
                ...state,
                wishlist: state?.wishlist.concat(payload)
            }

        default:
            return state;
    }

}

export const LoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                logInUser: [payload]
            }

        case 'CLEAR_LOGIN':
            return {
                ...state,
                logInUser: []
            }

        default:
            return state;
    }
}

export const OrderReducer = (state = initialState, { type, payload, id }) => {
    switch (type) {
        case 'MY_ORDERS':

            return {
                ...state,
                order: payload,
                id: id
            }

        case 'GET_SHIPPING_ADDRESS':
            return {
                ...state,
                address: payload
            }

        case 'CLEAR_ADDRESS':
            return {
                ...state,
                address: []
            }

        case 'CLEAR_ORDER':
            return{
                ...state,
                order: []
            }

        default:
            return state
    }
}

export const RecentlyViewedReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'RECENTLY_VIEWED':

            return {
                ...state,
                viewedProduct: state?.viewedProduct?.concat(payload)
            }

        default:
            return state;
    }

}

export const QuantityReducer = (state = initialState, { type, payload,quantity }) => {
   
    switch (type) {
        
        case 'PRODUCT_QUANTITY':              
            return {
                ...state,
                id: payload,
                quantity: quantity,
            }

            default:
            return state;
        }
    
}