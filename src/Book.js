import React, { Component } from 'react'
import PropTypes from "prop-types"

class Book extends Component {
    static propTypes = {
        shelfs: PropTypes.object.isRequired,
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }

    render() {
        const {shelfs, book, onUpdateBook} = this.props
        const backgroundImage = book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : ''
        return (
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{ width: 128, height: 193, backgroundImage }} />
                    <div className='book-shelf-changer'>
                        <select value={book.shelf} onChange={event => onUpdateBook(book, event.target.value)}>
                            <option key='move' value='move' disabled>Move to...</option>
                            {Object.keys(shelfs).map(shelf => (
                                <option
                                    key={shelf}
                                    value={shelf}>
                                        {shelfs[shelf]}
                                </option>
                            ))}
                            <option key='none' value='none'>None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default Book