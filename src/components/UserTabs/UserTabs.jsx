import React from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs(props) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.setCurrentTab(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={props.currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="My account" />
            </Tabs>
        </Paper>
    );
}