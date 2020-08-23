import React, { Component } from 'react'
import PropTypes from "prop-types"
import Book from "./Book"

class BooksGrid extends Component {
    static propTypes = {
        shelfs: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }

    render() {
        const {shelfs, books, onUpdateBook} = this.props
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <li key={book.id}>
                        <Book
                            shelfs={shelfs}
                            book={book}
                            onUpdateBook={onUpdateBook} />
                    </li>
                ))}
            </ol>
        );
    }
}

export default BooksGrid