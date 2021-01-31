import './App.css';
import Button from '@material-ui/core/Button';
import React, { useState, useMemo } from 'react';
import IOSSwitch from './IOSSwitch'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivacyScreen from './screens/PrivacyScreen';
import SupportScreen from './screens/SupportScreen';
import Nav from './components/Nav';


const color = {
  blue: "#00293D",
  indigo: "#004266",
  wine: "#6b2c39",
  red: "#d62828",
  orange: "#f77f00",
  yellow: "#fcbf49",
  meringue: "#eae2b7"
}


function App() {

  const [theme, setTheme] = useState(false)

  const UiTheme = useMemo(
    () => createMuiTheme({
      palette: {
        type: theme ? "dark" : "light",
        primary: {
          light: color.indigo,
          main: color.indigo,
          dark: color.yellow
        },
        secondary: {
          light: color.orange,
          main: color.orange,
          dark: color.wine
        },
        info: {
          light: color.orange,
          main: color.orange,
          dark: color.wine
        },
        background: {
          default: theme ? color.blue : color.meringue
        },
        text: {
          primary: theme ? color.yellow : color.blue,
          secondary: theme ? color.meringue : color.indigo,
          disabled: theme ? color.wine : color.wine
        }
      },
    }),
    [theme]
  );

  return (
    <ThemeProvider theme={UiTheme}>
      <Router >
        <CssBaseline />

        <Nav />



        <Route exact={true} path={"/"} render={() => (<>
          <span>Hello There,</span>
          <span>how can we help you?</span>

          <Link to={"/support"}>
            <Button variant="contained" color="primary" >
              I need Support
          </Button>
          </Link>

          <Link to={"/privacy"}>
            <Button variant="contained" color="primary">
              I want to have a look at your Datapolicy
          </Button>
          </Link>
        </>
        )} />


        <Route path={"/privacy"} component={PrivacyScreen} />
        <Route path={"/support"} component={SupportScreen} />


        <IOSSwitch className="switch" checked={theme} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTheme(!theme)} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
