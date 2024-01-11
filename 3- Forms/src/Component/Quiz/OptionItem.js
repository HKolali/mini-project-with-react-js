import './OptionItem.css'
import React, { Component } from 'react';

class OptionItem extends Component {

    render() {
        return (
            <div className='item'>
            <span className="item-text">{this.props.textOption}</span>
        </div>
        );
    }
}

export default OptionItem;