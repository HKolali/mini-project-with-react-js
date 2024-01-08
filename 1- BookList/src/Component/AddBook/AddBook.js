import React, { Component } from 'react'
import './AddBook.css'
import BookItem from '../BookItem/BookItem';

export default class AddBook extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author: '',
            year: '',
            bookList: []
        }

        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.authorChangeHandler = this.authorChangeHandler.bind(this);
        this.yearChangeHandler = this.yearChangeHandler.bind(this);
    }

    titleChangeHandler(event) {
        this.setState({
            title: event.target.value
        });
    }

    authorChangeHandler(event) {
        this.setState({
            author: event.target.value
        });
    }

    yearChangeHandler(event) {
        this.setState({
            year: event.target.value
        });
    }

    submitHandler(event) {
        event.preventDefault();
        let newBook = {
            title: this.state.title,
            author: this.state.author,
            year: this.state.year
        }

        this.setState({
            bookList: [...this.state.bookList, newBook],
            title: '',
            author: '',
            year: ''
        })
    }

    render() {
        return (
            <div className='add-book'>
                <form onSubmit={(event) => this.submitHandler(event)}>
                    <div className='add-book__item'>
                        <label className='add-book__lable' htmlFor="">Title: </label>
                        <input className='add-book__input' type="text" name="title" id="title" value={this.state.title} onChange={this.titleChangeHandler} />
                    </div>
                    <div className='add-book__item'>
                        <label className='add-book__lable' htmlFor="">Author: </label>
                        <input className='add-book__input' type="text" name="author" id="author" value={this.state.author} onChange={this.authorChangeHandler} />
                    </div>
                    <div className='add-book__item'>
                        <label className='add-book__lable' htmlFor="">Year: </label>
                        <input className='add-book__input' type="text" name="year" id="year" value={this.state.year} onChange={this.yearChangeHandler} />
                    </div>

                    <input className='add-book__submit' type="submit" value="Add Book" />
                </form>

                <img src="" alt="" className="portrate-line" />

                <div className="book-list">
                    <div className='book-list__header'>
                        <span className="book-list__header-title">Title</span>
                        <span className="book-list__header-title">Author</span>
                        <span className="book-list__header-title">Year</span>
                    </div>
                    {this.state.bookList.map(book => (
                        <BookItem {...book} />
                    ))}

                </div>
            </div>
        )
    }
}
