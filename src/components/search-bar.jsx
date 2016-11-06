import React from 'react';
import '../scss/search-bar.scss';

const SearchBar = ({changeTerm, term}) => {
    
    const onInputChange = t => {
        changeTerm(t);
    }

    return (
        <div className="input-group search-bar">
            <span className="input-group-addon search-icon-container" id="basic-addon1">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input 
                type="text" 
                className="form-control" 
                aria-describedby="basic-addon1"
                value={term}
                onChange={e => onInputChange(e.target.value)} />
        </div>
    )
}

export default SearchBar;

