import React, {createContext ,useContext,useReducer , useEffect} from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer} from './Reducer.js';

const Cart = createContext();
faker.seed(99);
const Context = ({children}) => {

    const products = [...Array(20)].map(()=>({
        id: faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:  faker.helpers.arrayElement([1,2,3,4,5]),

    })
    );

    const [state, dispatch] = useReducer(cartReducer , {
        products:products,
        byStock:true,
        byFastDelivery :true,
        byRating: true,
        sort: 'ASC',
        cart:[],
    });

    useEffect(() => {
        console.log("state is in useEffect : "  ,state);
    
    }, [state])
      
    

  return (
    <Cart.Provider value={{state , dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context


export const CartState=()=>{
    return useContext(Cart);
}