import { combineReducers, legacy_createStore } from "redux";
import { routes, sections, CartProducts, SearchData } from "./Reducer";
const reducers = combineReducers({
    routes: routes,
    sections: sections,
    CartProducts: CartProducts,
    SearchData: SearchData,
})
const store = legacy_createStore(reducers);
export default store;