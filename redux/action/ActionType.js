import axios from "axios"

// Fetching all products
export const fetchData = () => {

    return async (disptach) => {
        const response = await axios('https://dummyjson.com/products');
        disptach({ type: 'FETCH_DATA', payload: response.data.products });
    }
}

// Fetching products category only
export const fetchCategory = () => {
    return async (dispatch) => {
        const response = await axios('https://dummyjson.com/products/categories');
        dispatch({ type: 'FETCH_CATEGORY', payload: response.data });
    }
}

// Fetching products by categorywised
export const fetchCategoryProduct = (category) => {

    return async (dispatch) => {
        const response = await axios(`https://dummyjson.com/products/category/${category}`)
        dispatch({ type: 'FETCH_CATEGORY_PRODUCT', payload: response.data.products });
    }
}

// product detail code
export const productDetail = (id) => {

    return async (dispatch) => {
        const response = await axios(`https://dummyjson.com/products/${id}`)
        dispatch({ type: 'PRODUCT_DETAIL', payload: response.data });
    }
}

// Remove previous selected product from detail page
export const removeSelectedProduct = () => {
    return {
        type: 'REMOVE_SELECTED_PRODUCT'
    }
}

// search product 
export const searchProduct = (keyword) => {
    return async (dispatch) => {
        const response = await axios(`https://dummyjson.com/products/search?q=${keyword}`);
        dispatch({ type: 'SEARCH_PRODUCT', payload: response.data.products });

    }
}

//Add product to the cart 
export const addCart = (item) => {

    return async (dispatch) => {
        const response = await axios.post('https://dummyjson.com/carts/add', {

            userId: item.id,
            products: [
                {
                    id: item.id,
                    quantity: 1,
                },
            ]
        })
        dispatch({ type: 'ADD_CART', payload: item });
    }
}

export const productQuantuty = (id, qty) => {

    return {
        type: 'PRODUCT_QUANTITY',
        payload: id,
        quantity: qty,
    }
}

// Remove single product from the cart
export const removeProduct = (removedId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: removedId
    }
}

// Remove all products from the cart
export const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    }
}

// Add product to Wishlist

export const addWishlist = (item) => {

    return {
        type: 'ADD_WISHLIST',
        payload: item
    }

}

// Remove individual item from wishlist
export const removeWishListItem = (id) => {

    return {
        type: 'REMOVE_WISHLIST_ITEM',
        payload: id
    }
}

// Move all product into wishlist from the cart

export const moveAllToWishlist = (all) => {
    return {
        type: 'MOVE_ALL_TO_WISHLIST',
        payload: all
    }
}

// User Login Data
export const logIn = (user) => {

    return async (dispatch) => {
        await axios.post('https://dummyjson.com/auth/login', {

            username: user.username,
            password: user.password,

        }).then((res) => {

            dispatch({ type: 'LOGIN', payload: res.data })
        })


    }
}

// Loged out user data
export const clearLogin = () => {
    return {
        type: 'CLEAR_LOGIN',
    }
}

// Clear shipping address
export const clearAddress = () => {
    return {
        type: 'CLEAR_ADDRESS'
    }
}

// Clear Ordered Data
export const clearOrder = () => {
    return {
        type: 'CLEAR_ORDER'
    }
}

// Ordered data
export const yourOrders = (orders, uniqueid) => {

    return {
        type: 'MY_ORDERS',
        payload: orders,
        id: uniqueid
    }
}

// Get user's shipping address
export const getShippingAddress = (address) => {

    return {
        type: 'GET_SHIPPING_ADDRESS',
        payload: address
    }
}

// Get recently viewed data
export const recentlyViewed = (product) => {

    return {
        type: 'RECENTLY_VIEWED',
        payload: product
    }

}




