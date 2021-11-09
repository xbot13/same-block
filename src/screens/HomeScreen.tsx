import React from 'react'
import { Typography, Button } from '@material-ui/core';

interface Props {
    priv: React.MutableRefObject<HTMLDivElement>,
    sup: React.MutableRefObject<HTMLDivElement>,
}

const HomeScreen = ({ priv, sup }: Props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "column" }}>

            <div>
                <Typography variant="h3">Hello There,</Typography>
                <Typography variant="h4">how can we help you?</Typography>
            </div>


            <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
                <div style={{ padding: 10 }}>

                    <Button onClick={() => sup?.current.scrollIntoView()} variant="contained" color="primary" >
                        I need Support
                    </Button>

                </div>
                <div style={{ padding: 10 }}>

                    <Button onClick={() => priv?.current.scrollIntoView()} variant="contained" color="primary" >
                        Look at the Privacy statement
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default HomeScreen
