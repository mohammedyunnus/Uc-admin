import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, TextField, withTheme } from "@material-ui/core";
import Background from "./Background.jpg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  button: {
    backgroundColor: "#33c92d",
    borderRadius: 50,
    padding: "0.3em",
    color: "white",
    width: "9em",
    "&:hover": {
      backgroundColor: "#009700",
    },
    textAlign: "center",
  },
  underLine: {
    "&hover": {
      backgroundColor: "#009700",
    },
  },
  textField: {
    marginTop: "1em",
  },
  message: {
    //  width:"90%",
    marginTop: "1em",
    marginRight: "2em",
    border: ` 2px solid #33c92d `,
  },
}));

export default function Register() {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [nameFocus, setNameFocus] = useState(true);

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [country, setCountry] = useState("");
  const [countryHelper, setCountryHelper] = useState("");

  const [institutionname, setInstitutionName] = useState("");
  const [institutionnameHelper, setInstitutionNameHelper] = useState("");

  const [role, setRole] = useState("");
  const [roleHelper, setRoleHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [city, setCity] = useState("");
  const [cityHelper, setCityHelper] = useState("");

  const [board, setBoard] = useState("");
  const [boardHelper, setBoardHelper] = useState("");

  const [website, setWebsite] = useState("");
  const [websiteHelper, setWebsiteHelper] = useState("");

  const [message, setMessage] = useState("");
  const [messageHelper, setMessageHelper] = useState("");

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Please enter the correct email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
         
          event.target.value
        );
        if(!valid){
          setPhoneHelper("Please enter the correct phone no");
        }else{
          setPhoneHelper("");
        }
          break;
          case"name":{
            setName(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setNameHelper("Please enter the name")
              //  setNameFocus(true)
              // name.focus(true);
            }else{
              setNameHelper("")
              //  setNameFocus(false)
              // name.focus(false);

            }
            break;
          }
          case"country":{
            setCountry(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setCountryHelper("Please enter the country name")
            }else{
              setCountryHelper("")
            }
            break;
          }
          case"institution name":{
            setInstitutionName(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setInstitutionNameHelper("Please enter the institution name")
            }else{
              setInstitutionNameHelper("")
            }
            break;
          }
          case"role":{
            setRole(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setRoleHelper("Please enter the role ")
            }else{
              setRoleHelper("")
            }
            break;
          }
          case"city":{
            setCity(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setCityHelper("Please enter the city name ")
            }else{
              setCityHelper("")
            }
            break;
          }
          case"board":{
            setBoard(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setBoardHelper("Please enter the school name ")
            }else{
              setBoardHelper("")
            }
            break;
          }
          case"website":{
            setWebsite(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setWebsiteHelper("Please enter the website name ")
            }else{
              setWebsiteHelper("")
            }
            break;
          }
          case"messages":{
            setMessage(event.target.value);
            // valid=(event.target.value < 1).test(event.target.value)
            if(!event.target.value){
              setMessageHelper("Please fill the message ")
            }else{
              setMessageHelper("")
            }
            break;
          }
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        lg={4}
      >
        <Grid item>
          <Typography varient="h1">Register</Typography>
        </Grid>
       <form>
        <Grid item container style={{ maxWidth: "25rem" }}>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={onChange}
              InputProps={{ classes: { underline: classes.underLine } }}
              color="secondary"
              variant="filled"
              className={classes.textField}
               required
              error={nameHelper.length !==0}
              
              helperText={nameHelper}
            />
          </Grid>
          <Grid item>
            <TextField
            required
              label="Phone no"
              id="phone"
              type="number"
              value={phone}
              onChange={onChange}
              InputProps={{ classes: { underline: classes.underLine } }}
              color="secondary"
              variant="filled"
              className={classes.textField}
              error={phoneHelper.length !==0}
            helperText={phoneHelper}
            />
          </Grid>
          <Grid item>
            <TextField
            required
              label="Country"
              id="country"
              value={country}
              onChange={onChange}
              color="secondary"
              variant="filled"
              className={classes.textField}
              error={countryHelper.length !==0}
              helperText={countryHelper}
                
          
            />
          </Grid>
          <Grid item>
            <TextField
            required
              className={classes.textField}
              label="Institution Name"
              id="institution name"
              value={institutionname}
              onChange={onChange}
              color="secondary"
              variant="filled"
              error={institutionnameHelper.length !==0}
              helperText={institutionnameHelper}
            />
          </Grid>
          <Grid item>
            <TextField
            required
              color="secondary"
              variant="filled"
              label="Designation"
              id="role"
              value={role}
              onChange={onChange}
              className={classes.textField}
              error={roleHelper.length !==0}
              helperText={roleHelper}
            />
          </Grid>
          <Grid item>
            <TextField
required
label="Official Email"
              id="email"
              color="secondary"
              variant="filled"
              value={email}
              onChange={onChange}
              className={classes.textField}
              fullWidth
              error={emailHelper.length !==0}
              helperText={emailHelper}
            />
          </Grid>
          <Grid item>
            <TextField
              label="City"
              required
              id="city"
              color="secondary"
              className={classes.textField}
              //  select
              variant="filled"
              value={city}
              onChange={onChange}
              fullWidth
              error={cityHelper.length !==0}
              helperText={cityHelper}
            />
          </Grid>
          <Grid item>
            <TextField
            required
              label="School Board"
              id="board"
              value={board}
              color="secondary"
              className={classes.textField}
              variant="filled"
              onChange={onChange}
              error={boardHelper.length !==0}
              helperText={boardHelper}
            />
          </Grid>
          <Grid item>
            <TextField
            required
              label="Institution Website"
              id="website"
              value={website}
              color="secondary"
              variant="filled"
              onChange={onChange}
              className={classes.textField}
              error={websiteHelper.length !==0}
              helperText={websiteHelper}
            />
          </Grid>
        </Grid>
        <Grid item style={{ maxWidth: "30rem" }}>
          <TextField
          required
            color="secondary"
            variant="filled"
            multiline
            rows={6}
            value={message}
            id="messages"
            onChange={onChange}
            className={(classes.textField, classes.message)}
            InputProps={{ disableUnderline: true }}
            error={messageHelper.length !==0}
            helperText={messageHelper}
          />
        </Grid>
        <Grid item container style={{ marginTop: "2em" }}>
          <Grid item className={classes.button}>
            <Button varient="contained" disableRipple type="submit">
              Create
            </Button>
          </Grid>
          <Grid item className={classes.button} style={{ marginLeft: "5em" }}>
            <Button varient="contained" disableRipple>
              Reset
            </Button>
          </Grid>
          
        </Grid>
        </form>
      </Grid>

      <Grid item container className={classes.background} lg={8}></Grid>
    </Grid>
  );
}
