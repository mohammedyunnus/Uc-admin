import React, { Fragment } from "react";
 import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
// import SideBar from "./components/SideBar"
import theme from "./Theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>

        <Router>
         
          <Header />
         
        </Router>
       
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

