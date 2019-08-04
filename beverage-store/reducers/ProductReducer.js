import { Constants } from '../Constants/constants';

import $ from 'jquery';

var ProductReducer = (state = {
    beverages: [
        {
            "name": "Beer",
            "imageSrc": "../public/images/beer.jpg",
            "description": "Some random description for beer goes here.",

            "categories": [{
                    quantity: "3 pack",
                    price: 4.99
                },
                {
                    quantity: "6 pack",
                    price: 8.99
            }]
        },
        {
            "name": "Wine",
            "imageSrc": "../public/images/wine.jpg",
            "description": "Some random description for wine goes here.",

            "categories": [{
                quantity: "3 pack",
                price: 14.99
            },
            {
                quantity: "6 pack",
                price: 28.99
        }]
        },
        {
            "name": "Whiskey",
            "imageSrc": "../public/images/whiskey.jpg",
            "description": "Some random description for whiskey goes here.",
            "categories": [{
                quantity: "3 pack",
                price: 6.99
            },
            {
                quantity: "6 pack",
                price: 12.99
        }]
        }
    ]
}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default ProductReducer;