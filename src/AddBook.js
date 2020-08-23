import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BooksGrid from "./BooksGrid"
import SearchBar from "./SearchBar"

class AddBook extends Component {
    static propTypes = {
        shelfs: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }

    state = {
        queryBooks: []
    }

    onQueryChange = query => {
        query ?
            BooksAPI.search(query).then(queryBooks => this.setState(() => {
                if (!(queryBooks instanceof Array))
                    return {queryBooks: []}

                for (const queryBook of queryBooks) {
                    const book = this.props.books.find(book => book.id === queryBook.id)
                    queryBook.shelf = book ? book.shelf : 'none'
                }

                return { queryBooks }
            }))
            :
            this.setState({queryBooks: []})
    }

    updateBook = (book, shelf) => {
        this.props.onUpdateBook(book, shelf)
    };

    render() {
        const { queryBooks } = this.state
        const { shelfs } = this.props

        return (
            <div className="search-books">
                <SearchBar onQueryChange={this.onQueryChange} />

                <div className="search-books-results">
                    <BooksGrid shelfs={shelfs} books={queryBooks} onUpdateBook={this.updateBook} />
                </div>
            </div>
        )
    }
}

export default AddBook