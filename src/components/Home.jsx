import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Home = () => {

  const {state : {products} ,dispatch } = CartState();
  
  return (
    <div className="home">
      <Filters/>

      <div className="productContainer">
        {
          products.map((prod)=>{
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home