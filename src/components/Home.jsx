import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Home = () => {

  const {state } = CartState();
  
  return (
    <div className="home">
      <Filters/>

      <div className="productContainer">
        {
          state.products.map((prod)=>{
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home