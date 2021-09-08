import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    makeStyles
} from '@material-ui/core';
import Logo from './Logo';

const useStyles = makeStyles(() => ({
    root: {
        background: 'white',
    },
    header: {
        justifyContent: 'center'
    }
}));

const TopBar = () => {
    const classes = useStyles();

    return (
        <AppBar
            className={classes.root}
            elevation={0}
        >
            <Toolbar
                className={classes.header}
            >
                <RouterLink to="/">
                    <Logo />
                </RouterLink>
            </Toolbar>
        </AppBar>
    );
}

TopBar.defaultProps = {
    onMobileNavOpen: null
}

export default TopBar;
