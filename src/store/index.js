import {combineReducers,createStore} from 'redux';
import {userData} from '../reducers/userData';
import {productData} from '../reducers/productData';
import {wizzard} from '../reducers/wizzard';

const rootReducer = combineReducers({
    userData,
    productData,
    wizzard
})

export default createStore(rootReducer)