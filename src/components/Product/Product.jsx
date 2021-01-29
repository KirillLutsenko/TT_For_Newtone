import React from 'react';
import { productType } from '../../types';
import './Product.scss';

export const Product = ({ product, addToCart }) => (
  <li key={product.id}>
    <div className="list__product product">
      <p className="product__name name">
        {product.name}
      </p>

      <p className="product__price">
        {`$ ${+product.price}`}
      </p>

      <button
        type="button"
        className="product__button button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </li>
);

Product.propTypes = productType;
