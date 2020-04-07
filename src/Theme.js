// import { createMuiTheme } from '@material-ui/core/styles';
// import React from "react";
// const Theme = createMuiTheme({
//     palette: {
//         primary: "#151723",
//       type: 'dark',
//     },
//   });
//   export default Theme;
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    
    primary: {
      light: '#3b3d4b',
      main: '#151723',
      dark: '#000000',
      contrastText: '#fff',

    },
    
    secondary: {
      light: '#73fd61',
      main: '#33c92d',
      dark: '#009700',
      contrastText: '#000',
    },
    type:'dark',
background:{
paper: "#151723",
default:"#151723"
},
  },
  typography:{
    tab:{
      fontFamily:"Railway",
fontWeight:300,
fontSize:"1rem",
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#73fd61",
        fontSize: "1rem",
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
    },
    MuiInput: {
      underline: {
        // "&:before": {
        //   borderBottom: ` 2px solid $("#73fd61")`,
        // },
        // "&:hover:not($disabled):not($focused):not($error):before": {
        //   borderBottom: ` 2px solid $("#33c92d")`,
        // },
           color: 'white',//input color focus of not  
          // backgroundColor:"grey",//background color of whole input 
          '&:hover:not($disabled):after': {
            // backgroundColor: 'grey',//its when its hover and input is focused 
             borderBottom: ` 2px solid $("#73fd61")`,
          },
          '&:hover:not($disabled):before': {
            // backgroundColor: 'yellow',//its when you hover and input is not foucused 
            // borderBottom: ` 2px solid $("#73fd61")`,
          },
          '&:after': {
            // backgroundColor: 'blue',//when input is focused, Its just for example. Its better to set this one using primary color
            borderBottom: ` 2px solid $("#33c92d")`
          },
          '&:before': {
            // backgroundColor: 'red',// when input is not touched
            borderBottom: ` 2px solid $("#33c92d")`
          },
        },
        
      },
    },
  },

);
console.log(theme);

export default  theme;

