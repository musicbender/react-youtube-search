import React, { Component } from 'react';
import '../scss/search-bar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={e => this.onInputChange(e.target.value)} />
            </div> 
        )
    }
}

export default SearchBar;