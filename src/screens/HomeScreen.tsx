import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

interface Props {

}

const HomeScreen = (props: Props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "column" }}>

            <div>
                <Typography variant="h3">Hello There,</Typography>
                <Typography variant="h4">how can we help you?</Typography>
            </div>


            <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
                <div style={{ padding: 10 }}>
                    <Link to={"/support"}>
                        <Button variant="contained" color="primary" >
                            I need Support
                    </Button>
                    </Link>
                </div>
                <div style={{ padding: 10 }}>
                    <Link to={"/privacy"}>
                        <Button variant="contained" color="primary">
                            Look at the Privacy statement
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
