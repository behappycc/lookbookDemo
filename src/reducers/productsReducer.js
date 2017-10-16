import * as types from '../constants/actionTypes'

const initState = {
  product_list: {}
};

export default function productsReducer(state=initState, action){
  switch(action.type) {
    case types.GET_ALL_PRODUCTS:
      return state;

    case types.GET_ALL_PRODUCTS_DONE:
      return {

      };

    default:
      return state;
  }
}