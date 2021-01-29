import React from 'react';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import './styles/general.scss';
import './App.scss';

const productsFromServer = [
  {
    name: 'Banana', price: '10', id: '1',
  },
  {
    name: 'Apple', price: '8', id: '2',
  },
  {
    name: 'Papaya', price: '10', id: '3',
  },
];

class App extends React.Component {
  state = {
    products: productsFromServer,
    cartItems: [],
    cartVisible: false,
  }

  addToCart = (product) => {
    const { cartItems } = this.state;
    let alreadyInCart = false;

    cartItems.forEach((cartItem) => {
      if (cartItem.id === product.id) {
        /* eslint-disable */
        cartItem.count += 1;
        alreadyInCart = true;
        cartItem.total = cartItem.count * cartItem.price;
        /* eslint-enable */
      }
    });

    if (!alreadyInCart) {
      cartItems.push({
        ...product,
        count: 1,
        total: +product.price,
      });
    }

    this.setState({ cartItems });
  }

  clearCart = () => {
    this.setState({
      cartItems: [],
    });
  }

  getCartVisible = () => {
    const { cartVisible } = this.state;

    this.setState({
      cartVisible: !(cartVisible),
    });
  }

  render() {
    const { products, cartItems } = this.state;
    const { addToCart, getCartVisible, clearCart } = this;

    return (
      <div className="app">
        <h1 className="app__title">Products List</h1>
        <div className="app__content content">
          <Products
            products={products}
            addToCart={addToCart}
          />

          <div className="app__cart-block cart-block">
            <button
              type="button"
              onClick={getCartVisible}
              className="cart-block__button"
            />

            {(this.state.cartVisible)
              ? (<Cart cartItems={cartItems} clearCart={clearCart} />)
              : <></>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
