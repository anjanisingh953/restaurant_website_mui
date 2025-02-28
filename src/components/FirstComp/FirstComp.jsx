import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import { Add } from '@mui/icons-material';

const compStyle = {
    box: {
        marginTop: '130px',
        backgroundColor: 'rgba(0, 0, 255, 0.7)',
        boxShadow: '4px 2px 10px grey',
        minHeight: '500px',
        borderRadius: '10px',
        position: 'relative',

    },
    button: {
        width: '120px',
        height: '120px',
        position: 'absolute',
        marginLeft: '44%',
        marginTop: '-50px',
        zIndex: '1',
        backgroundColor: 'orange',
        // m: '50px',
        p: '40px',
        border: '2px dotted grey',
        borderRadius: '50%'
    }
}

const FirstComp = () => {
    return (
        <>
            <Container>
                <Box sx={compStyle.box}>
                    <Button
                        sx={compStyle.button}
                        component="label"
                        variant="outlined"
                        tabIndex={-1}
                        // centerIcon={}
                        size={"md"}
                    >
                        <Add sx={{ color: '#000', fontSize: '40px', fontWeight: 'bold' }} />
                        <TextField
                            sx={{ display: 'none' }}
                            type="file"
                            onChange={(event) => console.log(event.target.files)}
                        />
                    </Button>

                </Box>
            </Container>
        </>
    )
}

export default FirstComp
