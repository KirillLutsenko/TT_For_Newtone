import React from 'react';
import { cartItemsType } from '../../types';
import './CartItem.scss';

export const CartItem = ({ id, name, total }) => (
  <li key={id} className="cart-list__cart-item cart-item">
    <p className="cart-list__cart-product-name">
      {`${name}: $ ${+total}`}
    </p>
  </li>
);

CartItem.propTypes = cartItemsType;
