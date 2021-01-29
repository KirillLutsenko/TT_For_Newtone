import PropTypes from 'prop-types';

export const productType = PropTypes.shape({
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;

export const cartItemsType = PropTypes.shape({
  item: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
});

export const cartType = PropTypes.shape({
  cartItems: cartItemsType.isRequired,
  clearCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
}).isRequired;

export const productsType = PropTypes.shape({
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(productType),
}).isRequired;
