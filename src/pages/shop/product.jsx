import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import "./shop.css"

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart }= useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  console.log(cartItems)
  return (
    <div className= "product">
        <img src={productImage} alt='img of a product' />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>₹{price}</p>
        </div>
        <button className='addtoCartbttn' onClick={()=> addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
        <button className='removefromCartbttn' onClick={()=> removeFromCart(id)}>
            Remove From Cart 
        </button>
    </div>
  );

  
}
