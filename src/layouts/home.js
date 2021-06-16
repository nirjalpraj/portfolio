import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 500,
    },
    image: {
        height: 300,
        width: 300,
    }

}));

const Home = () => {
    const classes = useStyles();
    return(
         <Grid conatiner>
            <Grid item xs={12} style = {{margin:'20px'}}>
                <Paper variant = 'outlined' className = {classes.paper} >
                    <Typography align = 'center' color = 'secondary' variant = 'h4' style = {{margin:'20px'}}>
                        This Website is Under Construction. So,
                    </Typography>
                    <iframe src="https://giphy.com/embed/xT9KVmZwJl7fnigeAg" title="hey" width="480" height="260" frameBorder="0"   class="giphy-embed" allowFullScreen></iframe>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Home;