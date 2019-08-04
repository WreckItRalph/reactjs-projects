import {Constants} from '../Constants/constants';

// on User Login
export function onLogin(data){
    return {
        type:Constants.USER_LOGIN,
        data
    }
}

export function onLogout(){
    return {
        type : Constants.USER_LOGOUT
    }
}

/* export function onViewCart(){
    return {
        type: Constants.VIEW_CART
    }
} */

export function addToCart(data){
    return {
        type: Constants.ADD_TO_CART,
        data
    }
}

export function removeItem(data){
    return {
        type: Constants.REMOVE_ITEM,
        data
    }
}

export function placeOrder(){
    return {
        type: Constants.PLACE_ORDER
    }
}