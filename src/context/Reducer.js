import React from 'react'

export const cartReducer = (state ,action) => {
  
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log("state is" , state.cart , "action :" , action.payload);
            return  {...state ,  cart : [...state.cart , {...action.payload  , qty :1}]};
    
        default:
            return state;
    }

}
