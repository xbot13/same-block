import React from 'react'
import TextField from '@material-ui/core/TextField';


interface Props {

}

const SupportScreen = (props: Props) => {
    return (
        <div>
            <TextField label="E-Mail" variant="outlined" />
            <TextField label="Question" variant="outlined" />
            <TextField label="Other" variant="outlined" />
        </div>
    )
}

export default SupportScreen
