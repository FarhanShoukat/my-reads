import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

class SearchBar extends Component {
    static propTypes = {
        onQueryChange: PropTypes.func.isRequired,
    }

    state = {
        query: ''
    }

    onQueryChange = event => {
        this.setState({query: event.target.value})
        this.props.onQueryChange(event.target.value)
    }

    render() {
        const { query } = this.state

        return (
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="AddBook by title or author"
                        value={query}
                        onChange={this.onQueryChange}/>
                </div>
            </div>
        )
    }
}

export default SearchBar