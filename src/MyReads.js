import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import BooksShelf from "./BooksShelf";

class MyReads extends Component {
    static propTypes = {
        shelfs: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }

    render() {
        const { shelfs, books, onUpdateBook } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(shelfs).map(shelf => (
                            <BooksShelf
                                key={shelf}
                                shelf={shelf}
                                shelfs={shelfs}
                                books={books.filter(book => book.shelf === shelf)}
                                onUpdateBook={onUpdateBook} />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.props.history.push('/search')}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default withRouter(MyReads)