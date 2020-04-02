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
});
console.log(theme);

export default  theme;

