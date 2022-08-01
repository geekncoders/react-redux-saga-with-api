import { put, takeEvery } from 'redux-saga/effects'
import { CART_ITEMS } from './const';

function* getCartItems() {
    let data = yield fetch('http://festafaya.com/api/cart/1');
    data = yield data.json();
    console.log(data);
    yield put({ type: 'SET_CART_ITEMS', data })
}


function* cartSaga() {
    yield takeEvery(CART_ITEMS, getCartItems)    
}

export default cartSaga;