import React from 'react';
import $ from '../vendor/jquery-ajax';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {red500, red600, red900} from 'material-ui/styles/colors';

const styles = {
    main: {
        backgroundColor: red500
    },
    iconLeft: {
        display: 'none'
    },
    btnRight: {
        label: 'Random',
        backgroundColor: red500,
        hoverColor: red600,
        rippleColor: red900
    },
    iconRight: {
        fontSize: '0.9em'
    }
}

const Header = ({getWord}) => {
        return ( 
            <AppBar
                className="header"
                style={styles.main}
                title={<span>YouTube Search</span>}
                iconStyleLeft={styles.iconLeft}
                iconElementRight={
                        <FlatButton {...styles.btnRight} onClick={ () => getWord() } icon={<FontIcon className="fa fa-random" style={styles.iconRight}></FontIcon>} />
                    }
                iconStyleRight={styles.iconRight} />
        )
}

export default Header;


