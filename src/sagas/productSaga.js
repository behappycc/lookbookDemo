import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import { ApiGetAllProducts } from '../services/products'

export function* worker() {
  const response = yield call(ApiGetAllProducts);
  yield put({
    type: types.GET_ALL_PRODUCTS_DONE,
    product_list: response
  })
}

export function*  watchGetPic() {
  yield takeLatest(types.GET_ALL_PRODUCTS, worker);
}