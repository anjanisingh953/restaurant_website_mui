import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/CalculatorStyles.css';
import { Box, Divider, Typography } from '@mui/material'

const Calculator = () => {
    const [inputdata, setInputData] = useState(0);


    return (
        <Layout>
            <Box sx={{
                boxShadow: '3px 1px 6px grey',
                borderRadius: '5px',
                maxWidth: '500px',
                minHeight: '50vh',
                margin: '50px auto',
            }}
                component={"div"}
            >
                <Typography sx={{ textAlign: 'center', py: 0.5, fontSize: "24px", fontWeight: "bold" }} component='h1'>Calculator</Typography>
                <Divider />
                <Typography sx={{ textAlign: 'right', px: 2, fontSize: "24px", fontWeight: "bold" }} component='h1'>{inputdata}</Typography>

                <Box sx={{ cursor: "pointer", py: "20px", display: 'flex', justifyContent: "space-around", color: '#ff4b00' }}>
                    <Typography fontWeight={"bold"}>AC</Typography>
                    <Typography fontWeight={"bold"}>del</Typography>
                    <Typography fontWeight={"bold"}>%</Typography>
                    <Typography fontWeight={"bold"}>/</Typography>
                </Box>
                <Box sx={{ cursor: "pointer", py: "20px", display: 'flex', justifyContent: "space-around" }}>
                    <Typography fontWeight={"bold"}>7</Typography>
                    <Typography fontWeight={"bold"}>8</Typography>
                    <Typography fontWeight={"bold"}>9</Typography>
                    <Typography fontWeight={"bold"} color='#ff4b00'>x</Typography>
                </Box>
                <Box sx={{ cursor: "pointer", py: "20px", display: 'flex', justifyContent: "space-around" }}>
                    <Typography fontWeight={"bold"}>4</Typography>
                    <Typography fontWeight={"bold"}>5</Typography>
                    <Typography fontWeight={"bold"}>6</Typography>
                    <Typography fontWeight={"bold"} fontSize={"18px"} color='#ff4b00'>-</Typography>
                </Box>
                <Box sx={{ cursor: "pointer", py: "20px", display: 'flex', justifyContent: "space-around" }}>
                    <Typography fontWeight={"bold"}>1</Typography>
                    <Typography fontWeight={"bold"}>2</Typography>
                    <Typography fontWeight={"bold"}>3</Typography>
                    <Typography fontWeight={"bold"} color='#ff4b00'>+</Typography>
                </Box>
                <Box sx={{ cursor: "pointer", py: "20px", display: 'flex', justifyContent: "space-around" }}>
                    <Typography fontWeight={"bold"}>C</Typography>
                    <Typography fontWeight={"bold"}>0</Typography>
                    <Typography fontWeight={"bold"}>.</Typography>
                    <Typography fontWeight={"bold"} color='#ff4b00'>=</Typography>
                </Box>
            </Box>


        </Layout >
    )
}

export default Calculator
