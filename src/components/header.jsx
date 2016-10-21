import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import '../scss/header.scss';

const Header = (props) => {
    return (
        <div className="header">
            <h1>YouTube Search</h1>
            <h2>A search app built with React, SCSS, and Webpack</h2>
            <FlatButton label="Default" />
        </div> 
    )
}

export default Header;