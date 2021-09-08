import React from 'react';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import Page from '../../components/Page/Page';
import Tetris from './Tetris/Tetris';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Dashboard"
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                >
                    <Tetris />
                </Grid>
            </Container>
        </Page>
    );
};

export default Dashboard;
