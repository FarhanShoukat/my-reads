import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyReads from "./MyReads"
import AddBook from "./AddBook"
import './App.css'

const shelfs = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
}

class BooksApp extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}))
    }

    updateBook = (bookToUpdate, shelf) =>
        BooksAPI.update(bookToUpdate, shelf).then(() =>
            this.setState(prevState => {
                let books = prevState.books
                if (shelf === 'none')
                    books = books.filter(book => book.id !==bookToUpdate.id)
                else {
                    if (!bookToUpdate.shelf || bookToUpdate.shelf === 'none') {
                        books = [...books, bookToUpdate]
                    }
                    bookToUpdate.shelf = shelf
                }

                return { books }
            })
        )

    render() {
        const { books } = this.state
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <MyReads
                        shelfs={shelfs}
                        books={books}
                        onUpdateBook={this.updateBook} />
                )}/>

                <Route path='/search' render={() => (
                    <AddBook
                        shelfs={shelfs}
                        books={books}
                        onUpdateBook={this.updateBook} />
                )}/>
            </div>
        )
    }
}

export default BooksApp
