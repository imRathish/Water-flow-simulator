import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import OpacityIcon from '@material-ui/icons/Opacity';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Step1 from './Step1';
import Step2 from './Step2';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Created by '}
      <Link color="inherit" href="https://material-ui.com/">
        
      </Link>{' Subramanyam S S'}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor: "blue"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MainContainer(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <OpacityIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
          Waterflow Simulator
        </Typography>
        <br></br>
        
        {currentStep===0 && <form className={classes.form} noValidate>
        <Step1 {...props} setCurrentStep={setCurrentStep}/>
       
        </form>} 
        {currentStep===1&&
            <Step2 {...props} setCurrentStep={setCurrentStep}/>
        }
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}