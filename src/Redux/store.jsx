import { combineReducers, legacy_createStore } from "redux";
import { routes, MainData, CartProducts } from "./Reducer";
const reducers = combineReducers({
    routes: routes,
    MainData: MainData,
    CartProducts: CartProducts,
})
const store = legacy_createStore(reducers);
export default store;