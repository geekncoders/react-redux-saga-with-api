import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST } from './const';

function* getProducts() {
    let data = yield fetch('http://festafaya.com/api/categories');
    data = yield data.json();
    console.log(data);
    yield put({ type: 'SET_PRODUCT_LIST', data })
}


function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)    
}

export default productSaga;