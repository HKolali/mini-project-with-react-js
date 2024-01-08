import React, { Component } from 'react'
import './ShoppingCart.css'
import Product from '../Product/Product'
import CartItem from '../CartItem/CartItem'



export default class ShoppingCart extends Component {

  constructor(props) {
    super(props)

    this.addToCart = this.addToCart.bind(this)
    this.removeCartItem = this.removeCartItem.bind(this)

    this.state = {
      products: [
        { id: 1, title: 'Red Grape', description: 'Juice - NetVolume: 240ml', image: './image/product/red-grape.jpg' },
        { id: 2, title: 'Pomegranate', description: 'Juice - NetVolume: 240ml', image: './image/product/pomegranate.jpg' },
        { id: 3, title: 'Banana & Apple', description: 'Juice - NetVolume: 240ml', image: './image/product/banana.jpg' },
        { id: 4, title: 'Lime', description: 'Juice - NetVolume: 240ml', image: './image/product/lima.jpg' },
        { id: 5, title: 'Aloe+Grape', description: 'Juice - NetVolume: 240ml', image: './image/product/aloe.jpg' }
      ],
      cartItems: []
    }
  }

  addToCart(product) {

    let newCartItem = {
      id: this.state.cartItems.length + 1,
      title: product.title,
      description: product.description,
      image: product.image
    }

    console.log(newCartItem);

    this.setState({
      cartItems: [...this.state.cartItems, newCartItem]
    })
  }

  removeCartItem(productId){
    let selectedItem = this.state.cartItems.findIndex(item => {
      return productId === item.id
    })

    let newShoppingCarts = [...this.state.cartItems]
    newShoppingCarts.splice(selectedItem, 1)

    this.setState({
      cartItems: newShoppingCarts
    })
  }

  render() {
    return (
      <div className='shopping-cart'>
        <div className="shopping-cart__products">
          {this.state.products.map(product => (
            <Product key={product.id} {...product} onClick={this.addToCart} />
          ))}
        </div>

        {this.state.cartItems.length > 0 && (<span className="shopping-cart__title">Shopping Cart:</span>)}
        <div className="shopping-cart__items">
          {this.state.cartItems.map(item => (
            <CartItem key={item.id} {...item} onClick={this.removeCartItem}/>
          ))}
        </div>
      </div>
    )
  }
}