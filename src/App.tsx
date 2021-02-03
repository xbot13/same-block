import './App.css';
import React, { useState, useMemo } from 'react';
import IOSSwitch from './components/IOSSwitch'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";
import PrivacyScreen from './screens/PrivacyScreen';
import SupportScreen from './screens/SupportScreen';
import { AppBar, Box, Grid, Typography, Toolbar, CssBaseline, Button, Container, Tabs, Tab } from '@material-ui/core';
import HomeScreen from './screens/HomeScreen';
import { Logo } from './Logo'

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


  const UiTheme = createMuiTheme({
    palette: {
      type: theme ? "dark" : "light",
      primary: {
        main: theme ? color.yellow : color.indigo,
      },
      secondary: {
        main: theme ? color.wine : color.orange,
      },
      background: {
        default: theme ? color.blue : color.meringue
      },
      text: {
        primary: theme ? color.meringue : color.indigo,
        secondary: theme ? color.meringue : color.indigo,
        disabled: theme ? color.wine : color.wine
      }
    },
  })

  const a11yProps = (index: any) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <ThemeProvider theme={UiTheme}>
      <Router >
        <CssBaseline />


        {/* <Nav {...{ theme, setTheme }} /> */}
        <div className="App">
          <div className="Header" style={{ backgroundColor: theme ? color.wine : color.orange }}>



            <div className="Logo">
              <Logo light={!theme} height={"auto"} width={"90%"} />
              <Typography variant="h4" style={{ transform: "translate(-50%, 0);" }}>SAME BLOCKS</Typography>
            </div>

            <div className="Taps">
              <NavLink to={"/"} exact className="Tab" ><Button>Home</Button></NavLink>
              <NavLink to={"/support"} className="Tab" ><Button>Support</Button></NavLink>
              <NavLink to={"/privacy"} className="Tab" ><Button>Privacy</Button></NavLink>
            </div>




          </div>


          <div className="Content">
            <div style={{ position: "absolute", top: "2em", right: "2em" }}>
              <IOSSwitch checked={theme} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTheme(!theme)} />
            </div>
            <Route exact={true} path={"/"} component={HomeScreen} />

            <Route path={"/privacy"} component={PrivacyScreen} />
            <Route path={"/support"} component={SupportScreen} />

          </div>
        </div>


      </Router>
    </ThemeProvider>
  );
}

export default App;
