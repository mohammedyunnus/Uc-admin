import React, { Fragment } from "react";
 import Header from "../src/components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
// import SideBar from "./components/SideBar"
import Theme from "../src/Theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>

        <Router>
         
          <Header />
         
        </Router>
       
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

