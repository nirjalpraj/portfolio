import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="home" variant="extended">
        Home
      </Fab>
      <Fab color="secondary" aria-label="failure"  variant="extended">
        Failures
      </Fab>
      <Fab color="primary" variant="extended" aria-label = "projects" variant="extended">
        Projects
      </Fab>
      <Fab color="secondary" aria-label="Contact" variant = "extended">
        Contact 
      </Fab>
    </div>
  );
}

export default Navigation;


