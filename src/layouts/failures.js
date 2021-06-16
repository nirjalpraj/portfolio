import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    paper: {
        height: 500,
       
    }
}));
const Failure = () => {
    const classes = useStyles();

    return(
        <Grid conatiner>
            <Grid item xs={12} style = {{margin:'20px'}}>
                <Paper variant = 'outlined' className = {classes.paper} >
                    <Typography>
                        Under Construction
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Failure;