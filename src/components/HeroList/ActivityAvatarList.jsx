import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import './ActivityAvatarList.css';

export default function ActivityAvatarList(props) {

    return (
        <Grid item>
            <List dense={false}>
                {props.objectives.map((objective, i) => (
                <>
                    <ListItem className="ListItem" >
                        <ListItemAvatar>
                            <Avatar>
                                {objective.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={objective.title}
                            secondary={objective.description}
                        />
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />
                    </>
                ))}
            </List>
        </Grid>
    );
}
