import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from "./BooksGrid";

class BooksShelf extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        shelfs: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }

    render() {
        const { shelf, shelfs, books, onUpdateBook } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfs[shelf]}</h2>
                <div className="bookshelf-books">
                    <BooksGrid
                        shelf={shelf}
                        shelfs={shelfs}
                        books={books}
                        onUpdateBook={onUpdateBook} />
                </div>
            </div>
        )
    }
}

export default BooksShelf