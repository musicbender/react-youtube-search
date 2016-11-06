import React, { Component } from 'react';
import '../scss/search-bar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.randomWord !== '') {
            this.onInputChange(this.props.randomWord.Word)
        }   
    }
    
    onInputChange(term) {
        this.props.changeTerm(term);
    }

    render() {
        return (
            <div className="input-group search-bar">
                <span className="input-group-addon search-icon-container" id="basic-addon1">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-describedby="basic-addon1"
                    value={this.props.term}
                    onChange={e => this.onInputChange(e.target.value)} />
            </div>
        )
    }
}

export default SearchBar;

