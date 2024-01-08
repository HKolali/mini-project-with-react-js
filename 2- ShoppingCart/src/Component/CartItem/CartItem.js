import React, { Component } from 'react'
import './CartItem.css'

export default class CartItem extends Component {
    constructor(props){
        super(props)
    }

    removeItem(){
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div className='cart-item'>
                <div className="cart-item__box">
                    <img src={this.props.image} alt={this.props.title} className="cart-item__box-image" />
                    <span className="cart-item__box-title">{this.props.title}</span>
                    <span className="cart-item__box-description">{this.props.description}</span>
                    <button className="cart-item__box-btn-remove" onClick={() => this.removeItem()}>Remove</button>
                </div>
            </div>
        )
    }
}
