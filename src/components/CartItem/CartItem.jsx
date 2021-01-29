import React from 'react';
import { cartItemsType } from '../../types';
import './CartItem.scss';

export const CartItem = ({ item, deleteFromCart, addToCart }) => (
  <li key={item.id} className="cart-list__cart-item cart-item">
    <p className="cart-item__cart-product-name">
      {`${item.name}: ${item.count} kg -  $ ${+item.total}`}
    </p>
    <button
      type="button"
      className="cart-item__button--add"
      onClick={() => addToCart(item)}
    >
      +
    </button>
    <button
      type="button"
      className="cart-item__button--delete"
      onClick={() => deleteFromCart(item)}
    >
      -
    </button>
  </li>
);

CartItem.propTypes = cartItemsType;
