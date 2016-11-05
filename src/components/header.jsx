import React, { Component } from 'react';
import $ from '../vendor/jquery-ajax';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {red500, red600, red900} from 'material-ui/styles/colors';

const styles = {
    main: {
        backgroundColor: red500
    },
    iconLeft: {
        display: 'none'
    },
    iconRight: {
        label: 'Random',
        backgroundColor: red500,
        hoverColor: red600,
        rippleColor: red900
    }
}

class Header extends Component {
    
    render() {
        return ( 
        <AppBar
            className="header"
            style={styles.main}
            title={<span>YouTube Search</span>}
            iconStyleLeft={styles.iconLeft}
            iconElementRight={<FlatButton {...styles.iconRight} onClick={ () => this.props.getWord() } />}
            iconStyleRight={styles.iconRight} />
        )
    }
}

export default Header;


