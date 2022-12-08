import { combineReducers } from "redux";
import {Reducers, WishReducer,CartReducers, LoginReducer, OrderReducer, RecentlyViewedReducer, QuantityReducer} from "./Reducers";

const rootReducer = combineReducers({
    Reducers,
    WishReducer,
    CartReducers,
    LoginReducer,
    OrderReducer,
    RecentlyViewedReducer,
    QuantityReducer
})
export default rootReducer