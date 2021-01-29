import React from 'react';
import { productsType } from '../../types';
import { Product } from '../Product/Product';
import './Products.scss';

export const Products = ({ addToCart, products }) => (
  <ul className="content__list list">
    {products.map(product => (
      <Product
        key={product.id}
        product={product}
        addToCart={addToCart}
      />
    ))}
  </ul>
);

Products.propTypes = productsType;
