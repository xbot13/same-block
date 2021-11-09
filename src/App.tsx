import './App.css';
import React, { useRef, useState } from 'react';
import IOSSwitch from './components/IOSSwitch'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import PrivacyScreen from './screens/PrivacyScreen';
import SupportScreen from './screens/SupportScreen';
import { Typography, CssBaseline, Button } from '@material-ui/core';
import HomeScreen from './screens/HomeScreen';
import { Logo } from './Logo'
import StoreScreen from './screens/StoreScreen';

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
  const [page, setPage] = useState<"home"|"priv"|"sup"|"app">("home")

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

  const home = useRef<HTMLDivElement>(null!)
  const sup = useRef<HTMLDivElement>(null!)
  const priv = useRef<HTMLDivElement>(null!)

  return (
    <ThemeProvider theme={UiTheme}>

      <CssBaseline />


      {/* <Nav {...{ theme, setTheme }} /> */}
      <div className="App">
        <div className="Header" style={{ backgroundColor: theme ? color.wine : color.orange }}>



          <div className="Logo">
            <Logo light={!theme} height={"auto"} width={"90%"} />
            <Typography variant="h4" style={{ transform: "translate(-50%, 0);" }}>SAME BLOCKS</Typography>
          </div>

          <div className="Taps">

            <Button 
              onClick={() => {
                setPage("home")
                home.current.scrollIntoView()
              }}> 
              Home
            </Button>

            <Button 
              onClick={() => {
                sup.current.scrollIntoView()
                }}>
                  Support
            </Button>


            <Button 
              onClick={() => {
                priv.current.scrollIntoView()
                }}>
                  Privacy
            </Button>

          </div>




        </div>


        <div className="View">
          <div style={{ position: "absolute", top: "2em", right: "2em" }}>
            <IOSSwitch checked={theme} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTheme(!theme)} />
          </div>

          <div className="Content">
            <div className="screen" ref={home}>
              <HomeScreen priv={priv} sup={sup} />
            </div>

            <div className="screen" ref={priv} id="privacypolicy">
              <PrivacyScreen />
            </div>

            <div className="screen" ref={sup} id="support">
              <SupportScreen />
            </div>

            <div className="screen" ref={sup} id="store">
              <StoreScreen />
            </div>
          </div>

        </div>
      </div>



    </ThemeProvider>
  );
}

export default App;
