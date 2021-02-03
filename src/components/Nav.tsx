import React from 'react'
import IOSSwitch from './IOSSwitch'
import { Link } from "react-router-dom";
import { Button, Grid } from '@material-ui/core';

interface Props {
    theme: boolean,
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ theme, setTheme }: Props) => {
    return (
        <Grid container>

            <Grid item xs={12} sm={3}>
                <Link to={"/"}><Button>Home</Button></Link>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Link to={"/support"}><Button>Support</Button></Link>
            </Grid>

            <Grid item xs={12} sm={3}>

                <Link to={"/privacy"}><Button>Privacy</Button></Link>

            </Grid>

            <Grid item xs={12} sm={3}>
                <IOSSwitch className="switch" checked={theme} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTheme(!theme)} />
            </Grid>
        </Grid>
    )
}

export default Nav
