import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {

    addProductToCart(product){
        this.props.onClick(product);
    } 

    render() {
        return (
            <div className='product'>
                <div className="product__box">
                    <img src={this.props.image} alt={this.props.title} className="product__box-image" />
                    <span className="product__box-title">{this.props.title}</span>
                    <span className="product__box-description">{this.props.description}</span>
                    <div className="product__box-btns">
                        <button className="product__box-btns-add" onClick={() => this.addProductToCart(this.props)}>Add to cart</button>
                        <button className="product__box-btns-buy">Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

