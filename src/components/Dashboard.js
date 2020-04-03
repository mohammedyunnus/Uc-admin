import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography, makeStyles } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  paper: {
    backgroundColor: "#00C0EF",

    width: "17rem"
  },
  paper1: {
    backgroundColor: "#00A65A",

    width: "17rem"
  },
  paper2: {
    backgroundColor: "#F39C12",

    width: "17rem"
  },
  paper3: {
    backgroundColor: "#DD4B39",

    width: "17rem"
  },
  buttonInfo: {
    textAlign: "center",
    padding: 5,
    backgroundColor: "#00A3CB",
    marginTop: 20,
    opacity:0.7,
    "&:hover": {
       opacity:1,
      },
  },
  buttonInfo1: {
    textAlign: "center",
    padding: 5,
    backgroundColor: "#008D4D",
opacity:0.7,
    "&:hover": {
       opacity:1,
      },
   
    marginTop: 20
  },
  num:{
      padding: "1rem"
  }
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Typography variant="h5">Dashboard</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item style={{ marginTop: 50 }} xs>
          <Paper className={classes.paper}>
            <Grid item>
              <Typography  className={classes.num}variant="subtitle1">111</Typography>
            </Grid>
            <Grid item style={{ marginTop: 15 }}>
              <Typography variant="subtitle1">No of schools</Typography>
            </Grid>
            <Grid item className={classes.buttonInfo}>
              <ButtonBase>
                <Typography varient="button" display="block">
                  More Info
                  <DoubleArrowRoundedIcon style={{ fontSize: "small" }} />
                </Typography>
              </ButtonBase>
            </Grid>
          </Paper>
        </Grid>

        <Grid item style={{ marginTop: 50 }} xs>
          <Paper className={classes.paper1}>
            <Grid item>
              <Typography className={classes.num} variant="subtitle1">36</Typography>
            </Grid>
            
            <Grid item  alignContent="flex-end">
              <Typography variant="subtitle1">Approved:36</Typography>
            </Grid>
            <Grid item  alignContent="flex-end">
              <Typography variant="subtitle1">No of schools</Typography>
            </Grid>
            <Grid item  alignContent="flex-end">
              <Typography variant="subtitle1">No of schools</Typography>
            </Grid>
        
            <Grid item className={classes.buttonInfo1}>
              <ButtonBase>
                <Typography varient="button" display="block">
                  More Info
                  <DoubleArrowRoundedIcon style={{ fontSize: "small" }} />
                </Typography>
              </ButtonBase>
            </Grid>
          </Paper>
        </Grid>

        <Grid item style={{ marginTop: 50 }} xs>
          <Paper className={classes.paper2}>
            <Grid item>
              <Typography className={classes.num} variant="subtitle1">111</Typography>
            </Grid>
            <Grid item style={{ marginTop: 15 }}>
              <Typography variant="subtitle1">No of schools</Typography>
            </Grid>
            <Grid item className={classes.buttonInfo} style={{backgroundColor:"#CF850F"}}>
              <ButtonBase>
                <Typography varient="button" display="block">
                  More Info
                  <DoubleArrowRoundedIcon style={{ fontSize: "small" }} />
                </Typography>
              </ButtonBase>
            </Grid>
          </Paper>
        </Grid>

        <Grid item style={{ marginTop: 50 }} xs>
          <Paper className={classes.paper3}>
            <Grid item>
              <Typography  className={classes.num} variant="subtitle1">47</Typography>
            </Grid>
            <Grid item style={{ marginTop: 15 }}>
              <Typography variant="subtitle1">No of schools</Typography>
            </Grid>
            <Grid item className={classes.buttonInfo} style={{backgroundColor:"#BC4031"}}>
              <ButtonBase>
                <Typography varient="button" display="block">
                  More Info
                  <DoubleArrowRoundedIcon style={{ fontSize: "small" }} />
                </Typography>
              </ButtonBase>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
