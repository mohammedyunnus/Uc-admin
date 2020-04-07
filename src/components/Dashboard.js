import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography, makeStyles } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "grid",
  },

  paper: {
    // width: "18rem",
    // minHeight: "11rem",
    height: "100%",
  },

  buttonInfo: {
    // justifyContent:"center",
    // alignItems:"flex-end",
    direction: "row",
    justifyContent: "center",
    // alignItems: "flex-end",
    textAlign: "center",
    padding:"0.5rem",

    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  num: {
    paddingLeft: "1rem",
    paddingTop: "0.5rem",
  },
  text: {
    padding: "0.5em",
  },
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

      <Grid container spacing={2}>
        <Grid item style={{ marginTop: 50 }} xs>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#00C0EF" }}
          >
            <Grid item>
              <Typography className={classes.num} variant="h4">
                111
              </Typography>
            </Grid>
            <Grid item  style={{ marginTop: 20 }}>
              <Typography variant="subtitle1">No of schools</Typography>
            </Grid>
            <Grid
              container
              item
              className={classes.buttonInfo}
              style={{ backgroundColor: "#00A3CB" ,marginTop: 24 }}
                  >
              <ButtonBase fullWidth={true} >
                <Typography varient="button" display="block">
                  More Info
                  <DoubleArrowRoundedIcon style={{ fontSize: "small" }} />
                </Typography>
              </ButtonBase>
            </Grid>
          </Paper>
        </Grid>

        <Grid item style={{ marginTop: 50 }} xs>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#00A65A" }}
          >
            <Grid item xs container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.num} variant="h4">
                    36
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.text}>
                <Typography variant="subtitle1">Approved:36</Typography>
                <Typography variant="subtitle1">Pending : 102</Typography>
                <Typography variant="subtitle1">Rejected : 1</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>No. of Trial User</Typography>
            </Grid>
            <Grid
              item
              className={classes.buttonInfo}
              style={{ backgroundColor: "#008D4D" }}
            >
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
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#F39C12" }}
          >
            <Grid item>
              <Typography className={classes.num} variant="h4">
                4737
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: 15 }}>
              <Typography variant="subtitle1">Total No. of Students</Typography>
            </Grid>
            <Grid
              item
              className={classes.buttonInfo}
              style={{ backgroundColor: "#CF850F" ,marginTop: "2.1em" }}
            >
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
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#DD4B39" }}
          >
            <Grid item xs container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.num} variant="h4">
                    65
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.text}>
                <Typography variant="subtitle1">Current Month : 44</Typography>
                <Typography variant="subtitle1">Previous Month : 44</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>Sms Count</Typography>
            </Grid>
            <Grid
              item
              className={classes.buttonInfo}
              style={{ backgroundColor: "#BC4031" , marginTop: "2em"}}
            >
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
<div>
      <Grid xs container direction="column" >
        <Paper className={classes.paper} style={{backgroundColor:"blue"}}>
          
          <Grid item>
       
          </Grid>
        </Paper>
      </Grid>
      </div>
    </div>
  );
}

export default Dashboard;
