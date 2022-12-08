import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducer";
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { WishReducer } from "./reducer/Reducers";

const persistConfig = {
    key: 'root',
    storage
}

const persistReducers = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
    persistReducers,
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);


export default store;