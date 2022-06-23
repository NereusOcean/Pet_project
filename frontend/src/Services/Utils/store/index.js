import {createStore, combineReducers} from "redux";
import { sizeReducer } from './reducers/sizeReducer';
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    sizeReducer,
});


export const store = createStore(rootReducer, composeWithDevTools());