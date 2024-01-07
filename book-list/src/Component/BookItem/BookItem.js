import React from 'react'
import './BookItem.css'

export default function BookItem({ title, author, year }) {
    return (
        <div className="book-item">
            <span className="book-item__value">{title}</span>
            <span className="book-item__value">{author}</span>
            <span className="book-item__value">{year}</span>
        </div>
    )
}
