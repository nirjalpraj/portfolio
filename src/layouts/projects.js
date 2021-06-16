import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import construction from '../assets/images/construction.png';

const useStyles = makeStyles((theme) =>
 ({
    paper: {
        height: 500,
    },
    image: {
        height: 300,
        width: 300,
    }

}));

const Project = () => {
    const classes = useStyles();

    return(
         <Grid conatiner>
            <Grid item xs={12} style = {{margin:'20px'}}>
                <Paper variant = 'outlined' className = {classes.paper} >
                    <img style={{marginTop:'100px'}} className = {classes.image} src={construction} alt="Underconstruction"/>
                    <Typography>
                        Coming Soon
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Project;