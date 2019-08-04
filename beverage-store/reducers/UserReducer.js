import { Constants } from '../Constants/constants';
var UserReducer = (state = {
    username: '',
    cart: [],
    displaySettings: {
        showContactButton: true,
        showHomeButton: false,
        showCartButton: false,
        showLogoutButton: false

    }

}, action) => {
    switch (action.type) {
        case Constants.USER_LOGIN:

            if (action.data.username == 'username' && action.data.password == 'password') {
                return Object.assign({}, state, {
                    username: action.data.username,
                    displaySettings: {
                        showContactButton: false,
                        showHomeButton: true,
                        showCartButton: true,
                        showLogoutButton: true
                    }
                })
            } else {
                alert('invalid credentials');
                return state;
            }

        case Constants.ADD_TO_CART:
            var addedFlag = false;
            var cart = state.cart.map(elem => {
                if (elem.category == action.data.category && elem.name == action.data.name) {
                    elem.quantity += +action.data.quantity;
                    addedFlag = true;
                }
                return elem;
            });
            if (!addedFlag) {
                cart.push({
                    name: action.data.name,
                    category: action.data.category,
                    quantity: +action.data.quantity,
                    imageSrc: action.data.imageSrc,
                    totalPrice: action.data.totalPrice
                });
            }

            return Object.assign({}, state, {
                cart: [...cart]
            });

        case Constants.REMOVE_ITEM:
            var cart = state.cart.filter(elem => !(elem.category == action.data.category && elem.name == action.data.name));
            return Object.assign({}, state, {
                cart: [...cart],
                displaySettings: {
                    showContactButton: false,
                    showHomeButton: true,
                    showCartButton: false,
                    showLogoutButton: true
                }
            });
        case Constants.PLACE_ORDER:
            return Object.assign({}, state, {
                cart: [],
                displaySettings: {
                    showContactButton: false,
                    showHomeButton: true,
                    showCartButton: false,
                    showLogoutButton: true
                }
            });

        case Constants.USER_LOGOUT:
            return Object.assign({}, state, {
                username: '',
                cart: [],
                displaySettings: {
                    showContactButton: true,
                    showHomeButton: false,
                    showCartButton: false,
                    showLogoutButton: false
            
                }
            });
        default:
            return state;
    }
};

export default UserReducer;