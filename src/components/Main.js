import React, { useState } from "react";
import {
  Avatar,
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import OpacityIcon from "@material-ui/icons/Opacity";
import { makeStyles } from "@material-ui/core/styles";
import UserInputStep from "./Steps/UserInputStep";
import SimulatorStep from "./Steps/SimulatorStep";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Created by "}
      {" Subramanyam S S"}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#0089f5"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MainContainer() {
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

        {currentStep === 0 && <UserInputStep setCurrentStep={setCurrentStep} />}
        {currentStep === 1 && <SimulatorStep setCurrentStep={setCurrentStep} />}
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  );
}
