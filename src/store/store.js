import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initState = {
    arrPosition: [
        'Amerikano',
        'Cappucino',
        'Latte'
    ],
    price: [
        100,
        130,
        160
    ],
    totalPrice: null
}

const store = createStore(
    rootReducer,
    initState)

export default store;