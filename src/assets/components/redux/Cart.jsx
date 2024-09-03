import React from 'react';
import { useStateValue } from '../contextApi/StateProvider';
import Header from '../FirstDiv/Header';
import './Cart.css'
import { getBasketTotal } from '../contextApi/reducer'
import Footer from '../FirstDiv/Footer';

function Cart() {
  const [{basket}, dispatch] = useStateValue()

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };
 
  

  return (
    <div className='cart'>
      <Header />
      <div className="cart__cont">
        <h2>Your Shopping Cart</h2>
        <div className="cart__container">
          {Array.isArray(basket) && basket.length > 0 ? (
            <ul className='cart__items'>
              {basket.map((item, index) => (
                <li key={index} className='cart__item'>
                  <div className="cart__itemCont">
                    <img src={item.cover} alt="cover image" className='cart__image' />
                    <div className="cart__infoCont">
                      <div className="cart__info">
                        <h3 className='cart__name'>{item.name}</h3>
                        <p className='cart__platforms'>Platforms: {item.platforms}</p>
                        <button className="cart__remove" onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
                      </div>
                      <span className="cart__price">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="cart__total">
            <div className="cart__totalCont">
              <div className="cart__estTotalcont">
                <span className="cart__estTotal">Estimated Total</span><span className="cart__estTotal2">${getBasketTotal(basket)}</span>
              </div>
              <span className="cart__tax">
                Sales tax will be calculated during checkout where applicable
              </span>
              <span className="cart__signIn">Sign in to Purchase</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Cart;